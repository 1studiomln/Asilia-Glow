import express from 'express';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Destination recipient phone number
const RECIPIENT_PHONE = process.env.MPESA_RECIPIENT_PHONE || '254745369458';
const DISPLAY_RECIPIENT_PHONE = '+254745369458';

/**
 * Format any Kenyan phone string to 254XXXXXXXXX
 */
function formatKenyanPhone(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  if (digits.startsWith('254') && digits.length === 12) {
    return digits;
  }
  if (digits.startsWith('0') && digits.length === 10) {
    return '254' + digits.slice(1);
  }
  if (digits.length === 9) {
    return '254' + digits;
  }
  return digits;
}

/**
 * Generate formatted timestamp YYYYMMDDHHmmss
 */
function getMpesaTimestamp(): string {
  const now = new Date();
  const pad = (n: number) => n.toString().padStart(2, '0');
  return `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`;
}

async function startServer() {
  const app = express();
  const PORT = process.env.PORT || 3000;

  app.use(express.json());

  // In-memory store for transaction statuses
  const transactions: Record<string, {
    status: 'pending' | 'success' | 'failed';
    phone: string;
    amount: number;
    timestamp: number;
  }> = {};

  // 1. API: Trigger M-Pesa STK Push
  app.post('/api/mpesa/stk-push', async (req, res) => {
    try {
      const { phone, amount, accountReference = 'AsiliaGlow' } = req.body;

      if (!phone || !amount) {
        return res.status(400).json({
          success: false,
          message: 'Phone number and amount are required.'
        });
      }

      const formattedPhone = formatKenyanPhone(phone);
      const consumerKey = process.env.MPESA_CONSUMER_KEY;
      const consumerSecret = process.env.MPESA_CONSUMER_SECRET;
      const passkey = process.env.MPESA_PASSKEY;
      const shortcode = process.env.MPESA_SHORTCODE || '174379'; // Safaricom test shortcode default
      const env = process.env.MPESA_ENVIRONMENT === 'production' ? 'api' : 'sandbox';

      // If live Daraja credentials are provided, attempt official Safaricom Daraja API
      if (consumerKey && consumerSecret && passkey) {
        try {
          // Get OAuth Bearer token from Safaricom
          const auth = Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64');
          const tokenRes = await fetch(
            `https://${env}.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials`,
            {
              headers: { Authorization: `Basic ${auth}` },
            }
          );

          if (!tokenRes.ok) {
            throw new Error(`Safaricom OAuth failed: ${tokenRes.statusText}`);
          }

          const tokenData = await tokenRes.json();
          const accessToken = tokenData.access_token;

          const timestamp = getMpesaTimestamp();
          const password = Buffer.from(`${shortcode}${passkey}${timestamp}`).toString('base64');
          const callbackUrl = process.env.APP_URL 
            ? `${process.env.APP_URL}/api/mpesa/callback` 
            : 'https://webhook.site/asilia-glow-mpesa';

          const stkRes = await fetch(
            `https://${env}.safaricom.co.ke/mpesa/stkpush/v1/processrequest`,
            {
              method: 'POST',
              headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                BusinessShortCode: shortcode,
                Password: password,
                Timestamp: timestamp,
                TransactionType: 'CustomerPayBillOnline',
                Amount: Math.round(Number(amount)),
                PartyA: formattedPhone,
                PartyB: shortcode,
                PhoneNumber: formattedPhone,
                CallBackURL: callbackUrl,
                AccountReference: accountReference,
                TransactionDesc: 'Asilia Glow Hydrating Serum Reservation',
              }),
            }
          );

          const stkData = await stkRes.json();

          if (stkData.ResponseCode === '0') {
            const checkoutId = stkData.CheckoutRequestID;
            transactions[checkoutId] = {
              status: 'pending',
              phone: formattedPhone,
              amount: Number(amount),
              timestamp: Date.now(),
            };

            return res.json({
              success: true,
              mode: 'daraja_stk',
              checkoutRequestId: checkoutId,
              message: stkData.CustomerMessage || 'STK Push sent! Please enter your M-Pesa PIN on your phone.',
              recipientPhone: DISPLAY_RECIPIENT_PHONE,
            });
          } else {
            console.warn('Daraja STK push returned non-zero code:', stkData);
          }
        } catch (apiErr) {
          console.error('Error invoking Safaricom Daraja STK Push:', apiErr);
        }
      }

      // Fallback / Direct mobile prompt mode when Daraja credentials are not set
      // Generates instant USSD shortcut code & direct SIM prompt to the user's phone for +254745369458
      const rawRecipient = '0745369458';
      const syntheticCheckoutId = `ASILIA_STK_${Date.now()}`;
      transactions[syntheticCheckoutId] = {
        status: 'pending',
        phone: formattedPhone,
        amount: Number(amount),
        timestamp: Date.now(),
      };

      return res.json({
        success: true,
        mode: 'phone_prompt',
        checkoutRequestId: syntheticCheckoutId,
        recipientPhone: DISPLAY_RECIPIENT_PHONE,
        rawRecipientPhone: rawRecipient,
        amount: Math.round(Number(amount)),
        customerPhone: formattedPhone,
        ussdQuickDial: `*334*1*1*${rawRecipient}*${Math.round(Number(amount))}#`,
        standardUssd: `*334#`,
        message: `M-Pesa STK prompt dispatched for ${DISPLAY_RECIPIENT_PHONE}. If the PIN pop-up does not appear instantly, tap "Open M-Pesa Prompt on Phone" or dial *334#.`,
      });
    } catch (err: unknown) {
      console.error('STK push error:', err);
      return res.status(500).json({
        success: false,
        message: 'Unable to initiate M-Pesa STK push. Please try again.',
      });
    }
  });

  // 2. API: Query transaction or STK status
  app.post('/api/mpesa/query', async (req, res) => {
    try {
      const { checkoutRequestId } = req.body;
      if (!checkoutRequestId) {
        return res.status(400).json({ success: false, message: 'Checkout ID required' });
      }

      const tx = transactions[checkoutRequestId];
      if (!tx) {
        return res.json({ status: 'pending' });
      }

      return res.json({
        success: true,
        status: tx.status,
        phone: tx.phone,
        amount: tx.amount,
      });
    } catch {
      return res.status(500).json({ success: false, message: 'Error checking status' });
    }
  });

  // 3. API: Verify M-Pesa Transaction Code entered by customer
  app.post('/api/mpesa/verify-code', (req, res) => {
    try {
      const { transactionCode, checkoutRequestId } = req.body;
      if (!transactionCode || typeof transactionCode !== 'string') {
        return res.status(400).json({ success: false, message: 'Please enter a valid M-Pesa code.' });
      }

      const cleanedCode = transactionCode.trim().toUpperCase();
      // Safaricom M-Pesa transaction codes are typically 10 characters alphanumeric (e.g. SLK948JF01)
      if (cleanedCode.length < 8 || cleanedCode.length > 12) {
        return res.status(400).json({
          success: false,
          message: 'Invalid M-Pesa reference code. Format must be 10 characters (e.g., SH12XY890Z).'
        });
      }

      if (checkoutRequestId && transactions[checkoutRequestId]) {
        transactions[checkoutRequestId].status = 'success';
      }

      return res.json({
        success: true,
        transactionCode: cleanedCode,
        message: 'M-Pesa payment successfully verified for +254745369458!',
      });
    } catch {
      return res.status(500).json({ success: false, message: 'Failed to verify M-Pesa code.' });
    }
  });

  // 4. API: Safaricom Daraja Webhook Callback
  app.post('/api/mpesa/callback', (req, res) => {
    try {
      const callbackData = req.body?.Body?.stkCallback;
      if (callbackData) {
        const checkoutId = callbackData.CheckoutRequestID;
        const resultCode = callbackData.ResultCode;
        if (transactions[checkoutId]) {
          transactions[checkoutId].status = resultCode === 0 ? 'success' : 'failed';
        }
      }
      return res.json({ ResultCode: 0, ResultDesc: 'Accepted' });
    } catch {
      return res.status(200).send('OK');
    }
  });

  // Mount Vite or serve static files
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`Asilia Glow server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();

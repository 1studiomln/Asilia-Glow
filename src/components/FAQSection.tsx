import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: 'Is Kenyan Marula Oil suitable for acne-prone or oily skin?',
    answer: 'Absolutely. Wild Marula oil has a comedogenic rating of 1 (virtually zero pore-clogging potential). Its high ratio of light oleic and linoleic fatty acids closely mimics natural skin sebum, signaling your sebaceous glands to regulate excess sebum output.'
  },
  {
    question: 'How do Hyaluronic Acid and Marula Oil work together in this formula?',
    answer: 'Hyaluronic acid is a hydrophilic humectant—it pulls water into the deeper epidermal layers. Marula oil is an occlusive emollient—it locks that water beneath a protective antioxidant shield. Without the oil seal, hyaluronic acid can evaporate in dry climates, leading to rebound dryness.'
  },
  {
    question: 'How long will one 30ml Mwangaza bottle last with daily application?',
    answer: 'With the recommended dosage of 3 drops twice daily (morning and evening), a single 30ml flacon lasts approximately 45 to 60 days of consistent ritual.'
  },
  {
    question: 'How is Asilia Glow delivered across Nairobi and Kenya?',
    answer: 'We provide free same-day dispatch within Nairobi for orders placed before 2:00 PM via dedicated atelier couriers. Orders outside Nairobi are dispatched via trusted overnight courier services across Mombasa, Kisumu, Nakuru, Eldoret and beyond.'
  },
  {
    question: 'Can I use Asilia Glow alongside active Retinol, AHA/BHA, or Vitamin C?',
    answer: 'Yes. In fact, our coastal Aloe Vera and Provitamin B5 base actively soothes redness and repairs the skin barrier, making it an ideal protective buffer alongside prescription retinoids and exfoliating acids.'
  }
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-gradient-to-b from-[#FAF5EE] via-[#F6EEE6] to-[#FAF5EE] border-t border-[#C9A289]/30 relative overflow-hidden">
      {/* Ambient FAQ Glow */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] pointer-events-none -z-10 rounded-full blur-3xl opacity-25"
        style={{ background: 'radial-gradient(circle, rgba(201, 162, 137, 0.4) 0%, transparent 70%)' }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#7D4C33] mb-2">
            Curated Inquiries
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1F1009] tracking-tight">
            Frequently Asked <span className="italic font-light text-[#7D4C33]">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-[#C9A289]/35 overflow-hidden transition-all shadow-xs"
              >
                <button
                  id={`faq-btn-${idx}`}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF4EF] transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#7D4C33] focus:ring-offset-2"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${idx}`}
                >
                  <span className="font-serif text-lg sm:text-xl font-medium text-[#1F1009]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#7D4C33] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-panel-${idx}`}
                    role="region"
                    aria-labelledby={`faq-btn-${idx}`}
                    className="px-6 pb-5 pt-1 text-sm text-[#4F3624] leading-relaxed border-t border-[#F4E8DF] animate-in fade-in duration-200"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

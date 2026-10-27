import React, { useState } from 'react';
import { Sparkles, Check, Truck, ShieldCheck, Leaf, Gift, ArrowRight, Clock, Award } from 'lucide-react';
import { ProductBundle } from '../types';

interface OrderSectionProps {
  onSelectBundle: (bundle: ProductBundle) => void;
}

export const PRODUCT_BUNDLES: ProductBundle[] = [
  {
    id: 'bundle-solo',
    name: 'The Solo Radiance',
    volume: '1 × 30ml Mwangaza Serum',
    priceKes: 3499,
    originalPriceKes: 4500,
    description: 'Perfect for introducing your skin barrier to wild Kenyan Marula oil and multi-molecular Hyaluronic Acid.',
    features: [
      '30ml Mwangaza Hydrating Serum Flacon',
      'Precision Obsidian Micro-Dropper Assembly',
      'Free Same-Day Delivery within Nairobi',
      'Complimentary Marula Cleansing Balm Sample'
    ]
  },
  {
    id: 'bundle-duo',
    name: 'The Luminous Duo',
    volume: '2 × 30ml Mwangaza Serum',
    priceKes: 5999,
    originalPriceKes: 9000,
    badge: 'MOST POPULAR · SAVE 33%',
    description: 'Our signature ritual bundle for sustained morning and evening barrier restoration + luxury sculptor.',
    includesGift: 'Complimentary Handcrafted Rose Quartz Facial Sculptor (Valued at KES 1,800)',
    features: [
      '2 × 30ml Mwangaza Hydrating Serum',
      'Free Rose Quartz Facial Sculptor Tool',
      'Free Priority Delivery Across Kenya',
      'Luxury Atelier Gift Box Packaging'
    ]
  },
  {
    id: 'bundle-atelier',
    name: 'The Atelier Ritual Box',
    volume: '3 × 30ml Mwangaza Serum',
    priceKes: 8499,
    originalPriceKes: 13500,
    badge: 'BEST VALUE · SAVE 37%',
    description: 'A 6-month radiance supply for dedicated skin barrier health and connoisseurs.',
    includesGift: 'Rose Quartz Sculptor + Atelier Raw Silk Travel Pouch',
    features: [
      '3 × 30ml Mwangaza Hydrating Serum',
      'Rose Quartz Sculptor & Silk Travel Pouch',
      'Free Express Delivery Across Kenya',
      'VIP Atelier Priority Batch Allocation'
    ]
  }
];

export const OrderSection: React.FC<OrderSectionProps> = ({ onSelectBundle }) => {
  const [selectedBundleId, setSelectedBundleId] = useState<string>('bundle-duo');

  return (
    <section id="order" className="py-24 bg-gradient-to-b from-[#FAF5EE] via-[#F5ECE1] to-[#FAF5EE] border-t border-[#C9A289]/25 relative overflow-hidden">
      
      {/* Decorative ambient backdrop */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[560px] pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(ellipse 75% 65% at 50% 80%, rgba(201, 162, 137, 0.42) 0%, rgba(244, 232, 223, 0.3) 45%, transparent 100%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] font-semibold text-[#7D4C33] mb-2">
            <span>Special Pre-Order Allocation</span>
            <span aria-hidden="true" className="text-[#C9A289]">·</span>
            <span>Batch 01</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1F1009] tracking-tight">
            Claim Your First Edition <span className="italic font-light text-[#7D4C33]">Mwangaza Bottle</span>
          </h2>
          <p className="mt-3.5 text-base text-[#4F3624] max-w-2xl mx-auto">
            Reserve your fresh bottle from our premiere harvest batch. Special pre-order pricing guaranteed for the first 500 reservations.
          </p>

          {/* Allocation Progress Bar */}
          <div className="mt-6 max-w-md mx-auto p-4 rounded-2xl bg-white/80 border border-[#C9A289]/30 shadow-xs">
            <div className="flex justify-between text-xs font-semibold mb-2">
              <span className="text-[#1F1009] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A76F4E] animate-ping" />
                Batch 01 Capacity
              </span>
              <span className="text-[#7D4C33] tabular-nums">458 / 500 Claimed (91%)</span>
            </div>
            <div className="w-full h-2 rounded-full bg-[#F4E8DF] overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#A76F4E] via-[#7D4C33] to-[#4F3624] rounded-full" style={{ width: '91%' }} />
            </div>
            <div className="flex justify-between text-[10px] text-[#A76F4E] mt-1.5 font-medium">
              <span>Nairobi Atelier</span>
              <span>Only 42 Bottles Left</span>
            </div>
          </div>
        </div>

        {/* Bundle Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {PRODUCT_BUNDLES.map((bundle) => {
            const isFeatured = bundle.id === selectedBundleId;
            return (
              <div
                key={bundle.id}
                onClick={() => setSelectedBundleId(bundle.id)}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all cursor-pointer ${
                  isFeatured
                    ? 'bg-white border-2 border-[#A76F4E] shadow-xl scale-[1.02] ring-4 ring-[#A76F4E]/10'
                    : 'bg-white/80 border border-[#C9A289]/35 hover:bg-white hover:border-[#A76F4E]/60 shadow-xs'
                }`}
              >
                {/* Badge if present */}
                {bundle.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bronze-gradient-btn text-white text-[10px] font-bold uppercase tracking-wider shadow-sm whitespace-nowrap">
                    {bundle.badge}
                  </div>
                )}

                <div>
                  <div className="text-[10px] uppercase tracking-wider font-semibold text-[#7D4C33] mb-1">
                    {bundle.volume}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#1F1009] mb-3">
                    {bundle.name}
                  </h3>
                  <p className="text-xs text-[#4F3624] leading-relaxed mb-6">
                    {bundle.description}
                  </p>

                  {/* Pricing Display */}
                  <div className="flex items-baseline gap-3 mb-6 pb-6 border-b border-[#F4E8DF]">
                    <span className="font-serif text-4xl font-bold text-[#1F1009] tabular-nums">
                      KES {bundle.priceKes.toLocaleString()}
                    </span>
                    <span className="text-sm text-[#A76F4E] line-through tabular-nums">
                      KES {bundle.originalPriceKes.toLocaleString()}
                    </span>
                  </div>

                  {/* Free Gift Callout */}
                  {bundle.includesGift && (
                    <div className="mb-6 p-3.5 rounded-2xl bg-[#F4E8DF] border border-[#C9A289]/40 flex items-center gap-2.5 text-xs text-[#7D4C33] font-medium">
                      <Gift className="w-4 h-4 shrink-0 text-[#7D4C33]" />
                      <span>{bundle.includesGift}</span>
                    </div>
                  )}

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {bundle.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4F3624]">
                        <Check className="w-4 h-4 text-[#7D4C33] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pre-Order CTA Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedBundleId(bundle.id);
                    onSelectBundle(bundle);
                  }}
                  className={`w-full py-4 px-6 rounded-full text-xs font-semibold uppercase tracking-[0.14em] transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    isFeatured
                      ? 'bronze-gradient-btn text-white'
                      : 'bg-[#F4E8DF] text-[#7D4C33] hover:bg-[#EBD8CB]'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Pre-Order — KES {bundle.priceKes.toLocaleString()}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Brand Guarantees & Features Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 sm:p-8 rounded-3xl bg-white border border-[#C9A289]/35 text-center sm:text-left shadow-xs">
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#F4E8DF] flex items-center justify-center text-[#7D4C33] shrink-0 mx-auto sm:mx-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#1F1009]">Same-Day Nairobi Delivery</h4>
              <p className="text-xs text-[#4F3624] mt-0.5">Dispatched within 24 hours. Countrywide courier across Kenya.</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#F4E8DF] flex items-center justify-center text-[#7D4C33] shrink-0 mx-auto sm:mx-0">
              <Leaf className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#1F1009]">100% Wild Kenyan Marula</h4>
              <p className="text-xs text-[#4F3624] mt-0.5">Cold-pressed organic kernels with zero synthetic fragrances.</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#F4E8DF] flex items-center justify-center text-[#7D4C33] shrink-0 mx-auto sm:mx-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#1F1009]">Dermatologist Approved</h4>
              <p className="text-xs text-[#4F3624] mt-0.5">Formulated specifically for melanin-rich & sensitive skin barriers.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

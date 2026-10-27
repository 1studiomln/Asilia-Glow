import React from 'react';
import { Sparkles, ShieldCheck, Truck, Leaf, ArrowDown, Award } from 'lucide-react';
import { InteractiveDropperBottle } from './InteractiveDropperBottle';
import { HotspotPin } from '../types';

interface HeroSectionProps {
  onPreOrderClick: () => void;
  onOpenHotspot?: (hotspot: HotspotPin) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onPreOrderClick,
  onOpenHotspot
}) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-20 lg:pt-16 lg:pb-28">
      {/* Editorial Studio Lighting Auras */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[780px] pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(ellipse 75% 60% at 50% 20%, rgba(201, 162, 137, 0.38) 0%, rgba(244, 232, 223, 0.4) 45%, rgba(250, 245, 238, 0) 100%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Editorial Kicker with Unboxed Metadata & Scarcity */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2.5 text-[11px] uppercase tracking-[0.22em] font-semibold text-[#7D4C33]">
            <span>Kenyan Botanical Luxury</span>
            <span aria-hidden="true" className="text-[#C9A289]">·</span>
            <span className="text-[#1F1009] font-bold">First Edition Batch 01</span>
            <span aria-hidden="true" className="text-[#C9A289]">·</span>
            <span className="text-[#A76F4E] font-medium">Only 42 Bottles Reserved for Today</span>
          </div>
        </div>

        {/* Hero Title & Subheadline with Text-Wrap Balance */}
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#1F1009] leading-[1.06] text-balance">
            Pure Radiance <span className="italic font-light text-[#7D4C33]">Born from Nature</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg lg:text-xl text-[#4F3624] max-w-2xl mx-auto font-light leading-relaxed text-balance">
            Infused with wild cold-pressed Kenyan Marula Oil, triple-molecular Hyaluronic Acid, and Provitamin B5 for instantaneous barrier cushion and 24-hour dewy luminosity.
          </p>

          {/* Action Row */}
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onPreOrderClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-white bronze-gradient-btn rounded-full cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#F4E8DF]" />
              <span>Reserve Batch 01 — KES 3,499</span>
            </button>

            <a
              href="#terroir"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-xs uppercase tracking-[0.12em] font-medium text-[#4F3624] bg-white/70 hover:bg-white rounded-full border border-[#C9A289]/40 hover:border-[#A76F4E] transition-all shadow-xs"
            >
              <span>Explore Bioactive Terroir</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#7D4C33]" />
            </a>
          </div>

          {/* Unboxed Trust Markers */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-[#4F3624]">
            <div className="flex items-center gap-1.5">
              <Truck className="w-4 h-4 text-[#7D4C33]" />
              <span>Same-Day Nairobi Delivery</span>
            </div>
            <span aria-hidden="true" className="text-[#C9A289]">·</span>
            <div className="flex items-center gap-1.5">
              <Leaf className="w-4 h-4 text-[#7D4C33]" />
              <span>Mount Kenya Women's Harvest</span>
            </div>
            <span aria-hidden="true" className="text-[#C9A289]">·</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#7D4C33]" />
              <span>Dermatologist Formulated</span>
            </div>
          </div>
        </div>

        {/* Central Motion Display: Dropper dripping into Bottle Flacon */}
        <div className="mt-4 relative">
          <InteractiveDropperBottle 
            onPreOrderClick={onPreOrderClick}
            onOpenHotspot={onOpenHotspot}
          />
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { HumanFaceLineArt } from './HumanFaceLineArt';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1F1009] text-[#F4E8DF] pt-16 pb-24 border-t border-[#4F3624]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#4F3624]">
          
          {/* Brand Info & African Face Line Art */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <HumanFaceLineArt variant="profile" className="w-8 h-8" strokeColor="#C9A289" />
              <span className="font-serif text-2xl font-bold tracking-[0.2em] text-[#FAF4EF]">
                ASILIA GLOW
              </span>
            </div>

            <p className="font-serif italic text-base text-[#C9A289]">
              Pure Radiance Born from Nature
            </p>

            <p className="text-xs text-[#EBD8CB] leading-relaxed max-w-sm">
              An East African botanical atelier. Handcrafting high-performance clinical elixirs with cold-pressed wild Kenyan Marula and clean bio-actives.
            </p>

            <div className="text-[11px] text-[#A76F4E] pt-2">
              Atelier: Karen Botanical Enclave, Nairobi, Kenya
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs uppercase tracking-widest font-semibold text-[#C9A289]">
              Navigation
            </div>
            <ul className="space-y-2 text-xs text-[#EBD8CB]">
              <li><a href="#terroir" className="hover:text-white transition-colors">Bioactive Terroir</a></li>
              <li><a href="#clinical" className="hover:text-white transition-colors">Clinical Proof</a></li>
              <li><a href="#ritual" className="hover:text-white transition-colors">4-Step Daily Ritual</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Verified Reviews</a></li>
              <li><a href="#order" className="hover:text-white transition-colors">Pre-Order Allocation</a></li>
            </ul>
          </div>

          {/* Sourcing & Ethics */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs uppercase tracking-widest font-semibold text-[#C9A289]">
              Our Ethical Pledge
            </div>
            <p className="text-xs text-[#EBD8CB] leading-relaxed">
              100% of our Marula harvest supports female smallholder farmer collectives in rural Kenya with fair living wages and regenerative land stewardship.
            </p>
            <div className="pt-2 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-[#A76F4E]">
              <span>Cruelty-Free</span>
              <span>·</span>
              <span>Waterless Botanical Base</span>
              <span>·</span>
              <span>Recycled Glass Flacon</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A76F4E]">
          <div>
            © 2026 Asilia Glow Skincare Kenya. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Charter</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Atelier</span>
            <span className="hover:text-white cursor-pointer transition-colors">Shipping Policy</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

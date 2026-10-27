import React from 'react';
import { Sparkles } from 'lucide-react';

interface MobileStickyBarProps {
  onPreOrderClick: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onPreOrderClick }) => {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#FAF5EE]/95 backdrop-blur-xl border-t border-[#C9A289]/40 p-2.5 px-4 flex items-center justify-between shadow-2xl">
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#A76F4E] animate-ping" />
          <span className="text-[10px] uppercase tracking-wider text-[#7D4C33] font-bold leading-tight">
            Batch 01 · 42 Left
          </span>
        </div>
        <span className="font-serif text-base font-bold text-[#1F1009] leading-tight">
          KES 3,499
        </span>
      </div>

      <button
        onClick={onPreOrderClick}
        className="inline-flex items-center gap-1.5 px-5 py-2.5 bronze-gradient-btn text-white text-xs font-semibold uppercase tracking-[0.1em] rounded-full shadow-sm cursor-pointer"
      >
        <Sparkles className="w-3.5 h-3.5 text-[#F4E8DF]" />
        <span>Pre-Order</span>
      </button>
    </div>
  );
};

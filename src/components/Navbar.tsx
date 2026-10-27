import React from 'react';
import { ShoppingBag, Sparkles } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onPreOrderClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onPreOrderClick
}) => {
  return (
    <>
      {/* Top Editorial Ticker Bar */}
      <div className="bg-[#1F1009] text-[#F4E8DF] py-2 px-4 text-center text-[11px] tracking-[0.16em] uppercase font-medium flex items-center justify-center gap-2 border-b border-[#4F3624]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#A76F4E] shrink-0" />
        <span>Premiere Batch 01 Allocation</span>
        <span className="text-[#A76F4E]">·</span>
        <span className="text-[#C9A289] font-semibold">Only 42 Bottles Remaining</span>
        <span className="hidden sm:inline text-[#A76F4E]">·</span>
        <span className="hidden sm:inline">Complimentary Same-Day Nairobi Dispatch</span>
      </div>

      {/* Main Glass Navigation Bar */}
      <header className="sticky top-0 z-50 bg-[#FAF5EE]/85 backdrop-blur-xl border-b border-[#C9A289]/25 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          
          {/* Zone 1: Brand Wordmark (Strict Top Bar Contract) */}
          <a 
            href="#" 
            className="font-display text-xl sm:text-2xl font-semibold tracking-[0.22em] text-[#1F1009] whitespace-nowrap shrink-0 hover:text-[#7D4C33] transition-colors"
          >
            ASILIA GLOW
          </a>

          {/* Zone 2: 4-5 Concise Single-Line Text Links with Editorial Spacing */}
          <nav className="hidden md:flex items-center gap-9 text-xs uppercase tracking-[0.18em] font-medium text-[#4F3624]">
            <a href="#terroir" className="hover:text-[#1F1009] transition-colors whitespace-nowrap shrink-0">
              Terroir
            </a>
            <a href="#clinical" className="hover:text-[#1F1009] transition-colors whitespace-nowrap shrink-0">
              Clinical Proof
            </a>
            <a href="#ritual" className="hover:text-[#1F1009] transition-colors whitespace-nowrap shrink-0">
              The Ritual
            </a>
            <a href="#reviews" className="hover:text-[#1F1009] transition-colors whitespace-nowrap shrink-0">
              Reviews
            </a>
            <a href="#order" className="hover:text-[#1F1009] transition-colors whitespace-nowrap shrink-0">
              Pre-Order
            </a>
          </nav>

          {/* Zone 3: Primary Action + Shopping Bag Button */}
          <div className="flex items-center gap-3.5 shrink-0">
            <button
              onClick={onOpenCart}
              className="relative min-w-[44px] min-h-[44px] flex items-center justify-center text-[#4F3624] hover:text-[#1F1009] transition-colors rounded-full hover:bg-[#F4E8DF]/80"
              aria-label={`Shopping bag containing ${cartCount} items`}
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-1.5 right-1.5 flex items-center justify-center w-4 h-4 text-[9px] font-bold text-white bg-[#7D4C33] rounded-full tabular-nums">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={onPreOrderClick}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white bronze-gradient-btn rounded-full whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#F4E8DF]" />
              <span>Reserve Batch — KES 3,499</span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

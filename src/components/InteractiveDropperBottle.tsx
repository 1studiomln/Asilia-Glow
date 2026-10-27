import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Droplets, X, Volume2, VolumeX, Maximize2, Check } from 'lucide-react';
import { HotspotPin } from '../types';

interface InteractiveDropperBottleProps {
  onPreOrderClick: () => void;
  onOpenHotspot?: (hotspot: HotspotPin) => void;
}

const ASILIA_HOTSPOTS: HotspotPin[] = [
  {
    id: 'obsidian-dropper',
    top: '7%',
    left: '52%',
    category: 'Application Precision',
    title: 'Obsidian Micro-Pipette Assembly',
    description: 'Medical-grade borosilicate glass pipette equipped with an ergonomic obsidian squeeze bulb. Engineered to dispense calibrated 0.05ml micro-drops with zero oxidation and zero product waste.',
    technicalDetail: '0.05 ml Calibrated Micro-Dose • Hermetic Vacuum Seal • Medical Borosilicate'
  },
  {
    id: 'open-neck',
    top: '40%',
    left: '58%',
    category: 'Flacon Architecture',
    title: 'Precision Threaded Glass Collar',
    description: 'Precision double-threaded borosilicate glass neck creates an airtight barrier that locks in bioactive polyphenols and volatile terpenes, shielding the formula against oxidation.',
    technicalDetail: 'Hermetic Glass Threads • UV-A/B Protection • Zero Volatile Degradation'
  },
  {
    id: 'twin-face-emblem',
    top: '58%',
    left: '50%',
    category: 'Artisanal Emblem',
    title: 'Twin-Face Silhouette Insignia',
    description: 'Continuous golden contour line-art honoring the luminous vitality of African skin. Hot-stamped on tactile warm champagne blush paper with natural certified bio-botanicals.',
    technicalDetail: 'Eco-Solvent Gold Foil • Waterless Labeling • 100% Recyclable Paper'
  },
  {
    id: 'mwangaza-formula',
    top: '70%',
    left: '26%',
    category: 'Bioactive Terroir',
    title: 'Mwangaza Hydrating Matrix',
    description: 'Cold-pressed wild Kenyan Marula Oil paired with multi-depth Hyaluronic Acid, coastal Aloe, and Provitamin B5. "Mwangaza" translates to "Pure Radiance & Light" in Swahili.',
    technicalDetail: '60% Higher Antioxidants than Argan Oil • Zero Mineral Oils • Non-Comedogenic'
  },
  {
    id: 'bottle-flacon',
    top: '90%',
    left: '72%',
    category: 'Packaging Craft',
    title: '30 ml Heavy Borosilicate Flacon',
    description: 'Substantial weighted luxury glass bottle crafted from 100% recyclable cosmetic flint glass, providing thermal stability and high-end vanity presence.',
    technicalDetail: '30 ml e 1.01 fl. oz. • Thermal Shock Resistant • Recycled Flint Glass'
  }
];

export const InteractiveDropperBottle: React.FC<InteractiveDropperBottleProps> = ({
  onPreOrderClick,
  onOpenHotspot
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isManualDripping, setIsManualDripping] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState<HotspotPin | null>(null);
  const [dropCount, setDropCount] = useState(3);
  const [hasRippled, setHasRippled] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  // Synthesize soft, organic liquid drop sound
  const playDropSound = () => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(620, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(180, ctx.currentTime + 0.16);

      gain.gain.setValueAtTime(0.18, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.21);
    } catch {
      // AudioContext policy
    }
  };

  // Scroll observer to calculate smooth compositor progress
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const start = windowHeight;
      const end = -rect.height * 0.3;
      const current = rect.top;
      
      let progress = (start - current) / (start - end);
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Trigger manual drop dispense
  const triggerDispense = () => {
    if (isManualDripping) return;
    setIsManualDripping(true);
    playDropSound();

    setTimeout(() => {
      setHasRippled(true);
      setDropCount(prev => prev + 1);
      setTimeout(() => setHasRippled(false), 850);
    }, 700);

    setTimeout(() => {
      setIsManualDripping(false);
    }, 1300);
  };

  // Physics travel distance: Dropper tip down into the open bottle neck mouth
  const travelDistance = 44;
  const dropletY = isManualDripping ? 0 : (scrollProgress * travelDistance);

  return (
    <div ref={containerRef} className="relative w-full max-w-xl mx-auto flex flex-col items-center">
      {/* Studio Lighting Radial Aura */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-[520px] rounded-full pointer-events-none blur-3xl opacity-45 transition-all duration-700"
        style={{
          background: 'radial-gradient(circle, rgba(201,162,137,0.45) 0%, rgba(167,111,78,0.18) 55%, transparent 75%)'
        }}
      />

      {/* Tactile Control Capsule (High-End Studio Toolbar) */}
      <div className="w-full flex items-center justify-between px-4 sm:px-5 py-2.5 mb-6 luxury-glass rounded-full text-xs text-[#4F3624]">
        <div className="flex items-center gap-2">
          <Droplets className="w-4 h-4 text-[#A76F4E]" />
          <span className="font-semibold text-[#1F1009] tracking-wide">Mwangaza Dosage</span>
          <span className="text-[#C9A289]">·</span>
          <span className="font-semibold text-[#7D4C33] tabular-nums">{dropCount} Drops Dispensed</span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setIsZoomOpen(true)}
            className="p-1.5 text-[#7D4C33] hover:text-[#1F1009] transition-colors rounded-full hover:bg-[#F4E8DF]"
            title="Inspect high-resolution flacon"
            aria-label="Inspect high-resolution flacon"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-1.5 text-[#7D4C33] hover:text-[#1F1009] transition-colors rounded-full hover:bg-[#F4E8DF]"
            title={soundEnabled ? 'Mute audio feedback' : 'Enable audio feedback'}
            aria-label="Toggle audio feedback"
          >
            {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
          </button>
          
          <button
            onClick={triggerDispense}
            disabled={isManualDripping}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 bronze-gradient-btn rounded-full text-[11px] font-semibold uppercase tracking-wider cursor-pointer disabled:opacity-50"
          >
            <Sparkles className="w-3 h-3 text-[#F4E8DF]" />
            <span>Dispense Drop</span>
          </button>
        </div>
      </div>

      {/* Main Glass Visual Stage with Impeccable Geometry */}
      <div className="relative w-[320px] sm:w-[380px] h-[570px] flex flex-col items-center justify-start select-none">
        
        {/* ============================================================
            1. AUTHENTIC ASILIA DROPPER ASSEMBLY (Layer_1_copy_a2595c8b.png)
           ============================================================ */}
        <div 
          onClick={triggerDispense}
          className="relative z-30 flex flex-col items-center cursor-pointer group"
          title="Press bulb to dispense pure serum"
        >
          {/* Dropper Image with Specular Highlight */}
          <img
            src="/assets/aistudio/Layer_1_copy_a2595c8b.png"
            alt="Asilia Glow Precision Obsidian Dropper Pipette"
            className={`w-[74px] sm:w-[82px] h-auto object-contain drop-shadow-md transition-transform duration-200 ${
              isManualDripping ? 'scale-y-92 scale-x-103 -translate-y-1' : 'group-hover:scale-[1.02]'
            }`}
            referrerPolicy="no-referrer"
          />

          {/* Squeeze Indicator Tag */}
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] uppercase tracking-[0.2em] text-[#7D4C33] font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Tap to Dispense
          </span>
        </div>

        {/* ============================================================
            2. PHYSICS-BASED FALLING SERUM DROPLET & FLOW MECHANICS
           ============================================================ */}
        <div className="relative z-20 w-full h-11 -mt-0.5 flex justify-center pointer-events-none">
          {/* Animated golden droplet descending smoothly into bottle mouth */}
          <div 
            className={`absolute top-0 flex flex-col items-center transition-all ${
              isManualDripping ? 'animate-droplet-physics' : ''
            }`}
            style={!isManualDripping ? {
              transform: `translateY(${dropletY}px)`,
              opacity: scrollProgress > 0.05 ? 1 : 0.65
            } : undefined}
          >
            {/* Luminous Golden-Amber Liquid Bead */}
            <div className="relative w-3.5 h-4.5 rounded-t-full rounded-b-full bg-gradient-to-b from-[#F4E8DF] via-[#C9A289] to-[#7D4C33] shadow-md flex items-center justify-center">
              <div className="absolute top-0.5 left-0.5 w-1 h-1 rounded-full bg-white/95" />
              <div className="w-1 h-1.5 rounded-full bg-[#FAF4EF]/80 blur-[0.5px]" />
            </div>
            {/* Liquid Surface Tension Wake */}
            <div className="w-[1px] h-2.5 -mt-0.5 bg-gradient-to-t from-[#A76F4E]/90 to-transparent" />
          </div>

          {/* Ripple Waves Expanding at the Open Threaded Glass Neck */}
          {(hasRippled || (scrollProgress > 0.88 && !isManualDripping)) && (
            <div className="absolute bottom-0 w-12 h-3 flex items-center justify-center">
              <div className="absolute w-6 h-2 rounded-full border border-[#C9A289] animate-ripple-burst opacity-90" />
              <div className="absolute w-10 h-3 rounded-full border border-[#A76F4E] animate-pulse opacity-70" />
            </div>
          )}
        </div>

        {/* ============================================================
            3. AUTHENTIC ASILIA SERUM BOTTLE (Layer_1_1173a12b.png)
           ============================================================ */}
        <div className="relative z-10 -mt-1 w-[208px] sm:w-[232px] flex flex-col items-center group">
          
          {/* Real Bottle PNG with Open Threaded Glass Neck */}
          <div className="relative w-full flex items-center justify-center">
            {/* Soft Ambient Contact Shadow Under Glass Base */}
            <div className="absolute -bottom-3 w-44 h-5 bg-[#1F1009]/25 rounded-full blur-md pointer-events-none" />

            <img
              src="/assets/aistudio/Layer_1_1173a12b.png"
              alt="Asilia Glow Presents Mwangaza Hydrating Serum Flacon"
              className="relative z-10 w-full h-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Subtle Golden Meniscus Shimmer Overlay */}
          <div className="absolute bottom-5 left-5 right-5 h-32 bg-gradient-to-tr from-[#C9A289]/10 via-transparent to-white/10 pointer-events-none rounded-b-2xl" />
        </div>

        {/* ============================================================
            4. REFINED PULSING GOLDEN HOTSPOT PINS (ZERO JITTER)
           ============================================================ */}
        {ASILIA_HOTSPOTS.map((pin) => {
          const isActive = activeHotspot?.id === pin.id;
          return (
            <div
              key={pin.id}
              className="absolute z-40"
              style={{ top: pin.top, left: pin.left }}
            >
              <button
                id={`hotspot-btn-${pin.id}`}
                onClick={() => {
                  setActiveHotspot(isActive ? null : pin);
                  if (onOpenHotspot) onOpenHotspot(pin);
                }}
                className="group/pin relative flex items-center justify-center w-6 h-6 rounded-full bg-white/95 border border-[#A76F4E] shadow-md cursor-pointer transition-transform hover:scale-110 active:scale-95 before:absolute before:-inset-2.5 before:content-[''] focus:outline-hidden focus:ring-2 focus:ring-[#7D4C33] focus:ring-offset-2"
                aria-label={`Inspect ${pin.title}`}
                aria-expanded={isActive}
                aria-controls={`hotspot-popover-${pin.id}`}
              >
                {/* Continuous Pulsing Golden Halo Ring */}
                <span className="absolute inset-0 rounded-full bg-[#C9A289] animate-pulse-ring pointer-events-none" />
                {/* Center Solid Gem */}
                <span className="relative w-2 h-2 rounded-full bg-gradient-to-tr from-[#7D4C33] to-[#C9A289]" />
              </button>

              {/* Zero-Jitter Micro-Modal Popover */}
              {isActive && (
                <div
                  id={`hotspot-popover-${pin.id}`}
                  role="region"
                  aria-labelledby={`hotspot-btn-${pin.id}`}
                  className="absolute left-8 -top-8 w-68 z-50 p-4 luxury-glass-elevated rounded-2xl text-left animate-in fade-in zoom-in-95 duration-200"
                >
                  <div className="flex items-start justify-between gap-1 mb-1">
                    <span className="text-[9px] font-bold text-[#7D4C33] uppercase tracking-[0.16em]">
                      {pin.category}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveHotspot(null);
                      }}
                      className="text-[#A76F4E] hover:text-[#1F1009] p-0.5"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <h4 className="font-serif text-sm font-semibold text-[#1F1009] leading-tight mb-1">
                    {pin.title}
                  </h4>
                  <p className="text-[11px] text-[#4F3624] leading-relaxed mb-2.5">
                    {pin.description}
                  </p>
                  <div className="text-[10px] text-[#7D4C33] border-t border-[#F4E8DF] pt-1.5 font-medium">
                    {pin.technicalDetail}
                  </div>
                </div>
              )}
            </div>
          );
        })}

      </div>

      {/* High-Resolution Inspection Modal */}
      {isZoomOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1F1009]/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative max-w-lg w-full bg-[#FAF5EE] rounded-3xl p-6 sm:p-8 border border-[#C9A289]/50 shadow-2xl flex flex-col items-center">
            <button
              onClick={() => setIsZoomOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-[#4F3624] hover:bg-[#F4E8DF] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#7D4C33] mb-1">
              Atelier Flacon Inspection
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#1F1009] mb-4">
              Mwangaza Hydrating Serum · 30 ml
            </h3>

            <div className="w-full flex flex-col items-center justify-center py-5 bg-white rounded-2xl border border-[#E6D3C5] mb-5 overflow-hidden">
              <img
                src="/assets/aistudio/Layer_1_copy_a2595c8b.png"
                alt="Asilia Glow Obsidian Dropper"
                className="w-20 h-auto object-contain mb-1 drop-shadow-sm"
                referrerPolicy="no-referrer"
              />
              <img
                src="/assets/aistudio/Layer_1_1173a12b.png"
                alt="Asilia Glow Mwangaza Flacon"
                className="w-48 h-auto object-contain drop-shadow-md"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="text-xs text-[#4F3624] text-center space-y-1 mb-5">
              <p className="font-semibold text-[#1F1009]">
                With Kenyan Marula Oil, Multi-Depth Hyaluronic Acid + Vitamin B5
              </p>
              <p className="text-[#7D4C33]">
                Deep Hydration • Plump • Glow · 30 ml e 1.01 fl. oz.
              </p>
            </div>

            <button
              onClick={() => {
                setIsZoomOpen(false);
                onPreOrderClick();
              }}
              className="w-full py-4 px-6 rounded-full text-xs font-semibold uppercase tracking-[0.12em] text-white bronze-gradient-btn shadow-md transition-all cursor-pointer"
            >
              Reserve First Edition Batch — KES 3,499
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

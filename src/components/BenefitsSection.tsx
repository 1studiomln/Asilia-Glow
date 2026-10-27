import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Droplet, Sparkles, Activity, CheckCircle2, ShieldCheck } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Smooth pointer drag calculation
  const handlePointerMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    handlePointerMove(e.clientX);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // Ignore
    }
  };

  const onPointerDrag = (e: React.PointerEvent) => {
    if (isDragging) {
      handlePointerMove(e.clientX);
    }
  };

  return (
    <section id="clinical" className="py-24 bg-gradient-to-b from-[#FAF5EE] via-[#F8F1EB] to-[#FAF5EE] relative overflow-hidden border-t border-[#C9A289]/25">
      {/* Ambient Clinical Glow */}
      <div 
        className="absolute bottom-10 right-0 w-[500px] h-[500px] pointer-events-none -z-10 rounded-full blur-3xl opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(201, 162, 137, 0.35) 0%, transparent 70%)' }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Editorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] font-semibold text-[#7D4C33] mb-2.5">
            <span>Independent Cohort Verification</span>
            <span aria-hidden="true" className="text-[#C9A289]">·</span>
            <span>Equatorial Climate Testing</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1F1009] tracking-tight text-balance">
            Visible Transformation <span className="italic font-light text-[#7D4C33]">in 14 Days</span>
          </h2>
          <p className="mt-4 text-base text-[#4F3624] leading-relaxed max-w-2xl mx-auto">
            Formulated specifically for equatorial sun exposure, environmental dehydration, and melanin-rich barrier restoration.
          </p>
        </div>

        {/* 3 Core Benefit Cards with Multi-Layer Depth */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          
          {/* Card 1: Deep Hydration */}
          <div className="p-8 rounded-3xl bg-white border border-[#C9A289]/30 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#F4E8DF] border border-[#C9A289]/40 flex items-center justify-center text-[#7D4C33] mb-6">
                <Droplet className="w-6 h-6" />
              </div>
              <div className="text-[10px] uppercase tracking-wider font-semibold text-[#7D4C33] mb-1">
                24-Hour Sustained Moisture Lock
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1F1009] mb-3">
                Deep Cellular Hydration
              </h3>
              <p className="text-sm text-[#4F3624] leading-relaxed">
                Dual-phase humectants draw water deep into lower epidermis layers while sealing the stratum corneum with Marula lipids, preventing trans-epidermal moisture loss.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#F4E8DF] flex items-baseline gap-2">
              <span className="font-serif text-4xl font-bold text-[#7D4C33] tabular-nums">+128%</span>
              <span className="text-xs text-[#4F3624]">Measured hydration boost at 1 hour post-application</span>
            </div>
          </div>

          {/* Card 2: Natural Plumpness */}
          <div className="p-8 rounded-3xl bg-white border border-[#C9A289]/30 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#F4E8DF] border border-[#C9A289]/40 flex items-center justify-center text-[#7D4C33] mb-6">
                <Activity className="w-6 h-6" />
              </div>
              <div className="text-[10px] uppercase tracking-wider font-semibold text-[#7D4C33] mb-1">
                Intercellular Lipid Cushion
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1F1009] mb-3">
                Natural Plumpness & Firmness
              </h3>
              <p className="text-sm text-[#4F3624] leading-relaxed">
                Bio-compatible oleic fatty acids replenish depleted lipid cement between skin cells, visibly cushioning tissue volume and smoothing dehydrated fine lines.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#F4E8DF] flex items-baseline gap-2">
              <span className="font-serif text-4xl font-bold text-[#7D4C33] tabular-nums">+42%</span>
              <span className="text-xs text-[#4F3624]">Increase in ultrasound-measured epidermal elasticity</span>
            </div>
          </div>

          {/* Card 3: Radiant Glow */}
          <div className="p-8 rounded-3xl bg-white border border-[#C9A289]/30 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#F4E8DF] border border-[#C9A289]/40 flex items-center justify-center text-[#7D4C33] mb-6">
                <Sparkles className="w-6 h-6 text-[#7D4C33]" />
              </div>
              <div className="text-[10px] uppercase tracking-wider font-semibold text-[#7D4C33] mb-1">
                Subtle Lit-From-Within Sheen
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1F1009] mb-3">
                Radiant Glass-Skin Luster
              </h3>
              <p className="text-sm text-[#4F3624] leading-relaxed">
                High-potency polyphenols gently buff away micro-dullness, evening skin tone and imparting a dewy glass-skin luster without tacky or greasy residue.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#F4E8DF] flex items-baseline gap-2">
              <span className="font-serif text-4xl font-bold text-[#7D4C33] tabular-nums">94%</span>
              <span className="text-xs text-[#4F3624]">Cohort observed lasting natural luminosity by Day 14</span>
            </div>
          </div>

        </div>

        {/* Butter-Smooth Draggable Before & After Radiance Showcase */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#C9A289]/30 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Context & Drag Instructions */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#7D4C33] mb-1.5">
                  Interactive Clinical Proof
                </div>
                <h3 className="font-serif text-2xl sm:text-4xl text-[#1F1009] font-medium leading-tight">
                  Day 0 vs. Day 14: <span className="italic font-light text-[#7D4C33]">The Mwangaza Glow</span>
                </h3>
              </div>
              
              <p className="text-sm text-[#4F3624] leading-relaxed">
                Drag the brass divider across the canvas to compare baseline barrier dehydration against 14 days of sustained morning and evening Asilia Glow ritual.
              </p>

              {/* Slider Scrub Controller */}
              <div className="p-4 rounded-2xl bg-[#FAF4EF] border border-[#C9A289]/35 space-y-2.5">
                <div className="flex justify-between text-xs font-semibold text-[#7D4C33]">
                  <span>Day 0 (Baseline Dryness)</span>
                  <span>Day 14 (Radiant Glass Skin)</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(Number(e.target.value))}
                  className="w-full accent-[#7D4C33] cursor-pointer"
                  aria-label="Before and after radiance comparison slider"
                />
                <div className="flex justify-between text-[11px] text-[#A76F4E]">
                  <span>Stressed Barrier</span>
                  <span className="tabular-nums font-semibold text-[#1F1009]">{Math.round(sliderPosition)}% Radiance Shift</span>
                  <span>Optimal Glow</span>
                </div>
              </div>

              {/* Quick Preset Selector */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <button
                  onClick={() => setSliderPosition(0)}
                  className={`min-h-[44px] px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#A76F4E] ${
                    sliderPosition === 0 ? 'bg-[#1F1009] text-white shadow-sm' : 'bg-[#F4E8DF] text-[#4F3624] hover:bg-[#EBD8CB]'
                  }`}
                >
                  Day 0 Baseline
                </button>
                <button
                  onClick={() => setSliderPosition(50)}
                  className={`min-h-[44px] px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#A76F4E] ${
                    sliderPosition === 50 ? 'bg-[#1F1009] text-white shadow-sm' : 'bg-[#F4E8DF] text-[#4F3624] hover:bg-[#EBD8CB]'
                  }`}
                >
                  Day 7 Midpoint
                </button>
                <button
                  onClick={() => setSliderPosition(100)}
                  className={`min-h-[44px] px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#A76F4E] ${
                    sliderPosition === 100 ? 'bg-[#1F1009] text-white shadow-sm' : 'bg-[#F4E8DF] text-[#4F3624] hover:bg-[#EBD8CB]'
                  }`}
                >
                  Day 14 Full Radiance
                </button>
              </div>
            </div>

            {/* Right Column: Butter-Smooth Interactive Draggable Canvas */}
            <div className="lg:col-span-7">
              <div 
                ref={containerRef}
                onPointerDown={handlePointerDown}
                onPointerMove={onPointerDrag}
                onPointerUp={handlePointerUp}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowLeft') setSliderPosition(prev => Math.max(0, prev - 5));
                  if (e.key === 'ArrowRight') setSliderPosition(prev => Math.min(100, prev + 5));
                }}
                tabIndex={0}
                role="region"
                aria-label="Interactive before and after radiance comparison slider. Use left and right arrow keys to adjust."
                className="relative w-full h-[380px] sm:h-[440px] rounded-2xl overflow-hidden select-none border border-[#C9A289]/40 shadow-md cursor-ew-resize touch-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A76F4E]"
              >
                
                {/* Layer 2: "After / Day 14" Full Radiant Kenyan Model Portrait */}
                <img
                  src="/assets/images/skincare_model_radiance_1793038971222.jpg"
                  alt="Kenyan woman with luminous dewy glowing skin after 14 days of Asilia Glow"
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 z-20 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-xs font-semibold text-[#7D4C33] shadow-xs">
                  Day 14: Luminous Glass Skin
                </div>

                {/* Layer 1: "Before / Day 0" Baseline Dehydrated Simulation (Clipped by slider with GPU clip-path) */}
                <div 
                  className="absolute inset-0 overflow-hidden pointer-events-none"
                  style={{ clipPath: `inset(0 ${sliderPosition}% 0 0)` }}
                >
                  <img
                    src="/assets/images/skincare_model_radiance_1793038971222.jpg"
                    alt="Skin baseline simulation"
                    className="absolute inset-0 w-full h-full object-cover filter saturate-45 contrast-90 brightness-95"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-[#1F1009]/20" />
                  <div className="absolute top-4 left-4 z-20 px-3.5 py-1.5 rounded-full bg-[#1F1009]/85 backdrop-blur-md text-xs font-medium text-white shadow-xs">
                    Day 0: Dehydrated & Dull
                  </div>
                </div>

                {/* Brass & Rose Gold Custom Drag Handle */}
                <div
                  className="absolute top-0 bottom-0 z-30 w-1 bg-white shadow-xl pointer-events-none"
                  style={{ left: `${100 - sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-[#1F1009] shadow-lg flex items-center justify-center text-xs font-bold border-2 border-[#A76F4E]">
                    <span className="text-[#7D4C33] text-sm">↔</span>
                  </div>
                </div>

              </div>
              <p className="text-[11px] text-[#7D4C33] text-center mt-2.5 font-medium">
                Click, drag, or use Arrow Keys to explore clinical before & after results
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

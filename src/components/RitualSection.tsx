import React, { useState } from 'react';
import { Sparkles, Check } from 'lucide-react';

const RITUAL_STEPS = [
  {
    step: '01',
    name: 'Cleanse & Awaken',
    time: 'Morning & Evening',
    instructions: 'Cleanse face and neck with lukewarm water and a gentle cleanser. Leave skin slightly damp for optimal hyaluronic penetration.'
  },
  {
    step: '02',
    name: 'Dispense 3 Golden Drops',
    time: 'Precise Dosage',
    instructions: 'Squeeze the obsidian dropper bulb once to draw pure Mwangaza serum. Release exactly 3 drops onto clean, warm palms. Rub palms lightly together to activate the Marula lipids.'
  },
  {
    step: '03',
    name: 'Press, Glide & Sculpt',
    time: '60 Seconds',
    instructions: 'Gently press palms across cheeks, forehead, neck and décolletage in upward rhythmic motions. Follow the jawline contours from chin to earlobes to stimulate circulation.'
  },
  {
    step: '04',
    name: 'Lock & Radiate',
    time: 'Final Step',
    instructions: 'Allow the serum 90 seconds to fully sink in. Follow with your favorite moisturizer or sunscreen by day, or night treatment cream by night.'
  }
];

export const RitualSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <section id="ritual" className="py-20 bg-gradient-to-b from-[#FAF5EE] via-[#F5EBE1] to-[#FAF5EE] border-t border-[#C9A289]/30 relative overflow-hidden">
      {/* Ambient Ritual Aura */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none -z-10 rounded-full blur-3xl opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(201, 162, 137, 0.4) 0%, transparent 70%)' }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#7D4C33] mb-2">
            The Daily Radiance Ritual
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1F1009] tracking-tight">
            Four Steps to <span className="italic font-light text-[#7D4C33]">Unfiltered Skin Confidence</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#4F3624]">
            Crafted to transform your daily skincare into an indulgent sensory pause.
          </p>
        </div>

        {/* 4-Step Interactive Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RITUAL_STEPS.map((item, idx) => {
            const isCurrent = activeStep === idx;
            return (
              <div
                key={item.step}
                onClick={() => setActiveStep(idx)}
                className={`p-6 rounded-3xl border transition-all cursor-pointer ${
                  isCurrent
                    ? 'bg-white border-[#A76F4E] shadow-md -translate-y-1 ring-2 ring-[#A76F4E]/10'
                    : 'bg-[#FAF4EF] border-[#C9A289]/40 hover:border-[#A76F4E]/60'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-3xl font-light text-[#7D4C33]">
                    {item.step}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#7D4C33]">
                    {item.time}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#1F1009] mb-2">
                  {item.name}
                </h3>

                <p className="text-xs sm:text-sm text-[#4F3624] leading-relaxed">
                  {item.instructions}
                </p>

                <div className="mt-4 pt-3 border-t border-[#F4E8DF] flex items-center justify-between text-xs text-[#7D4C33]">
                  <span>Step {idx + 1} of 4</span>
                  {isCurrent && <Check className="w-3.5 h-3.5 text-[#1F1009]" />}
                </div>
              </div>
            );
          })}
        </div>

        {/* Pro Tip Card */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-[#C9A289]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#F4E8DF] flex items-center justify-center text-[#7D4C33] shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#1F1009]">Atelier Pro Tip: The 3-Drop Method</h4>
              <p className="text-xs text-[#4F3624]">
                For dry or post-flight skin, mix 2 drops of Mwangaza into your liquid foundation for an effortless glass-skin finish.
              </p>
            </div>
          </div>
          <div className="text-xs font-semibold uppercase tracking-wider text-[#7D4C33] whitespace-nowrap">
            Zero Greasiness Guaranteed
          </div>
        </div>

      </div>
    </section>
  );
};

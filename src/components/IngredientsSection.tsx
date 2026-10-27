import React, { useState } from 'react';
import { Droplet, Sun, CheckCircle2, Shield, HeartHandshake, Sparkles, Layers } from 'lucide-react';
import { HumanFaceLineArt } from './HumanFaceLineArt';
import { Ingredient } from '../types';

interface ExtendedIngredient extends Ingredient {
  absorptionLayer: string;
  molecularWeight: string;
  terroirNote: string;
  clinicalMarker: string;
}

const TERROIR_INGREDIENTS: ExtendedIngredient[] = [
  {
    id: 'marula',
    name: 'Wild Kenyan Marula Oil',
    subtitle: 'Cold-Pressed Sclerocarya Birrea Kernel Oil',
    concentration: '15% Bioactive Concentration',
    origin: 'Ethically wild-harvested near Mount Kenya foothills',
    description: 'Revered across East Africa as "The Miracle Oil", our cold-pressed Marula oil contains 60% higher antioxidant levels than Argan oil. Rich in essential oleic (Omega-9) and linoleic (Omega-6) fatty acids, it penetrates deep into cellular lipid membranes without occluding pores.',
    skinAction: 'Intense lipid restoration, cellular barrier fortification, and antioxidant shield against environmental free-radical pollution.',
    keyNutrient: 'Oleic Acid (73%), Flavonoids & Vitamin E',
    absorptionLayer: 'Deep Dermal Lipid Barrier',
    molecularWeight: 'Micro-Lipid Fraction',
    terroirNote: 'Hand-cracked Marula nuts harvested during the dry ripening season along the volcanic mineral soils of Mount Kenya.',
    clinicalMarker: '+64% Intrinsic Barrier Resilience'
  },
  {
    id: 'hyaluronic',
    name: 'Multi-Depth Hyaluronic Acid',
    subtitle: 'Triple-Molecular Weight Sodium Hyaluronate Complex',
    concentration: '2.5% Hydration Matrix',
    origin: 'Bio-fermented clean botanical biotechnology',
    description: 'Capable of binding up to 1,000 times its weight in pure water. Our formula pairs ultra-low molecular weight hyaluronic acid (which sinks deep to stimulate natural hydration reservoirs) with high molecular weight molecules that cushion and plump the outer stratum corneum.',
    skinAction: 'Multi-layer hydration lock that eliminates fine dehydration lines and plumps skin volume within minutes.',
    keyNutrient: 'Cross-Linked Micro & Macro Sodium Hyaluronate',
    absorptionLayer: 'Multi-Layer (Epidermis to Dermis)',
    molecularWeight: '10 kDa to 1,800 kDa Spectrum',
    terroirNote: 'Clean fermentation utilizing pure glacier run-off water filtration protocols.',
    clinicalMarker: '+128% Measured Hydration at 1 Hour'
  },
  {
    id: 'aloe',
    name: 'Organic Coastal Aloe Vera',
    subtitle: 'Cold-Extracted Aloe Barbadensis Leaf Juice',
    concentration: '20% Pure Calming Infusion',
    origin: 'Sustainably farmed along Kenya’s Indian Ocean coastline',
    description: 'Hand-filleted within 6 hours of harvest to preserve active polysaccharides and acemannan. Replaces ordinary purified water in our serum base, providing immediate calming relief for sun-exposed and sensitive skin barriers.',
    skinAction: 'Rapidly reduces thermal redness, accelerates cellular repair, and neutralizes environmental micro-stress.',
    keyNutrient: 'Pure Acemannan Polysaccharides & Phytosterols',
    absorptionLayer: 'Surface Stratum Corneum',
    molecularWeight: 'High-Bioactive Polysaccharide',
    terroirNote: 'Grown in coastal saline breezes that stimulate higher defensive antioxidant production in the succulent leaves.',
    clinicalMarker: '-76% Visible Skin Redness'
  },
  {
    id: 'panthenol',
    name: 'Provitamin B5 (D-Panthenol)',
    subtitle: 'Bio-Identical Barrier Replenisher',
    concentration: '2.0% Dermatological Grade',
    origin: 'Pure bio-identical active synthesis',
    description: 'An essential humectant that transforms into pantothenic acid upon skin contact. It acts like microscopic biological mortar between skin cells, restoring suppleness, soothing micro-irritation, and delivering an unmistakable velvety dewy touch.',
    skinAction: 'Reinforces intercellular lipid cementing, amplifies skin elasticity, and seals hydration inside.',
    keyNutrient: 'Pure D-Panthenol Provitamin',
    absorptionLayer: 'Intercellular Lipid Matrix',
    molecularWeight: '205.25 g/mol Rapid Penetration',
    terroirNote: 'Clinically calibrated to optimize cellular water-binding capacity alongside botanical oils.',
    clinicalMarker: '+42% Skin Suppleness & Bounce'
  }
];

export const IngredientsSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('marula');
  const activeIngredient = TERROIR_INGREDIENTS.find(i => i.id === selectedId) || TERROIR_INGREDIENTS[0];

  return (
    <section id="terroir" className="py-24 bg-gradient-to-b from-[#FAF5EE] via-[#F6EEE5] to-[#FAF5EE] border-t border-[#C9A289]/25 relative overflow-hidden">
      
      {/* Ambient Terroir Lighting Aura */}
      <div 
        className="absolute top-1/2 left-0 -translate-y-1/2 w-[520px] h-[520px] pointer-events-none -z-10 rounded-full blur-3xl opacity-35"
        style={{ background: 'radial-gradient(circle, rgba(201, 162, 137, 0.4) 0%, transparent 70%)' }}
      />

      {/* Ambient Face Line Art in Background */}
      <div className="absolute right-0 top-1/4 -translate-y-1/2 opacity-10 pointer-events-none hidden lg:block">
        <HumanFaceLineArt variant="profile" className="w-80 h-96" strokeColor="#A76F4E" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Editorial Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#7D4C33] mb-2 flex items-center gap-2">
            <span>Sensory Terroir</span>
            <span className="text-[#C9A289]">·</span>
            <span>Ethical Chemistry</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1F1009] tracking-tight text-balance">
            The Bioactive Quartet <span className="italic font-light text-[#7D4C33]">of Mount Kenya</span>
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-[#4F3624] leading-relaxed max-w-2xl">
            Clean, cold-extracted botanicals paired with clinical bio-actives. We replace inert water fillers with living succulent extracts and wild-harvested Kenyan seed oils.
          </p>
        </div>

        {/* Interactive Bioactive Terroir Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 p-1.5 luxury-glass rounded-2xl mb-8">
          {TERROIR_INGREDIENTS.map((item) => {
            const isSelected = item.id === selectedId;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`py-3.5 px-4 text-left rounded-xl transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-white text-[#1F1009] shadow-sm ring-1 ring-[#C9A289]/40'
                    : 'text-[#4F3624] hover:text-[#1F1009] hover:bg-white/60'
                }`}
              >
                <div className="text-[10px] uppercase tracking-wider font-semibold text-[#7D4C33]">
                  {item.concentration}
                </div>
                <div className="font-serif text-base sm:text-lg font-bold leading-tight mt-0.5 truncate">
                  {item.name}
                </div>
                <div className="text-[11px] text-[#A76F4E] truncate mt-0.5">
                  {item.clinicalMarker}
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Ingredient Showcase Card (Split Editorial Canvas) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-white rounded-3xl p-6 sm:p-10 border border-[#C9A289]/25 shadow-xs">
          
          {/* Left Column: Deep Chemistry & Sourcing Story */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#7D4C33] font-medium mb-2.5">
                <span>{activeIngredient.subtitle}</span>
                <span aria-hidden="true" className="text-[#C9A289]">·</span>
                <span>{activeIngredient.origin}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-4xl text-[#1F1009] font-medium leading-tight">
                {activeIngredient.name}
              </h3>

              <p className="mt-4 text-sm sm:text-base text-[#4F3624] leading-relaxed">
                {activeIngredient.description}
              </p>

              {/* Terroir Note */}
              <div className="mt-4 p-4 rounded-2xl bg-[#FAF4EF] border border-[#C9A289]/30 text-xs text-[#4F3624] leading-relaxed">
                <span className="font-semibold text-[#1F1009] uppercase tracking-wider text-[10px] block mb-1">
                  Harvester’s Terroir Observation
                </span>
                {activeIngredient.terroirNote}
              </div>
            </div>

            {/* Biological Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-[#F4E8DF] pt-6">
              <div className="p-4 rounded-2xl bg-[#FAF4EF] border border-[#C9A289]/25">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#7D4C33] mb-1.5">
                  <Droplet className="w-4 h-4 text-[#A76F4E]" />
                  <span>Targeted Penetration</span>
                </div>
                <p className="text-xs text-[#4F3624] leading-relaxed">
                  {activeIngredient.absorptionLayer} ({activeIngredient.molecularWeight})
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF4EF] border border-[#C9A289]/25">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#7D4C33] mb-1.5">
                  <Sparkles className="w-4 h-4 text-[#A76F4E]" />
                  <span>Key Phytochemicals</span>
                </div>
                <p className="text-xs text-[#4F3624] leading-relaxed">
                  {activeIngredient.keyNutrient}
                </p>
              </div>
            </div>

            {/* Mount Kenya Cooperative Trust Seal */}
            <div className="flex items-center gap-3 text-xs text-[#4F3624] p-3.5 rounded-2xl bg-[#F4E8DF]/60 border border-[#C9A289]/30">
              <HeartHandshake className="w-4.5 h-4.5 text-[#7D4C33] shrink-0" />
              <div>
                <span className="font-semibold text-[#1F1009]">Mount Kenya Women's Harvesters Alliance</span>
                <span className="block text-[11px] text-[#7D4C33]">
                  100% fair trade living wages · Hand-sorted kernel inspection · Zero deforestation
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Visual Canvas */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden min-h-[320px] lg:min-h-[420px] bg-[#FAF4EF] border border-[#C9A289]/30 flex flex-col justify-end p-6">
            <img 
              src="/assets/images/marula_harvest_kenya_1793038971433.jpg"
              alt="Artisanal harvest of pure golden Kenyan Marula near Mount Kenya"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              referrerPolicy="no-referrer"
            />
            {/* Dark luxury gradient scrim for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F1009]/90 via-[#1F1009]/40 to-transparent pointer-events-none" />

            {/* Overlay Caption on Photography */}
            <div className="relative z-10 text-white">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[10px] font-semibold uppercase tracking-wider text-[#F4E8DF] mb-2">
                <Shield className="w-3 h-3 text-[#A76F4E]" />
                <span>Cold-Pressed Within 48 Hours</span>
              </div>
              <p className="font-serif text-lg sm:text-xl font-medium leading-snug">
                Wild Marula fruits hand-gathered from native African woodlands, sustaining rural communities.
              </p>
              <div className="mt-3 flex items-center gap-3 text-xs text-white/80">
                <span>Zero Hexane Solvents</span>
                <span aria-hidden="true">·</span>
                <span>Waterless Formulation</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

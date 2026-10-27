import React, { useState } from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { Review } from '../types';

const PRESS_MENTIONS = [
  {
    publication: 'VOGUE AFRICA',
    quote: 'Asilia Glow redefines East African luxury skincare—wild-harvested Marula that rivals anything coming out of Paris or Seoul.',
    author: 'Beauty Editor’s Choice 2026'
  },
  {
    publication: 'HARPER’S BAZAAR',
    quote: 'The 3-drop Mwangaza formulation delivers an undeniable lit-from-within sheen that lasts through humid tropical heat without greasiness.',
    author: 'Skin Health Awards'
  },
  {
    publication: 'GLAMOUR EAST AFRICA',
    quote: 'A masterpiece in bio-compatible hydration. The twin-face line-art branding alone makes it a bathroom vanity centerpiece.',
    author: 'Clean Luxury Spotlight'
  }
];

const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Wanjiru Muthoni',
    location: 'Karen, Nairobi',
    rating: 5,
    date: 'March 2026',
    title: 'Transformed my dry barrier in just 5 days',
    comment: 'Living in Nairobi with chilly mornings and dry afternoons always left my cheeks feeling parched. Just three drops of Asilia Glow under my sunscreen keeps my skin dewy till sunset. The texture sinks in like liquid silk.',
    verified: true,
    skinType: 'Dry & Sensitive Skin'
  },
  {
    id: 'rev-2',
    name: 'Amina Hassan',
    location: 'Nyali, Mombasa',
    rating: 5,
    date: 'February 2026',
    title: 'Finally a Marula serum that is not heavy or greasy!',
    comment: 'Coastal humidity usually turns facial oils into a shiny mess. Mwangaza is completely different—the Hyaluronic acid balances the Marula oil so well. My skin feels plump and looks bouncy, without any breakouts.',
    verified: true,
    skinType: 'Combination Skin'
  },
  {
    id: 'rev-3',
    name: 'Sarah Jenkins',
    location: 'London / Nairobi Traveler',
    rating: 5,
    date: 'January 2026',
    title: 'My ultimate in-flight savior',
    comment: 'I fly between Heathrow and JKIA frequently. Cabin air wreaks havoc on my skin, but this serum saved me on my last long-haul flight. Plumped my skin immediately and made me look rested even after 9 hours in the air.',
    verified: true,
    skinType: 'Dehydrated Mature Skin'
  }
];

export const ReviewsAndPress: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-[#FAF5EE] via-[#F7EFE8] to-[#FAF5EE] border-t border-[#C9A289]/30 relative overflow-hidden">
      {/* Ambient Press Aura */}
      <div 
        className="absolute top-1/3 right-10 w-[450px] h-[450px] pointer-events-none -z-10 rounded-full blur-3xl opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(201, 162, 137, 0.35) 0%, transparent 70%)' }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Press Quotes Grid */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#7D4C33]">
              Editorial Recognition
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRESS_MENTIONS.map((item, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-3xl bg-white border border-[#C9A289]/35 shadow-xs flex flex-col justify-between text-center"
              >
                <div className="font-serif text-lg font-bold tracking-[0.15em] text-[#1F1009] mb-4">
                  {item.publication}
                </div>
                <p className="font-serif italic text-base text-[#4F3624] leading-relaxed mb-6">
                  "{item.quote}"
                </p>
                <div className="text-xs uppercase tracking-wider text-[#7D4C33] font-medium border-t border-[#F4E8DF] pt-3">
                  {item.author}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#7D4C33] mb-2">
              Verified Client Experiences
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1F1009] tracking-tight">
              Real Radiance, <span className="italic font-light text-[#7D4C33]">Real Words</span>
            </h2>
          </div>

          {/* Rating Summary Box */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#C9A289]/35">
            <div className="font-serif text-3xl font-bold text-[#7D4C33] tabular-nums">
              4.9
            </div>
            <div className="space-y-0.5">
              <div className="flex items-center gap-1 text-[#A76F4E]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <div className="text-xs text-[#4F3624]">
                Based on 320+ pre-release cohort evaluations
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-[#C9A289]/35 shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Rating stars & date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#A76F4E]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-[#7D4C33]">{rev.date}</span>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#1F1009] mb-2 leading-snug">
                  "{rev.title}"
                </h3>

                <p className="text-sm text-[#4F3624] leading-relaxed mb-6">
                  {rev.comment}
                </p>
              </div>

              <div className="border-t border-[#F4E8DF] pt-4 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-[#1F1009] flex items-center gap-1.5">
                    <span>{rev.name}</span>
                    {rev.verified && (
                      <span title="Verified Purchase">
                        <CheckCircle className="w-3.5 h-3.5 text-[#7D4C33]" />
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-[#7D4C33]">{rev.location}</div>
                </div>
                <div className="text-[11px] font-medium text-[#7D4C33] bg-[#F4E8DF] px-2.5 py-1 rounded-md">
                  {rev.skinType}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

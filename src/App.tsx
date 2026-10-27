/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { IngredientsSection } from './components/IngredientsSection';
import { BenefitsSection } from './components/BenefitsSection';
import { RitualSection } from './components/RitualSection';
import { ReviewsAndPress } from './components/ReviewsAndPress';
import { OrderSection, PRODUCT_BUNDLES } from './components/OrderSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { PreOrderDrawer } from './components/PreOrderDrawer';
import { ProductBundle, HotspotPin } from './types';

export default function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedBundle, setSelectedBundle] = useState<ProductBundle>(PRODUCT_BUNDLES[0]);
  const [cartCount, setCartCount] = useState(1);

  const handleOpenPreOrder = (bundle?: ProductBundle) => {
    if (bundle) {
      setSelectedBundle(bundle);
    }
    setIsDrawerOpen(true);
  };

  const handleHotspotInspect = (hotspot: HotspotPin) => {
    // Optional additional reaction or scroll if needed
  };

  return (
    <div className="min-h-screen text-[#1F1009] flex flex-col font-sans selection:bg-[#EBD8CB] selection:text-[#1F1009] relative">
      {/* Top Navigation */}
      <Navbar
        cartCount={cartCount}
        onOpenCart={() => setIsDrawerOpen(true)}
        onPreOrderClick={() => handleOpenPreOrder()}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero with interactive dropper & serum bottle */}
        <HeroSection
          onPreOrderClick={() => handleOpenPreOrder()}
          onOpenHotspot={handleHotspotInspect}
        />

        {/* Bioactive Ingredients Breakdown */}
        <IngredientsSection />

        {/* Clinical Benefits & Interactive Before/After Radiance Slider */}
        <BenefitsSection />

        {/* 4-Step Skincare Ritual */}
        <RitualSection />

        {/* Press Mentions & Verified Customer Reviews */}
        <ReviewsAndPress />

        {/* Purchase & Pre-Order Bundles */}
        <OrderSection onSelectBundle={handleOpenPreOrder} />

        {/* Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Bar (Strictly <= 15% viewport height) */}
      <MobileStickyBar onPreOrderClick={() => handleOpenPreOrder()} />

      {/* Interactive Checkout & Pre-Order Drawer */}
      <PreOrderDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        selectedBundle={selectedBundle}
        onSelectBundle={(bundle) => {
          setSelectedBundle(bundle);
          setCartCount(1);
        }}
      />
    </div>
  );
}

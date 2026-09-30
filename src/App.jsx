import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import FeaturesBanner from './components/FeaturesBanner';
import OurStory from './components/OurStory';
import CraftsmanshipBanner from './components/CraftsmanshipBanner';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import PriceModal from './components/PriceModal';
import SearchModal from './components/SearchModal';
import CustomiseModal from './components/CustomiseModal';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCustomiseOpen, setIsCustomiseOpen] = useState(false);

  const handleRequestPrice = (product) => {
    setSelectedProduct(product);
  };

  const handleSelectCategory = (category) => {
    // Open customize or prompt inquiry for that specific category
    setSelectedProduct({
      name: `${category.title} (Collection Inquiry)`,
      image: category.image,
      id: category.id,
    });
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2D2A26] flex flex-col font-sans selection:bg-[#9E6E2D] selection:text-white">
      {/* 1. Header Navigation Bar */}
      <Header
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCustomise={() => setIsCustomiseOpen(true)}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* 2. Hero Grand Temple Banner */}
        <Hero />

        {/* 3. Shop by Category - Sacred Idols for Every Space */}
        <Categories onSelectCategory={handleSelectCategory} />

        {/* 4. Handpicked Collection - Featured Products */}
        <FeaturedProducts onRequestPrice={handleRequestPrice} />

        {/* 5. 4 Value Proposition Pillars (Quality, Artisans, Worldwide, Custom) */}
        <FeaturesBanner />

        {/* 6. Our Story - Born from Devotion, Shaped with Love */}
        <OurStory onOpenCustomise={() => setIsCustomiseOpen(true)} />

        {/* 7. Callout Hero Banner - Your Vision. Our Craftsmanship. */}
        <CraftsmanshipBanner onStartProject={() => setIsCustomiseOpen(true)} />

        {/* 8. Testimonials - What Our Customers Say */}
        <Testimonials />
      </main>

      {/* 9. Rich Golden Ochre Footer */}
      <Footer onOpenCustomise={() => setIsCustomiseOpen(true)} />

      {/* Interactive Modals */}
      <PriceModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(item) => setSelectedProduct(item)}
      />

      <CustomiseModal
        isOpen={isCustomiseOpen}
        onClose={() => setIsCustomiseOpen(false)}
      />
    </div>
  );
}

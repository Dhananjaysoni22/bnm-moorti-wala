import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import FeaturedProducts from '../components/FeaturedProducts';
import FeaturesBanner from '../components/FeaturesBanner';
import OurStory from '../components/OurStory';
import CraftsmanshipBanner from '../components/CraftsmanshipBanner';
import Testimonials from '../components/Testimonials';

export default function Home({ onRequestPrice, onSelectCategory, onOpenCustomise }) {
  return (
    <>
      {/* 1. Hero Grand Temple Banner */}
      <Hero />

      {/* 2. Shop by Category - Sacred Idols for Every Space */}
      <Categories onSelectCategory={onSelectCategory} />

      {/* 3. Handpicked Collection - Featured Products */}
      <FeaturedProducts onRequestPrice={onRequestPrice} />

      {/* 4. 4 Value Proposition Pillars */}
      <FeaturesBanner />

      {/* 5. Our Story - Born from Devotion, Shaped with Love */}
      <OurStory onOpenCustomise={onOpenCustomise} />

      {/* 6. Callout Hero Banner - Your Vision. Our Craftsmanship. */}
      <CraftsmanshipBanner onStartProject={onOpenCustomise} />

      {/* 7. Testimonials - What Our Customers Say */}
      <Testimonials />
    </>
  );
}

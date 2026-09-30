import React from 'react';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'god-statues',
    title: 'Marble God Statues',
    image: '/images/cat-gods.png',
    count: '150+ designs',
  },
  {
    id: 'temples',
    title: 'Marble Temples',
    image: '/images/cat-temples.png',
    count: '80+ designs',
  },
  {
    id: 'human-bust',
    title: 'Marble Human Bust',
    image: '/images/cat-busts.png',
    count: 'Custom sculpted',
  },
  {
    id: 'animals',
    title: 'Marble Animals',
    image: '/images/cat-animals.png',
    count: '60+ designs',
  },
  {
    id: 'roman-figures',
    title: 'Marble Roman Figures',
    image: '/images/cat-roman.png',
    count: '40+ designs',
  },
  {
    id: 'home-decor',
    title: 'Marble Home Decor',
    image: '/images/cat-decor.png',
    count: '120+ designs',
  },
];

export default function Categories({ onSelectCategory }) {
  return (
    <section id="collection" className="py-14 md:py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-[11px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#9E6E2D] mb-2 font-sans">
            SHOP BY CATEGORY
          </p>
          
          <div className="flex items-center justify-center gap-4 max-w-xl mx-auto">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C4A163] to-[#B88E44]" />
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl text-[#222222] font-normal tracking-wide whitespace-nowrap px-2"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Sacred Idols for Every Space
            </h2>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#C4A163] to-[#B88E44]" />
          </div>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 lg:gap-5">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => onSelectCategory?.(category)}
              className="group cursor-pointer bg-[#F7F4EE] hover:bg-[#F3EFE7] rounded-2xl overflow-hidden p-2.5 sm:p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="w-full aspect-square rounded-xl overflow-hidden bg-white/70 flex items-center justify-center p-1">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Title & Arrow */}
              <div className="pt-3 pb-1 px-1 flex items-center justify-between gap-1">
                <h3 
                  className="text-[13px] sm:text-[14px] lg:text-[13px] xl:text-[14px] font-semibold text-[#8B5C24] leading-snug group-hover:text-[#6F4619] transition-colors"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  {category.title}
                </h3>
                
                {/* Arrow Icon in Brown Circle */}
                <div className="w-5 h-5 rounded-full bg-[#8B5C24] text-white flex-shrink-0 flex items-center justify-center group-hover:bg-[#6F4619] group-hover:translate-x-0.5 transition-all">
                  <ArrowRight className="w-3 h-3 stroke-[2.5]" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

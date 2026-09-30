import React from 'react';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'god-statues',
    title: 'Marble God Statues',
    image: '/images/cat-gods.png',
  },
  {
    id: 'temples',
    title: 'Marble Temples',
    image: '/images/cat-temples.png',
  },
  {
    id: 'human-bust',
    title: 'Marble Human Bust',
    image: '/images/cat-busts.png',
  },
  {
    id: 'animals',
    title: 'Marble Animals',
    image: '/images/cat-animals.png',
  },
  {
    id: 'roman-figures',
    title: 'Marble Roman Figures',
    image: '/images/cat-roman.png',
  },
  {
    id: 'home-decor',
    title: 'Marble Home Decor',
    image: '/images/cat-decor.png',
  },
];

export default function Categories({ onSelectCategory }) {
  return (
    <section id="collection" className="py-10 sm:py-16 md:py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-12 md:mb-14">
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.22em] sm:tracking-[0.25em] text-[#9E6E2D] mb-1.5 sm:mb-2 font-sans">
            SHOP BY CATEGORY
          </p>
          
          <div className="flex items-center justify-center gap-2 sm:gap-4 max-w-xl mx-auto px-2">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C4A163] to-[#B88E44]" />
            <h2 
              className="text-xl sm:text-3xl md:text-4xl text-[#222222] font-normal tracking-wide px-1 sm:px-2 text-center"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Sacred Idols for Every Space
            </h2>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#C4A163] to-[#B88E44]" />
          </div>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-4 lg:gap-5">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => onSelectCategory?.(category)}
              className="group cursor-pointer bg-[#F7F4EE] hover:bg-[#F3EFE7] rounded-xl sm:rounded-2xl overflow-hidden p-2 sm:p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="w-full aspect-square rounded-lg sm:rounded-xl overflow-hidden bg-white/70 flex items-center justify-center p-1">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover rounded-md sm:rounded-lg group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Title & Arrow */}
              <div className="pt-2 sm:pt-3 pb-1 px-0.5 sm:px-1 flex items-center justify-between gap-1">
                <h3 
                  className="text-[12px] sm:text-[14px] lg:text-[13px] xl:text-[14px] font-semibold text-[#8B5C24] leading-snug group-hover:text-[#6F4619] transition-colors line-clamp-2"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  {category.title}
                </h3>
                
                {/* Arrow Icon in Brown Circle */}
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#8B5C24] text-white flex-shrink-0 flex items-center justify-center group-hover:bg-[#6F4619] group-hover:translate-x-0.5 transition-all">
                  <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[2.5]" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

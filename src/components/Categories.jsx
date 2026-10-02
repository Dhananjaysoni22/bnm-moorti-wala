import React from 'react';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'god-statues',
    title: 'Marble God Statues',
    image: '/images/cat-gods.webp',
    fallback: '/images/cat-gods.png',
  },
  {
    id: 'temples',
    title: 'Marble Temples',
    image: '/images/cat-temples.webp',
    fallback: '/images/cat-temples.png',
  },
  {
    id: 'human-bust',
    title: 'Marble Human Bust',
    image: '/images/cat-busts.webp',
    fallback: '/images/cat-busts.png',
  },
  {
    id: 'animals',
    title: 'Marble Animals',
    image: '/images/cat-animals.webp',
    fallback: '/images/cat-animals.png',
  },
  {
    id: 'roman-figures',
    title: 'Marble Roman Figures',
    image: '/images/cat-roman.webp',
    fallback: '/images/cat-roman.png',
  },
  {
    id: 'home-decor',
    title: 'Marble Home Decor',
    image: '/images/cat-decor.webp',
    fallback: '/images/cat-decor.png',
  },
];

export default function Categories({ onSelectCategory }) {
  return (
    <section id="collection" className="py-12 sm:py-16 md:py-20 bg-white w-full overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-12 md:mb-14">
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#9E6E2D] mb-2 sm:mb-3 font-sans">
            SHOP BY CATEGORY
          </p>
          
          {/* Ornamental Divider with Diamond */}
          <div className="flex items-center justify-center gap-3 sm:gap-5 max-w-2xl mx-auto px-2">
            <div className="flex items-center flex-1 max-w-[140px] sm:max-w-[180px]">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C4A163]/50 to-[#B88E44]" />
              <div className="w-1.5 h-1.5 rotate-45 bg-[#B88E44] flex-shrink-0" />
            </div>

            <h2 
              className="text-2xl sm:text-3xl md:text-[34px] text-[#222222] font-normal tracking-wide px-1 sm:px-2 text-center whitespace-nowrap"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Sacred Idols for Every Space
            </h2>

            <div className="flex items-center flex-1 max-w-[140px] sm:max-w-[180px]">
              <div className="w-1.5 h-1.5 rotate-45 bg-[#B88E44] flex-shrink-0" />
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#C4A163]/50 to-[#B88E44]" />
            </div>
          </div>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5 w-full">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => onSelectCategory?.(category)}
              className="group cursor-pointer bg-[#FAF6F0] hover:bg-[#F5F0E6] rounded-2xl overflow-hidden p-2.5 sm:p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between min-w-0 w-full"
            >
              {/* Image Container with rounded corners - no white border */}
              <div className="w-full aspect-square rounded-xl overflow-hidden">
                <picture className="w-full h-full">
                  <source srcSet={category.image} type="image/webp" />
                  <img
                    src={category.fallback}
                    alt={category.title}
                    className="w-full h-full object-cover rounded-xl group-hover:scale-104 transition-transform duration-500 ease-out"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>

              {/* Title & Arrow Button */}
              <div className="pt-3 pb-1 px-1 flex items-center justify-between gap-1.5 min-w-0">
                <h3 
                  className="text-[13px] sm:text-[14px] xl:text-[15px] font-semibold text-[#8B5C24] leading-snug group-hover:text-[#6F4619] transition-colors line-clamp-1 min-w-0"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  {category.title}
                </h3>
                
                {/* Arrow Icon in Brown Circle */}
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#8B5C24] text-white flex-shrink-0 flex items-center justify-center group-hover:bg-[#6F4619] group-hover:translate-x-0.5 transition-all">
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

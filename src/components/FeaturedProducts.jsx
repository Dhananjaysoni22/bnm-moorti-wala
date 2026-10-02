import React from 'react';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 'marble-shiva',
    name: 'Marble Shiva Statue',
    image: '/images/prod-shiva.webp',
    fallback: '/images/prod-shiva.png',
  },
  {
    id: 'marble-cow-calf',
    name: 'Marble Cow with Calf Statue',
    image: '/images/prod-cow.webp',
    fallback: '/images/prod-cow.png',
  },
  {
    id: 'marble-buddha',
    name: 'Marble Buddha Statue',
    image: '/images/prod-buddha.webp',
    fallback: '/images/prod-buddha.png',
  },
  {
    id: 'marble-temple',
    name: 'Marble Temple Statue',
    image: '/images/prod-temple.webp',
    fallback: '/images/prod-temple.png',
  },
  {
    id: 'marble-durga',
    name: 'Marble Durga Statue',
    image: '/images/prod-durga.webp',
    fallback: '/images/prod-durga.png',
  },
];

export default function FeaturedProducts({ onRequestPrice }) {
  return (
    <section className="py-14 sm:py-20 md:py-24 bg-white border-t border-[#F3EEE6] w-full overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Header with Subtitle, Title, and "View all Products" */}
        <div className="relative mb-10 sm:mb-14 md:mb-16">
          <div className="text-center">
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#9E6E2D] mb-2 sm:mb-3 font-sans">
              HANDPICKED COLLECTION
            </p>
            
            {/* Ornamental Divider with Diamond */}
            <div className="flex items-center justify-center gap-3 sm:gap-5 max-w-xl mx-auto px-2">
              <div className="flex items-center flex-1 max-w-[120px] sm:max-w-[160px]">
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C4A163]/50 to-[#B88E44]" />
                <div className="w-1.5 h-1.5 rotate-45 bg-[#B88E44] flex-shrink-0" />
              </div>

              <h2 
                className="text-2xl sm:text-3xl md:text-[34px] text-[#222222] font-normal tracking-wide px-1 sm:px-2 text-center whitespace-nowrap"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Featured Products
              </h2>

              <div className="flex items-center flex-1 max-w-[120px] sm:max-w-[160px]">
                <div className="w-1.5 h-1.5 rotate-45 bg-[#B88E44] flex-shrink-0" />
                <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#C4A163]/50 to-[#B88E44]" />
              </div>
            </div>
          </div>

          {/* View All Products Link (Top Right on desktop) */}
          <div className="mt-4 md:mt-0 md:absolute md:right-0 md:bottom-1 text-center md:text-right">
            <a
              href="#collection"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#8B5C24] hover:text-[#6E4417] transition-colors group"
            >
              <span>View all Products</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* 5 Product Cards Grid (Matching media_1790967143332.png) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-6 w-full">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl border border-[#E7E1D4] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-card hover:-translate-y-1 min-w-0 w-full"
            >
              {/* Top Image Area: Soft Cream/Beige Background */}
              <div className="w-full aspect-[4/4.2] sm:aspect-square bg-[#FAF6F0] flex items-center justify-center p-4 sm:p-5 relative overflow-hidden">
                <picture className="w-full h-full flex items-center justify-center">
                  <source srcSet={product.image} type="image/webp" />
                  <img
                    src={product.fallback}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-104 transition-transform duration-500 ease-out"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>

              {/* Bottom White Area: Title & Pill Button */}
              <div className="bg-white p-4 sm:p-5 flex flex-col items-center text-center w-full min-w-0">
                <h3 
                  className="text-[13px] sm:text-[14px] font-medium text-[#222222] mb-3 sm:mb-3.5 line-clamp-1 w-full"
                >
                  {product.name}
                </h3>

                {/* Pill Button: Request price -> */}
                <button
                  onClick={() => onRequestPrice?.(product)}
                  className="px-5 sm:px-6 py-2 rounded-full bg-[#9E6E2D] hover:bg-[#86591F] text-white text-[11px] sm:text-xs font-medium tracking-wide inline-flex items-center justify-center gap-1.5 shadow-xs transition-all active:scale-95 group/btn cursor-pointer"
                >
                  <span>Request price</span>
                  <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform flex-shrink-0" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

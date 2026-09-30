import React from 'react';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 'marble-shiva',
    name: 'Marble Shiva Statue',
    image: '/images/prod-shiva.png',
  },
  {
    id: 'marble-cow-calf',
    name: 'Marble Cow with Calf Statue',
    image: '/images/prod-cow.png',
  },
  {
    id: 'marble-buddha',
    name: 'Marble Buddha Statue',
    image: '/images/prod-buddha.png',
  },
  {
    id: 'marble-temple',
    name: 'Marble Temple Statue',
    image: '/images/prod-temple.png',
  },
  {
    id: 'marble-durga',
    name: 'Marble Durga Statue',
    image: '/images/prod-durga.png',
  },
];

export default function FeaturedProducts({ onRequestPrice }) {
  return (
    <section className="py-10 sm:py-16 md:py-20 bg-white border-t border-[#F3EEE6]">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Header with Subtitle, Title, and "View all Products" */}
        <div className="relative mb-8 sm:mb-12 md:mb-14">
          <div className="text-center">
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.22em] sm:tracking-[0.25em] text-[#9E6E2D] mb-1.5 sm:mb-2 font-sans">
              HANDPICKED COLLECTION
            </p>
            <div className="flex items-center justify-center gap-2 sm:gap-4 max-w-md mx-auto px-2">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C4A163] to-[#B88E44]" />
              <h2 
                className="text-xl sm:text-3xl md:text-4xl text-[#222222] font-normal tracking-wide px-1 sm:px-2 text-center"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Featured Products
              </h2>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#C4A163] to-[#B88E44]" />
            </div>
          </div>

          {/* View All Products Link */}
          <div className="mt-3 md:mt-0 md:absolute md:right-0 md:bottom-1 text-center md:text-right">
            <a
              href="#collection"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#8B5C24] hover:text-[#6E4417] transition-colors group"
            >
              <span>View all Products</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* 5 Product Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-4 lg:gap-6">
          {products.map((product, idx) => (
            <div
              key={product.id}
              className={`group bg-[#FAF7F2] rounded-xl sm:rounded-2xl border border-[#EDE7DD]/60 p-2.5 sm:p-4 flex flex-col justify-between transition-all duration-300 hover:shadow-card hover:-translate-y-1 hover:border-[#DECFAF] ${
                idx === 4 ? 'col-span-2 sm:col-span-1 max-w-[260px] mx-auto w-full sm:max-w-none' : ''
              }`}
            >
              {/* Product Image Box */}
              <div className="w-full aspect-[4/5] rounded-lg sm:rounded-xl overflow-hidden bg-white flex items-center justify-center p-2 sm:p-3 relative shadow-inner">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Title & Action */}
              <div className="pt-3 sm:pt-4 flex flex-col items-center text-center">
                <h3 
                  className="text-[12px] sm:text-[14px] font-medium text-[#2F2B26] mb-2.5 sm:mb-3 line-clamp-1 group-hover:text-[#8B5C24] transition-colors"
                >
                  {product.name}
                </h3>

                {/* Pill Button: Request price -> */}
                <button
                  onClick={() => onRequestPrice?.(product)}
                  className="w-full py-1.5 px-3 rounded-full bg-[#9E6E2D] hover:bg-[#86591F] text-white text-[10px] sm:text-xs font-medium tracking-wide flex items-center justify-center gap-1 sm:gap-1.5 shadow-xs transition-all active:scale-95 group/btn"
                >
                  <span>Request price</span>
                  <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { ArrowRight, PhoneCall } from 'lucide-react';

export default function OurStory({ onOpenCustomise }) {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 bg-white w-full overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          
          {/* Left Column: Artisan Image (5 cols) */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none rounded-xl sm:rounded-2xl overflow-hidden shadow-card group">
              <picture className="w-full h-auto">
                <source srcSet="/images/artisan-story.webp" type="image/webp" />
                <img
                  src="/images/artisan-story.png"
                  alt="Artisan sculpting marble idol by hand at Badrinarayan Naresh Kumar Moorti Wala"
                  className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-xl sm:rounded-2xl pointer-events-none" />
            </div>
          </div>

          {/* Middle Column: Story Content (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center w-full min-w-0">
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.22em] sm:tracking-[0.25em] text-[#9E6E2D] mb-2 sm:mb-3 font-sans">
              OUR STORY
            </p>

            <h2 
              className="text-2xl sm:text-3xl lg:text-[40px] text-[#222222] font-normal leading-tight tracking-wide mb-3 sm:mb-5"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Born from Devotion,<br className="hidden sm:inline" /> Shaped with Love
            </h2>

            <p className="text-xs sm:text-sm text-[#5C564E] leading-relaxed mb-6 sm:mb-8 max-w-xl break-words">
              At Badrinarayan Nareshkumar Moortiwala, we bring you divine marble statues that are not just idols, but symbols of faith, positivity and timeless beauty. Each piece is handcrafted by skilled artisans in Jaipur using the finest marble, blending tradition with unmatched craftsmanship.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 w-full">
              <a
                href="#collection"
                className="px-5 sm:px-6 py-2.5 rounded-lg bg-[#9E6E2D] hover:bg-[#85581F] text-white text-xs sm:text-sm font-medium tracking-wide flex items-center justify-center gap-2 shadow-xs transition-all"
              >
                <span>KNOW MORE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onOpenCustomise}
                className="px-5 py-2.5 rounded-lg border border-[#9E6E2D] text-[#9E6E2D] hover:bg-[#9E6E2D] hover:text-white text-xs sm:text-sm font-medium tracking-wide flex items-center justify-center gap-2 transition-all"
              >
                <span>CUSTOMISE ON CALL</span>
                <PhoneCall className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: BNM Logo Watermark / Accent (2 cols) */}
          <div className="hidden lg:flex lg:col-span-2 items-center justify-center opacity-85">
            <div className="text-center">
              <div 
                className="font-serif text-6xl xl:text-7xl font-light text-[#C4A163]/70 leading-none"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                BNM
              </div>
              <div className="text-xs uppercase font-medium text-[#9E6E2D] tracking-wider mt-2">
                Badrinarayan Naresh Kumar
              </div>
              <div className="text-[10px] uppercase font-light text-[#9E6E2D] tracking-widest">
                Moorti Wala
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CraftsmanshipBanner({ onStartProject }) {
  return (
    <section className="relative w-full h-[380px] sm:h-[440px] md:h-[500px] overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <img
        src="/images/lions-banner.png"
        alt="Exquisite Marble Lions Masterpiece by Badrinarayan Naresh Kumar Moorti Wala"
        className="absolute inset-0 w-full h-full object-cover object-center select-none"
        loading="lazy"
      />

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/45 backdrop-brightness-90" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center text-white flex flex-col items-center">
        <h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-normal leading-tight tracking-wide mb-4 text-white drop-shadow-md"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Your Vision.<br />Our Craftsmanship.
        </h2>

        <p className="text-sm sm:text-base text-white/90 max-w-2xl font-light leading-relaxed mb-8 drop-shadow">
          Creating exquisite stone masterpieces that embody beauty, tradition, and timeless elegance
        </p>

        <button
          onClick={onStartProject}
          className="px-6 sm:px-8 py-3 rounded-lg bg-[#9E6E2D] hover:bg-[#885A1F] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase flex items-center gap-2 shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 group"
        >
          <span>START YOUR PROJECT</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}

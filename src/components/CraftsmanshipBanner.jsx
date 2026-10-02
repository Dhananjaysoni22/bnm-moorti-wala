import React from "react";
import { ArrowRight } from "lucide-react";

export default function CraftsmanshipBanner({ onStartProject }) {
  return (
    <section className="relative w-full h-[320px] sm:h-[420px] md:h-[500px] overflow-hidden flex items-center justify-center max-w-full">
      {/* Background Image */}
      <picture className="absolute inset-0 w-full h-full">
        <source srcSet="/images/lions-banner.webp" type="image/webp" />
        <img
          src="/images/lions-banner.png"
          alt="Exquisite Marble Lions Masterpiece by Badrinarayan Naresh Kumar Moorti Wala"
          className="w-full h-full object-cover object-center select-none max-w-full"
          loading="lazy"
          decoding="async"
        />
      </picture>

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/10 backdrop-brightness-90" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center text-white flex flex-col items-center w-full min-w-0">
        <h2
          className="text-2xl sm:text-4xl md:text-5xl lg:text-[54px] font-normal leading-tight tracking-wide mb-3 sm:mb-4 text-white drop-shadow-md"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Your Vision.
          <br />
          Our Craftsmanship.
        </h2>

        <p className="text-xs sm:text-sm md:text-base text-white/90 max-w-2xl font-light leading-relaxed mb-6 sm:mb-8 drop-shadow px-2 break-words">
          Creating exquisite stone masterpieces that embody beauty, tradition,
          and timeless elegance
        </p>

        <button
          onClick={onStartProject}
          className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-lg bg-[#9E6E2D] hover:bg-[#885A1F] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 group"
        >
          <span>START YOUR PROJECT</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
        </button>
      </div>
    </section>
  );
}

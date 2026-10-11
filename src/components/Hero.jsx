import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#FAF8F5] overflow-hidden">
      <div className="relative w-full">
        <picture>
          <source srcSet="/images/hero-temple.webp" type="image/webp" />
          <img
            src="/images/hero-temple.webp"
            alt="Bring home blessings with divine marble idols - Badrinarayan Naresh Kumar Moorti Wala"
            className="w-full h-auto block select-none"
            loading="eager"
            fetchpriority="high"
            decoding="sync"
          />
        </picture>

        {/* Subtle contrast gradient on left to ensure high text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-black/10 to-transparent pointer-events-none" />

        {/* Hero Text Overlay (Matches client design) */}
        <div className="absolute inset-0 flex flex-col justify-center px-4 xs:px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 pointer-events-none">
          <div className="max-w-[210px] xs:max-w-[240px] sm:max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl">
            <h1
              className="text-white font-serif text-[15px] xs:text-[18px] sm:text-2xl md:text-5xl lg:text-[40px] xl:text-[48px] 2xl:text-[52px] leading-[1.08] sm:leading-[1.1] font-bold tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] mb-1.5 xs:mb-2 sm:mb-2.5 md:mb-3.5"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Bring home
              <br />
              blessings with
              <br />
              divine marble idols
            </h1>

            <p
              className="text-white/95 text-[7px] xs:text-[9.5px] sm:text-[11px] md:text-s lg:text-[13px] xl:text-[14px] leading-[1.35] sm:leading-[1.5] font-montserrat font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.45)] max-w-[160px] xs:max-w-[195px] sm:max-w-[240px] md:max-w-[270px] lg:max-w-[320px] xl:max-w-[350px]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Divinity carved in marble. Bring home <br /> eternal blessings
              with our premium <br /> Marble God Statues, crafted <br /> with
              precision and devotion
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

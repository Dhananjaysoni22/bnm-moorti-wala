import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full bg-[#FAF8F5] overflow-hidden">
      <div className="w-full">
        <div className="relative w-full overflow-hidden shadow-xs">
          <img
            src="/images/hero-temple.png"
            alt="Badrinarayan Naresh Kumar Moorti Wala Sacred Marble Idols in Grand Temple Sanctum"
            className="w-full h-[250px] xs:h-[300px] sm:h-[380px] md:h-[480px] lg:h-[580px] xl:h-[640px] object-cover object-center select-none block"
            loading="eager"
          />
          {/* Subtle soft gradient fade at the bottom edge */}
          <div className="absolute inset-x-0 bottom-0 h-6 sm:h-8 bg-gradient-to-t from-[#FAF8F5]/40 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

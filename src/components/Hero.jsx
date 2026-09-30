import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full bg-[#FAF8F5] overflow-hidden">
      <div className="w-full">
        <div className="relative w-full overflow-hidden shadow-sm">
          <img
            src="/images/hero-temple.png"
            alt="Badrinarayan Naresh Kumar Moorti Wala Sacred Marble Idols in Grand Temple Sanctum"
            className="w-full h-auto object-cover max-h-[620px] select-none block"
            loading="eager"
          />
          {/* Subtle soft gradient fade at the bottom edge */}
          <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-[#FAF8F5]/30 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

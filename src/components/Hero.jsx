import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full bg-[#FAF8F5] overflow-hidden">
      <div className="w-full">
        <picture>
          <source srcSet="/images/hero-temple.webp" type="image/webp" />
          <img
            src="/images/hero-temple.png"
            alt="Badrinarayan Naresh Kumar Moorti Wala Sacred Marble Idols in Grand Temple Sanctum"
            className="w-full h-auto block select-none"
            loading="eager"
            fetchpriority="high"
            decoding="sync"
          />
        </picture>
      </div>
    </section>
  );
}

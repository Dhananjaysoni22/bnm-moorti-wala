import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ARTISTRY_ITEMS = [
  {
    id: 'buddha-5ft',
    title: 'Marble Buddha Statue - 5ft',
    material: 'Bhaislana Marble',
    location: 'Dubai',
    image: '/images/artistry/buddha-5ft.webp',
  },
  {
    id: 'ganesh-3ft',
    title: 'Marble Ganesh - 3ft',
    material: 'Vietnam Marble',
    location: 'Little Rock, USA',
    image: '/images/artistry/ganesh-3ft.webp',
  },
  {
    id: 'hanuman-4ft',
    title: 'Marble Hanuman - 4ft',
    material: 'Vietnam Marble',
    location: 'Singapore',
    image: '/images/artistry/hanuman-4ft.webp',
  },
  {
    id: 'temple-radha-krishna-5ft',
    title: 'Marble Temple & Radha Krishna - 5ft',
    material: 'Vietnam Marble',
    location: 'U.S.A',
    image: '/images/artistry/temple-radha-krishna-5ft.webp',
  },
  {
    id: 'elephant-pair-3.5ft',
    title: 'Elephant Pair - 3.5ft',
    material: 'Sandstone Marble',
    location: 'Udaipur',
    image: '/images/artistry/elephant-pair-3.5ft.webp',
  },
  {
    id: 'shiva-9ft',
    title: 'Marble Shiva - 09ft',
    material: 'Bhaislana Marble',
    location: 'Surat',
    image: '/images/artistry/shiva-9ft.webp',
  },
  {
    id: 'temple-ram-statue',
    title: 'Marble Temple - 15ft & Ram Statue - 5ft',
    material: 'Makrana Marble & Bhaislana Marble',
    location: 'Surat',
    image: '/images/artistry/temple-ram-statue.webp',
  },
  {
    id: 'roman-figure-6ft',
    title: 'Marble Roman Figure - 6ft',
    material: 'Vietnam Marble',
    location: 'Surat',
    image: '/images/artistry/roman-figure-6ft.webp',
  },
];

export default function OurArtistry({ onRequestPrice, onOpenCustomise }) {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Our Artistry | Badrinarayan Naresh Kumar Moorti Wala";
    window.scrollTo(0, 0);
  }, []);

  const handleCardClick = (item) => {
    if (onRequestPrice) {
      onRequestPrice({
        id: item.id,
        name: item.title,
        image: item.image,
        material: item.material,
        location: item.location,
      });
    }
  };

  const handleStartProject = () => {
    if (onOpenCustomise) {
      onOpenCustomise();
    } else {
      navigate('/customise');
    }
  };

  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen text-[#2D2A26] flex flex-col">
      {/* 1. Page Header & Introduction */}
      <section className="pt-10 sm:pt-14 md:pt-16 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <h1 
          className="text-3xl sm:text-4xl md:text-[44px] text-[#A77620] font-normal tracking-normal mb-4 sm:mb-5"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Our Artistry
        </h1>

        <p className="text-xs sm:text-sm md:text-[15px] text-[#4A453F] leading-relaxed max-w-3xl mx-auto font-sans">
          A showcase of creations shaped by skilled hands and inspired by timeless traditions.{' '}
          <strong className="font-semibold text-[#1A1816]">
            Badrinarayan Nareshkumar Moortiwala has done 1000+
          </strong>{' '}
          statues delivered worldwide, our marble creations bring Indian artistry, devotion, and
          craftsmanship to homes, temples, and spaces across the globe. Every piece reflects our
          passion for stone, attention to detail, and commitment to creating timeless works that
          last.
        </p>
      </section>

      {/* 2. Gallery Grid of 8 Handcrafted Pieces */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-6 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {ARTISTRY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => handleCardClick(item)}
              className="group relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-[#E8E2D7] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Statue Image */}
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Bottom-right info badge */}
              <div className="absolute bottom-3 right-3 sm:bottom-3.5 sm:right-3.5 max-w-[90%] bg-black/45 backdrop-blur-md rounded-lg px-2.5 py-1.5 sm:px-3 sm:py-2 text-left border border-white/10 shadow-sm pointer-events-none">
                <p className="text-white font-medium text-[11px] sm:text-[12.5px] leading-tight drop-shadow-sm font-sans">
                  {item.title}
                </p>
                <p className="text-[#E7E2DA] text-[10px] sm:text-[11px] leading-tight mt-0.5 font-sans">
                  {item.material}
                </p>
                <p className="text-[#F3ECE1] text-[9.5px] sm:text-[10.5px] leading-tight mt-0.5 flex items-center gap-1 font-sans">
                  <span>📍</span>
                  <span>{item.location}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 3. Centered Divider Indicator: AND MANY MORE */}
        <div className="py-10 sm:py-14 text-center">
          <p className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#333333] uppercase font-sans">
            AND MANY MORE
          </p>
        </div>
      </section>

      {/* 4. Full-Width Bottom Banner: Your Vision. Our Craftsmanship. */}
      <section className="relative w-full h-[360px] sm:h-[420px] md:h-[480px] lg:h-[520px] overflow-hidden flex items-center justify-center text-center">
        {/* Background Image */}
        <img
          src="/images/artistry/artistry-banner.webp"
          alt="Your Vision. Our Craftsmanship."
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Dark warm overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/35" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center">
          <h2
            className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-normal leading-[1.15] tracking-wide"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            <span>Your Vision.</span>
            <br />
            <span>Our Craftsmanship.</span>
          </h2>

          <p className="text-white/90 text-xs sm:text-sm md:text-[15px] font-normal max-w-xl mx-auto mt-3 sm:mt-4 leading-relaxed font-sans">
            Creating exquisite stone masterpieces that embody beauty, tradition, and timeless
            elegance
          </p>

          <button
            onClick={handleStartProject}
            className="mt-6 sm:mt-8 inline-flex items-center gap-2 bg-[#BD9A5D] hover:bg-[#A88548] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase px-6 py-2.5 sm:px-8 sm:py-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer font-sans"
          >
            <span>START YOUR PROJECT</span>
            <span className="text-sm sm:text-base font-bold">→</span>
          </button>
        </div>
      </section>
    </div>
  );
}

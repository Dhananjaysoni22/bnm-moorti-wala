import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ARTISTRY_ITEMS = [
  {
    id: "buddha-5ft",
    title: "Marble Buddha Statue - 5ft",
    material: "Bhaislana Marble",
    location: "Dubai",
    image: "/images/artistry/buddha-5ft.webp",
  },
  {
    id: "ganesh-3ft",
    title: "Marble Ganesh - 3ft",
    material: "Vietnam Marble",
    location: "Little Rock, USA",
    image: "/images/artistry/ganesh-3ft.webp",
  },
  {
    id: "hanuman-4ft",
    title: "Marble Hanuman - 4ft",
    material: "Vietnam Marble",
    location: "Singapore",
    image: "/images/artistry/hanuman-4ft.webp",
  },
  {
    id: "temple-radha-krishna-5ft",
    title: "Marble Temple & Radha Krishna - 5ft",
    material: "Vietnam Marble",
    location: "U.S.A",
    image: "/images/artistry/temple-radha-krishna-5ft.webp",
  },
  {
    id: "elephant-pair-3.5ft",
    title: "Elephant Pair - 3.5ft",
    material: "Sandstone Marble",
    location: "Udaipur",
    image: "/images/artistry/elephant-pair-3.5ft.webp",
  },
  {
    id: "shiva-9ft",
    title: "Marble Shiva - 09ft",
    material: "Bhaislana Marble",
    location: "Surat",
    image: "/images/artistry/shiva-9ft.webp",
  },
  {
    id: "temple-ram-statue",
    title: "Marble Temple - 15ft & Ram Statue - 5ft",
    material: "Makrana Marble & Bhaislana Marble",
    location: "Surat",
    image: "/images/artistry/temple-ram-statue.webp",
  },
  {
    id: "roman-figure-6ft",
    title: "Marble Roman Figure - 6ft",
    material: "Vietnam Marble",
    location: "Surat",
    image: "/images/artistry/roman-figure-6ft.webp",
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
      navigate("/customise");
    }
  };

  return (
    <div className="w-full bg-white text-[#2D2A26] flex flex-col">
      {/* 1. Page Header & Introduction with distinct background color matching design */}
      <section className="w-full bg-[#FAF7F4] border-b border-[#F0EBE1] pt-12 sm:pt-16 md:pt-20 pb-10 sm:pb-14 md:pb-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-[38px] text-[#A77620] font-semibold tracking-normal mb-4 sm:mb-5 font-serif">
            Our Artistry
          </h1>

          <p className="text-xs sm:text-sm md:text-[15px] text-[#4A453F] leading-relaxed md:leading-[1.75rem] max-w-3xl mx-auto  font-montserrat font-semibold">
            A showcase of creations shaped by skilled hands and inspired by
            timeless traditions.
            <br />{" "}
            <strong className="font-bold text-[#1A1816] ">
              Badrinarayan Nareshkumar Moortiwala has done 1000+
            </strong>{" "}
            statues delivered worldwide, our <br /> marble creations bring
            Indian artistry, devotion, and craftsmanship to homes, temples, and{" "}
            <br />
            spaces across the globe. Every piece reflects our passion for stone,
            attention to detail, and <br /> commitment to creating timeless
            works that last.
          </p>
        </div>
      </section>

      {/* 2. Gallery Grid of 8 Handcrafted Pieces on Pure White Background */}
      <section className="w-full bg-white pt-10 sm:pt-14 pb-8 sm:pb-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
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
                  <p className="text-white font-medium text-[11px] sm:text-[12.5px] leading-tight drop-shadow-sm font-montserrat">
                    {item.title}
                  </p>
                  <p className="text-[#E7E2DA] text-[10px] sm:text-[11px] leading-tight mt-0.5 font-montserrat">
                    {item.material}
                  </p>
                  <p className="text-[#F3ECE1] text-[9.5px] sm:text-[10.5px] leading-tight mt-0.5 flex items-center gap-1 font-montserrat">
                    <span>📍</span>
                    <span>{item.location}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 3. Centered Divider Indicator: AND MANY MORE */}
          <div className="pt-10 sm:pt-14 text-center">
            <p className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#333333] uppercase font-montserrat">
              AND MANY MORE
            </p>
          </div>
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/70 to-black/70" />

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

          <p className="text-white/90 text-xs sm:text-sm md:text-[15px] font-medium max-w-xl mx-auto mt-3 sm:mt-4 leading-relaxed font-montserrat">
            Creating exquisite stone masterpieces that embody beauty, tradition,
            and timeless elegance
          </p>

          <button
            onClick={handleStartProject}
            className="mt-6 sm:mt-8 inline-flex items-center gap-2 bg-[#A77620] hover:bg-[#9A6B1A] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase px-6 py-2.5 sm:px-8 sm:py-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer font-montserrat"
          >
            <span>START YOUR PROJECT</span>
            <span className="text-sm sm:text-base font-bold">→</span>
          </button>
        </div>
      </section>

      {/* 5. Clean White Spacing between Banner and Footer (Matches reference mockup) */}
      <div className="w-full h-12 sm:h-16 md:h-20 lg:h-24 bg-white" />
    </div>
  );
}

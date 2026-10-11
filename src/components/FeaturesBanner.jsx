import React from "react";

const features = [
  {
    icon: "/images/svg/premium.svg",
    title: "Premium\nQuality Marble",
    description: "Finest quality from India &\nVietnam",
    alt: "Premium Quality Marble",
  },
  {
    icon: "/images/svg/hand.svg",
    title: "Sculpted by\nSkilled Artisans",
    description: "Handcrafted with tradition\ntechniques",
    alt: "Sculpted by Skilled Artisans",
  },
  {
    icon: "/images/svg/worldwide.svg",
    title: "Worldwide\nDelivery",
    description: "Safe & Secure shipping\nacross the globe",
    alt: "Worldwide Delivery",
  },
  {
    icon: "/images/svg/crafted.svg",
    title: "Crafted\nExclusively",
    description: "Tailored to your\nrequirements",
    alt: "Crafted Exclusively",
  },
];

export default function FeaturesBanner() {
  return (
    <section className="bg-[#F9F5F1] border-y border-[#EDE6DC]/60 py-7 sm:py-8 md:py-8 w-full overflow-hidden">
      <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 sm:gap-y-8 lg:gap-y-0 w-full">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center text-center px-2 sm:px-4 md:px-6 min-w-0 w-full"
            >
              {/* Vertical divider on desktop */}
              {idx < features.length - 1 && (
                <div
                  className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-14 md:h-[60px] bg-gradient-to-b from-transparent via-[#CCB286] to-transparent pointer-events-none"
                  aria-hidden="true"
                />
              )}

              {/* Vertical divider on mobile 2-col layout */}
              {idx % 2 === 0 && (
                <div
                  className="lg:hidden absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-gradient-to-b from-transparent via-[#CCB286] to-transparent pointer-events-none"
                  aria-hidden="true"
                />
              )}

              {/* SVG Icon */}
              <div className="mb-2 sm:mb-2.5 flex items-center justify-center">
                <img
                  src={item.icon}
                  alt={item.alt}
                  className="h-6 sm:h-[25px] md:h-[40px] w-auto object-contain select-none"
                  loading="lazy"
                />
              </div>

              {/* Title */}
              <h3
                className="text-[13.5px] sm:text-sm md:text-[15.5px] font-serif font-medium text-[#2E2924] leading-[1.18] whitespace-pre-line mb-1.5 min-w-0"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[10.5px] sm:text-[11px] md:text-[11.5px] text-[#6E6D6C] leading-[1.32] whitespace-pre-line break-words min-w-0 font-montserrat">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

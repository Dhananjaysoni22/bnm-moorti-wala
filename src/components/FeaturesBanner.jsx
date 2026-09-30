import React from 'react';

const features = [
  {
    icon: (
      <svg className="w-7 h-7 sm:w-9 sm:h-9 text-[#B88E44]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="6 3 18 3 22 9 12 22 2 9 6 3" />
        <line x1="12" y1="22" x2="12" y2="9" />
        <line x1="2" y1="9" x2="22" y2="9" />
        <line x1="6" y1="3" x2="10" y2="9" />
        <line x1="18" y1="3" x2="14" y2="9" />
      </svg>
    ),
    title: "Premium\nQuality Marble",
    description: "Finest quality from India &\nVietnam",
  },
  {
    icon: (
      <svg className="w-7 h-7 sm:w-9 sm:h-9 text-[#B88E44]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
        <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
        <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
        <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
      </svg>
    ),
    title: "Sculpted by\nSkilled Artisans",
    description: "Handcrafted with tradition\ntechniques",
  },
  {
    icon: (
      <svg className="w-7 h-7 sm:w-9 sm:h-9 text-[#B88E44]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
    title: "Worldwide\nDelivery",
    description: "Safe & Secure shipping\nacross the globe",
  },
  {
    icon: (
      <svg className="w-7 h-7 sm:w-9 sm:h-9 text-[#B88E44]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: "Crafted\nExclusively",
    description: "Tailored to your\nrequirements",
  },
];

export default function FeaturesBanner() {
  return (
    <section className="bg-[#FCFAF7] border-y border-[#ECE6DC] py-10 sm:py-14 md:py-16 w-full overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 lg:gap-0 w-full">
          {features.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center text-center px-1.5 sm:px-4 min-w-0 w-full ${
                idx % 2 === 0 ? 'border-r border-[#E8E1D3] lg:border-r' : ''
              } ${
                idx < features.length - 1 ? 'lg:border-r lg:border-[#E8E1D3]' : ''
              }`}
            >
              {/* Icon */}
              <div className="mb-2 sm:mb-4 flex items-center justify-center p-1 sm:p-2 rounded-full text-[#B88E44]">
                {item.icon}
              </div>

              {/* Title */}
              <h3 
                className="text-xs sm:text-base md:text-lg font-serif font-medium text-[#2E2924] leading-snug whitespace-pre-line mb-1 sm:mb-2 min-w-0"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[10px] sm:text-[12px] md:text-[13px] text-[#7A7369] leading-relaxed whitespace-pre-line break-words min-w-0">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

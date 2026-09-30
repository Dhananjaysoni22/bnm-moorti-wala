import React from 'react';

export default function Logo({ variant = 'header', className = '' }) {
  const isFooter = variant === 'footer';
  const isWatermark = variant === 'watermark';

  if (isWatermark) {
    return (
      <div className={`select-none pointer-events-none text-center ${className}`}>
        <div className="font-serif text-5xl md:text-7xl font-light tracking-wide text-[#B88E44]/40" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          BNM
        </div>
        <div className="text-sm font-medium tracking-wider text-[#9E6E2D] mt-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          Badrinarayan Naresh Kumar
        </div>
        <div className="text-xs tracking-wider text-[#9E6E2D]">
          Moorti Wala
        </div>
      </div>
    );
  }

  return (
    <a href="#" className={`flex flex-col items-center group transition-opacity hover:opacity-90 ${className}`}>
      {/* Monogram BNM */}
      <div 
        className={`font-serif text-3xl md:text-4xl font-normal tracking-tight leading-none ${
          isFooter ? 'text-[#F3E5C8]' : 'text-[#B88E44]'
        }`}
        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
      >
        BNM
      </div>
      {/* Brand Subtitles */}
      <span 
        className={`text-[9px] md:text-[10px] uppercase tracking-wider font-medium mt-1 leading-tight text-center ${
          isFooter ? 'text-[#E8D4B4]' : 'text-[#7D6B58]'
        }`}
      >
        Badrinarayan Naresh Kumar
      </span>
      <span 
        className={`text-[8px] md:text-[9px] tracking-widest uppercase font-normal text-center ${
          isFooter ? 'text-[#D9BF97]' : 'text-[#96826F]'
        }`}
      >
        Moorti Wala
      </span>
    </a>
  );
}

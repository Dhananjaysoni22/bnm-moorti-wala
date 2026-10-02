import React from 'react';
import Logo from '../components/Logo';

export default function About() {
  return (
    <div className="w-full bg-white overflow-hidden">
      
      {/* 1. Top Section - About Us Intro Banner */}
      <section className="bg-[#FAF8F5] py-14 sm:py-20 md:py-24 border-b border-[#F0EBE1] text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Subtitle Badge */}
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#9E6E2D] mb-3 sm:mb-4 font-sans">
            ABOUT US
          </p>

          {/* Heading */}
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl text-[#222222] font-normal leading-tight tracking-wide mb-6 sm:mb-8"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Badrinarayan Naresh Kumar<br />Moorti Wala
          </h1>

          {/* Intro Paragraph */}
          <p className="text-xs sm:text-sm md:text-[15px] text-[#4A453F] leading-relaxed max-w-3xl mx-auto">
            <strong className="font-semibold text-[#222222]">Badrinarayan Nareshkumar Moortiwala</strong> has been a trusted manufacturer, wholesaler, supplier, and exporter of uniquely designed statues. Rooted in Jaipur, Rajasthan, the company carries a legacy of skilled artistry and expertise. Specializing in marble statues, stone artifacts, and temple craftsmanship, we blend traditional techniques with modern precision to create timeless pieces of exceptional quality and artistic appeal.
          </p>
        </div>
      </section>

      {/* 2. Middle Section - Heritage Story with Brand Emblem */}
      <section className="py-16 sm:py-24 md:py-28 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Centered BNM Monogram Emblem */}
          <div className="flex flex-col items-center justify-center mb-8 sm:mb-12">
            <Logo variant="about" link={false} className="h-16 sm:h-20 md:h-24 w-auto" />
          </div>

          {/* Story Narrative */}
          <p className="text-xs sm:text-sm md:text-[15px] text-[#4A453F] leading-relaxed max-w-4xl mx-auto mb-16 sm:mb-24">
            Founded by the visionary Late Shri. Badri Narayan Ji in the mid-1970s, <strong className="font-semibold text-[#222222]">Badrinarayan Nareshkumar Moorti</strong> Wala began with a passion for preserving the timeless artistry of Indian marble craftsmanship. Over the years, the company has grown into a trusted name in marble statues, combining traditional craftsmanship with quality, precision, and artistic excellence to serve clients across India and beyond.
          </p>

          {/* 3. Milestones & Statistics (3 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 lg:gap-16 pt-4">
            
            {/* Stat 1: 50+ Years */}
            <div className="flex flex-col items-center text-center px-4">
              <span 
                className="text-4xl sm:text-5xl md:text-6xl font-normal text-[#1A1816] tracking-tight"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                50+
              </span>
              <h3 
                className="text-base sm:text-lg font-serif text-[#2A2621] font-medium mt-2 mb-3"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Years of Legacy
              </h3>
              <p className="text-xs sm:text-[13px] text-[#635E58] leading-relaxed max-w-xs">
                Established in mid-1970s, <strong className="font-semibold text-[#2A2621]">Badrinarayan Nareshkumar Moorti</strong> has built a trusted legacy in the marble and stone craftsmanship industry.
              </p>
            </div>

            {/* Stat 2: 25+ Countries */}
            <div className="flex flex-col items-center text-center px-4">
              <span 
                className="text-4xl sm:text-5xl md:text-6xl font-normal text-[#1A1816] tracking-tight"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                25+
              </span>
              <h3 
                className="text-base sm:text-lg font-serif text-[#2A2621] font-medium mt-2 mb-3"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Countries Served
              </h3>
              <p className="text-xs sm:text-[13px] text-[#635E58] leading-relaxed max-w-xs">
                Our marble statues bring India's timeless artistry and craftsmanship to homes, temples, and clients across 25+ countries worldwide.
              </p>
            </div>

            {/* Stat 3: 40+ Artisans */}
            <div className="flex flex-col items-center text-center px-4">
              <span 
                className="text-4xl sm:text-5xl md:text-6xl font-normal text-[#1A1816] tracking-tight"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                40+
              </span>
              <h3 
                className="text-base sm:text-lg font-serif text-[#2A2621] font-medium mt-2 mb-3"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Skilled Artisans
              </h3>
              <p className="text-xs sm:text-[13px] text-[#635E58] leading-relaxed max-w-xs">
                Our 40+ skilled artisans combine traditional techniques, expert craftsmanship, and meticulous detailing to create exceptional marble statues with timeless beauty.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

import React, { useEffect } from 'react';
import Logo from '../components/Logo';
import FeaturesBanner from '../components/FeaturesBanner';

export default function About() {
  useEffect(() => {
    document.title = "About Us | Badrinarayan Naresh Kumar Moorti Wala";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-white overflow-hidden text-[#2D2A26]">
      
      {/* 1. Top Section - About Us Intro Banner */}
      <section className="bg-[#FAF8F5] py-12 sm:py-16 md:py-20 border-b border-[#F0EBE1] text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Subtitle Badge */}
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#9E6E2D] mb-3 sm:mb-4 font-sans">
            ABOUT US
          </p>

          {/* Heading */}
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl text-[#222222] font-normal leading-tight tracking-wide mb-6 sm:mb-7"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Badrinarayan Naresh Kumar<br />Moorti Wala
          </h1>

          {/* Intro Paragraph */}
          <p className="text-xs sm:text-sm md:text-[15px] text-[#4A453F] leading-relaxed max-w-3xl mx-auto font-sans">
            <strong className="font-semibold text-[#1A1816]">Badrinarayan Nareshkumar Moortiwala</strong> has been a trusted manufacturer, wholesaler, supplier, and exporter of uniquely designed statues. Based in Jaipur, Rajasthan, the company carries a legacy of skilled artistry and expertise. Specialising in marble statues, stone artifacts, and temple craftsmanship, we blend traditional techniques with modern precision to create timeless pieces of exceptional quality and artistic appeal.
          </p>
        </div>
      </section>

      {/* 2. Middle Section - Heritage Story Card with Hawa Mahal backdrop & Workshop Image */}
      <section className="py-12 sm:py-16 md:py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Card Container */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E5DDD0] shadow-sm bg-[#EAE3D6]">
            {/* Background Hawa Mahal Panorama */}
            <img
              src="/images/about/hawa-mahal.webp"
              alt="Hawa Mahal Jaipur Heritage"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
            />
            {/* Soft Warm Parchment Tint Overlay */}
            <div className="absolute inset-0 bg-[#EAE2D5]/80 backdrop-blur-[0.5px]" />

            {/* Inner Content Layout: 2 Columns */}
            <div className="relative z-10 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
              {/* Left Column: Workshop Entrance Image */}
              <div className="w-full md:w-5/12 lg:w-4/12 flex-shrink-0 flex justify-center">
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-md border border-white/60 max-w-[280px] sm:max-w-[320px] md:max-w-none w-full aspect-[3/4] bg-white">
                  <img
                    src="/images/about/workshop-entrance.webp"
                    alt="Badrinarayan Nareshkumar Moorti Wala Workshop Entrance"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right Column: Monogram Logo & Founder Narrative */}
              <div className="w-full md:w-7/12 lg:w-8/12 flex flex-col items-center text-center">
                {/* Centered BNM Monogram Emblem */}
                <div className="mb-4 sm:mb-5">
                  <Logo variant="about" link={false} className="h-14 sm:h-16 md:h-20 w-auto mx-auto" />
                </div>

                {/* Story Narrative */}
                <p className="text-xs sm:text-sm md:text-[14.5px] text-[#3D3730] leading-relaxed max-w-xl mx-auto font-sans">
                  Founded by the visionary Late Shri. Badri Narayan Ji in the mid-1970s,{' '}
                  <strong className="font-semibold text-[#1A1816]">
                    Badrinarayan Nareshkumar Moorti Wala
                  </strong>{' '}
                  began its journey in Jaipur, Rajasthan, with a passion for preserving the timeless
                  artistry of Indian marble craftsmanship. Rooted in Rajasthan's rich stone-carving
                  heritage and beginning with the renowned Makrana marble, the company has grown
                  into a trusted name in marble statues. Today, we blend traditional craftsmanship
                  with quality, precision, and artistic excellence to create timeless pieces for
                  clients across India and around the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Milestones & Statistics (3 Columns) */}
      <section className="pb-16 sm:pb-20 md:pb-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 lg:gap-16">
            
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
              <p className="text-xs sm:text-[13px] text-[#635E58] leading-relaxed max-w-xs font-sans">
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
              <p className="text-xs sm:text-[13px] text-[#635E58] leading-relaxed max-w-xs font-sans">
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
              <p className="text-xs sm:text-[13px] text-[#635E58] leading-relaxed max-w-xs font-sans">
                Our 40+ skilled artisans combine traditional techniques, expert craftsmanship, and meticulous detailing to create exceptional marble statues with timeless beauty.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Value Propositions Bar (FeaturesBanner) */}
      <FeaturesBanner />

    </div>
  );
}

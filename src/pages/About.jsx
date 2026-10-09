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
      <section className="pt-10 pb-4 sm:pt-14 sm:pb-6 md:pt-16 md:pb-8 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Subtitle Badge */}
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#9E6E2D] mb-3 sm:mb-4 font-sans">
            ABOUT US
          </p>

          {/* Heading */}
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl text-[#222222] font-normal leading-tight tracking-wide mb-5 sm:mb-6"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Badrinarayan Naresh Kumar<br />Moorti Wala
          </h1>

          {/* Intro Paragraph */}
          <p className="text-xs sm:text-sm md:text-[14.5px] text-[#4A453F] leading-relaxed max-w-3xl mx-auto font-sans">
            <strong className="font-semibold text-[#1A1816]">Badrinarayan Nareshkumar Moortiwala</strong> has been a trusted manufacturer, wholesaler, supplier, and exporter of uniquely designed statues. Based in Jaipur, Rajasthan, the company carries a legacy of skilled artistry and expertise. Specialising in marble statues, stone artifacts, and temple craftsmanship, we blend traditional techniques with modern precision to create timeless pieces of exceptional quality and artistic appeal.
          </p>
        </div>
      </section>

      {/* 2. Middle Section - Exact Wide Panoramic Heritage Banner matching original design */}
      <section className="py-6 sm:py-8 md:py-10 bg-white px-3 sm:px-5 lg:px-8">
        <div className="w-full max-w-[1160px] mx-auto">
          {/* Outer Wide Rounded Card with Hawa Mahal Panorama */}
          <div className="relative rounded-2xl sm:rounded-3xl md:rounded-[28px] overflow-hidden border border-[#DCD2C2] shadow-sm bg-[#EDE5D8] px-5 sm:px-8 md:px-12 lg:px-14 py-12 sm:py-13 md:py-15 lg:py-16 min-h-[430px] sm:min-h-[460px] md:min-h-[485px] lg:min-h-[510px] flex items-center justify-center">
            {/* Background Hawa Mahal Panorama - object-top ensures top spires, needles and domes are never cropped from above */}
            <img
              src="/images/about/hawa-mahal.webp"
              alt="Hawa Mahal Jaipur Heritage"
              className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none select-none opacity-95"
            />
            {/* Soft Warm Architectural Tint Overlay - tuned so Hawa Mahal arches and details remain clearly visible */}
            <div className="absolute inset-0 bg-[#EFE8DC]/35" />

            {/* Inner Floating Parchment Card with Exact Proportions */}
            <div className="relative z-10 w-full max-w-[980px] rounded-xl sm:rounded-2xl bg-[#EDE4D8]/80 backdrop-blur-[1px] border border-white/70 shadow-sm px-5 sm:px-7 md:px-9 lg:px-11 py-8 sm:py-9 md:py-10 min-h-[350px] md:min-h-[375px] lg:min-h-[390px] flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
              {/* Left Column: Workshop Entrance Image - sized to taller 225x305 proportions */}
              <div className="flex-shrink-0 flex items-center justify-center">
                <div className="w-[185px] h-[250px] sm:w-[205px] sm:h-[280px] md:w-[225px] md:h-[305px] rounded-xl sm:rounded-2xl overflow-hidden shadow-md border-2 border-white/80 bg-white">
                  <img
                    src="/images/about/workshop-entrance.webp"
                    alt="Badrinarayan Nareshkumar Moorti Wala Workshop Entrance"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Right Column: Monogram Logo & Founder Narrative */}
              <div className="max-w-[450px] flex flex-col items-center text-center">
                {/* Centered BNM Monogram Emblem & Brand Text */}
                <div className="mb-3 sm:mb-3.5 md:mb-4">
                  <img
                    src="/logo.svg"
                    alt="Badrinarayan Naresh Kumar Moorti Wala"
                    className="h-12 sm:h-14 md:h-[58px] w-auto mx-auto object-contain"
                  />
                </div>

                {/* Story Narrative with Balanced Line Breaks */}
                <p className="text-[11.5px] sm:text-xs md:text-[13px] text-[#332E27] leading-relaxed font-sans">
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
      <section className="pt-10 pb-14 sm:pt-12 sm:pb-18 md:pt-14 md:pb-20 bg-white px-4 sm:px-6 lg:px-8">
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

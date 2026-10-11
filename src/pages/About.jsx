import React, { useEffect } from "react";
import Logo from "../components/Logo";
import FeaturesBanner from "../components/FeaturesBanner";

export default function About() {
  useEffect(() => {
    document.title = "About Us | Badrinarayan Naresh Kumar Moorti Wala";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-white overflow-hidden text-[#2D2A26]">
      {/* 1. Top Section - About Us Intro Banner */}
      <section className="pt-10 bg-[#FAF7F4] pb-4 sm:pt-14 sm:pb-6 md:pt-16 md:pb-8 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Subtitle Badge */}
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.1em] text-[#9E6E2D] mb-3 sm:mb-4  font-montserrat">
            ABOUT US
          </p>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-4xl text-[#4c4c4c] font-semibold leading-tight tracking-wide mb-5 sm:mb-6  font-montserrat">
            Badrinarayan Naresh Kumar
            <br />
            Moorti Wala
          </h1>

          {/* Intro Paragraph */}
          <p className="text-xs sm:text-sm md:text-[17px] text-[#4A453F] leading-relaxed max-w-5xl mx-auto font-montserrat md:leading-7 font-medium">
            <strong className="font-semibold text-[#1A1816]">
              Badrinarayan Nareshkumar Moortiwala
            </strong>{" "}
            has been a trusted manufacturer, wholesaler, supplier,
            <br /> and exporter of uniquely designed statues. Based in Jaipur,
            Rajasthan, the company carries a <br />
            legacy of skilled artistry and expertise. Specialising in marble
            statues, stone artifacts, and temple <br /> craftsmanship, we blend
            traditional techniques with modern precision to create timeless
            pieces <br /> of exceptional quality and artistic appeal.
          </p>
        </div>
      </section>

      {/* 2. Middle Section - Exact Wide Panoramic Heritage Banner matching original design */}
      <section className="py-6 sm:py-8 md:py-10 bg-white px-3 sm:px-5 lg:px-8">
        <div className="w-full max-w-[1140px] mx-auto">
          {/* Outer Wide Rounded Card with Soft Sandstone Hawa Mahal Panorama */}
          <div className="relative rounded-2xl sm:rounded-3xl md:rounded-[26px] overflow-hidden border border-[#DCD2C2] shadow-xs bg-[#EDE5DA] px-4 sm:px-6 md:px-8 lg:px-10 py-5 sm:py-6 md:py-8 lg:py-8 flex items-center justify-center">
            {/* Background Hawa Mahal Panorama - soft warm watermark matching client design */}
            <img
              src="/images/about/hawa-mahal.webp"
              alt="Hawa Mahal Jaipur Heritage"
              className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none select-none opacity-20"
            />
            {/* Subtle Warm Amber Tint Overlay */}
            <div className="absolute inset-0 bg-[#EAE2D5]/20" />

            {/* Inner Floating Parchment Card with Exact Proportions */}
            <div className="relative z-10 w-full max-w-[940px] rounded-xl sm:rounded-2xl bg-[#EBE2D4]/75 backdrop-blur-xs border shadow-xs px-5 sm:px-7 md:px-9 lg:px-10 py-6 sm:py-7 md:py-8 flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
              {/* Left Column: Workshop Entrance Image */}
              <div className="flex-shrink-0 flex items-center justify-center">
                <div className="w-[180px] h-[245px] sm:w-[195px] sm:h-[265px] md:w-[215px] md:h-[285px] lg:w-[225px] lg:h-[295px] rounded-xl sm:rounded-2xl overflow-hidden shadow-md border border-black/5">
                  <img
                    src="/images/about/workshop-entrance.webp"
                    alt="Badrinarayan Nareshkumar Moorti Wala Workshop Entrance"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Right Column: Monogram Logo & Founder Narrative */}
              <div className="max-w-[530px] lg:max-w-[560px] flex flex-col items-center text-center">
                {/* Centered BNM Monogram Emblem & Brand Text */}
                <div className="mb-3.5 sm:mb-4 md:mb-5">
                  <img
                    src="/logo.svg"
                    alt="Badrinarayan Naresh Kumar Moorti Wala"
                    className="h-14 sm:h-16 md:h-[72px] lg:h-[78px] w-auto mx-auto object-contain"
                  />
                </div>

                {/* Story Narrative with Balanced Line Breaks & Font Scale matching client design */}
                <p className="text-xs sm:text-[13px] md:text-[13.5px] lg:text-[14px] text-[#36312B] leading-[1.7] md:leading-[1.78] font-montserrat font-medium">
                  Founded by the visionary Late Shri. Badri Narayan Ji in the{" "}
                  <br />
                  mid-1970s,{" "}
                  <strong className="font-semibold text-[#181614]">
                    Badrinarayan Nareshkumar Moorti Wala
                  </strong>{" "}
                  began its journey in Jaipur, Rajasthan, with a passion for
                  preserving the timeless artistry of Indian marble
                  craftsmanship. Rooted in Rajasthan's rich stone-carving
                  heritage and beginning with the renowned Makrana marble, the
                  company has grown into a trusted name in marble statues.
                  Today, we blend traditional craftsmanship with quality,
                  precision, and artistic excellence to create timeless pieces
                  for clients across India and around the world.
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
              <p className="text-xs sm:text-[13px] text-[#635E58] leading-relaxed max-w-xs font-montserrat">
                Established in mid-1970s,{" "}
                <strong className="font-semibold text-[#2A2621]">
                  Badrinarayan Nareshkumar Moorti
                </strong>{" "}
                has built a trusted legacy in the marble and stone craftsmanship
                industry.
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
              <p className="text-xs sm:text-[13px] text-[#635E58] leading-relaxed max-w-xs font-montserrat">
                Our marble statues bring India's timeless artistry and
                craftsmanship to homes, temples, and clients across 25+
                countries worldwide.
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
              <p className="text-xs sm:text-[12px] text-[#635E58] leading-relaxed max-w-xs font-montserrat">
                Our 40+ skilled artisans combine traditional techniques, expert
                craftsmanship, and meticulous detailing to create exceptional
                marble statues with timeless beauty.
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

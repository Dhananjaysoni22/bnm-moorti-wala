import React from "react";
import { ArrowRight, PhoneCall } from "lucide-react";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";

export default function OurStory({ onOpenCustomise }) {
  const navigate = useNavigate();
  return (
    <section
      id="about"
      className="py-10 sm:py-14 md:py-16 bg-white w-full overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-stretch w-full">
          {/* Left Column: Artisan Image (6 cols on lg, 5 cols on xl) */}
          <div className="lg:col-span-6 xl:col-span-5 flex justify-center w-full h-full">
            <div className="relative w-full h-full min-h-[260px] sm:min-h-[280px] lg:min-h-[300px] rounded-xl sm:rounded-2xl overflow-hidden shadow-card group">
              <picture className="w-full h-full block">
                <source srcSet="/images/artisan-story.webp" type="image/webp" />
                <img
                  src="/images/artisan-story.webp"
                  alt="Artisan sculpting marble idol by hand at Badrinarayan Naresh Kumar Moorti Wala"
                  className="w-full h-full object-cover object-[center_35%] group-hover:scale-102 transition-transform duration-700 ease-out"
                  loading="eager"
                  decoding="async"
                />
              </picture>
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-xl sm:rounded-2xl pointer-events-none" />
            </div>
          </div>

          {/* Middle Column: Story Content */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col justify-center w-full min-w-0 py-2 lg:py-4">
            <p className="text-[10px] sm:text-xs font-bold uppercase text-[#9E6E2D] mb-1.5 sm:mb-2 font-montserrat">
              OUR STORY
            </p>

            <h2
              className="text-2xl sm:text-[28px] lg:text-[30px] xl:text-[34px] text-[#222222] font-semibold leading-[1.18] tracking-wide mb-2.5 sm:mb-3"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Born from Devotion,
              <br className="hidden sm:inline" /> Shaped with Love
            </h2>

            <p className="text-xs sm:text-[13px] text-[#5C564E] leading-[1.6] mb-3.5 sm:mb-4 max-w-md break-words  font-montserrat font-semibold">
              At Badrinarayan Nareshkumar Moortiwala, we bring you <br /> divine
              marble statues that are not just idols, but symbols of <br />{" "}
              faith, positivity and timeless beauty. Each piece is <br />{" "}
              handcrafted by skilled artisans in Jaipur using the finest <br />{" "}
              marble, blending tradition with <br /> unmatched craftsmanship.
            </p>

            {/* CTAs */}
            <div className="flex flex-row flex-wrap sm:flex-nowrap items-center gap-2.5 sm:gap-3 w-full">
              <a
                onClick={() => {
                  navigate("/about");
                }}
                className="px-4 sm:px-5 py-2 rounded-lg bg-[#9E6E2D] hover:bg-[#85581F] text-white text-xs font-medium tracking-wider flex items-center justify-center gap-1.5 sm:gap-2 shadow-xs transition-all cursor-pointer whitespace-nowrap"
              >
                <span>KNOW MORE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onOpenCustomise}
                className="px-3.5 sm:px-4 py-2 rounded-lg border border-[#9E6E2D] text-[#9E6E2D] hover:bg-[#9E6E2D] hover:text-white text-xs font-medium tracking-wider flex items-center justify-center gap-1.5 sm:gap-2 transition-all cursor-pointer whitespace-nowrap"
              >
                <span>CUSTOMISE ON CALL</span>
                <PhoneCall className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: BNM Logo Watermark / Accent */}
          <div className="hidden lg:flex lg:col-span-2 xl:col-span-3 items-center justify-center">
            <Logo
              variant="watermark"
              className="w-32 sm:w-36 lg:w-36 xl:w-96 2xl:w-48 max-w-full h-auto opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

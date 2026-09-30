import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    review: "Very professional people we have had moorties delivered to Melbourne Australia. It was amazing experience. All the statues were securely sent and all the relevant documentation was up to date And we have been happy from customer service to quality of statues.",
    name: "Gandhi Bhattara",
    location: "Melbourne, Australia",
  },
  {
    review: "I would thank the team and members who made the murti of maa chamunda ,Ganpati and Hanuman the murti was made with so much efforts and perfectly that it feels like the murti is alive .Thank you so much",
    name: "RAYFINEOFFICE NEEDS",
    location: "Gujrat, India",
  },
  {
    review: "I've been purchasing religious marble murtis for the past five years they are well carve the staff and people are extremely honest and courteous willing to make all her work professional my kuteys is in Trinidad and her shipping company was efficient and reliable the prices was the best",
    name: "SAVITRI POOTOOLAL",
    location: "TRINIDAD & TOBAGO",
  },
  {
    review: "I would like thanks Badrinarayan Nareshkumar Moortiwala for their performance in quality,vssmanship,design,devotion and reasonable quotation. I would like to keep ordering my requirement from them.",
    name: "Ramesh Khusul",
    location: "Importer from Mauritius",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-[#FAF8F5]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#9E6E2D] mb-2 font-sans">
            WHAT OUR CUSTOMERS SAY
          </p>
          <div className="flex items-center justify-center gap-4 max-w-lg mx-auto">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C4A163] to-[#B88E44]" />
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl text-[#222222] font-normal tracking-wide whitespace-nowrap px-2"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Loved by Devotees Worldwide
            </h2>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#C4A163] to-[#B88E44]" />
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-[#ECE5D9] p-6 sm:p-7 flex flex-col justify-between shadow-card hover:shadow-hover hover:-translate-y-1 transition-all duration-300 relative"
            >
              <div>
                {/* Quotation Marks Icon */}
                <div className="text-[#9E6E2D] font-serif text-4xl sm:text-5xl leading-none mb-2 select-none opacity-80">
                  “
                </div>

                {/* Review Text */}
                <p className="text-[12px] sm:text-[13px] text-[#554F47] leading-relaxed italic mb-6">
                  "{t.review}"
                </p>
              </div>

              <div>
                {/* 5 Golden Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-[#D99A26] text-[#D99A26]"
                    />
                  ))}
                </div>

                {/* Author Name */}
                <h4 className="text-[13px] sm:text-[14px] font-bold text-[#2A2621] uppercase tracking-wide">
                  {t.name}
                </h4>

                {/* Location */}
                <p className="text-[11px] sm:text-[12px] text-[#867D72] mt-0.5">
                  {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

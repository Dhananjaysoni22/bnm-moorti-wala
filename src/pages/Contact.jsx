import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, ExternalLink } from 'lucide-react';

export default function Contact() {
  const googleMapsUrl =
    'https://www.google.com/maps/search/?api=1&query=Badrinarayan+Naresh+Kumar+Moorti+Wala+Chandpole+Bazar+Jaipur+Rajasthan';

  return (
    <div className="w-full bg-[#FAF8F5] min-h-[calc(100vh-80px)] flex flex-col selection:bg-[#9E6E2D] selection:text-white">
      {/* 1. Page Title */}
      <section className="pt-10 sm:pt-14 pb-8 sm:pb-12 text-center">
        <h1
          className="text-sm sm:text-base tracking-[0.25em] text-[#A77620] font-medium uppercase"
          style={{ letterSpacing: '0.22em' }}
        >
          CONTACT US
        </h1>
      </section>

      {/* 2. Main Content Grid */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Interactive Google Map Iframe */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-[500px] aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#F2EDE4] border border-[#ECE7DE] shadow-[0_4px_24px_rgba(0,0,0,0.06)] relative group">
              <iframe
                title="Badrinarayan Nareshkumar Moortiwala Location"
                src="https://maps.google.com/maps?q=Badrinarayan%20Nareshkumar%20Moortiwala%2C%20Khejron%20ka%20rasta%2C%20Chandpole%20Bazar%2C%20Jaipur%2C%20Rajasthan&t=&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full block"
              />

              {/* Floating "GET DIRECTIONS" Pill Button at Bottom Right */}
              <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 z-10">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#B99353] hover:bg-[#A37D3D] text-white text-[10px] sm:text-[11px] font-medium tracking-wider uppercase px-3.5 py-1.5 sm:py-2 rounded-lg flex items-center gap-1.5 shadow-md hover:shadow-lg transition-all active:scale-95 inline-flex"
                >
                  <span className="w-3.5 h-3.5 rounded-full bg-white/20 flex items-center justify-center">
                    <Navigation className="w-2.5 h-2.5 fill-current text-white -rotate-45" />
                  </span>
                  <span>GET DIRECTIONS</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: 2x2 Contact Details Grid */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="w-full max-w-[520px] grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-12 gap-y-8 sm:gap-y-12">
              
              {/* 1. Address Block */}
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-[#222222] stroke-[1.8]" />
                  <h2
                    className="text-lg sm:text-xl text-[#222222] font-normal"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                  >
                    Address
                  </h2>
                </div>
                <p className="text-xs sm:text-[13px] text-[#4A453F] leading-relaxed mb-3">
                  2002, third crossing, Khejron ka rasta,<br />
                  chadpole bazar, Jaipur,<br />
                  Rajasthan, India
                </p>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] sm:text-xs font-medium text-[#A77620] hover:text-[#885B13] uppercase tracking-wider underline underline-offset-4 transition-colors"
                >
                  SEE DIRECTIONS
                </a>
              </div>

              {/* 2. Call Us Block */}
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-2 mb-3">
                  <Phone className="w-4 h-4 text-[#222222] stroke-[1.8]" />
                  <h2
                    className="text-lg sm:text-xl text-[#222222] font-normal"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                  >
                    Call Us
                  </h2>
                </div>
                <div className="text-xs sm:text-[13px] text-[#4A453F] leading-relaxed mb-3 space-y-0.5">
                  <a href="tel:+919460154291" className="block hover:text-[#A77620] transition-colors">
                    +91 9460154291
                  </a>
                  <a href="tel:+919414240864" className="block hover:text-[#A77620] transition-colors">
                    +91 9414240864
                  </a>
                  <a href="tel:+918529071439" className="block hover:text-[#A77620] transition-colors">
                    +91 8529071439
                  </a>
                </div>
                <a
                  href="tel:+919460154291"
                  className="text-[11px] sm:text-xs font-medium text-[#A77620] hover:text-[#885B13] uppercase tracking-wider underline underline-offset-4 transition-colors"
                >
                  CALL NOW
                </a>
              </div>

              {/* 3. Email Block */}
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-2 mb-3">
                  <Mail className="w-4 h-4 text-[#222222] stroke-[1.8]" />
                  <h2
                    className="text-lg sm:text-xl text-[#222222] font-normal"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                  >
                    Email
                  </h2>
                </div>
                <div className="text-xs sm:text-[13px] text-[#4A453F] leading-relaxed mb-3 space-y-0.5">
                  <a
                    href="mailto:bnmmoorties@gmail.com"
                    className="block hover:text-[#A77620] transition-colors"
                  >
                    bnmmoorties@gmail.com
                  </a>
                  <a
                    href="mailto:jaipurmarble1@gmail.com"
                    className="block hover:text-[#A77620] transition-colors"
                  >
                    jaipurmarble1@gmail.com
                  </a>
                </div>
                <a
                  href="mailto:bnmmoorties@gmail.com"
                  className="text-[11px] sm:text-xs font-medium text-[#A77620] hover:text-[#885B13] uppercase tracking-wider underline underline-offset-4 transition-colors"
                >
                  MAIL
                </a>
              </div>

              {/* 4. Open Block */}
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-[#222222] stroke-[1.8]" />
                  <h2
                    className="text-lg sm:text-xl text-[#222222] font-normal"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                  >
                    Open
                  </h2>
                </div>
                <div className="text-xs sm:text-[13px] text-[#4A453F] leading-relaxed space-y-0.5">
                  <p>Monday- Saturday: 10am- 8pm</p>
                  <p>Sunday: 10am- 4pm</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

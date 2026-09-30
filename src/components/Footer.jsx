import React from 'react';
import Logo from './Logo';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

export default function Footer({ onOpenCustomise }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative bg-[#9E6E2D] text-[#F9F5EC] overflow-hidden">
      {/* Decorative Lotus Mandala Watermark SVG */}
      <div className="absolute left-4 bottom-2 opacity-15 pointer-events-none select-none">
        <svg width="220" height="220" viewBox="0 0 200 200" fill="none" stroke="currentColor">
          <path d="M100 20 C100 60 70 80 50 100 C70 120 100 140 100 180 C100 140 130 120 150 100 C130 80 100 60 100 20 Z" strokeWidth="1.5" />
          <path d="M20 100 C60 100 80 70 100 50 C120 70 140 100 180 100 C140 100 120 130 100 150 C80 130 60 100 20 100 Z" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="28" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="12" strokeWidth="1" />
          <path d="M50 50 C75 75 80 90 100 100 C120 110 135 125 150 150" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M150 50 C125 75 120 90 100 100 C80 110 65 125 50 150" strokeWidth="1" strokeDasharray="3 3" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Brand Info & Copyright (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between pr-0 lg:pr-6">
            <div>
              <div className="inline-block text-left mb-6">
                <Logo variant="footer" />
              </div>
            </div>

            <div className="text-[11px] text-[#E8D6B8] leading-relaxed mt-6 lg:mt-12 space-y-1">
              <p>© {currentYear} Badrinarayan Naresh Kumar Moorti Wala. All rights reserved.</p>
              <p className="opacity-80">
                <a href="#" className="hover:underline">Privacy policy</a> | <a href="#" className="hover:underline">Terms & Conditions</a>
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links (2.5 cols) */}
          <div className="lg:col-span-2">
            <h3 
              className="text-lg font-serif text-[#FFF8ED] mb-5 tracking-wide"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs text-[#EFE4D2]">
              <li>
                <a href="#" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#collection" className="hover:text-white transition-colors">Our Collection</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <button 
                  onClick={onOpenCustomise}
                  className="hover:text-white transition-colors text-left"
                >
                  Customise your order
                </button>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company Links (2.5 cols) */}
          <div className="lg:col-span-2">
            <h3 
              className="text-lg font-serif text-[#FFF8ED] mb-5 tracking-wide"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Company Links
            </h3>
            <ul className="space-y-2.5 text-xs text-[#EFE4D2]">
              <li>
                <a href="#" className="hover:text-white transition-colors">Privacy Policies</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Return & Refund Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Shipping Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">FAQs</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info (3 cols) */}
          <div className="lg:col-span-4">
            <h3 
              className="text-lg font-serif text-[#FFF8ED] mb-5 tracking-wide"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Contact
            </h3>

            <ul className="space-y-4 text-xs text-[#EFE4D2]">
              {/* Address */}
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#FCEBD2] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  2002, Third Crossing, Khejron ka Rasta, Chandpole Bazar, Jaipur, Rajasthan, India 302001
                </span>
              </li>

              {/* Phone numbers */}
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#FCEBD2] flex-shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <div>
                    <a href="tel:+919460154291" className="hover:text-white transition-colors">+91 9460154291</a>
                  </div>
                  <div>
                    <a href="tel:+919414240861" className="hover:text-white transition-colors">+91 9414240861</a>
                  </div>
                  <div>
                    <a href="tel:+918529071439" className="hover:text-white transition-colors">+91 8529071439</a>
                  </div>
                </div>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#FCEBD2] flex-shrink-0" />
                <a href="mailto:bnmmoorties@gmail.com" className="hover:text-white transition-colors break-all">
                  bnmmoorties@gmail.com
                </a>
              </li>

              {/* Instagram */}
              <li className="flex items-center gap-3">
                <Instagram className="w-4 h-4 text-[#FCEBD2] flex-shrink-0" />
                <a 
                  href="https://instagram.com/bnmmoorties" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors"
                >
                  bnmmoorties
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative bg-[#9E6E2D] text-[#F9F5EC] overflow-hidden w-full max-w-full">
      {/* Decorative Lotus Mandala Watermark SVG */}
      <div className="absolute left-2 sm:left-4 bottom-2 opacity-15 pointer-events-none select-none max-w-full overflow-hidden">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" stroke="currentColor">
          <path d="M100 20 C100 60 70 80 50 100 C70 120 100 140 100 180 C100 140 130 120 150 100 C130 80 100 60 100 20 Z" strokeWidth="1.5" />
          <path d="M20 100 C60 100 80 70 100 50 C120 70 140 100 180 100 C140 100 120 130 100 150 C80 130 60 100 20 100 Z" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="28" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="12" strokeWidth="1" />
          <path d="M50 50 C75 75 80 90 100 100 C120 110 135 125 150 150" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M150 50 C125 75 120 90 100 100 C80 110 65 125 50 150" strokeWidth="1" strokeDasharray="3 3" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-10 sm:pb-12 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 w-full">
          
          {/* Column 1: Brand Info & Copyright (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left justify-between pr-0 lg:pr-6 min-w-0">
            <div className="w-full flex justify-center sm:justify-start mb-6 sm:mb-8">
              <Logo variant="footer" />
            </div>

            <div className="hidden lg:block text-[11px] text-[#E8D6B8] leading-relaxed mt-4 sm:mt-6 lg:mt-12 space-y-1">
              <p>© {currentYear} Badrinarayan Naresh Kumar Moorti Wala. All rights reserved.</p>
              <p className="opacity-80">
                <a href="#" className="hover:underline">Privacy policy</a> | <a href="#" className="hover:underline">Terms & Conditions</a>
              </p>
            </div>
          </div>

          {/* Links Section: 2 columns on mobile/tablet for neat compact layout */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4 sm:gap-8 min-w-0 w-full">
            {/* Quick Links */}
            <div className="min-w-0">
              <h3 
                className="text-base sm:text-lg font-serif text-[#FFF8ED] mb-3 sm:mb-5 tracking-wide truncate"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Quick Links
              </h3>
              <ul className="space-y-2 sm:space-y-2.5 text-xs text-[#EFE4D2]">
                <li>
                  <Link to="/" className="hover:text-white transition-colors block truncate">Home</Link>
                </li>
                <li>
                  <a href="/#collection" className="hover:text-white transition-colors block truncate">Our Collection</a>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white transition-colors block truncate">About Us</Link>
                </li>
                <li>
                  <Link to="/customise" className="hover:text-white transition-colors block truncate">Customise your order</Link>
                </li>
                <li>
                  <a href="/#contact" className="hover:text-white transition-colors block truncate">Contact Us</a>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div className="min-w-0">
              <h3 
                className="text-base sm:text-lg font-serif text-[#FFF8ED] mb-3 sm:mb-5 tracking-wide truncate"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Company Links
              </h3>
              <ul className="space-y-2 sm:space-y-2.5 text-xs text-[#EFE4D2]">
                <li>
                  <a href="#" className="hover:text-white transition-colors block truncate">Privacy Policies</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors block truncate">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors block truncate">Return & Refund</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors block truncate">Shipping Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors block truncate">FAQs</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 4: Contact Info (4 cols) */}
          <div className="lg:col-span-4 min-w-0 w-full">
            <h3 
              className="text-base sm:text-lg font-serif text-[#FFF8ED] mb-3 sm:mb-5 tracking-wide"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Contact
            </h3>

            <ul className="space-y-3 sm:space-y-4 text-xs text-[#EFE4D2]">
              {/* Address */}
              <li className="flex items-start gap-2.5 sm:gap-3 min-w-0">
                <MapPin className="w-4 h-4 text-[#FCEBD2] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed break-words">
                  2002, Third Crossing, Khejron ka Rasta, Chandpole Bazar, Jaipur, Rajasthan, India 302001
                </span>
              </li>

              {/* Phone numbers */}
              <li className="flex items-start gap-2.5 sm:gap-3 min-w-0">
                <Phone className="w-4 h-4 text-[#FCEBD2] flex-shrink-0 mt-0.5" />
                <div className="space-y-0.5 min-w-0">
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
              <li className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                <Mail className="w-4 h-4 text-[#FCEBD2] flex-shrink-0" />
                <a href="mailto:bnmmoorties@gmail.com" className="hover:text-white transition-colors break-all">
                  bnmmoorties@gmail.com
                </a>
              </li>

              {/* Instagram */}
              <li className="flex items-center gap-2.5 sm:gap-3 min-w-0">
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

          {/* Mobile Copyright: centered at bottom of footer */}
          <div className="lg:hidden col-span-1 md:col-span-2 border-t border-[#B88E44]/40 pt-6 mt-2 text-center text-[11px] text-[#E8D6B8] leading-relaxed space-y-1 w-full">
            <p>© {currentYear} Badrinarayan Naresh Kumar Moorti Wala. All rights reserved.</p>
            <p className="opacity-80">
              <a href="#" className="hover:underline">Privacy policy</a> | <a href="#" className="hover:underline">Terms & Conditions</a>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}

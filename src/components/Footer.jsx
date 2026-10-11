import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="relative bg-[#9E6E2D] text-[#F9F5EC] overflow-hidden w-full max-w-full"
    >
      {/* Decorative Lotus Watermark - Left Edge Motif */}
      <div className="absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 opacity-[0.18] pointer-events-none select-none z-0">
        <picture>
          <source srcSet="/images/footer-lotus.svg" type="image/svg+xml" />
          <source srcSet="/images/footer-lotus.webp" type="image/webp" />
          <img
            src="/images/footer-lotus.svg"
            alt=""
            aria-hidden="true"
            className="w-44 sm:w-52 md:w-60 lg:w-[11rem] h-auto object-contain"
            loading="lazy"
            decoding="async"
          />
        </picture>
      </div>

      {/* Decorative Lotus Watermark - Bottom Center Motif */}
      <div className="absolute left-[48%] md:left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 opacity-[0.18] pointer-events-none select-none z-0">
        <picture>
          <source srcSet="/images/footer-lotus.svg" type="image/svg+xml" />
          <source srcSet="/images/footer-lotus.webp" type="image/webp" />
          <img
            src="/images/footer-lotus.svg"
            alt=""
            aria-hidden="true"
            className="w-40 sm:w-48 md:w-56 h-auto object-contain"
            loading="lazy"
            decoding="async"
          />
        </picture>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-10 sm:pb-12 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 w-full">
          {/* Column 1: Brand Info & Copyright (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left justify-between pr-0 lg:pr-6 min-w-0">
            <div className="w-full flex justify-center sm:justify-start mb-6 sm:mb-8">
              <Logo variant="footer" />
            </div>

            <div className="hidden lg:block text-[11px] text-[#E8D6B8] leading-relaxed mt-4 sm:mt-6 lg:mt-12 space-y-1">
              <p>
                © {currentYear} Badrinarayan Naresh Kumar Moorti Wala. All
                rights reserved.
              </p>
              <p className="opacity-80">
                <Link to="/privacy-policy" className="hover:underline">
                  Privacy policy
                </Link>{" "}
                |{" "}
                <Link to="/terms-and-conditions" className="hover:underline">
                  Terms & Conditions
                </Link>
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
                  <Link
                    to="/"
                    className="hover:text-white transition-colors block truncate"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/collection"
                    className="hover:text-white transition-colors block truncate"
                  >
                    Our Collection
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-white transition-colors block truncate"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/customise"
                    className="hover:text-white transition-colors block truncate"
                  >
                    Customise your order
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-white transition-colors block truncate"
                  >
                    Contact Us
                  </Link>
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
                  <Link
                    to="/privacy-policy"
                    className="hover:text-white transition-colors block truncate"
                  >
                    Privacy Policies
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms-and-conditions"
                    className="hover:text-white transition-colors block truncate"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/return-and-refund-policy"
                    className="hover:text-white transition-colors block truncate"
                  >
                    Return & Refund Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shipping-policy"
                    className="hover:text-white transition-colors block truncate"
                  >
                    Shipping Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faq"
                    className="hover:text-white transition-colors block truncate"
                  >
                    FAQs
                  </Link>
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
                  2002, Third Crossing, Khejron ka Rasta, Chandpole Bazar,
                  Jaipur, Rajasthan, India 302001
                </span>
              </li>

              {/* Phone numbers */}
              <li className="flex items-start gap-2.5 sm:gap-3 min-w-0">
                <Phone className="w-4 h-4 text-[#FCEBD2] flex-shrink-0 mt-0.5" />
                <div className="space-y-0.5 min-w-0">
                  <div>
                    <a
                      href="tel:+919460154291"
                      className="hover:text-white transition-colors"
                    >
                      +91 9460154291
                    </a>
                  </div>
                  <div>
                    <a
                      href="tel:+919414240861"
                      className="hover:text-white transition-colors"
                    >
                      +91 9414240864
                    </a>
                  </div>
                  <div>
                    <a
                      href="tel:+918529071439"
                      className="hover:text-white transition-colors"
                    >
                      +91 8529071439
                    </a>
                  </div>
                </div>
              </li>

              {/* Email */}
              <li className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                <Mail className="w-4 h-4 text-[#FCEBD2] flex-shrink-0" />
                <a
                  href="mailto:bnmmoorties@gmail.com"
                  className="hover:text-white transition-colors break-all"
                >
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
            <p>
              © {currentYear} Badrinarayan Naresh Kumar Moorti Wala. All rights
              reserved.
            </p>
            <p className="opacity-80">
              <Link to="/privacy-policy" className="hover:underline">
                Privacy policy
              </Link>{" "}
              |{" "}
              <Link to="/terms-and-conditions" className="hover:underline">
                Terms & Conditions
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

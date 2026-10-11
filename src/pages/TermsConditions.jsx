import React, { useEffect } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function TermsConditions() {
  useEffect(() => {
    document.title =
      "Terms & Conditions | Badrinarayan Naresh Kumar Moorti Wala";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#FAF8F5] min-h-[calc(100vh-80px)] text-[#2D2A26] selection:bg-[#A77620] selection:text-white">
      <div className="max-w-[1060px] mx-auto px-5 sm:px-8 md:px-12 pt-8 sm:pt-10 md:pt-12 pb-16 sm:pb-20 md:pb-24">
        {/* Page Title */}
        <h1
          className="text-2xl sm:text-3xl md:text-[40px] font-serif font-medium text-[#A77620] mb-4 sm:mb-5 leading-tight tracking-normal"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Terms & Conditions
        </h1>

        {/* Lead Paragraph 1 - Semibold */}
        <p className="text-[13px] sm:text-[13.5px] md:text-[14px] font-semibold text-[#1A1816] leading-[1.8] mb-4 sm:mb-5 font-montserrat">
          Welcome to Badrinarayan Nareshkumar Moorti Wala. By visiting or using
          our website, you acknowledge that you have read, understood, and
          agreed to the terms and conditions outlined below.
        </p>

        {/* Lead Paragraph 2 - Semibold */}
        <p className="text-[13px] sm:text-[13.5px] md:text-[14px] font-semibold text-[#1A1816] leading-[1.8] mb-7 sm:mb-8 font-montserrat">
          This website is owned and operated by Badrinarayan Nareshkumar Moorti
          Wala, offering handcrafted marble statues, religious idols, and stone
          products to customers in India and worldwide.
        </p>

        {/* Sections */}
        <div className="space-y-6 sm:space-y-7 text-[13px] sm:text-[13.5px] md:text-[14px] text-[#2E2A27] leading-[1.8] font-montserrat">
          {/* Section 1: Website Usage */}
          <div>
            <h2
              className="text-lg sm:text-xl md:text-[32px] font-serif font-medium text-[#A77620] mb-2.5 sm:mb-3"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              1. Website Usage
            </h2>
            <ul className="list-disc text-[14px]  list-outside ml-5 sm:ml-6 space-y-2 sm:space-y-2.5 text-[#2E2A27] font-medium">
              <li>
                You must be at least 18 years of age to use this website or make
                purchases independently.
              </li>
              <li>
                You agree to use our website responsibly and in accordance with
                applicable laws and regulations.
              </li>
              <li>
                All website content, including product photographs,
                descriptions, text, graphics, and other materials, belongs to
                Badrinarayan Nareshkumar Moorti Wala or its respective rights
                holders and may not be copied, reproduced, or used without prior
                permission.
              </li>
            </ul>
          </div>

          {/* Section 2: Product Details */}
          <div>
            <h2
              className="text-lg sm:text-xl md:text-[32px] font-serif font-medium text-[#A77620] mb-2.5 sm:mb-3"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              2. Product Details
            </h2>
            <ul className="list-disc list-outside text-[14px] font-medium ml-5 sm:ml-6 space-y-2 sm:space-y-2.5 text-[#2E2A27]">
              <li>
                We make every effort to provide accurate product descriptions,
                specifications, and images. As our marble statues and stone
                products are handcrafted, minor variations in colour, texture,
                finish, patterns, and detailing may occur, making each piece
                unique.
              </li>
              <li>
                Product prices, availability, and specifications may change from
                time to time without prior notice.
              </li>
              <li>
                Custom-made products may vary slightly from reference images due
                to the nature of the materials and the handcrafted production
                process.
              </li>
            </ul>
          </div>

          {/* Section 3: Orders and Payments */}
          <div>
            <h2
              className="text-lg sm:text-xl md:text-[32px] font-serif font-medium text-[#A77620] mb-2.5 sm:mb-3"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              3. Orders and Payments
            </h2>
            <ul className="list-disc list-outside ml-5 text-[14px] font-medium sm:ml-6 space-y-2 sm:space-y-2.5 text-[#2E2A27]">
              <li>
                All orders are subject to confirmation, acceptance, and product
                availability.
              </li>
              <li>
                We reserve the right to refuse or cancel any order for any
                reason.
              </li>
              <li>
                A 25% advance payment is required at the time of order placement
                to initiate the order and production process.
              </li>
              <li>
                The remaining 75% balance must be paid in full before dispatch
                of the products.
              </li>
              <li>
                Orders will be processed and dispatched only after the
                applicable payment requirements have been fulfilled.
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="pt-2 sm:pt-3">
            <h3 className="font-semibold  text-[16px]  font-montserrat tracking-wider  sm:text-[14px] text-[#1A1816] mb-2.5 sm:mb-3">
              Contact Information:
            </h3>
            <ul className="space-y-2 text-[16px] sm:space-y-2.5 text-xs sm:text-[13px] md:text-[13.5px] text-[#2E2A27]">
              {/* Address */}
              <li className="flex items-start gap-2.5 sm:gap-3">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#4A453F] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold text-[#1A1816]">
                    Address:
                  </strong>{" "}
                  <span>
                    2002, Third Crossing, Khejron ka Rasta, Chandpole
                    Bazar,Jaipur, Rajasthan, India 302001
                  </span>
                </div>
              </li>

              {/* Contact */}
              <li className="flex items-center gap-2.5 sm:gap-3">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#4A453F] flex-shrink-0" />
                <div>
                  <strong className="font-semibold text-[#1A1816]">
                    Contact:
                  </strong>{" "}
                  <a
                    href="tel:+919460154291"
                    className="hover:text-[#A77620] transition-colors"
                  >
                    +91 9460154291
                  </a>
                  ,{" "}
                  <a
                    href="tel:+919414240861"
                    className="hover:text-[#A77620] transition-colors"
                  >
                    +91 9414240861
                  </a>
                  ,{" "}
                  <a
                    href="tel:+918529071439"
                    className="hover:text-[#A77620] transition-colors"
                  >
                    +91 8529071439
                  </a>
                </div>
              </li>

              {/* Email */}
              <li className="flex items-center gap-2.5 sm:gap-3">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#4A453F] flex-shrink-0" />
                <div>
                  <strong className="font-semibold text-[#1A1816]">
                    Email:
                  </strong>{" "}
                  <a
                    href="mailto:bnmmoorties@gmail.com"
                    className="hover:text-[#A77620] transition-colors"
                  >
                    bnmmoorties@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

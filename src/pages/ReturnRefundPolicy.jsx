import React, { useEffect } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ReturnRefundPolicy() {
  useEffect(() => {
    document.title =
      "Return & Refund Policy | Badrinarayan Naresh Kumar Moorti Wala";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#FAF8F5] min-h-[calc(100vh-80px)] text-[#2D2A26] selection:bg-[#A77620] selection:text-white">
      <div className="max-w-[1060px] mx-auto px-5 sm:px-8 md:px-12 pt-8 sm:pt-10 md:pt-12 pb-16 sm:pb-20 md:pb-24">
        {/* Page Title */}
        <h1
          className="text-2xl sm:text-3xl md:text-[32px] font-serif font-medium text-[#A77620] mb-4 sm:mb-5 leading-tight tracking-normal"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Return & Refund Policy
        </h1>

        {/* First Section Bullets */}
        <div className="space-y-6 sm:space-y-7 text-[13px] sm:text-[13.5px] md:text-[14px] text-[#2E2A27] leading-[1.8] font-medium font-montserrat">
          <div>
            <ul className="list-disc list-outside ml-5 sm:ml-6 space-y-2 sm:space-y-2.5 text-[#2E2A27]">
              <li>
                We do not offer returns, refunds, or exchanges on our products,
                except in cases explicitly covered under our damaged or
                incorrect product policy below.
              </li>
              <li>
                All products at Badrinarayan Nareshkumar Moorti Wala are
                premium, handcrafted creations made with care, precision, and
                dedication by our skilled artisans.
              </li>
              <li>
                Due to the handcrafted nature of our marble statues and stone
                products, slight variations in colour, texture, patterns, and
                finishing may occur.
              </li>
              <li className="font-semibold text-[#1A1816]">
                Before dispatch, we share pictures and arrange a video call to
                showcase the finished product. Orders are dispatched only after
                the customer has reviewed the product and confirmed their
                satisfaction
              </li>
              <li>
                This policy helps maintain the quality of our creations while
                respecting the time, skill, and effort invested by our artisans.
              </li>
            </ul>
          </div>

          {/* Standalone Appreciation Paragraph */}
          <p className="text-[13px] sm:text-[13.5px] md:text-[14px] text-[#2E2A27] leading-[1.8] font-medium font-montserrat">
            We appreciate your understanding and support in preserving the
            heritage of Indian craftsmanship.
          </p>

          {/* Second Section: Missing, Incorrect, or Damaged Products */}
          <div>
            <h2
              className="text-lg sm:text-xl md:text-[21px] font-serif font-medium text-[#A77620] mb-2.5 sm:mb-3"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Missing, Incorrect, or Damaged Products
            </h2>
            <ul className="list-disc list-outside ml-5 sm:ml-6 space-y-2 sm:space-y-2.5 text-[#2E2A27]">
              <li>
                If a product is received damaged or incorrect due to an issue on
                our part, customers must provide clear proof for review.
              </li>
              <li>
                A complete unboxing video, recorded continuously while opening
                the package, is required to submit a damage or incorrect-product
                claim.
              </li>
              <li>
                The unboxing video must be shared with us within{" "}
                <strong className="font-semibold text-[#1A1816]">
                  48 hours of delivery
                </strong>
                .
              </li>
              <li>
                Requests submitted without a proper unboxing video may not be
                eligible for an exchange or replacement.
              </li>
              <li>
                Once the claim has been reviewed and approved, an exchange or
                replacement will be arranged where applicable.
              </li>
              <li>
                Approved replacement deliveries may take{" "}
                <strong className="font-semibold text-[#1A1816]">
                  approximately 15–20 days
                </strong>
                , depending on production and shipping requirements.
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="pt-2 sm:pt-3">
            <h3 className="font-semibold  text-[16px]  font-montserrat tracking-wider  sm:text-[14px] text-[#1A1816] mb-2.5 sm:mb-3">
              Contact Information:
            </h3>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-[13px] md:text-[13.5px] text-[#2E2A27]">
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
                    +91 9414240864
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

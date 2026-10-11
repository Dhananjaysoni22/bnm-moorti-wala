import React, { useEffect } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy | Badrinarayan Naresh Kumar Moorti Wala";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#FAF8F5] min-h-[calc(100vh-80px)] text-[#2D2A26] selection:bg-[#A77620] selection:text-white">
      <div className="max-w-[1060px] mx-auto px-5 sm:px-8 md:px-12 pt-8 sm:pt-10 md:pt-12 pb-16 sm:pb-20 md:pb-24 ">
        {/* Page Title */}
        <h1
          className="text-2xl sm:text-3xl md:text-[40px] font-serif font-medium text-[#A77620] mb-4 sm:mb-5 leading-tight tracking-normal"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Privacy Policy
        </h1>

        {/* Intro Paragraph */}
        <p className="text-[13px] sm:text-[13.5px] md:text-[14px] text-[#2E2A27] leading-[1.8] mb-6 sm:mb-7 font-montserrat font-semibold">
          At Badrinarayan Nareshkumar Moorti Wala, we respect your privacy and
          are committed to protecting your personal information. This Privacy
          Policy explains how we collect, use, store, and safeguard your
          information when you visit our website, explore our products, submit
          an inquiry, or make a purchase.
        </p>

        {/* Policy Sections */}
        <div className="space-y-6 sm:space-y-7 text-[13px] sm:text-[13.5px] md:text-[14px] text-[#2E2A27] leading-[1.8] font-montserrat">
          {/* Section 1 */}
          <div>
            <h2
              className="text-lg sm:text-xl md:text-[32px] font-serif font-medium text-[#A77620] mb-2.5 sm:mb-3"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              1. Information We Collect
            </h2>
            <ul className="list-disc list-outside ml-5 sm:ml-6 space-y-2 sm:space-y-2.5 text-[#2E2A27] text-[14px] font-medium">
              <li>
                <strong className="font-semibold text-[#1A1816]">
                  Personal Information:
                </strong>{" "}
                Your name, email address, phone number, billing address,
                shipping address, and other contact details you provide.
              </li>
              <li>
                <strong className="font-semibold text-[#1A1816]">
                  Order Information:
                </strong>{" "}
                Details about products purchased, order specifications,
                customization requests, delivery preferences, and
                transaction-related information.
              </li>
              <li>
                <strong className="font-semibold text-[#1A1816]">
                  Payment Information:
                </strong>{" "}
                Payment details required to process your purchase. Payments may
                be handled by third-party payment service providers, and we do
                not intentionally store complete payment card details on our
                servers.
              </li>
              <li>
                <strong className="font-semibold text-[#1A1816]">
                  Technical Information:
                </strong>{" "}
                Your IP address, browser type, device information, website usage
                data, and other information collected through cookies or similar
                technologies, where applicable.
              </li>
              <li>
                <strong className="font-semibold text-[#1A1816]">
                  Communication Information:
                </strong>{" "}
                Messages, inquiries, feedback, and other details you share with
                us through our website, email, phone, or other communication
                channels.
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h2
              className="text-lg sm:text-xl md:text-[32px] font-serif font-medium text-[#A77620] mb-2.5 sm:mb-3"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              2. How We Use Your Information
            </h2>
            <p className="mb-2 sm:mb-2.5 font-medium ">
              We use the collected information for purposes such as:
            </p>
            <ul className="list-disc text-[14px] list-outside ml-5 sm:ml-6 space-y-1.5 sm:space-y-2 text-[#2E2A27]  font-medium">
              <li>Processing and fulfilling your orders.</li>
              <li>
                Communicating with you regarding your orders and inquiries.
              </li>
              <li>Improving our website, products, and services.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2
              className="text-lg sm:text-xl md:text-[32px] font-serif font-medium text-[#A77620] mb-2.5 sm:mb-3"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              3. Data Protection
            </h2>
            <p className="text-[14px] leading-[1.8] font-medium">
              At Badrinarayan Nareshkumar Moorti Wala, we take appropriate
              measures to protect your personal information against unauthorized
              access, misuse, alteration, disclosure, or loss. We strive to
              maintain the security and confidentiality of the information you
              share with us and take reasonable steps to safeguard it.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2
              className="text-lg sm:text-xl md:text-[32px] font-serif font-medium text-[#A77620] mb-2.5 sm:mb-3"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              4. Sharing of Information
            </h2>
            <p className="text-[14px] leading-[1.8]  font-medium">
              We respect your privacy and do not sell or rent your personal
              information to third parties. We may share necessary information
              with trusted service providers, such as payment processors,
              shipping and delivery partners, and website service providers, to
              process orders, deliver products, respond to inquiries, and
              operate our business efficiently. Such information is shared only
              when reasonably necessary for these purposes and subject to
              appropriate confidentiality and data protection measures.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2
              className="text-lg sm:text-xl md:text-[32px] font-serif font-medium text-[#A77620] mb-2.5 sm:mb-3"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              5. Your Rights
            </h2>
            <p className="mb-5 sm:mb-6 text-[14px] font-medium leading-[1.8]">
              You have the right to request access to, correction of, or
              deletion of your personal information, subject to applicable laws.
              If you wish to update your details, raise a privacy concern, or
              exercise your data protection rights, please contact us at{" "}
              <a
                href="mailto:bnmmoorties@gmail.com"
                className="text-[#A77620] hover:underline font-medium"
              >
                bnmmoorties@gmail.com
              </a>
            </p>
          </div>

          {/* Contact Information */}
          <div className="pt-2 sm:pt-3">
            <h3 className="font-semibold text-[16px]  font-montserrat tracking-wider sm:text-[14px] text-[#1A1816] mb-2.5 sm:mb-3">
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

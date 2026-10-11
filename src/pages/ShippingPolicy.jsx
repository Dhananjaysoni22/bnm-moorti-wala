import React, { useEffect } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ShippingPolicy() {
  useEffect(() => {
    document.title = "Shipping Policy | Badrinarayan Naresh Kumar Moorti Wala";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#FAF8F5] min-h-[calc(100vh-80px)] text-[#2D2A26] selection:bg-[#9E6E2D] selection:text-white">
      <div className="max-w-[1060px] mx-auto px-5 sm:px-8 md:px-12 pt-8 sm:pt-10 md:pt-12 pb-16 sm:pb-20 md:pb-24">
        
        {/* Page Title */}
        <h1 
          className="text-2xl sm:text-3xl md:text-[32px] font-serif font-medium text-[#A77620] mb-4 sm:mb-5 leading-tight tracking-normal"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Shipping Policy
        </h1>

        <div className="space-y-6 sm:space-y-7 text-[13px] sm:text-[13.5px] md:text-[14px] text-[#2E2A27] leading-[1.65] font-sans">
          
          {/* Section 1 Bullets */}
          <div>
            <ul className="list-disc list-outside ml-5 sm:ml-6 space-y-2 sm:space-y-2.5 text-[#2E2A27]">
              <li>
                Orders are generally processed and prepared for dispatch within <strong className="font-semibold text-[#1A1816]">20–25 business days</strong>, depending on the product and order specifications.
              </li>
              <li>
                Delivery usually takes <strong className="font-semibold text-[#1A1816]">7–10 business days from the date of dispatch</strong>, subject to the destination and shipping service.
              </li>
              <li>
                Business days are considered <strong className="font-semibold text-[#1A1816]">Monday to Saturday</strong>, excluding public holidays
              </li>
              <li>
                <strong className="font-semibold text-[#1A1816]">For customized and made-to-order products</strong>, the preparation timeline may vary depending on the design, size, detailing, and craftsmanship involved.
              </li>
            </ul>
          </div>

          {/* Timeline estimates paragraph */}
          <p className="text-[13px] sm:text-[13.5px] md:text-[14px] text-[#2E2A27] leading-[1.65] font-sans">
            Delivery timelines are estimates and may be affected by public holidays, courier delays, customs clearance for international shipments, or other unforeseen circumstances. At Badrinarayan Nareshkumar Moorti Wala, we make every effort to ensure that orders are carefully prepared and delivered within the estimated timeframe.
          </p>

          {/* Section 2: Shipping and Delivery */}
          <div>
            <h2 
              className="text-lg sm:text-xl md:text-[21px] font-serif font-medium text-[#A77620] mb-2.5 sm:mb-3"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Shipping and Delivery
            </h2>
            <ul className="list-disc list-outside ml-5 sm:ml-6 space-y-2 sm:space-y-2.5 text-[#2E2A27]">
              <li>
                <strong className="font-semibold text-[#1A1816]">Badrinarayan Nareshkumar Moorti Wala</strong> works with trusted logistics and shipping partners to facilitate the safe delivery of our marble statues and handcrafted stone products across India and internationally.
              </li>
              <li>
                We take care to ensure that products are properly packed and prepared for transportation. However, we are not responsible for delays caused by courier companies, shipping providers, customs clearance, or other circumstances beyond our control.
              </li>
              <li>
                The estimated delivery time after dispatch is <strong className="font-semibold text-[#1A1816]">7–10 business days</strong>, depending on the destination and shipping method selected.
              </li>
              <li>
                Shipping charges are calculated separately based on the delivery location, distance, package dimensions, weight, and mode of transportation.
              </li>
            </ul>
          </div>

          {/* Section 3: International Shipping */}
          <div>
            <h2 
              className="text-lg sm:text-xl md:text-[21px] font-serif font-medium text-[#A77620] mb-2.5 sm:mb-3"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              International Shipping
            </h2>
            <ul className="list-disc list-outside ml-5 sm:ml-6 space-y-2 sm:space-y-2.5 text-[#2E2A27]">
              <li>
                Our products require <strong className="font-semibold text-[#1A1816]">special packaging</strong> and may be <strong className="font-semibold text-[#1A1816]">heavy or fragile</strong>, so international shipping costs vary based on destination.
              </li>
              <li>
                For shipping cost details, you can connect with us on WhatsApp at +91 9460154291. The amount will be shared after purchase.
              </li>
              <li>
                Once shipping costs are confirmed and payment is completed, shipment details will be shared.
              </li>
              <li>
                <strong className="font-semibold text-[#1A1816]">Duties & taxes</strong> for international orders <strong className="font-semibold text-[#1A1816]">are not included</strong> in the shipping charges. These must be paid directly to the courier partner at delivery. (If duties/taxes are refused by the customer and delivery cannot be completed, <strong className="font-semibold text-[#1A1816]">no refunds</strong> will be issued.)
              </li>
              <li>
                Delivery timelines: <strong className="font-semibold text-[#1A1816]">20–30 business days</strong> (customs clearance may cause delays).
              </li>
              <li>
                *International orders are not eligible for returns *
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="pt-2 sm:pt-3">
            <h3 className="font-semibold text-[13.5px] sm:text-[14px] text-[#1A1816] mb-2.5 sm:mb-3">
              Contact Information:
            </h3>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-[13px] md:text-[13.5px] text-[#2E2A27]">
              {/* Address */}
              <li className="flex items-start gap-2.5 sm:gap-3">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#4A453F] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold text-[#1A1816]">Address:</strong>{' '}
                  <span>2002, Third Crossing, Khejron ka Rasta, Chandpole Bazar,Jaipur, Rajasthan, India 302001</span>
                </div>
              </li>

              {/* Contact */}
              <li className="flex items-center gap-2.5 sm:gap-3">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#4A453F] flex-shrink-0" />
                <div>
                  <strong className="font-semibold text-[#1A1816]">Contact:</strong>{' '}
                  <a href="tel:+919460154291" className="hover:text-[#A77620] transition-colors">+91 9460154291</a>,{' '}
                  <a href="tel:+919414240861" className="hover:text-[#A77620] transition-colors">+91 9414240861</a>,{' '}
                  <a href="tel:+918529071439" className="hover:text-[#A77620] transition-colors">+91 8529071439</a>
                </div>
              </li>

              {/* Email */}
              <li className="flex items-center gap-2.5 sm:gap-3">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#4A453F] flex-shrink-0" />
                <div>
                  <strong className="font-semibold text-[#1A1816]">Email:</strong>{' '}
                  <a href="mailto:bnmmoorties@gmail.com" className="hover:text-[#A77620] transition-colors">
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

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "What types of products do you offer?",
    answer:
      "We offer handcrafted marble and sandstone statues of Hindu deities, Buddha sculptures, animal figures, temple essentials, and decorative stone artifacts for homes and temples.",
  },
  {
    id: 2,
    question: "What kinds of marble do you offer?",
    answer:
      "We work with premium marble varieties, including Makrana marble, Vietnam Marble, Ambaji marble, Bhaisala Marble, Jhiri Marble, Sandstone and more selected for their quality, durability, natural beauty, and carving suitability.",
  },
  {
    id: 3,
    question: "How can I place an order?",
    answer:
      "You can place an order through our website or contact us directly via WhatsApp to discuss product availability, pricing, customization, shipping, and payment details.",
  },
  {
    id: 4,
    question: "Do you offer customization?",
    answer:
      "Yes, we offer customization options for selected products, including size, design, finishing, and detailing, subject to feasibility and confirmation of your specific requirements.",
  },
  {
    id: 5,
    question: "What should I do if I receive a damaged product?",
    answer:
      "Please contact us within 48 hours of delivery with a clear, continuous unboxing video showing the damage so our team can review your claim.",
  },
  {
    id: 6,
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship our handcrafted marble statues and stone products internationally. Shipping charges, delivery timelines, and applicable customs duties vary depending on the destination.",
  },
  {
    id: 7,
    question: "How long does it usually take for a custom order?",
    answer:
      "Custom orders generally require 15–20 business days for preparation, depending on size, design, and detailing. Delivery time is additional and varies by destination.",
  },
];

export default function Faq() {
  // Track open items (allow toggling open/close)
  const [openItems, setOpenItems] = useState([1]);

  useEffect(() => {
    document.title =
      "Frequently Asked Questions (FAQs) | Badrinarayan Naresh Kumar Moorti Wala";
    window.scrollTo(0, 0);
  }, []);

  const toggleItem = (id) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <div className="w-full bg-[#FAF8F5] min-h-[calc(100vh-80px)] text-[#2D2A26] selection:bg-[#A77620] selection:text-white">
      <div className="max-w-[1060px] mx-auto px-5 sm:px-8 md:px-12 pt-8 sm:pt-10 md:pt-12 pb-16 sm:pb-20 md:pb-24">
        {/* Page Title */}
        <h1
          className="text-2xl sm:text-3xl md:text-[32px] font-serif font-medium text-[#A77620] mb-6 sm:mb-8 leading-tight tracking-normal"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Frequently Asked Questions (FAQs)
        </h1>

        {/* Accordion FAQ List */}
        <div className="divide-y divide-[#E5DFD4] border-t border-b border-[#E5DFD4]">
          {faqs.map((faq) => {
            const isOpen = openItems.includes(faq.id);
            return (
              <div key={faq.id} className="transition-colors font-medium">
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  className="w-full py-4 sm:py-5 flex items-center justify-between gap-4 text-left group cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-base sm:text-lg md:text-[19px] font-serif transition-colors leading-snug ${
                      isOpen
                        ? "text-[#A77620] font-semibold"
                        : "text-[#2D2A26] group-hover:text-[#A77620]"
                    }`}
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                    }}
                  >
                    {faq.question}
                  </span>

                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-[#55504A] group-hover:text-[#A77620] transition-colors">
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[1.75]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[1.75]" />
                    )}
                  </span>
                </button>

                {/* Answer Content */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 font-semibold"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-4 pt-1 text-[13px] sm:text-[13.5px] md:text-[14px] text-[#55504A] leading-[1.8] font-montserrat">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout: Didn't find your answer? */}
        <div className="mt-14 sm:mt-18 md:mt-20 pt-4 sm:pt-6 text-center flex flex-col items-center">
          <h2
            className="text-2xl sm:text-3xl md:text-[34px] font-serif text-[#222222] font-normal tracking-normal mb-2"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Didn't find your answer?
          </h2>
          <p className="text-xs sm:text-sm text-[#736E67] font-montserrat mb-6">
            Don't hesitate to contact us
          </p>
          <Link
            to="/contact"
            className="px-8 sm:px-10 py-3 rounded-md bg-[#A77620] hover:bg-[#8F641B] text-white text-xs sm:text-[13px]  tracking-wider uppercase shadow-sm hover:shadow transition-all duration-200 active:scale-[0.98] inline-flex items-center font-semibold justify-center"
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </div>
  );
}

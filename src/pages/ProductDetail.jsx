import React, { useState, useMemo } from "react";
import { useParams, useNavigate, Link, useLocation } from "react-router-dom";
import {
  ChevronDown,
  Share2,
  Instagram,
  Link2,
  Check,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { CATEGORIES, PRODUCTS } from "../data/collectionData";
import CategoryNav from "../components/CategoryNav";

export default function ProductDetail({ onRequestPrice }) {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("description");
  const [copied, setCopied] = useState(false);

  // Dynamic product lookup with state support and fuzzy fallback
  const product = useMemo(() => {
    // If router state has product matching current id, prioritize it
    if (location.state?.product && (!id || location.state.product.id === id)) {
      return location.state.product;
    }

    if (!id) return PRODUCTS[0];
    const normalized = id.toLowerCase().trim();
    const exact = PRODUCTS.find((p) => p.id.toLowerCase() === normalized);
    if (exact) return exact;

    // Fuzzy matching against id or name
    const match = PRODUCTS.find(
      (p) =>
        p.id.toLowerCase().includes(normalized) ||
        normalized.includes(p.id.toLowerCase()) ||
        p.name.toLowerCase().includes(normalized.replace(/-/g, " ")),
    );
    return match || PRODUCTS[0];
  }, [id, location.state]);

  // Active category for top bar highlight
  const activeCategoryId = product.category || "god-statues";

  const handleCategoryClick = (catId) => {
    navigate(`/collection?category=${catId}`);
  };

  // WhatsApp direct inquiry
  const handleWhatsAppInquiry = (prod) => {
    const text = `Namaste! I would like to inquire about the price and customization for "${prod.name}" from Badrinarayan Naresh Kumar Moorti Wala.\n\nLink: ${window.location.href}`;
    window.open(
      `https://wa.me/919460154291?text=${encodeURIComponent(text)}`,
      "_blank",
    );
  };

  // Native share or clipboard
  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: `Check out this handcrafted ${product.name} at Badrinarayan Naresh Kumar Moorti Wala`,
          url: window.location.href,
        });
      } catch (err) {
        // User cancelled or share failed
      }
    } else {
      handleCopyLink();
    }
  };

  // WhatsApp share
  const handleWhatsAppShare = () => {
    const shareText = `Check out this divine ${product.name} at Badrinarayan Naresh Kumar Moorti Wala: ${window.location.href}`;
    window.open(
      `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`,
      "_blank",
    );
  };

  // Copy link with tooltip
  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="w-full bg-white min-h-screen flex flex-col overflow-x-hidden selection:bg-[#A77620] selection:text-white">
      {/* 1. TOP CATEGORY NAVIGATION BAR WITH INTERACTIVE HOVER DROPDOWNS */}
      <CategoryNav
        activeCategoryId={activeCategoryId}
        activeSubCategoryId={product.subCategory}
        onSelectCategory={(catId) => {
          navigate(`/collection?category=${catId}`);
        }}
        onSelectSubCategory={(catId, subId) => {
          if (subId === "ALL") {
            navigate(`/collection?category=${catId}`);
          } else {
            navigate(`/collection?category=${catId}&sub=${subId}`);
          }
        }}
      />

      {/* 2. PRODUCT HERO SECTION (Two-column layout matching mockup) */}
      <section className="w-full py-8 sm:py-12 lg:py-14 bg-white">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
            {/* Left Column: Product Image */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-[500px] aspect-square rounded-2xl sm:rounded-3xl overflow-hidden bg-[#F6F1E9] border border-[#ECE7DE] shadow-[0_4px_24px_rgba(0,0,0,0.06)] relative group">
                <picture className="w-full h-full block">
                  {product.imageWebp && (
                    <source srcSet={product.imageWebp} type="image/webp" />
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover scale-[1.02] group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="eager"
                  />
                </picture>
              </div>
            </div>

            {/* Right Column: Title, 5 Bullets, Button, Share */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              {/* Dynamic Product Title */}
              <h1
                className="text-3xl sm:text-4xl lg:text-[34px] text-[#A77620] font-semibold tracking-wide leading-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                {product.name}
              </h1>

              {/* 5 Bullet Points with bold lead-ins (Exact copy from mockup) */}
              <ul className="space-y-4 mb-8 text-[#4A453F] text-xs sm:text-[13.5px] leading-relaxed font-montserrat">
                <li className="flex items-start gap-2">
                  <span className="text-[#4A453F] mt-[2px] font-bold text-sm leading-none">
                    •
                  </span>
                  <span>
                    <strong className="font-semibold text-[#222222]">
                      Handcrafted by Skilled Artisans
                    </strong>{" "}
                    using traditional techniques of Murtikala passed down
                    through generations.
                  </span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-[#4A453F] mt-[2px] font-bold text-sm leading-none">
                    •
                  </span>
                  <span>
                    <strong className="font-semibold text-[#222222]">
                      Authentic & Original Craftsmanship,
                    </strong>{" "}
                    carefully carved to preserve the natural beauty and
                    character of the material.
                  </span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-[#4A453F] mt-[2px] font-bold text-sm leading-none">
                    •
                  </span>
                  <span>
                    <strong className="font-semibold text-[#222222]">
                      Made with Fine-Quality Marble,
                    </strong>{" "}
                    selected for its smooth finish, durability, and timeless
                    appeal.
                  </span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-[#4A453F] mt-[2px] font-bold text-sm leading-none">
                    •
                  </span>
                  <span>
                    <strong className="font-semibold text-[#222222]">
                      Every Murti is Unique,
                    </strong>{" "}
                    with subtle handmade variations that reflect its artisanal
                    character.
                  </span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-[#4A453F] mt-[2px] font-bold text-sm leading-none">
                    •
                  </span>
                  <span>
                    <strong className="font-semibold text-[#222222]">
                      Crafted with Devotion & Precision,
                    </strong>{" "}
                    making it a meaningful choice for temples, homes, gifting,
                    and spiritual spaces.
                  </span>
                </li>
              </ul>

              {/* REQUEST PRICE Button (Exact styling from mockup) */}
              <button
                onClick={() =>
                  onRequestPrice
                    ? onRequestPrice(product)
                    : handleWhatsAppInquiry(product)
                }
                className="w-full py-3.5 sm:py-4 rounded-lg bg-[#A77620] hover:bg-[#8F641B] text-white font-medium text-xs sm:text-[13px] tracking-[0.1em] uppercase transition-all duration-200 active:scale-[0.99] cursor-pointer shadow-xs mb-6 flex items-center justify-center"
              >
                REQUEST PRICE
              </button>

              {/* Share Bar */}
              <div className="flex items-center gap-3">
                <span className="font-bold text-sm sm:text-[15px] text-[#333333]">
                  Share:
                </span>
                <div className="flex items-center gap-2.5">
                  {/* Share Node Button */}
                  <button
                    onClick={handleNativeShare}
                    title="Share this artwork"
                    className="w-8 h-8 rounded-full bg-[#A77620] hover:bg-[#8F641B] text-white flex items-center justify-center transition-transform active:scale-95 shadow-xs cursor-pointer"
                  >
                    <Share2 className="w-4 h-4 stroke-[2.2]" />
                  </button>

                  {/* WhatsApp Button */}
                  <button
                    onClick={handleWhatsAppShare}
                    title="Share on WhatsApp"
                    className="w-8 h-8 rounded-full bg-[#A77620] hover:bg-[#8F641B] text-white flex items-center justify-center transition-transform active:scale-95 shadow-xs cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 stroke-[2.2]" />
                  </button>

                  {/* Instagram Button */}
                  <a
                    href="https://www.instagram.com/bnmmoorties"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Follow on Instagram"
                    className="w-8 h-8 rounded-full bg-[#A77620] hover:bg-[#8F641B] text-white flex items-center justify-center transition-transform active:scale-95 shadow-xs cursor-pointer"
                  >
                    <Instagram className="w-4 h-4 stroke-[2.2]" />
                  </a>

                  {/* Copy Link Button */}
                  <div className="relative">
                    <button
                      onClick={handleCopyLink}
                      title="Copy link to clipboard"
                      className="w-8 h-8 rounded-full bg-[#A77620] hover:bg-[#8F641B] text-white flex items-center justify-center transition-transform active:scale-95 shadow-xs cursor-pointer"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 stroke-[2.5]" />
                      ) : (
                        <Link2 className="w-4 h-4 stroke-[2.2]" />
                      )}
                    </button>
                    {copied && (
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#222222] text-white text-[10px] px-2 py-0.5 rounded shadow whitespace-nowrap animate-fade-in pointer-events-none">
                        Copied!
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TABS SECTION: Description & Product Care (Full-width with background color matching reference mockup) */}
      <section className="w-full bg-[#FAF7F4] py-12 sm:py-16 md:py-10 border-t border-[#F0EAE1]">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered Tab Headers */}
          <div className="flex items-center justify-center gap-8 sm:gap-12 mb-8 sm:mb-10">
            <button
              onClick={() => setActiveTab("description")}
              className={`text-sm sm:text-base md:text-[17px] tracking-wide transition-colors cursor-pointer relative pb-1 font-montserrat ${
                activeTab === "description"
                  ? "text-[#A77620] font-semibold underline underline-offset-8 decoration-2 decoration-[#A77620]"
                  : "text-[#666666] hover:text-[#A77620] font-normal"
              }`}
            >
              Description
            </button>

            <button
              onClick={() => setActiveTab("care")}
              className={`text-sm sm:text-base md:text-[17px] tracking-wide transition-colors cursor-pointer relative pb-1 font-montserrat ${
                activeTab === "care"
                  ? "text-[#A77620] font-semibold underline underline-offset-8 decoration-2 decoration-[#A77620]"
                  : "text-[#666666] hover:text-[#A77620] font-normal"
              }`}
            >
              Product Care
            </button>
          </div>

          {/* Tab Contents */}
          <div className="max-w-3xl mx-auto px-2">
            {activeTab === "description" ? (
              <ul className="space-y-4 text-[#4A453F] text-xs sm:text-[13.5px] leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#4A453F] mt-[2px] font-bold text-sm leading-none">
                    •
                  </span>
                  <span>
                    <strong className="font-semibold text-[#222222]">
                      Handcrafted by Skilled Artisans
                    </strong>{" "}
                    using traditional techniques of Murtikala passed down
                    through generations.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <span className="text-[#4A453F] mt-[2px] font-bold text-sm leading-none">
                    •
                  </span>
                  <span>
                    <strong className="font-semibold text-[#222222]">
                      Authentic & Original Craftsmanship,
                    </strong>{" "}
                    carefully carved to preserve the natural beauty and
                    character of the material.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <span className="text-[#4A453F] mt-[2px] font-bold text-sm leading-none">
                    •
                  </span>
                  <span>
                    <strong className="font-semibold text-[#222222]">
                      Made with Fine-Quality Marble,
                    </strong>{" "}
                    selected for its smooth finish, durability, and timeless
                    appeal.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <span className="text-[#4A453F] mt-[2px] font-bold text-sm leading-none">
                    •
                  </span>
                  <span>
                    <strong className="font-semibold text-[#222222]">
                      Every Murti is Unique,
                    </strong>{" "}
                    with subtle handmade variations that reflect its artisanal
                    character.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <span className="text-[#4A453F] mt-[2px] font-bold text-sm leading-none">
                    •
                  </span>
                  <span>
                    <strong className="font-semibold text-[#222222]">
                      Crafted with Devotion & Precision,
                    </strong>{" "}
                    making it a meaningful choice for temples, homes, gifting,
                    and spiritual spaces.
                  </span>
                </li>
              </ul>
            ) : (
              <div className="space-y-6">
                {/* Centered Intro Paragraph */}
                <p className="text-center text-[#4A453F] text-xs sm:text-[13.5px] max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8">
                  Each marble idol from{" "}
                  <strong className="font-semibold text-[#222222]">
                    Badrinarayan Nareshkumar Moorti Wala
                  </strong>{" "}
                  is a reflection of traditional craftsmanship, devotion, and
                  meticulous detailing. With proper care, your idol can retain
                  its beauty, finish, and character for generations.
                </p>

                {/* 5 Product Care Points */}
                <ul className="space-y-4 text-[#4A453F] text-xs sm:text-[13.5px] leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#4A453F] mt-[2px] font-bold text-sm leading-none">
                      •
                    </span>
                    <span>
                      <strong className="font-semibold text-[#222222]">
                        Dust gently:
                      </strong>{" "}
                      Use a soft-bristled brush or a clean, soft cloth to remove
                      dust. Avoid vigorous rubbing, especially on painted or
                      gilded details.
                    </span>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <span className="text-[#4A453F] mt-[2px] font-bold text-sm leading-none">
                      •
                    </span>
                    <span>
                      <strong className="font-semibold text-[#222222]">
                        Clean with care:
                      </strong>{" "}
                      If required, lightly wipe the surface with a soft, damp
                      cloth and allow the idol to dry naturally.
                    </span>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <span className="text-[#4A453F] mt-[2px] font-bold text-sm leading-none">
                      •
                    </span>
                    <span>
                      <strong className="font-semibold text-[#222222]">
                        Protect from stains:
                      </strong>{" "}
                      Puja materials such as milk, honey, kumkum, turmeric,
                      sandalwood paste, saffron, flowers, ghee, and other
                      offerings may leave marks on Vietnam marble. Use them
                      carefully and clean any residue promptly.
                    </span>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <span className="text-[#4A453F] mt-[2px] font-bold text-sm leading-none">
                      •
                    </span>
                    <span>
                      <strong className="font-semibold text-[#222222]">
                        Keep away from direct heat:
                      </strong>{" "}
                      Place the idol away from diyas, incense sticks, agarbatti,
                      dhoop
                    </span>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <span className="text-[#4A453F] mt-[2px] font-bold text-sm leading-none">
                      •
                    </span>
                    <span>
                      <strong className="font-semibold text-[#222222]">
                        Handle with care:
                      </strong>{" "}
                      Avoid moving the idol unnecessarily. When relocating it,
                      support the base and body securely rather than holding
                      delicate elements such as hands, ornaments, or decorative
                      parts.
                    </span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

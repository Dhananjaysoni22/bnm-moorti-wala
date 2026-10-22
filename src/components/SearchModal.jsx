import React, { useState, useMemo, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  X,
  ArrowRight,
  ChevronRight,
  Sparkles,
  MessageCircle,
  Tag,
} from "lucide-react";
import { PRODUCTS, CATEGORIES } from "../data/collectionData";

// Hindi & English search synonyms dictionary
const SYNONYM_MAP = {
  ganesha: ["ganesh", "ganpati", "vinayak", "lambodar"],
  ganesh: ["ganesha", "ganpati", "vinayak", "lambodar"],
  ganpati: ["ganesh", "ganesha"],
  vinayak: ["ganesh", "ganesha"],
  shiv: ["shiva", "mahadev", "bholenath", "shankar"],
  shiva: ["shiv", "mahadev", "bholenath", "shankar"],
  mahadev: ["shiva", "shiv", "bholenath"],
  bholenath: ["shiva", "shiv"],
  krishna: ["radha krishna", "radha", "radhe", "kanha", "gopal"],
  radha: ["radha krishna", "krishna", "radhe"],
  radhe: ["radha krishna", "krishna"],
  durga: ["chamunda", "mata", "sherawali", "devi", "ambe"],
  chamunda: ["durga", "mata"],
  mata: ["durga", "chamunda", "saraswati", "laxmi"],
  devi: ["durga", "chamunda", "saraswati", "laxmi"],
  lakshmi: ["laxmi", "vishnu laxmi"],
  laxmi: ["lakshmi", "vishnu laxmi"],
  vishnu: ["vishnu laxmi", "narayan", "ram darbar"],
  narayan: ["vishnu", "vishnu laxmi"],
  ram: ["ram darbar", "shri ram", "sita", "laxman"],
  ramdarbar: ["ram darbar"],
  hanuman: ["balaji", "anjaneya", "bajrangbali", "maruti"],
  bajrangbali: ["hanuman", "balaji"],
  mandir: ["temple", "temples"],
  temple: ["mandir", "temples"],
  temples: ["mandir", "temple"],
  murti: ["statue", "idol"],
  moorti: ["statue", "idol"],
  idol: ["statue", "murti", "moorti"],
  idols: ["statue", "idol"],
  statues: ["statue", "idol"],
  animal: ["animals", "lion", "elephant", "cow", "monkey"],
  animals: ["animal", "lion", "elephant", "cow", "monkey"],
  sher: ["lion"],
  hathi: ["elephant"],
  gaumata: ["cow", "calf", "kamdhenu"],
  kamdhenu: ["cow", "calf"],
  cow: ["gaumata", "kamdhenu", "calf"],
  tulsi: ["tulsi pot", "pot", "gamla"],
  gamla: ["tulsi", "pot"],
  pot: ["tulsi pot", "tulsi"],
  thali: ["plate", "marble plate"],
  plate: ["thali", "marble plate"],
  bust: ["human bust", "portrait", "statue of person"],
  decor: ["home decor", "decorative", "tulsi", "plate"],
};

// Popular searches suggested when query is empty
const POPULAR_SEARCHES = [
  "Marble Shiva",
  "Radha Krishna",
  "Marble Ganesh",
  "Marble Durga",
  "Ram Darbar",
  "Marble Hanuman",
  "Marble Temples",
  "Cow with Calf",
  "Marble Lion",
  "Marble Tulsi Pot",
];

export default function SearchModal({
  isOpen,
  onClose,
  onSelectProduct,
  onRequestPrice,
}) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const resultsContainerRef = useRef(null);
  const navigate = useNavigate();

  // Reset query and focus input on open
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Helper to get category readable name
  const getCategoryName = (catId) => {
    const cat = CATEGORIES.find((c) => c.id === catId);
    return cat ? cat.name : "Marble Statues";
  };

  // Find matching categories and subcategories
  const matchingCollections = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q || q.length < 2) return [];

    const matches = [];

    CATEGORIES.forEach((cat) => {
      // Check category name
      if (
        cat.name.toLowerCase().includes(q) ||
        cat.id.toLowerCase().includes(q)
      ) {
        matches.push({
          type: "category",
          title: cat.name,
          subtitle: "Explore full category collection",
          categoryId: cat.id,
          subId: "ALL",
        });
      }

      // Check subcategories
      if (cat.subCategories) {
        cat.subCategories.forEach((sub) => {
          if (sub.id !== "ALL" && sub.name.toLowerCase().includes(q)) {
            matches.push({
              type: "subcategory",
              title: `${sub.name} Statues`,
              subtitle: `In ${cat.name}`,
              categoryId: cat.id,
              subId: sub.id,
            });
          }
        });
      }
    });

    return matches.slice(0, 3);
  }, [query]);

  // Filter and score products based on search query
  const filteredProducts = useMemo(() => {
    const raw = query.toLowerCase().trim();
    if (!raw) return [];

    // Expand search tokens with synonyms
    const tokens = raw.split(/\s+/).filter(Boolean);
    const expandedTokens = new Set(tokens);

    tokens.forEach((t) => {
      if (SYNONYM_MAP[t]) {
        SYNONYM_MAP[t].forEach((syn) => {
          syn.split(/\s+/).forEach((w) => expandedTokens.add(w));
        });
      }
    });

    const tokenArray = Array.from(expandedTokens);

    const scored = PRODUCTS.map((prod) => {
      const name = prod.name.toLowerCase();
      const catId = (prod.category || "").toLowerCase();
      const catName = getCategoryName(prod.category).toLowerCase();
      const sub = (prod.subCategory || "").toLowerCase();

      let score = 0;

      // Exact name match
      if (name === raw) score += 100;
      else if (name.startsWith(raw)) score += 60;
      else if (name.includes(raw)) score += 40;

      // SubCategory match (e.g. searching 'shiva' matches subCategory 'SHIVA')
      if (sub && sub === raw) score += 50;
      else if (sub && sub.includes(raw)) score += 30;

      // Category match
      if (catName.includes(raw) || catId.includes(raw)) score += 20;

      // Multi-token matches
      let matchedTokens = 0;
      tokenArray.forEach((tok) => {
        if (
          name.includes(tok) ||
          sub.includes(tok) ||
          catName.includes(tok) ||
          catId.includes(tok)
        ) {
          matchedTokens++;
          score += 15;
        }
      });

      // Require at least one token match
      if (score === 0 && matchedTokens === 0) return null;

      return { ...prod, score };
    }).filter(Boolean);

    // Sort by score descending
    scored.sort((a, b) => b.score - a.score);

    return scored;
  }, [query]);

  // Total results count
  const totalResults = filteredProducts.length;

  // Handle navigating to a product
  const handleSelectProduct = (product) => {
    onClose();
    if (onSelectProduct) {
      onSelectProduct(product);
    }
    navigate(`/product/${product.id}`);
  };

  // Handle navigating to a category / subcategory
  const handleSelectCollection = (col) => {
    onClose();
    if (col.subId && col.subId !== "ALL") {
      navigate(`/collection?category=${col.categoryId}&sub=${col.subId}`);
    } else {
      navigate(`/collection?category=${col.categoryId}`);
    }
  };

  // Handle hitting Enter to search or open first result
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (filteredProducts.length > 0) {
        handleSelectProduct(filteredProducts[selectedIndex] || filteredProducts[0]);
      } else if (matchingCollections.length > 0) {
        handleSelectCollection(matchingCollections[0]);
      } else if (query.trim()) {
        onClose();
        navigate(`/collection?search=${encodeURIComponent(query.trim())}`);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev < filteredProducts.length - 1 ? prev + 1 : prev,
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-6 sm:pt-16 md:pt-20 px-3 sm:px-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#EDE7DD] relative max-h-[85vh] flex flex-col animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Search Input Bar */}
        <div className="p-3.5 sm:p-4.5 border-b border-[#EFEBE3] bg-white flex items-center gap-3">
          <Search className="w-5 h-5 text-[#9E6E2D] flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Search marble idols, deities, temples, animals..."
            className="flex-1 text-sm sm:text-base text-[#222222] placeholder-[#9E9589] focus:outline-hidden font-sans"
          />

          {/* Clear input button */}
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                inputRef.current?.focus();
              }}
              className="p-1 rounded-full text-[#8C8275] hover:text-[#222222] hover:bg-[#F5EFE6] transition-colors"
              title="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}

          {/* ESC badge on desktop */}
          <span className="hidden sm:inline-block text-[10px] font-mono font-medium px-2 py-0.5 rounded-md bg-[#F4EFE6] text-[#7A7165] border border-[#E5DFD4]">
            ESC
          </span>

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full text-[#8C8275] hover:text-[#222222] hover:bg-[#F5EFE6] transition-colors"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Results or Empty State */}
        <div
          ref={resultsContainerRef}
          className="overflow-y-auto p-3 sm:p-4 flex-1 divide-y divide-[#F5EFE6] no-scrollbar"
        >
          {/* STATE 1: Empty Query - Show Suggestions & Categories */}
          {!query.trim() && (
            <div className="space-y-5 py-2">
              {/* Popular Search Chips */}
              <div>
                <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#9E6E2D] mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Popular Idol Searches</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {POPULAR_SEARCHES.map((term) => (
                    <button
                      key={term}
                      type="button"
                      onClick={() => {
                        setQuery(term);
                        inputRef.current?.focus();
                      }}
                      className="px-3 py-1.5 rounded-lg bg-[#FAF7F2] hover:bg-[#9E6E2D] text-[#4A453F] hover:text-white border border-[#EFEBE3] text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 group"
                    >
                      <Search className="w-3 h-3 text-[#9E6E2D] group-hover:text-white transition-colors" />
                      <span>{term}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Browse All Collections Grid */}
              <div className="pt-2">
                <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#7A7165] mb-3">
                  <Tag className="w-3.5 h-3.5" />
                  <span>Browse Collections</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => handleSelectCollection({ categoryId: cat.id, subId: "ALL" })}
                      className="p-2.5 rounded-xl border border-[#EDE7DD] bg-white hover:border-[#9E6E2D] hover:bg-[#FAF8F5] transition-all text-left group cursor-pointer flex items-center justify-between"
                    >
                      <span className="text-xs font-serif font-medium text-[#2C2825] group-hover:text-[#9E6E2D] truncate">
                        {cat.name}
                      </span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#B88E44] group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STATE 2: Has Query - Show Matches */}
          {query.trim() && (
            <div className="space-y-3">
              {/* Collection Quick Matches Bar (if any category/subcategory matches) */}
              {matchingCollections.length > 0 && (
                <div className="pb-3 border-b border-[#F4EFE6]">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9E6E2D] mb-2 font-sans">
                    Matching Collections
                  </p>
                  <div className="space-y-1.5">
                    {matchingCollections.map((col, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleSelectCollection(col)}
                        className="w-full px-3 py-2 rounded-xl bg-[#FAF7F2] hover:bg-[#9E6E2D]/10 border border-[#EFEBE3] hover:border-[#9E6E2D] flex items-center justify-between transition-colors group cursor-pointer"
                      >
                        <div className="text-left">
                          <span className="text-xs sm:text-sm font-semibold text-[#2C2825] group-hover:text-[#9E6E2D]">
                            {col.title}
                          </span>
                          <span className="text-[11px] text-[#7A7165] ml-2">
                            ({col.subtitle})
                          </span>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-[#9E6E2D] group-hover:translate-x-1 transition-transform" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Product Results List */}
              {filteredProducts.length > 0 ? (
                <div>
                  <div className="flex items-center justify-between text-[11px] text-[#7A7165] pb-2 px-1">
                    <span>
                      Found <strong className="text-[#222222]">{totalResults}</strong> matching marble {totalResults === 1 ? "idol" : "idols"}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-[#9E6E2D]">
                      Click to view details
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    {filteredProducts.map((item, idx) => {
                      const isSelected = idx === selectedIndex;
                      return (
                        <div
                          key={item.id}
                          onClick={() => handleSelectProduct(item)}
                          className={`flex items-center gap-3 p-2.5 rounded-xl border transition-all cursor-pointer group ${
                            isSelected
                              ? "bg-[#FAF7F2] border-[#9E6E2D] shadow-xs"
                              : "bg-white border-transparent hover:bg-[#FAF7F2] hover:border-[#EBE3D5]"
                          }`}
                        >
                          {/* Image Thumbnail */}
                          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-[#F8F5F0] border border-[#EFEBE3] overflow-hidden flex items-center justify-center flex-shrink-0">
                            <img
                              src={item.imageWebp || item.image}
                              alt={item.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                            />
                          </div>

                          {/* Product Details */}
                          <div className="flex-1 min-w-0">
                            <h4 className="text-xs sm:text-sm font-semibold text-[#222222] group-hover:text-[#9E6E2D] transition-colors truncate">
                              {item.name}
                            </h4>
                            <div className="flex items-center gap-2 mt-0.5">
                              <span className="text-[10px] text-[#7A7165] font-serif">
                                {getCategoryName(item.category)}
                              </span>
                              {item.subCategory && item.subCategory !== "ALL" && (
                                <>
                                  <span className="text-[#D0C7B8] text-[9px]">•</span>
                                  <span className="text-[9px] font-semibold text-[#9E6E2D] uppercase tracking-wider bg-[#9E6E2D]/10 px-1.5 py-0.2 rounded-sm">
                                    {item.subCategory}
                                  </span>
                                </>
                              )}
                            </div>
                          </div>

                          {/* View details arrow */}
                          <div className="flex items-center gap-1 text-xs text-[#9E6E2D] font-medium opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                            <span className="hidden sm:inline text-[11px]">View Idol</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                /* Empty state when query produces no matches */
                <div className="p-8 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#FAF6F0] border border-[#EFEBE3] flex items-center justify-center mx-auto mb-3 text-[#9E6E2D]">
                    <Search className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-base sm:text-lg text-[#222222] mb-1">
                    No idols found matching "{query}"
                  </h4>
                  <p className="text-xs text-[#7A7165] max-w-md mx-auto mb-5 leading-relaxed">
                    Try searching by deity (e.g. Shiva, Ganesh, Radha Krishna), material, or animal. Every statue can also be custom sculpted to your exact dimensions.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5">
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        navigate(`/collection?search=${encodeURIComponent(query)}`);
                      }}
                      className="px-4 py-2 rounded-lg bg-[#9E6E2D] text-white text-xs font-medium hover:bg-[#85581F] transition-colors cursor-pointer"
                    >
                      Search All Collections
                    </button>

                    <a
                      href="https://wa.me/919460154291?text=Hello,%20I%20am%20looking%20for%20a%20custom%20marble%20idol."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white text-xs font-medium transition-colors flex items-center gap-1.5"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Customise on WhatsApp</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer Bar */}
        <div className="p-3 bg-[#FAF8F5] border-t border-[#EFEBE3] flex items-center justify-between text-[11px] text-[#7A7165]">
          <div className="flex items-center gap-2">
            <span className="font-medium text-[#222222]">Tip:</span>
            <span>Press <kbd className="font-mono bg-white px-1.5 py-0.5 rounded border border-[#E5DFD4] text-[10px]">Enter</kbd> to view</span>
          </div>

          <button
            type="button"
            onClick={() => {
              onClose();
              navigate(query.trim() ? `/collection?search=${encodeURIComponent(query.trim())}` : "/collection");
            }}
            className="text-[#9E6E2D] hover:text-[#7A5018] font-medium hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>View all in Collection</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

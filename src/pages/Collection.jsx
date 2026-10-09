import React, { useState, useMemo, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import {
  ChevronDown,
  Check,
  Filter,
  X,
  SlidersHorizontal,
  MessageCircle,
} from "lucide-react";
import { CATEGORIES, PRODUCTS } from "../data/collectionData";

export default function Collection({ onRequestPrice }) {
  const [searchParams, setSearchParams] = useSearchParams();

  // Read category and subcategory from query params if present
  const paramCategory = searchParams.get("category");
  const paramSub = searchParams.get("sub");

  const [selectedCategory, setSelectedCategory] = useState(
    paramCategory || "god-statues",
  );
  const [selectedSubCategories, setSelectedSubCategories] = useState(
    paramSub ? [paramSub.toUpperCase()] : ["ALL"],
  );
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Sync with URL query parameter changes
  useEffect(() => {
    if (paramCategory && CATEGORIES.some((c) => c.id === paramCategory)) {
      setSelectedCategory(paramCategory);
      if (paramSub) {
        setSelectedSubCategories([paramSub.toUpperCase()]);
      } else {
        setSelectedSubCategories(["ALL"]);
      }
    }
  }, [paramCategory, paramSub]);

  // Current category configuration
  const currentCategoryObj = useMemo(() => {
    return CATEGORIES.find((c) => c.id === selectedCategory) || CATEGORIES[0];
  }, [selectedCategory]);

  // All products in the active category
  const categoryProducts = useMemo(() => {
    return PRODUCTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  // Subcategories available for active category
  const availableSubCategories = useMemo(() => {
    return currentCategoryObj.subCategories || [{ id: "ALL", name: "ALL" }];
  }, [currentCategoryObj]);

  // Calculate product counts per subcategory
  const subCategoryCounts = useMemo(() => {
    const counts = { ALL: categoryProducts.length };
    categoryProducts.forEach((p) => {
      const sub = p.subCategory;
      if (sub) {
        counts[sub] = (counts[sub] || 0) + 1;
      }
    });
    return counts;
  }, [categoryProducts]);

  // Handle category switch
  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    setSelectedSubCategories(["ALL"]);
    setSearchParams({ category: categoryId });
  };

  // Handle subcategory selection / toggle
  const handleSubCategoryToggle = (subId) => {
    if (subId === "ALL") {
      setSelectedSubCategories(["ALL"]);
      setSearchParams({ category: selectedCategory });
      return;
    }

    // If currently selected, clicking it again toggles back to ALL
    if (
      selectedSubCategories.length === 1 &&
      selectedSubCategories[0] === subId
    ) {
      setSelectedSubCategories(["ALL"]);
      setSearchParams({ category: selectedCategory });
    } else {
      // Switch directly to the clicked subcategory (e.g., from GANESH to RADHA KRISHNA)
      setSelectedSubCategories([subId]);
      setSearchParams({ category: selectedCategory, sub: subId });
    }
  };

  // Filtered products to display
  const filteredProducts = useMemo(() => {
    if (
      selectedSubCategories.includes("ALL") ||
      selectedSubCategories.length === 0
    ) {
      return categoryProducts;
    }
    return categoryProducts.filter((p) =>
      selectedSubCategories.includes(p.subCategory),
    );
  }, [categoryProducts, selectedSubCategories]);

  // Dynamic sidebar heading
  const sidebarHeading = useMemo(() => {
    if (
      selectedSubCategories.length === 1 &&
      selectedSubCategories[0] !== "ALL"
    ) {
      return `MARBLE ${selectedSubCategories[0]} STATUE`;
    }
    return currentCategoryObj.name.toUpperCase();
  }, [selectedSubCategories, currentCategoryObj]);

  // WhatsApp inquiry fallback
  const handleWhatsAppInquiry = (product) => {
    const text = `Namaste! I would like to inquire about the price and customization for "${product.name}" from Badrinarayan Naresh Kumar Moorti Wala.`;
    window.open(
      `https://wa.me/919460154291?text=${encodeURIComponent(text)}`,
      "_blank",
    );
  };

  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen flex flex-col overflow-x-hidden">
      {/* 1. TOP CATEGORY FILTER BAR (Matches reference screenshot) */}
      <section className="w-full border-b border-[#EFEBE3] bg-white sticky z-30 shadow-xs">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start md:justify-center overflow-x-auto no-scrollbar py-3.5 sm:py-4 gap-6 sm:gap-8 lg:gap-11">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategorySelect(cat.id)}
                  className={`flex items-center gap-1 font-serif text-[14px] sm:text-[15px] lg:text-[16px] whitespace-nowrap transition-colors py-1 relative cursor-pointer group ${
                    isActive
                      ? "text-[#BD9A5D] font-medium"
                      : "text-[#4A453F] hover:text-[#BD9A5D]"
                  }`}
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  <span className="tracking-wide">{cat.name}</span>
                  {/* {cat.hasDropdown && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isActive
                          ? "text-[#BD9A5D]"
                          : "text-[#8C8275] group-hover:text-[#BD9A5D]"
                      }`}
                    />
                  )} */}
                  {isActive && (
                    <span className="absolute -bottom-[14px] sm:-bottom-[16px] left-0 w-full h-[2px] bg-[#BD9A5D]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT AREA: Left Sidebar Filters + Product Grid */}
      <section className="flex-1 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
        {/* Mobile Filter Toggle Header */}
        <div className="lg:hidden flex items-center justify-between mb-6 pb-3 border-b border-[#EFEBE3]">
          <div>
            <h2 className="text-sm font-semibold tracking-wider uppercase text-[#222222]">
              {sidebarHeading}
            </h2>
            <p className="text-xs text-[#7A7165] mt-0.5">
              Showing {filteredProducts.length} of {categoryProducts.length}{" "}
              items
            </p>
          </div>

          <button
            onClick={() => setMobileFilterOpen(true)}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-[#BD9A5D] bg-white text-[#9E6E2D] text-xs font-medium shadow-xs"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Filters</span>
            {!selectedSubCategories.includes("ALL") && (
              <span className="w-4 h-4 rounded-full bg-[#9E6E2D] text-white text-[10px] flex items-center justify-center font-bold">
                {selectedSubCategories.length}
              </span>
            )}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* DESKTOP SIDEBAR FILTERS (Left 3 columns) */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-20 self-start pr-4">
            <div className="bg-white/80 rounded-2xl p-5 border border-[#EFEBE3] shadow-xs">
              {/* Category / Subcategory Title */}
              <h2 className="text-[13px] font-bold tracking-[0.08em] uppercase text-[#222222] mb-5 border-b border-[#F0EBE1] pb-3">
                {sidebarHeading}
              </h2>

              {/* Subcategories Checkbox List */}
              <div className="space-y-3">
                {availableSubCategories.map((sub) => {
                  const isChecked = selectedSubCategories.includes(sub.id);
                  const count = subCategoryCounts[sub.id] || 0;

                  // Hide zero-count subcategories if not ALL
                  if (sub.id !== "ALL" && count === 0) return null;

                  return (
                    <label
                      key={sub.id}
                      className="flex items-center justify-between group cursor-pointer py-1 select-none"
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleSubCategoryToggle(sub.id)}
                          className="sr-only"
                        />
                        <div
                          className={`w-4 h-4 rounded-[3px] border flex items-center justify-center transition-all ${
                            isChecked
                              ? "bg-[#A87B32] border-[#A87B32] text-white shadow-xs"
                              : "border-[#C8BFB0] group-hover:border-[#A87B32] bg-white"
                          }`}
                        >
                          {isChecked && (
                            <Check className="w-3 h-3 stroke-[3]" />
                          )}
                        </div>
                        <span
                          className={`text-xs uppercase tracking-wider transition-colors ${
                            isChecked
                              ? "text-[#222222] font-semibold"
                              : "text-[#5C554E] group-hover:text-[#222222] font-normal"
                          }`}
                        >
                          {sub.name}
                        </span>
                      </div>

                      <span className="text-[#8E8478] text-[11px] font-mono">
                        ({count})
                      </span>
                    </label>
                  );
                })}
              </div>

              {/* Reset Filters Shortcut */}
              {!selectedSubCategories.includes("ALL") && (
                <button
                  onClick={() => handleSubCategoryToggle("ALL")}
                  className="mt-6 w-full py-2 text-center text-xs text-[#9E6E2D] hover:text-[#7A5018] font-medium border-t border-[#F0EBE1] pt-3 transition-colors cursor-pointer"
                >
                  Reset all filters
                </button>
              )}
            </div>
          </aside>

          {/* PRODUCT CARDS GRID (Right 9 columns on desktop) */}
          <main className="lg:col-span-9 w-full min-w-0">
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-2xl border border-[#EFEBE3] p-12 text-center my-8">
                <p
                  className="font-serif text-2xl text-[#3A3530] mb-2"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  No Statues Found
                </p>
                <p className="text-xs text-[#7A7165] mb-6">
                  No products matched your selected filters in this category.
                </p>
                <button
                  onClick={() => handleSubCategoryToggle("ALL")}
                  className="px-6 py-2.5 rounded-lg bg-[#A87B32] text-white text-xs font-medium hover:bg-[#8F6626] transition-colors"
                >
                  Show All {currentCategoryObj.name}
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-2xl overflow-hidden border border-[#ECE7DE] shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col group"
                  >
                    {/* Top Image Container: Edge-to-Edge with Card Rounded Corners */}
                    <Link
                      to={`/product/${product.id}`}
                      className="relative aspect-square w-full overflow-hidden rounded-t-2xl bg-[#F6F1E9] block cursor-pointer"
                    >
                      <picture className="w-full h-full block overflow-hidden rounded-t-2xl">
                        <source srcSet={product.imageWebp} type="image/webp" />
                        <img
                          src={product.image}
                          alt={product.name}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover scale-[1.05] group-hover:scale-110 transition-transform duration-500 ease-out"
                        />
                      </picture>
                    </Link>

                    {/* Bottom Card Content: Title & Request Price Button */}
                    <div className="pt-4 pb-6 px-4 flex flex-col items-center text-center justify-between flex-1 bg-white">
                      <Link
                        to={`/product/${product.id}`}
                        className="font-sans font-semibold text-[15px] sm:text-[16px] text-[#4A453F] hover:text-[#A77620] text-center tracking-normal leading-snug line-clamp-1 mb-3.5 transition-colors cursor-pointer"
                        title={product.name}
                      >
                        {product.name}
                      </Link>

                      <button
                        onClick={() =>
                          onRequestPrice
                            ? onRequestPrice(product)
                            : handleWhatsAppInquiry(product)
                        }
                        className="w-auto px-8 sm:px-9 py-2.5 rounded-lg bg-[#A77620] hover:bg-[#8F641B] text-white text-xs sm:text-[13px] font-medium tracking-normal transition-all duration-200 active:scale-[0.98] cursor-pointer inline-flex items-center justify-center shadow-none"
                      >
                        Request price
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>
      </section>

      {/* 3. MOBILE FILTER DRAWER / MODAL */}
      {mobileFilterOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex flex-col bg-black/50 backdrop-blur-xs animate-fade-in">
          <div className="mt-auto bg-white rounded-t-2xl max-h-[80vh] flex flex-col overflow-hidden shadow-2xl">
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#EFEBE3]">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#222222]">
                  Filter by Deity / Subcategory
                </h3>
                <p className="text-[11px] text-[#7A7165]">
                  {currentCategoryObj.name}
                </p>
              </div>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="p-1.5 text-[#5C554E] hover:text-[#222222] rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Subcategories list */}
            <div className="flex-1 overflow-y-auto p-6 space-y-3">
              {availableSubCategories.map((sub) => {
                const isChecked = selectedSubCategories.includes(sub.id);
                const count = subCategoryCounts[sub.id] || 0;
                if (sub.id !== "ALL" && count === 0) return null;

                return (
                  <label
                    key={sub.id}
                    className="flex items-center justify-between group cursor-pointer py-2 border-b border-[#F7F3EB] last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => handleSubCategoryToggle(sub.id)}
                        className="sr-only"
                      />
                      <div
                        className={`w-5 h-5 rounded-[4px] border flex items-center justify-center transition-all ${
                          isChecked
                            ? "bg-[#A87B32] border-[#A87B32] text-white shadow-xs"
                            : "border-[#C8BFB0] bg-white"
                        }`}
                      >
                        {isChecked && (
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        )}
                      </div>
                      <span
                        className={`text-sm uppercase tracking-wide ${
                          isChecked
                            ? "text-[#222222] font-semibold"
                            : "text-[#5C554E] font-normal"
                        }`}
                      >
                        {sub.name}
                      </span>
                    </div>

                    <span className="text-[#8E8478] text-xs font-mono">
                      ({count})
                    </span>
                  </label>
                );
              })}
            </div>

            {/* Bottom Apply Bar */}
            <div className="p-4 border-t border-[#EFEBE3] bg-[#FAF8F5] flex gap-3">
              <button
                onClick={() => handleSubCategoryToggle("ALL")}
                className="flex-1 py-3 rounded-xl border border-[#D5CABB] text-xs font-medium text-[#5C554E] bg-white"
              >
                Reset All
              </button>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="flex-1 py-3 rounded-xl bg-[#A87B32] text-white text-xs font-semibold shadow-xs"
              >
                Apply ({filteredProducts.length} Results)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

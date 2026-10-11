import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import { CATEGORIES } from "../data/collectionData";

/**
 * Reusable Category Navigation Bar with Interactive Hover Dropdowns
 * Shared across Our Collection and Product Detail pages.
 */
export default function CategoryNav({
  activeCategoryId,
  activeSubCategoryId,
  onSelectCategory,
  onSelectSubCategory,
}) {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const timeoutRef = useRef(null);
  const navRef = useRef(null);

  // Close dropdown on outside click or escape key
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setHoveredCategory(null);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setHoveredCategory(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseEnter = (catId) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoveredCategory(catId);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    // Smooth delay prevents accidental close when cursor moves into dropdown
    timeoutRef.current = setTimeout(() => {
      setHoveredCategory(null);
    }, 180);
  };

  const handleCategoryClick = (cat) => {
    // If on mobile/tablet or direct click:
    if (cat.hasDropdown && hoveredCategory !== cat.id) {
      setHoveredCategory(cat.id);
    } else {
      setHoveredCategory(null);
      onSelectCategory(cat.id);
    }
  };

  const handleSubItemClick = (catId, subId, e) => {
    e.stopPropagation();
    setHoveredCategory(null);
    onSelectSubCategory(catId, subId);
  };

  const formatSubName = (cat, sub) => {
    if (sub.id === "ALL") {
      return `All ${cat.name.replace("Marble ", "")}`;
    }
    return sub.name
      .split(" ")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
      .join(" ");
  };

  return (
    <section className="w-full  border-b border-[#EFEBE3] bg-white sticky z-40 shadow-xs">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8" ref={navRef}>
        <div className="flex items-center justify-start md:justify-center overflow-x-auto md:overflow-visible no-scrollbar py-3.5 sm:py-4 gap-6 sm:gap-8 lg:gap-11">
          {CATEGORIES.map((cat, index) => {
            const isActive = activeCategoryId === cat.id;
            const isDropdownOpen = hoveredCategory === cat.id;
            const hasDropdown = Boolean(
              cat.hasDropdown ||
              (cat.subCategories && cat.subCategories.length > 1),
            );

            // Align left for first item, right for last item, center for middle to prevent edge cutoff
            const positionClasses =
              index === 0
                ? "left-0 translate-x-0"
                : index === CATEGORIES.length - 1
                  ? "right-0 left-auto translate-x-0"
                  : "left-1/2 -translate-x-1/2";

            return (
              <div
                key={cat.id}
                className="relative flex-shrink-0"
                onMouseEnter={() => hasDropdown && handleMouseEnter(cat.id)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Category Button */}
                <button
                  type="button"
                  onClick={() => handleCategoryClick(cat)}
                  className={`flex items-center gap-1.2 font-serif text-[14px] sm:text-[15px] lg:text-[14px] whitespace-nowrap transition-colors py-1 relative cursor-pointer group ${
                    isActive || isDropdownOpen
                      ? "text-[#BD9A5D] font-semibold"
                      : "text-[#4A453F] hover:text-[#BD9A5D] hover:font-bold"
                  }`}
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                  aria-expanded={isDropdownOpen}
                >
                  <span className="font-montserrat ">{cat.name}</span>

                  {hasDropdown && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isDropdownOpen ? "rotate-180 text-[#BD9A5D]" : ""
                      } ${
                        isActive
                          ? "text-[#BD9A5D]"
                          : "text-[#8C8275] group-hover:text-[#BD9A5D]"
                      }`}
                    />
                  )}

                  {/* Active Bottom Indicator */}
                  {isActive && (
                    <span className="absolute -bottom-[14px] sm:-bottom-[16px] left-0 w-full h-[2px] bg-[#BD9A5D]" />
                  )}
                </button>

                {/* Dropdown Menu (Hover / Click) */}
                {hasDropdown && isDropdownOpen && (
                  <div
                    className={`absolute top-full pt-2 z-50 animate-fade-in ${positionClasses}`}
                    onMouseEnter={() => handleMouseEnter(cat.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="bg-white rounded-xl border border-[#EBE3D5] shadow-[0_12px_32px_rgba(40,30,15,0.14)] p-2.5 sm:p-3 min-w-[210px] ring-1 ring-black/5">
                      {/* Header label in dropdown */}
                      <div className="px-2.5 py-1 mb-1.5 border-b border-[#F4EFE6] flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A77620] font-montserrat">
                          {cat.name}
                        </span>
                        <span className="text-[10px] text-[#A69E92] font-montserrat">
                          {cat.subCategories.length - 1} varieties
                        </span>
                      </div>

                      {/* Subcategory List (2 columns if > 6 items, otherwise 1 column) */}
                      <div
                        className={
                          cat.subCategories.length > 6
                            ? "grid grid-cols-2 gap-1 w-[320px] sm:w-[350px]"
                            : "flex flex-col gap-1 min-w-[200px]"
                        }
                      >
                        {cat.subCategories.map((sub) => {
                          const isSubActive =
                            isActive &&
                            (activeSubCategoryId === sub.id ||
                              (sub.id === "ALL" &&
                                (!activeSubCategoryId ||
                                  activeSubCategoryId === "ALL")));

                          return (
                            <button
                              key={sub.id}
                              type="button"
                              onClick={(e) =>
                                handleSubItemClick(cat.id, sub.id, e)
                              }
                              className={`px-3 py-1.5 rounded-lg text-left text-xs font-montserrat tracking-wide transition-all flex items-center justify-between cursor-pointer group/item ${
                                isSubActive
                                  ? "bg-[#A77620]/10 text-[#A77620] font-semibold"
                                  : "text-[#4A453F] hover:bg-[#FAF6F0] hover:text-[#A77620]"
                              }`}
                            >
                              <span className="truncate">
                                {formatSubName(cat, sub)}
                              </span>
                              {isSubActive && (
                                <Check className="w-3.5 h-3.5 text-[#A77620] stroke-[2.5] flex-shrink-0 ml-1.5" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

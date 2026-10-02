import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Universal Brand Logo Component for Badrinarayan Naresh Kumar Moorti Wala
 * Uses the official public/logo.svg vector lockup.
 *
 * Supported variants:
 * - 'header' (default): Prominent, elegant navbar presence
 * - 'footer': High-contrast luminous cream/white lockup for warm ochre footer
 * - 'about': Grand hero emblem for the About Us story page
 * - 'customise': Prominent brand emblem above address
 * - 'watermark': Large right-column accent in Our Story section
 */
export default function Logo({ 
  variant = 'header', 
  className = '', 
  link = true 
}) {
  const isFooter = variant === 'footer';
  const isWatermark = variant === 'watermark';
  const isAbout = variant === 'about';
  const isCustomise = variant === 'customise';

  // Refined, elegant responsive scales matching official brand lockup
  let variantStyles = 'h-9 sm:h-10 md:h-[42px] w-auto object-contain';

  if (isFooter) {
    variantStyles = 'h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain brightness-0 invert opacity-95 group-hover:opacity-100 transition-opacity duration-200 mx-auto sm:mx-0';
  } else if (isAbout) {
    variantStyles = 'h-24 sm:h-32 md:h-36 lg:h-40 w-auto object-contain mx-auto';
  } else if (isCustomise) {
    variantStyles = 'h-20 sm:h-24 md:h-28 w-auto object-contain mx-auto';
  } else if (isWatermark) {
    variantStyles = 'w-48 sm:w-56 lg:w-64 xl:w-72 h-auto object-contain opacity-85 select-none pointer-events-none';
  }

  const logoImg = (
    <img
      src="/logo.svg"
      alt="Badrinarayan Naresh Kumar Moorti Wala"
      className={`${variantStyles} ${className}`}
      loading="eager"
      decoding="async"
    />
  );

  if (!link || isWatermark) {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        {logoImg}
      </div>
    );
  }

  return (
    <Link
      to="/"
      className={`inline-flex items-center justify-center group transition-transform duration-200 hover:scale-[1.02] flex-shrink-0 ${
        isFooter ? 'mx-auto sm:mx-0' : ''
      }`}
      title="Badrinarayan Naresh Kumar Moorti Wala - Home"
    >
      {logoImg}
    </Link>
  );
}

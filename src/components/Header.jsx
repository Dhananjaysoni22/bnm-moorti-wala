import React, { useState } from 'react';
import Logo from './Logo';
import { Search, Globe, Menu, X, MessageCircle } from 'lucide-react';

export default function Header({ onOpenSearch, onOpenCustomise }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Our Collection', href: '#collection' },
    { name: 'About Us', href: '#about' },
    { name: 'Customise your order', href: '#customise', onClick: (e) => { e.preventDefault(); onOpenCustomise?.(); } },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-[#F0EBE1] transition-all">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-20 md:h-24 flex items-center justify-between">
        
        {/* Left: Brand Logo */}
        <div className="flex-shrink-0">
          <Logo variant="header" />
        </div>

        {/* Center: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center space-x-7 xl:space-x-9">
          {navLinks.map((link) => {
            const isActive = activeNav === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (link.onClick) {
                    link.onClick(e);
                  } else {
                    setActiveNav(link.name);
                  }
                }}
                className={`relative text-[15px] font-serif tracking-wide transition-colors py-1 ${
                  isActive
                    ? 'text-[#9E6E2D] font-semibold'
                    : 'text-[#3E3A36] hover:text-[#9E6E2D]'
                }`}
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#9E6E2D] rounded-full animate-fade-in" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Actions & Badges */}
        <div className="flex items-center space-x-3 sm:space-x-5">
          {/* Search Button */}
          <button
            onClick={onOpenSearch}
            aria-label="Search idols"
            className="p-2 text-[#3A3530] hover:text-[#9E6E2D] transition-colors rounded-full hover:bg-[#FAF6F0]"
          >
            <Search className="w-5 h-5 stroke-[1.75]" />
          </button>

          {/* WhatsApp Action */}
          <a
            href="https://wa.me/919460154291?text=Hello,%20I%20am%20interested%20in%20marble%20moorties%20from%20Badrinarayan%20Naresh%20Kumar%20Moorti%20Wala."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:opacity-90 transition-transform hover:scale-105 shadow-sm"
          >
            {/* WhatsApp SVG Icon */}
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
          </a>

          {/* Divider */}
          <div className="hidden sm:block h-7 w-[1px] bg-[#E5DFD4]" />

          {/* Worldwide Shipping Badge */}
          <div className="flex items-center space-x-2 text-[#4A453F]">
            <Globe className="w-5 h-5 text-[#5C554E] stroke-[1.5]" />
            <div className="text-[11px] leading-[13px] font-medium tracking-tight">
              <div>Worldwide Shipping</div>
              <div className="text-[#84786B]">from India</div>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#3E3A36] hover:text-[#9E6E2D] rounded-lg"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-t border-[#EAE3D6] px-5 py-6 space-y-4 shadow-lg animate-fade-in">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (link.onClick) link.onClick(e);
                }}
                className="text-lg font-serif py-1 text-[#333333] hover:text-[#9E6E2D] border-b border-[#F0EBE1] pb-2"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href="https://wa.me/919460154291"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-[#25D366] text-white font-medium text-sm shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp (+91 9460154291)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import PriceModal from './components/PriceModal';
import SearchModal from './components/SearchModal';
import CustomiseModal from './components/CustomiseModal';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCustomiseOpen, setIsCustomiseOpen] = useState(false);

  const handleRequestPrice = (product) => {
    setSelectedProduct(product);
  };

  const handleSelectCategory = (category) => {
    setSelectedProduct({
      name: `${category.title} (Collection Inquiry)`,
      image: category.image,
      id: category.id,
    });
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      
      <div className="min-h-screen bg-[#FAF8F5] text-[#2D2A26] flex flex-col font-sans selection:bg-[#9E6E2D] selection:text-white w-full max-w-full overflow-x-hidden relative">
        {/* Common Navigation Bar across all pages */}
        <Header
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenCustomise={() => setIsCustomiseOpen(true)}
        />

        {/* Main Routed Content */}
        <main className="flex-1 w-full max-w-full overflow-x-hidden">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  onRequestPrice={handleRequestPrice}
                  onSelectCategory={handleSelectCategory}
                  onOpenCustomise={() => setIsCustomiseOpen(true)}
                />
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        {/* Common Footer across all pages */}
        <Footer onOpenCustomise={() => setIsCustomiseOpen(true)} />

        {/* Shared Modals accessible from any page */}
        <PriceModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />

        <SearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          onSelectProduct={(item) => setSelectedProduct(item)}
        />

        <CustomiseModal
          isOpen={isCustomiseOpen}
          onClose={() => setIsCustomiseOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
}

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Collection from './pages/Collection';
import About from './pages/About';
import Customise from './pages/Customise';
import OurArtistry from './pages/OurArtistry';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';
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
            <Route
              path="/collection"
              element={<Collection onRequestPrice={handleRequestPrice} />}
            />
            <Route
              path="/our-collection"
              element={<Collection onRequestPrice={handleRequestPrice} />}
            />
            <Route path="/about" element={<About />} />
            <Route
              path="/our-artistry"
              element={
                <OurArtistry
                  onRequestPrice={handleRequestPrice}
                  onOpenCustomise={() => setIsCustomiseOpen(true)}
                />
              }
            />
            <Route
              path="/artistry"
              element={
                <OurArtistry
                  onRequestPrice={handleRequestPrice}
                  onOpenCustomise={() => setIsCustomiseOpen(true)}
                />
              }
            />
            <Route path="/customise" element={<Customise />} />
            <Route path="/customize" element={<Customise />} />
            <Route
              path="/product/:id"
              element={<ProductDetail onRequestPrice={handleRequestPrice} />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact-us" element={<Contact />} />
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

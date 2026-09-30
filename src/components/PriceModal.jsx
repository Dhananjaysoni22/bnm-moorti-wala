import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageCircle } from 'lucide-react';

export default function PriceModal({ product, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    size: '24 inches',
    notes: '',
  });

  if (!product) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const text = `Namaste! I want to inquire about the price and details of "${product.name}". %0A%0A*Name:* ${formData.name || 'Devotee'}%0A*Phone:* ${formData.phone || 'N/A'}%0A*Preferred Size:* ${formData.size}%0A*City/Country:* ${formData.city || 'N/A'}`;
    window.open(`https://wa.me/919460154291?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-fade-in overflow-y-auto" onClick={onClose}>
      <div 
        className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#E5DFD4] relative my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 sm:top-4 right-3 sm:right-4 p-1.5 rounded-full text-gray-500 hover:text-black hover:bg-gray-100 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto flex-1">
          {submitted ? (
            <div className="p-6 sm:p-8 text-center space-y-4">
              <CheckCircle2 className="w-14 h-14 sm:w-16 sm:h-16 text-[#9E6E2D] mx-auto animate-bounce" />
              <h3 className="text-xl sm:text-2xl font-serif text-[#222222]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                Inquiry Received!
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 max-w-sm mx-auto leading-relaxed">
                Thank you for your interest in the <span className="font-semibold text-gray-800">{product.name}</span>. Our master artisans and team will contact you shortly with the quotation and dimension catalog.
              </p>
              <div className="pt-3 flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center">
                <button
                  onClick={handleWhatsApp}
                  className="px-4 py-2.5 rounded-lg bg-[#25D366] text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 hover:opacity-90"
                >
                  <MessageCircle className="w-4 h-4" />
                  Connect on WhatsApp Now
                </button>
                <button
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-lg border border-gray-300 text-gray-700 text-xs sm:text-sm font-medium hover:bg-gray-50"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <div>
              {/* Header banner */}
              <div className="bg-[#FAF7F2] p-4 sm:p-5 border-b border-[#EDE7DD] flex items-center gap-3 sm:gap-4 pr-10">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white p-1 border border-gray-200 overflow-hidden flex-shrink-0 flex items-center justify-center">
                  <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#9E6E2D]">Quotation Request</span>
                  <h3 className="text-sm sm:text-lg font-semibold text-gray-900 leading-snug line-clamp-1">{product.name}</h3>
                  <p className="text-xs text-gray-500">Jaipur Pure White Marble</p>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-3.5 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Sharma"
                      className="w-full text-sm sm:text-xs px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#9E6E2D] focus:border-[#9E6E2D]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full text-sm sm:text-xs px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#9E6E2D] focus:border-[#9E6E2D]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Desired Height / Size</label>
                    <select
                      value={formData.size}
                      onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                      className="w-full text-sm sm:text-xs px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#9E6E2D] focus:border-[#9E6E2D]"
                    >
                      <option value="12 inches (1 Foot)">12 inches (1 Foot)</option>
                      <option value="18 inches (1.5 Feet)">18 inches (1.5 Feet)</option>
                      <option value="24 inches (2 Feet)">24 inches (2 Feet)</option>
                      <option value="36 inches (3 Feet)">36 inches (3 Feet)</option>
                      <option value="48 inches (4 Feet)">48 inches (4 Feet)</option>
                      <option value="60+ inches (Temple Grand Scale)">60+ inches (Grand Scale)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Delivery City / Country</label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Melbourne, Australia"
                      className="w-full text-sm sm:text-xs px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#9E6E2D] focus:border-[#9E6E2D]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Customization Requirements (Optional)</label>
                  <textarea
                    rows="2"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Specific painting, gold foil work, postures..."
                    className="w-full text-sm sm:text-xs px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#9E6E2D] focus:border-[#9E6E2D]"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-2.5 rounded-lg bg-[#9E6E2D] hover:bg-[#85581F] text-white text-xs font-semibold tracking-wide flex items-center justify-center gap-2 shadow-xs transition-all"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Submit Request
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="py-2.5 px-4 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-xs transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    Ask on WhatsApp
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

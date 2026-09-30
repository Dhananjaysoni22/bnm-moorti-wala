import React, { useState } from 'react';
import { X, Phone, MessageCircle, Send, CheckCircle2 } from 'lucide-react';

export default function CustomiseModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    marbleType: 'Makrana Pure White Marble',
    description: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const text = `Namaste! I would like to consult with master artisans for a custom marble idol project. %0A*Name:* ${formData.name || 'Devotee'}%0A*Phone:* ${formData.phone || 'N/A'}%0A*Marble:* ${formData.marbleType}%0A*Requirements:* ${formData.description || 'Bespoke marble idol creation'}`;
    window.open(`https://wa.me/919460154291?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-fade-in overflow-y-auto" onClick={onClose}>
      <div 
        className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#EDE7DD] relative my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
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
                Project Request Received!
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 max-w-sm mx-auto leading-relaxed">
                Our master artisan and project coordinator will call you back within 2-4 hours to discuss your design specifications and drawings.
              </p>
              <div className="pt-3 flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center">
                <button
                  onClick={handleWhatsApp}
                  className="px-4 py-2.5 rounded-lg bg-[#25D366] text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 hover:opacity-90"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat Directly on WhatsApp
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
              <div className="bg-[#FAF7F2] p-4 sm:p-6 border-b border-[#EDE7DD] pr-10">
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#9E6E2D]">Bespoke Craftsmanship</span>
                <h3 
                  className="text-xl sm:text-2xl font-serif text-[#222222] font-normal leading-tight mt-1"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  Customise Your Order
                </h3>
                <p className="text-xs text-gray-600 mt-1">
                  Speak directly with our generational artisans in Jaipur or submit your custom idol requirements below.
                </p>
              </div>

              {/* Direct Call Numbers */}
              <div className="px-4 sm:px-6 pt-3 pb-2.5 border-b border-gray-100 bg-[#FCFAF7]">
                <p className="text-[10px] sm:text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Direct Artisan Helplines</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <a 
                    href="tel:+919460154291"
                    className="flex items-center justify-center sm:justify-start gap-1.5 p-2 rounded-lg bg-white border border-[#E8E1D3] text-xs font-semibold text-[#8B5C24] hover:bg-[#9E6E2D] hover:text-white transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    +91 9460154291
                  </a>
                  <a 
                    href="tel:+919414240861"
                    className="flex items-center justify-center sm:justify-start gap-1.5 p-2 rounded-lg bg-white border border-[#E8E1D3] text-xs font-semibold text-[#8B5C24] hover:bg-[#9E6E2D] hover:text-white transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    +91 9414240861
                  </a>
                  <a 
                    href="tel:+918529071439"
                    className="flex items-center justify-center sm:justify-start gap-1.5 p-2 rounded-lg bg-white border border-[#E8E1D3] text-xs font-semibold text-[#8B5C24] hover:bg-[#9E6E2D] hover:text-white transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    +91 8529071439
                  </a>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
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

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Marble Preference</label>
                  <select
                    value={formData.marbleType}
                    onChange={(e) => setFormData({ ...formData, marbleType: e.target.value })}
                    className="w-full text-sm sm:text-xs px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#9E6E2D] focus:border-[#9E6E2D]"
                  >
                    <option value="Makrana Pure White Marble">Makrana Pure White Marble (Sangemarmar)</option>
                    <option value="Vietnamese Super White Marble">Vietnamese Super White Marble</option>
                    <option value="Black Marble (Bhainslana)">Black Marble (Bhainslana)</option>
                    <option value="Italian Carrara Marble">Italian Carrara Marble</option>
                    <option value="Sandstone / Red Stone">Sandstone / Red Stone</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Custom Idol Details / Reference Description</label>
                  <textarea
                    rows="3"
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Describe deity, pose, temple size, gold/color paint preferences..."
                    className="w-full text-sm sm:text-xs px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#9E6E2D] focus:border-[#9E6E2D]"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-2.5 rounded-lg bg-[#9E6E2D] hover:bg-[#85581F] text-white text-xs font-semibold tracking-wide flex items-center justify-center gap-2 shadow-xs transition-all"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Submit Custom Order
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="py-2.5 px-4 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-xs transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    WhatsApp Us
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

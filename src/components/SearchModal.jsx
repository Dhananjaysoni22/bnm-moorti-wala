import React, { useState } from 'react';
import { X, Search, ArrowRight } from 'lucide-react';

const catalog = [
  { name: 'Marble Shiva Statue', category: 'Marble God Statues', image: '/images/prod-shiva.png', type: 'product' },
  { name: 'Marble Cow with Calf Statue', category: 'Marble Animals', image: '/images/prod-cow.png', type: 'product' },
  { name: 'Marble Buddha Statue', category: 'Marble God Statues', image: '/images/prod-buddha.png', type: 'product' },
  { name: 'Marble Temple Statue', category: 'Marble Temples', image: '/images/prod-temple.png', type: 'product' },
  { name: 'Marble Durga Statue', category: 'Marble God Statues', image: '/images/prod-durga.png', type: 'product' },
  { name: 'Marble God Statues', category: 'Category', image: '/images/cat-gods.png', type: 'category' },
  { name: 'Marble Temples', category: 'Category', image: '/images/cat-temples.png', type: 'category' },
  { name: 'Marble Human Bust', category: 'Category', image: '/images/cat-busts.png', type: 'category' },
  { name: 'Marble Animals', category: 'Category', image: '/images/cat-animals.png', type: 'category' },
  { name: 'Marble Roman Figures', category: 'Category', image: '/images/cat-roman.png', type: 'category' },
  { name: 'Marble Home Decor', category: 'Category', image: '/images/cat-decor.png', type: 'category' },
];

export default function SearchModal({ isOpen, onClose, onSelectProduct }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filtered = catalog.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-10 sm:pt-20 px-3 sm:px-4 bg-black/50 backdrop-blur-xs animate-fade-in" onClick={onClose}>
      <div 
        className="bg-white rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl border border-[#EDE7DD] relative max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Bar Input */}
        <div className="p-3.5 sm:p-4 border-b border-gray-200 flex items-center gap-2.5 sm:gap-3">
          <Search className="w-5 h-5 text-[#9E6E2D] flex-shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search idols, temples, god statues..."
            className="flex-1 text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results */}
        <div className="overflow-y-auto p-2 flex-1">
          {filtered.length > 0 ? (
            <div className="space-y-1">
              {filtered.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    onClose();
                    if (item.type === 'product') {
                      onSelectProduct?.(item);
                    }
                  }}
                  className="flex items-center gap-3 p-2 sm:p-2.5 rounded-xl hover:bg-[#FAF7F2] cursor-pointer transition-colors group"
                >
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-white border border-gray-100 p-1 flex items-center justify-center flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-800 group-hover:text-[#9E6E2D] transition-colors truncate">
                      {item.name}
                    </h4>
                    <span className="text-[10px] text-gray-500 uppercase tracking-wider">{item.category}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#9E6E2D] group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center text-xs sm:text-sm text-gray-500">
              No matching idols found for "{query}". Contact us directly for bespoke orders!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

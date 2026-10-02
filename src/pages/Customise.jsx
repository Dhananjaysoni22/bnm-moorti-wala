import React, { useState } from 'react';
import { MapPin, CheckCircle2, ChevronDown } from 'lucide-react';
import Logo from '../components/Logo';

const countryList = [
  'India', 'United States', 'United Kingdom', 'Australia', 'Canada',
  'United Arab Emirates', 'Singapore', 'Malaysia', 'Trinidad & Tobago',
  'Mauritius', 'South Africa', 'New Zealand', 'Germany', 'France',
  'Netherlands', 'Other'
];

const productOptions = [
  'Marble God Statues (Ganesha, Shiva, Durga, Radha Krishna, etc.)',
  'Marble Temples / Mandirs',
  'Marble Human Bust / Portrait Sculpture',
  'Marble Animals (Lions, Elephants, Cows, etc.)',
  'Marble Roman Figures / Western Statues',
  'Marble Home Decor & Artifacts',
  'Architectural Stone & Jaali Work',
  'Other Bespoke Requirement'
];

export default function Customise() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    countryCode: '+91',
    phone: '',
    email: '',
    country: '',
    product: '',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const text = `Namaste! I would like to customize an order at Badrinarayan Naresh Kumar Moorti Wala.%0A%0A*Name:* ${formData.fullName}%0A*Contact:* ${formData.countryCode} ${formData.phone}%0A*Email:* ${formData.email}%0A*Country:* ${formData.country}%0A*Product:* ${formData.product}%0A*Notes:* ${formData.notes || 'None'}`;
    window.open(`https://wa.me/919460154291?text=${text}`, '_blank');
  };

  return (
    <div className="w-full bg-white overflow-hidden py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.22em] sm:tracking-[0.25em] text-[#9E6E2D] mb-3 sm:mb-4 font-sans">
            CUSTOMISE YOUR ORDER
          </p>

          <p className="text-xs sm:text-sm md:text-base text-[#3A3530] leading-relaxed max-w-3xl mx-auto">
            Create something truly unique with our custom-made marble statues. Choose the deity, size, posture, finish, facial features, and intricate detailing. Share your specifications with us and let our skilled artisans bring your vision to life.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Brand, Address & Get Directions */}
          <div className="lg:col-span-5 flex flex-col items-center text-center pt-2 sm:pt-6">
            {/* BNM Monogram Logo */}
            <Logo variant="about" link={false} className="h-16 sm:h-20 w-auto mb-5 sm:mb-6" />

            {/* Address */}
            <p className="text-xs sm:text-sm text-[#4A453F] leading-relaxed max-w-xs mb-6 sm:mb-8">
              2002, third crossing, Khejron ka<br />
              rasta, chadpole bazar, Jaipur,<br />
              Rajasthan, India
            </p>

            {/* Get Directions Button */}
            <a
              href="https://maps.google.com/?q=2002+Third+Crossing+Khejron+ka+Rasta+Chandpole+Bazar+Jaipur"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#9E6E2D] hover:bg-[#86591F] text-white text-xs sm:text-sm font-medium transition-all shadow-xs group"
            >
              <MapPin className="w-3.5 h-3.5 fill-current" />
              <span>Get Directions</span>
            </a>
          </div>

          {/* Right Column: Customization Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="bg-[#FAF8F5] border border-[#EAE3D6] rounded-2xl p-8 sm:p-10 text-center space-y-4">
                <CheckCircle2 className="w-16 h-16 text-[#9E6E2D] mx-auto animate-bounce" />
                <h3 
                  className="text-2xl sm:text-3xl font-serif text-[#222222]"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  Custom Request Received!
                </h3>
                <p className="text-xs sm:text-sm text-[#5C564E] max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-gray-900">{formData.fullName}</span>. Our master artisans in Jaipur have received your specifications and will get in touch with you shortly.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={handleWhatsApp}
                    className="px-5 py-2.5 rounded-lg bg-[#25D366] text-white text-xs sm:text-sm font-medium flex items-center justify-center gap-2 hover:opacity-90"
                  >
                    Chat on WhatsApp Now
                  </button>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        countryCode: '+91',
                        phone: '',
                        email: '',
                        country: '',
                        product: '',
                        notes: ''
                      });
                    }}
                    className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 text-xs sm:text-sm font-medium hover:bg-gray-50"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-[#2D2823] mb-1.5">
                    Full Name <span className="text-[#9E6E2D]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-[#DFD7CA] focus:outline-none focus:border-[#9E6E2D] focus:ring-1 focus:ring-[#9E6E2D] bg-white transition-colors placeholder:text-gray-400"
                  />
                </div>

                {/* Contact Number & Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Contact / WhatsApp */}
                  <div>
                    <label className="block text-xs font-semibold text-[#2D2823] mb-1.5">
                      Contact Number/Whatsapp Number <span className="text-[#9E6E2D]">*</span>
                    </label>
                    <div className="flex rounded-xl border border-[#DFD7CA] focus-within:border-[#9E6E2D] focus-within:ring-1 focus-within:ring-[#9E6E2D] bg-white overflow-hidden">
                      <select
                        value={formData.countryCode}
                        onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                        className="text-xs sm:text-sm bg-transparent px-2.5 py-2.5 border-r border-[#DFD7CA] focus:outline-none text-[#4A453F] cursor-pointer"
                      >
                        <option value="+91">+91</option>
                        <option value="+1">+1</option>
                        <option value="+44">+44</option>
                        <option value="+61">+61</option>
                        <option value="+65">+65</option>
                        <option value="+971">+971</option>
                        <option value="+27">+27</option>
                      </select>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="8905678900"
                        className="w-full text-xs sm:text-sm px-3 py-2.5 focus:outline-none bg-transparent placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-[#2D2823] mb-1.5">
                      Email id <span className="text-[#9E6E2D]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email id"
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-[#DFD7CA] focus:outline-none focus:border-[#9E6E2D] focus:ring-1 focus:ring-[#9E6E2D] bg-white transition-colors placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Country Dropdown */}
                <div>
                  <label className="block text-xs font-semibold text-[#2D2823] mb-1.5">
                    Country <span className="text-[#9E6E2D]">*</span>
                  </label>
                  <div className="relative">
                    <select
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-[#DFD7CA] focus:outline-none focus:border-[#9E6E2D] focus:ring-1 focus:ring-[#9E6E2D] bg-white transition-colors text-[#4A453F] appearance-none pr-10 cursor-pointer"
                    >
                      <option value="">Select your Country</option>
                      {countryList.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                    <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Product Dropdown */}
                <div>
                  <label className="block text-xs font-semibold text-[#2D2823] mb-1.5">
                    Product <span className="text-[#9E6E2D]">*</span>
                  </label>
                  <div className="relative">
                    <select
                      required
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-[#DFD7CA] focus:outline-none focus:border-[#9E6E2D] focus:ring-1 focus:ring-[#9E6E2D] bg-white transition-colors text-[#4A453F] appearance-none pr-10 cursor-pointer"
                    >
                      <option value="">Select product you want to cutomise</option>
                      {productOptions.map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                    <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs font-semibold text-[#2D2823] mb-1.5">
                    Notes
                  </label>
                  <textarea
                    rows="4"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Enter your Specifications"
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-[#DFD7CA] focus:outline-none focus:border-[#9E6E2D] focus:ring-1 focus:ring-[#9E6E2D] bg-white transition-colors placeholder:text-gray-400 resize-y"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2 flex justify-center">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-14 py-3 rounded-lg bg-[#9E6E2D] hover:bg-[#86591F] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-xs transition-all cursor-pointer active:scale-98"
                  >
                    SUBMIT
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}

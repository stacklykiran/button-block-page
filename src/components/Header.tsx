import React, { useState } from 'react';
import { ShoppingCart, Search, ChevronDown, Menu as MenuIcon, X, Heart } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (actionText: string) => {
    alert(actionText);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-[#06224C] border-b border-white/10 px-2 md:px-12 py-3 shadow-sm">
        <div className="flex justify-between items-center w-full h-full">
          <div className="flex items-center gap-1 md:gap-8">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-white focus:outline-none p-1 transition-all duration-300 active:scale-95 hover:bg-white/10 rounded-md" type="button" aria-label="Open mobile menu">
              <MenuIcon className="w-6 h-6" />
            </button>
  
            <div className="flex-shrink">
              <a href="#home" tabIndex={-1} className="bg-white rounded-[60%] flex items-center justify-center shadow-md transition-all duration-300 hover:scale-105 active:scale-95 w-[75px] h-[37px] md:w-[90px] md:h-[45px] overflow-hidden">
                <img src="/stackly-logo1.png" alt="Stackly Logo" className="h-full w-full object-cover object-center scale-[1.15]" decoding="async" />
              </a>
            </div>
  
            <div className="hidden lg:flex gap-x-4 xl:gap-x-8 text-[13px] font-bold text-white uppercase tracking-wide items-center flex-wrap justify-center">
              <a href="#home" className="hover:text-blue-300 transition whitespace-nowrap">Home</a>
              <a href="#404" className="hover:text-blue-300 transition whitespace-nowrap">About Us</a>
  
              <div className="relative dropdown-group flex items-center group">
                <button type="button" id="products-dropdown-btn" aria-haspopup="true" aria-expanded="false" className="flex items-center gap-1.5 hover:text-blue-300 transition whitespace-nowrap text-[13px] font-bold text-white uppercase tracking-wide focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-md px-1">
                  Our Products <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                </button>
                <div id="products-menu" role="menu" className="absolute left-0 top-full mt-2 w-64 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[100] py-3 border border-gray-100 translate-y-2 group-hover:translate-y-0">
                  <a href="#404" role="menuitem" className="block px-5 py-2.5 text-gray-800 text-[11px] font-black hover:bg-blue-50 hover:text-blue-600 border-b border-gray-50 transition-colors">PREMIUM TEMPLATES</a>
                  <a href="#404" role="menuitem" className="block px-5 py-2.5 text-gray-800 text-[11px] font-black hover:bg-blue-50 hover:text-blue-600 border-b border-gray-50 transition-colors">UI KITS</a>
                  <a href="#404" role="menuitem" className="block px-5 py-2.5 text-gray-800 text-[11px] font-black hover:bg-blue-50 hover:text-blue-600 border-b border-gray-50 transition-colors">WORDPRESS THEMES</a>
                  <a href="#404" role="menuitem" className="block px-5 py-2.5 text-gray-800 text-[11px] font-black hover:bg-blue-50 hover:text-blue-600 transition-colors">FREE ASSETS</a>
                </div>
              </div>
  
              <div className="relative dropdown-group flex items-center group">
                <button type="button" id="category-dropdown-btn" aria-haspopup="true" aria-expanded="false" className="flex items-center gap-1.5 hover:text-blue-300 transition whitespace-nowrap text-[13px] font-bold text-white uppercase tracking-wide focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-md px-1">
                  Categories <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                </button>
                <div id="category-menu" role="menu" className="absolute left-0 top-full mt-2 w-64 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[100] py-3 border border-gray-100 translate-y-2 group-hover:translate-y-0">
                  <a href="#all-templates-wrapper" onClick={() => alert('scrollToTemplate portfolio')} role="menuitem" className="block px-5 py-2.5 text-gray-800 text-[11px] font-black hover:bg-blue-50 hover:text-blue-600 border-b border-gray-50 transition-colors">PORTFOLIO</a>
                  <a href="#all-templates-wrapper" onClick={() => alert('scrollToTemplate ecommerce')} role="menuitem" className="block px-5 py-2.5 text-gray-800 text-[11px] font-black hover:bg-blue-50 hover:text-blue-600 border-b border-gray-50 transition-colors">STORE</a>
                  <a href="#all-templates-wrapper" onClick={() => alert('scrollToTemplate business')} role="menuitem" className="block px-5 py-2.5 text-gray-800 text-[11px] font-black hover:bg-blue-50 hover:text-blue-600 border-b border-gray-50 transition-colors">BUSINESS</a>
                  <a href="#all-templates-wrapper" onClick={() => alert('scrollToTemplate construction')} role="menuitem" className="block px-5 py-2.5 text-gray-800 text-[11px] font-black hover:bg-blue-50 hover:text-blue-600 border-b border-gray-50 transition-colors">CONSTRUCTION</a>
                  <a href="#all-templates-wrapper" onClick={() => alert('scrollToTemplate fashion')} role="menuitem" className="block px-5 py-2.5 text-gray-800 text-[11px] font-black hover:bg-blue-50 hover:text-blue-600 border-b border-gray-50 transition-colors">FASHION</a>
                  <a href="#all-templates-wrapper" onClick={() => alert('scrollToTemplate jewelry')} role="menuitem" className="block px-5 py-2.5 text-gray-800 text-[11px] font-black hover:bg-blue-50 hover:text-blue-600 transition-colors">JEWELRY</a>
                </div>
              </div>
  
              <button type="button" onClick={() => alert("openContactModal")} className="hover:text-blue-300 transition whitespace-nowrap font-bold text-[13px] uppercase tracking-wide">Contact</button>
            </div>
          </div>
  
          <div className="flex items-center gap-2 flex-shrink-0">
            <button onClick={() => alert("toggleCart")} className="relative flex items-center gap-1 border border-white/30 rounded-full px-2 md:px-4 py-1.5 text-white text-[10px] md:text-xs font-semibold hover:bg-white/10 transition-all duration-300 active:scale-95" type="button">
              <ShoppingCart className="w-3 h-3 md:w-3.5 md:h-3.5" />
              <span className="hidden sm:inline">Cart</span>
              <span id="cartBadge" className="hidden absolute -top-1 -right-1 bg-red-500 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
            </button>
  
            <button onClick={() => alert("toggleWishlist")} className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center bg-white rounded-full text-red-500 hover:bg-gray-100 transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm flex-shrink-0" type="button" aria-label="Open wishlist">
              <Heart className="w-4 h-4" />
            </button>
  
            <button onClick={() => alert("toggleSearchBar")} className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center bg-white rounded-full text-[#06224C] hover:bg-gray-200 transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm flex-shrink-0" type="button" aria-label="Open search">
              <Search className="w-4 h-4" />
            </button>
  
            <button type="button" aria-label="User Profile" className="w-8 h-8 md:w-9 md:h-9 rounded-[60%] border-2 border-white/40 overflow-hidden cursor-pointer flex-shrink-0 relative focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#06224C] transition-all duration-300 hover:scale-105 active:scale-95">
              <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User Profile Picture" className="w-full h-full object-cover block" decoding="async" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 z-[60] xl:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div 
          className={`absolute right-0 top-0 bottom-0 w-[260px] bg-[#0B1D40] shadow-2xl flex flex-col pt-6 px-6 transform transition-transform duration-300 ease-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-8 border-b border-[#1A315E] pb-4">
            <span className="font-bold text-lg text-white">Menu</span>
            <button 
              className="text-gray-300 hover:text-white p-1 rounded transition-all duration-300 hover:rotate-90 hover:scale-110 active:scale-95"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col gap-5 text-base font-medium text-white">
            <a href="#" className="hover:text-blue-200 transition-colors duration-300" onClick={(e) => { e.preventDefault(); handleNavClick("Navigating to Home"); }}>Home</a>
            <a href="#" className="hover:text-blue-200 transition-colors duration-300" onClick={(e) => { e.preventDefault(); handleNavClick("Navigating to About Us"); }}>About Us</a>
            <a href="#" className="flex items-center justify-between hover:text-blue-200 transition-colors duration-300 group" onClick={(e) => { e.preventDefault(); handleNavClick("Opening Products dropdown"); }}>
              Our Products <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href="#" className="flex items-center justify-between hover:text-blue-200 transition-colors duration-300 group" onClick={(e) => { e.preventDefault(); handleNavClick("Opening Categories dropdown"); }}>
              Categories <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>
            <button type="button" className="hover:text-blue-200 transition-colors duration-300 text-left font-bold" onClick={() => { alert("openContactModal"); setIsMobileMenuOpen(false); }}>Contact</button>
          </nav>
        </div>
      </div>
    </>
  );
}

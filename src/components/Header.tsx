import React, { useState } from 'react';
import { ShoppingCart, Search, ChevronDown, Menu as MenuIcon, X } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (actionText: string) => {
    alert(actionText);
    setIsMobileMenuOpen(false);
  };
  return (
    <header className="h-[80px] bg-[#0B1D40] flex items-center justify-between px-8 text-white flex-shrink-0">
      <div className="flex items-center gap-12">
        {/* Logo */}
        <div className="flex h-8 min-w-[92px] items-center justify-center overflow-hidden rounded-[50%] bg-white px-3 sm:h-9 sm:min-w-[104px]">
          <img
            src="public/stackly-logo.webp"
            alt="Stackly logo"
            className="h-[18px] w-auto sm:h-[20px]"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden xl:flex items-center gap-8 text-sm font-medium">
          <a href="#" className="hover:text-blue-200" onClick={(e) => { e.preventDefault(); alert("Navigating to Home"); }}>Home</a>
          <a href="#" className="hover:text-blue-200" onClick={(e) => { e.preventDefault(); alert("Navigating to About Us"); }}>About Us</a>
          <a href="#" className="flex items-center gap-1 hover:text-blue-200" onClick={(e) => { e.preventDefault(); alert("Opening Products dropdown"); }}>
            Our Products <ChevronDown className="w-4 h-4 ml-1 opacity-70" />
          </a>
          <a href="#" className="flex items-center gap-1 hover:text-blue-200" onClick={(e) => { e.preventDefault(); alert("Opening Categories dropdown"); }}>
            Categories <ChevronDown className="w-4 h-4 ml-1 opacity-70" />
          </a>
          <a href="#" className="hover:text-blue-200" onClick={(e) => { e.preventDefault(); alert("Navigating to Contact"); }}>Contact</a>
        </nav>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-3 md:gap-6">
        <button 
          className="flex items-center justify-center gap-2 border border-white/30 rounded-full p-2 sm:px-5 sm:py-2 text-sm hover:bg-white/10 transition-colors"
          onClick={() => alert("Your cart is empty.")}
          title="Cart"
        >
          <ShoppingCart className="w-4 h-4" />
          <span className="hidden sm:inline">Cart</span>
        </button>
        <button 
          className="w-9 h-9 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          onClick={() => alert("Search functionality coming soon!")}
        >
          <Search className="w-4 h-4" />
        </button>
        <button 
          className="xl:hidden w-9 h-9 bg-transparent border border-white/30 text-white rounded-md flex items-center justify-center hover:bg-white/10 transition-colors"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <MenuIcon className="w-5 h-5" />
        </button>
        <div 
          className="w-10 h-10 rounded-full bg-blue-300 overflow-hidden border-2 border-[#0B1D40] shadow-sm cursor-pointer hover:border-blue-400 transition"
          onClick={() => alert("Opening user profile settings")}
        >
          <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User Avatar" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-[60] xl:hidden transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {/* Drawer Menu */}
          <div 
            className="absolute right-0 top-0 bottom-0 w-[260px] bg-[#0B1D40] shadow-2xl flex flex-col pt-6 px-6 transform transition-transform duration-300 translate-x-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-8 border-b border-[#1A315E] pb-4">
              <span className="font-bold text-lg text-white">Menu</span>
              <button 
                className="text-gray-300 hover:text-white p-1 rounded transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-5 text-base font-medium text-white">
              <a href="#" className="hover:text-blue-200 transition" onClick={(e) => { e.preventDefault(); handleNavClick("Navigating to Home"); }}>Home</a>
              <a href="#" className="hover:text-blue-200 transition" onClick={(e) => { e.preventDefault(); handleNavClick("Navigating to About Us"); }}>About Us</a>
              <a href="#" className="flex items-center justify-between hover:text-blue-200 transition group" onClick={(e) => { e.preventDefault(); handleNavClick("Opening Products dropdown"); }}>
                Our Products <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition" />
              </a>
              <a href="#" className="flex items-center justify-between hover:text-blue-200 transition group" onClick={(e) => { e.preventDefault(); handleNavClick("Opening Categories dropdown"); }}>
                Categories <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition" />
              </a>
              <a href="#" className="hover:text-blue-200 transition" onClick={(e) => { e.preventDefault(); handleNavClick("Navigating to Contact"); }}>Contact</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

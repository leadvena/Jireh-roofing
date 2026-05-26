import React, { useState } from 'react';
import { Phone, Menu, X, Shield, Award, Heart } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  onOpenFreeInspection: () => void;
}

export default function Header({ currentPage, setCurrentPage, onOpenFreeInspection }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: 'Home', value: 'home' },
    { label: 'Services', value: 'services' },
    { label: 'About Jireh', value: 'about' },
    { label: 'Free Inspection', value: 'free-inspection' },
    { label: 'Contact', value: 'contact' },
  ];

  const handleNavClick = (pageValue: string) => {
    setCurrentPage(pageValue);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-brand-blue text-white shadow-md border-b-2 border-brand-amber/30">
      {/* Top Banner with faith and trust highlights */}
      <div className="bg-brand-blue-light border-b border-white/10 px-4 py-2 text-xs text-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 font-mono text-[11px] sm:text-xs">
            <Heart className="w-3 h-3 text-brand-amber fill-brand-amber animate-pulse" />
            <span>"God Will Provide — And So Will We."</span>
            <span className="hidden md:inline text-white/50">|</span>
            <span className="hidden md:inline">Supporting local Mansfield & DFW Families</span>
          </div>
          <div className="flex items-center gap-4 font-semibold text-[11px] sm:text-xs text-brand-amber">
            <span className="flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-brand-amber" />
              BBB A+ Rated Contractor
            </span>
            <span>•</span>
            <span>Free Estimates</span>
            <span>•</span>
            <span>Financing Options Available</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand */}
          <div 
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-2 cursor-pointer group"
            id="nav-logo"
          >
            <div className="relative p-2 bg-gradient-to-br from-brand-amber to-brand-gold rounded-lg shadow-inner shadow-black/20 text-brand-blue font-bold flex items-center justify-center">
              <Shield className="w-7 h-7 text-brand-blue stroke-[2.5]" />
              <span className="absolute text-[10px] font-extrabold tracking-wider mt-0.5 text-brand-blue font-mono">J</span>
            </div>
            
            <div className="flex flex-col">
              <h1 className="text-xl sm:text-2xl font-black tracking-tight flex items-center gap-1.5 font-display">
                JIREH <span className="text-brand-amber font-light">ROOFING</span>
              </h1>
              <p className="text-[10px] sm:text-xs font-medium text-slate-300 font-mono tracking-widest uppercase -mt-1 group-hover:text-brand-amber transition-colors">
                Mansfield, TX
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigationItems.map((item) => (
              <button
                key={item.value}
                id={`nav-${item.value}`}
                onClick={() => handleNavClick(item.value)}
                className={`px-4 py-2.5 rounded-md text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                  currentPage === item.value
                    ? 'text-brand-white bg-brand-blue-light border-b-2 border-brand-amber shadow-sm'
                    : 'text-slate-200 hover:text-brand-amber hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Call / Contact Desktop CTA Button */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="mailto:jirehroofingtx@gmail.com"
              className="text-xs text-slate-300 hover:text-brand-amber font-medium transition-colors hidden xl:inline"
            >
              jirehroofingtx@gmail.com
            </a>
            <a
              href="tel:817-779-1658"
              id="cta-call-header"
              className="px-4 py-2 bg-brand-blue-light hover:bg-brand-blue-light/70 text-white rounded-lg border border-brand-amber/40 hover:border-brand-amber flex items-center gap-2 text-sm font-bold tracking-tight transition-all shadow-md group active:scale-95"
            >
              <span className="p-1 bg-brand-amber text-brand-blue rounded h-6 w-6 flex items-center justify-center transition-transform group-hover:scale-110">
                <Phone className="w-3.5 h-3.5 fill-current" />
              </span>
              <div className="text-left">
                <span className="block text-[8px] uppercase tracking-wider text-slate-300 font-semibold leading-none">Call Our Office</span>
                <span className="block font-mono leading-tight whitespace-nowrap text-brand-amber">817-779-1658</span>
              </div>
            </a>
          </div>

          {/* Mobile hamburger trigger - touch target over 44px */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-3 rounded-lg text-slate-200 hover:text-brand-amber hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-brand-amber/50 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Toggle navigation menu"
              id="mobile-menu-trigger"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 stroke-[2.2]" />
              ) : (
                <Menu className="w-6 h-6 stroke-[2.2]" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile drop-down Menu with sliding animation logic */}
      {isMobileMenuOpen && (
        <div id="mobile-menu-dropdown" className="lg:hidden bg-brand-blue border-t border-white/10 shadow-lg px-2 pt-2 pb-5 space-y-1.5 transition-all duration-300">
          {navigationItems.map((item) => (
            <button
              key={item.value}
              id={`nav-mobile-${item.value}`}
              onClick={() => handleNavClick(item.value)}
              className={`w-full text-left px-4 py-3 rounded-lg text-base font-semibold tracking-wide transition-colors ${
                currentPage === item.value
                  ? 'bg-brand-blue-light text-brand-amber border-l-4 border-brand-amber shadow-sm'
                  : 'text-slate-100 hover:bg-white/5 hover:text-brand-amber'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 pb-2 px-4 border-t border-white/10 space-y-3">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>Available for Immediate Dallas–Fort Worth Calls</span>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              <a
                href="tel:817-779-1658"
                id="mobile-menu-call"
                className="w-full py-3 bg-gradient-to-br from-brand-amber to-brand-gold text-brand-blue font-bold rounded-lg text-center shadow-md flex items-center justify-center gap-2 min-h-[44px]"
              >
                <Phone className="w-4 h-4 fill-current text-brand-blue" />
                <span>Call Now</span>
              </a>
              <button
                onClick={() => {
                  handleNavClick('free-inspection');
                }}
                id="mobile-menu-inspection"
                className="w-full py-3 bg-brand-blue-light text-white font-bold rounded-lg text-center border border-brand-amber/30 hover:border-brand-amber min-h-[44px] text-xs"
              >
                Free Inspection
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

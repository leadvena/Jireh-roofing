import React from 'react';
import { Phone, MapPin, Mail, Clock, ShieldAlert, BadgeInfo, Star, Award, Heart } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (pageValue: string) => {
    setCurrentPage(pageValue);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-blue text-white pt-16 pb-24 border-t-4 border-brand-amber">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-brand-amber text-brand-blue rounded font-black font-display">
                J
              </div>
              <h2 className="text-xl font-bold tracking-tight font-display text-white">
                JIREH <span className="text-brand-amber">ROOFING</span>
              </h2>
            </div>
            
            <p className="text-slate-300 text-sm leading-relaxed italic">
              "God Will Provide — And So Will We."
            </p>
            
            <p className="text-slate-400 text-xs leading-relaxed">
              Serving our North Texas neighbors with top-tier roofing, gutters, and storm damage restoration. Family-owned, community-driven, and built upon Biblical integrity.
            </p>

            {/* BBB graphic representation and high rating badges */}
            <div className="flex items-center gap-3 pt-2">
              {/* Fake but ultra professional custom SVG BBB badge as described */}
              <div className="bg-white text-brand-blue rounded px-3 py-1.5 flex items-center gap-2 border-l-4 border-blue-600 shadow-sm">
                <div className="text-right">
                  <div className="text-[9px] font-black tracking-normal leading-none font-sans text-blue-800">ACCREDITED</div>
                  <div className="text-[10px] font-black tracking-tight leading-none text-blue-900 font-sans">BUSINESS</div>
                </div>
                <div className="h-7 w-[2px] bg-slate-200"></div>
                <div className="flex flex-col items-center">
                  <span className="text-xs font-black text-amber-500 leading-none">A+</span>
                  <span className="text-[7px] font-bold text-slate-500 leading-none">Rating</span>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded px-2.5 py-1 flex items-center gap-1">
                <Star className="w-3.5 h-3.5 text-brand-amber fill-brand-amber" />
                <span className="text-xs font-bold font-mono text-brand-amber">5.0</span>
                <span className="text-[10px] text-slate-300">Google Star</span>
              </div>
            </div>
          </div>

          {/* Quick links Col */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-gold font-display mb-5 border-l-2 border-brand-amber pl-2">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <button onClick={() => handleNavClick('services')} className="hover:text-brand-amber hover:underline transition-all text-left">
                  Residential Roof Replacement
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('services')} className="hover:text-brand-amber hover:underline transition-all text-left">
                  Emergency Roof Inspections
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('services')} className="hover:text-brand-amber hover:underline transition-all text-left">
                  Storm Damage & Hail Repairs
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('services')} className="hover:text-brand-amber hover:underline transition-all text-left">
                  Custom Seamless Gutters
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('services')} className="hover:text-brand-amber hover:underline transition-all text-left">
                  Commercial/Flat TPO Roofing
                </button>
              </li>
            </ul>
          </div>

          {/* Information & Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-gold font-display mb-5 border-l-2 border-brand-amber pl-2">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <button onClick={() => handleNavClick('home')} className="hover:text-brand-amber hover:underline transition-all">
                  Home Page
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('services')} className="hover:text-brand-amber hover:underline transition-all">
                  Roofing Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('about')} className="hover:text-brand-amber hover:underline transition-all">
                  Our Story & Faith
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('free-inspection')} className="hover:text-brand-amber hover:underline transition-all">
                  Book Free Inspection
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contact')} className="hover:text-brand-amber hover:underline transition-all">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Contact and Service Area Col */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-gold font-display mb-5 border-l-2 border-brand-amber pl-2">
              Connect With Us
            </h3>
            <ul className="space-y-3.5 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-brand-amber shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-100 font-medium">Headquarters Location</span>
                  <a 
                    href="https://maps.google.com/?q=419+Hollyberry+Dr,+Mansfield,+TX+76063" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-brand-amber text-slate-300 text-xs transition-colors"
                  >
                    419 Hollyberry Dr<br />Mansfield, TX 76063
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-5 h-5 text-brand-amber shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-100 font-medium font-mono text-[11px] sm:text-xs">Direct Office Phone</span>
                  <a href="tel:817-779-1658" className="hover:text-brand-amber font-mono font-bold text-brand-gold text-base transition-colors">
                    817-779-1658
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-5 h-5 text-brand-amber shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-100 font-medium">Business Hours</span>
                  <p className="text-xs text-slate-300">
                    Mon - Sat: 7:00 AM - 7:00 PM<br />
                    Sunday: <span className="text-brand-amber font-medium">Closed for Worship</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Separator line and trademark notices */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <div className="text-center md:text-left space-y-1">
            <p>© {currentYear} Jireh Roofing. All rights reserved.</p>
            <p className="text-[10px]">Licensed in Texas | Insured | BBB A+ Commercial and Residential Roofing Contractor.</p>
          </div>
          
          <div className="flex items-center gap-2">
            <Heart className="w-3.5 h-3.5 text-brand-amber fill-brand-amber" />
            <span className="text-[10px]">Built with honest faith-based Texan pride.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

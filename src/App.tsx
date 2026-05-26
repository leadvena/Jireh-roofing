import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import ServicesView from './components/ServicesView';
import AboutView from './components/AboutView';
import InspectionView from './components/InspectionView';
import ContactView from './components/ContactView';
import { InspectionRequest } from './types';
import { Phone, Calendar, ArrowUp, AlertCircle, Sparkles } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [registeredRequests, setRegisteredRequests] = useState<InspectionRequest[]>([]);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Load registered requests from localStorage on startup
  useEffect(() => {
    try {
      const cached = localStorage.getItem('jireh_roofing_requests');
      if (cached) {
        setRegisteredRequests(JSON.parse(cached));
      }
    } catch (e) {
      console.error('Failed to parse cached requests:', e);
    }
  }, []);

  // Monitor scroll for scrollToTop button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInspectionSubmit = (data: Omit<InspectionRequest, 'id' | 'date' | 'status'>) => {
    const newRequest: InspectionRequest = {
      ...data,
      id: `JR-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      date: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      status: 'pending'
    };

    const updated = [newRequest, ...registeredRequests];
    setRegisteredRequests(updated);
    localStorage.setItem('jireh_roofing_requests', JSON.stringify(updated));
  };

  const handleClearRequests = () => {
    setRegisteredRequests([]);
    localStorage.removeItem('jireh_roofing_requests');
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 relative selection:bg-brand-amber selection:text-brand-blue">
      
      {/* Premium Header */}
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        onOpenFreeInspection={() => {
          setCurrentPage('free-inspection');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Main views rendering based on state */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomeView 
            setCurrentPage={setCurrentPage} 
            onSubmitInspection={handleInspectionSubmit} 
          />
        )}
        {currentPage === 'services' && (
          <ServicesView 
            onBookInspection={() => {
              setCurrentPage('free-inspection');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} 
          />
        )}
        {currentPage === 'about' && (
          <AboutView />
        )}
        {currentPage === 'free-inspection' && (
          <InspectionView 
            onSubmitInspection={handleInspectionSubmit} 
            registeredRequests={registeredRequests} 
            onClearRequests={handleClearRequests} 
          />
        )}
        {currentPage === 'contact' && (
          <ContactView />
        )}
      </main>

      {/* Scroll to Top button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-24 right-6 z-40 p-3 bg-brand-blue text-white rounded-full border border-brand-amber hover:bg-brand-blue-light transition-all shadow-lg text-brand-gold"
          title="Scroll to Top"
        >
          <ArrowUp className="w-5 h-5 text-brand-amber" />
        </button>
      )}

      {/* STICKY CLICK-TO-CALL BUTTON ON MOBILE (phone: 817-779-1658) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-brand-blue border-t border-brand-amber/40 shadow-[0_-4px_10px_rgba(0,0,0,0.15)] flex items-center justify-between p-3.5 gap-3">
        
        <a 
          href="tel:817-779-1658"
          id="mobile-sticky-phone"
          aria-label="Click to call Jireh Roofing"
          className="flex-grow bg-gradient-to-r from-brand-amber to-brand-gold text-brand-blue text-center font-extrabold text-sm py-3 px-4 rounded-xl shadow-md flex items-center justify-center gap-2.5 active:scale-95 transition-transform min-h-[44px]"
        >
          <Phone className="w-4 h-4 fill-brand-blue text-brand-blue" />
          <span>Call Office: 817-779-1658</span>
        </a>

        <button
          onClick={() => {
            setCurrentPage('free-inspection');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="bg-brand-blue-light border border-brand-amber/30 text-white font-bold text-xs py-3 px-4.5 rounded-xl flex items-center justify-center gap-1.5 min-h-[44px] active:scale-95"
        >
          <Calendar className="w-3.5 h-3.5 text-brand-amber" />
          <span>Free Inspection</span>
        </button>

      </div>

      {/* Bottom Footer block */}
      <Footer setCurrentPage={setCurrentPage} />

    </div>
  );
}

import React, { useState } from 'react';
import { 
  Wrench, Hammer, Home as HomeIcon, ClipboardCheck, 
  CloudLightning, Droplets, Building2, AlertTriangle,
  Heart, BadgeDollarSign, Users, MapPin, ShieldCheck,
  Star, Phone, Calendar, ArrowRight, Shield, CheckCircle, 
  Sparkles
} from 'lucide-react';
import { servicesData, testimonialsData, whyUsData } from '../data';
import { InspectionRequest } from '../types';

interface HomeViewProps {
  setCurrentPage: (page: string) => void;
  onSubmitInspection: (data: Omit<InspectionRequest, 'id' | 'date' | 'status'>) => void;
}

export default function HomeView({ setCurrentPage, onSubmitInspection }: HomeViewProps) {
  // Free Inspection form state
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formAddress, setFormAddress] = useState('');
  const [formMessage, setFormMessage] = useState('');
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Financing Quick Quote Calculator state
  const [calcRoofSize, setCalcRoofSize] = useState('medium'); // small, medium, large
  const [calcTermYears, setCalcTermYears] = useState(5); // 5, 10 years

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formPhone.trim() || formPhone.length < 10) {
      setErrorMessage('Please enter a valid phone number (at least 10 digits).');
      return;
    }
    if (!formAddress.trim()) {
      setErrorMessage('Please enter your Dallas-Fort Worth property address.');
      return;
    }

    // Submit payload
    onSubmitInspection({
      name: formName,
      phone: formPhone,
      address: formAddress,
      message: formMessage || 'Free roof inspection requested via home banner.'
    });

    setIsSubmitted(true);
    
    // Clear form
    setFormName('');
    setFormPhone('');
    setFormAddress('');
    setFormMessage('');

    // Reset success animation after some time
    setTimeout(() => {
      setIsSubmitted(false);
    }, 8000);
  };

  const calculateEstimate = () => {
    let basePrice = 7500;
    if (calcRoofSize === 'small') basePrice = 5200;
    if (calcRoofSize === 'large') basePrice = 11800;

    // Direct financing rates (e.g. 6.99% APR compound)
    const annualRate = 0.0699;
    const months = calcTermYears * 12;
    const monthlyRate = annualRate / 12;
    
    const monthlyPayment = (basePrice * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    
    return {
      total: Math.round(basePrice),
      monthly: Math.round(monthlyPayment)
    };
  };

  const calculatedValues = calculateEstimate();

  function renderServiceIcon(name: string) {
    switch (name) {
      case 'Wrench': return <Wrench className="w-6 h-6 text-brand-gold stroke-[2]" />;
      case 'Hammer': return <Hammer className="w-6 h-6 text-brand-gold stroke-[2]" />;
      case 'Home': return <HomeIcon className="w-6 h-6 text-brand-gold stroke-[2]" />;
      case 'ClipboardCheck': return <ClipboardCheck className="w-6 h-6 text-brand-gold stroke-[2]" />;
      case 'CloudLightning': return <CloudLightning className="w-6 h-6 text-brand-gold stroke-[2]" />;
      case 'Droplets': return <Droplets className="w-6 h-6 text-brand-gold stroke-[2]" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-brand-gold stroke-[2]" />;
      case 'AlertTriangle': return <AlertTriangle className="w-6 h-6 text-brand-gold stroke-[2]" />;
      default: return <Hammer className="w-6 h-6 text-brand-gold stroke-[2]" />;
    }
  }

  function renderWhyUsIcon(name: string) {
    switch (name) {
      case 'Heart': return <Heart className="w-5 h-5 text-brand-blue" />;
      case 'BadgeDollarSign': return <BadgeDollarSign className="w-5 h-5 text-brand-blue" />;
      case 'Users': return <Users className="w-5 h-5 text-brand-blue" />;
      case 'MapPin': return <MapPin className="w-5 h-5 text-brand-blue" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-brand-blue" />;
      default: return <ShieldCheck className="w-5 h-5 text-brand-blue" />;
    }
  }

  return (
    <div className="flex flex-col">
      
      {/* Brand Hero Section */}
      <section className="relative bg-brand-blue text-white overflow-hidden py-16 sm:py-24 border-b-4 border-brand-amber text-center lg:text-left">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-blue-light/60 via-brand-blue/95 to-brand-blue"></div>
        
        {/* Abstract background graphics or house roof outline rendering */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none hidden lg:block">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-brand-amber">
            <polygon points="50,15 15,45 25,45 25,85 75,85 75,45 85,45" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-12 xl:col-span-7 space-y-6 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-amber/10 border border-brand-amber/40 rounded-full text-brand-amber text-xs sm:text-sm font-semibold tracking-wide uppercase font-mono max-w-max mx-auto lg:mx-0">
                <span className="w-2 h-2 rounded-full bg-brand-amber animate-pulse"></span>
                BBB A+ Accredited Contractor
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white leading-[1.1]">
                Jireh Roofing <br />
                <span className="text-brand-gold bg-clip-text">Dallas–Fort Worth</span>
              </h1>

              <blockquote className="border-l-4 border-brand-amber pl-4 py-1 text-base sm:text-xl font-medium text-slate-200 tracking-wide inline-block text-left italic">
                "{whyUsData[0].description.split('"')[1] || 'God Will Provide — And So Will We.'}"
              </blockquote>

              <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Family-owned, trust-built roofing services based in Mansfield, Texas. We protect what matters most with durable roofing, direct financing, and honest, Bible-based integrity.
              </p>

              {/* Two CTA CTAs */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 pt-4">
                <button
                  onClick={() => {
                    const el = document.getElementById('inspection-form-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    else setCurrentPage('free-inspection');
                  }}
                  id="hero-cta-inspection"
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-br from-brand-amber to-brand-gold text-brand-blue hover:from-white hover:to-white font-extrabold rounded-xl shadow-lg hover:shadow-brand-amber/25 flex items-center justify-center gap-2 transition-all cursor-pointer min-h-[48px] active:scale-95"
                >
                  <Calendar className="w-5 h-5 text-brand-blue" />
                  <span>Get a Free Inspection</span>
                </button>
                
                <a
                  href="tel:817-779-1658"
                  id="hero-cta-call"
                  className="w-full sm:w-auto px-8 py-4 bg-brand-blue-light hover:bg-[#1a4d86]/80 text-white font-extrabold rounded-xl border-2 border-slate-300 hover:border-brand-amber shadow-md flex items-center justify-center gap-3 transition-all min-h-[48px] active:scale-95 text-base"
                >
                  <Phone className="w-4 h-4 text-brand-gold fill-current" />
                  <span>Call Now: 817-779-1658</span>
                </a>
              </div>

              {/* Checkmarks */}
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-400 font-mono pt-2">
                <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-brand-gold" /> Fully Insured & Licensed</span>
                <span className="flex items-center gap-1.5"><Star className="w-3.5 h-3.5 text-brand-gold fill-current" /> Free Estimates</span>
                <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-brand-gold" /> Financing Available</span>
              </div>
            </div>

            {/* Visual Promo Badge Card */}
            <div className="lg:col-span-12 xl:col-span-5 relative w-full max-w-md mx-auto xl:ml-auto">
              <div className="bg-gradient-to-b from-brand-blue-light/90 to-brand-blue/95 border-2 border-brand-amber/30 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden backdrop-blur-sm">
                
                {/* Ribbon badge */}
                <div className="absolute top-0 right-0 bg-brand-amber text-brand-blue font-black text-[10px] tracking-widest uppercase py-1 px-4 rounded-bl-xl shadow-sm">
                  FREE INSPECTION
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-brand-amber/20 text-brand-amber rounded-lg">
                      <ShieldCheck className="w-6 h-6 text-brand-amber" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-white text-lg font-display">Texas Storm Shield Package</h3>
                      <p className="text-[11px] text-slate-300 font-mono uppercase tracking-wider">No obligation • Zero Costs</p>
                    </div>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    Experiencing active leaks or concerned about hail damage from recent microbursts? Jireh's trained local roof appraisers will evaluate your roof structural integrity with detailed imagery.
                  </p>

                  <div className="border-t border-white/10 pt-4 space-y-2.5">
                    <div className="flex items-center gap-3 text-xs text-slate-200">
                      <span className="w-5 h-5 rounded-full bg-brand-amber/20 text-brand-amber flex items-center justify-center font-bold">1</span>
                      <span>Thorough visual surface analysis</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-200">
                      <span className="w-5 h-5 rounded-full bg-brand-amber/20 text-brand-amber flex items-center justify-center font-bold">2</span>
                      <span>High-resolution drone scans</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-200">
                      <span className="w-5 h-5 rounded-full bg-brand-amber/20 text-brand-amber flex items-center justify-center font-bold">3</span>
                      <span>Detailed, insurance-backed report</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      const el = document.getElementById('inspection-form-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                      else setCurrentPage('free-inspection');
                    }}
                    className="w-full mt-4 py-3 bg-brand-amber hover:bg-brand-gold text-brand-blue font-black uppercase text-xs tracking-wider rounded-lg shadow-md transition-colors"
                  >
                    Claim Free Assessment
                  </button>
                </div>
              </div>

              {/* Background Glow */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-amber/10 rounded-full blur-3xl pointer-events-none"></div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust bar Section */}
      <section className="bg-white border-b border-slate-200 shadow-sm py-4 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4 text-center">
            
            <div className="flex items-center gap-2">
              <span className="text-brand-blue font-extrabold tracking-wider border-2 border-brand-blue px-2 py-0.5 rounded text-xs font-mono">BBB A+ RATING</span>
              <span className="text-slate-500 text-xs font-medium">Accredited Local Business</span>
            </div>

            <div className="h-4 w-[1px] bg-slate-300 hidden md:block"></div>

            <div className="flex items-center gap-1.5">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-brand-amber fill-brand-amber" />
                ))}
              </div>
              <span className="text-slate-700 font-extrabold text-xs">5-Star Reviewed</span>
              <span className="text-slate-400 text-[11px]">(Google & Facebook)</span>
            </div>

            <div className="h-4 w-[1px] bg-slate-300 hidden md:block"></div>

            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4.5 h-4.5 text-emerald-600" />
              <span className="text-slate-700 font-extrabold text-xs">Fully Licensed & Insured Contractor</span>
            </div>

            <div className="h-4 w-[1px] bg-slate-300 hidden md:block"></div>

            <div className="flex items-center gap-1">
              <BadgeDollarSign className="w-4.5 h-4.5 text-brand-gold-dark" />
              <span className="text-slate-700 font-extrabold text-xs">Financing Available</span>
            </div>

            <div className="h-4 w-[1px] bg-slate-300 hidden md:block"></div>

            <div className="flex items-center gap-1">
              <div className="bg-amber-100 text-amber-800 text-[10px] font-black tracking-wider uppercase px-2 py-0.5 rounded font-mono">FREE ESTIMATES</div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-xs uppercase font-mono tracking-widest text-brand-amber font-extrabold bg-brand-blue text-white px-3 py-1 rounded inline-block">
              WHAT WE EXCEL AT
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold font-display text-brand-blue tracking-tight">
              Dallas–Fort Worth Premium Roofing Services
            </h3>
            <p className="text-slate-650 text-sm sm:text-base">
              With decades of experience and top-grade materials, we deliver unmatched weather resistance for commercial flat roofs, modern houses, and premium gutter guards.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((service) => (
              <div 
                key={service.id} 
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col group"
                id={`service-card-${service.id}`}
              >
                {/* Service Image placeholder with referrerPolicy */}
                <div className="h-44 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Floating Icon */}
                  <div className="absolute bottom-3 left-3 bg-brand-blue p-2.5 rounded-xl border border-brand-amber/30 shadow-md">
                    {renderServiceIcon(service.iconName)}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-brand-blue font-display">
                      {service.title}
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="border-t border-slate-100 pt-3">
                    <button
                      onClick={() => {
                        // Change state and scroll to specific item or Services Tab
                        setCurrentPage('services');
                        setTimeout(() => {
                          const item = document.getElementById(`service-extended-${service.id}`);
                          if (item) item.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                      }}
                      className="text-xs font-semibold text-brand-blue-light hover:text-brand-gold flex items-center gap-1 group/btn"
                    >
                      <span>Explore details</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Prompt CTA to services */}
          <div className="text-center mt-12">
            <button
              onClick={() => {
                setCurrentPage('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3 bg-brand-blue hover:bg-brand-blue-light text-white font-bold rounded-lg transition-colors text-sm shadow-md"
            >
              See Detailed Service Specifications
            </button>
          </div>

        </div>
      </section>

      {/* Why Jireh Values Section */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Value description column */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-brand-amber font-extrabold tracking-widest text-xs uppercase font-mono">
                OUR CHRISTIAN GUARANTEE
              </h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-brand-blue font-display leading-tight">
                Why DFW Homeowners Trust Jireh Roofing
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We are a local, family-owned Texas enterprise. We believe a roof is more than materials — it represents security, family, and honest local shelter. We represent true integrity by donating back to our community.
              </p>

              <div className="p-5 bg-slate-50 border-l-4 border-brand-amber rounded-r-xl space-y-2">
                <blockquote className="text-xs font-bold font-mono uppercase tracking-wider text-slate-400">The Scripture Foundation</blockquote>
                <p className="text-slate-700 italic text-sm">
                  "And Abraham called the name of that place Jehovahjireh: as it is said to this day, In the mount of the LORD it shall be provided." 
                </p>
                <cite className="block text-right text-xs font-bold text-slate-500">— Genesis 22:14</cite>
              </div>

              <button
                onClick={() => {
                  setCurrentPage('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 font-bold text-sm text-brand-blue-light hover:text-brand-amber hover:underline transition-colors"
              >
                <span>Read more about our mission</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Values Cards Column */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {whyUsData.map((item) => (
                <div 
                  key={item.id} 
                  className={`border border-slate-200 rounded-2xl p-5 hover:border-brand-amber hover:shadow-md transition-all ${
                    item.id === 'faith-based' ? 'sm:col-span-2 bg-gradient-to-br from-amber-50 to-white border-brand-amber/40 shadow-sm' : 'bg-white'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 bg-amber-100 rounded-xl shrink-0 mt-0.5">
                      {renderWhyUsIcon(item.iconName)}
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-brand-blue text-sm sm:text-base font-display">
                        {item.title}
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
          
        </div>
      </section>

      {/* Financing Calculator Section */}
      <section className="py-20 bg-brand-blue text-white relative overflow-hidden border-b-4 border-brand-amber">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-brand-blue-light/55 via-brand-blue/95 to-brand-blue"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Narrative Info */}
            <div className="lg:col-span-7 space-y-6">
              <span className="px-3 py-1 bg-brand-gold/10 border border-brand-gold/30 rounded-full text-brand-amber text-xs uppercase tracking-wider font-mono font-bold">
                FINANCING OPTIONS
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold font-display leading-tight text-white">
                Don't Let Cost Stop You — Home Improvement Financing Available
              </h3>
              <p className="text-slate-350 text-sm sm:text-base leading-relaxed">
                A damaged roof requires immediate action to protect your home. Putting off roof replacement can cause catastrophic black mold or structural wood rotting. We offer highly competitive, zero-prepayment penalty financing.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <h4 className="font-bold text-brand-amber text-sm font-display">As Low As 0% APR</h4>
                  <p className="text-slate-300 text-xs mt-1">Qualified plans with no interest if paid off during the introductory period.</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <h4 className="font-bold text-brand-amber text-sm font-display">No Prepayment Penalties</h4>
                  <p className="text-slate-300 text-xs mt-1">Pay off your balance whenever you want with zero extra fees or charges.</p>
                </div>
              </div>

              <blockquote className="text-xs text-slate-400 italic">
                * All financing programs subject to credit approval. Offered via Texas licensed home improvement lenders.
              </blockquote>
            </div>

            {/* Quick Interactive Slider App */}
            <div className="lg:col-span-5 bg-white text-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl border border-brand-amber/30">
              <h4 className="text-base font-extrabold text-brand-blue font-display tracking-tight mb-4 text-center">
                🛠️ Instant Estimator & Monthly Financing Calculator
              </h4>
              
              <div className="space-y-5">
                {/* Size choice */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">
                    Property Roof Footprint
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => setCalcRoofSize('small')}
                      className={`py-2 text-xs font-bold rounded-lg border transition-all ${
                        calcRoofSize === 'small'
                          ? 'bg-brand-blue text-white border-brand-blue'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      Small Home <br /> <span className="text-[10px] font-normal font-mono">(1,500 sq ft)</span>
                    </button>
                    <button
                      onClick={() => setCalcRoofSize('medium')}
                      className={`py-2 text-xs font-bold rounded-lg border transition-all ${
                        calcRoofSize === 'medium'
                          ? 'bg-brand-blue text-white border-brand-blue'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      Average Home <br /> <span className="text-[10px] font-normal font-mono">(2,500 sq ft)</span>
                    </button>
                    <button
                      onClick={() => setCalcRoofSize('large')}
                      className={`py-2 text-xs font-bold rounded-lg border transition-all ${
                        calcRoofSize === 'large'
                          ? 'bg-brand-blue text-white border-brand-blue'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      Large Home <br /> <span className="text-[10px] font-normal font-mono">(3,800+ sq ft)</span>
                    </button>
                  </div>
                </div>

                {/* Term years slider choice */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs text-slate-500">
                    <span className="font-bold uppercase tracking-wider font-mono">Financing Period</span>
                    <span className="font-extrabold text-brand-blue font-mono">{calcTermYears} Years</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="10"
                    step="5"
                    value={calcTermYears}
                    onChange={(e) => setCalcTermYears(Number(e.target.value))}
                    className="w-full text-brand-blue h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-blue focus:outline-none"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                    <span>5-Year Term</span>
                    <span>10-Year Term</span>
                  </div>
                </div>

                {/* Estimation box */}
                <div className="bg-amber-50 border border-brand-amber/30 rounded-xl p-4 text-center space-y-1.5 shadow-inner">
                  <span className="text-[10px] uppercase tracking-wider text-slate-600 font-bold font-mono">Estimated Low Monthly Plan</span>
                  <div className="text-3xl font-black text-brand-blue font-display flex items-baseline justify-center">
                    ${calculatedValues.monthly}
                    <span className="text-xs font-semibold text-slate-500 font-sans ml-1">/ month</span>
                  </div>
                  <div className="text-[11px] text-slate-500 italic">
                    Based on standard full replacement estimate of ${calculatedValues.total.toLocaleString()} at 6.99% fixed APR rate.
                  </div>
                </div>

                <button
                  onClick={() => {
                    const el = document.getElementById('inspection-form-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    else setCurrentPage('free-inspection');
                  }}
                  className="w-full py-4.5 bg-gradient-to-r from-brand-amber to-brand-gold hover:from-brand-gold hover:to-brand-gold text-brand-blue font-extrabold text-sm rounded-xl uppercase tracking-wider shadow-md transition-colors leading-none"
                >
                  Apply For Financing Pre-Approval
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Free Inspection Form Section */}
      <section id="inspection-form-section" className="py-20 bg-slate-100 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border-t-8 border-brand-amber">
            
            {/* Header banner */}
            <div className="bg-brand-blue text-white p-8 text-center space-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-10 -mt-10"></div>
              <h3 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-white leading-none">
                Schedule Your FREE Roof Inspection Today
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm italic">
                No strings attached. Honest assessments by absolute Mansfield locals.
              </p>
            </div>

            {/* Form body */}
            <form onSubmit={handleFormSubmit} className="p-6 sm:p-10 space-y-6">
              
              {isSubmitted ? (
                <div className="bg-emerald-50 border-2 border-emerald-300 rounded-2xl p-6 text-center space-y-3 animate-fade-in">
                  <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="text-lg font-bold text-emerald-800">Inspection Request Successfully Logged!</h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you! Jireh Roofing has registered your request. One of our specialists will call your contact number within 24 business hours to set up your schedule at <strong>{formAddress || "your property"}</strong>.
                  </p>
                  <p className="text-xs font-mono text-slate-400">Ref ID: JR-{(Math.random()*100000).toFixed(0)}</p>
                </div>
              ) : null}

              {errorMessage && (
                <div className="bg-rose-50 border-l-4 border-rose-500 text-rose-700 p-3.5 rounded text-xs font-bold">
                  ⚠️ {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider font-mono">
                    Full Name <span className="text-brand-amber">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue text-sm transition-all"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider font-mono">
                    Phone Number <span className="text-brand-amber">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    placeholder="e.g. 817-779-1658"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue text-sm transition-all"
                    required
                  />
                </div>

                {/* Address */}
                <div className="sm:col-span-2 space-y-1.5">
                  <label htmlFor="address" className="block text-xs font-bold text-slate-700 uppercase tracking-wider font-mono">
                    DFW Property Address <span className="text-brand-amber">*</span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    value={formAddress}
                    onChange={(e) => setFormAddress(e.target.value)}
                    placeholder="e.g. 419 Hollyberry Dr, Mansfield, TX 76063"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue text-sm transition-all"
                    required
                  />
                </div>

                {/* Brief Message */}
                <div className="sm:col-span-2 space-y-1.5">
                  <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider font-mono">
                    Brief Damage Description or Notes <span className="text-slate-400">(Optional)</span>
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    placeholder="Describe any active leaks, shingle damage, hail impact area or special instructions..."
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue text-sm transition-all"
                  />
                </div>

              </div>

              <div className="pt-2 text-center">
                <button
                  type="submit"
                  id="submit-free-inspection-form"
                  className="px-8 py-4.5 bg-gradient-to-r from-brand-amber to-brand-gold hover:from-brand-gold hover:to-brand-gold text-brand-blue font-extrabold text-sm rounded-xl uppercase tracking-wider shadow-md transition-colors w-full sm:w-auto"
                >
                  Submit Inspection Request
                </button>
                <p className="text-[10px] text-slate-400 mt-3">
                  We collect strictly contact information to provide roofing Estimates. We never sell your private information, in obedience to professional guidelines.
                </p>
              </div>

            </form>
          </div>

        </div>
      </section>

      {/* Testimonials section */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <h2 className="text-brand-amber font-extrabold tracking-widest text-xs uppercase font-mono">
              CLIENT VOICE
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold font-display text-brand-blue tracking-tight">
              Testimonials From Verified Neighbors
            </h3>
            <p className="text-slate-600 text-sm sm:text-base">
              Dallas–Fort Worth families trust Jireh Roofing to stand tall during stormy Texas times. Read real verified feedback from our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonialsData.map((t) => (
              <div key={t.id} className="bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-2xl relative shadow-sm hover:shadow-md transition-all">
                
                {/* Google 5 star feedback badge layout style */}
                <span className="absolute top-6 right-6 bg-white/80 border border-slate-200 text-brand-amber px-2.5 py-1 rounded inline-flex items-center gap-1.5 text-xs font-mono font-bold">
                  <Star className="w-3.5 h-3.5 fill-current text-brand-amber" />
                  <span>5.0</span>
                </span>

                <div className="space-y-4 text-left">
                  <div className="flex">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-brand-amber fill-brand-amber" />
                    ))}
                  </div>

                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
                    "{t.text}"
                  </p>

                  <div className="border-t border-slate-200/60 pt-4 flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-brand-blue font-display text-sm sm:text-base">{t.name}</h4>
                      <span className="text-xs text-slate-500 font-mono">{t.location} • {t.date}</span>
                    </div>

                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[9px] uppercase font-mono font-bold tracking-wider rounded">
                      ✓ Verified Review
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Google Maps embed for Mansfield TX service area */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-brand-amber font-extrabold tracking-widest text-xs uppercase font-mono">
                LOCAL COVERAGE AREA
              </h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-brand-blue font-display tracking-tight leading-tight">
                Proudly Stationed in Mansfield, Texas
              </h3>
              <p className="text-slate-650 text-base leading-relaxed">
                Jireh Roofing is physically stationed right at <strong>419 Hollyberry Dr in Mansfield, TX (76063)</strong>. We serve a wide radius around the Dallas-Fort Worth metroplex.
              </p>

              <div className="space-y-3">
                <h4 className="font-bold text-brand-blue text-sm uppercase tracking-wider font-mono">Immediate Services Offered In:</h4>
                <div className="grid grid-cols-2 gap-2 text-sm text-slate-700">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-amber"></span>
                    <span>Mansfield, TX</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-amber"></span>
                    <span>Arlington, TX</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-amber"></span>
                    <span>Grand Prairie</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-amber"></span>
                    <span>Dallas Metro</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-amber"></span>
                    <span>Fort Worth</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-amber"></span>
                    <span>Cedar Hill</span>
                  </div>
                </div>
              </div>

              {/* Direct links */}
              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=419+Hollyberry+Dr,+Mansfield,+TX+76063"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-brand-blue hover:bg-brand-blue-light text-white font-bold rounded-lg text-xs tracking-wider uppercase transition-colors inline-flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4 text-brand-amber" />
                  <span>Get Driving Directions</span>
                </a>
              </div>
            </div>

            {/* Google Map Iframe Block */}
            <div className="lg:col-span-7 bg-white p-3 rounded-2xl border border-slate-200 shadow-md h-96 overflow-hidden">
              <iframe
                id="google-maps-embed-jireh"
                title="Google Maps Location - Jireh Roofing in Mansfield, TX"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x864e62243d5f57cd%3A0xe5a1b32f913d6a0!2s419%20Hollyberry%20Dr%2C%20Mansfield%2C%20TX%2076063!5e0!3m2!1sen!2sus!4v1716768000000!5m2!1sen!2sus"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              ></iframe>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

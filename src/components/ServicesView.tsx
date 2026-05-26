import React, { useState } from 'react';
import { 
  Wrench, Hammer, Home as HomeIcon, ClipboardCheck, 
  CloudLightning, Droplets, Building2, AlertTriangle,
  Award, Shield, Star, Calculator, ArrowRight, CheckCircle2,
  Phone, BadgePercent, ShieldAlert, Sparkles, UserCheck
} from 'lucide-react';
import { servicesData } from '../data';
import { Service } from '../types';

interface ServicesViewProps {
  onBookInspection: () => void;
}

export default function ServicesView({ onBookInspection }: ServicesViewProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'residential' | 'commercial' | 'storm'>('all');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  // Quick Service Estimate Request state
  const [formServiceType, setFormServiceType] = useState('Roof Repair');
  const [formSizing, setFormSizing] = useState('Medium Home');
  const [formSchedule, setFormSchedule] = useState('As soon as possible');
  const [customSubmitted, setCustomSubmitted] = useState(false);

  const filteredServices = servicesData.filter((service) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'residential') {
      return ['roof-repair', 'roof-replacement', 'roof-installation', 'gutter-services'].includes(service.id);
    }
    if (activeCategory === 'commercial') {
      return ['commercial-roofing', 'roof-installation'].includes(service.id);
    }
    if (activeCategory === 'storm') {
      return ['storm-damage', 'emergency-roofing', 'roof-inspection'].includes(service.id);
    }
    return true;
  });

  function renderServiceIcon(name: string) {
    switch (name) {
      case 'Wrench': return <Wrench className="w-5 h-5 text-brand-gold stroke-[2]" />;
      case 'Hammer': return <Hammer className="w-5 h-5 text-brand-gold stroke-[2]" />;
      case 'Home': return <HomeIcon className="w-5 h-5 text-brand-gold stroke-[2]" />;
      case 'ClipboardCheck': return <ClipboardCheck className="w-5 h-5 text-brand-gold stroke-[2]" />;
      case 'CloudLightning': return <CloudLightning className="w-5 h-5 text-brand-gold stroke-[2]" />;
      case 'Droplets': return <Droplets className="w-5 h-5 text-brand-gold stroke-[2]" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-brand-gold stroke-[2]" />;
      case 'AlertTriangle': return <AlertTriangle className="w-5 h-5 text-brand-gold stroke-[2]" />;
      default: return <Hammer className="w-5 h-5 text-brand-gold stroke-[2]" />;
    }
  }

  const handleEstimateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCustomSubmitted(true);
    setTimeout(() => {
      setCustomSubmitted(false);
    }, 7000);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Hero title banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-xs uppercase font-mono tracking-widest text-[#d4af37] font-extrabold bg-brand-blue text-white px-3 py-1 rounded inline-block">
            JIREH SERVICE SPECIFICATIONS
          </h2>
          <h1 className="text-4xl font-extrabold font-display text-brand-blue tracking-tight">
            Premium Roofing Solutions Built with Honesty
          </h1>
          <p className="text-slate-600 text-sm sm:text-base">
            From emergency hail-storm damage restoration to beautiful commercial roof insulation, explore our complete list of services with transparent material listings and absolute faith-based standards.
          </p>
        </div>

        {/* Category Toggles - 44px+ touch target sizes */}
        <div className="flex flex-wrap justify-center items-center gap-2 max-w-2xl mx-auto pb-4">
          <button
            onClick={() => { setActiveCategory('all'); setSelectedServiceId(null); }}
            className={`px-5 py-3 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 cursor-pointer min-h-[44px] ${
              activeCategory === 'all'
                ? 'bg-brand-blue text-brand-amber shadow-md border-b-2 border-brand-amber'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            All Service Catalog
          </button>
          <button
            onClick={() => { setActiveCategory('residential'); setSelectedServiceId(null); }}
            className={`px-5 py-3 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 cursor-pointer min-h-[44px] ${
              activeCategory === 'residential'
                ? 'bg-brand-blue text-brand-amber shadow-md border-b-2 border-brand-amber'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            Residential Solutions
          </button>
          <button
            onClick={() => { setActiveCategory('commercial'); setSelectedServiceId(null); }}
            className={`px-5 py-3 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 cursor-pointer min-h-[44px] ${
              activeCategory === 'commercial'
                ? 'bg-brand-blue text-brand-amber shadow-md border-b-2 border-brand-amber'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            Flat & Commercial TPO
          </button>
          <button
            onClick={() => { setActiveCategory('storm'); setSelectedServiceId(null); }}
            className={`px-5 py-3 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 cursor-pointer min-h-[44px] ${
              activeCategory === 'storm'
                ? 'bg-brand-blue text-brand-amber shadow-md border-b-2 border-brand-amber'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            Storm & Emergencies
          </button>
        </div>

        {/* Dynamic Service Grid with accordion click selection inside */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-8 space-y-6">
            {filteredServices.map((service) => {
              const isSelected = selectedServiceId === service.id;
              
              return (
                <div 
                  key={service.id} 
                  id={`service-extended-${service.id}`}
                  className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${
                    isSelected 
                      ? 'border-brand-amber shadow-xl ring-2 ring-brand-amber/20' 
                      : 'border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md'
                  }`}
                >
                  {/* Service Card Row header */}
                  <div 
                    onClick={() => setSelectedServiceId(isSelected ? null : service.id)}
                    className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 cursor-pointer select-none"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-brand-blue/10 text-brand-blue rounded-xl">
                        {renderServiceIcon(service.iconName)}
                      </div>
                      <div className="text-left">
                        <h3 className="text-lg font-extrabold text-brand-blue font-display">
                          {service.title}
                        </h3>
                        <p className="text-xs text-slate-500 font-mono tracking-wide uppercase">
                          Mansfield Local • Rated 5.0
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 self-end sm:self-center">
                      <span className="text-xs font-semibold text-brand-blue-light group-hover:text-brand-amber shrink-0">
                        {isSelected ? 'Hide Details' : 'View Specifications'}
                      </span>
                      <div className={`p-1.5 rounded-full bg-slate-100 text-slate-650 transition-transform ${isSelected ? 'rotate-180' : ''}`}>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Expandable Panel body */}
                  {isSelected && (
                    <div className="border-t border-slate-100 bg-slate-50/50 p-6 sm:p-8 space-y-6 animate-fade-in text-left">
                      
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        
                        {/* Text explanation */}
                        <div className="md:col-span-7 space-y-4">
                          <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest font-mono">
                            Service Summary
                          </h4>
                          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                            {service.description} We run our setups using top-grade equipment, premium quality ventilation vents, and durable synthetic weather guards.
                          </p>

                          <div className="space-y-2.5 pt-2">
                            <h5 className="font-bold text-brand-blue text-xs uppercase tracking-wider font-mono">
                              Key Standards & Warranties
                            </h5>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {service.bullets.map((bullet, idx) => (
                                <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                  <span>{bullet}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Image Panel */}
                        <div className="md:col-span-5 relative h-48 md:h-auto rounded-xl overflow-hidden border border-slate-200">
                          <img 
                            src={service.image} 
                            alt={service.title}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"></div>
                          
                          <div className="absolute bottom-3 left-3 right-3 text-white text-center space-y-1">
                            <span className="text-[10px] font-black uppercase tracking-wider text-brand-amber bg-brand-blue/80 px-2 py-0.5 rounded font-mono inline-block">
                              Jireh Approved
                            </span>
                            <p className="text-[11px] font-medium leading-tight">Mansfield, Texas Professional Setup</p>
                          </div>
                        </div>

                      </div>

                      {/* CTA action buttons inside expanding panel */}
                      <div className="border-t border-slate-200/80 pt-5 flex flex-col sm:flex-row justify-between items-center gap-4 bg-white -mx-6 -mb-6 p-6 sm:-mx-8 sm:-mb-8">
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <Award className="w-5 h-5 text-brand-gold" />
                          <span>Standard 10-Year Leak-Proof Labor Guarantee Included</span>
                        </div>

                        <div className="flex gap-2 w-full sm:w-auto">
                          <button
                            onClick={onBookInspection}
                            className="w-full sm:w-auto px-5 py-2.5 bg-brand-blue text-white hover:bg-brand-blue-light font-bold text-xs rounded-lg uppercase tracking-wider shadow"
                          >
                            Schedule Inspection
                          </button>
                          
                          <a
                            href="tel:817-779-1658"
                            className="w-full sm:w-auto px-5 py-2.5 bg-brand-amber hover:bg-brand-gold text-brand-blue font-extrabold text-xs rounded-lg uppercase tracking-wider text-center"
                          >
                            Call Rapid Line
                          </a>
                        </div>
                      </div>

                    </div>
                  )}

                </div>
              );
            })}
          </div>

          {/* Right sidebar quick Estimate submit form */}
          <div className="lg:col-span-4 bg-white border border-slate-200 rounded-2xl p-6 shadow-md sticky top-32">
            <h3 className="font-extrabold text-brand-blue font-display text-base uppercase tracking-tight flex items-center gap-2 mb-4 border-b border-slate-100 pb-3">
              <Calculator className="w-5 h-5 text-brand-gold" />
              <span>Get Estimate Specs</span>
            </h3>

            {customSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-xl text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="text-sm font-bold text-emerald-800">Parameters Logged!</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We have mapped your parameters to our estimator grid. One of our Mansfield specialists will contact you directly to formulate a line-by-line quote.
                </p>
              </div>
            ) : (
              <form onSubmit={handleEstimateSubmit} className="space-y-4">
                
                <div className="space-y-1">
                  <label htmlFor="service-type" className="block text-[10px] uppercase tracking-wider font-mono font-bold text-slate-500">
                    Roof Service Category
                  </label>
                  <select
                    id="service-type"
                    value={formServiceType}
                    onChange={(e) => setFormServiceType(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-350 rounded-lg text-xs font-semibold text-slate-700 focus:outline-none focus:ring-1 focus:ring-brand-blue"
                  >
                    <option value="Roof Repair">Roof Repair & Leak Fixing</option>
                    <option value="Roof Replacement">Residential Full Re-roof</option>
                    <option value="Roof Installation">New Shingle Install</option>
                    <option value="Storm Damage">Storm / Hail Damage Adjusting</option>
                    <option value="Gutter Services">Gutters & Filtration Leaf guards</option>
                    <option value="Commercial Roofing">TPO / Commercial low-slope</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label htmlFor="estimate-size" className="block text-[10px] uppercase tracking-wider font-mono font-bold text-slate-500">
                    Approximate Sizing Plan
                  </label>
                  <select
                    id="estimate-size"
                    value={formSizing}
                    onChange={(e) => setFormSizing(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-350 rounded-lg text-xs font-semibold text-slate-700 focus:outline-none focus:ring-1 focus:ring-brand-blue"
                  >
                    <option value="Small Cabin">Small Home (~1,500 sq ft)</option>
                    <option value="Medium Home">Average Home (~2,500 sq ft)</option>
                    <option value="Large Estate">Premium Home (~3,800+ sq ft)</option>
                    <option value="Commercial Structure">Commercial Building</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label htmlFor="estimate-schedule" className="block text-[10px] uppercase tracking-wider font-mono font-bold text-slate-500">
                    Preferred Schedule Priority
                  </label>
                  <select
                    id="estimate-schedule"
                    value={formSchedule}
                    onChange={(e) => setFormSchedule(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-350 rounded-lg text-xs font-semibold text-slate-700 focus:outline-none focus:ring-1 focus:ring-brand-blue"
                  >
                    <option value="As soon as possible">ASAP Storm Emergency Tarping</option>
                    <option value="Within 2 weeks">Standard Booking (Within 14 Days)</option>
                    <option value="Flexible next month">Flexible Planning (30+ Days out)</option>
                  </select>
                </div>

                <div className="bg-amber-50 border border-brand-amber/20 rounded-xl p-3.5 space-y-1.5 text-center">
                  <span className="text-[9px] font-black uppercase text-slate-500 font-mono">Immediate Promotion Offer</span>
                  <p className="text-xs font-extrabold text-brand-blue">
                    🎁 Get custom leaf-screen filters 100% FREE with any full replacement contract!
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-brand-blue hover:bg-brand-blue-light text-white font-extrabold text-xs uppercase tracking-wide rounded-lg shadow transition-colors"
                >
                  Request Line-item Cost Layout
                </button>

              </form>
            )}

            <div className="border-t border-slate-100 mt-5 pt-4 space-y-2 text-center">
              <span className="text-[10px] text-slate-400 block font-mono">Or connect directly via:</span>
              <a href="tel:817-779-1658" className="inline-flex items-center gap-1.5 font-bold font-mono text-brand-blue-light text-sm hover:text-brand-amber transition-colors">
                <Phone className="w-3.5 h-3.5" />
                <span>817-779-1658</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

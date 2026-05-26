import React, { useState } from 'react';
import { 
  Heart, Users, Award, ShieldCheck, MapPin, 
  Check, Cross, Star, HelpCircle, MessageSquare, Handshake, ShieldCheck as Shield
} from 'lucide-react';
import { whyUsData } from '../data';

export default function AboutView() {
  const [activeTab, setActiveTab] = useState<'mission' | 'tracker' | 'comparison'>('mission');

  // Simulated metrics for our donation campaign
  const campaignMetrics = {
    totalDonated: 18450,
    roofsReplaced: 123,
    familiesSupported: 38,
    activeCampaign: 'Mansfield Family Crisis Center Roof Fund'
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page title banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-xs uppercase font-mono tracking-widest text-brand-gold font-extrabold bg-brand-blue text-white px-3 py-1 rounded inline-block">
            GOD WILL PROVIDE — AND SO WILL WE
          </h2>
          <h1 className="text-4xl font-extrabold font-display text-brand-blue tracking-tight">
            About Jireh Roofing in Mansfield, TX
          </h1>
          <p className="text-slate-650 text-sm sm:text-base">
            We are not a remote corporate conglomerate or fly-by-night storm chasers. We are your local, faith-first neighbors providing pristine shelter for North Texas roofs.
          </p>
        </div>

        {/* Multi-Section Submenu Selector - min 44px touch targets */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 max-w-3xl mx-auto border-b border-slate-200 pb-2">
          <button
            onClick={() => setActiveTab('mission')}
            className={`w-full sm:w-auto px-6 py-3.5 rounded-t-xl text-xs sm:text-sm font-bold tracking-wide transition-all min-h-[44px] ${
              activeTab === 'mission'
                ? 'bg-brand-blue text-brand-amber border-b-4 border-brand-amber shadow'
                : 'bg-white text-slate-755 hover:bg-slate-100'
            }`}
          >
            Mission & Faith Foundation
          </button>
          
          <button
            onClick={() => setActiveTab('tracker')}
            className={`w-full sm:w-auto px-6 py-3.5 rounded-t-xl text-xs sm:text-sm font-bold tracking-wide transition-all min-h-[44px] ${
              activeTab === 'tracker'
                ? 'bg-brand-blue text-brand-amber border-b-4 border-brand-amber shadow'
                : 'bg-white text-slate-755 hover:bg-slate-100'
            }`}
          >
            ♥ Community Giving Impact
          </button>
          
          <button
            onClick={() => setActiveTab('comparison')}
            className={`w-full sm:w-auto px-6 py-3.5 rounded-t-xl text-xs sm:text-sm font-bold tracking-wide transition-all min-h-[44px] ${
              activeTab === 'comparison'
                ? 'bg-brand-blue text-brand-amber border-b-4 border-brand-amber shadow'
                : 'bg-white text-slate-755 hover:bg-slate-100'
            }`}
          >
            Local Family vs. Corporate Contrast
          </button>
        </div>

        {/* Conditional rendering depending on sub navigation page state */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-md border border-slate-200">
          
          {activeTab === 'mission' && (
            <div className="space-y-8 animate-fade-in text-left">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-12 xl:col-span-7 space-y-6">
                  <h3 className="text-2xl font-black font-display text-brand-blue tracking-tight">
                    Where "Jireh" Passion Originated
                  </h3>
                  <p className="text-slate-650 text-base leading-relaxed">
                    Jireh Roofing was formed by a Mansfield family committed to offering high-integrity home restorations in obedience to Christian values. In Hebrew Scripture, <strong>"Jehovah-Jireh"</strong> means <em>"The Lord Will Provide."</em> Through wind, lightning, storms, and economic shifts, we believe in providing top quality safety and honest, fair-handed contracting.
                  </p>
                  
                  <p className="text-slate-650 text-base leading-relaxed">
                    We know that home improvement projects can feel stressful and expensive. That’s why we operate strictly under double-verified transparency. We never push unnecessary visual patches, and we verify every hail estimation report with photographic proof.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="border border-slate-200 rounded-xl p-4 space-y-1 hover:border-brand-amber transition-colors">
                      <span className="text-brand-amber font-black text-xl font-display">100%</span>
                      <h4 className="font-extrabold text-brand-blue text-sm">Bible-Inspired Honesty</h4>
                      <p className="text-slate-500 text-xs">We do what we say, keep on-schedule, and correct any issues immediately.</p>
                    </div>
                    <div className="border border-slate-200 rounded-xl p-4 space-y-1 hover:border-brand-amber transition-colors">
                      <span className="text-brand-amber font-black text-xl font-display">A+ Rated</span>
                      <h4 className="font-extrabold text-brand-blue text-sm">Better Business Bureau</h4>
                      <p className="text-slate-500 text-xs">The highest benchmark of continuous business ethics and transparency.</p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-12 xl:col-span-5 relative">
                  <div className="rounded-2xl overflow-hidden border-2 border-slate-200 shadow-lg relative h-80">
                    <img 
                      src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800" 
                      alt="Jireh Construction" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-brand-blue/30 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[10px] font-black tracking-widest text-brand-amber uppercase font-mono block">OUR HQ</span>
                      <p className="text-sm font-bold font-display">419 Hollyberry Dr, Mansfield TX</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Core Values values summary */}
              <div className="border-t border-slate-100 pt-8">
                <h4 className="text-center font-bold text-slate-400 text-xs font-mono uppercase tracking-widest mb-6">Our Christian Code of Integrity</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {whyUsData.slice(0, 3).map((v) => (
                    <div key={v.id} className="p-5 bg-slate-50 rounded-xl space-y-3">
                      <h5 className="font-extrabold text-brand-blue text-sm font-display flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
                        {v.title}
                      </h5>
                      <p className="text-xs text-slate-650 leading-relaxed">
                        {v.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tracker' && (
            <div className="space-y-8 animate-fade-in text-left">
              <div className="max-w-3xl space-y-4">
                <h3 className="text-2xl font-black font-display text-brand-blue tracking-tight">
                  Our Community Donation Pledge
                </h3>
                <p className="text-slate-650 text-base leading-relaxed">
                  We believe we are blessed so we can be a blessing to others. That is why Jireh Roofing has pledged a custom portion of our business receipts to help fund local families in need, low-income seniors needing safety patches, and local Mansfield crisis centers.
                </p>
              </div>

              {/* Graphic Tracker dashboard */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                
                <div className="bg-brand-blue text-white rounded-2xl p-6 text-center space-y-1.5 shadow-md">
                  <Heart className="w-8 h-8 text-rose-400 mx-auto fill-rose-400 animate-pulse" />
                  <span className="block text-2xl font-black font-mono text-brand-amber">${campaignMetrics.totalDonated.toLocaleString()}</span>
                  <span className="block text-xs uppercase font-bold text-slate-300 font-mono">Total Donated Back</span>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center space-y-1.5">
                  <Star className="w-8 h-8 text-brand-gold mx-auto fill-brand-gold" />
                  <span className="block text-2xl font-black font-mono text-brand-blue">{campaignMetrics.roofsReplaced}</span>
                  <span className="block text-xs uppercase font-bold text-slate-500 font-mono font-display">DFW Roof Restoration Jobs</span>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center space-y-1.5">
                  <Users className="w-8 h-8 text-brand-blue-light mx-auto" />
                  <span className="block text-2xl font-black font-mono text-brand-blue">{campaignMetrics.familiesSupported}</span>
                  <span className="block text-xs uppercase font-bold text-slate-500 font-mono">Texas Families Gifted</span>
                </div>

              </div>

              {/* Current Active Campaign widget card */}
              <div className="bg-amber-50 border border-brand-amber/35 rounded-2xl p-6 sm:p-8 space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <span className="px-2 py-0.5 bg-brand-blue text-brand-amber text-[9px] uppercase tracking-wider font-mono font-bold rounded">
                      ACTIVE DONATION CAMPAIGN
                    </span>
                    <h4 className="text-base sm:text-lg font-black text-brand-blue font-display mt-1">
                      {campaignMetrics.activeCampaign}
                    </h4>
                  </div>
                  <span className="font-mono font-bold text-xs bg-white text-brand-blue border border-brand-amber/50 rounded px-2.5 py-1">
                    Goal: $5,000 this month
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Right now, Jireh Roofing is donating <strong>$150 of every full roofing replacement contract</strong> to replace the damaged shingles on the main recreation hall at the Mansfield Family Crisis Center. You are directly helping local youths when you choose to secure your home with Jireh!
                </p>

                {/* Progress bar visual mockup */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-500 font-mono">
                    <span>Campaign Progress</span>
                    <span>74% Supported</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden shadow-inner flex">
                    <div className="bg-gradient-to-r from-brand-amber to-brand-gold h-full rounded-full transition-all duration-500" style={{ width: '74%' }}></div>
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                    <span>$0 raised</span>
                    <span>$3,700 of $5,000 reached</span>
                  </div>
                </div>
              </div>

            </div>
          )}

          {activeTab === 'comparison' && (
            <div className="space-y-8 animate-fade-in text-left">
              <div className="max-w-3xl space-y-4">
                <h3 className="text-2xl font-black font-display text-brand-blue tracking-tight">
                  The Critical Difference: Local Families vs. Corporate Raiders
                </h3>
                <p className="text-slate-650 text-base leading-relaxed">
                  In North Texas, storms attract massive out-of-state "storm chasers" who knock on doors with aggressive pitches. Discover why sticking with we makes a substantial long-term difference:
                </p>
              </div>

              {/* Grid Comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                
                {/* Jireh Column */}
                <div className="bg-amber-50/50 border-2 border-brand-amber/40 rounded-2.5xl p-6 sm:p-8 space-y-5">
                  <h4 className="font-black text-brand-blue text-lg font-display flex items-center gap-2">
                    <span className="p-1.5 bg-brand-amber text-brand-blue rounded h-7 w-7 flex items-center justify-center font-bold">✓</span>
                    Jireh Roofing (Mansfield local)
                  </h4>

                  <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2.5">
                      <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Permanent office in Mansfield:</strong> Always accessible at 419 Hollyberry Dr for inspections or service issues.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Bible-Integrity pricing:</strong> Straightforward cost structures with zero unneeded modifications.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Full labor warranties:</strong> Licensed local business backed by Texas insurance standards.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Supports Texas:</strong> A portion of every invoice directly assists community charities in DFW.</span>
                    </li>
                  </ul>
                </div>

                {/* Corporate column */}
                <div className="bg-slate-50 border border-slate-200 rounded-2.5xl p-6 sm:p-8 space-y-5">
                  <h4 className="font-black text-slate-750 text-lg font-display flex items-center gap-2">
                    <span className="p-1.5 bg-slate-300 text-slate-700 rounded h-7 w-7 flex items-center justify-center font-bold">✗</span>
                    Impersonal Corporate "Storm Chasers"
                  </h4>

                  <ul className="space-y-3.5 text-xs sm:text-sm text-slate-600">
                    <li className="flex items-start gap-2.5">
                      <span className="text-rose-500 font-extrabold text-sm shrink-0">✕</span>
                      <span><strong>Out-of-State PO Boxes:</strong> Vanish from Mansfield as soon as storms pass, leaving zero leak support.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-rose-500 font-extrabold text-sm shrink-0">✕</span>
                      <span><strong>Door-Knocking Pressure:</strong> Aggressive salesmen trying to sign binding repair contracts in minutes.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-rose-500 font-extrabold text-sm shrink-0">✕</span>
                      <span><strong>Unregulated Labor Crews:</strong> Highly variable craftsmanship with poor quality plastic shingles.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-rose-500 font-extrabold text-sm shrink-0">✕</span>
                      <span><strong>Profits leave Texas:</strong> Every cent goes directly to out-of-state corporate investors.</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}

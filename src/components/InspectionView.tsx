import React, { useState, useEffect } from 'react';
import { 
  Calendar, ShieldCheck, Phone, CheckCircle, MapPin, 
  Trash2, Sparkles, Clock, AlertTriangle, ChevronRight, ChevronLeft, ArrowRight
} from 'lucide-react';
import { InspectionRequest } from '../types';

interface InspectionViewProps {
  onSubmitInspection: (data: Omit<InspectionRequest, 'id' | 'date' | 'status'>) => void;
  registeredRequests: InspectionRequest[];
  onClearRequests: () => void;
}

export default function InspectionView({ onSubmitInspection, registeredRequests, onClearRequests }: InspectionViewProps) {
  // Wizard steps: 1 = Damage choice, 2 = Info, 3 = Confirmation
  const [step, setStep] = useState(1);
  
  // Form fields
  const [damageType, setDamageType] = useState('Hail / Wind Damage');
  const [materialType, setMaterialType] = useState('Asphalt Shingles');
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [userMsg, setUserMsg] = useState('');
  const [schedulePriority, setSchedulePriority] = useState('Within 5 Days');

  const [wizardSuccess, setWizardSuccess] = useState(false);
  const [validationError, setValidationError] = useState('');

  const nextStep = () => {
    setValidationError('');
    if (step === 1) {
      if (!damageType || !materialType) {
        setValidationError('Please make appropriate selections before continuing.');
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!userName.trim()) {
        setValidationError('Your name is required.');
        return;
      }
      if (!userPhone.trim() || userPhone.length < 10) {
        setValidationError('A valid 10-digit phone number is required so our team can reach out for coordinates.');
        return;
      }
      if (!userAddress.trim()) {
        setValidationError('Please enter your property address in Dallas-Fort Worth for inspection.');
        return;
      }
      setStep(3);
    }
  };

  const prevStep = () => {
    setValidationError('');
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleWizardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');

    const fullMessage = `Type: ${damageType}. Material: ${materialType}. Sched: ${schedulePriority}. Notes: ${userMsg || 'None'}`;
    
    onSubmitInspection({
      name: userName,
      phone: userPhone,
      address: userAddress,
      message: fullMessage
    });

    setWizardSuccess(true);
    setStep(1);

    // Reset standard fields
    setUserName('');
    setUserPhone('');
    setUserAddress('');
    setUserMsg('');
    
    setTimeout(() => {
      setWizardSuccess(false);
    }, 10000);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Banner header title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-xs uppercase font-mono tracking-widest text-brand-gold font-extrabold bg-brand-blue text-white px-3 py-1 rounded inline-block">
            100% FREE ROOF DAMAGE ASSESSMENT
          </h2>
          <h1 className="text-4xl font-extrabold font-display text-brand-blue tracking-tight">
            Schedule a Trustworthy Inspection
          </h1>
          <p className="text-slate-650 text-sm sm:text-base">
            No pressure sales. Our local general contractors will evaluate your property, scan for structural shifts with drones, and supply an insurance-ready line-by-item cost layout.
          </p>
        </div>

        {/* Triple grid layout: Wizard form, credentials overview, and local results tracker */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Wizard form layout */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg relative">
            
            {/* Step progress indicator bar */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-5 mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-500 text-brand-blue rounded-xl font-bold font-mono text-sm leading-none flex items-center justify-center h-8 w-8">
                  {step}
                </div>
                <div className="text-left">
                  <h3 className="font-extrabold text-brand-blue font-display text-sm sm:text-base">
                    {step === 1 ? 'Describe Roof Conditions' : step === 2 ? 'Contact & Coordinates' : 'Submit & Priority schedule'}
                  </h3>
                  <p className="text-[10px] text-slate-400 font-mono">STEP {step} OF 3</p>
                </div>
              </div>

              {/* Progress visual bar */}
              <div className="w-1/3 bg-slate-100 h-2 rounded-full overflow-hidden hidden sm:block">
                <div 
                  className="bg-brand-gold h-full transition-all duration-300" 
                  style={{ width: `${(step / 3) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Success message banner */}
            {wizardSuccess && (
              <div className="bg-emerald-50 border-2 border-emerald-300 p-6 rounded-2xl mb-6 text-center space-y-3 animate-fade-in text-left">
                <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-base font-bold text-emerald-800">Your Inspection is Registered!</h4>
                <p className="text-xs sm:text-sm text-slate-705 leading-relaxed">
                  Thank you! We received your request. We have stored this submission on your local device for tracking below. A Jireh manager will call your phone shortly to review parameters and confirm the physical time slot.
                </p>
              </div>
            )}

            {validationError && (
              <div className="bg-rose-50 border-l-4 border-rose-500 text-rose-700 p-3.5 rounded text-xs font-bold mb-6 text-left">
                ⚠️ {validationError}
              </div>
            )}

            <form onSubmit={handleWizardSubmit} className="space-y-6 text-left">
              
              {/* STEP 1: Damage的选择 */}
              {step === 1 && (
                <div className="space-y-6 animate-fade-in">
                  
                  {/* Select damage category */}
                  <div className="space-y-3">
                    <label className="block text-xs font-black uppercase tracking-wider text-slate-500 font-mono">
                      What are we inspecting?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        { label: '🌩️ Severe Storm Damage', value: 'Hail / Wind Damage' },
                        { label: '💧 Solitary active leak', value: 'Active Roof Leak' },
                        { label: '🏠 Older roof wear', value: 'Age Wear / Multi-point assessment' },
                        { label: '🪵 Wood rot / Decking', value: 'Structural wood rot evaluation' },
                        { label: '🏢 Commercial flat roof', value: 'TPO Commercial check' },
                        { label: '🌧️ Gutter clog / Wear', value: 'Custom Gutter inspection' }
                      ].map((item) => (
                        <div
                          key={item.value}
                          onClick={() => setDamageType(item.value)}
                          className={`p-4 rounded-xl border text-center cursor-pointer transition-all ${
                            damageType === item.value
                              ? 'border-brand-blue bg-amber-50/45 text-brand-blue font-bold ring-2 ring-brand-blue/15'
                              : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs sm:text-sm'
                          }`}
                        >
                          <span className="text-xs block mb-1">{item.label.split(' ')[0]}</span>
                          <span className="text-xs font-bold font-display tracking-tight leading-snug">
                            {item.label.split(' ').slice(1).join(' ')}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Material type selection */}
                  <div className="space-y-3">
                    <label className="block text-xs font-black uppercase tracking-wider text-slate-500 font-mono">
                      Current Roofing Material Type
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {['Asphalt Shingles', 'Metal Standing Seam', 'Flat TPO / Low Slope', 'Unknown / Tiles'].map((m) => (
                        <div
                          key={m}
                          onClick={() => setMaterialType(m)}
                          className={`p-3 rounded-lg border text-center cursor-pointer transition-all font-mono text-xs ${
                            materialType === m
                              ? 'border-brand-gold bg-brand-blue text-white font-extrabold'
                              : 'border-slate-200 hover:bg-slate-50 text-slate-655'
                          }`}
                        >
                          {m}
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              )}

              {/* STEP 2: Address and contact details */}
              {step === 2 && (
                <div className="space-y-5 animate-fade-in">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    <div className="space-y-1.5">
                      <label htmlFor="w-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider font-mono">
                        Contact Name <span className="text-brand-amber">*</span>
                      </label>
                      <input
                        type="text"
                        id="w-name"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="e.g. Martha G."
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-slate-50 focus:bg-white text-sm focus:outline-none"
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="w-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider font-mono">
                        Phone Number <span className="text-brand-amber">*</span>
                      </label>
                      <input
                        type="tel"
                        id="w-phone"
                        value={userPhone}
                        onChange={(e) => setUserPhone(e.target.value)}
                        placeholder="e.g. 817-779-1658"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-slate-50 focus:bg-white text-sm focus:outline-none"
                        required
                      />
                    </div>

                    <div className="sm:col-span-2 space-y-1.5">
                      <label htmlFor="w-address" className="block text-xs font-bold text-slate-700 uppercase tracking-wider font-mono">
                        Full Property Street Address <span className="text-brand-amber">*</span>
                      </label>
                      <input
                        type="text"
                        id="w-address"
                        value={userAddress}
                        onChange={(e) => setUserAddress(e.target.value)}
                        placeholder="e.g. 419 Hollyberry Dr, Mansfield, TX 76063"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-slate-50 focus:bg-white text-sm focus:outline-none"
                        required
                      />
                    </div>

                  </div>

                </div>
              )}

              {/* STEP 3: Timeframes and messaging notes */}
              {step === 3 && (
                <div className="space-y-5 animate-fade-in">
                  
                  <div className="space-y-3">
                    <label className="block text-xs font-black uppercase tracking-wider text-slate-500 font-mono">
                      Preferred Schedule Timeframe Urgency
                    </label>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        { label: '🚨 Emergency Quick Tarping', sub: 'Active interior leak', val: 'Emergency Quick Tarp' },
                        { label: '📅 Nearest 2-5 Days', sub: 'Standard working hours', val: 'Within 5 Days' },
                        { label: '🏡 Flexible Scheduling', sub: 'Next 2-3 weeks', val: 'Flexible timeframe' }
                      ].map((p) => (
                        <div
                          key={p.val}
                          onClick={() => setSchedulePriority(p.val)}
                          className={`p-4 rounded-xl border cursor-pointer text-left transition-all ${
                            schedulePriority === p.val
                              ? 'border-brand-blue bg-amber-50/40 font-bold ring-2 ring-brand-blue/15'
                              : 'border-slate-200 bg-slate-50 text-slate-700 text-xs'
                          }`}
                        >
                          <span className="block font-bold text-sm tracking-tight text-brand-blue font-display">{p.label}</span>
                          <span className="block text-[10px] text-slate-450 mt-0.5">{p.sub}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="w-msg" className="block text-xs font-bold text-slate-700 uppercase tracking-wider font-mono">
                      Tell our appraisers any extra details <span className="text-slate-400">(Optional)</span>
                    </label>
                    <textarea
                      id="w-msg"
                      rows={3}
                      value={userMsg}
                      onChange={(e) => setUserMsg(e.target.value)}
                      placeholder="e.g. Broken shingles on east valley, dog in backyard, need adjuster assistance..."
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-slate-50 focus:bg-white text-sm focus:outline-none"
                    />
                  </div>

                  <div className="p-4 bg-amber-50 border border-brand-amber/30 rounded-xl flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-700 leading-relaxed">
                      By submitting, you agree to receive a quick verification call on <strong>{userPhone || "(provided)"}</strong> representing Jireh Roofing (Mansfield local). We respect your privacy completely, as mandated.
                    </p>
                  </div>

                </div>
              )}

              {/* Navigation Action Buttons within Wizard */}
              <div className="border-t border-slate-100 pt-6 flex justify-between items-center bg-white">
                <div>
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-5 py-3 border border-slate-250 text-slate-700 hover:bg-slate-50 font-semibold text-xs uppercase tracking-wider rounded-lg flex items-center gap-1.5 transition-all cursor-pointer min-h-[44px]"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                  )}
                </div>

                <div>
                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="px-6 py-3 bg-brand-blue hover:bg-brand-blue-light text-brand-amber font-bold text-xs uppercase tracking-wider rounded-lg flex items-center gap-1.5 transition-all cursor-pointer min-h-[44px]"
                    >
                      <span>Continue</span>
                      <ChevronRight className="w-4 h-4 text-brand-amber font-black" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="px-7 py-3.5 bg-gradient-to-r from-brand-amber to-brand-gold text-brand-blue shadow font-extrabold text-xs uppercase tracking-wider rounded-lg flex items-center gap-2 transition-all cursor-pointer min-h-[44px]"
                    >
                      <span>File Free Booking</span>
                      <ArrowRight className="w-4 h-4 text-brand-blue" />
                    </button>
                  )}
                </div>
              </div>

            </form>
          </div>

          {/* Right sidebar: Display Registered Requests tracker from localStorage */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Guarantee Box */}
            <div className="bg-brand-blue text-white rounded-2xl p-6 border-b-4 border-brand-amber shadow space-y-4 text-left">
              <h4 className="font-extrabold text-brand-amber text-sm uppercase tracking-wider font-mono">
                🛡️ JIREH SECURE STANDARD
              </h4>
              <ul className="space-y-3.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-amber shrink-0 mt-0.5" />
                  <span>Licensed Texan roofing appraisers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-amber shrink-0 mt-0.5" />
                  <span>Detailed line-item cost proposal</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-amber shrink-0 mt-0.5" />
                  <span>Assistance Filing Insurance Documentation</span>
                </li>
              </ul>
            </div>

            {/* Live Client Request Tracking Panel */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4 text-left">
              <div className="flex justify-between items-center border-b border-slate-105 pb-3">
                <h4 className="font-bold text-brand-blue font-display text-sm">
                  📋 Your Local Bookings ({registeredRequests.length})
                </h4>
                {registeredRequests.length > 0 && (
                  <button 
                    onClick={onClearRequests}
                    className="text-[10px] text-rose-500 hover:underline flex items-center gap-1 font-mono font-bold uppercase transition"
                    title="Clear requested logs from locally cached storage"
                  >
                    <Trash2 className="w-3 h-3" />
                    <span>Clear</span>
                  </button>
                )}
              </div>

              {registeredRequests.length === 0 ? (
                <div className="text-center py-8 space-y-2 text-slate-400">
                  <Clock className="w-8 h-8 mx-auto text-slate-300" />
                  <p className="text-xs italic">No book requests filed on this browser yet.</p>
                  <p className="text-[10px] text-slate-400">Your submitted parameters will show progress states right here when submitted!</p>
                </div>
              ) : (
                <div className="space-y-4 max-h-[380px] overflow-y-auto pr-1">
                  {registeredRequests.map((req) => (
                    <div key={req.id} className="p-4 bg-slate-55 border border-slate-205 rounded-xl space-y-2 relative shadow-inner text-xs">
                      
                      {/* Active simulation label status */}
                      <span className="absolute top-3 right-3 bg-amber-100 text-amber-800 text-[8px] font-bold font-mono uppercase tracking-wider px-2 py-0.5 rounded">
                        Appraiser Assigned
                      </span>

                      <div className="space-y-1">
                        <span className="block font-bold text-brand-blue tracking-tight">{req.name}</span>
                        <span className="block text-[10px] text-slate-400 font-mono">{req.date}</span>
                      </div>

                      <div className="space-y-1 pt-1.5 border-t border-slate-200 text-slate-655 text-[11px] leading-relaxed">
                        <p className="flex items-center gap-1"><MapPin className="w-3 h-3 text-brand-amber shrink-0" /> {req.address}</p>
                        <p className="flex items-center gap-1"><Phone className="w-3 h-3 text-brand-amber shrink-0" /> {req.phone}</p>
                      </div>

                      <div className="bg-amber-50 border border-brand-amber/20 p-2.5 rounded-lg text-[10px] text-slate-705 text-center mt-1 leading-relaxed">
                        📞 Appraiser contact scheduled for: <strong className="text-brand-blue font-semibold">Today/Tomorrow</strong>. We call from <strong className="text-brand-blue font-semibold">817-779-1658</strong>.
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

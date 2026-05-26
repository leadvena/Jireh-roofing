import React, { useState } from 'react';
import { 
  Phone, MapPin, Mail, Clock, MessageSquare, 
  Send, ShieldCheck, Heart, User, CheckCircle, ChevronRight
} from 'lucide-react';

export default function ContactView() {
  const [activeQuestion, setActiveQuestion] = useState<string | null>(null);

  // Custom simulator messages
  const faqTextSimulations = [
    {
      q: 'Do you help homeowners with storm insurance adjusters?',
      a: 'Yes, absolutely! North Texas hail claims can be confusing. We walk the roof with the adjuster in-person, supply drone photos, and provide precise line-by-line Xactimate damage reports to make sure your claim is fully approved fairly.'
    },
    {
      q: 'Are your initial inspections truly 100% free?',
      a: 'They are completely free! We do not charge anything for visual inspections, structural checks, or drone scans. "God Will Provide — And So Will We." There is zero obligation to sign a project contract.'
    },
    {
      q: 'Are you located right here in Mansfield, Texas?',
      a: 'Yes! Our primary coordinates are 419 Hollyberry Dr in Mansfield, TX. We are a family-owned, community-rooted business, not an out-of-town marketing crew.'
    },
    {
      q: 'Do you offer home improvement financing options?',
      a: 'We sure do! We partner with top licensed lenders to offer competitive financing plans (including 0% interest promo periods) so you can replace severe leaks immediately before mold starts.'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header title banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-xs uppercase font-mono tracking-widest text-[#d4af37] font-extrabold bg-brand-blue text-white px-3 py-1 rounded inline-block">
            CONNECT WITH OUR MANSFIELD FAMILY
          </h2>
          <h1 className="text-4xl font-extrabold font-display text-brand-blue tracking-tight">
            How Can We Serve Your Family Today?
          </h1>
          <p className="text-slate-650 text-sm sm:text-base">
            Have questions about Texas roof codes, storm hail damage claims, or seamless gutter replacement? Connect directly with Jireh's expert roofers.
          </p>
        </div>

        {/* Contact info grid cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Phone */}
          <div className="bg-white border border-slate-200 rounded-2.5xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all text-center space-y-4">
            <div className="h-12 w-12 rounded-full bg-amber-100 text-brand-gold flex items-center justify-center mx-auto shadow-inner">
              <Phone className="w-5 h-5 text-brand-blue fill-current" />
            </div>
            <div className="space-y-1">
              <h3 className="font-extrabold text-brand-blue font-display tracking-tight text-base sm:text-lg">
                Call Jireh Rapid Office
              </h3>
              <p className="text-xs text-slate-400 font-mono uppercase">Immediate response times</p>
            </div>
            <a href="tel:817-779-1658" className="block text-xl font-black font-mono text-brand-blue hover:text-brand-gold transition-colors">
              817-779-1658
            </a>
            <p className="text-xs text-slate-500">Available Monday through Saturday for custom dispatching or claims advice.</p>
          </div>

          {/* Card 2: Location */}
          <div className="bg-white border border-slate-200 rounded-2.5xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all text-center space-y-4">
            <div className="h-12 w-12 rounded-full bg-amber-100 text-brand-gold flex items-center justify-center mx-auto shadow-inner">
              <MapPin className="w-5 h-5 text-brand-blue" />
            </div>
            <div className="space-y-1">
              <h3 className="font-extrabold text-[#0b2545] font-display tracking-tight text-base sm:text-lg">
                Headquarters Office
              </h3>
              <p className="text-xs text-slate-400 font-mono uppercase">Stationed at Hollyberry Dr</p>
            </div>
            <a 
              href="https://maps.google.com/?q=419+Hollyberry+Dr,+Mansfield,+TX+76063" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block text-sm font-bold text-slate-650 hover:text-brand-amber transition-colors leading-tight"
            >
              419 Hollyberry Dr<br />Mansfield, TX 76063
            </a>
            <p className="text-xs text-slate-500">Located in Mansfield, Texas. Free driving inspections across DFW region counties.</p>
          </div>

          {/* Card 3: Hours */}
          <div className="bg-white border border-slate-200 rounded-2.5xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all text-center space-y-4">
            <div className="h-12 w-12 rounded-full bg-amber-100 text-brand-gold flex items-center justify-center mx-auto shadow-inner">
              <Clock className="w-5 h-5 text-brand-blue" />
            </div>
            <div className="space-y-1">
              <h3 className="font-extrabold text-brand-blue font-display tracking-tight text-base sm:text-lg">
                Hours of Operation
              </h3>
              <p className="text-xs text-slate-400 font-mono uppercase">Open 6 Days a Week</p>
            </div>
            <p className="text-sm font-bold text-slate-750 font-mono">
              Mon - Sat: 7:00 AM - 7:00 PM
            </p>
            <p className="text-xs text-amber-600 font-medium italic">
              Sunday: Closed for Worship & Family reflection
            </p>
          </div>

        </div>

        {/* Double grid: FAQ list (Text response simulator) and Map iframe */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Text Message Simulator on the left */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-md">
            <div className="border-b border-slate-100 pb-4 mb-6 text-left">
              <span className="text-[9px] font-black uppercase text-brand-amber bg-brand-blue px-2.5 py-0.5 rounded font-mono inline-block mb-1">
                JIREH CHAT BOT ASSISTANT
              </span>
              <h3 className="font-extrabold text-brand-blue font-display text-lg">
                Instant SMS-style Q&A Portal
              </h3>
              <p className="text-xs text-slate-405 leading-relaxed">
                Click any standard client question below to simulate an instant text thread with our family office. Get immediate answers about code regulations, insurance, and rates!
              </p>
            </div>

            <div className="space-y-5">
              {/* Question triggers list */}
              <div className="space-y-2">
                {faqTextSimulations.map((faq, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveQuestion(faq.q)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all text-xs sm:text-sm font-bold leading-normal min-h-[44px] flex items-center justify-between gap-1.5 ${
                      activeQuestion === faq.q
                        ? 'bg-brand-blue text-white border-brand-blue'
                        : 'bg-slate-50 text-slate-755 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <span>💬 {faq.q}</span>
                    <ChevronRight className={`w-4 h-4 shrink-0 ${activeQuestion === faq.q ? 'rotate-90 text-brand-amber' : ''}`} />
                  </button>
                ))}
              </div>

              {/* Chat Thread visualization window */}
              {activeQuestion ? (
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4 text-left animate-fade-in font-sans">
                  
                  {/* User query bubble */}
                  <div className="flex items-start gap-3 max-w-[85%]">
                    <div className="p-1.5 bg-brand-amber text-brand-blue rounded-full text-xs font-bold font-mono">
                      US
                    </div>
                    <div className="bg-amber-100/60 p-3 rounded-2xl rounded-tl-none font-semibold text-slate-800 text-xs sm:text-sm shadow-sm">
                      {activeQuestion}
                    </div>
                  </div>

                  {/* Jireh Reply Bubble */}
                  <div className="flex items-start gap-3 max-w-[85%] ml-auto flex-row-reverse">
                    <div className="p-1.5 bg-brand-blue text-brand-amber rounded-full text-xs font-bold font-mono shrink-0">
                      JR
                    </div>
                    <div className="bg-brand-blue/95 text-slate-100 p-3.5 rounded-2xl rounded-tr-none text-xs sm:text-sm leading-relaxed shadow-sm space-y-2">
                      <p>{faqTextSimulations.find((f) => f.q === activeQuestion)?.a}</p>
                      
                      <div className="border-t border-white/10 pt-2 flex items-center justify-between text-[10px] text-slate-400">
                        <span className="flex items-center gap-1">
                          <CheckCircle className="w-3 h-3 text-brand-amber" /> Direct Jireh Support Verified
                        </span>
                        <a href="tel:817-779-1658" className="text-brand-amber hover:underline hover:text-brand-gold">
                          Call Office now
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
              ) : (
                <div className="border-2 border-dashed border-slate-200 rounded-2.5xl py-12 text-center text-slate-400 space-y-2">
                  <MessageSquare className="w-10 h-10 mx-auto text-slate-300 stroke-[1.5]" />
                  <p className="text-xs italic">Select a question bubble above to open simulated SMS thread.</p>
                </div>
              )}

            </div>
          </div>

          {/* Location Area coverage specifications + map on the right */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-md text-left">
              <h4 className="font-extrabold text-brand-blue font-display text-base uppercase tracking-tight mb-3">
                📍 DFW Coverage radius specs
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                We safely cover Tarrant County, Dallas County, Johnson County, Ellis County, and surrounding segments of the DFW area.
              </p>

              <div className="space-y-2.5 text-xs text-slate-705">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span>🚀 Response Time Urgency (ASAP Storms)</span>
                  <strong className="font-mono text-brand-blue">Under 2 hours</strong>
                </div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span>🏢 Commercial low-slope assessments</span>
                  <strong className="font-mono text-brand-blue">Within 24 hours</strong>
                </div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span>🏡 Standard residential assessments</span>
                  <strong className="font-mono text-brand-blue">100% Free</strong>
                </div>
              </div>
            </div>

            {/* Static high stability map embed container */}
            <div className="rounded-3xl overflow-hidden shadow-md h-72 border border-slate-200 bg-white p-3">
              <iframe
                id="contact-maps-embed-jireh"
                title="Google Maps Location - Jireh Roofing in Mansfield"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x864e62243d5f57cd%3A0xe5a1b32f913d6a0!2s419%20Hollyberry%20Dr%2C%20Mansfield%2C%20TX%2076063!5e0!3m2!1sen!2sus!4v1716768000000!5m2!1sen!2sus"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              ></iframe>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

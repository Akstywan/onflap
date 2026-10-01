import React from 'react';
import { 
  ArrowRight, 
  Play, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  Layers,
  Globe2,
  TrendingUp,
  Award
} from 'lucide-react';

export default function Hero({ onOpenDemo, onOpenVideo }) {
  return (
    <section className="relative pt-10 pb-20 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100/70 border-b border-slate-200/80">
      
      {/* Background subtle crimson glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-red-600/5 blur-[120px] -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Authentic Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#b71919] text-xs font-semibold shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#b71919]" />
              <span>Innovative, Flexible & Smart Software Solutions</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Delivering The Ultimate Experience <br />
              <span className="bg-gradient-to-r from-[#b71919] via-red-600 to-rose-600 bg-clip-text text-transparent">
                To The End User.
              </span>
            </h1>

            {/* Authentic Onflap Narrative */}
            <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                <strong className="text-slate-900">Our mission</strong> is to provide the market with innovative, flexible, and smart software solutions which match international standards for greater convenience, safety, and security. Established to empower the IT industry through powerful, cost-effective, and scalable solutions.
              </p>
              <p>
                <strong className="text-slate-900">We are</strong> the region's fastest-growing software development house, encompassing some of the best programmers in the industry.
              </p>
              <p className="text-xs sm:text-sm text-slate-500">
                <strong className="text-slate-800">We serve</strong> a vast global clientele with ERP and operational systems across Travel & Tourism, Retail, Healthcare, Hospitality, Agro Industries, Couriers, and BPOs.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenDemo}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#b71919] hover:bg-[#991313] text-white font-semibold text-sm shadow-lg shadow-red-900/20 hover:shadow-red-900/30 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-3 group"
              >
                <span>Explore More Solutions</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={onOpenVideo}
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-300 shadow-sm transition-all flex items-center justify-center gap-2.5 group hover:border-slate-400"
              >
                <div className="w-7 h-7 rounded-full bg-red-100 text-[#b71919] flex items-center justify-center group-hover:bg-[#b71919] group-hover:text-white transition-colors">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>How We Work (Video)</span>
              </button>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-200 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#b71919] shrink-0" />
                <span className="font-medium">GST & VAT Compatible</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#b71919] shrink-0" />
                <span className="font-medium">Offline & Online Sync</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#b71919] shrink-0" />
                <span className="font-medium">24/7 Dedicated Support</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Authentic Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative card */}
              <div className="rounded-3xl bg-white border border-slate-200/90 shadow-xl p-6 sm:p-8 space-y-6">
                
                {/* Header of showcase */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <img 
                      src="/onflap-logo.png" 
                      alt="ONFLAP" 
                      className="h-7 w-auto object-contain" 
                    />
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-red-50 text-[#b71919] font-bold border border-red-200">
                    ENTERPRISE SUITE
                  </span>
                </div>

                {/* Flagship quick features cards */}
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between hover:border-red-200 transition-colors">
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">FIRST</span>
                      <span className="text-[11px] text-slate-500">Financial Reporting & Tax Compliance</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#b71919] bg-white px-2 py-1 rounded border border-slate-200">
                      Auto P&L
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between hover:border-red-200 transition-colors">
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">R-POS</span>
                      <span className="text-[11px] text-slate-500">Retail & Restaurant Checkout Terminal</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#b71919] bg-white px-2 py-1 rounded border border-slate-200">
                      Offline-First
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between hover:border-red-200 transition-colors">
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">CORE</span>
                      <span className="text-[11px] text-slate-500">Customer Relations & Automated Workflow</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#b71919] bg-white px-2 py-1 rounded border border-slate-200">
                      SLA Ready
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between hover:border-red-200 transition-colors">
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">FLEX</span>
                      <span className="text-[11px] text-slate-500">Premier Enterprise Travel Accounting</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#b71919] bg-white px-2 py-1 rounded border border-slate-200">
                      GDS Unified
                    </span>
                  </div>
                </div>

                {/* Bottom trust badge */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Globe2 className="w-3.5 h-3.5 text-[#b71919]" />
                    Deployed across 12+ Countries
                  </span>
                  <a href="#products" className="text-[#b71919] font-bold hover:underline">
                    View Catalog →
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Global Key Stats Bar */}
        <div className="mt-16 pt-10 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-1">
            <p className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-[#b71919]">
              1,500+
            </p>
            <p className="text-sm font-bold text-slate-800">Enterprise Deployments</p>
            <p className="text-xs text-slate-500">Across ERP, Retail, Travel & Healthcare</p>
          </div>

          <div className="space-y-1">
            <p className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-[#b71919]">
              50+
            </p>
            <p className="text-sm font-bold text-slate-800">Custom Modules Built</p>
            <p className="text-xs text-slate-500">Tailored to exact industry operations</p>
          </div>

          <div className="space-y-1">
            <p className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-[#b71919]">
              3
            </p>
            <p className="text-sm font-bold text-slate-800">Global Tech Hubs</p>
            <p className="text-xs text-slate-500">Canada • India • Kuwait</p>
          </div>

          <div className="space-y-1">
            <p className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-[#b71919]">
              24 / 7
            </p>
            <p className="text-sm font-bold text-slate-800">Mission-Critical Support</p>
            <p className="text-xs text-slate-500">Zero-downtime SLA assistance</p>
          </div>
        </div>

      </div>
    </section>
  );
}

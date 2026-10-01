import React, { useState } from 'react';
import { 
  ArrowRight, 
  Play, 
  CheckCircle2, 
  TrendingUp, 
  DollarSign, 
  Receipt, 
  Users, 
  Sparkles,
  ChevronRight
} from 'lucide-react';

export default function Hero({ onOpenDemo, onOpenVideo }) {
  const [activeTab, setActiveTab] = useState('first');

  return (
    <section className="relative pt-12 pb-20 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100/70 border-b border-slate-200/80">
      
      {/* Background ambient decorative glows in Onflap Crimson */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-red-600/5 blur-[120px] -z-10 pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-80 h-80 bg-rose-500/5 blur-[100px] -z-10 pointer-events-none rounded-full" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f00a_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f00a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#b71919] text-xs font-semibold shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#b71919] animate-pulse" />
              <span>Enterprise IT Solutions & Scalable Software</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#b71919]"></span>
              <span className="text-slate-600">ASP.NET Core Powered</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Powerful software. <br />
              <span className="bg-gradient-to-r from-[#b71919] via-red-600 to-rose-600 bg-clip-text text-transparent">
                Unified operations.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              ONFLAP empowers global businesses with intelligent ERP platforms, audit-ready Financial Reporting (<span className="text-[#b71919] font-bold">FIRST</span>), high-speed POS (<span className="text-[#b71919] font-bold">R-POS</span>), and customer lifecycle suites (<span className="text-[#b71919] font-bold">CORE</span>). Engineered for reliability across Canada, India, and the Middle East.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenDemo}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#b71919] hover:bg-[#991313] text-white font-semibold shadow-xl shadow-red-900/20 hover:shadow-red-900/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
              >
                <span>Request Enterprise Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={onOpenVideo}
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold border border-slate-300 shadow-sm transition-all flex items-center justify-center gap-2 group hover:border-slate-400"
              >
                <div className="w-7 h-7 rounded-full bg-red-100 text-[#b71919] flex items-center justify-center group-hover:bg-[#b71919] group-hover:text-white transition-colors">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>How We Work (Video)</span>
              </button>
            </div>

            {/* Trust bullet markers */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200 text-xs text-slate-600">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-[#b71919] shrink-0" />
                <span>GST & VAT Ready</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-[#b71919] shrink-0" />
                <span>Offline / Online Sync</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-[#b71919] shrink-0" />
                <span>24/7 Dedicated Support</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive Product Simulator */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Decorative background glow in Onflap Crimson */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-red-600/15 to-rose-600/15 blur-xl opacity-70"></div>
              
              {/* Simulator Card Container */}
              <div className="relative rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden text-slate-100">
                
                {/* Simulator Window Header */}
                <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800 bg-slate-950">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="ml-2 font-mono text-xs text-slate-400">onflap-enterprise-os v4.8</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-400"></span>
                    <span className="text-[11px] font-mono text-emerald-400">LIVE ENGINE</span>
                  </div>
                </div>

                {/* Simulator Tabs with Onflap Red styling */}
                <div className="flex border-b border-slate-800 bg-slate-950/60 p-1.5 gap-1.5">
                  <button
                    onClick={() => setActiveTab('first')}
                    className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-2 ${
                      activeTab === 'first'
                        ? 'bg-[#b71919] text-white shadow'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    <DollarSign className="w-3.5 h-3.5" />
                    <span>FIRST (Finance)</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('pos')}
                    className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-2 ${
                      activeTab === 'pos'
                        ? 'bg-[#b71919] text-white shadow'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    <Receipt className="w-3.5 h-3.5" />
                    <span>R-POS (Resto & Retail)</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('core')}
                    className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-2 ${
                      activeTab === 'core'
                        ? 'bg-[#b71919] text-white shadow'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    <Users className="w-3.5 h-3.5" />
                    <span>CORE (CRM)</span>
                  </button>
                </div>

                {/* Tab Content Display */}
                <div className="p-6">
                  {activeTab === 'first' && (
                    <div className="space-y-4 animate-in fade-in duration-200">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                        <div>
                          <p className="text-xs text-slate-400">Consolidated Operating Balance</p>
                          <p className="text-2xl font-bold font-mono text-white">$482,910.45</p>
                        </div>
                        <div className="text-right">
                          <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/50">
                            <TrendingUp className="w-3 h-3" /> +18.4% YoY
                          </span>
                          <p className="text-[10px] text-slate-500 mt-1">GST/VAT Reconciled</p>
                        </div>
                      </div>

                      {/* Financial Metrics Mini Grid */}
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                          <span className="text-slate-400 block text-[11px]">Auto Income Tracking</span>
                          <span className="font-mono text-sm font-semibold text-rose-300">$189,420.00</span>
                          <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                            <div className="bg-[#b71919] h-full w-[78%]"></div>
                          </div>
                        </div>
                        <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                          <span className="text-slate-400 block text-[11px]">Real-time Expense Cap</span>
                          <span className="font-mono text-sm font-semibold text-slate-200">$64,150.20</span>
                          <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                            <div className="bg-slate-600 h-full w-[34%]"></div>
                          </div>
                        </div>
                      </div>

                      {/* Live Ledger Transactions */}
                      <div className="space-y-2">
                        <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 flex justify-between">
                          <span>Live Multi-Currency Journal</span>
                          <span className="text-rose-400">Auto-Cross Post</span>
                        </div>
                        <div className="space-y-1.5 font-mono text-[11px]">
                          <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950/80 border border-slate-800/70 text-slate-300">
                            <span className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                              Tripathon Travel (B2B Fiesta Settlement)
                            </span>
                            <span className="text-emerald-400 font-semibold">+$28,450.00</span>
                          </div>
                          <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950/80 border border-slate-800/70 text-slate-300">
                            <span className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                              Resto POS Daily Batch Synchronized
                            </span>
                            <span className="text-red-400 font-semibold">+$12,890.30</span>
                          </div>
                        </div>
                      </div>

                      <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
                        <span className="text-[11px]">No cross-posting delays. Instant audit trail.</span>
                        <a href="#first" className="text-red-400 hover:text-red-300 font-medium flex items-center gap-1">
                          FIRST Details <ChevronRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  )}

                  {activeTab === 'pos' && (
                    <div className="space-y-4 animate-in fade-in duration-200">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                        <div>
                          <p className="text-xs text-slate-400">Terminal #04 — Table 12 / Dine-In</p>
                          <p className="text-2xl font-bold font-mono text-white">$142.80</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 text-xs font-mono font-semibold border border-emerald-500/30">
                            OFFLINE-READY
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-center text-xs">
                        <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                          <span className="text-slate-400 text-[10px] block">Active Tables</span>
                          <span className="font-mono text-base font-bold text-amber-300">28 / 30</span>
                        </div>
                        <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                          <span className="text-slate-400 text-[10px] block">Avg Ticket Time</span>
                          <span className="font-mono text-base font-bold text-rose-300">6.4 min</span>
                        </div>
                        <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                          <span className="text-slate-400 text-[10px] block">Daily Orders</span>
                          <span className="font-mono text-base font-bold text-slate-200">412</span>
                        </div>
                      </div>

                      {/* Mock POS item list */}
                      <div className="space-y-1.5 font-mono text-[11px] bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                        <div className="flex justify-between text-slate-300">
                          <span>2x Truffle Risotto (Table 12)</span>
                          <span>$56.00</span>
                        </div>
                        <div className="flex justify-between text-slate-300">
                          <span>1x Ribeye Steak Medium-Rare</span>
                          <span>$48.00</span>
                        </div>
                        <div className="border-t border-slate-800 pt-1.5 flex justify-between font-bold text-red-400">
                          <span>GST 5% + Service Included</span>
                          <span>$142.80</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-xs pt-1">
                        <span className="text-emerald-400 font-mono text-[11px] flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Kitchen Display Unit Synced
                        </span>
                        <a href="#r-pos-resto" className="text-red-400 hover:text-red-300 font-medium flex items-center gap-1">
                          Explore R-POS <ChevronRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  )}

                  {activeTab === 'core' && (
                    <div className="space-y-4 animate-in fade-in duration-200">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                        <div>
                          <p className="text-xs text-slate-400">Client Resolution Velocity</p>
                          <p className="text-2xl font-bold font-mono text-white">99.4% SLA Pass</p>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-mono text-rose-300 bg-red-950/80 px-2 py-0.5 rounded border border-red-800/50">
                            CORE 360 CRM
                          </span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-[11px] text-slate-400">
                          <span>Active Enterprise Accounts</span>
                          <span className="text-white font-mono">1,540 Managed</span>
                        </div>
                        <div className="grid grid-cols-4 gap-1.5 h-2">
                          <div className="bg-[#b71919] rounded-sm" title="Onboarding" />
                          <div className="bg-red-500 rounded-sm" title="Active SLA" />
                          <div className="bg-rose-400 rounded-sm" title="Expansion" />
                          <div className="bg-emerald-500 rounded-sm" title="Renewed" />
                        </div>
                      </div>

                      <div className="space-y-2 font-mono text-[11px]">
                        <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
                          <div>
                            <span className="text-red-400">#CR-492:</span> Multi-branch ERP Expansion
                            <p className="text-[10px] text-slate-500">Resettle Consultancy • Auto-escalated</p>
                          </div>
                          <span className="text-emerald-400 font-semibold">Resolved (14m)</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-xs pt-1">
                        <span className="text-slate-400 text-[11px]">Automate repetitive process to save time.</span>
                        <a href="#core" className="text-red-400 hover:text-red-300 font-medium flex items-center gap-1">
                          CORE Details <ChevronRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Card Footer */}
                <div className="bg-slate-950 px-5 py-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-4">
                    <span>Region: Global (CAN / IND / KWT)</span>
                    <span className="text-slate-700">|</span>
                    <span className="text-emerald-400">Uptime: 99.98%</span>
                  </div>
                  <button 
                    onClick={onOpenDemo}
                    className="text-red-400 hover:text-white transition-colors"
                  >
                    Launch Interactive Sandbox →
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Global Key Stats Bar in Onflap Red & Light Theme */}
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

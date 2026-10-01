import React, { useState } from 'react';
import { 
  ArrowRight, 
  Play, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  DollarSign, 
  Receipt, 
  Users, 
  Sparkles,
  BarChart,
  Layers,
  Clock,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

export default function Hero({ onOpenDemo, onOpenVideo }) {
  const [activeTab, setActiveTab] = useState('first');

  return (
    <section className="relative pt-12 pb-24 overflow-hidden">
      {/* Background ambient decorative glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-cyan-600/20 via-blue-600/15 to-purple-600/10 blur-[130px] -z-10 pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-500/10 blur-[100px] -z-10 pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-700/10 blur-[100px] -z-10 pointer-events-none rounded-full" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0f_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 text-xs font-medium backdrop-blur-md shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>Next-Gen Enterprise Suite & Cloud Architecture</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              <span className="text-slate-400">ASP.NET Core Powered</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Powerful software. <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
                Unified operations.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              ONFLAP empowers global businesses with intelligent ERP platforms, audit-ready Financial Reporting (<span className="text-cyan-400 font-semibold">FIRST</span>), high-speed POS (<span className="text-cyan-400 font-semibold">R-POS</span>), and customer lifecycle suites (<span className="text-cyan-400 font-semibold">CORE</span>). Engineered for reliability across Canada, India, and the Middle East.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenDemo}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
              >
                <span>Request Enterprise Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={onOpenVideo}
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-medium border border-slate-700/80 backdrop-blur-md transition-all flex items-center justify-center gap-2 group hover:border-slate-600"
              >
                <div className="w-7 h-7 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>How We Work (Video)</span>
              </button>
            </div>

            {/* Trust bullet markers */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800/80 text-xs text-slate-400">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>GST & VAT Ready</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Offline / Online Sync</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>24/7 Dedicated Support</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive Product Simulator */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Decorative background glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/30 to-blue-600/30 blur-xl opacity-60"></div>
              
              {/* Simulator Card Container */}
              <div className="relative rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-2xl backdrop-blur-2xl overflow-hidden">
                
                {/* Simulator Window Header */}
                <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800 bg-slate-950/70">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 font-mono text-xs text-slate-400">onflap-enterprise-os v4.8</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-400"></span>
                    <span className="text-[11px] font-mono text-emerald-400">LIVE ENGINE</span>
                  </div>
                </div>

                {/* Simulator Tabs */}
                <div className="flex border-b border-slate-800 bg-slate-950/40 p-1.5 gap-1.5">
                  <button
                    onClick={() => setActiveTab('first')}
                    className={`flex-1 py-2 px-3 rounded-lg text-xs font-medium transition-all flex items-center justify-center gap-2 ${
                      activeTab === 'first'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                    }`}
                  >
                    <DollarSign className="w-3.5 h-3.5" />
                    <span>FIRST (Finance)</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('pos')}
                    className={`flex-1 py-2 px-3 rounded-lg text-xs font-medium transition-all flex items-center justify-center gap-2 ${
                      activeTab === 'pos'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                    }`}
                  >
                    <Receipt className="w-3.5 h-3.5" />
                    <span>R-POS (Resto & Retail)</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('core')}
                    className={`flex-1 py-2 px-3 rounded-lg text-xs font-medium transition-all flex items-center justify-center gap-2 ${
                      activeTab === 'core'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                    }`}
                  >
                    <Users className="w-3.5 h-3.5" />
                    <span>CORE (CRM)</span>
                  </button>
                </div>

                {/* Tab Content Display */}
                <div className="p-6">
                  {activeTab === 'first' && (
                    <div className="space-y-4 animate-in fade-in duration-300">
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
                        <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                          <span className="text-slate-400 block text-[11px]">Auto Income Tracking</span>
                          <span className="font-mono text-sm font-semibold text-cyan-300">$189,420.00</span>
                          <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                            <div className="bg-cyan-400 h-full w-[78%]"></div>
                          </div>
                        </div>
                        <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                          <span className="text-slate-400 block text-[11px]">Real-time Expense Cap</span>
                          <span className="font-mono text-sm font-semibold text-blue-300">$64,150.20</span>
                          <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                            <div className="bg-blue-500 h-full w-[34%]"></div>
                          </div>
                        </div>
                      </div>

                      {/* Live Ledger Transactions */}
                      <div className="space-y-2">
                        <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 flex justify-between">
                          <span>Live Multi-Currency Journal</span>
                          <span>Auto-Cross Post</span>
                        </div>
                        <div className="space-y-1.5 font-mono text-[11px]">
                          <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950/40 border border-slate-800/50 text-slate-300">
                            <span className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                              Tripathon Travel (B2B Fiesta Settlement)
                            </span>
                            <span className="text-emerald-400 font-semibold">+$28,450.00</span>
                          </div>
                          <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950/40 border border-slate-800/50 text-slate-300">
                            <span className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                              Resto POS Daily Batch Synchronized
                            </span>
                            <span className="text-cyan-400 font-semibold">+$12,890.30</span>
                          </div>
                          <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950/40 border border-slate-800/50 text-slate-300">
                            <span className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                              Automated Tax & VAT Escrow Alloc.
                            </span>
                            <span className="text-slate-400 font-semibold">-$3,180.00</span>
                          </div>
                        </div>
                      </div>

                      <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
                        <span className="text-[11px]">No cross-posting delays. Instant audit trail.</span>
                        <a href="#first" className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1">
                          FIRST Details <ChevronRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  )}

                  {activeTab === 'pos' && (
                    <div className="space-y-4 animate-in fade-in duration-300">
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
                        <div className="bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/80">
                          <span className="text-slate-400 text-[10px] block">Active Tables</span>
                          <span className="font-mono text-base font-bold text-amber-300">28 / 30</span>
                        </div>
                        <div className="bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/80">
                          <span className="text-slate-400 text-[10px] block">Avg Ticket Time</span>
                          <span className="font-mono text-base font-bold text-cyan-300">6.4 min</span>
                        </div>
                        <div className="bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/80">
                          <span className="text-slate-400 text-[10px] block">Daily Orders</span>
                          <span className="font-mono text-base font-bold text-indigo-300">412</span>
                        </div>
                      </div>

                      {/* Mock POS item list */}
                      <div className="space-y-1.5 font-mono text-[11px] bg-slate-950/50 p-2.5 rounded-xl border border-slate-800/60">
                        <div className="flex justify-between text-slate-300">
                          <span>2x Truffle Risotto (Table 12)</span>
                          <span>$56.00</span>
                        </div>
                        <div className="flex justify-between text-slate-300">
                          <span>1x Ribeye Steak Medium-Rare</span>
                          <span>$48.00</span>
                        </div>
                        <div className="flex justify-between text-slate-300">
                          <span>2x Fresh Mint Mocktail</span>
                          <span>$22.00</span>
                        </div>
                        <div className="border-t border-slate-800 pt-1.5 flex justify-between font-bold text-cyan-400">
                          <span>GST 5% + Service Included</span>
                          <span>$142.80</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-xs pt-1">
                        <span className="text-emerald-400 font-mono text-[11px] flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Kitchen Display Unit Synced
                        </span>
                        <a href="#r-pos-resto" className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1">
                          Explore R-POS <ChevronRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  )}

                  {activeTab === 'core' && (
                    <div className="space-y-4 animate-in fade-in duration-300">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                        <div>
                          <p className="text-xs text-slate-400">Client Resolution Velocity</p>
                          <p className="text-2xl font-bold font-mono text-white">99.4% SLA Pass</p>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-mono text-indigo-400 bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-800/50">
                            CORE 360 CRM
                          </span>
                        </div>
                      </div>

                      {/* Pipeline Stage Indicators */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-[11px] text-slate-400">
                          <span>Active Enterprise Accounts</span>
                          <span className="text-white font-mono">1,540 Managed</span>
                        </div>
                        <div className="grid grid-cols-4 gap-1.5 h-2">
                          <div className="bg-cyan-500 rounded-sm" title="Onboarding" />
                          <div className="bg-blue-500 rounded-sm" title="Active SLA" />
                          <div className="bg-indigo-500 rounded-sm" title="Expansion" />
                          <div className="bg-emerald-500 rounded-sm" title="Renewed" />
                        </div>
                        <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                          <span>Onboard (18%)</span>
                          <span>Active (52%)</span>
                          <span>Expand (22%)</span>
                          <span>Renew (8%)</span>
                        </div>
                      </div>

                      {/* Ticket items */}
                      <div className="space-y-2 font-mono text-[11px]">
                        <div className="p-2 rounded-lg bg-slate-950/50 border border-slate-800 flex items-center justify-between">
                          <div>
                            <span className="text-cyan-400">#CR-492:</span> Multi-branch ERP Expansion
                            <p className="text-[10px] text-slate-500">Resettle Consultancy • Auto-escalated</p>
                          </div>
                          <span className="text-emerald-400 font-semibold">Resolved (14m)</span>
                        </div>
                        <div className="p-2 rounded-lg bg-slate-950/50 border border-slate-800 flex items-center justify-between">
                          <div>
                            <span className="text-cyan-400">#CR-493:</span> GDS Sabre Feed Optimization
                            <p className="text-[10px] text-slate-500">Tripathon Travel • Assigned Lead</p>
                          </div>
                          <span className="text-amber-400 font-semibold">In Progress</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-xs pt-1">
                        <span className="text-slate-400 text-[11px]">Automate repetitive process to save time.</span>
                        <a href="#core" className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1">
                          CORE Details <ChevronRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Card Footer with System Metrics */}
                <div className="bg-slate-950 px-5 py-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-4">
                    <span>Region: Global (CAN / IND / KWT)</span>
                    <span className="text-slate-600">|</span>
                    <span className="text-emerald-400">Uptime: 99.98%</span>
                  </div>
                  <button 
                    onClick={onOpenDemo}
                    className="text-cyan-400 hover:text-white transition-colors"
                  >
                    Launch Interactive Sandbox →
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Global Key Stats Bar */}
        <div className="mt-20 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-1">
            <p className="text-3xl sm:text-4xl font-black font-mono tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              1,500+
            </p>
            <p className="text-sm font-semibold text-white">Enterprise Deployments</p>
            <p className="text-xs text-slate-400">Across ERP, Retail, Travel & Healthcare</p>
          </div>

          <div className="space-y-1">
            <p className="text-3xl sm:text-4xl font-black font-mono tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              50+
            </p>
            <p className="text-sm font-semibold text-white">Custom Modules Built</p>
            <p className="text-xs text-slate-400">Tailored to exact industry operations</p>
          </div>

          <div className="space-y-1">
            <p className="text-3xl sm:text-4xl font-black font-mono tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              3
            </p>
            <p className="text-sm font-semibold text-white">Global Tech Hubs</p>
            <p className="text-xs text-slate-400">Canada • India • Kuwait</p>
          </div>

          <div className="space-y-1">
            <p className="text-3xl sm:text-4xl font-black font-mono tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              24 / 7
            </p>
            <p className="text-sm font-semibold text-white">Mission-Critical Support</p>
            <p className="text-xs text-slate-400">Zero-downtime SLA assistance</p>
          </div>
        </div>

      </div>
    </section>
  );
}

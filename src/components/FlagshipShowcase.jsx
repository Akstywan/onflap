import React, { useState } from 'react';
import { 
  BarChart3, 
  UtensilsCrossed, 
  Users, 
  Compass, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  TrendingUp,
  FileSpreadsheet,
  Globe2,
  Lock
} from 'lucide-react';

export default function FlagshipShowcase({ onSelectProduct }) {
  const [activeFlagship, setActiveFlagship] = useState('first');

  const flagships = [
    {
      id: "first",
      code: "FIRST",
      name: "Financial Reporting System",
      icon: BarChart3,
      tagline: "Automated Corporate Accounting & Consolidated Ledgers",
      description: "With all financial data consolidated in a single unified ledger, accountants no longer spend hours cross-posting journal entries. FIRST delivers instant profit/loss clarity, multi-currency reporting, and automated tax compliance.",
      features: [
        "Automated Income & Real-Time Expense Auditing",
        "Know Exactly Where Your Business Stands Every Second",
        "Instant Profit & Margin Diagnostics with Drill-Down P&L",
        "Full GST & VAT Compliance (GCC, India, North America)",
        "Audit-Ready Automated Financial Reporting Engine",
        "Multi-Branch Entity Consolidation & Bank Feeds"
      ],
      badge: "Flagship Accounting",
      stats: [
        { label: "Bookkeeping Efficiency", value: "+85%" },
        { label: "Tax Filing Accuracy", value: "99.99%" },
        { label: "Ledger Close Time", value: "2 Days" }
      ],
      previewGraphic: "accounting"
    },
    {
      id: "r-pos",
      code: "R-POS",
      name: "Retail & Restaurant Point Of Sale",
      icon: UtensilsCrossed,
      tagline: "Lightning-Fast Checkout Engineered for Resto & Retail Chains",
      description: "Everything at your fingertips. An ultra-responsive POS solution engineered to withstand heavy lunch rushes and massive retail shopping queues with seamless offline and online synchronization.",
      features: [
        "Dual Restaurant (KDS/Floor Plan) and Retail Barcode Modes",
        "Works Flawlessly Offline and Syncs Instantly When Reconnected",
        "Extremely Customizable Combo Menus, Pricing Tiers & Discounts",
        "Highly Reliable Fault-Tolerant Local Storage Architecture",
        "Direct Contactless QR, Card Machine & Digital Wallet Ready",
        "Automated Recipe & Warehouse Stock Depletion"
      ],
      badge: "Flagship Terminal",
      stats: [
        { label: "Scan & Checkout Speed", value: "< 1.2s" },
        { label: "Offline Queue Capacity", value: "Unlimited" },
        { label: "Terminal Uptime", value: "99.98%" }
      ],
      previewGraphic: "pos"
    },
    {
      id: "core",
      code: "CORE",
      name: "Client Oriented Relations Enterprise",
      icon: Users,
      tagline: "Customer-Driven Automation & 360° Account Management",
      description: "CORE manages your client information and customer concerns easily and securely. Automates repetitive processes to save your operational team countless hours while keeping service levels top-tier.",
      features: [
        "Automate Repetitive Communication & Ticket Follow-Ups",
        "Comprehensive 360° Account Timeline & Contract Milestones",
        "Customer-Driven Service Level Agreement (SLA) Tracking",
        "Adaptive & Flexible Pipeline Stages Customized to Your Industry",
        "Scalable, High-Security Encryption & Role Permissions",
        "Seamless Multi-Channel Helpdesk (Email, WhatsApp, Phone)"
      ],
      badge: "Flagship CRM",
      stats: [
        { label: "Ticket Resolution Rate", value: "3.2x Faster" },
        { label: "Client Retention Boost", value: "+28%" },
        { label: "Manual Data Entry Cut", value: "70%" }
      ],
      previewGraphic: "core"
    },
    {
      id: "fiesta",
      code: "FIESTA",
      name: "Enterprise Travel Accounting Suite",
      icon: Compass,
      tagline: "Flagship Premier Suite for Global Travel & Tourism",
      description: "Our premier flagship product widely acknowledged across the international travel industry for complete back, mid, and front-office travel operations, GDS reconciliations, and supplier settlements.",
      features: [
        "Automated GDS Fare, Ticket & BSP Reconciliation (Amadeus, Sabre)",
        "B2B Sub-Agent Credit Control, Markup Engine & Commission Portals",
        "Mid-Office Travel Itinerary & Voucher Invoicing Workflow",
        "Real-Time Foreign Exchange (FX) Tracking & Currency Hedging",
        "Supplier Payables & Hotel Room Consolidation Ledgers",
        "Endorsed by Leading Travel Consolidators Across Armenia & UAE"
      ],
      badge: "Industry Premier",
      stats: [
        { label: "Global Bookings / Year", value: "12M+" },
        { label: "Travel Agencies Deployed", value: "250+" },
        { label: "Mid-Office Time Saved", value: "65%" }
      ],
      previewGraphic: "fiesta"
    }
  ];

  const current = flagships.find(f => f.id === activeFlagship) || flagships[0];

  return (
    <section id="flagships" className="py-24 relative overflow-hidden bg-slate-950/60 border-t border-b border-slate-900">
      
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/10 blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-600/10 blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-mono font-medium">
            <Zap className="w-3.5 h-3.5" /> OUR FLAGSHIP PRODUCTS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Industry-Defining Software. <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Engineered for Mission-Critical Performance.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Built from the ground up to solve complex accounting, point of sale, client retention, and international travel operations.
          </p>
        </div>

        {/* Flagship Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {flagships.map((f) => {
            const Icon = f.icon;
            const isSelected = f.id === activeFlagship;
            return (
              <button
                key={f.id}
                onClick={() => setActiveFlagship(f.id)}
                className={`flex items-center gap-3 px-5 py-3.5 rounded-xl font-medium text-sm transition-all duration-300 ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 scale-[1.02]'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-850 border border-slate-800'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-cyan-400'}`} />
                <span className="font-bold tracking-wide">{f.code}</span>
                <span className="text-xs opacity-75 hidden sm:inline">• {f.name.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Flagship Interactive Detail Panel */}
        <div className="relative rounded-3xl bg-slate-900/90 border border-slate-800/80 p-8 lg:p-12 shadow-2xl backdrop-blur-xl">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Details & Feature Checklist */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-3 flex-wrap">
                <span className="px-3 py-1 rounded-md bg-cyan-950 text-cyan-300 border border-cyan-800/60 font-mono text-xs font-bold uppercase tracking-wider">
                  {current.badge}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  Full On-Premise & Cloud Deployable
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {current.code} — {current.name}
                </h3>
                <p className="text-cyan-400 text-sm font-medium mt-1">
                  {current.tagline}
                </p>
              </div>

              <p className="text-slate-300 text-base leading-relaxed">
                {current.description}
              </p>

              {/* Feature Checklist */}
              <div className="space-y-3 pt-2">
                <p className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Core Enterprise Capabilities:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {current.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats Highlights */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800">
                {current.stats.map((stat, i) => (
                  <div key={i} className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80">
                    <p className="text-xl sm:text-2xl font-black font-mono text-cyan-400">
                      {stat.value}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => onSelectProduct(current.id)}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/30 transition-all flex items-center gap-2 group"
                >
                  <span>Request Custom Demo for {current.code}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="#contact"
                  className="px-5 py-3 rounded-xl bg-slate-950 hover:bg-slate-850 text-slate-300 text-sm font-medium border border-slate-800 flex items-center gap-2"
                >
                  <Lock className="w-4 h-4 text-cyan-400" />
                  <span>Download Architecture Whitepaper</span>
                </a>
              </div>

            </div>

            {/* Right Column: Visual Mockup / Interactive UI preview card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6 shadow-xl relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                    <span className="font-mono text-cyan-400 font-semibold">{current.code} WORKSPACE</span>
                  </div>
                  <span className="font-mono text-slate-500 text-[10px]">ISO 27001 SECURED</span>
                </div>

                <div className="py-6 space-y-4">
                  {current.id === 'first' && (
                    <div className="space-y-4">
                      <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 space-y-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-slate-400">Quarterly Net Margin</span>
                          <span className="text-emerald-400 font-mono font-bold">+24.8%</span>
                        </div>
                        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 w-[74%]" />
                        </div>
                        <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                          <span>Q1 Target: $1.2M</span>
                          <span>Actual: $1.49M</span>
                        </div>
                      </div>

                      <div className="p-3 bg-cyan-950/30 rounded-xl border border-cyan-800/40 text-xs space-y-1">
                        <div className="flex items-center justify-between font-mono text-cyan-300 font-semibold">
                          <span>Automated GST/VAT Engine</span>
                          <span>STATUS: FILED</span>
                        </div>
                        <p className="text-[11px] text-slate-400">
                          Cross-currency reconciliation synchronized with Canadian CRA, Indian GSTIN & Kuwait KRA regulations.
                        </p>
                      </div>
                    </div>
                  )}

                  {current.id === 'r-pos' && (
                    <div className="space-y-3 font-mono text-xs">
                      <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex justify-between items-center">
                        <span className="text-slate-400">Local Cache:</span>
                        <span className="text-emerald-400 font-bold">100% OPERATIONAL OFFLINE</span>
                      </div>
                      <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-1.5">
                        <div className="flex justify-between text-slate-300">
                          <span>KDS Ticket Routing:</span>
                          <span className="text-cyan-400">Station A & B (Instant)</span>
                        </div>
                        <div className="flex justify-between text-slate-300">
                          <span>Inventory Auto-Depletion:</span>
                          <span className="text-cyan-400">Recipe Linked</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {current.id === 'core' && (
                    <div className="space-y-3 text-xs">
                      <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 font-mono space-y-1">
                        <div className="flex justify-between">
                          <span className="text-slate-400">Open Tickets:</span>
                          <span className="text-white font-bold">24 Active</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Mean Time to Resolve:</span>
                          <span className="text-emerald-400 font-bold">18 Minutes</span>
                        </div>
                      </div>
                      <div className="p-3 bg-indigo-950/40 rounded-xl border border-indigo-800/40 text-slate-300 text-[11px]">
                        CORE automates reminder triggers, email tracking, and client portal access with 24x7 SLA compliance.
                      </div>
                    </div>
                  )}

                  {current.id === 'fiesta' && (
                    <div className="space-y-3 text-xs">
                      <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 font-mono space-y-1">
                        <div className="flex justify-between">
                          <span className="text-slate-400">GDS Feeds Synced:</span>
                          <span className="text-cyan-400 font-bold">Amadeus • Sabre • Travelport</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Sub-Agent Accounts:</span>
                          <span className="text-white font-bold">128 Agencies Managed</span>
                        </div>
                      </div>
                      <div className="p-3 bg-teal-950/40 rounded-xl border border-teal-800/40 text-slate-300 text-[11px]">
                        Recognized across global travel agencies for automating complex middle-office reconciliations and BSP processing.
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>Engine: ONFLAP CORE 4.0</span>
                  <span className="text-cyan-400">Live Telemetry</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

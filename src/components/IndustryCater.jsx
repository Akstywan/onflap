import React, { useState } from 'react';
import { industries } from '../data/products';
import { 
  Building2, 
  Plane, 
  Utensils, 
  Factory, 
  Stethoscope, 
  Heart, 
  Store, 
  Dumbbell, 
  Briefcase,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const industryIcons = {
  all: Building2,
  travel: Plane,
  restaurant: Utensils,
  manufacturing: Factory,
  healthcare: Stethoscope,
  petcare: Heart,
  retail: Store,
  sports: Dumbbell,
  sme: Briefcase
};

const industryDetails = {
  all: {
    title: "End-to-End Enterprise Architecture for Every Industry",
    sub: "Cross-sector flexibility powered by ASP.NET Core microservices.",
    stats: "1,500+ Cross-Industry Implementations",
    workflows: [
      "Custom workflow pipeline automation",
      "Multi-entity consolidated ledgers (FIRST)",
      "Role-based security & regulatory compliance",
      "Custom API integrations with legacy infrastructure"
    ],
    highlight: "Whether you operate in retail chains, airline ticketing, or medical clinics, ONFLAP provides battle-tested ERP building blocks."
  },
  travel: {
    title: "Travel & Tourism Technology Infrastructure",
    sub: "Pioneered by FIESTA: The premier travel accounting and mid-office suite.",
    stats: "12M+ Annual Bookings Automated",
    workflows: [
      "Real-time GDS ticket reconciliation (Sabre, Amadeus, Travelport)",
      "Sub-agent credit limits and instant commission margin calculators",
      "Multi-currency foreign exchange hedging and ledger tracking",
      "Automated supplier payment vouchers & corporate travel invoicing"
    ],
    highlight: "Eliminate manual booking audits. Trusted by Armenian, Canadian, and Gulf travel agencies."
  },
  restaurant: {
    title: "Hospitality & Restaurant Point of Sale Systems",
    sub: "Engineered with R-POS RESTO for fast-paced dining and kitchen coordination.",
    stats: "350+ Restaurants & Food Chains",
    workflows: [
      "Interactive table layout & real-time floor occupancy tracker",
      "Direct Kitchen Display System (KDS) order routing",
      "Recipe-level inventory depletion & ingredient re-order triggers",
      "Contactless QR code menus, bill splitting & digital wallet receipts"
    ],
    highlight: "Lightning-fast orders even during peak dinner rush with offline local-first sync."
  },
  manufacturing: {
    title: "Industrial & Manufacturing Management",
    sub: "Unified shop floor routing, Bill of Materials (BOM), and inventory.",
    stats: "90+ Manufacturing Plants",
    workflows: [
      "Multi-stage production line routing & job card tracking",
      "Dynamic Bill of Materials (BOM) cost estimation",
      "Raw material batch/serial inventory with FIIMS",
      "Preventative machine maintenance scheduling & downtime logs"
    ],
    highlight: "Minimize waste, prevent equipment failures, and track every gram of raw material."
  },
  healthcare: {
    title: "Healthcare, Clinics & Hospital Automation",
    sub: "Powered by FORCE: Clinical efficiency and encrypted patient workflows.",
    stats: "140+ Medical Facilities",
    workflows: [
      "Electronic Health Records (EHR) & patient consultation histories",
      "Doctor duty rosters and appointment queue management",
      "Digital prescription issuance and in-house pharmacy dispensing",
      "Medical insurance claim generation and statutory compliance"
    ],
    highlight: "Reduce patient check-in wait times by 50% while maintaining HIPAA-aligned privacy."
  },
  petcare: {
    title: "Veterinary Clinics & Pet Care Services",
    sub: "Clinical appointments, pet boarding, and specialized retail POS.",
    stats: "65+ Veterinary & Grooming Centers",
    workflows: [
      "Pet patient medical history, breed records & vaccination alerts",
      "Boarding cage availability & grooming calendar management",
      "Integrated veterinary pharmacy and food retail checkout",
      "Automated SMS reminders for booster shots and routine checkups"
    ],
    highlight: "Keep pet parents delighted with digital health tracking and appointment reminders."
  },
  retail: {
    title: "Modern Retail & Multi-Chain Supermarkets",
    sub: "Driven by R-POS RETAIL: High-speed barcode scanning & stock rebalancing.",
    stats: "480+ Retail Stores & Supermarkets",
    workflows: [
      "High-speed barcode scanner & digital scale scale-counter sync",
      "Cross-store inventory rebalancing and inter-branch transfers",
      "Customer loyalty tiers, gift cards, and automated promotional discounts",
      "Offline cashier mode with zero slowdowns during peak footfall"
    ],
    highlight: "Process transactions in under 1.2 seconds with 99.99% operational uptime."
  },
  sports: {
    title: "Sports Academies & Athletic Training Centers",
    sub: "Automated member subscriptions, coach rosters, and facility booking.",
    stats: "80+ Athletic & Fitness Facilities",
    workflows: [
      "Membership tier recurring billing and biometric turnstile integration",
      "Court, turf, and lane reservation schedules",
      "Trainer shift assignment and private coaching commission tracking",
      "Pro-shop retail inventory and sports equipment rentals"
    ],
    highlight: "Maximize court utilization and eliminate forgotten membership dues automatically."
  },
  sme: {
    title: "Small-to-Medium Enterprises & BPO Operations",
    sub: "Streamlined office management with ATOMS, HRMS, and FIRST.",
    stats: "600+ Global SMEs Powered",
    workflows: [
      "Centralized employee attendance, leave, and payroll processing",
      "Fixed asset lifecycle tracking and depreciation calculations",
      "Client contract SLA monitoring and automated ticketing",
      "Fast cash flow diagnostics and audit-proof accounting"
    ],
    highlight: "Get the power of a Fortune 500 ERP at a fraction of the cost, built for agile growing teams."
  }
};

export default function IndustryCater({ onSelectProduct }) {
  const [selectedIndustry, setSelectedIndustry] = useState('travel');

  const currentInfo = industryDetails[selectedIndustry] || industryDetails.all;
  const currentIndustryObj = industries.find(i => i.id === selectedIndustry) || industries[0];

  return (
    <section id="industries" className="py-24 relative bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#b71919] text-xs font-mono font-bold">
            <Building2 className="w-3.5 h-3.5" /> WE CATER TO
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Tailored Industry Solutions
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Every sector has unique compliance, inventory, and customer workflows. Discover how ONFLAP adapts specifically to your industry.
          </p>
        </div>

        {/* Industry Selector Grid / Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-2 mb-12">
          {industries.map(ind => {
            const Icon = industryIcons[ind.id] || Building2;
            const isSelected = ind.id === selectedIndustry;
            return (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustry(ind.id)}
                className={`p-3 rounded-xl flex flex-col items-center justify-center gap-2 text-center transition-all duration-200 border ${
                  isSelected
                    ? 'bg-[#b71919] border-[#b71919] text-white shadow-md shadow-red-900/15'
                    : 'bg-white border-slate-200 text-slate-700 hover:text-[#b71919] hover:bg-slate-100 shadow-sm'
                }`}
              >
                <div className={`p-2 rounded-lg ${isSelected ? 'bg-red-800 text-white' : 'bg-slate-100 text-slate-600'}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold tracking-tight">
                  {ind.name.split(' ')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Industry Feature Spotlight Panel */}
        <div className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-12 shadow-xl relative overflow-hidden">
          
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="px-3 py-1 rounded bg-red-50 text-[#b71919] border border-red-200 text-xs font-mono font-bold">
                  {currentInfo.stats}
                </span>
                {currentIndustryObj.featured && (
                  <span className="text-xs text-slate-600 font-medium">
                    Recommended Modules: <span className="text-[#b71919] font-bold">{currentIndustryObj.featured}</span>
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {currentInfo.title}
                </h3>
                <p className="text-[#b71919] text-sm font-semibold mt-1">
                  {currentInfo.sub}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700 italic">
                "{currentInfo.highlight}"
              </div>

              {/* Workflows */}
              <div className="space-y-3">
                <p className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
                  Key Tailored Workflows:
                </p>
                <div className="space-y-2">
                  {currentInfo.workflows.map((wf, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-[#b71919] shrink-0 mt-0.5" />
                      <span className="font-medium">{wf}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#b71919] hover:bg-[#991313] text-white font-semibold text-sm transition-all shadow-md shadow-red-900/15"
                >
                  <span>Request an Industry-Specific Blueprint</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right: Modern Diagram / Workflow Visualization */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 p-6 space-y-4 shadow-lg">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono">
                  <span className="text-red-400 font-semibold uppercase">Operational Flow</span>
                  <span className="text-slate-400">REAL-TIME</span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-400">1. Customer Ingestion</span>
                    <span className="text-emerald-400 font-semibold">Instant Web/POS</span>
                  </div>
                  <div className="flex justify-center -my-1 text-slate-600 text-xs">↓</div>
                  <div className="p-3 rounded-xl bg-red-950/60 border border-red-800/60 flex items-center justify-between">
                    <span className="text-rose-200">2. Real-Time Processing</span>
                    <span className="text-red-400 font-semibold">ASP.NET Core Engine</span>
                  </div>
                  <div className="flex justify-center -my-1 text-slate-600 text-xs">↓</div>
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-400">3. Ledger & Inventory Sync</span>
                    <span className="text-emerald-400 font-semibold">Zero Cross-Posting</span>
                  </div>
                  <div className="flex justify-center -my-1 text-slate-600 text-xs">↓</div>
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-400">4. Executive BI Dashboard</span>
                    <span className="text-white font-semibold">Audit Compliant</span>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-slate-400 text-center font-mono">
                  Guaranteed 99.98% Service Level Agreement
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

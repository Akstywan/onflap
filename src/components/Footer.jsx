import React from 'react';
import { 
  ArrowUp, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Globe2, 
  Sparkles 
} from 'lucide-react';

export default function Footer({ onOpenDemo }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 text-xs">
      
      {/* Top CTA Band */}
      <div className="border-b border-slate-900 bg-gradient-to-r from-blue-950/30 via-slate-950 to-cyan-950/30 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-extrabold text-white">
              Ready to Upgrade Your Enterprise Software Stack?
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              Join 1,500+ enterprises leveraging ONFLAP's unified ERP, accounting, and point of sale systems.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenDemo}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Schedule Architecture Review</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          
          {/* Brand Col */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-[1px]">
                <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center font-mono font-extrabold text-cyan-400 text-lg">
                  OF
                </div>
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight">ONFLAP</span>
                <span className="block text-[10px] text-slate-500 font-mono tracking-wider">TECHNOLOGIES</span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Established with the specific aim of empowering the IT industry through powerful, cost-effective, and scalable enterprise software solutions. Operating across Canada, India, and Kuwait.
            </p>

            <div className="flex items-center gap-2 font-mono text-[11px] text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>ISO 9001 & 27001 Aligned • GST/VAT Standardized</span>
            </div>
          </div>

          {/* Col: Products */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider font-mono">
              Flagship Products
            </h4>
            <ul className="space-y-2">
              <li><a href="#flagships" className="hover:text-cyan-400 transition-colors">FIRST (Financial Reporting)</a></li>
              <li><a href="#flagships" className="hover:text-cyan-400 transition-colors">R-POS Resto & Retail</a></li>
              <li><a href="#flagships" className="hover:text-cyan-400 transition-colors">CORE (CRM Operations)</a></li>
              <li><a href="#flagships" className="hover:text-cyan-400 transition-colors">FIESTA (Travel Accounting)</a></li>
              <li><a href="#products" className="hover:text-cyan-400 transition-colors">ATOMS (Office ERP)</a></li>
              <li><a href="#products" className="hover:text-cyan-400 transition-colors">FORCE (Hospital Care)</a></li>
              <li><a href="#products" className="hover:text-cyan-400 transition-colors">HRMS & Payroll</a></li>
            </ul>
          </div>

          {/* Col: Services */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider font-mono">
              Enterprise Services
            </h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">ASP.NET Core ERP Systems</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Bespoke Software Dev</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">iOS & Android Mobile Apps</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Networking & Cybersecurity</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Penetration Testing & Audits</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">POS & Server Hardware</a></li>
            </ul>
          </div>

          {/* Col: Global Hubs */}
          <div className="space-y-3 col-span-2 sm:col-span-1">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider font-mono">
              Regional Desks
            </h4>
            <ul className="space-y-2.5">
              <li>
                <strong className="text-slate-300 block">Canada:</strong>
                <span>Toronto, ON M1H 3E3</span>
              </li>
              <li>
                <strong className="text-slate-300 block">India:</strong>
                <span>Angamaly, Kochi, Kerala</span>
              </li>
              <li>
                <strong className="text-slate-300 block">Kuwait:</strong>
                <span>Fahaheel, Mekka Street</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & back to top */}
        <div className="mt-16 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-slate-500">
            © {new Date().getFullYear()} ONFLAP Technologies. All Rights Reserved. Engineered with international enterprise standards.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400 transition-colors group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}

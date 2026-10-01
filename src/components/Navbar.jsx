import React, { useState, useEffect } from 'react';
import { 
  Layers, 
  Menu, 
  X, 
  ChevronRight, 
  ArrowUpRight, 
  ShieldCheck, 
  Sparkles,
  PhoneCall,
  Terminal
} from 'lucide-react';

export default function Navbar({ onOpenDemo }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Products", href: "#products" },
    { name: "Flagships", href: "#flagships" },
    { name: "Services", href: "#services" },
    { name: "Industries", href: "#industries" },
    { name: "Clients", href: "#testimonials" },
    { name: "About & Team", href: "#about" },
    { name: "Global Offices", href: "#offices" }
  ];

  return (
    <>
      {/* Top micro-announcement banner */}
      <div className="bg-gradient-to-r from-blue-900/60 via-slate-900 to-cyan-950/60 border-b border-cyan-500/20 text-xs py-2 px-4 text-center text-slate-300 backdrop-blur-sm hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-400 font-mono">ONFLAP 2026 Core Release</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300">Empowering 1,500+ enterprises across Canada, India & GCC</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1 font-mono text-[11px] text-cyan-400">
              <ShieldCheck className="w-3.5 h-3.5" /> ISO & VAT Compliant
            </span>
            <a href="#contact" className="hover:text-white transition-colors flex items-center gap-1">
              Contact 24/7 Support <ChevronRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl shadow-cyan-950/20' 
          : 'bg-transparent border-b border-white/5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
                <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-mono text-xl tracking-tighter">
                    OF
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-2xl font-black tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                    ONFLAP
                  </span>
                  <span className="text-[10px] font-mono font-bold tracking-wider px-1.5 py-0.5 rounded bg-cyan-950/80 text-cyan-400 border border-cyan-800/50">
                    ERP
                  </span>
                </div>
                <span className="text-[10px] tracking-wider uppercase text-slate-400 font-medium">
                  Technologies
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-full transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#contact"
                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                Sign In
              </a>
              <button
                onClick={onOpenDemo}
                className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-semibold rounded-xl group bg-gradient-to-br from-cyan-500 to-blue-600 group-hover:from-cyan-500 group-hover:to-blue-600 hover:text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 active:scale-95"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-200 bg-slate-950 rounded-[10px] group-hover:bg-opacity-0 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400 group-hover:text-white" />
                  <span>Request Demo</span>
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={onOpenDemo}
                className="text-xs bg-cyan-600 hover:bg-cyan-500 text-white font-medium px-3 py-2 rounded-lg"
              >
                Demo
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-slate-800 bg-slate-950/95 backdrop-blur-2xl px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-base font-medium text-slate-200 hover:bg-slate-900 rounded-lg flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}
            </nav>
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemo();
                }}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-center shadow-lg shadow-cyan-500/30 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" /> Request Personalized Demo
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-850 text-slate-300 font-medium text-center border border-slate-800"
              >
                Contact Regional Offices
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  ShieldCheck, 
  Sparkles,
  PhoneCall
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
    { name: "Testimonials", href: "#testimonials" },
    { name: "About & Team", href: "#about" },
    { name: "Global Offices", href: "#offices" }
  ];

  return (
    <>
      {/* Top announcement banner */}
      <div className="bg-[#b71919] text-white text-xs py-2 px-4 shadow-sm hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span className="font-semibold text-white/95">ONFLAP Technologies</span>
            <span className="text-white/40">|</span>
            <span className="text-white/90">Empowering 1,500+ enterprises across Canada, India & GCC</span>
          </div>
          <div className="flex items-center gap-4 text-white/90">
            <span className="flex items-center gap-1 font-mono text-[11px] bg-red-800/60 px-2 py-0.5 rounded text-white">
              <ShieldCheck className="w-3.5 h-3.5" /> GST & VAT Ready
            </span>
            <a href="#contact" className="hover:text-white font-medium transition-colors flex items-center gap-1">
              Contact Support <ChevronRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-md shadow-slate-200/50' 
          : 'bg-white/90 backdrop-blur-md border-b border-slate-200/60'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Genuine Logo */}
            <a href="#" className="flex items-center gap-2.5 group">
              <img 
                src="/onflap-logo.png" 
                alt="ONFLAP Technologies" 
                className="h-10 sm:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3.5 py-1.5 text-sm font-medium text-slate-700 hover:text-[#b71919] hover:bg-white rounded-full transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action buttons (Sign In removed as requested!) */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={onOpenDemo}
                className="px-5 py-2.5 rounded-xl bg-[#b71919] hover:bg-[#991313] text-white font-semibold text-sm shadow-md shadow-red-900/20 hover:shadow-lg hover:shadow-red-900/30 transition-all duration-200 flex items-center gap-2 active:scale-95"
              >
                <Sparkles className="w-4 h-4 text-red-200" />
                <span>Request Demo</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={onOpenDemo}
                className="text-xs bg-[#b71919] hover:bg-[#991313] text-white font-semibold px-3 py-2 rounded-lg shadow-sm"
              >
                Demo
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-slate-200 bg-white px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col space-y-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-base font-medium text-slate-800 hover:bg-red-50 hover:text-[#b71919] rounded-xl flex items-center justify-between transition-colors"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </nav>
            <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemo();
                }}
                className="w-full py-3 px-4 rounded-xl bg-[#b71919] hover:bg-[#991313] text-white font-semibold text-center shadow-md flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" /> Request Personalized Demo
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-center border border-slate-200"
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

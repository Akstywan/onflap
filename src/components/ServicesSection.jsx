import React from 'react';
import { services } from '../data/services';
import { 
  Server, 
  Code2, 
  Smartphone, 
  ShieldCheck, 
  Globe, 
  HardDrive, 
  ArrowRight, 
  Check, 
  Wrench,
  Sparkles
} from 'lucide-react';

const iconMap = {
  Server,
  Code2,
  Smartphone,
  ShieldCheck,
  Globe,
  HardDrive
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/40 text-cyan-400 text-xs font-mono font-medium">
            <Wrench className="w-3.5 h-3.5" /> ENTERPRISE ENGINEERING & IT
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Comprehensive Digital & IT Services
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Beyond standard software licensing, ONFLAP provides total technology execution—from cloud architecture and mobile engineering to cybersecurity audits and physical server rollouts.
          </p>
        </div>

        {/* Services 6-Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc) => {
            const Icon = iconMap[svc.icon] || Server;
            return (
              <div
                key={svc.id}
                className="group rounded-2xl bg-slate-900/60 border border-slate-800/80 p-8 hover:bg-slate-900/90 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-950/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-full bg-cyan-950/90 text-cyan-300 border border-cyan-800/40">
                      {svc.badge}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-xs font-medium text-cyan-400 mt-1">
                      {svc.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {svc.description}
                  </p>

                  {/* Key Capabilities */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/60">
                    {svc.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-6 mt-6 border-t border-slate-800/60">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 group-hover:text-cyan-400 transition-colors"
                  >
                    <span>Consult with Systems Architect</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

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
  Wrench
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
    <section id="services" className="py-24 relative bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#b71919] text-xs font-mono font-bold">
            <Wrench className="w-3.5 h-3.5" /> ENTERPRISE ENGINEERING & IT
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Digital & IT Services
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
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
                className="group rounded-2xl bg-white border border-slate-200 p-8 hover:border-[#b71919] hover:shadow-xl hover:shadow-red-900/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-full bg-red-50 text-[#b71919] border border-red-200">
                      {svc.badge}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-[#b71919] group-hover:bg-[#b71919] group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#b71919] transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#b71919] mt-1">
                      {svc.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {svc.description}
                  </p>

                  {/* Key Capabilities */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    {svc.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-[#b71919] shrink-0 mt-0.5" />
                        <span className="font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-6 mt-6 border-t border-slate-100">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#b71919] hover:text-[#991313] transition-colors"
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

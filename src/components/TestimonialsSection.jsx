import React from 'react';
import { testimonials } from '../data/company';
import { 
  Quote, 
  Star, 
  CheckCircle2, 
  MapPin, 
  ShieldCheck,
  Building
} from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-28 relative bg-slate-50 border-b border-slate-200 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-red-600/5 blur-[130px] -z-10 pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#b71919] text-xs font-mono font-bold shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5" /> ENTERPRISE ENDORSEMENTS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Trusted by Businesses Worldwide
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Hear directly from Chief Financial Officers and Managing Directors running their operations on ONFLAP systems across Armenia, Kuwait, and the GCC.
          </p>
        </div>

        {/* 3-Column Prominent Testimonials Display */}
        <div className="grid md:grid-cols-3 gap-10 pt-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="rounded-3xl bg-white border border-slate-200 p-8 pt-0 flex flex-col justify-between hover:border-[#b71919] hover:shadow-2xl hover:shadow-red-900/10 transition-all duration-300 relative group"
            >
              <div>
                {/* PROMINENT PHOTO: Centered large avatar with raised frame */}
                <div className="flex justify-center -mt-12 mb-6">
                  <div className="relative">
                    <img
                      src={t.avatar}
                      alt={t.author}
                      className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover object-center border-4 border-white shadow-xl ring-4 ring-red-100 group-hover:ring-[#b71919]/30 transition-all duration-300"
                    />
                    <div className="absolute bottom-1 right-1 bg-white p-1 rounded-full shadow-md">
                      <CheckCircle2 className="w-5 h-5 text-[#b71919]" />
                    </div>
                  </div>
                </div>

                {/* Author Info & Badges */}
                <div className="text-center space-y-1.5 mb-6">
                  <h4 className="text-lg font-extrabold text-slate-900">
                    {t.author}
                  </h4>
                  <p className="text-xs font-bold text-[#b71919] tracking-wide">
                    {t.role}
                  </p>
                  <p className="text-xs text-slate-500 flex items-center justify-center gap-1 font-medium">
                    <Building className="w-3.5 h-3.5 text-slate-400" />
                    {t.company} • {t.location}
                  </p>

                  {/* Star Rating & Product Badge */}
                  <div className="pt-2 flex items-center justify-center gap-3">
                    <span className="font-mono text-[11px] font-bold px-2.5 py-0.5 rounded bg-red-50 text-[#b71919] border border-red-200">
                      {t.tag}
                    </span>
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quote Text */}
                <div className="relative pt-4 border-t border-slate-100">
                  <Quote className="w-6 h-6 text-[#b71919]/20 absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-1" />
                  <p className="text-slate-700 text-sm leading-relaxed italic text-center pt-2">
                    "{t.quote}"
                  </p>
                </div>
              </div>

              {/* Bottom Verification Note */}
              <div className="pt-6 mt-6 border-t border-slate-100 text-center">
                <span className="text-[11px] font-mono text-slate-400 font-medium">
                  Verified Client Partnership (Since 2018)
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Global Verification Strip */}
        <div className="mt-16 p-6 rounded-2xl bg-white border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-slate-800 font-bold">
              Verified Enterprise References Available Upon Request
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span>Average Client Relationship: <strong className="text-slate-900">6+ Years</strong></span>
            <span>Annual SLA Adherence: <strong className="text-[#b71919]">99.98%</strong></span>
          </div>
        </div>

      </div>
    </section>
  );
}

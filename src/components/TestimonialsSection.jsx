import React, { useState } from 'react';
import { testimonials } from '../data/company';
import { 
  Quote, 
  Star, 
  CheckCircle2, 
  MapPin, 
  ShieldCheck
} from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 relative bg-white border-b border-slate-200 overflow-hidden">
      
      {/* Decorative glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-red-600/5 blur-[130px] -z-10 pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#b71919] text-xs font-mono font-bold">
            <ShieldCheck className="w-3.5 h-3.5" /> ENTERPRISE ENDORSEMENTS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Trusted by Businesses Worldwide
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Hear directly from Chief Financial Officers and Managing Directors running their operations on ONFLAP systems across Armenia, Kuwait, and the GCC.
          </p>
        </div>

        {/* 3-Column Testimonials Display */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="rounded-2xl bg-white border border-slate-200 p-8 flex flex-col justify-between hover:border-[#b71919] hover:shadow-xl hover:shadow-red-900/5 transition-all duration-300 relative group"
            >
              {/* Product Tag */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-red-50 text-[#b71919] border border-red-200">
                  {t.tag}
                </span>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>

              {/* Quote Icon & Text */}
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-red-500/20 -mb-2" />
                <p className="text-slate-700 text-sm leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-red-200 shrink-0"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    {t.author}
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#b71919] shrink-0" />
                  </h4>
                  <p className="text-xs text-[#b71919] font-semibold">
                    {t.role}
                  </p>
                  <p className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    {t.company} • {t.location}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Global Verification Strip */}
        <div className="mt-16 p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-slate-700 font-semibold">
              Verified Enterprise References Available Upon Request
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span>Average Client Relationship: <strong className="text-slate-900">6+ Years</strong></span>
            <span>Annual SLA Adherence: <strong className="text-slate-900">99.98%</strong></span>
          </div>
        </div>

      </div>
    </section>
  );
}

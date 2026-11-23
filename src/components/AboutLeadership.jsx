import React from 'react';
import { leadership } from '../data/company';
import { 
  Target, 
  Eye, 
  Users2, 
  CheckCircle,
  Quote
} from 'lucide-react';

export default function AboutLeadership() {
  return (
    <section id="about" className="py-24 relative bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#b71919] text-xs font-mono font-bold shadow-sm">
            <Users2 className="w-3.5 h-3.5" /> LEADERSHIP & DNA
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            The Mindset Behind ONFLAP
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            "Some people dream of success, but other people get up every morning and make it happen. ONFLAP has a team of people who make dreams happen."
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-10 relative overflow-hidden group hover:border-[#b71919] transition-all shadow-md">
            <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-200 text-[#b71919] flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Our Mission</h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              To establish long-lasting client relationships and to be their No. 1 choice of business for all enterprise software needs, setting new industry standards in engineering quality, security, and unprecedented speed of delivery.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs font-mono text-[#b71919] font-bold">
              <CheckCircle className="w-4 h-4" /> Relentless Focus on Client Velocity
            </div>
          </div>

          <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-10 relative overflow-hidden group hover:border-[#b71919] transition-all shadow-md">
            <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-200 text-[#b71919] flex items-center justify-center mb-6">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Our Vision</h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              To empower clients to scale with supreme confidence, elegance, and ease. We build agile software solutions that match international quality standards for heightened operational convenience, rock-solid safety, and enterprise data security.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs font-mono text-[#b71919] font-bold">
              <CheckCircle className="w-4 h-4" /> Global Standards & Scalable Future
            </div>
          </div>
        </div>

        {/* Meet Our Founders with PROMINENT Real Photos */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Meet the Founders & Leadership
            </h3>
            <p className="text-slate-600 text-sm">
              Guiding 1,500+ enterprises worldwide with disciplined software engineering.
            </p>
            <div className="pt-1">
              <a
                href="/staff/"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#b71919] hover:text-[#991616] bg-red-50 border border-red-200 px-3 py-1 rounded-full transition-colors"
              >
                <span>Browse Digital Staff Cards</span>
                <span>→</span>
              </a>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, i) => (
              <div
                key={i}
                className="rounded-3xl bg-white border border-slate-200 p-6 flex flex-col justify-between hover:border-[#b71919] hover:shadow-2xl hover:shadow-red-900/10 transition-all duration-300 group"
              >
                <div>
                  {/* PROMINENT High-Res Portrait */}
                  <div className="relative mb-6 overflow-hidden rounded-2xl aspect-[4/5] bg-slate-100 border border-slate-200 shadow-inner">
                    <img
                      src={leader.avatar}
                      alt={leader.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Name and Designation */}
                  <div className="space-y-1 text-center mb-4">
                    <h4 className="text-lg font-black text-slate-900">
                      {leader.name}
                    </h4>
                    <p className="text-xs font-bold text-[#b71919] uppercase tracking-wide">
                      {leader.role}
                    </p>
                  </div>

                  {/* Quote */}
                  <div className="relative pt-3 border-t border-slate-100">
                    <p className="text-xs text-slate-600 leading-relaxed italic text-center">
                      "{leader.quote}"
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-500">Executive Director</span>
                  <a
                    href={leader.cardUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#b71919] font-bold hover:underline"
                    title={`View ${leader.name}'s Digital Business Card`}
                  >
                    Digital Card ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

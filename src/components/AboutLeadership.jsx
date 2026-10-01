import React from 'react';
import { leadership } from '../data/company';
import { 
  Target, 
  Eye, 
  Users2, 
  CheckCircle
} from 'lucide-react';

export default function AboutLeadership() {
  return (
    <section id="about" className="py-24 relative bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#b71919] text-xs font-mono font-bold">
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
          <div className="rounded-2xl bg-white border border-slate-200 p-8 relative overflow-hidden group hover:border-[#b71919] transition-all shadow-md">
            <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-200 text-[#b71919] flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Our Mission</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              To establish long-lasting client relationships and to be their No. 1 choice of business for all enterprise software needs, setting new industry standards in engineering quality, security, and unprecedented speed of delivery.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs font-mono text-[#b71919] font-bold">
              <CheckCircle className="w-4 h-4" /> Relentless Focus on Client Velocity
            </div>
          </div>

          <div className="rounded-2xl bg-white border border-slate-200 p-8 relative overflow-hidden group hover:border-[#b71919] transition-all shadow-md">
            <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-200 text-[#b71919] flex items-center justify-center mb-6">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Our Vision</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              To empower clients to scale with supreme confidence, elegance, and ease. We build agile software solutions that match international quality standards for heightened operational convenience, rock-solid safety, and enterprise data security.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs font-mono text-[#b71919] font-bold">
              <CheckCircle className="w-4 h-4" /> Global Standards & Scalable Future
            </div>
          </div>
        </div>

        {/* Meet Our Founders */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Meet the Founders & Executive Leadership
            </h3>
            <p className="text-slate-600 text-sm mt-1">
              Guiding 1,500+ enterprises with disciplined software engineering.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((leader, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between hover:border-[#b71919] hover:shadow-xl hover:shadow-red-900/5 transition-all duration-300 group"
              >
                <div>
                  <div className="relative mb-5 overflow-hidden rounded-xl aspect-square bg-slate-100">
                    <img
                      src={leader.avatar}
                      alt={leader.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <h4 className="text-base font-bold">
                        {leader.name}
                      </h4>
                      <p className="text-xs font-semibold text-rose-300">
                        {leader.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    "{leader.quote}"
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>ONFLAP Executive</span>
                  <span className="text-[#b71919] font-bold">Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

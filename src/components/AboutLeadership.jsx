import React from 'react';
import { leadership } from '../data/company';
import { 
  Target, 
  Eye, 
  Users2, 
  Quote, 
  Award, 
  CheckCircle, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function AboutLeadership() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/40 text-cyan-400 text-xs font-mono font-medium">
            <Users2 className="w-3.5 h-3.5" /> LEADERSHIP & DNA
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            The Mindset Behind ONFLAP
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            "Some people dream of success, but other people get up every morning and make it happen. ONFLAP has a team of people who make dreams happen."
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-8 relative overflow-hidden group hover:border-cyan-500/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Our Mission</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              To establish long-lasting client relationships and to be their No. 1 choice of business for all enterprise software needs, setting new industry standards in engineering quality, security, and unprecedented speed of delivery.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs font-mono text-cyan-400">
              <CheckCircle className="w-4 h-4" /> Relentless Focus on Client Velocity
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-8 relative overflow-hidden group hover:border-cyan-500/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-6">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Our Vision</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              To empower clients to scale with supreme confidence, elegance, and ease. We build agile software solutions that match international quality standards for heightened operational convenience, rock-solid safety, and enterprise data security.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs font-mono text-blue-400">
              <CheckCircle className="w-4 h-4" /> Global Standards & Scalable Future
            </div>
          </div>
        </div>

        {/* Meet Our Founders */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Meet the Founders & Executive Leadership
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              Guiding 1,500+ enterprises with disciplined software engineering.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((leader, i) => (
              <div
                key={i}
                className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 flex flex-col justify-between hover:border-cyan-500/40 hover:bg-slate-900 transition-all duration-300 group"
              >
                <div>
                  <div className="relative mb-5 overflow-hidden rounded-xl aspect-square bg-slate-950">
                    <img
                      src={leader.avatar}
                      alt={leader.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <h4 className="text-base font-bold text-white">
                        {leader.name}
                      </h4>
                      <p className="text-xs font-medium text-cyan-400">
                        {leader.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed italic">
                    "{leader.quote}"
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>ONFLAP Executive</span>
                  <span className="text-cyan-400">Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

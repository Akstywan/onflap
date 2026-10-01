import React, { useState, useEffect } from 'react';
import { offices } from '../data/company';
import { 
  Globe2, 
  MapPin, 
  Clock, 
  Mail, 
  Phone, 
  ExternalLink,
  Building,
  Navigation
} from 'lucide-react';

export default function GlobalHubs() {
  const [times, setTimes] = useState({});

  useEffect(() => {
    const updateTimes = () => {
      const newTimes = {};
      offices.forEach(office => {
        try {
          const formatter = new Intl.DateTimeFormat([], {
            timeZone: office.timezone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
          });
          newTimes[office.country] = formatter.format(new Date());
        } catch (e) {
          newTimes[office.country] = 'Active';
        }
      });
      setTimes(newTimes);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="offices" className="py-24 relative bg-slate-950/70 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/40 text-cyan-400 text-xs font-mono font-medium">
            <Globe2 className="w-3.5 h-3.5" /> GLOBAL PRESENCE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Reach Us Across 3 Continents
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Direct physical presence in Canada, India, and Kuwait ensuring round-the-clock timezone support and localized regional regulatory compliance.
          </p>
        </div>

        {/* 3 Global Office Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {offices.map((office) => (
            <div
              key={office.country}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 p-8 flex flex-col justify-between hover:border-cyan-500/40 hover:bg-slate-900 transition-all duration-300 relative group"
            >
              <div className="space-y-6">
                
                {/* Header: Flag/Country & Live Clock */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/50">
                      {office.badge}
                    </span>
                    <h3 className="text-2xl font-black text-white mt-2">
                      {office.country}
                    </h3>
                    <p className="text-xs text-cyan-400 font-medium">
                      {office.city}
                    </p>
                  </div>
                  
                  {/* Real-time Clock */}
                  <div className="text-right bg-slate-950/80 p-2.5 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-500 font-mono block">LOCAL TIME</span>
                    <span className="font-mono text-xs font-bold text-emerald-400">
                      {times[office.country] || "12:00 PM"}
                    </span>
                  </div>
                </div>

                {/* Hub Description */}
                <div className="text-xs text-slate-400 font-medium">
                  {office.hub}
                </div>

                {/* Address Details */}
                <div className="space-y-3 pt-3 border-t border-slate-800/70 text-xs text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{office.address}</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                    <a href={`mailto:${office.email}`} className="hover:text-cyan-300 transition-colors">
                      {office.email}
                    </a>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="font-mono">{office.phone}</span>
                  </div>
                </div>

              </div>

              {/* Map CTA */}
              <div className="pt-6 mt-6 border-t border-slate-800/80">
                <a
                  href={office.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-950 hover:bg-slate-850 text-cyan-400 hover:text-cyan-300 text-xs font-semibold border border-slate-800/80 flex items-center justify-center gap-2 transition-all group-hover:border-cyan-500/30"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

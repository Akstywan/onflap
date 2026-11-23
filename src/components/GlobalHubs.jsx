import React, { useState, useEffect } from 'react';
import { offices } from '../data/company';
import { 
  Globe2, 
  MapPin, 
  Mail, 
  Phone, 
  ExternalLink,
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
    <section id="offices" className="py-24 relative bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#b71919] text-xs font-mono font-bold">
            <Globe2 className="w-3.5 h-3.5" /> GLOBAL PRESENCE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Reach Us Across 3 Continents
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Direct physical presence in Canada, India, and Kuwait ensuring round-the-clock timezone support and localized regional regulatory compliance.
          </p>
        </div>

        {/* 3 Global Office Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {offices.map((office) => (
            <div
              key={office.country}
              className="rounded-2xl bg-white border border-slate-200 p-8 flex flex-col justify-between hover:border-[#b71919] hover:shadow-xl hover:shadow-red-900/5 transition-all duration-300 relative group"
            >
              <div className="space-y-6">
                
                {/* Header: Flag/Country & Live Clock */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-red-50 text-[#b71919] border border-red-200">
                      {office.badge}
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 mt-2">
                      {office.country}
                    </h3>
                    <p className="text-xs text-[#b71919] font-bold">
                      {office.city}
                    </p>
                  </div>
                  
                  {/* Real-time Clock */}
                  <div className="text-right bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                    <span className="text-[10px] text-slate-500 font-mono block">LOCAL TIME</span>
                    <span className="font-mono text-xs font-bold text-slate-800">
                      {times[office.country] || "12:00 PM"}
                    </span>
                  </div>
                </div>

                {/* Hub Description */}
                <div className="text-xs text-slate-500 font-medium">
                  {office.hub}
                </div>

                {/* Address Details */}
                <div className="space-y-3 pt-3 border-t border-slate-100 text-xs text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#b71919] shrink-0 mt-0.5" />
                    <span>{office.address}</span>
                  </div>

                  {office.email && (
                    <div className="flex items-center gap-2.5">
                      <Mail className="w-4 h-4 text-[#b71919] shrink-0" />
                      <a href={`mailto:${office.email}`} className="hover:text-[#b71919] font-medium transition-colors">
                        {office.email}
                      </a>
                    </div>
                  )}

                  {office.phone && (
                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-[#b71919] shrink-0" />
                      <span className="font-mono font-medium">{office.phone}</span>
                    </div>
                  )}
                </div>

              </div>

              {/* Map CTA */}
              <div className="pt-6 mt-6 border-t border-slate-100">
                <a
                  href={office.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-red-50 text-[#b71919] text-xs font-bold border border-slate-200 flex items-center justify-center gap-2 transition-all group-hover:border-red-300"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

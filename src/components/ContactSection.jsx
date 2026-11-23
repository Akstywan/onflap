import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  PhoneCall, 
  Mail, 
  ShieldCheck, 
  Clock, 
  MessageSquare, 
  Sparkles 
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    region: 'Canada',
    productInterest: 'FIRST (Financial Reporting)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-50 border-b border-slate-200">
      
      {/* Decorative background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-red-600/5 blur-[140px] -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#b71919] text-xs font-mono font-bold mb-4">
                <MessageSquare className="w-3.5 h-3.5" /> ENTERPRISE INQUIRIES
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                Let's Architect Your Next Solution.
              </h2>
              <p className="text-slate-600 text-base mt-4 leading-relaxed">
                Connect directly with our senior software engineers and solution consultants in Toronto, Kerala, or Kuwait.
              </p>
            </div>

            {/* Quick Guarantees */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-red-50 border border-red-200 text-[#b71919] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Rapid 2-Hour Response Time</h4>
                  <p className="text-xs text-slate-500">Our regional dispatch desks ensure swift turnaround during business hours.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-red-50 border border-red-200 text-[#b71919] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Full NDA & Privacy Shield</h4>
                  <p className="text-xs text-slate-500">Your architecture and business metrics remain completely confidential.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-red-50 border border-red-200 text-[#b71919] flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Tailored Prototype & Demo</h4>
                  <p className="text-xs text-slate-500">Receive a live walkthrough populated with mock data specific to your industry.</p>
                </div>
              </div>
            </div>

            {/* Direct Contact Links */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-sm">
              <div className="text-xs font-mono uppercase text-slate-500 font-bold">Direct Inquiries:</div>
              <div className="flex items-center gap-3 text-sm text-slate-800">
                <Mail className="w-4 h-4 text-[#b71919]" />
                <a href="mailto:info@onflap.com" className="hover:text-[#b71919] font-mono font-medium">
                  info@onflap.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-800">
                <PhoneCall className="w-4 h-4 text-[#b71919]" />
                <span className="font-mono font-medium">+91 484 290 8800</span>
              </div>
            </div>

          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-10 shadow-xl relative">
              
              {submitted ? (
                <div className="py-16 text-center space-y-4 animate-in fade-in duration-200">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Inquiry Received Successfully</h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    Thank you, <strong className="text-[#b71919]">{formData.name}</strong>. A dedicated solution architect from our <strong className="text-slate-900">{formData.region}</strong> office will contact you at <strong className="text-slate-900">{formData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        company: '',
                        region: 'Canada',
                        productInterest: 'FIRST (Financial Reporting)',
                        message: ''
                      });
                    }}
                    className="mt-6 px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <h3 className="text-xl font-bold text-slate-900">
                      Request Consultation & Custom Demo
                    </h3>
                    <span className="text-[11px] font-mono text-[#b71919] font-bold">FREE ASSESSMENT</span>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1.5 font-bold">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Mercer"
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#b71919]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1.5 font-bold">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@enterprise.com"
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#b71919]"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1.5 font-bold">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Acme Global Logistics"
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#b71919]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1.5 font-bold">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#b71919]"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1.5 font-bold">
                        Nearest Regional Hub
                      </label>
                      <select
                        value={formData.region}
                        onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#b71919]"
                      >
                        <option value="Canada">Canada (Toronto Hub)</option>
                        <option value="India">India (Kerala Hub)</option>
                        <option value="Kuwait">Kuwait / GCC Regional Office</option>
                        <option value="International">Other / Global Virtual Desk</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1.5 font-bold">
                        Primary System of Interest
                      </label>
                      <select
                        value={formData.productInterest}
                        onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#b71919]"
                      >
                        <option value="FIRST">FIRST (Financial Reporting)</option>
                        <option value="R-POS Resto">R-POS RESTO (Hospitality)</option>
                        <option value="R-POS Retail">R-POS RETAIL (Supermarket)</option>
                        <option value="CORE">CORE (CRM & Operations)</option>
                        <option value="FLEX">FLEX (Travel Accounting)</option>
                        <option value="ATOMS">ATOMS (Complete Enterprise ERP)</option>
                        <option value="FORCE">FORCE (Clinical & Hospital)</option>
                        <option value="HRMS">HRMS (HR & Payroll)</option>
                        <option value="Bespoke Dev">Custom Software Engineering</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1.5 font-bold">
                      Project Scope & Requirements (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your existing stack, team size, timeline, or key bottlenecks..."
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#b71919]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#b71919] hover:bg-[#991313] text-white font-semibold text-sm shadow-lg shadow-red-900/25 hover:shadow-red-900/35 transition-all flex items-center justify-center gap-2 group active:scale-[0.99]"
                  >
                    <span>Submit Consultation Request</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-[11px] text-slate-500 text-center font-mono">
                    By submitting, you agree to ONFLAP's enterprise privacy standard. No spam, ever.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

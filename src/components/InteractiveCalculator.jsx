import React, { useState } from 'react';
import { Calculator, Sparkles, TrendingUp, Clock, DollarSign, ArrowRight } from 'lucide-react';

export default function InteractiveCalculator({ onOpenDemo }) {
  const [employees, setEmployees] = useState(45);
  const [transactionsPerDay, setTransactionsPerDay] = useState(250);
  const [sector, setSector] = useState('retail');

  // ROI estimation model
  const sectorMultipliers = {
    retail: 1.2,
    hospitality: 1.35,
    travel: 1.5,
    healthcare: 1.4,
    enterprise: 1.3
  };

  const mult = sectorMultipliers[sector] || 1.2;
  const hoursSavedPerMonth = Math.round((employees * 12 + transactionsPerDay * 0.4) * mult);
  const estimatedCostSavingAnnual = Math.round(hoursSavedPerMonth * 28 * 12);
  const errorReductionPercent = 94;

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Controls */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/40 text-cyan-400 text-xs font-mono font-medium">
                <Calculator className="w-3.5 h-3.5" /> INTERACTIVE ESTIMATOR
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Estimate Your Enterprise Efficiency Gains
              </h3>
              <p className="text-slate-400 text-sm">
                See how consolidating financial reporting, inventory, and point-of-sale into ONFLAP's unified stack cuts manual overhead.
              </p>

              <div className="space-y-5 pt-2">
                {/* Sector Selector */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                    Operational Industry Sector:
                  </label>
                  <select
                    value={sector}
                    onChange={(e) => setSector(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500"
                  >
                    <option value="retail">Retail & Multi-Branch Commerce</option>
                    <option value="hospitality">Restaurants & Hospitality (R-POS)</option>
                    <option value="travel">Travel & Tourism Accounting (FIESTA)</option>
                    <option value="healthcare">Healthcare & Clinical Records (FORCE)</option>
                    <option value="enterprise">Corporate Office & BPO (ATOMS)</option>
                  </select>
                </div>

                {/* Team Size Slider */}
                <div>
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-slate-300 font-mono">Total Staff & Cashiers:</span>
                    <span className="font-mono font-bold text-cyan-400">{employees} People</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="500"
                    step="5"
                    value={employees}
                    onChange={(e) => setEmployees(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                    <span>5</span>
                    <span>250</span>
                    <span>500+</span>
                  </div>
                </div>

                {/* Daily Transaction Slider */}
                <div>
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-slate-300 font-mono">Daily Invoices / Transactions:</span>
                    <span className="font-mono font-bold text-cyan-400">{transactionsPerDay} / day</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="5000"
                    step="50"
                    value={transactionsPerDay}
                    onChange={(e) => setTransactionsPerDay(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                    <span>20</span>
                    <span>2,500</span>
                    <span>5,000+</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Output Card */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/40 border border-cyan-500/30 p-8 shadow-2xl space-y-6">
                
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs">
                  <span className="font-mono text-cyan-300 uppercase tracking-wider font-semibold">
                    PROJECTED ENTERPRISE GAINS
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 font-mono text-[11px] border border-emerald-800">
                    REAL-TIME MODEL
                  </span>
                </div>

                {/* Primary Metrics */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800">
                    <span className="text-slate-400 text-xs block">Estimated Time Saved</span>
                    <span className="text-3xl font-black font-mono text-cyan-400">
                      {hoursSavedPerMonth.toLocaleString()} hrs
                    </span>
                    <span className="text-[11px] text-slate-500 block mt-1">Every Month</span>
                  </div>

                  <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800">
                    <span className="text-slate-400 text-xs block">Projected Annual Savings</span>
                    <span className="text-3xl font-black font-mono text-emerald-400">
                      ${estimatedCostSavingAnnual.toLocaleString()}
                    </span>
                    <span className="text-[11px] text-slate-500 block mt-1">Operational Overhead</span>
                  </div>
                </div>

                {/* Secondary metric */}
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-300 font-medium block">
                      Reconciliation Error Reduction
                    </span>
                    <span className="text-[11px] text-slate-500">
                      Automated cross-posting ledger sync
                    </span>
                  </div>
                  <span className="text-2xl font-black font-mono text-white">
                    {errorReductionPercent}%
                  </span>
                </div>

                {/* CTA */}
                <button
                  onClick={onOpenDemo}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all flex items-center justify-center gap-2 group"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Lock in These Results — Book Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

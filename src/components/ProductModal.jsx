import React from 'react';
import { products } from '../data/products';
import { 
  X, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Cpu, 
  Database, 
  Cloud 
} from 'lucide-react';

export default function ProductModal({ productId, onClose, onBookDemo }) {
  if (!productId) return null;

  const product = products.find(p => p.id === productId) || products[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-8">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/60">
              {product.code}
            </span>
            <span className="text-xs text-slate-400 font-medium">
              {product.category}
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-950/80 text-blue-400 border border-blue-800/50">
              {product.badge}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            {product.name}
          </h3>
          <p className="text-sm text-cyan-400 font-medium">
            {product.shortDesc}
          </p>
        </div>

        {/* Full Description */}
        <div className="mt-6 pt-6 border-t border-slate-800 space-y-4">
          <p className="text-slate-300 text-sm leading-relaxed">
            {product.fullDesc}
          </p>

          {/* Highlights checklist */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
              Full Module Capabilities:
            </h4>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {product.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Architecture summary */}
          <div className="grid grid-cols-3 gap-3 pt-4">
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
              <Cloud className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
              <span className="text-[10px] text-slate-400 block font-mono">Deployment</span>
              <span className="text-xs font-bold text-white">Cloud & On-Prem</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
              <Database className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
              <span className="text-[10px] text-slate-400 block font-mono">Sync Protocol</span>
              <span className="text-xs font-bold text-white">Offline Fault-Tolerant</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
              <ShieldCheck className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
              <span className="text-[10px] text-slate-400 block font-mono">Compliance</span>
              <span className="text-xs font-bold text-white">GST / VAT Ready</span>
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="text-xs text-slate-400 text-center sm:text-left">
            <span>Includes 24/7 SLA & migration assistance</span>
          </div>

          <div className="flex gap-2 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onBookDemo(product.name);
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-xs shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Book 1-on-1 Walkthrough</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

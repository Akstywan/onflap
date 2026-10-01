import React from 'react';
import { products } from '../data/products';
import { 
  X, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Database, 
  Cloud 
} from 'lucide-react';

export default function ProductModal({ productId, onClose, onBookDemo }) {
  if (!productId) return null;

  const product = products.find(p => p.id === productId) || products[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl rounded-3xl bg-white border border-slate-200 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-8">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-red-50 text-[#b71919] border border-red-200">
              {product.code}
            </span>
            <span className="text-xs text-slate-500 font-medium">
              {product.category}
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 text-slate-700 border border-slate-200">
              {product.badge}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {product.name}
          </h3>
          <p className="text-sm text-[#b71919] font-semibold">
            {product.shortDesc}
          </p>
        </div>

        {/* Full Description */}
        <div className="mt-6 pt-6 border-t border-slate-100 space-y-4">
          <p className="text-slate-600 text-sm leading-relaxed">
            {product.fullDesc}
          </p>

          {/* Highlights checklist */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
              Full Module Capabilities:
            </h4>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {product.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#b71919] shrink-0 mt-0.5" />
                  <span className="font-medium">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Architecture summary */}
          <div className="grid grid-cols-3 gap-3 pt-4">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
              <Cloud className="w-4 h-4 text-[#b71919] mx-auto mb-1" />
              <span className="text-[10px] text-slate-500 block font-mono">Deployment</span>
              <span className="text-xs font-bold text-slate-800">Cloud & On-Prem</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
              <Database className="w-4 h-4 text-[#b71919] mx-auto mb-1" />
              <span className="text-[10px] text-slate-500 block font-mono">Sync Protocol</span>
              <span className="text-xs font-bold text-slate-800">Offline Fault-Tolerant</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
              <ShieldCheck className="w-4 h-4 text-[#b71919] mx-auto mb-1" />
              <span className="text-[10px] text-slate-500 block font-mono">Compliance</span>
              <span className="text-xs font-bold text-slate-800">GST / VAT Ready</span>
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            <span>Includes 24/7 SLA & migration assistance</span>
          </div>

          <div className="flex gap-2 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onBookDemo(product.name);
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#b71919] hover:bg-[#991313] text-white font-semibold text-xs shadow-md shadow-red-900/20 transition-all flex items-center justify-center gap-2"
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

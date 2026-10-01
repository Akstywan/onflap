import React, { useState } from 'react';
import { products } from '../data/products';
import { 
  Search, 
  Layers, 
  ArrowRight, 
  Check, 
  Filter, 
  Sparkles,
  BarChart3,
  Users,
  UtensilsCrossed,
  Compass,
  ShoppingBag,
  PackageCheck,
  FolderLock,
  UserCheck,
  CreditCard,
  HeartPulse,
  Boxes,
  Cpu
} from 'lucide-react';

const iconMap = {
  BarChart3,
  Users,
  UtensilsCrossed,
  Compass,
  ShoppingBag,
  PackageCheck,
  FolderLock,
  UserCheck,
  CreditCard,
  HeartPulse,
  Boxes,
  Cpu
};

export default function ProductMatrix({ onSelectProduct }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    "All",
    "Finance & Accounting",
    "CRM & Operations",
    "Hospitality & POS",
    "Travel & Logistics",
    "Retail & Commerce",
    "Logistics & Supply Chain",
    "Enterprise Infrastructure",
    "HR & Workforce",
    "Fintech & Payments",
    "Healthcare",
    "Supply Chain",
    "Enterprise ERP"
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.shortDesc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="products" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/50 text-cyan-400 text-xs font-mono font-medium">
              <Layers className="w-3.5 h-3.5" /> COMPLETE ENTERPRISE CATALOG
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Our Complete Range of Software Products
            </h2>
            <p className="text-slate-400 text-base">
              A robust portfolio of 12 specialized standalone modules and unified ERP suites designed to automate every facet of your enterprise.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative min-w-[280px] sm:min-w-[320px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search products (e.g., HRMS, POS, GST, Logistics)..."
              className="w-full bg-slate-900 border border-slate-700/80 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none text-xs">
          <div className="flex items-center gap-2 shrink-0 text-slate-500 mr-1 font-mono uppercase tracking-wider text-[11px]">
            <Filter className="w-3.5 h-3.5" /> Filter:
          </div>
          {categories.slice(0, 7).map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full transition-all shrink-0 font-medium ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
          {selectedCategory !== 'All' && !categories.slice(0, 7).includes(selectedCategory) && (
            <span className="px-3.5 py-1.5 rounded-full bg-cyan-500 text-slate-950 font-bold text-xs shrink-0">
              {selectedCategory}
            </span>
          )}
        </div>

        {/* Product Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((prod) => {
            const Icon = iconMap[prod.iconName] || Layers;
            return (
              <div
                key={prod.id}
                className="group rounded-2xl bg-slate-900/60 border border-slate-800/80 p-6 hover:bg-slate-900/90 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-950/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Card Top: Code badge and Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-black tracking-wider px-2.5 py-1 rounded bg-slate-950 text-cyan-400 border border-slate-800">
                        {prod.code}
                      </span>
                      <span className="text-[11px] text-slate-400 font-medium">
                        {prod.category}
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 group-hover:border-cyan-400 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {prod.name}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm mt-2 line-clamp-3 leading-relaxed">
                      {prod.shortDesc}
                    </p>
                  </div>

                  {/* Highlights list */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/60">
                    {prod.highlights.slice(0, 3).map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom: Metric & Action button */}
                <div className="pt-6 mt-4 border-t border-slate-800/60 flex items-center justify-between">
                  <div>
                    <span className="font-mono text-base font-bold text-white">
                      {prod.stats.metric}
                    </span>
                    <span className="block text-[10px] text-slate-400">
                      {prod.stats.label}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectProduct(prod.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 group/btn"
                  >
                    <span>Module Specs</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state when search yields no products */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800">
            <Layers className="w-10 h-10 text-slate-500 mx-auto mb-3" />
            <p className="text-lg font-bold text-white">No products found matching "{searchTerm}"</p>
            <p className="text-sm text-slate-400 mt-1">Try clearing your search query or choosing another category.</p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
              className="mt-4 px-4 py-2 rounded-lg bg-cyan-600 text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

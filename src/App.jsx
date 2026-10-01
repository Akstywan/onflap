import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FlagshipShowcase from './components/FlagshipShowcase';
import ProductMatrix from './components/ProductMatrix';
import IndustryCater from './components/IndustryCater';
import ServicesSection from './components/ServicesSection';
import InteractiveCalculator from './components/InteractiveCalculator';
import TestimonialsSection from './components/TestimonialsSection';
import AboutLeadership from './components/AboutLeadership';
import GlobalHubs from './components/GlobalHubs';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import VideoModal from './components/VideoModal';

export default function App() {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [videoOpen, setVideoOpen] = useState(false);

  const handleOpenDemo = (preselectedProduct) => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Navigation */}
      <Navbar onOpenDemo={() => handleOpenDemo()} />

      {/* Main Hero & Live Product Interactive Preview */}
      <Hero 
        onOpenDemo={() => handleOpenDemo()} 
        onOpenVideo={() => setVideoOpen(true)} 
      />

      {/* Flagship Product Deep Dive (FIRST, R-POS, CORE, FIESTA) */}
      <FlagshipShowcase 
        onSelectProduct={(id) => setSelectedProductId(id)} 
      />

      {/* Complete 12-Product Catalog Matrix with Real-Time Search & Category Filters */}
      <ProductMatrix 
        onSelectProduct={(id) => setSelectedProductId(id)} 
      />

      {/* Interactive Industry Solutions: "We Cater To" */}
      <IndustryCater 
        onSelectProduct={(id) => setSelectedProductId(id)} 
      />

      {/* Enterprise Services (ASP.NET Core ERP, Custom Dev, Hardware, Security) */}
      <ServicesSection />

      {/* Interactive Enterprise ROI & Efficiency Calculator */}
      <InteractiveCalculator 
        onOpenDemo={() => handleOpenDemo()} 
      />

      {/* Verified Global Client Endorsements (Armenia, Kuwait, UAE) */}
      <TestimonialsSection />

      {/* Mission, Vision & Founders Leadership DNA */}
      <AboutLeadership />

      {/* Global Regional Hubs with Real-Time Clocks (Canada, India, Kuwait) */}
      <GlobalHubs />

      {/* Direct Contact & Consultation Lead Capture */}
      <ContactSection />

      {/* Comprehensive Footer */}
      <Footer onOpenDemo={() => handleOpenDemo()} />

      {/* Interactive Product Deep-Dive Modal */}
      <ProductModal
        productId={selectedProductId}
        onClose={() => setSelectedProductId(null)}
        onBookDemo={(name) => {
          setSelectedProductId(null);
          handleOpenDemo(name);
        }}
      />

      {/* "How We Work" Official Video Modal */}
      <VideoModal
        isOpen={videoOpen}
        onClose={() => setVideoOpen(false)}
      />
    </div>
  );
}

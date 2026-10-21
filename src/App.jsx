import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SolarJourneyCategories from './components/SolarJourneyCategories';
import ProductCatalog from './components/ProductCatalog';
import RedTrustStrip from './components/RedTrustStrip';
import SolarCalculator from './components/SolarCalculator';
import CableEstimator from './components/CableEstimator';
import WholesaleERPSection from './components/WholesaleERPSection';
import ContactLocation from './components/ContactLocation';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';

export default function App() {
  const [cartItems, setCartItems] = useState([
    {
      id: 'inv-nx36',
      name: 'Nitrox 3.6kW SP Hybrid Inverter IP65',
      wholesalePrice: 'Rs 215,000.00',
      moq: '1 Unit',
      quantity: 1
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleRemoveItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleUpdateQuantity = (id, newQty) => {
    setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity: newQty } : item));
  };

  // Entrance animations on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, { threshold: 0.08 });

    const els = document.querySelectorAll('.section-wrapper, .clean-product-card, .category-circle-card');
    els.forEach(el => {
      el.classList.add('reveal-init');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff' }}>
      {/* 1. Navbar: Top Red Disclaimer + Black Bar */}
      <Navbar 
        cartCount={cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0)}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Content Sections strictly matching the screenshot flow */}
      <main style={{ flex: 1 }}>
        {/* 2. Hero Section */}
        <Hero 
          onOpenCalculator={() => {
            const el = document.getElementById('solar-calculator');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenCatalog={() => {
            const el = document.getElementById('products');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 3. "Start Your Solar Power Journey" (4 Circular Categories) */}
        <SolarJourneyCategories 
          onSelectCategory={(catId) => {
            const el = document.getElementById('products');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 4. "Featured Solar Products" */}
        <ProductCatalog 
          onAddToCart={handleAddToCart}
          cartItems={cartItems}
        />

        {/* 5. Full-Width Crimson Trust Strip */}
        <RedTrustStrip />

        {/* 6. Interactive Solar Calculator (Styled in White & Red) */}
        <SolarCalculator onAddToCart={handleAddToCart} />

        {/* 7. Cable Length & Voltage Drop Estimator */}
        <CableEstimator onAddToCart={handleAddToCart} />

        {/* 8. Desktop Wholesale ERP Showcase */}
        <WholesaleERPSection />

        {/* 9. "Contact Us" with Scheme 33 Map + 3 Service Pillars */}
        <ContactLocation />
      </main>

      {/* 10. Black Footer with WhatsApp SMS only + Bottom Red Bar + Payment Badges */}
      <Footer />

      {/* RFQ Cart Modal */}
      <QuoteModal 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemoveItem={handleRemoveItem}
        onUpdateQuantity={handleUpdateQuantity}
      />
    </div>
  );
}

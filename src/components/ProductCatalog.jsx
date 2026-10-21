import React, { useState, useMemo } from 'react';
import { 
  Search, 
  ShoppingCart, 
  MessageCircle, 
  Check, 
  ChevronLeft, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ProductCatalog({ onAddToCart, cartItems }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(0);

  // Exact matching catalog items tailored to the reference screenshot
  const featuredProducts = [
    {
      id: 'inv-xp720',
      category: 'Inverex Small Units',
      name: 'Inverex XP PRO1200 / 720W Inverter',
      price: 'Rs 28,000.00',
      priceRaw: 28000,
      image: '/solar-inverter-pack.jpg',
      moq: '1 Unit',
      specs: '12V DC, 720W Output, Pure Sine Wave, Home Backup'
    },
    {
      id: 'bat-lv100',
      category: 'Inverex Batteries',
      name: 'INVEREX-LV 12V 100AH Lithium-Ion',
      price: 'Rs 70,400.00',
      priceRaw: 70400,
      image: '/solar-inverter-pack.jpg',
      moq: '1 Unit',
      specs: '12V 100Ah LiFePO4, 3000+ Cycles, Smart BMS'
    },
    {
      id: 'inv-nx36',
      category: 'Inverex Hybrid Single Phase IP65',
      name: 'Nitrox 3.6kW SP Hybrid Inverter IP65',
      price: 'Rs 215,000.00',
      priceRaw: 215000,
      image: '/solar-inverter-pack.jpg',
      moq: '1 Unit',
      specs: '3.6kW Single Phase, IP65 Waterproof, Dual MPPT'
    },
    {
      id: 'inv-nx10',
      category: 'Inverex On-grid',
      name: 'Nitrox 10 KW-3Ph On-Grid Solar Inverter',
      price: 'Rs 235,000.00',
      priceRaw: 235000,
      image: '/solar-inverter-pack.jpg',
      moq: '1 Unit',
      specs: '10kW Three Phase, Net Metering Ready, Dual MPPT'
    },
    {
      id: 'inv-nx56',
      category: 'Inverex Hybrid Single Phase IP65',
      name: 'Nitrox 5.6kW SP Hybrid Inverter',
      price: 'Rs 280,000.00',
      priceRaw: 28000,
      image: '/solar-inverter-pack.jpg',
      moq: '1 Unit',
      specs: '5.6kW Pure Sine Wave, 48V Battery, Wi-Fi Built-in'
    },
    {
      id: 'sp-longi585',
      category: 'Solar Panels Tier-1',
      name: 'Longi Hi-MO X6 585W Bifacial Mono Perc',
      price: 'Rs 18,427.00 / panel',
      priceRaw: 18427,
      image: '/hero-warehouse.jpg',
      moq: '10 Panels',
      specs: '585W TOPCon Bifacial, 22.6% Efficiency, 25-Yr Warranty'
    },
    {
      id: 'cbl-pc729',
      category: 'Pure Copper Wiring',
      name: 'Pakistan Cables 7/29 Single Core 90m Coil',
      price: 'Rs 17,200.00',
      priceRaw: 17200,
      image: '/hero-warehouse.jpg',
      moq: '1 Coil',
      specs: '100% Pure Annealed Copper, Flame Retardant PVC'
    },
    {
      id: 'mach-sm75',
      category: 'Industrial Machinery',
      name: 'Siemens 7.5HP (5.5kW) 3-Phase Induction Motor',
      price: 'Rs 145,000.00',
      priceRaw: 145000,
      image: '/machinery-motor.jpg',
      moq: '1 Unit',
      specs: '1450 RPM, Cast Iron IP55, 100% Copper Winding'
    }
  ];

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return featuredProducts;
    if (activeCategory === 'inverters') return featuredProducts.filter(p => p.category.toLowerCase().includes('inverter') || p.category.toLowerCase().includes('on-grid'));
    if (activeCategory === 'batteries') return featuredProducts.filter(p => p.category.toLowerCase().includes('batteries'));
    if (activeCategory === 'panels') return featuredProducts.filter(p => p.category.toLowerCase().includes('panel'));
    return featuredProducts;
  }, [activeCategory]);

  const handleAdd = (product) => {
    confetti({ particleCount: 40, spread: 50 });
    onAddToCart({
      id: product.id,
      name: product.name,
      wholesalePrice: product.price,
      moq: product.moq,
      category: product.category
    });
  };

  const isAdded = (id) => cartItems.some(item => item.id === id);

  const handleWhatsApp = (product) => {
    const text = encodeURIComponent(
      `*Assalam-o-Alaikum Waheed Shah Electric & Solar,*\n\n` +
      `I am inquiring about stock and wholesale pricing for:\n` +
      `• *Product:* ${product.name}\n` +
      `• *Category:* ${product.category}\n` +
      `• *Listed Price:* ${product.price}\n\n` +
      `Please provide contractor availability at Scheme 33 store.`
    );
    window.open(`https://wa.me/923002433833?text=${text}`, '_blank');
  };

  return (
    <section id="products" className="section-wrapper" style={{ backgroundColor: '#ffffff', paddingTop: '60px' }}>
      <div className="container">
        {/* Exact Section Header from Screenshot */}
        <h2 className="section-title">
          Featured Solar Products
        </h2>
        <p className="section-subtitle">
          Explore Our Featured Solar Products Built For High Performance, Efficiency, And Reliable Energy Savings.
        </p>

        {/* Category Filter Pills */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          flexWrap: 'wrap',
          marginBottom: '35px'
        }}>
          {[
            { id: 'all', label: 'All Products' },
            { id: 'inverters', label: 'Inverters (Hybrid & On-Grid)' },
            { id: 'batteries', label: 'Inverex Batteries' },
            { id: 'panels', label: 'Solar Panels' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              style={{
                padding: '8px 18px',
                borderRadius: '9999px',
                fontSize: '0.85rem',
                fontWeight: 700,
                border: activeCategory === tab.id ? '1.5px solid #e11d24' : '1px solid #e5e7eb',
                backgroundColor: activeCategory === tab.id ? '#e11d24' : '#ffffff',
                color: activeCategory === tab.id ? '#ffffff' : '#374151',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Cards Row (Exact Match to Screenshot) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))',
          gap: '20px',
          marginBottom: '35px'
        }}>
          {filtered.map((item) => {
            const added = isAdded(item.id);

            return (
              <div 
                key={item.id}
                className="clean-product-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  textAlign: 'left'
                }}
              >
                {/* Product Image */}
                <div style={{
                  height: '170px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '10px',
                  backgroundColor: '#fbfbfb',
                  borderRadius: '8px',
                  marginBottom: '14px',
                  overflow: 'hidden'
                }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="product-img"
                    style={{
                      maxHeight: '100%',
                      maxWidth: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </div>

                {/* Info */}
                <div>
                  <div style={{
                    fontSize: '0.72rem',
                    color: '#6b7280',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.03em',
                    marginBottom: '4px'
                  }}>
                    {item.category}
                  </div>

                  <h3 style={{
                    fontSize: '0.98rem',
                    fontWeight: 800,
                    color: '#111827',
                    lineHeight: 1.35,
                    marginBottom: '8px',
                    minHeight: '40px'
                  }}>
                    {item.name}
                  </h3>

                  <div style={{
                    fontSize: '1.1rem',
                    fontWeight: 800,
                    color: '#e11d24',
                    fontFamily: 'var(--font-mono)',
                    marginBottom: '14px'
                  }}>
                    {item.price}
                  </div>
                </div>

                {/* Card Actions */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '8px' }}>
                  <button
                    onClick={() => handleAdd(item)}
                    style={{
                      padding: '8px 12px',
                      borderRadius: '4px',
                      background: added ? '#10b981' : '#e11d24',
                      color: '#ffffff',
                      fontWeight: 700,
                      fontSize: '0.8rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '5px',
                      cursor: 'pointer',
                      transition: 'background 0.2s'
                    }}
                  >
                    {added ? <Check size={14} /> : <ShoppingCart size={14} />}
                    <span>{added ? 'In RFQ' : 'Add to RFQ'}</span>
                  </button>

                  <button
                    onClick={() => handleWhatsApp(item)}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '4px',
                      background: '#25D366',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer'
                    }}
                    title="Quick WhatsApp Inquiry"
                  >
                    <MessageCircle size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Pagination Dots from Screenshot */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
          marginTop: '10px'
        }}>
          {[...Array(8)].map((_, i) => (
            <span
              key={i}
              onClick={() => setCurrentPage(i)}
              style={{
                width: i === 0 ? '10px' : '6px',
                height: i === 0 ? '10px' : '6px',
                borderRadius: '50%',
                backgroundColor: i === 0 ? '#e11d24' : '#d1d5db',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

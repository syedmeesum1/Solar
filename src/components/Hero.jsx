import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Calculator, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles,
  Zap
} from 'lucide-react';

export default function Hero({ onOpenCalculator, onOpenCatalog }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      titleRed: 'Waheed Shah Solar Energy',
      titleDark: 'Solutions',
      subhead: 'No matter what Energy Backup you need, we will take care of it.',
      desc: 'Authorized wholesale distributor of Tier-1 Solar Panels, Hybrid Inverters, Lithium Batteries, and Pure Copper Cables in Scheme 33, Karachi.',
      ctaText: 'Calculate Solar Load',
      ctaAction: '#solar-calculator',
      image: '/solar-inverter-pack.jpg'
    },
    {
      titleRed: 'Tier-1 High Efficiency',
      titleDark: 'Solar Panels & Inverters',
      subhead: 'Maximum daily generation with reliable zero-loss pure copper cabling.',
      desc: 'Stocking Longi, Jinko, Inverex, Growatt & Pakistan Cables at direct wholesale pallet and roll rates for contractors.',
      ctaText: 'View Featured Products',
      ctaAction: '#products',
      image: '/hero-warehouse.jpg'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <section style={{
      backgroundColor: '#fbfbfb',
      borderBottom: '1px solid #e5e7eb',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ position: 'relative' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          alignItems: 'center',
          gap: '40px',
          minHeight: '440px',
          padding: '40px 0'
        }}>
          {/* Left Text Column */}
          <div className="animate-fade-in-up" key={currentSlide}>
            <h1 style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
              fontWeight: 900,
              lineHeight: 1.15,
              marginBottom: '14px',
              fontFamily: 'var(--font-heading)'
            }}>
              <span style={{ color: '#e11d24' }}>{slide.titleRed}</span>{' '}
              <span style={{ color: '#111827' }}>{slide.titleDark}</span>
            </h1>

            <p style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
              fontWeight: 800,
              color: '#1f2937',
              lineHeight: 1.4,
              marginBottom: '16px'
            }}>
              {slide.subhead}
            </p>

            <p style={{
              fontSize: '0.95rem',
              color: '#6b7280',
              lineHeight: 1.6,
              marginBottom: '28px',
              maxWidth: '540px'
            }}>
              {slide.desc}
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
              <a
                href="#solar-calculator"
                className="btn-red"
                style={{ fontSize: '0.95rem', padding: '12px 26px' }}
              >
                <Calculator size={18} />
                <span>Calculate Your Load</span>
              </a>

              <a
                href="#products"
                className="btn-dark"
                style={{ fontSize: '0.95rem', padding: '12px 24px' }}
              >
                <span>Browse Products</span>
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Carousel navigation buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '30px' }}>
              <button
                onClick={prevSlide}
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: '#ffffff',
                  border: '1px solid #d1d5db',
                  color: '#374151',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
                  cursor: 'pointer'
                }}
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} />
              </button>

              <div style={{ display: 'flex', gap: '6px' }}>
                {slides.map((_, i) => (
                  <span
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    style={{
                      width: currentSlide === i ? '24px' : '8px',
                      height: '8px',
                      borderRadius: '4px',
                      backgroundColor: currentSlide === i ? '#e11d24' : '#d1d5db',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: '#ffffff',
                  border: '1px solid #d1d5db',
                  color: '#374151',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
                  cursor: 'pointer'
                }}
                aria-label="Next slide"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Right Image Showcase Column */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              border: '4px solid #ffffff',
              backgroundColor: '#ffffff'
            }}>
              <img
                src={slide.image}
                alt="Waheed Shah Solar Energy Equipment"
                style={{
                  width: '100%',
                  height: '380px',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>

            {/* Badge overlay on top-left of image */}
            <div style={{
              position: 'absolute',
              top: '16px',
              left: '16px',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              padding: '6px 14px',
              borderRadius: '9999px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
              fontSize: '0.75rem',
              fontWeight: 800,
              color: '#e11d24',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <Sparkles size={14} />
              <span>100% Genuine Certified Stock</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer>
      {/* 1. Main Black Footer (Exact Match to Screenshot) */}
      <div style={{
        backgroundColor: '#000000',
        color: '#ffffff',
        padding: '60px 0 40px 0',
        borderTop: '1px solid #1a1a1a'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            alignItems: 'start'
          }}>
            {/* Column 1: Brand & Promise */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '2px solid #e11d24',
                  backgroundColor: '#111'
                }}>
                  <img src="/logo.jpg" alt="Waheed Shah" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 900, color: '#ffffff' }}>
                    WAHEED SHAH
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#e11d24', fontWeight: 700, textTransform: 'uppercase' }}>
                    Electric & Solar Store
                  </div>
                </div>
              </div>

              <div style={{
                fontSize: '0.92rem',
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '0.02em',
                marginTop: '16px'
              }}>
                Quality Is Our Promise.
              </div>

              <p style={{ fontSize: '0.8rem', color: '#9ca3af', marginTop: '8px', lineHeight: 1.5 }}>
                Official wholesale distributor for Tier-1 solar systems, heavy machinery, and pure copper cables in Scheme 33, Karachi.
              </p>
            </div>

            {/* Column 2: Nav Column 1 */}
            <div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.88rem', fontWeight: 600 }}>
                <li>
                  <a href="#" style={{ color: '#ffffff', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#e11d24'} onMouseLeave={(e) => e.target.style.color = '#ffffff'}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" style={{ color: '#ffffff', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#e11d24'} onMouseLeave={(e) => e.target.style.color = '#ffffff'}>
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#products" style={{ color: '#ffffff', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#e11d24'} onMouseLeave={(e) => e.target.style.color = '#ffffff'}>
                    Products
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Nav Column 2 */}
            <div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.88rem', fontWeight: 600 }}>
                <li>
                  <a href="#solar-calculator" style={{ color: '#ffffff', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#e11d24'} onMouseLeave={(e) => e.target.style.color = '#ffffff'}>
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#wholesale-erp" style={{ color: '#ffffff', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#e11d24'} onMouseLeave={(e) => e.target.style.color = '#ffffff'}>
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contact" style={{ color: '#ffffff', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#e11d24'} onMouseLeave={(e) => e.target.style.color = '#ffffff'}>
                    Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: WhatsApp SMS Only & Phone Number (Exact Match to Screenshot) */}
            <div>
              <div style={{ fontSize: '0.85rem', color: '#d1d5db', marginBottom: '8px', fontWeight: 600 }}>
                Whatsapp sms only:
              </div>

              <a
                href="https://wa.me/923002433833?text=Assalam-o-Alaikum%20Waheed%20Shah%20Store"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontSize: '1.35rem',
                  fontWeight: 900,
                  fontFamily: 'var(--font-heading)',
                  letterSpacing: '0.01em',
                  marginBottom: '10px'
                }}
              >
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: '#25D366',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  flexShrink: 0
                }}>
                  <MessageCircle size={22} />
                </div>
                <span>+ 923002433833</span>
              </a>

              <div style={{ fontSize: '0.8rem', color: '#9ca3af', marginTop: '6px' }}>
                Shop 1/2, Dawood Pride, Kiran Hospital Rd, Scheme 33, Karachi
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Bottom Red Bar (Exact Match to Screenshot) */}
      <div style={{
        backgroundColor: '#e11d24',
        color: '#ffffff',
        padding: '12px 0',
        fontSize: '0.78rem',
        fontWeight: 600
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <div>
            Copyright © Waheed Shah Electric & Solar 2026. Prepared by TechmireTeam.
          </div>

          {/* Payment Badges (Visa, Mastercard, Raast, COD) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {['Pay', 'MC', 'VISA', 'RAAST', 'COD'].map((badge, idx) => (
              <span
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  color: '#111827',
                  padding: '2px 8px',
                  borderRadius: '3px',
                  fontSize: '0.68rem',
                  fontWeight: 900,
                  letterSpacing: '0.05em'
                }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Scroll-to-Top Button (as in screenshot) */}
      <button 
        onClick={scrollToTop}
        className="scroll-top-btn"
        title="Scroll to Top"
        aria-label="Scroll to top"
      >
        <ArrowUp size={18} />
      </button>

      {/* Floating WhatsApp Bubble */}
      <a
        href="https://wa.me/923002433833?text=Assalam-o-Alaikum%20Waheed%20Shah%20Store"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float-bubble"
        title="WhatsApp Support"
      >
        <MessageCircle size={28} />
      </a>
    </footer>
  );
}

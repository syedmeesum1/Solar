import React, { useState } from 'react';
import { 
  Phone, 
  Search, 
  User, 
  ShoppingCart, 
  Menu, 
  X, 
  Calculator, 
  Zap, 
  Layers, 
  Laptop
} from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchVal, setSearchVal] = useState('');

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 10px rgba(0,0,0,0.15)' }}>

      {/* 2. Main Black Navigation Bar (Exact match to screenshot) */}
      <div style={{
        backgroundColor: '#0c0c0c',
        color: '#ffffff',
        padding: '12px 0',
        borderBottom: '1px solid #1f1f1f'
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          flexWrap: 'nowrap'
        }}>
          {/* Brand Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0, textDecoration: 'none' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '2px solid #e11d24',
              backgroundColor: '#1a1a1a',
              flexShrink: 0
            }}>
              <img 
                src="/logo.jpg" 
                alt="Waheed Shah Electric & Solar" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>
              <div style={{
                fontSize: '1.1rem',
                fontWeight: 900,
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                color: '#ffffff',
                fontFamily: 'var(--font-heading)',
                whiteSpace: 'nowrap'
              }}>
                WAHEED SHAH
              </div>
              <div style={{
                fontSize: '0.64rem',
                color: '#e11d24',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                whiteSpace: 'nowrap'
              }}>
                Electric & Solar Wholesale
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links with slashes '/' */}
          <nav 
            style={{ 
              display: 'none', 
              alignItems: 'center', 
              gap: '12px', 
              fontSize: '0.82rem', 
              fontWeight: 600,
              whiteSpace: 'nowrap',
              flexWrap: 'nowrap',
              flexShrink: 1
            }} 
            className="desktop-nav-menu"
          >
            <a 
              href="#" 
              style={{ color: '#38bdf8', whiteSpace: 'nowrap', transition: 'color 0.2s', display: 'inline-flex', alignItems: 'center' }}
            >
              Home
            </a>
            <span style={{ color: '#4b5563', userSelect: 'none' }}>/</span>

            <a 
              href="#products" 
              style={{ color: '#d1d5db', whiteSpace: 'nowrap', transition: 'color 0.2s', display: 'inline-flex', alignItems: 'center', gap: '3px' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#e11d24'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}
            >
              <span>Inverters</span>
              <span style={{ fontSize: '0.68rem', color: '#9ca3af' }}>▾</span>
            </a>
            <span style={{ color: '#4b5563', userSelect: 'none' }}>/</span>

            <a 
              href="#products" 
              style={{ color: '#d1d5db', whiteSpace: 'nowrap', transition: 'color 0.2s', display: 'inline-flex', alignItems: 'center', gap: '3px' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#e11d24'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}
            >
              <span>Inverex Batteries</span>
              <span style={{ fontSize: '0.68rem', color: '#9ca3af' }}>▾</span>
            </a>
            <span style={{ color: '#4b5563', userSelect: 'none' }}>/</span>

            <a 
              href="#products" 
              style={{ color: '#d1d5db', whiteSpace: 'nowrap', transition: 'color 0.2s', display: 'inline-flex', alignItems: 'center' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#e11d24'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}
            >
              Solar Panels
            </a>
            <span style={{ color: '#4b5563', userSelect: 'none' }}>/</span>

            <a 
              href="#solar-calculator" 
              style={{ color: '#d1d5db', display: 'inline-flex', alignItems: 'center', gap: '4px', whiteSpace: 'nowrap', transition: 'color 0.2s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#e11d24'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}
            >
              <Calculator size={13} color="#e11d24" />
              <span>Solar Calculator</span>
            </a>
            <span style={{ color: '#4b5563', userSelect: 'none' }}>/</span>

            <a 
              href="#cable-estimator" 
              style={{ color: '#d1d5db', whiteSpace: 'nowrap', transition: 'color 0.2s', display: 'inline-flex', alignItems: 'center' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#e11d24'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}
            >
              Cable Estimator
            </a>
            <span style={{ color: '#4b5563', userSelect: 'none' }}>/</span>

            <a 
              href="#wholesale-erp" 
              style={{ color: '#d1d5db', whiteSpace: 'nowrap', transition: 'color 0.2s', display: 'inline-flex', alignItems: 'center' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#e11d24'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}
            >
              Wholesale ERP
            </a>
          </nav>

          {/* Right Action Icons (Search, Login, Cart with Rs 0.00) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexShrink: 0, whiteSpace: 'nowrap' }}>
            {/* Search Trigger */}
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              style={{
                background: 'transparent',
                color: '#d1d5db',
                display: 'flex',
                alignItems: 'center',
                padding: '4px',
                cursor: 'pointer'
              }}
              title="Search"
            >
              <Search size={17} />
            </button>

            {/* Login button */}
            <a 
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                color: '#d1d5db',
                fontSize: '0.82rem',
                fontWeight: 600,
                textDecoration: 'none',
                whiteSpace: 'nowrap'
              }}
            >
              <User size={15} />
              <span style={{ display: 'none' }} className="nav-text-label">Login</span>
            </a>

            {/* Cart Box with Rs 0.00 / RFQ badge */}
            <button
              onClick={onOpenCart}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: '#1c1c1c',
                border: '1px solid #333333',
                color: '#ffffff',
                padding: '6px 12px',
                borderRadius: '4px',
                fontSize: '0.8rem',
                fontWeight: 700,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#292929'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1c1c1c'}
            >
              <ShoppingCart size={15} color="#e11d24" />
              <span style={{ whiteSpace: 'nowrap' }}>{cartCount > 0 ? `RFQ (${cartCount})` : 'Rs 0.00'}</span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'transparent',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center'
              }}
              className="mobile-nav-toggle"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Search Popup bar */}
        {searchOpen && (
          <div className="container" style={{ paddingTop: '10px' }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input
                type="text"
                placeholder="Search solar panels, inverters, batteries, cables..."
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                style={{
                  background: '#1a1a1a',
                  border: '1px solid #333',
                  color: '#fff',
                  borderRadius: '4px',
                  padding: '8px 12px'
                }}
              />
              <a
                href="#products"
                className="btn-red"
                style={{ padding: '8px 16px', fontSize: '0.82rem' }}
                onClick={() => setSearchOpen(false)}
              >
                Search
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: '#121212',
          borderBottom: '2px solid #e11d24',
          padding: '16px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          <a href="#" onClick={() => setMobileMenuOpen(false)} style={{ color: '#38bdf8', fontWeight: 700 }}>Home</a>
          <a href="#products" onClick={() => setMobileMenuOpen(false)} style={{ color: '#d1d5db' }}>Inverters & Solar Panels</a>
          <a href="#products" onClick={() => setMobileMenuOpen(false)} style={{ color: '#d1d5db' }}>Batteries</a>
          <a href="#solar-calculator" onClick={() => setMobileMenuOpen(false)} style={{ color: '#e11d24', fontWeight: 700 }}>Solar Calculator</a>
          <a href="#cable-estimator" onClick={() => setMobileMenuOpen(false)} style={{ color: '#d1d5db' }}>Cable Estimator</a>
          <a href="#wholesale-erp" onClick={() => setMobileMenuOpen(false)} style={{ color: '#d1d5db' }}>Wholesale ERP</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} style={{ color: '#d1d5db' }}>Contact Showroom</a>
        </div>
      )}

      <style>{`
        .desktop-nav-menu {
          white-space: nowrap !important;
        }
        .desktop-nav-menu a, .desktop-nav-menu span {
          white-space: nowrap !important;
        }
        @media (min-width: 1040px) {
          .desktop-nav-menu { display: flex !important; }
          .mobile-nav-toggle { display: none !important; }
          .nav-text-label { display: inline !important; }
        }
        @media (max-width: 1039px) {
          .desktop-nav-menu { display: none !important; }
          .mobile-nav-toggle { display: flex !important; }
        }
      `}</style>
    </header>
  );
}

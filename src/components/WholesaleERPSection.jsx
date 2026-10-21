import React, { useState } from 'react';
import { 
  Laptop, 
  Scissors, 
  BookOpen, 
  Layers, 
  RefreshCw, 
  CheckCircle2 
} from 'lucide-react';

export default function WholesaleERPSection() {
  const [activeTab, setActiveTab] = useState('cables');

  return (
    <section id="wholesale-erp" className="section-wrapper" style={{ backgroundColor: '#f8f9fa', borderTop: '1px solid #e5e7eb' }}>
      <div className="container">
        <h2 className="section-title">
          Desktop Wholesale Inventory & Ledger ERP
        </h2>
        <div className="red-underline" />
        <p className="section-subtitle">
          Designed by <strong>TechmireTeam</strong> for Waheed Shah Electric & Solar. Specialized cable roll remnant tracking, contractor credit khata, and multi-tier pricing.
        </p>

        {/* Clean White ERP Window */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          border: '1px solid #e5e7eb',
          boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
          overflow: 'hidden'
        }}>
          {/* Window Title Bar */}
          <div style={{
            backgroundColor: '#0c0c0c',
            color: '#ffffff',
            padding: '14px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#f59e0b' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
              </div>
              <span style={{ fontSize: '0.88rem', fontWeight: 800 }}>
                Waheed Shah Wholesale ERP v2.4 (Electron.js + PostgreSQL)
              </span>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#16a34a',
              color: '#ffffff',
              padding: '4px 10px',
              borderRadius: '9999px',
              fontSize: '0.72rem',
              fontWeight: 700
            }}>
              <RefreshCw size={11} />
              <span>Scheme 33 Server Online & Synced</span>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div style={{
            display: 'flex',
            borderBottom: '1px solid #e5e7eb',
            backgroundColor: '#fbfbfb',
            padding: '10px 20px',
            gap: '10px',
            overflowX: 'auto'
          }}>
            {[
              { id: 'cables', label: 'Cable Roll & Cutting Tracker', icon: Scissors },
              { id: 'ledger', label: 'Contractor Digital Khata', icon: BookOpen },
              { id: 'inventory', label: 'Multi-Tier Wholesale Stock', icon: Layers }
            ].map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 16px',
                    borderRadius: '6px',
                    backgroundColor: isActive ? '#e11d24' : 'transparent',
                    color: isActive ? '#ffffff' : '#4b5563',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    transition: 'all 0.2s'
                  }}
                >
                  <Icon size={15} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Content Area */}
          <div style={{ padding: '28px' }}>
            {activeTab === 'cables' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#111827', marginBottom: '8px' }}>
                    Coil Length Remnants Management
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: '#6b7280', lineHeight: 1.6, marginBottom: '16px' }}>
                    Tracks every standard 90-meter coil after cutting so you can serve custom meter orders without generating dead inventory waste.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#374151' }}>
                      <CheckCircle2 size={16} color="#e11d24" />
                      <span>Precision meter-stamp tracking on Pakistan Cables</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#374151' }}>
                      <CheckCircle2 size={16} color="#e11d24" />
                      <span>Low remnant alerts on open factory coils</span>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    { name: 'Pakistan Cables 7/29 Red Coil', rem: '34m remaining', pct: 37 },
                    { name: 'Fast Cables 16mm² 4-Core Armoured', rem: '142m remaining', pct: 28 },
                    { name: 'Solar DC 6mm² PV Cable Drum', rem: '78m remaining', pct: 78 }
                  ].map((item, idx) => (
                    <div key={idx} style={{ padding: '10px 14px', backgroundColor: '#f8f9fa', borderRadius: '6px', border: '1px solid #e5e7eb' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', fontWeight: 700, marginBottom: '4px' }}>
                        <span style={{ color: '#111827' }}>{item.name}</span>
                        <span style={{ color: '#e11d24' }}>{item.rem}</span>
                      </div>
                      <div style={{ width: '100%', height: '6px', backgroundColor: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
                        <div style={{ width: `${item.pct}%`, height: '100%', backgroundColor: '#e11d24' }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'ledger' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#111827', marginBottom: '8px' }}>
                    Contractor Khata & Credit Facility
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: '#6b7280', lineHeight: 1.6 }}>
                    Scheme 33 contractors enjoy 15–30 day credit limits with automated WhatsApp billing statements.
                  </p>
                </div>
                <div style={{ padding: '16px', backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 800 }}>Apex Solar Solutions</span>
                    <span style={{ fontSize: '0.75rem', color: '#16a34a', fontWeight: 700 }}>Approved Khata</span>
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#6b7280' }}>Credit Limit: Rs 1,500,000</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 900, color: '#e11d24', marginTop: '4px' }}>Current Balance: Rs 345,000</div>
                </div>
              </div>
            )}

            {activeTab === 'inventory' && (
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#111827', marginBottom: '8px' }}>
                  Multi-Tier Wholesale Pricing
                </h4>
                <p style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: '16px' }}>
                  Automatic rate adjustment for Walk-in clients, Trade Electricians, and High-Volume EPC Contractors.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                  <div style={{ padding: '12px', backgroundColor: '#f8f9fa', borderRadius: '6px', border: '1px solid #e5e7eb' }}>
                    <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Walk-In Retail</div>
                    <div style={{ fontSize: '1rem', fontWeight: 800, color: '#111827' }}>Rs 35.00 / W</div>
                  </div>
                  <div style={{ padding: '12px', backgroundColor: '#f8f9fa', borderRadius: '6px', border: '1px solid #e5e7eb' }}>
                    <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Trade Electrician</div>
                    <div style={{ fontSize: '1rem', fontWeight: 800, color: '#2563eb' }}>Rs 33.20 / W</div>
                  </div>
                  <div style={{ padding: '12px', backgroundColor: '#fff1f2', borderRadius: '6px', border: '1px solid #fecdd3' }}>
                    <div style={{ fontSize: '0.75rem', color: '#e11d24', fontWeight: 700 }}>Bulk EPC Pallet</div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#e11d24' }}>Rs 31.50 / W</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

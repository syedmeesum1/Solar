import React from 'react';
import { 
  CreditCard, 
  Truck, 
  Award, 
  Scissors, 
  CheckCircle, 
  Sparkles,
  ShieldCheck,
  PhoneCall,
  Clock
} from 'lucide-react';
import { CONTRACTOR_PERKS } from '../data/products';

const PERK_ICONS = {
  CreditCard,
  Truck,
  Award,
  Scissors
};

export default function ContractorPerks() {
  return (
    <section id="contractor-perks" className="section-wrapper" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-gold">
            <Award size={14} />
            <span>Why B2B Partners Choose Us</span>
          </div>
          <h2 className="section-title">
            Built for Contractors, <span className="gradient-text-gold">Engineers & Electricians</span>
          </h2>
          <p className="section-subtitle">
            We understand the challenges of jobsite delays, cable waste, and cash flow. That is why our Scheme 33 wholesale hub offers specialized services tailored for professionals.
          </p>
        </div>

        {/* Perks Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          marginBottom: '50px'
        }}>
          {CONTRACTOR_PERKS.map((perk, idx) => {
            const Icon = PERK_ICONS[perk.icon] || Award;

            return (
              <div 
                key={idx}
                className="glass-panel"
                style={{
                  padding: '30px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  position: 'relative'
                }}
              >
                <div style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(6, 182, 212, 0.1))',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fbbf24'
                }}>
                  <Icon size={26} />
                </div>

                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#f8fafc' }}>
                  {perk.title}
                </h3>

                <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.6 }}>
                  {perk.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Contractor Registration Callout Banner */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(6, 182, 212, 0.1) 100%)',
          border: '1px solid rgba(245, 158, 11, 0.3)',
          borderRadius: '20px',
          padding: '36px 40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px'
        }}>
          <div>
            <span className="badge-gold" style={{ marginBottom: '10px' }}>Fast Account Setup</span>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#f8fafc', marginBottom: '8px' }}>
              Are you an EPC Solar Installer or Master Electrician in Karachi?
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#cbd5e1', maxWidth: '650px', lineHeight: 1.6 }}>
              Apply for an authorized Waheed Shah Contractor Khata Account to unlock wholesale tier pricing, 30-day billing, and direct site dispatch to Scheme 33, Malir, Gulshan, and across Karachi.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/923002433833?text=Assalam-o-Alaikum,%20I%20am%20an%20electrical/solar%20contractor%20and%20want%20to%20register%20for%20a%20B2B%20Khata%20account%20at%20Waheed%20Shah%20Store."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: '14px 28px', fontSize: '0.95rem' }}
            >
              <CreditCard size={18} />
              <span>Apply for Contractor Khata</span>
            </a>

            <a
              href="tel:+923002433833"
              className="btn-secondary"
              style={{ padding: '14px 24px', fontSize: '0.95rem' }}
            >
              <PhoneCall size={18} color="#22c55e" />
              <span>Call Management</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

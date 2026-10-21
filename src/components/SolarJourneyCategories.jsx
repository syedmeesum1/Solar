import React from 'react';

export default function SolarJourneyCategories({ onSelectCategory }) {
  const categories = [
    {
      id: 'domestic',
      title: 'Domestic',
      desc: 'Efficient domestic inverters for reliable home backup power and smooth everyday energy protection.',
      image: '/solar-inverter-pack.jpg',
      iconSvg: (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '80%', height: '80%' }}>
          <rect x="22" y="15" width="56" height="70" rx="8" fill="#1e293b" stroke="#e11d24" strokeWidth="3"/>
          <rect x="32" y="25" width="36" height="20" rx="4" fill="#0284c7"/>
          <circle cx="50" cy="62" r="10" fill="#334155" stroke="#f1f5f9" strokeWidth="2"/>
          <line x1="50" y1="57" x2="50" y2="67" stroke="#38bdf8" strokeWidth="2"/>
        </svg>
      )
    },
    {
      id: 'commercial',
      title: 'Commercial',
      desc: 'High-capacity commercial and industrial inverters built for stable, continuous power and heavy-duty performance.',
      image: '/machinery-motor.jpg',
      iconSvg: (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '80%', height: '80%' }}>
          <rect x="18" y="12" width="64" height="76" rx="6" fill="#f8fafc" stroke="#94a3b8" strokeWidth="3"/>
          <rect x="26" y="20" width="48" height="26" rx="3" fill="#0f172a"/>
          <circle cx="38" cy="60" r="5" fill="#e11d24"/>
          <circle cx="50" cy="60" r="5" fill="#f59e0b"/>
          <circle cx="62" cy="60" r="5" fill="#22c55e"/>
          <rect x="26" y="72" width="48" height="6" rx="2" fill="#cbd5e1"/>
        </svg>
      )
    },
    {
      id: 'batteries',
      title: 'Lithium Batteries',
      desc: 'Advanced lithium batteries delivering long-lasting, fast charging backup power with superior efficiency and reliability.',
      image: '/solar-inverter-pack.jpg',
      iconSvg: (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '80%', height: '80%' }}>
          <rect x="20" y="20" width="60" height="65" rx="8" fill="#ffffff" stroke="#e11d24" strokeWidth="3"/>
          <rect x="35" y="12" width="30" height="8" rx="2" fill="#334155"/>
          <rect x="30" y="32" width="40" height="14" rx="3" fill="#22c55e"/>
          <text x="50" y="42" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">51.2V Li-ON</text>
          <path d="M48 55L44 65H52L48 75" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 'solar-panels',
      title: 'Solar Panels',
      desc: 'High-efficiency solar panels designed to maximize energy output and deliver clean, dependable power.',
      image: '/hero-warehouse.jpg',
      iconSvg: (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '80%', height: '80%' }}>
          <polygon points="25,18 75,18 85,82 15,82" fill="#0f172a" stroke="#cbd5e1" strokeWidth="2.5"/>
          <line x1="37" y1="18" x2="33" y2="82" stroke="#38bdf8" strokeWidth="1.5"/>
          <line x1="50" y1="18" x2="50" y2="82" stroke="#38bdf8" strokeWidth="1.5"/>
          <line x1="63" y1="18" x2="67" y2="82" stroke="#38bdf8" strokeWidth="1.5"/>
          <line x1="22" y1="36" x2="78" y2="36" stroke="#38bdf8" strokeWidth="1.5"/>
          <line x1="19" y1="56" x2="81" y2="56" stroke="#38bdf8" strokeWidth="1.5"/>
        </svg>
      )
    }
  ];

  return (
    <section className="section-wrapper" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #f1f5f9' }}>
      <div className="container">
        {/* Exact Heading from Screenshot */}
        <h2 className="section-title">
          Start Your Solar Power Journey
        </h2>
        <div className="red-underline" />
        <p className="section-subtitle">
          100% Original Products Direct From Waheed Shah Scheme 33 Warehouse
        </p>

        {/* 4 Circular Category Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '30px',
          marginTop: '10px'
        }}>
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="category-circle-card"
              onClick={() => {
                const el = document.getElementById('products');
                el?.scrollIntoView({ behavior: 'smooth' });
                if (onSelectCategory) onSelectCategory(cat.id);
              }}
            >
              {/* Circular Image / Device Box */}
              <div className="circle-img-box">
                {cat.iconSvg}
              </div>

              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 800,
                color: '#111827',
                marginBottom: '8px'
              }}>
                {cat.title}
              </h3>

              <p style={{
                fontSize: '0.85rem',
                color: '#6b7280',
                lineHeight: 1.5,
                maxWidth: '240px'
              }}>
                {cat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { 
  Sun, 
  Wrench, 
  Building, 
  MapPin, 
  Phone, 
  Clock, 
  Send, 
  MessageCircle,
  Navigation
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactLocation() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    confetti({ particleCount: 60, spread: 60 });
    setFormSubmitted(true);
    const msg = encodeURIComponent(
      `*Inquiry from Waheed Shah Website:*\n` +
      `• *Name:* ${formData.name}\n` +
      `• *Phone:* ${formData.phone}\n` +
      `• *Message:* ${formData.message}`
    );
    setTimeout(() => {
      window.open(`https://wa.me/923002433833?text=${msg}`, '_blank');
    }, 800);
  };

  return (
    <section id="contact" className="section-wrapper" style={{ backgroundColor: '#ffffff', borderTop: '1px solid #f1f5f9' }}>
      <div className="container">
        {/* Exact Heading & Subtitle from Screenshot */}
        <h2 className="section-title">
          Contact Us
        </h2>
        <p className="section-subtitle">
          We specialize in delivering reliable power solutions for both residential and corporate environments, helping enhance the availability, performance, and protection of sensitive electronics, networks, communication systems, and industrial equipment of all scales.
        </p>

        {/* Map Container with Store Pin */}
        <div className="map-frame-box" style={{ marginBottom: '60px', height: '420px', position: 'relative' }}>
          <iframe
            title="Waheed Shah Store Location - Scheme 33 Karachi"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14472.072979069152!2d67.1124618!3d24.9484826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3388701a2b0bb%3A0x6b4ef8d618d3ef1!2sKiran%20Hospital%20Rd%2C%20Sector%2034%20A%20Scheme%2033%2C%20Karachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Floating Store Card Badge on Map (mimicking the storefront overlay in screenshot) */}
          <div style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            background: 'rgba(255, 255, 255, 0.96)',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
            borderRadius: '10px',
            padding: '16px 20px',
            maxWidth: '360px',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '1.5px solid #e11d24'
              }}>
                <img src="/logo.jpg" alt="Waheed Shah" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#111827' }}>
                  Waheed Shah Electric & Solar
                </div>
                <div style={{ fontSize: '0.72rem', color: '#e11d24', fontWeight: 700 }}>
                  Scheme 33 Central Showroom
                </div>
              </div>
            </div>

            <div style={{ fontSize: '0.78rem', color: '#4b5563', lineHeight: 1.5, marginBottom: '10px' }}>
              Shop 1/2, Dawood Pride, Kiran Hospital Road, Sector 34-A, Scheme 33, Karachi.
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
              <a
                href="https://maps.google.com/?q=Shop+1/2+Dawood+Pride+Kiran+Hospital+Road+Sector+34-A+Scheme+33+Karachi"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-red"
                style={{ padding: '6px 12px', fontSize: '0.75rem' }}
              >
                <Navigation size={12} />
                <span>Directions</span>
              </a>

              <a
                href="tel:+923002433833"
                className="btn-dark"
                style={{ padding: '6px 12px', fontSize: '0.75rem' }}
              >
                <Phone size={12} />
                <span>Call Store</span>
              </a>
            </div>
          </div>
        </div>

        {/* 3 Service Columns (Exact match to the 3 pillars in the screenshot) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px',
          textAlign: 'center',
          marginTop: '20px'
        }}>
          {/* Pillar 1 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: '#fff1f2',
              border: '1px solid #fecdd3',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#e11d24',
              marginBottom: '16px'
            }}>
              <Sun size={32} />
            </div>

            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#111827', marginBottom: '8px' }}>
              New Solar Products
            </h3>

            <p style={{ fontSize: '0.88rem', color: '#6b7280', lineHeight: 1.5, maxWidth: '280px' }}>
              High-quality solar products to power your home or business efficiently.
            </p>
          </div>

          {/* Pillar 2 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: '#eff6ff',
              border: '1px solid #bfdbfe',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#2563eb',
              marginBottom: '16px'
            }}>
              <Wrench size={30} />
            </div>

            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#111827', marginBottom: '8px' }}>
              Repair & Maintenance
            </h3>

            <p style={{ fontSize: '0.88rem', color: '#6b7280', lineHeight: 1.5, maxWidth: '280px' }}>
              Reliable repair and maintenance services to keep your solar systems running smoothly.
            </p>
          </div>

          {/* Pillar 3 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: '#f0fdf4',
              border: '1px solid #bbf7d0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#16a34a',
              marginBottom: '16px'
            }}>
              <Building size={30} />
            </div>

            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#111827', marginBottom: '8px' }}>
              Solar Installation
            </h3>

            <p style={{ fontSize: '0.88rem', color: '#6b7280', lineHeight: 1.5, maxWidth: '280px' }}>
              Professional solar installations for seamless, long-lasting energy solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

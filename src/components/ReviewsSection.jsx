import React, { useState } from 'react';
import { 
  Star, 
  CheckCircle2, 
  Quote, 
  ThumbsUp, 
  MessageSquare,
  Facebook,
  ExternalLink
} from 'lucide-react';
import { REVIEWS } from '../data/reviews';

export default function ReviewsSection() {
  const [filter, setFilter] = useState('all');

  return (
    <section id="reviews" className="section-wrapper" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(245, 158, 11, 0.15)',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            padding: '6px 16px',
            borderRadius: '9999px',
            color: '#fbbf24',
            fontWeight: 700,
            fontSize: '0.88rem',
            marginBottom: '16px'
          }}>
            <Star size={15} fill="#fbbf24" strokeWidth={0} />
            <span>4.9 / 5.0 Star Verified Rating (23+ Reviews)</span>
          </div>

          <h2 className="section-title">
            Trusted by Karachi's <span className="gradient-text-gold">Contractors & Engineers</span>
          </h2>
          <p className="section-subtitle">
            Real feedback from verified solar EPC installers, electrical consultants, and industrial facility managers across Scheme 33, Malir, and Karachi.
          </p>
        </div>

        {/* Rating Summary Card */}
        <div className="glass-panel" style={{
          padding: '28px 36px',
          marginBottom: '40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{
              fontSize: '3.2rem',
              fontWeight: 900,
              color: '#fbbf24',
              fontFamily: 'var(--font-display)',
              lineHeight: 1
            }}>
              4.9
            </div>
            <div>
              <div style={{ display: 'flex', gap: '4px', marginBottom: '6px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="#fbbf24" color="#fbbf24" />
                ))}
              </div>
              <div style={{ fontSize: '0.88rem', color: '#cbd5e1', fontWeight: 600 }}>
                Based on 23+ Verified Client & Contractor Reviews
              </div>
              <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                Active presence on Facebook & Google Business Profile
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ fontSize: '0.85rem', padding: '10px 20px' }}
            >
              <Facebook size={16} color="#3b82f6" />
              <span>Visit Official Facebook Page</span>
              <ExternalLink size={13} />
            </a>

            <a
              href="https://wa.me/923002433833?text=Assalam-o-Alaikum,%20I%20would%20like%20to%20leave%20a%20review%20for%20Waheed%20Shah%20Store."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: '0.85rem', padding: '10px 20px' }}
            >
              <MessageSquare size={16} />
              <span>Leave a Review</span>
            </a>
          </div>
        </div>

        {/* Reviews Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {REVIEWS.map((review) => (
            <div 
              key={review.id}
              className="glass-card-interactive"
              style={{
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                {/* Header of review */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #f59e0b, #06b6d4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#000',
                      fontWeight: 800,
                      fontSize: '0.9rem'
                    }}>
                      {review.avatar}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span>{review.author}</span>
                        {review.verified && (
                          <CheckCircle2 size={14} color="#22c55e" title="Verified Client" />
                        )}
                      </div>
                      <div style={{ fontSize: '0.74rem', color: '#94a3b8' }}>
                        {review.role}
                      </div>
                    </div>
                  </div>

                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                    {review.date}
                  </div>
                </div>

                {/* Rating stars & Project tag */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                  <div style={{ display: 'flex', gap: '2px' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} fill="#fbbf24" color="#fbbf24" />
                    ))}
                  </div>
                  <span style={{
                    fontSize: '0.72rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    color: '#38bdf8'
                  }}>
                    {review.project}
                  </span>
                </div>

                {/* Review Text */}
                <p style={{
                  fontSize: '0.88rem',
                  color: '#cbd5e1',
                  lineHeight: 1.6,
                  fontStyle: 'normal'
                }}>
                  "{review.text}"
                </p>
              </div>

              {/* Verified badge */}
              <div style={{
                marginTop: '18px',
                paddingTop: '12px',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.74rem',
                color: '#4ade80'
              }}>
                <CheckCircle2 size={13} />
                <span>Verified Purchase / Project Supply</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

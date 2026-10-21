import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Send, 
  ShoppingCart, 
  Plus, 
  Minus 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function QuoteModal({ isOpen, onClose, cartItems, onRemoveItem, onUpdateQuantity }) {
  const [buyerName, setBuyerName] = useState('');
  const [buyerPhone, setBuyerPhone] = useState('');
  const [siteLocation, setSiteLocation] = useState('Scheme 33, Karachi');

  if (!isOpen) return null;

  const handleSendRFQ = (e) => {
    e.preventDefault();
    confetti({ particleCount: 70, spread: 60 });

    let itemsText = cartItems.map((item, index) => {
      return `${index + 1}. *${item.name}* (Qty: ${item.quantity || 1}) - ${item.wholesalePrice}`;
    }).join('\n');

    const message = encodeURIComponent(
      `*Assalam-o-Alaikum Waheed Shah Electric & Solar,*\n\n` +
      `I would like to request an official Wholesale Quotation for:\n\n` +
      `${itemsText}\n\n` +
      `• *Contractor / Buyer:* ${buyerName || 'Contractor'}\n` +
      `• *Phone:* ${buyerPhone || 'N/A'}\n` +
      `• *Location:* ${siteLocation}\n\n` +
      `Please provide contractor pricing and pickup availability at Dawood Pride, Scheme 33.`
    );

    window.open(`https://wa.me/923002433833?text=${message}`, '_blank');
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 2000,
      backgroundColor: 'rgba(0, 0, 0, 0.65)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '640px',
        maxHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.25)',
        border: '1px solid #e5e7eb'
      }}>
        {/* Header */}
        <div style={{
          padding: '18px 24px',
          borderBottom: '1px solid #e5e7eb',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#0c0c0c',
          color: '#ffffff'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShoppingCart size={20} color="#e11d24" />
            <div style={{ fontSize: '1.15rem', fontWeight: 800 }}>
              Wholesale RFQ Cart ({cartItems.length})
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Body */}
        <div style={{ padding: '24px', overflowY: 'auto', flex: 1 }}>
          {cartItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '30px 0' }}>
              <ShoppingCart size={40} color="#9ca3af" style={{ margin: '0 auto 12px auto' }} />
              <div style={{ fontSize: '1rem', fontWeight: 700, color: '#374151', marginBottom: '6px' }}>
                Your Cart is Empty
              </div>
              <p style={{ fontSize: '0.82rem', color: '#6b7280', marginBottom: '16px' }}>
                Add inverters, solar panels, or cable cuts to get wholesale rates.
              </p>
              <button onClick={onClose} className="btn-red" style={{ fontSize: '0.85rem' }}>
                Browse Products
              </button>
            </div>
          ) : (
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      padding: '12px 14px',
                      backgroundColor: '#f8f9fa',
                      borderRadius: '8px',
                      border: '1px solid #e5e7eb',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '12px'
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#111827' }}>
                        {item.name}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: '#e11d24', fontWeight: 700 }}>
                        {item.wholesalePrice}
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <button
                        onClick={() => onUpdateQuantity(item.id, Math.max(1, (item.quantity || 1) - 1))}
                        style={{
                          width: '26px',
                          height: '26px',
                          borderRadius: '4px',
                          backgroundColor: '#e5e7eb',
                          color: '#111827',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Minus size={12} />
                      </button>

                      <span style={{ fontSize: '0.9rem', fontWeight: 800, width: '20px', textAlign: 'center' }}>
                        {item.quantity || 1}
                      </span>

                      <button
                        onClick={() => onUpdateQuantity(item.id, (item.quantity || 1) + 1)}
                        style={{
                          width: '26px',
                          height: '26px',
                          borderRadius: '4px',
                          backgroundColor: '#e11d24',
                          color: '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Plus size={12} />
                      </button>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        style={{ marginLeft: '8px', color: '#ef4444', background: 'transparent' }}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Form */}
              <form onSubmit={handleSendRFQ} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <input
                    type="text"
                    required
                    placeholder="Your Name / Company"
                    value={buyerName}
                    onChange={(e) => setBuyerName(e.target.value)}
                  />
                  <input
                    type="tel"
                    required
                    placeholder="WhatsApp Phone"
                    value={buyerPhone}
                    onChange={(e) => setBuyerPhone(e.target.value)}
                  />
                </div>

                <input
                  type="text"
                  placeholder="Delivery Location (e.g. Scheme 33, Karachi)"
                  value={siteLocation}
                  onChange={(e) => setSiteLocation(e.target.value)}
                />

                <button
                  type="submit"
                  className="btn-red"
                  style={{ width: '100%', padding: '12px', marginTop: '6px' }}
                >
                  <Send size={16} />
                  <span>Send RFQ to WhatsApp (+92 300 243 3833)</span>
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

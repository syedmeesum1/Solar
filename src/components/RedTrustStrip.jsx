import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function RedTrustStrip() {
  return (
    <div className="red-trust-strip">
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>Power you can trust, performance you can feel.</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <CheckCircle size={17} color="#ffffff" />
        <span>Smarter energy solutions for everyday life.</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <CheckCircle size={17} color="#ffffff" />
        <span>Built for reliability & guaranteed warranty.</span>
      </div>
    </div>
  );
}

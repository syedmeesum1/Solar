import React, { useState, useMemo } from 'react';
import { 
  Zap, 
  Scissors, 
  CheckCircle2, 
  Send, 
  Package, 
  Layers
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CableEstimator({ onAddToCart }) {
  const [voltageType, setVoltageType] = useState('single');
  const [distance, setDistance] = useState(45);
  const [currentAmps, setCurrentAmps] = useState(30);

  const results = useMemo(() => {
    const voltage = voltageType === 'single' ? 220 : 400;
    const powerKW = Math.round((voltage * currentAmps * (voltageType === 'three' ? 1.732 : 1) * 0.9) / 1000 * 10) / 10;

    let gauge = '7/29 (1.5mm²) Single Core Pure Copper';
    let resistancePerKm = 12.1;
    let currentCapacity = 22;

    if (currentAmps <= 15 && distance <= 35) {
      gauge = '3/29 (1.0mm²) Single Core Pure Copper';
      resistancePerKm = 18.1;
      currentCapacity = 15;
    } else if (currentAmps <= 22 && distance <= 50) {
      gauge = '7/29 (1.5mm²) 100% Pure Copper';
      resistancePerKm = 12.1;
      currentCapacity = 22;
    } else if (currentAmps <= 32 && distance <= 60) {
      gauge = '7/36 (2.5mm²) Heavy Duty Copper';
      resistancePerKm = 7.41;
      currentCapacity = 32;
    } else if (currentAmps <= 45 && distance <= 75) {
      gauge = '7/44 (4.0mm²) High Current Pure Copper';
      resistancePerKm = 4.61;
      currentCapacity = 45;
    } else if (currentAmps <= 70) {
      gauge = voltageType === 'three' ? '16mm² 4-Core Armoured Power Cable' : '10mm² Twin Core Cable';
      resistancePerKm = 1.83;
      currentCapacity = 70;
    } else {
      gauge = voltageType === 'three' ? '25mm² - 35mm² 4-Core SWA Feeder' : '16mm² Pure Copper';
      resistancePerKm = 1.15;
      currentCapacity = 105;
    }

    const lengthKm = distance / 1000;
    const dropVolts = Math.round(
      (voltageType === 'single' ? 2 : 1.732) * lengthKm * currentAmps * resistancePerKm * 10
    ) / 10;
    const dropPercentage = Math.round((dropVolts / voltage) * 100 * 10) / 10;
    const isCompliant = dropPercentage <= 2.5;

    return {
      powerKW,
      gauge,
      dropPercentage,
      dropVolts,
      isCompliant,
      currentCapacity
    };
  }, [voltageType, distance, currentAmps]);

  const handleWhatsApp = () => {
    confetti({ particleCount: 50, spread: 60 });
    const text = encodeURIComponent(
      `*Assalam-o-Alaikum Waheed Shah Electric & Solar,*\n\n` +
      `I require a Cable Cutting Quote:\n` +
      `• *Length:* ${distance} Meters\n` +
      `• *Phase:* ${voltageType === 'single' ? 'Single Phase (220V)' : 'Three Phase (400V)'}\n` +
      `• *Current:* ${currentAmps}A (~${results.powerKW}kW)\n` +
      `• *Recommended Gauge:* ${results.gauge}\n` +
      `• *Voltage Drop:* ${results.dropPercentage}%\n\n` +
      `Please confirm stock for custom cutting at Dawood Pride, Scheme 33 store.`
    );
    window.open(`https://wa.me/923002433833?text=${text}`, '_blank');
  };

  return (
    <section id="cable-estimator" className="section-wrapper" style={{ backgroundColor: '#ffffff', borderTop: '1px solid #e5e7eb' }}>
      <div className="container">
        <h2 className="section-title">
          Cable Length & Voltage Drop Estimator
        </h2>
        <div className="red-underline" />
        <p className="section-subtitle">
          Calculate the exact pure copper cable gauge required for your run to prevent voltage drops, and order custom cut lengths from our Scheme 33 warehouse.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px',
          alignItems: 'start'
        }}>
          {/* Controls */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            border: '1px solid #e5e7eb',
            padding: '28px',
            boxShadow: '0 4px 14px rgba(0,0,0,0.05)'
          }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#111827', marginBottom: '18px' }}>
              Electrical Run Parameters
            </h3>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontSize: '0.85rem', color: '#6b7280', display: 'block', marginBottom: '6px' }}>
                Electrical Supply Phase
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                <button
                  onClick={() => setVoltageType('single')}
                  style={{
                    padding: '10px',
                    borderRadius: '6px',
                    backgroundColor: voltageType === 'single' ? '#e11d24' : '#f8f9fa',
                    color: voltageType === 'single' ? '#ffffff' : '#374151',
                    border: '1px solid #e5e7eb',
                    fontWeight: 700,
                    fontSize: '0.88rem'
                  }}
                >
                  Single Phase (220V)
                </button>

                <button
                  onClick={() => setVoltageType('three')}
                  style={{
                    padding: '10px',
                    borderRadius: '6px',
                    backgroundColor: voltageType === 'three' ? '#e11d24' : '#f8f9fa',
                    color: voltageType === 'three' ? '#ffffff' : '#374151',
                    border: '1px solid #e5e7eb',
                    fontWeight: 700,
                    fontSize: '0.88rem'
                  }}
                >
                  Three Phase (400V)
                </button>
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#374151' }}>Distance:</span>
                <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#e11d24', fontFamily: 'var(--font-mono)' }}>
                  {distance} Meters ({Math.round(distance * 3.28)} ft)
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="250"
                step="5"
                value={distance}
                onChange={(e) => setDistance(Number(e.target.value))}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#374151' }}>Current Load:</span>
                <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#111827', fontFamily: 'var(--font-mono)' }}>
                  {currentAmps} Amps (~{results.powerKW} kW)
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="125"
                step="5"
                value={currentAmps}
                onChange={(e) => setCurrentAmps(Number(e.target.value))}
              />
            </div>

            <div style={{ padding: '12px 16px', backgroundColor: '#fff1f2', borderRadius: '8px', border: '1px solid #fecdd3' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#e11d24', marginBottom: '2px' }}>
                Precision Roll Cutting
              </div>
              <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>
                Need exactly {distance} meters? We cut directly from open drums so you don't pay for unused coil remnants.
              </div>
            </div>
          </div>

          {/* Results Box */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            border: '1.5px solid #111827',
            padding: '28px',
            boxShadow: '0 4px 14px rgba(0,0,0,0.06)'
          }}>
            <div style={{
              display: 'inline-block',
              backgroundColor: '#f1f5f9',
              color: '#111827',
              padding: '4px 10px',
              borderRadius: '4px',
              fontSize: '0.75rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              marginBottom: '10px'
            }}>
              Engineering Recommendation
            </div>

            <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#e11d24', marginBottom: '16px' }}>
              {results.gauge}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
              <div style={{ padding: '12px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                <div style={{ fontSize: '0.72rem', color: '#6b7280' }}>Voltage Drop</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 900, color: results.isCompliant ? '#16a34a' : '#dc2626' }}>
                  {results.dropPercentage}% ({results.dropVolts}V)
                </div>
                <div style={{ fontSize: '0.7rem', color: results.isCompliant ? '#16a34a' : '#dc2626' }}>
                  {results.isCompliant ? '✓ Within IEC Limit' : '⚠ Exceeds 2.5%'}
                </div>
              </div>

              <div style={{ padding: '12px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                <div style={{ fontSize: '0.72rem', color: '#6b7280' }}>Rated Capacity</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#111827' }}>
                  {results.currentCapacity} Amps
                </div>
                <div style={{ fontSize: '0.7rem', color: '#6b7280' }}>
                  100% Pure Copper
                </div>
              </div>
            </div>

            <button
              onClick={handleWhatsApp}
              className="btn-red"
              style={{ width: '100%', padding: '12px' }}
            >
              <Send size={16} />
              <span>Inquire Custom Cable Cut on WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

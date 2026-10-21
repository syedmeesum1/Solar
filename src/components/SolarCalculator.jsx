import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Sun, 
  BatteryCharging, 
  Cpu, 
  DollarSign, 
  Send, 
  Plus, 
  Minus, 
  Check, 
  FileSpreadsheet
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SolarCalculator({ onAddToCart }) {
  const [calcMode, setCalcMode] = useState('appliances');
  const [systemType, setSystemType] = useState('hybrid');

  const [appliances, setAppliances] = useState({
    ac15: 2,
    ac10: 0,
    fans: 8,
    lights: 15,
    fridge: 1,
    freezer: 1,
    waterMotor: 1,
    machinery: 0,
  });

  const [monthlyUnits, setMonthlyUnits] = useState(850);

  const updateAppliance = (key, delta) => {
    setAppliances(prev => ({
      ...prev,
      [key]: Math.max(0, prev[key] + delta)
    }));
  };

  const calculatedSpecs = useMemo(() => {
    let requiredCapacityKW = 0;

    if (calcMode === 'appliances') {
      const peakWatts = 
        (appliances.ac15 * 1600) +
        (appliances.ac10 * 1100) +
        (appliances.fans * 75) +
        (appliances.lights * 15) +
        (appliances.fridge * 250) +
        (appliances.freezer * 350) +
        (appliances.waterMotor * 850) +
        (appliances.machinery * 2500);

      const dailyKWhNeeded = (peakWatts * 0.65 * 10) / 1000;
      requiredCapacityKW = Math.max(3, Math.ceil(dailyKWhNeeded / 4.2));
    } else {
      requiredCapacityKW = Math.max(3, Math.ceil(monthlyUnits / 130));
    }

    const standardSizes = [3, 5, 6, 8, 10, 12, 15, 20, 25, 30];
    const systemSizeKW = standardSizes.find(s => s >= requiredCapacityKW) || Math.ceil(requiredCapacityKW / 5) * 5;

    const panelWattage = 585;
    const numPanels = Math.ceil((systemSizeKW * 1000) / panelWattage);
    const totalPanelWattage = numPanels * panelWattage;

    const dailyUnits = Math.round(systemSizeKW * 4.3);
    const monthlyGeneratedUnits = dailyUnits * 30;
    const monthlySavingsPKR = Math.round(monthlyGeneratedUnits * 68);

    const phaseType = systemSizeKW >= 10 ? 'Three-Phase 400V' : 'Single-Phase 230V';
    const inverterBrand = systemSizeKW >= 10 ? 'Inverex Nitrox 10kW-3Ph / Knox 15kW' : 'Inverex Nitrox 3.6kW - 5.6kW Hybrid';

    let batteryConfig = '1x 51.2V 100Ah LiFePO4 Lithium Wallmount';
    if (systemSizeKW >= 10) {
      batteryConfig = '2x 51.2V 100Ah (10.24kWh) Lithium Bank';
    }

    return {
      systemSizeKW,
      numPanels,
      panelWattage,
      totalPanelWattage,
      dailyUnits,
      monthlyGeneratedUnits,
      monthlySavingsPKR,
      phaseType,
      inverterBrand,
      batteryConfig
    };
  }, [calcMode, appliances, monthlyUnits, systemType]);

  const handleWhatsAppQuote = () => {
    confetti({ particleCount: 70, spread: 60 });
    const text = encodeURIComponent(
      `*Assalam-o-Alaikum Waheed Shah Electric & Solar,*\n\n` +
      `I calculated my Solar Load on your website and require wholesale pricing for:\n` +
      `• *System Size:* ${calculatedSpecs.systemSizeKW} kW (${calculatedSpecs.phaseType})\n` +
      `• *Solar Panels:* ${calculatedSpecs.numPanels}x 585W Tier-1 TopCon\n` +
      `• *Inverter:* ${calculatedSpecs.inverterBrand}\n` +
      `• *Battery:* ${calculatedSpecs.batteryConfig}\n` +
      `• *Est. Monthly Savings:* PKR ${calculatedSpecs.monthlySavingsPKR.toLocaleString()} / month\n\n` +
      `Please provide contractor wholesale quotation for Scheme 33 warehouse pickup.`
    );
    window.open(`https://wa.me/923002433833?text=${text}`, '_blank');
  };

  const handleAddBOMToCart = () => {
    confetti({ particleCount: 40 });
    onAddToCart({
      id: `bom-${Date.now()}`,
      name: `${calculatedSpecs.systemSizeKW}kW Solar System Package`,
      wholesalePrice: `Wholesale System Package`,
      moq: 'Complete System',
      category: 'Solar Package'
    });
  };

  return (
    <section id="solar-calculator" className="section-wrapper" style={{ backgroundColor: '#f8f9fa', borderTop: '1px solid #e5e7eb' }}>
      <div className="container">
        <h2 className="section-title">
          Interactive Solar Load Calculator
        </h2>
        <div className="red-underline" />
        <p className="section-subtitle">
          Calculate your recommended solar capacity, panels, inverter rating, and estimated monthly electricity bill savings.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px',
          alignItems: 'start'
        }}>
          {/* Left: Input Box */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            border: '1px solid #e5e7eb',
            padding: '28px',
            boxShadow: '0 4px 14px rgba(0,0,0,0.05)'
          }}>
            {/* Tabs */}
            <div style={{
              display: 'flex',
              backgroundColor: '#f1f5f9',
              borderRadius: '8px',
              padding: '4px',
              marginBottom: '24px'
            }}>
              <button
                onClick={() => setCalcMode('appliances')}
                style={{
                  flex: 1,
                  padding: '9px 12px',
                  borderRadius: '6px',
                  backgroundColor: calcMode === 'appliances' ? '#e11d24' : 'transparent',
                  color: calcMode === 'appliances' ? '#ffffff' : '#374151',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px'
                }}
              >
                <Calculator size={15} />
                <span>By Appliances</span>
              </button>

              <button
                onClick={() => setCalcMode('bill')}
                style={{
                  flex: 1,
                  padding: '9px 12px',
                  borderRadius: '6px',
                  backgroundColor: calcMode === 'bill' ? '#e11d24' : 'transparent',
                  color: calcMode === 'bill' ? '#ffffff' : '#374151',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px'
                }}
              >
                <DollarSign size={15} />
                <span>By Monthly Units</span>
              </button>
            </div>

            {/* Steppers */}
            {calcMode === 'appliances' ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { key: 'ac15', name: '1.5 Ton Inverter AC', watts: '1600W' },
                  { key: 'ac10', name: '1.0 Ton Inverter AC', watts: '1100W' },
                  { key: 'fans', name: 'Ceiling / Inverter Fans', watts: '75W' },
                  { key: 'lights', name: 'LED Lights & Bulbs', watts: '15W' },
                  { key: 'fridge', name: 'Refrigerator (Inverter)', watts: '250W' },
                  { key: 'freezer', name: 'Deep Freezer', watts: '350W' },
                  { key: 'waterMotor', name: '1HP - 2HP Water Motor', watts: '850W' },
                ].map((item) => (
                  <div
                    key={item.key}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '10px 14px',
                      backgroundColor: '#f8f9fa',
                      borderRadius: '8px',
                      border: '1px solid #f1f5f9'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#111827' }}>
                        {item.name}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: '#6b7280' }}>{item.watts}</div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <button
                        onClick={() => updateAppliance(item.key, -1)}
                        style={{
                          width: '30px',
                          height: '30px',
                          borderRadius: '6px',
                          backgroundColor: '#e5e7eb',
                          color: '#111827',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Minus size={14} />
                      </button>

                      <span style={{ fontSize: '1rem', fontWeight: 800, width: '20px', textAlign: 'center', color: '#111827' }}>
                        {appliances[item.key]}
                      </span>

                      <button
                        onClick={() => updateAppliance(item.key, 1)}
                        style={{
                          width: '30px',
                          height: '30px',
                          borderRadius: '6px',
                          backgroundColor: '#e11d24',
                          color: '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ padding: '15px 0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '12px' }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#374151' }}>Monthly Units:</span>
                  <span style={{ fontSize: '1.6rem', fontWeight: 900, color: '#e11d24', fontFamily: 'var(--font-mono)' }}>
                    {monthlyUnits} <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>kWh</span>
                  </span>
                </div>

                <input
                  type="range"
                  min="300"
                  max="4000"
                  step="50"
                  value={monthlyUnits}
                  onChange={(e) => setMonthlyUnits(Number(e.target.value))}
                  style={{ width: '100%', marginBottom: '20px' }}
                />

                <div style={{ padding: '14px', backgroundColor: '#fff1f2', borderRadius: '8px', border: '1px solid #fecdd3' }}>
                  <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>Estimated Current Monthly Bill:</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#e11d24' }}>
                    ~Rs {(monthlyUnits * 68).toLocaleString()} / month
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right: Recommendation Result Box */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            border: '1.5px solid #e11d24',
            padding: '28px',
            boxShadow: '0 8px 24px rgba(225, 29, 36, 0.08)'
          }}>
            <div style={{
              display: 'inline-block',
              backgroundColor: '#fff1f2',
              color: '#e11d24',
              padding: '4px 10px',
              borderRadius: '4px',
              fontSize: '0.75rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              marginBottom: '10px'
            }}>
              Recommended Setup
            </div>

            <div style={{ fontSize: '1.7rem', fontWeight: 900, color: '#111827', marginBottom: '18px' }}>
              {calculatedSpecs.systemSizeKW} kW <span style={{ color: '#e11d24' }}>Solar System</span>
            </div>

            {/* Bill of materials breakdown */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
              <div style={{ padding: '12px', backgroundColor: '#f8f9fa', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Sun size={20} color="#e11d24" />
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#111827' }}>
                    {calculatedSpecs.numPanels}x 585W Solar Panels
                  </div>
                  <div style={{ fontSize: '0.74rem', color: '#6b7280' }}>
                    Total PV: {calculatedSpecs.totalPanelWattage}W (Tier-1 Bifacial)
                  </div>
                </div>
              </div>

              <div style={{ padding: '12px', backgroundColor: '#f8f9fa', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Cpu size={20} color="#2563eb" />
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#111827' }}>
                    {calculatedSpecs.systemSizeKW}kW Inverter ({calculatedSpecs.phaseType})
                  </div>
                  <div style={{ fontSize: '0.74rem', color: '#6b7280' }}>
                    {calculatedSpecs.inverterBrand}
                  </div>
                </div>
              </div>

              <div style={{ padding: '12px', backgroundColor: '#f8f9fa', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <BatteryCharging size={20} color="#16a34a" />
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#111827' }}>
                    Lithium Energy Storage
                  </div>
                  <div style={{ fontSize: '0.74rem', color: '#6b7280' }}>
                    {calculatedSpecs.batteryConfig}
                  </div>
                </div>
              </div>
            </div>

            {/* Savings Box */}
            <div style={{
              padding: '14px',
              backgroundColor: '#f0fdf4',
              borderRadius: '8px',
              border: '1px solid #bbf7d0',
              marginBottom: '20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <div style={{ fontSize: '0.74rem', color: '#16a34a', fontWeight: 700 }}>Estimated Monthly Savings</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#166534' }}>
                  Rs {calculatedSpecs.monthlySavingsPKR.toLocaleString()} / mo
                </div>
              </div>
              <div style={{ fontSize: '0.82rem', color: '#15803d', fontWeight: 700 }}>
                ~{calculatedSpecs.dailyUnits} Units/Day
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button
                onClick={handleWhatsAppQuote}
                className="btn-red"
                style={{ width: '100%', padding: '12px' }}
              >
                <Send size={16} />
                <span>Get Official Wholesale BOM on WhatsApp</span>
              </button>

              <button
                onClick={handleAddBOMToCart}
                className="btn-dark"
                style={{ width: '100%', padding: '10px' }}
              >
                <FileSpreadsheet size={16} />
                <span>Add Package to RFQ Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

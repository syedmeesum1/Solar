export const CATEGORIES = [
  { id: 'all', name: 'All Wholesale Items', icon: 'Layers' },
  { id: 'solar-panels', name: 'Solar Panels (Tier-1)', icon: 'Sun' },
  { id: 'inverters', name: 'Inverters & Hybrids', icon: 'Cpu' },
  { id: 'batteries', name: 'Lithium & Tubular Batteries', icon: 'BatteryCharging' },
  { id: 'cables', name: 'Pure Copper Cables & Wires', icon: 'Zap' },
  { id: 'machinery', name: 'Machinery & Water Pumps', icon: 'Cog' },
  { id: 'switchgear', name: 'Switchgear & Breakers', icon: 'ShieldCheck' },
];

export const PRODUCTS = [
  // Solar Panels
  {
    id: 'sp-01',
    category: 'solar-panels',
    name: 'Longi Hi-MO X6 Explorer 585W Mono Perc',
    tagline: 'Tier-1 High-Efficiency Module with HPBC Cell Technology',
    moq: '10 Panels (Pallet Available)',
    wholesalePrice: 'PKR 31.50 / Watt (Bulk Wholesale)',
    retailPrice: 'PKR 35.00 / Watt',
    specs: ['585W Maximum Power', '22.6% Efficiency', 'Bifacial Double Glass', '12-Yr Product / 25-Yr Performance'],
    stockStatus: 'In Stock (Scheme 33 Warehouse)',
    badge: 'Best Seller',
    image: '/solar-inverter-pack.jpg'
  },
  {
    id: 'sp-02',
    category: 'solar-panels',
    name: 'Jinko Tiger Neo N-Type 580W Dual-Glass',
    tagline: 'TOPCon Technology with Superior Temperature Coefficient',
    moq: '12 Panels',
    wholesalePrice: 'PKR 32.20 / Watt (Wholesale Tier)',
    retailPrice: 'PKR 36.50 / Watt',
    specs: ['580W N-Type TOPCon', '22.45% Efficiency', 'Bifaciality up to 80%', '30-Yr Linear Power Guarantee'],
    stockStatus: 'In Stock (Direct Pallets)',
    badge: 'Tier-1 Rated',
    image: '/hero-warehouse.jpg'
  },
  {
    id: 'sp-03',
    category: 'solar-panels',
    name: 'Canadian Solar HiKu7 Mono 660W Industrial',
    tagline: 'High Power Module for Commercial Plazas & Industrial Sheds',
    moq: '8 Panels',
    wholesalePrice: 'PKR 31.80 / Watt',
    retailPrice: 'PKR 35.50 / Watt',
    specs: ['660W Ultra-High Output', 'Half-Cut Cell Design', 'Lower LCOE & BOS Cost', 'Heavy Wind/Snow Load Tested'],
    stockStatus: 'Limited Stock',
    badge: 'Commercial',
    image: '/solar-inverter-pack.jpg'
  },

  // Inverters
  {
    id: 'inv-01',
    category: 'inverters',
    name: 'Inverex Nitrox 10kW On-Grid / Hybrid Inverter',
    tagline: 'Dual MPPT, IP65 Waterproof, Built-in Smart Wi-Fi Monitoring',
    moq: '1 Unit',
    wholesalePrice: 'PKR 445,000 (Contractor Rate)',
    retailPrice: 'PKR 490,000',
    specs: ['10,000W Continuous Output', 'Dual MPPT Trackers', '48V Battery Compatibility', '5-Year Official Brand Warranty'],
    stockStatus: 'In Stock',
    badge: 'Top Contractor Choice',
    image: '/solar-inverter-pack.jpg'
  },
  {
    id: 'inv-02',
    category: 'inverters',
    name: 'Growatt SPF 6000 ES Plus Off-Grid / Hybrid',
    tagline: '6kW 48V Pure Sine Wave Inverter with Parallel Capability',
    moq: '1 Unit',
    wholesalePrice: 'PKR 275,000',
    retailPrice: 'PKR 310,000',
    specs: ['6000W Pure Sine Wave', 'Submersible PV Input 450V', 'RGB Status Ring Light', 'Parallel up to 6 Units'],
    stockStatus: 'In Stock',
    badge: 'High Demand',
    image: '/solar-inverter-pack.jpg'
  },
  {
    id: 'inv-03',
    category: 'inverters',
    name: 'Knox Krypton 15kW 3-Phase Industrial Solar Inverter',
    tagline: 'Commercial Grade Hybrid Inverter for Plazas & Factories',
    moq: '1 Unit',
    wholesalePrice: 'PKR 620,000 (Bulk Quotation)',
    retailPrice: 'PKR 685,000',
    specs: ['15kW Three-Phase 400V', 'Dual MPPT Tracker (30A PV)', 'Smart Load Shedding & Zero Export', 'IP65 Cast Aluminum Casing'],
    stockStatus: 'In Stock (Scheme 33)',
    badge: 'Industrial 3-Phase',
    image: '/solar-inverter-pack.jpg'
  },

  // Batteries
  {
    id: 'bat-01',
    category: 'batteries',
    name: 'Narada 48V 100Ah (4.8kWh) LiFePO4 Lithium Battery',
    tagline: 'Heavy Duty Wall-Mounted Solar Storage with Smart BMS',
    moq: '1 Unit',
    wholesalePrice: 'PKR 340,000 (Wholesale)',
    retailPrice: 'PKR 380,000',
    specs: ['6,000+ Deep Cycles at 80% DoD', 'Smart CAN/RS485 Communication', 'Built-in Protection BMS', '10-Year Expected Design Life'],
    stockStatus: 'In Stock',
    badge: 'Zero Maintenance',
    image: '/solar-inverter-pack.jpg'
  },
  {
    id: 'bat-02',
    category: 'batteries',
    name: 'Phoenix TX-3000 Heavy Tubular Solar Battery',
    tagline: 'Deep Cycle Lead-Acid Battery for Prolonged Power Backups',
    moq: '2 Units (Wholesale Pairs)',
    wholesalePrice: 'PKR 68,000 / unit',
    retailPrice: 'PKR 76,000',
    specs: ['250Ah High Reserve Capacity', 'Tall Tubular Plate Technology', 'High Temperature Tolerant', '1-Year Factory Replacement Warranty'],
    stockStatus: 'In Stock',
    badge: 'Reliable Workhorse',
    image: '/solar-inverter-pack.jpg'
  },

  // Cables & Wires
  {
    id: 'cbl-01',
    category: 'cables',
    name: 'Pakistan Cables 7/29 Single Core 100% Pure Copper',
    tagline: 'Standard Domestic & Solar Distribution Wire (90-Meter Factory Coil)',
    moq: '3 Coils (90m each)',
    wholesalePrice: 'PKR 17,200 / 90m Coil',
    retailPrice: 'PKR 19,500',
    specs: ['99.99% ETP Pure Copper', 'Flame Retardant PVC Insulation', 'BSS 6004 / IEC Certified', 'Full 90-Meter Verified Roll'],
    stockStatus: 'In Stock (High Volume)',
    badge: '100% Pure Copper',
    image: '/hero-warehouse.jpg'
  },
  {
    id: 'cbl-02',
    category: 'cables',
    name: 'Fast Cables 16mm² 4-Core Armoured Copper Power Cable',
    tagline: 'Underground & Heavy Main Distribution Line for 3-Phase Systems',
    moq: 'Custom Cutting (Per Meter)',
    wholesalePrice: 'PKR 3,450 / Meter (B2B Cutting)',
    retailPrice: 'PKR 3,900 / Meter',
    specs: ['Steel Wire Armoured (SWA)', 'Heavy Duty XLPE/PVC', 'Zero Line-Loss Transmission', 'Meter-Stamped Precision Cable'],
    stockStatus: 'Custom Cutting in Store',
    badge: 'Heavy Industrial',
    image: '/hero-warehouse.jpg'
  },
  {
    id: 'cbl-03',
    category: 'cables',
    name: 'Solar DC Cable 4mm² / 6mm² Tinned Copper (Double Insulated)',
    tagline: 'UV & Weatherproof Specialized PV Cable for Outdoor Arrays',
    moq: '100 Meter Drum / Roll',
    wholesalePrice: 'PKR 28,500 / 100m Roll (6mm²)',
    retailPrice: 'PKR 33,000',
    specs: ['Tinned Annealed Copper Strands', 'Dual Wall XLPO Cross-Linked', 'UV, Ozone & Hydrolysis Resistant', 'Rated 1500V DC'],
    stockStatus: 'In Stock',
    badge: 'PV Certified',
    image: '/hero-warehouse.jpg'
  },

  // Machinery & Pumps
  {
    id: 'mach-01',
    category: 'machinery',
    name: 'Siemens 7.5HP (5.5kW) 3-Phase Cast Iron Induction Motor',
    tagline: '1450 RPM High Torque Electric Motor for Industrial Drives & Mills',
    moq: '1 Unit',
    wholesalePrice: 'PKR 145,000',
    retailPrice: 'PKR 168,000',
    specs: ['5.5kW / 7.5HP 3-Phase 380-415V', '100% Copper Winding Class F', 'Cast Iron Rigid Housing (IP55)', 'Heavy Duty Continuous S1 Duty'],
    stockStatus: 'In Stock',
    badge: 'Industrial Grade',
    image: '/machinery-motor.jpg'
  },
  {
    id: 'mach-02',
    category: 'machinery',
    name: 'Pedrollo Style 2HP Stainless Steel Submersible Borehole Pump',
    tagline: 'High Head Deep Well Water Extraction for Farms & High-Rise Plazas',
    moq: '1 Unit',
    wholesalePrice: 'PKR 85,000',
    retailPrice: 'PKR 98,000',
    specs: ['2.0 HP Oil-Cooled Copper Motor', 'Multi-Stage Stainless Impellers', 'Maximum Head: 320 Feet', 'Thermal Overload Protection'],
    stockStatus: 'In Stock',
    badge: 'Scheme 33 Borehole Special',
    image: '/machinery-motor.jpg'
  },

  // Switchgear & Breakers
  {
    id: 'sw-01',
    category: 'switchgear',
    name: 'Schneider Electric Compact NSX 100A 3P MCCB Breaker',
    tagline: 'Moulded Case Circuit Breaker for Commercial Main Distribution Boards',
    moq: '2 Units',
    wholesalePrice: 'PKR 34,500',
    retailPrice: 'PKR 39,500',
    specs: ['100 Amp Three Phase', '36kA Breaking Capacity', 'Thermal-Magnetic Trip Unit', 'Genuine Hologram Verification'],
    stockStatus: 'In Stock',
    badge: 'Certified Genuine',
    image: '/machinery-motor.jpg'
  },
  {
    id: 'sw-02',
    category: 'switchgear',
    name: 'Solar DC Surge Protection Device (SPD Class II 1000V DC 40kA)',
    tagline: 'Crucial Lightning & High-Voltage Surge Arrestor for Solar Inverters',
    moq: '5 Units',
    wholesalePrice: 'PKR 3,200 / Unit (Wholesale)',
    retailPrice: 'PKR 4,200',
    specs: ['1000V DC Max Continuous Operating', '40kA Discharge Current (8/20μs)', 'Pluggable Cartridge Module', 'DIN-Rail Mount'],
    stockStatus: 'In Stock',
    badge: 'Solar Safety Essential',
    image: '/machinery-motor.jpg'
  }
];

export const WHOLESALE_TICKER = [
  { item: 'Longi 585W TopCon', price: 'PKR 31.50/W', change: '-0.30', status: 'Wholesale Pallets' },
  { item: 'Jinko 580W N-Type', price: 'PKR 32.20/W', change: '+0.15', status: 'High Demand' },
  { item: 'Inverex Nitrox 10kW', price: 'PKR 445,000', change: 'Stable', status: 'Ready Dispatch' },
  { item: 'Growatt 6kW SPF', price: 'PKR 275,000', change: '-3,000', status: 'Fresh Stock' },
  { item: 'Pakistan Cables 7/29', price: 'PKR 17,200/coil', change: 'Stable', status: '99.9% Copper' },
  { item: 'Narada 48V 100Ah LiFePO4', price: 'PKR 340,000', change: '-5,000', status: 'B2B Promo' },
  { item: 'Fast Cables 16mm² 4-Core', price: 'PKR 3,450/m', change: 'Stable', status: 'Custom Cuts' }
];

export const CONTRACTOR_PERKS = [
  {
    title: 'Multi-Tier B2B Khata (Ledger)',
    description: 'Registered contractors and electricians receive rolling 15 to 30 days khata credit limits with transparent monthly digital statements.',
    icon: 'CreditCard'
  },
  {
    title: 'Rapid Scheme 33 & Karachi Dispatch',
    description: 'Same-day jobsite delivery to Scheme 33, Malir Cantt, Gulshan-e-Iqbal, Bahria Town, DHA Karachi, and bulk freight throughout Sindh.',
    icon: 'Truck'
  },
  {
    title: '100% Pure Copper & Tier-1 Warranty',
    description: 'Every cable roll is verified pure annealed copper and every solar module comes with factory test reports and genuine brand warranty.',
    icon: 'Award'
  },
  {
    title: 'Digital Cable Roll Cutting Tracker',
    description: 'Order exact custom meter cuts without paying for leftover waste coils, tracked directly via our internal Wholesale ERP software.',
    icon: 'Scissors'
  }
];

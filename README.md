# Waheed Shah Electric & Solar — Developer Documentation

> **Comprehensive B2B Digital Transformation Suite for Electrical, Machinery & Solar Wholesale**  
> *Scheme 33, Karachi, Pakistan*  
> **Prepared by:** TechmireTeam  
> **Repository:** [https://github.com/syedmeesum1/Solar](https://github.com/syedmeesum1/Solar)

---

## 1. Project Overview

**Waheed Shah Electric & Solar** is an enterprise-grade B2B web application and engineering tool suite built for Karachi’s leading electrical, machinery, and solar wholesale distributor located in Scheme 33 (Shop 1/2, Dawood Pride, Kiran Hospital Road).

The platform addresses core operational challenges faced by EPC contractors, solar installers, and commercial electricians:
1. **Interactive Solar Load & Sizing Calculator**: Sizing solar PV arrays, inverter capacity, and lithium/tubular battery backup based on appliance load or K-Electric kWh consumption.
2. **Precision Cable Length & Voltage Drop Estimator**: Engineering-grade cable sizing (`7/29`, `7/36`, `16mm²`, `25mm²`, etc.) with voltage drop compliance and remnant cutting tracking.
3. **B2B Product Catalog & RFQ Engine**: Minimum Order Quantity (MOQ) tracking, wholesale tier pricing, and instant WhatsApp quotation generation.
4. **Desktop Wholesale ERP Preview**: Conceptual preview of the upcoming Electron.js + PostgreSQL ERP software for cable roll remnant tracking and contractor credit khata management.

---

## 2. Technology Stack & Dependencies

| Layer | Technology | Details |
| :--- | :--- | :--- |
| **Framework / Core** | React 18.3.1 | Single-Page Application with functional components and hooks |
| **Bundler & Dev Server** | Vite 6.1.0 | Lightning-fast HMR and optimized production bundling |
| **Styling (CSS)** | Handcrafted Modern CSS | Custom design system matching the red, black, and crisp white theme |
| **Icons** | Lucide React 0.475.0 | High-performance, tree-shakable SVG icon library |
| **Celebrations / FX** | Canvas Confetti 1.9.4 | Micro-interactions for RFQ transmissions and calculator triggers |
| **Deployment Target** | Node 18+ / Modern Browsers | Edge-ready (Vercel, Netlify, or Static Nginx Hosting) |

---

## 3. Directory & File Structure

```text
Solar/
├── public/                       # Static public assets
│   ├── logo.jpg                  # Official Waheed Shah metallic brand logo
│   ├── hero-warehouse.jpg        # Showroom warehouse photography
│   ├── solar-inverter-pack.jpg   # Solar inverters & lithium storage pack
│   └── machinery-motor.jpg       # Induction motor & industrial machinery
├── src/
│   ├── components/               # Modular UI & Feature Components
│   │   ├── Navbar.jsx            # Top black header with nowrap desktop menu & RFQ counter
│   │   ├── Hero.jsx              # Studio showcase hero slider with red/dark typography
│   │   ├── SolarJourneyCategories.jsx # 4 circular categories (Domestic, Commercial, Lithium, Panels)
│   │   ├── ProductCatalog.jsx    # Filterable B2B catalog with red price tags & pagination
│   │   ├── RedTrustStrip.jsx     # Full-width crimson brand guarantee bar
│   │   ├── SolarCalculator.jsx   # Contractor-grade load & capacity calculator
│   │   ├── CableEstimator.jsx    # Voltage drop & pure copper cable sizing tool
│   │   ├── WholesaleERPSection.jsx # Electron.js ERP & Cable remnant tracker preview
│   │   ├── ContactLocation.jsx   # Scheme 33 Google Map & 3 service pillars
│   │   ├── Footer.jsx            # Black footer + red bottom payment badges bar
│   │   └── QuoteModal.jsx        # B2B RFQ Cart modal with WhatsApp deep-linking
│   ├── data/
│   │   ├── products.js           # Catalog specs, wholesale rates, and ticker data
│   │   └── reviews.js            # Verified 4.9★ contractor reviews & store metrics
│   ├── App.jsx                   # Root layout, state management, & scroll observer
│   ├── index.css                 # Master design system, color tokens, and animation keyframes
│   └── main.jsx                  # React DOM root entry point
├── .gitignore                    # Git exclusion rules
├── index.html                    # HTML5 shell with Google Fonts & SEO meta tags
├── package.json                  # Project manifest and scripts
├── vite.config.js                # Vite build and dev server configuration
└── README.md                     # Developer documentation (this document)
```

---

## 4. Key Architectural Modules

### 4.1. Solar Load Calculator (`SolarCalculator.jsx`)
* **Calculation Engine**:
  * **Appliance Mode**: Computes peak simultaneous wattage using standard Pakistani equipment ratings:
    * 1.5 Ton Inverter AC: $1600\text{ W}$
    * 1.0 Ton Inverter AC: $1100\text{ W}$
    * DC Inverter Fan: $75\text{ W}$
    * LED Bulbs: $15\text{ W}$
    * Refrigerator / Deep Freezer: $250\text{ W} - 350\text{ W}$
    * Water Pump (1HP - 2HP): $850\text{ W} - 1500\text{ W}$
  * **Daily Energy Formula**: Sized based on Karachi solar irradiance ($\approx 4.3$ peak sun hours/day) with a diversity factor of $0.65$:
    $$\text{Capacity (kW)} = \max\left(3, \left\lceil \frac{\text{Daily kWh}}{4.2} \right\rceil\right)$$
  * **Bill Mode**: Maps monthly units (kWh) directly to capacity using $130\text{ kWh/month per kW}$ generation baseline.
  * **Bill of Materials (BOM) Export**: Constructs an itemized WhatsApp message with exact 585W panel counts, inverter capacity, battery storage sizing, and monthly PKR savings.

### 4.2. Cable Length & Voltage Drop Estimator (`CableEstimator.jsx`)
* **Voltage Drop Physics**:
  * Computes single-phase ($220\text{V}$) and three-phase ($400\text{V}$) voltage loss across run length:
    $$V_{\text{drop (Single Phase)}} = \frac{2 \times L \times I \times R}{1000}$$
    $$V_{\text{drop (Three Phase)}} = \frac{\sqrt{3} \times L \times I \times R}{1000}$$
  * Matches wire sizes against pure copper resistance constants:
    * `7/29` ($1.5\text{ mm}^2$): $12.1\ \Omega/\text{km}$
    * `7/36` ($2.5\text{ mm}^2$): $7.41\ \Omega/\text{km}$
    * `7/44` ($4.0\text{ mm}^2$): $4.61\ \Omega/\text{km}$
    * `16mm² 4-Core`: $1.83\ \Omega/\text{km}$
    * `25mm² 4-Core`: $1.15\ \Omega/\text{km}$
  * Evaluates against international IEC & NEPRA $2.5\%$ threshold standard.

### 4.3. B2B RFQ Cart & State Flow (`App.jsx` + `QuoteModal.jsx`)
* State is managed in root `App.jsx` and passed down to interactive cards.
* When adding to cart, items are deduplicated and quantities incremented.
* **WhatsApp Deep Linking**: Encodes all cart contents into standard RFC 3986 format and routes directly to the wholesale desk (`+92 300 243 3833`).

### 4.4. Layout & Design System (`index.css`)
* **Color Palette Tokens**:
  * `--primary-red`: `#e11d24` (Corporate Crimson / Inverex Accent)
  * `--primary-black`: `#0a0a0a` (Solid Navigation & Footer)
  * `--bg-white`: `#ffffff` (Clean Studio Background)
  * `--bg-light`: `#f8f9fa` (Section Contrast)
  * `--border-light`: `#e5e7eb` (Subtle Grid Separators)
* **Responsive Breakpoints**:
  * Desktop Navigation is locked to `white-space: nowrap` and triggers at `1040px`.
  * Screens $< 1040\text{px}$ seamlessly switch to the mobile toggle drawer to prevent horizontal text wrapping.

---

## 5. Local Development Setup

### Prerequisites
* **Node.js**: v18.0.0 or later (Tested on Node v24.17.0)
* **npm**: v9.0.0 or later (Tested on npm 11.13.0)
* **Git**: Installed and configured

### Installation & Launch

```bash
# 1. Clone the repository
git clone https://github.com/syedmeesum1/Solar.git

# 2. Enter workspace directory
cd Solar

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev
```

The application will run locally at:
👉 **`http://localhost:3000/`**

---

## 6. Build & Production Deployment

### Production Compilation
To generate an optimized, minified production build:

```bash
npm run build
```

The build output will be emitted into `/dist`:
* `dist/index.html` (Optimized entry HTML)
* `dist/assets/index-*.css` (Compressed stylesheet)
* `dist/assets/index-*.js` (Minified JavaScript bundle with code-splitting)

### Local Preview of Production Build
```bash
npm run preview
```

### Deployment Targets
* **Vercel**: Run `npx vercel` or connect the GitHub repository for automatic CI/CD on the `main` branch.
* **Netlify**: Set build command to `npm run build` and publish directory to `dist`.
* **Traditional Linux / Nginx VPS**:
  Copy the contents of `dist/` to `/var/www/html/` and ensure standard fallback routing is enabled in Nginx:
  ```nginx
  location / {
      try_files $uri $uri/ /index.html;
  }
  ```

---

## 7. Data Models & Configuration Reference

### Products (`src/data/products.js`)
```javascript
{
  id: 'sp-01',
  category: 'solar-panels',
  name: 'Longi Hi-MO X6 Explorer 585W Mono Perc',
  tagline: 'Tier-1 High-Efficiency Module with HPBC Cell Technology',
  moq: '10 Panels (Pallet Available)',
  wholesalePrice: 'PKR 31.50 / Watt (Bulk Wholesale)',
  retailPrice: 'PKR 35.00 / Watt',
  specs: ['585W Maximum Power', '22.6% Efficiency', 'Bifacial Double Glass'],
  stockStatus: 'In Stock (Scheme 33 Warehouse)',
  badge: 'Best Seller',
  image: '/solar-inverter-pack.jpg'
}
```

### Reviews (`src/data/reviews.js`)
```javascript
{
  id: 1,
  author: 'Engr. Tariq Mehmood',
  role: 'Lead Solar EPC Contractor, Apex Solar Solutions',
  rating: 5,
  date: '2 weeks ago',
  project: '45kW Commercial Solar Project (Sector 34 Scheme 33)',
  text: 'Waheed Shah Electric & Solar is our go-to wholesale supplier...',
  avatar: 'TM',
  verified: true
}
```

---

## 8. Maintainer & Client Sign-Off

* **Client Business**: Waheed Shah Electric & Solar
* **Showroom Hub**: Shop 1/2, Dawood Pride, Kiran Hospital Road, Sector 34-A, Scheme 33, Karachi, Pakistan
* **Hotline**: +92 300 243 3833
* **Lead Technical Delivery**: TechmireTeam

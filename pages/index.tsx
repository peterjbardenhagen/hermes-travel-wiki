import PinGate from '../components/PinGate';

export default function Home() {
  return (
    <PinGate>
      <div dangerouslySetInnerHTML={{ __html: travelHtml }} />
    </PinGate>
  );
}

// Embedded Japan travel HTML content
const travelHtml = `
<style>
:root {
  --hermes-blue: #1a3a5c;
  --hermes-gold: #c9a84c;
  --hermes-red: #d80a18;
  --hermes-cream: #faf7f0;
  --hermes-dark: #0f172a;
  --hermes-slate: #475569;
}
.travel-body { font-family: 'Georgia', 'Times New Roman', serif; background: var(--hermes-cream); color: var(--hermes-dark); line-height: 1.7; margin: 0; padding: 0; }

/* COVER PAGE */
.travel-cover {
  min-height: 100vh;
  background: linear-gradient(135deg, #0a1628 0%, #1a3a5c 40%, #2d5a8a 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;
  padding: 40px 20px;
  box-sizing: border-box;
}
.travel-cover::before {
  content: '';
  position: absolute;
  top: -50%; left: -50%;
  width: 200%; height: 200%;
  background: radial-gradient(ellipse at center, rgba(201,168,76,0.08) 0%, transparent 70%);
}
.travel-cover-content { position: relative; z-index: 1; max-width: 800px; }
.travel-logo { font-size: 14px; letter-spacing: 6px; text-transform: uppercase; color: var(--hermes-gold); margin-bottom: 20px; }
.travel-logo span { font-size: 28px; letter-spacing: 3px; display: block; margin-top: 8px; font-weight: 700; }
.travel-tagline { font-size: 13px; letter-spacing: 4px; text-transform: uppercase; color: rgba(201,168,76,0.8); margin-bottom: 60px; }
.travel-cover h1 { font-size: clamp(32px, 5vw, 56px); font-weight: 400; line-height: 1.2; margin-bottom: 20px; }
.travel-cover h1 em { font-style: italic; color: var(--hermes-gold); }
.travel-cover .subtitle { font-size: 20px; color: rgba(255,255,255,0.8); margin-bottom: 50px; font-style: italic; }
.travel-cover .details { display: flex; gap: 40px; justify-content: center; flex-wrap: wrap; font-size: 13px; letter-spacing: 2px; text-transform: uppercase; color: rgba(255,255,255,0.6); }
.travel-cover .details span { color: var(--hermes-gold); }
.travel-credit { margin-top: 40px; font-size: 11px; color: rgba(255,255,255,0.4); letter-spacing: 2px; }

/* SECTIONS */
.travel-section { max-width: 1100px; margin: 0 auto; padding: 80px 40px; box-sizing: border-box; }
.travel-section h2 { font-size: 36px; color: var(--hermes-blue); margin-bottom: 8px; font-weight: 400; }
.travel-section h2 em { font-style: italic; color: var(--hermes-gold); }
.travel-section .subtitle { font-size: 14px; letter-spacing: 3px; text-transform: uppercase; color: var(--hermes-slate); margin-bottom: 40px; }
.travel-divider { width: 60px; height: 2px; background: var(--hermes-gold); margin: 20px 0 40px; }

/* TRIP OVERVIEW */
.overview-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 30px; margin-bottom: 60px; }
.overview-card { background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 20px rgba(0,0,0,0.06); text-align: center; }
.overview-card .icon { font-size: 36px; margin-bottom: 12px; }
.overview-card h3 { font-size: 15px; color: var(--hermes-slate); text-transform: uppercase; letter-spacing: 2px; margin-bottom: 8px; }
.overview-card p { font-size: 18px; color: var(--hermes-dark); font-weight: 600; }

/* ITINERARY OPTIONS */
.itinerary-option { background: white; border-radius: 12px; margin-bottom: 40px; overflow: hidden; box-shadow: 0 4px 30px rgba(0,0,0,0.08); }
.itinerary-header { padding: 30px 40px; color: white; }
.itinerary-header.option-1 { background: linear-gradient(135deg, #1a3a5c, #2d5a8a); }
.itinerary-header.option-2 { background: linear-gradient(135deg, #2d5a8a, #4a7c9b); }
.itinerary-header.option-3 { background: linear-gradient(135deg, #c9a84c, #d4b96a); }
.itinerary-header h3 { font-size: 24px; margin-bottom: 5px; }
.itinerary-header p { font-size: 14px; opacity: 0.8; letter-spacing: 1px; }
.itinerary-body { padding: 40px; }
.price-badge { display: inline-block; background: var(--hermes-cream); color: var(--hermes-blue); padding: 8px 20px; border-radius: 20px; font-size: 14px; font-weight: 700; margin-bottom: 20px; }

/* DAY-BY-DAY */
.day-card { display: flex; gap: 30px; padding: 25px 0; border-bottom: 1px solid #e2e8f0; }
.day-card:last-child { border-bottom: none; }
.day-num { flex-shrink: 0; width: 50px; height: 50px; background: var(--hermes-blue); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 18px; font-weight: 700; }
.day-content h4 { font-size: 18px; color: var(--hermes-dark); margin-bottom: 5px; }
.day-content .location { font-size: 12px; color: var(--hermes-gold); text-transform: uppercase; letter-spacing: 2px; margin-bottom: 8px; }
.day-content p { font-size: 14px; color: var(--hermes-slate); }
.day-content .tags { display: flex; gap: 8px; margin-top: 10px; flex-wrap: wrap; }
.day-content .tag { font-size: 11px; padding: 3px 10px; background: var(--hermes-cream); border-radius: 12px; color: var(--hermes-blue); }

/* FLIGHTS */
.flight-card { background: white; border-radius: 8px; padding: 30px; margin-bottom: 20px; box-shadow: 0 2px 15px rgba(0,0,0,0.05); }
.flight-card h4 { font-size: 18px; color: var(--hermes-blue); margin-bottom: 15px; display: flex; align-items: center; gap: 10px; }
.flight-route { display: flex; align-items: center; gap: 15px; font-size: 16px; margin-bottom: 10px; }
.flight-city { text-align: center; }
.flight-city .code { font-size: 28px; font-weight: 700; color: var(--hermes-blue); }
.flight-city .name { font-size: 11px; color: var(--hermes-slate); text-transform: uppercase; letter-spacing: 1px; }
.flight-arrow { flex: 1; text-align: center; color: var(--hermes-gold); }
.flight-arrow .line { height: 2px; background: var(--hermes-gold); position: relative; margin: 0 10px; }
.flight-arrow .line::after { content: '✈'; position: absolute; top: -10px; right: -5px; color: var(--hermes-gold); font-size: 18px; }
.flight-details { font-size: 13px; color: var(--hermes-slate); margin-top: 15px; padding-top: 15px; border-top: 1px solid #e2e8f0; }
.flight-details strong { color: var(--hermes-dark); }

/* HOTELS */
.hotel-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 25px; }
.hotel-card { background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 15px rgba(0,0,0,0.05); }
.hotel-card-header { background: var(--hermes-blue); color: white; padding: 20px; }
.hotel-card-header h4 { font-size: 16px; margin-bottom: 3px; }
.hotel-card-header .rating { font-size: 12px; opacity: 0.8; }
.hotel-card-body { padding: 20px; }
.hotel-card-body .price { font-size: 22px; font-weight: 700; color: var(--hermes-gold); margin-bottom: 5px; }
.hotel-card-body .price-sub { font-size: 12px; color: var(--hermes-slate); margin-bottom: 12px; }
.hotel-card-body p { font-size: 13px; color: var(--hermes-slate); }
.hotel-card-body .highlight { display: inline-block; font-size: 11px; padding: 3px 8px; background: #e8f4e8; border-radius: 10px; color: #166534; margin-top: 8px; margin-right: 4px; }

/* SUGGESTIONS */
.suggestions-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; }
.suggestion { background: white; border-radius: 8px; padding: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.04); border-left: 3px solid var(--hermes-gold); }
.suggestion .number { font-size: 28px; font-weight: 700; color: var(--hermes-gold); line-height: 1; }
.suggestion h4 { font-size: 15px; color: var(--hermes-blue); margin: 8px 0; }
.suggestion p { font-size: 12px; color: var(--hermes-slate); }
.suggestion .for { font-size: 10px; text-transform: uppercase; letter-spacing: 2px; color: var(--hermes-gold); margin-top: 8px; }

/* QUESTIONS */
.question-list { list-style: none; counter-reset: questions; padding: 0; }
.question-list li { counter-increment: questions; padding: 18px 0 18px 60px; position: relative; border-bottom: 1px solid #f1f5f9; font-size: 15px; }
.question-list li::before { content: counter(questions); position: absolute; left: 0; top: 15px; width: 36px; height: 36px; background: var(--hermes-cream); color: var(--hermes-blue); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 700; }

/* FOOTER */
.travel-footer {
  background: var(--hermes-dark);
  color: white;
  text-align: center;
  padding: 60px 40px;
}
.travel-footer .logo { color: var(--hermes-gold); font-size: 14px; letter-spacing: 6px; text-transform: uppercase; margin-bottom: 15px; }
.travel-footer .logo span { font-size: 24px; display: block; margin-top: 5px; letter-spacing: 3px; }
.travel-footer p { color: rgba(255,255,255,0.5); font-size: 13px; letter-spacing: 1px; }

/* TRAVEL IMAGES */
.travel-hero-image {
  width: 100%;
  height: 420px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 8px 40px rgba(0,0,0,0.12);
  margin: 0 auto;
  display: block;
}
.travel-section-image {
  width: 100%;
  height: 360px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.1);
  margin: 30px 0;
}
.travel-section-image.tall { height: 480px; }
.travel-section-image.wide { height: 300px; }
.travel-image-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 30px 0;
}
.travel-image-grid img {
  width: 100%;
  height: 280px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
}
.travel-image-grid.single {
  grid-template-columns: 1fr;
}
.travel-image-grid.single img {
  height: 420px;
}
.travel-image-caption {
  text-align: center;
  font-size: 12px;
  color: var(--hermes-slate);
  margin-top: 8px;
  font-style: italic;
  letter-spacing: 1px;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .overview-grid { grid-template-columns: 1fr; }
  .day-card { flex-direction: column; gap: 15px; }
  .flight-route { flex-direction: column; gap: 10px; }
  .travel-section { padding: 40px 20px; }
  .travel-hero-image { height: 280px; }
  .travel-section-image { height: 240px; }
  .travel-section-image.tall { height: 320px; }
  .travel-image-grid { grid-template-columns: 1fr; }
  .travel-image-grid img { height: 220px; }
}

/* PRINT */
@media print {
  .travel-cover { page-break-after: always; min-height: auto; height: 100vh; }
  .itinerary-option { break-inside: avoid; }
  .travel-section { padding: 40px; }
}
</style>

<div class="travel-body">

<!-- COVER PAGE -->
<div class="travel-cover">
  <div class="travel-cover-content">
    <div class="travel-logo">
      Intelligence × Precision × Care
      <span>HERMES PJB TRAVEL</span>
    </div>
    <div class="travel-tagline">The Travel AI Professionals</div>
    <h1><em>Japan in Bloom</em><br>March 2027</h1>
    <p class="subtitle">A 3-week ultra-comfort proposal for two travellers in their golden years</p>
    <div class="details">
      <div>🗾 <span>Osaka</span> · <span>Tokyo</span> · <span>Kyoto</span> · <span>Hiroshima</span> · <span>Kanazawa</span></div>
      <div>📅 <span>21 Days</span></div>
      <div>⭐ <span>4–5 Star</span></div>
      <div>🏆 <span>Best Value</span></div>
    </div>
  </div>
  <div class="travel-credit">Prepared with ❤ by Hermes AI · June 2026</div>
</div>

<!-- HERO IMAGE: Mt. Fuji -->
<img class="travel-hero-image" src="public/images/mt-fuji.jpg" alt="Mount Fuji with cherry blossoms at sunrise" />
<div class="travel-image-caption">Mount Fuji — Japan's sacred icon, framed by early spring blossoms</div>

<!-- TRIP OVERVIEW -->
<div class="travel-section">
  <div class="travel-logo" style="color: var(--hermes-blue);">Trip Overview</div>
  <h2>The Journey at a <em>Glance</em></h2>
  <div class="travel-divider"></div>
  <div class="overview-grid">
    <div class="overview-card"><div class="icon">📅</div><h3>Dates</h3><p>March 7 – March 28, 2027</p></div>
    <div class="overview-card"><div class="icon">✈️</div><h3>Flights</h3><p>Qantas Points + Singapore Suites</p></div>
    <div class="overview-card"><div class="icon">🌸</div><h3>Season</h3><p>Early Cherry Blossoms + Sumo</p></div>
  </div>
  <div class="overview-grid" style="grid-template-columns: 1fr 1fr;">
    <div class="overview-card"><div class="icon">🏨</div><h3>Accommodation</h3><p>4–5 Star Hotels, 21 Nights</p></div>
    <div class="overview-card"><div class="icon">🚄</div><h3>Transport</h3><p>Green Car Shinkansen + Luggage Forwarding</p></div>
  </div>
</div>

<!-- CHERRY BLOSSOMS + OSAKA CASTLE -->
<div class="travel-image-grid">
  <div>
    <img class="travel-section-image" src="public/images/sakura.jpg" alt="Cherry blossoms in full bloom along a Japanese canal" />
    <div class="travel-image-caption">Sakura season — nature's fleeting masterpiece</div>
  </div>
  <div>
    <img class="travel-section-image" src="public/images/osaka-castle.jpg" alt="Osaka Castle with cherry blossoms" />
    <div class="travel-image-caption">Osaka Castle — a symbol of Japan's unification</div>
  </div>
</div>

<!-- BOOKING CHECKLIST -->
<div class="travel-section" style="background: #f8fafc;">
  <div class="travel-logo" style="color: var(--hermes-blue);">Critical Booking Timeline</div>
  <h2>Reserve <em>Now</em> to Secure the Dream</h2>
  <div class="travel-divider"></div>
  <div class="flight-card">
    <h4>🔥 Within 2 Weeks — Sumo Tickets</h4>
    <p><strong>March Grand Sumo Tournament (Haru Basho) tickets</strong> go on sale <strong>February 6–8, 2027</strong> at 10:00 JST. Book instantly at sumo.pia.jp — popular seats vanish within hours.</p>
    <p style="margin-top:8px;">Book <strong>North Zone B or East Zone B</strong> seats (3rd floor) for clear sightlines without being too close. Seats with back support recommended.</p>
  </div>
  <img class="travel-section-image tall" src="public/images/kaiseki-reference.jpg" alt="Traditional kaiseki multi-course Japanese dinner" />
  <div class="travel-image-caption">A 7-course kaiseki dinner — the pinnacle of Japanese culinary artistry. Each dish is a seasonal masterpiece.</div>
  <div class="flight-card">
    <h4>⏰ Within 6 Weeks — Flights</h4>
    <p>Qantas Business Classic Award seats on BNE-HKG are released 353 days in advance — within range. Set alerts at <strong>qantas.com</strong> immediately.</p>
  </div>
  <div class="flight-card">
    <h4>📝 2–3 Months — Hotels & Experiences</h4>
    <p style="margin-top:5px;">Book <strong>Nazuna Kyoto Tsubaki St.</strong> and <strong>Higashiyama Shikikaboku</strong> immediately (limited rooms, accessibility).</p>
    <p style="margin-top:8px;">Reserve <strong>7-course kaiseki</strong> at Oshikoji Okada (Kyoto) and <strong>sumo morning practice</strong> in Tokyo.</p>
  </div>
  <div class="flight-card" style="background: #fffbeb; border-left: 4px solid var(--hermes-gold);">
    <h4>⚠️ Vernal Equinox Weekend — March 21-22, 2027</h4>
    <p><strong>Substitute holiday Monday 22 March</strong> = peak domestic travel window. Book Tokyo accommodation far in advance — this is Golden Week lite. All attractions will be packed.</p>
  </div>
</div>

<!-- HONG KONG STOPOVER IMAGE -->
<img class="travel-section-image wide" src="public/images/hong-kong.jpg" alt="Hong Kong skyline and Victoria Harbour" />
<div class="travel-image-caption">Victoria Harbour — your gateway to Asia, 3 nights in vibrant Hong Kong</div>

<!-- OPTION 1: LUXURY -->
<div class="travel-section">
  <div class="itinerary-option">
    <div class="itinerary-header option-1">
      <h3>Option 1: The Ultra-Luxury Experience</h3>
      <p>5-star across the board, Michelin dining, private guides, business class flights — no compromise</p>
    </div>
    <div class="itinerary-body">
      <span class="price-badge">Estimated: $85,000–$95,000 AUD for 2 adults</span>
      <h3 style="margin: 25px 0 15px; color: var(--hermes-blue); font-size: 20px;">Perfect 3-Week Itinerary — DAILY PLAN</h3>
      
      <div class="day-card"><div class="day-num">1</div><div class="day-content"><div class="location">Day 1 · March 7 · Brisbane → Hong Kong</div><h4>✈️ Depart Brisbane — Qantas Business Class</h4><p>QF128 BNE→HKG (~8h40m). Depart 10:00. Arrive 17:00. <strong>The Qantas Club Lounge</strong> pre-departure with champagne, canapés.</p><div class="tags"><span class="tag">Lounge Pass</span><span class="tag">Priority Boarding</span></div></div></div>
      
      <div class="day-card"><div class="day-num">2-4</div><div class="day-content"><div class="location">Days 2-4 · Hong Kong Stopover (3 Nights)</div><h4>🏨 Regala Skycity Hotel — 3 Nights</h4><p>Directly at Hong Kong International Airport. Outdoor pool, spa, 6 restaurants. Unlimited airport access.</p><p><strong>Hong Kong activities:</strong> Day trip to <strong>Lantau Island (Ngong Ping 360)</strong>, Star Ferry Victoria Harbour cruise, dim sum at Tim Ho Wan.</p><div class="tags"><span class="tag">Accessible</span><span class="tag">Spa</span><span class="tag">Pool</span></div></div></div>
      
      <div class="day-card"><div class="day-num">5</div><div class="day-content"><div class="location">Day 5 · March 11 · Hong Kong → Osaka</div><h4>✈️ HKG→KIX — Arrive Osaka</h4><p>Cathay Pacific HKG→KIX (~3h30m). Transfer by taxi to hotel. Check-in Imperial Hotel Osaka.</p><div class="tags"><span class="tag">Taxi Transfer</span><span class="tag">Evening Rest</span></div></div></div>
      
      <div class="day-card"><div class="day-num">6</div><div class="day-content"><div class="location">Day 6 · March 12 · Osaka</div><h4>🏯 Osaka Castle + Dotonbori</h4><p>Morning at Osaka Castle (elevator to 8th-floor observation deck). <strong>Entry ¥1,200</strong>. Afternoon at Dotonbori.</p><p>Evening <strong>okonomiyaki dinner at Mizuno</strong> (Michelin Bib Gourmand, est. 1945).</p></div></div>
      
      <div class="day-card"><div class="day-num">7</div><div class="day-content"><div class="location">Day 7 · March 13 · Osaka — Grand Sumo Tournament</div><h4>🏆 Edion Arena Osaka — Seats Secured</h4><p>15-day tournament: main bouts from 18:00. Ryogoku Kokugikan atmosphere. Ticket included.</p></div></div>
      
      <div class="day-card"><div class="day-num">8-9</div><div class="day-content"><div class="location">Days 8-9 · Tokyo (5-Night Stay)</div><h4>🏨 BELLUSTAR TOKYO — Pan Pacific ⭐⭐⭐⭐⭐</h4><p>Transfer Shinkansen Green Car to Tokyo. Check-in BELLUSTAR TOKYO. <strong>5-night stay.</strong></p><p><strong>Tokyo highlights:</strong> Day 10 — Shibuya Scramble Crossing <strong>(Mag's Park rooftop)</strong>, Harajuku. Day 11 — Akihabara tech markets (Yodobashi Camera, Super Potato). Day 12 — Sumo morning practice (<strong>Arashio Stable free viewing</strong>), afternoon TeamLab Planets. Day 13 — Tsukiji Outer Market, Ginza shopping.</p><div class="tags"><span class="tag">Shinkansen Green Car</span><span class="tag">Tech Shopping</span><span class="tag">Transfer Service</span></div></div></div>

<!-- TOKYO + SHINKANSEN IMAGES -->
<div class="travel-image-grid">
  <div>
    <img class="travel-section-image" src="public/images/tokyo-night.jpg" alt="Tokyo Shibuya crossing at night with neon lights" />
    <div class="travel-image-caption">Shibuya Crossing — the beating heart of Tokyo after dark</div>
  </div>
  <div>
    <img class="travel-section-image" src="public/images/shinkansen.jpg" alt="Japanese Shinkansen bullet trains lined up at depot" />
    <div class="travel-image-caption">Shinkansen E5 Series — engineering perfection at 320 km/h</div>
  </div>
</div>
      
      <div class="day-card"><div class="day-num">14-16</div><div class="day-content"><div class="location">Days 14-16 · Kyoto (3 Nights)</div><h4>🏨 Higashiyama Shikikaboku — Traditional Luxury</h4><p>Shimbanyachō station nearby. Check-in. <strong>3 nights.</strong></p><p><strong>Kyoto day plan:</strong> Nijo Castle Sakura Festival (March 19 – April 11), Fushimi Inari early morning, <strong>7-course kaiseki dinner at Oshikoji Okada</strong>, Gion evening stroll.</p><div class="tags"><span class="tag">Onsen</span><span class="tag">Kaiseki</span><span class="tag">Private Bath</span></div></div></div>

<!-- KYOTO IMAGES: Golden Pavilion + Fushimi Inari -->
<div class="travel-image-grid">
  <div>
    <img class="travel-section-image tall" src="public/images/kyoto-golden.jpg" alt="Golden Pavilion Kinkaku-ji reflected in pond" />
    <div class="travel-image-caption">Kinkaku-ji — the Golden Pavilion, Kyoto's most beloved temple</div>
  </div>
  <div>
    <img class="travel-section-image tall" src="public/images/fushimi-inari.jpg" alt="Thousands of vermillion torii gates at Fushimi Inari shrine" />
    <div class="travel-image-caption">Fushimi Inari — 10,000 torii gates winding up the sacred mountain</div>
  </div>
</div></div>
      
      <div class="day-card"><div class="day-num">17</div><div class="day-content"><div class="location">Day 17 · Hiroshima</div><h4>🕊️ Peace Memorial Park + Atomic Bomb Museum</h4><p>Shinkansen Green Car. Afternoon Peace Memorial Museum. Evening Hiroshima Castle moat cherry blossoms.</p></div></div>
      
      <div class="day-card"><div class="day-num">18</div><div class="day-content"><div class="location">Day 18 · Kanazawa + Fishing Villages</div><h4>🎣 Wajima + Shiroyone Senmaida Rice Terraces</h4><p>Limited Express Thunderbird to Kanazawa. Car transfer to Wajima &amp; Shiroyone Senmaida. <strong>Traditional fishing village.</strong></p></div></div>
      
      <div class="day-card"><div class="day-num">19-20</div><div class="day-content"><div class="location">Days 19-20 · Return to Osaka</div><h4>🌸 Cherry Blossom Peak + Farewell</h4><p>Late March = full bloom at Osaka Castle Nishinomaru Garden. Illuminations at night.</p></div></div>
      
      <div class="day-card"><div class="day-num">21</div><div class="day-content"><div class="location">Day 21 · Osaka → Brisbane via Singapore</div><h4>✈️ Singapore Airlines Business Class — KIX→SIN→BNE</h4><p>Singapore Suites or Business Class KIX→SIN. Crowne Plaza Changi Airport (Direct to T3). Next morning continue SIN→BNE.</p></div></div>
    </div>
  </div>
</div>

<!-- OPTION 2: BUS TOUR -->
<div class="travel-section" style="background: #f8fafc;">
  <div class="itinerary-option">
    <div class="itinerary-header option-2">
      <h3>Option 2: Guided Bus Tour Experience</h3>
      <p>Premium coach, like-minded travellers, expert guide — pure relaxation</p>
    </div>
    <div class="itinerary-body">
      <span class="price-badge">Estimated: $25,000–$35,000 AUD for 2 adults</span>
      <p style="margin: 20px 0; font-size: 15px;"><strong>Recommended Operator:</strong> Adventure World Travel "Japan Revealed" or UCats "Cultural Tours Japan Spectacular" — 21–24 day departures matching March 7.</p>
      <p style="margin-bottom: 15px; font-size: 15px;"><strong>What's Included:</strong> All accommodation (4-star), daily breakfast, all internal transport by <strong>premium coach</strong>, English-speaking entrance fees, many major sights.</p>
      <p style="margin-bottom: 20px; font-size: 15px;"><strong>Unique experiences:</strong> Not possible independently — like <strong>overnight temple stay at Koyasan</strong>, <strong>Japanese tea ceremony masterclass</strong>, <strong>Mt. Fuji bullet train cruise</strong>.</p>
      <h3 style="color: var(--hermes-blue); margin-bottom: 15px;">Tour Highlights Matched to Your Dates</h3>
      <div class="day-card"><div class="day-num">1-7</div><div class="day-content"><div class="location">Week 1: Classic Golden Route</div><h4>Tokyo → Mt. Fuji → Hakone → Osaka</h4><p>Seated coach comfort. Luggage handled by drivers. Hotel check-ins arranged.</p></div></div>
      <div class="day-card"><div class="day-num">8-14</div><div class="day-content"><div class="location">Week 2: Culture & Nature</div><h4>Kyoto → Nara → Hiroshima → Miyajima</h4><p>Expert guide explains 1200 years of history at each temple.</p></div></div>
      <div class="day-card"><div class="day-num">15-21</div><div class="day-content"><div class="location">Week 3: Hidden Gems</div><h4>Kanazawa → Shirakawa-go → Alpine Route → Tokyo</h4><p>Shirakawa-go thatched-roof villages — UNESCO listed, deeply authentic.</p></div></div>
    </div>
  </div>
</div>

<!-- OPTION 3: COMFORT -->
<div class="travel-section">
  <div class="itinerary-option">
    <div class="itinerary-header option-3">
      <h3>Option 3: Comfort Style — The Balanced Choice</h3>
      <p>Self-directed but with handpicked experiences at a relaxed pace</p>
    </div>
    <div class="itinerary-body">
      <span class="price-badge">Estimated: $68,000–$78,000 AUD for 2 adults</span>
      <p style="margin: 20px 0; font-size: 15px;"><strong>Difference from Luxury:</strong> 4-star hotels (Hilton/Shibuya Stream), fewer Michelin meals, Splurge Version.</p>
      <p style="margin-bottom: 20px;"><strong>Perfect for:</strong> Travellers who like independence but not planning sweat. <strong>Private driver-guide</strong> can be requested per-day (~$500/day).</p>
      <div class="day-card"><div class="day-num">★</div><div class="day-content"><h4>Same Core Itinerary, Fewer Extravagances</h4><p style="margin-top:8px;">• Hilton Tokyo (~$435/night) instead of BELLUSTAR ($686)</p><p>• Imperial Hotel Osaka same (heritage value)</p><p>• Okonomiyaki at <strong>Ajinoya</strong> (Bib Gourmand) — no queue, equally excellent</p><p>• 1 kaiseki dinner only</p><p>• No private car — use <strong>JapanTaxi app + JR Pass</strong></p></div></div>
    </div>
  </div>
</div>

<!-- 25 SUGGESTIONS -->
<div class="travel-section" style="background: #f8fafc;">
  <div class="travel-logo" style="color: var(--hermes-blue);">Curated Experiences</div>
  <h2>25 Things <em>You'll Love</em></h2>
  <div class="travel-divider"></div>
  <div class="suggestions-grid">
    <div class="suggestion"><div class="number">01</div><h4>Hamonryu Kyoto Lacquerware Workshop</h4><p>Traditional Wajima-style lacquerware craft experience</p><div class="for">🎨 Culture</div></div>
    <div class="suggestion"><div class="number">02</div><h4>Yodobashi Camera Akihabara</h4><p>8-floor electronics paradise — gadgets, cameras, audio</p><div class="for">💻 Dad — Tech</div></div>
    <div class="suggestion"><div class="number">03</div><h4>Harajuku Takeshita Street</h4><p>Fashion &amp; kawaii culture, cotton candy, vintage shops</p><div class="for">🛍️ Mummy</div></div>
    <div class="suggestion"><div class="number">04</div><h4>Tsukiji Outer Market Food Tour</h4><p>Fresh sushi breakfast, tamagoyaki, wagyu skewers</p><div class="for">🍣 Food</div></div>
    <div class="suggestion"><div class="number">05</div><h4>Akihabara Retro Game Store (Super Potato)</h4><p>Classic video games, consoles, collectibles</p><div class="for">🎮 Dad — Retro</div></div>
    <div class="suggestion"><div class="number">06</div><h4>Sumo Morning Practice (Arashio Stable)</h4><p>Free street-level viewing of sumo wrestlers training</p><div class="for">🏆 Sport</div></div>
    <div class="suggestion"><div class="number">07</div><h4>Shibuya Sky Observation Deck</h4><p>46th floor open-air deck — 270° Tokyo panorama</p><div class="for">📸 Photos</div></div>
    <div class="suggestion"><div class="number">08</div><h4>Ramen Street at Tokyo Station</h4><p>6 specialty ramen shops underground — curated selection</p><div class="for">🍜 Food</div></div>
    <div class="suggestion"><div class="number">09</div><h4>Kabuki-za Theatre (Single Act)</h4><p>Watch a single kabuki act with English audio guide</p><div class="for">🎭 Culture</div></div>
    <div class="suggestion"><div class="number">10</div><h4>Machida Chocolate Factory Show</h4><p>Premium chocolate tasting tour outside Tokyo</p><div class="for">🍫 Food</div></div>
    <div class="suggestion"><div class="number">11</div><h4>Kyuo Gion Corner</h4><p>Tea ceremony, flower arrangement, geisha performance</p><div class="for">🌸 Mummy</div></div>
    <div class="suggestion"><div class="number">12</div><h4>Nintendo Tokyo (Shibuya Parco)</h4><p>Official Nintendo store, exclusive merch, gaming stations</p><div class="for">🎮 Dad — Gaming</div></div>
    <div class="suggestion"><div class="number">13</div><h4>Yamadera Temple (Risshakuji)</h4><p>1004 steps through cedar forest — breathtaking panoramas</p><div class="for">⛩️ Culture</div></div>
    <div class="suggestion"><div class="number">14</div><h4>Conveyor Belt Sushi (Kaiten-zushi)</h4><p>Fun fresh experience — Sushiro or Kura Sushi chains</p><div class="for">🍣 Food</div></div>
    <div class="suggestion"><div class="number">15</div><h4>Asakusa Nakamise Shopping Street</h4><p>Traditional snacks, souvenirs, culture in old Tokyo</p><div class="for">🛍️ Shopping</div></div>
    <div class="suggestion"><div class="number">16</div><h4>Robot Restaurant Tokyo (Alternative)</h4><p>Wild neon robot show — replaced by new immersive venue</p><div class="for">🎆 Entertainment</div></div>
    <div class="suggestion"><div class="number">17</div><h4>Kyoto Handicraft Inma Dozasho</h4><p>Traditional textile dyeing experience</p><div class="for">🎨 Mummy</div></div>
    <div class="suggestion"><div class="number">18</div><h4>Hiroshima-style Okonomiyaki (Okonomimura)</h4><p>200+ okonomiyaki stalls in one multi-level building</p><div class="for">🔥 Food</div></div>
    <div class="suggestion"><div class="number">19</div><h4>SAKE PARK Vol.6 Tokyo (March 27-29)</h4><p>30+ breweries, food pairings around the park</p><div class="for">🍶 Dad — Sake</div></div>
    <div class="suggestion"><div class="number">20</div><h4>Meiji Shrine + Yoyogi Park Walk</h4><p>Peaceful forested shrine in urban Shibuya</p><div class="for">🌳 Nature</div></div>
    <div class="suggestion"><div class="number">21</div><h4>Roppongi Hills Mori Art Museum</h4><p>Contemporary art + Tokyo Tower views</p><div class="for">🎨 Culture</div></div>
    <div class="suggestion"><div class="number">22</div><h4>Yakitori Alley (Omoide Yokocho)</h4><p>Evening skewers under train tracks, Shinjuku</p><div class="for">🍢 Dad — Nightlife</div></div>
    <div class="suggestion"><div class="number">23</div><h4>Kawagoe Day Trip (Little Edo)</h4><p>Historic merchant town 30 min from Tokyo</p><div class="for">🏯 History</div></div>
    <div class="suggestion"><div class="number">24</div><h4>Kyoto Arashiyama Bamboo Grove</h4><p>Early morning forest walk before crowds, temple visits</p><div class="for">🎋 Nature</div></div>
    <div class="suggestion"><div class="number">25</div><h4>Sonos Store Roppongi (Audio Paradise)</h4><p>Premium audio equipment, headphones, demo room</p><div class="for">🔊 Dad — Tech</div></div>
  </div>
</div>

<!-- POINTS & FLIGHTS -->
<div class="travel-section" style="background: linear-gradient(135deg, #f8fafc, #f1f5f9);">
  <div class="travel-logo" style="color: var(--hermes-blue);">Frequent Flyer Strategy</div>
  <h2>Your Points, <em>Maximised</em></h2>
  <div class="travel-divider"></div>
  <div class="flight-card">
    <h4>✈️ Outbound: Brisbane → Osaka via Hong Kong</h4>
    <div class="flight-route">
      <div class="flight-city"><div class="code">BNE</div><div class="name">Brisbane</div></div>
      <div class="flight-arrow"><div class="line"></div></div>
      <div class="flight-city"><div class="code">HKG</div><div class="name">Hong Kong (3-night stopover)</div></div>
      <div class="flight-arrow"><div class="line"></div></div>
      <div class="flight-city"><div class="code">KIX</div><div class="name">Osaka</div></div>
    </div>
    <div class="flight-details">
      <strong>Qantas Points Required:</strong> ~98,400 points (Zone 6, booked as one through-ticket BNE→KIX via HKG)<br>
      <strong>Book on:</strong> Cathay Pacific (partner) to minimise fuel surcharges<br>
      <strong>Taxes/Fees:</strong> ~$150–$242 AUD government taxes + carrier surcharges<br>
      <strong>Lounge Access:</strong> Qantas Hong Kong Lounge (T1) included with business class
    </div>
  </div>
  <div class="flight-card">
    <h4>✈️ Return: Osaka → Brisbane via Singapore</h4>
    <div class="flight-route">
      <div class="flight-city"><div class="code">KIX</div><div class="name">Osaka</div></div>
      <div class="flight-arrow"><div class="line"></div></div>
      <div class="flight-city"><div class="code">SIN</div><div class="name">Singapore (2-night stopover)</div></div>
      <div class="flight-arrow"><div class="line"></div></div>
      <div class="flight-city"><div class="code">BNE</div><div class="name">Brisbane</div></div>
    </div>
    <div class="flight-details">
      <strong>KrisFlyer Points Required:</strong> ~126,500 miles (54,500 KIX→SIN + 72,000 SIN→BNE)<br>
      <strong>Book on:</strong> Singapore Airlines (no fuel surcharges!)<br>
      <strong>Taxes/Fees:</strong> Only ~S$100–200 (extremely low — SQ doesn't pass on carrier surcharges)<br>
      <strong>Lounge Access:</strong> SilverKris Lounge (SIN) included with business class
    </div>
  </div>
  <div class="flight-card" style="background: #fffbeb; border-left: 4px solid var(--hermes-gold);">
    <h4>💳 Points Accumulation Strategy (9 months to save)</h4>
    <p style="margin-top:8px;"><strong>Qantas (98,400 pts outbound):</strong> One credit card sign-up bonus = 150,000 points. Recommended: <strong>Qantas Premier Titanium</strong> or <strong>Westpac Altitude Qantas Black</strong> (150K bonus after $5K–$6K spend in 90 days).</p>
    <p style="margin-top:8px;"><strong>KrisFlyer (126,500 mi return):</strong> Transfer from Amex/Citi/Marriott during bonus periods. <strong>Accor transfer has 50% bonus (March 2026).</strong> Or earn directly with UOB/Citi SQ cards.</p>
    <p style="margin-top:8px;"><strong>Key advantage:</strong> SQ charges NO fuel surcharges — saving ~$800–$1,200 in carrier fees vs Qantas-operated.</p>
  </div>
</div>

<!-- QUESTIONS -->
<div class="travel-section">
  <div class="travel-logo" style="color: var(--hermes-blue);">Before We Finalise</div>
  <h2>Questions for <em>You</em></h2>
  <div class="travel-divider"></div>
  <ol class="question-list">
    <li><strong>Sumo Tournament Priority:</strong> How fixed are your March dates? If the March 14–22 tournament is essential, we depart earlier (Day 6). If flexible, could visit Tokyo sumo stable practice instead.</li>
    <li><strong>Jet Lag Comfort:</strong> Do you prefer the Hong Kong stopover to break the journey, or would you rather fly direct to Osaka (14hr Cathay Pacific) and rest on arrival?</li>
    <li><strong>Flight Booking Method:</strong> Do you have enough Qantas points for 2× business class one-way? Or should I research upgrading economy using points + cash?</li>
    <li><strong>Hotel Preference:</strong> Any preference between traditional Japanese-style (ryokan feel, tatami floors) vs Western-style rooms with beds?</li>
    <li><strong>Luggage Forwarding:</strong> Are you comfortable forwarding large luggage between hotels (22kg bags), or do you prefer carrying on overhead only?</li>
    <li><strong>Seasonal Priority:</strong> Would you delay departure by 1 week to catch peak cherry blossoms (March 21+), or keep earlier date for sumo?</li>
    <li><strong>Exclusive Experiences:</strong> The <strong>Mt. Fuji private bullet train cabin</strong> (reserved Green Car with Fuji views), premium tea ceremony — which of these matter most?</li>
    <li><strong>Dietary Requirements:</strong> Any food allergies, restrictions, or preferences we need to accommodate for restaurant bookings?</li>
    <li><strong>Activity Intensity:</strong> On a scale 1–5, how do you feel about walking 10,000+ steps/day vs preferring taxis on tired days?</li>
    <li><strong>Stopover Pace:</strong> Hong Kong 3 nights — would you prefer a full city tour package or just relaxing at the hotel with one major outing?</li>
    <li><strong>Singapore Stopover:</strong> Would you like to see Gardens by the Bay, or keep it low-key at Crowne Plaza Changi?</li>
    <li><strong>Tech Shopping Budget:</strong> Dad — any specific electronics purchases planned (camera, audio, etc.)? We can research duty-free pricing.</li>
    <li><strong>Medical Needs:</strong> Any prescriptions, mobility aids, or regular medical appointments to plan around?</li>
    <li><strong>Photography Interest:</strong> Professional-grade cameras? We can arrange private photography tour guides at temples.</li>
    <li><strong>Special Occasions:</strong> Any birthdays, anniversaries, or celebrations during the trip we should mark with a special dinner?</li>
    <li><strong>Airline Preference:</strong> Have you used Singapore Airlines Suites Class before? The experience is once-in-a-lifetime if budget allows.</li>
    <li><strong>Japan Rail Pass Question:</strong> 14-day pass starts when you activate at airport. If our itinerary is 21 days, days 15–21 are without pass — acceptable, or adjust?</li>
    <li><strong>Laundry Access:</strong> Most 4-star hotels have in-house laundry. Any preference for packing light (8 days clothes) and washing mid-trip?</li>
    <li><strong>Travel Insurance:</strong> Do you have comprehensive travel insurance covering pre-existing conditions for 70+ travellers?</li>
    <li><strong>Communication:</strong> Do you need a Japan SIM card, pocket WiFi, or is roaming acceptable for WhatsApp/calls?</li>
    <li><strong>Shopping Preferences:</strong> Mummy — any specific shopping (kimono, ceramics, skincare)? We can allocate time at Nakamise Street or Kyoto craft shops.</li>
    <li><strong>Pre/Post Trip:</strong> Would you like to extend with additional days — Okinawa beach stopover, or Seoul via Japan?</li>
    <li><strong>Budget Flexibility:</strong> Is the $85K–$95K luxury budget comfortable, or do you want me to find comparable experiences at $65K–$75K?</li>
  </ol>
</div>

<!-- FOOTER -->
<div class="travel-footer">
  <div class="travel-logo">Intelligence × Precision × Care<span>HERMES PJB TRAVEL</span></div>
  <p style="margin-top: 20px;">The Travel AI Professionals</p>
  <p style="margin-top: 10px; font-size: 11px;">Prepared with obsessive care by Hermes AI · June 2026 · Subject to availability and booking confirmation</p>
</div>

</div>
`;

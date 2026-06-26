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

/* SUGGESTIONS */
.suggestions-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; }
.suggestion { background: white; border-radius: 8px; padding: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.04); border-left: 3px solid var(--hermes-gold); }
.suggestion .number { font-size: 28px; font-weight: 700; color: var(--hermes-gold); line-height: 1; }
.suggestion h4 { font-size: 15px; color: var(--hermes-blue); margin: 8px 0; }
.suggestion p { font-size: 12px; color: var(--hermes-slate); }
.suggestion .for { font-size: 10px; text-transform: uppercase; letter-spacing: 2px; color: var(--hermes-gold); margin-top: 8px; }

/* BOOKING TIMELINE */
.flight-card { background: white; border-radius: 8px; padding: 30px; margin-bottom: 20px; box-shadow: 0 2px 15px rgba(0,0,0,0.05); }
.flight-card h4 { font-size: 18px; color: var(--hermes-blue); margin-bottom: 15px; display: flex; align-items: center; gap: 10px; }

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
  max-width: 100%;
  height: 280px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
}
.travel-hero-image,
.travel-section-image {
  max-width: 100%;
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
  .travel-body { padding: 0; margin: 0; width: 100%; overflow-x: hidden; }
  .travel-cover { min-height: auto; padding: 60px 16px; width: 100%; box-sizing: border-box; }
  .travel-cover-content { max-width: 100%; padding: 0 16px; box-sizing: border-box; }
  .travel-cover h1 { font-size: clamp(28px, 7vw, 56px); }
  .travel-cover .details { flex-direction: column; gap: 10px; align-items: center; }
  .travel-cover .details div { text-align: center; }
  .travel-section { padding: 40px 16px; max-width: 100%; box-sizing: border-box; }
  .overview-grid { grid-template-columns: 1fr; gap: 15px; }
  .travel-hero-image { height: 240px; width: 100%; border-radius: 0; }
  .travel-section-image { height: 220px; width: 100%; border-radius: 0; margin: 20px 0; }
  .travel-section-image.tall { height: 280px; }
  .travel-image-grid { grid-template-columns: 1fr; gap: 12px; }
  .travel-image-grid img { height: 220px; border-radius: 0; }
  .travel-image-caption { font-size: 11px; }
  .suggestions-grid { grid-template-columns: 1fr; }
  .suggestion { padding: 16px; }
}

@media (max-width: 480px) {
  .travel-cover { padding: 40px 12px; }
  .travel-cover h1 { font-size: 26px; }
  .travel-section { padding: 30px 12px; }
}

/* PRINT */
@media print {
  .travel-cover { page-break-after: always; min-height: auto; height: 100vh; }
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
    <div class="travel-tagline">A Travel Guide for the Barden Family</div>
    <h1><em>Japan in Bloom</em><br>March 2027</h1>
    <p class="subtitle">A travel guide for Mum &amp; Dad's 3-week adventure in Japan</p>
    <div class="details">
      <div>🗾 <span>Osaka</span> · <span>Tokyo</span> · <span>Kyoto</span> · <span>Hiroshima</span> · <span>Kanazawa</span></div>
      <div>📅 <span>21 Days</span></div>
      <div>🌸 <span>Early Cherry Blossoms</span></div>
      <div>🗓️ <span>March 7–28, 2027</span></div>
    </div>
  </div>
  <div class="travel-credit">Prepared with ❤ by Petey · June 2026</div>
</div>

<!-- HERO IMAGE: Mt. Fuji -->
<img class="travel-hero-image" src="/images/mt-fuji.jpg" alt="Mount Fuji with cherry blossoms at sunrise" />
<div class="travel-image-caption">Mount Fuji — Japan's sacred icon, framed by early spring blossoms</div>

<!-- TRIP OVERVIEW -->
<div class="travel-section">
  <div class="travel-logo" style="color: var(--hermes-blue);">Trip Overview</div>
  <h2>The Journey at a <em>Glance</em></h2>
  <div class="travel-divider"></div>
  <p style="font-size: 16px; color: var(--hermes-slate); max-width: 700px;">Flights and accommodation have already been booked by Peter. Below is a suggested travel guide with things to enjoy when you arrive.</p>
  <div style="height: 20px;"></div>
  <div class="overview-grid">
    <div class="overview-card"><div class="icon">📅</div><h3>Dates</h3><p>March 7 – March 28, 2027</p></div>
    <div class="overview-card"><div class="icon">✈️</div><h3>Flights</h3><p>TBA</p></div>
    <div class="overview-card"><div class="icon">🌸</div><h3>Season</h3><p>Early Cherry Blossoms + Sumo</p></div>
  </div>
  <div class="overview-grid" style="grid-template-columns: 1fr 1fr;">
    <div class="overview-card"><div class="icon">🏨</div><h3>Accommodation</h3><p>TBA</p></div>
    <div class="overview-card"><div class="icon">🚄</div><h3>Transport</h3><p>Green Car Shinkansen + Luggage Forwarding</p></div>
  </div>
</div>

<!-- CHERRY BLOSSOMS + OSAKA CASTLE -->
<div class="travel-image-grid">
  <div>
    <img class="travel-section-image" src="/images/sakura.jpg" alt="Cherry blossoms in full bloom along a Japanese canal" />
    <div class="travel-image-caption">Sakura season — nature's fleeting masterpiece</div>
  </div>
  <div>
    <img class="travel-section-image" src="/images/osaka-castle.jpg" alt="Osaka Castle with cherry blossoms" />
    <div class="travel-image-caption">Osaka Castle — a symbol of Japan's unification</div>
  </div>
</div>

<!-- BOOKING TIMELINE -->
<div class="travel-section" style="background: #f8fafc;">
  <div class="travel-logo" style="color: var(--hermes-blue);">Useful Booking &amp; Info</div>
  <h2>Things to <em>Sort Out</em></h2>
  <div class="travel-divider"></div>
  <div class="flight-card">
    <h4>🔥 Sumo Tournament Tickets (If you plan to go)</h4>
    <p><strong>March Grand Sumo Tournament (Haru Basho)</strong> is on in Osaka. Tickets go on sale <strong>February 6–8, 2027</strong> at 10:00 JST at <strong>sumo.pia.jp</strong> — popular seats sell out fast.</p>
    <p style="margin-top:8px;">Book <strong>North Zone B or East Zone B</strong> seats (3rd floor) for good views. Seats with back support recommended.</p>
  </div>
  <div class="flight-card">
    <h4>📝 Special Dining Reservations</h4>
    <p style="margin-top:5px;">If you'd like a <strong>7-course kaiseki dinner</strong> (e.g. Oshikoji Okada in Kyoto) or popular restaurants, book 2–3 months ahead.</p>
  </div>
  <div class="flight-card">
    <h4>📱 Pocket WiFi or SIM Card</h4>
    <p>Pick up a <strong>pocket WiFi device</strong> or Japanese SIM card before departure for internet access. Essential for Google Maps, translation, and messaging.</p>
  </div>
  <div class="flight-card" style="background: #fffbeb; border-left: 4px solid var(--hermes-gold);">
    <h4>⚠️ Vernal Equinox Weekend — March 21-22, 2027</h4>
    <p><strong>Substitute holiday Monday 22 March</strong> = peak domestic travel window. Tokyo and Kyoto will be busy, so book attractions early.</p>
  </div>
</div>

<!-- TOKYO + SHINKANSEN IMAGES -->
<div class="travel-image-grid">
  <div>
    <img class="travel-section-image" src="/images/tokyo-night.jpg" alt="Tokyo Shibuya crossing at night with neon lights" />
    <div class="travel-image-caption">Shibuya Crossing — the beating heart of Tokyo after dark</div>
  </div>
  <div>
    <img class="travel-section-image" src="/images/shinkansen.jpg" alt="Japanese Shinkansen bullet trains lined up at depot" />
    <div class="travel-image-caption">Shinkansen E5 Series — engineering perfection at 320 km/h</div>
  </div>
</div>

<!-- KYOTO IMAGES -->
<div class="travel-image-grid">
  <div>
    <img class="travel-section-image tall" src="/images/kyoto-golden.jpg" alt="Golden Pavilion Kinkaku-ji reflected in pond" />
    <div class="travel-image-caption">Kinkaku-ji — the Golden Pavilion, Kyoto's most beloved temple</div>
  </div>
  <div>
    <img class="travel-section-image tall" src="/images/fushimi-inari.jpg" alt="Thousands of vermillion torii gates at Fushimi Inari shrine" />
    <div class="travel-image-caption">Fushimi Inari — 10,000 torii gates winding up the sacred mountain</div>
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
    <div class="suggestion"><div class="number">16</div><h4>Kyoto Handicraft Inma Dozasho</h4><p>Traditional textile dyeing experience</p><div class="for">🎨 Mummy</div></div>
    <div class="suggestion"><div class="number">17</div><h4>Hiroshima-style Okonomiyaki (Okonomimura)</h4><p>200+ okonomiyaki stalls in one multi-level building</p><div class="for">🔥 Food</div></div>
    <div class="suggestion"><div class="number">18</div><h4>Meiji Shrine + Yoyogi Park Walk</h4><p>Peaceful forested shrine in urban Shibuya</p><div class="for">🌳 Nature</div></div>
    <div class="suggestion"><div class="number">19</div><h4>Roppongi Hills Mori Art Museum</h4><p>Contemporary art + Tokyo Tower views</p><div class="for">🎨 Culture</div></div>
    <div class="suggestion"><div class="number">20</div><h4>Yakitori Alley (Omoide Yokocho)</h4><p>Evening skewers under train tracks, Shinjuku</p><div class="for">🍢 Dad — Nightlife</div></div>
    <div class="suggestion"><div class="number">21</div><h4>Kawagoe Day Trip (Little Edo)</h4><p>Historic merchant town 30 min from Tokyo</p><div class="for">🏯 History</div></div>
    <div class="suggestion"><div class="number">22</div><h4>Kyoto Arashiyama Bamboo Grove</h4><p>Early morning forest walk before crowds, temple visits</p><div class="for">🎋 Nature</div></div>
    <div class="suggestion"><div class="number">23</div><h4>Sonos Store Roppongi (Audio Paradise)</h4><p>Premium audio equipment, headphones, demo room</p><div class="for">🔊 Dad — Tech</div></div>
    <div class="suggestion"><div class="number">24</div><h4>Kobe Beef Dinner</h4><p>Enjoy world-class Kobe beef at a teppanyaki restaurant</p><div class="for">🥩 Food</div></div>
    <div class="suggestion"><div class="number">25</div><h4>TeamLab Planets Tokyo</h4><p>Immersive digital art — walk through water, flowers, and light</p><div class="for">✨ Experience</div></div>
  </div>
</div>

<!-- JAPAN TRAVEL TIPS -->
<div class="travel-section">
  <div class="travel-logo" style="color: var(--hermes-blue);">Handy Tips</div>
  <h2>Quick <em>Guidance</em> for Japan</h2>
  <div class="travel-divider"></div>
  <div class="suggestions-grid">
    <div class="suggestion"><div class="number">💴</div><h4>Cash is Still King</h4><p>Many smaller shops and temples are cash-only. Have yen available — 7-Eleven ATMs accept most cards.</p></div>
    <div class="suggestion"><div class="number">🗣️</div><h4>Language</h4><p>English signage is good in tourist areas. Google Translate app (download offline Japanese) is very helpful.</p></div>
    <div class="suggestion"><div class="number">🚪</div><h4>Trains &amp; Stations</h4><p>Get a Suica or Pasmo IC card for local trains. Google Maps has perfect JR schedules.</p></div>
    <div class="suggestion"><div class="number">👟</div><h4>Comfortable Shoes</h4><p>You'll be walking a lot. Bring broken-in shoes — many temples require removing shoes often.</p></div>
    <div class="suggestion"><div class="number">📦</div><h4>Luggage Forwarding</h4><p>Ask your hotel about luggage forwarding to your next stop. Saves hassle on Shinkansen.</p></div>
    <div class="suggestion"><div class="number">🍻</div><h4>Etiquette Reminders</h4><p>Don't tip. Bow slightly when greeting. Keep voice low on buses/trains. Slurping noodles = appreciation!</p></div>
  </div>
</div>

<!-- FOOTER -->
<div class="travel-footer">
  <div class="travel-logo">Intelligence × Precision × Care<span>HERMES PJB TRAVEL</span></div>
  <p style="margin-top: 20px;">Travel advice prepared with love</p>
  <p style="margin-top: 10px; font-size: 11px;">Made with ❤ by Petey · June 2026 · Information subject to change — always verify before booking</p>
</div>

</div>
`;

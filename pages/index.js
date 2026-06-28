import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'

const EXPERIENCES = [
  {
    id: 1,
    title: "Hamonryu Kyoto Lacquerware Workshop",
    category: "CULTURE",
    emoji: "�",
    for: "Both",
    description: "Traditional Wajima-style lacquerware craft experience — learn centuries-old techniques from master artisans in a historic atelier.",
    location: "Kyoto, Higashiyama District",
    price: "¥8,000 – ¥15,000 per person",
    duration: "2 hours",
    bookingUrl: "https://www.hamonryu.com/",
    tips: "Book 2 weeks ahead. Take home your own lacquerware piece.",
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&q=80&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Yodobashi Camera Akihabara",
    category: "DAD — TECH",
    emoji: "💻",
    for: "Dad",
    description: "8-floor electronics paradise — gadgets, cameras, audio equipment and Japanese tech marvels you won't find anywhere else.",
    location: "Akihabara, Tokyo",
    price: "Shopping — varies",
    duration: "2–3 hours",
    bookingUrl: "https://www.yodobashi.com/",
    tips: "Floor 6 has the best camera deals. Tax-free counter on floor 2.",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=80&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Harajuku Takeshita Street",
    category: "MUMMY",
    emoji: "�️",
    for: "Mum",
    description: "Fashion & kawaii culture hub — cotton candy, vintage shops, anime boutiques and Tokyo's coolest street style.",
    location: "Harajuku, Tokyo",
    price: "Free to browse",
    duration: "1–2 hours",
    bookingUrl: "https://www.gotokyo.org/",
    tips: "Visit early (9am) to avoid crowds. Detour to Cat Street for higher-end fashion.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=80&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Tsukiji Outer Market Food Tour",
    category: "FOOD",
    emoji: "🍣",
    for: "Both",
    description: "Fresh sushi breakfast, tamagoyaki, wagyu skewers, uni sashimi and the best miso soup you'll ever taste.",
    location: "Tsukiji, Tokyo",
    price: "¥3,000 – ¥6,000 for a full tasting",
    duration: "90 minutes",
    bookingUrl: "https://www.byfood.com/",
    tips: "Arrive by 8am for the freshest sushi breakfast. Try the bamboo charcoal tamagoyaki.",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1200&q=80&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Akihabara Retro Game Store (Super Potato)",
    category: "DAD — RETRO",
    emoji: "🎮",
    for: "Dad",
    description: "Classic video games, vintage consoles, rare collectibles — a nostalgia-packed time capsule of 80s and 90s gaming.",
    location: "Akihabara, Tokyo",
    price: "Varies — rare items can be expensive",
    duration: "1 hour",
    bookingUrl: "https://www.superpotato.com/",
    tips: "Top floor is a small arcade. Game prices are often better than eBay.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&q=80&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Sumo Morning Practice (Arashio Stable)",
    category: "SPORT",
    emoji: "🏆",
    for: "Both",
    description: "Free street-level viewing of sumo wrestlers training — watch giants rumble, slap and prepare for tournament glory.",
    location: "Tsukishima, Tokyo",
    price: "Free — just show up and be respectful",
    duration: "30–60 minutes",
    bookingUrl: "https://www.sumo.or.jp/",
    tips: "Stand quietly across the street. Practice starts ~7am. Feb tournament at Ryogoku Kokugikan.",
    image: "https://images.unsplash.com/photo-1541544741302-562e27b7e017?w=1200&q=80&auto=format&fit=crop"
  },
  {
    id: 7,
    title: "Shibuya Sky Observation Deck",
    category: "PHOTOS",
    emoji: "�",
    for: "Both",
    description: "46th floor open-air deck — 270° Tokyo panorama with views from Shibuya crossing to Mount Fuji on clear days.",
    location: "Shibuya Scramble Square, Tokyo",
    price: "¥2,300 per adult",
    duration: "45 minutes",
    bookingUrl: "https://www.shibuya-scramble-square.com/",
    tips: "Book sunset time slot. Rooftop netting is the best photo spot in Tokyo.",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=1200&q=80&auto=format&fit=crop"
  },
  {
    id: 8,
    title: "Ramen Street at Tokyo Station",
    category: "FOOD",
    emoji: "🍜",
    for: "Both",
    description: "6 specialty ramen shops underground in Tokyo Station — a curated collection of Japan's finest regional ramen styles.",
    location: "Tokyo Station (Yaesu Exit)",
    price: "¥1,000 – ¥1,500 per bowl",
    duration: "30–60 minutes per shop",
    bookingUrl: "https://www.jrn.or.jp/",
    tips: "Open late (until 11pm). Take underground passage from Tokyo Station.",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=1200&q=80&auto=format&fit=crop"
  },
  {
    id: 9,
    title: "Kabuki-za Theatre (Single Act)",
    category: "CULTURE",
    emoji: "🎭",
    for: "Both",
    description: "Watch a single kabuki act with English audio guide — Japan's 400-year-old dramatic art form in all its glory.",
    location: "Ginza, Tokyo",
    price: "¥800 – ¥4,000 (single act from ¥800)",
    duration: "1–2.5 hours",
    bookingUrl: "https://www.kabukiweb.net/",
    tips: "Buy same-day single-act tickets. English headsets available. No dress code.",
    image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=1200&q=80&auto=format&fit=crop"
  },
  {
    id: 10,
    title: "Machida Chocolate Factory Show",
    category: "FOOD",
    emoji: "�",
    for: "Both",
    description: "Premium chocolate tasting tour outside Tokyo — craft your own truffles and learn from Japan's acclaimed chocolatiers.",
    location: "Machida, Tokyo (train from Shibuya)",
    price: "¥3,500 – ¥8,000",
    duration: "2.5 hours",
    bookingUrl: "https://www.meiji.co.jp/",
    tips: "Weeks advance booking essential. Beautiful Tama River valley views.",
    image: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=1200&q=80&auto=format&fit=crop"
  },
  {
    id: 11,
    title: "Kyuo Gion Corner",
    category: "MUMMY",
    emoji: "🌸",
    for: "Mum",
    description: "Tea ceremony, flower arrangement, geisha performance — an elegant evening of Japan's refined arts in one show.",
    location: "Gion, Kyoto",
    price: "¥3,150 per ticket",
    duration: "1 hour",
    bookingUrl: "https://www.kyuo-gion.co.jp/",
    tips: "Book online for best seats. Meet at Gion ticket counter at 7pm.",
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&q=80&auto=format&fit=crop"
  },
  {
    id: 12,
    title: "Nintendo Tokyo (Shibuya Parco)",
    category: "DAD — GAMING",
    emoji: "�",
    for: "Dad",
    description: "Official Nintendo store, exclusive merch, gaming stations — play unreleased games and collect Tokyo-exclusive gear.",
    location: "Shibuya Parco, Tokyo",
    price: "Free entry — shopping varies",
    duration: "1–2 hours",
    bookingUrl: "https://www.nintendo.co.jp/",
    tips: "Floor 6 of Shibuya Parco. Mario Café next door needs advance reservation.",
    image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=1200&q=80&auto=format&fit=crop"
  },
  {
    id: 13,
    title: "Yamadera Temple (Risshakuji)",
    category: "CULTURE",
    emoji: "⛩️",
    for: "Both",
    description: "1004 steps through ancient cedar forest — breathtaking panoramas from the temple platform at the summit.",
    location: "Yamadera, Yamagata (Shinkansen from Tokyo)",
    price: "¥300 entry",
    duration: "2–3 hours round trip",
    bookingUrl: "https://www.yamadera.co.jp/",
    tips: "Wear good shoes. The climb is steep but the view from Godaido Hall is unforgettable.",
    image: "https://images.unsplash.com/photo-1578468928040-ed54e9188b4a?w=1200&q=80&auto=format&fit=crop"
  },
  {
    id: 14,
    title: "Conveyor Belt Sushi (Kaiten-zushi)",
    category: "FOOD",
    emoji: "🍣",
    for: "Both",
    description: "Fun fresh experience — Sushiro or Kura Sushi chains with 100+ varieties, touch-screen ordering, and prize tickets.",
    location: "Nationwide — Tokyo, Osaka, Kyoto",
    price: "¥100 – ¥300 per plate",
    duration: "45 minutes",
    bookingUrl: "https://www.akindo-sushiro.co.jp/",
    tips: "Kura Sushi has a gacha game for every 5 plates. Sushiro app shows wait times.",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1200&q=80&auto=format&fit=crop"
  },
  {
    id: 15,
    title: "Asakusa Nakamise Shopping Street",
    category: "SHOPPING",
    emoji: "🛍️",
    for: "Both",
    description: "Traditional snacks, souvenirs, culture in old Tokyo — 250m of vibrant market stalls leading to Senso-ji Temple.",
    location: "Asakusa, Tokyo",
    price: "Free to browse — snacks from ¥200",
    duration: "1 hour",
    bookingUrl: "https://www.japan-guide.com/",
    tips: "Best in the morning (9am). Try melon pan and ningyo-yaki. Senso-ji is free and open 24/7.",
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200&q=80&auto=format&fit=crop"
  },
  {
    id: 16,
    title: "Kyoto Handicraft Inma Dozasho",
    category: "MUMMY",
    emoji: "🎨",
    for: "Mum",
    description: "Traditional textile dyeing experience — create your own kimono fabric or furoshiki using centuries-old techniques.",
    location: "Arashiyama, Kyoto",
    price: "¥4,000 – ¥12,000",
    duration: "1.5–2 hours",
    bookingUrl: "https://www.inma.co.jp/",
    tips: "The indigo dyeing workshop is most popular. Book 3 days ahead.",
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&q=80&auto=format&fit=crop"
  },
  {
    id: 17,
    title: "Hiroshima-style Okonomiyaki (Okonomimura)",
    category: "FOOD",
    emoji: "🔥",
    for: "Both",
    description: "200+ okonomiyaki stalls in one multi-level building — the ultimate savory pancake experience, Hiroshima-style with noodles.",
    location: "Okonomimura, Hiroshima",
    price: "¥800 – ¥1,500 per okonomiyaki",
    duration: "1 hour",
    bookingUrl: "https://www.okonomimura.co.jp/",
    tips: "Floor 2 has the most variety. Hiroshima style means layered, not mixed.",
    image: "https://images.unsplash.com/photo-1554797589-7241bb691973?w=1200&q=80&auto=format&fit=crop"
  },
  {
    id: 18,
    title: "Meiji Shrine + Yoyogi Park Walk",
    category: "NATURE",
    emoji: "�",
    for: "Both",
    description: "Peaceful forested shrine in urban Shibuya — a 170-acre oasis of ancient trees surrounding Emperor Meiji's sacred shrine.",
    location: "Shibuya, Tokyo",
    price: "Free",
    duration: "1–2 hours",
    bookingUrl: "https://www.meijijingu.or.jp/",
    tips: "Go early (before 9am) for solitude. The sake barrel wall is a great photo spot.",
    image: "https://images.unsplash.com/photo-1583766395091-2eb9994ed094?w=1200&q=80&auto=format&fit=crop"
  },
  {
    id: 19,
    title: "Roppongi Hills Mori Art Museum",
    category: "CULTURE",
    emoji: "🎨",
    for: "Both",
    description: "Contemporary art + Tokyo Tower views — world-class exhibitions in a stunning 53rd-floor gallery with panoramic windows.",
    location: "Roppongi Hills, Tokyo",
    price: "¥2,000 (varies by exhibition)",
    duration: "1.5–2 hours",
    bookingUrl: "https://www.mori.art.museum/",
    tips: "Check exhibition schedule online. Sky Deck (¥500 extra) has open-air views.",
    image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=1200&q=80&auto=format&fit=crop"
  },
  {
    id: 20,
    title: "Yakitori Alley (Omoide Yokocho)",
    category: "DAD — NIGHTLIFE",
    emoji: "🍢",
    for: "Dad",
    description: "Evening skewers under train tracks, Shinjuku — narrow lanes packed with tiny yakitori joints, cold beer, and smoky atmosphere.",
    location: "Shinjuku, Tokyo",
    price: "¥200 – ¥500 per skewer, ¥500–800 beer",
    duration: "1–2 hours",
    bookingUrl: "https://www.japan-guide.com/e/e2357.html",
    tips: "Go after 6pm. The narrowest alley (west side) has the best spots. Cash only.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=80&auto=format&fit=crop"
  },
  {
    id: 21,
    title: "Kawagoe Day Trip (Little Edo)",
    category: "HISTORY",
    emoji: "🏯",
    for: "Both",
    description: "Historic merchant town 30 min from Tokyo — preserved Edo-period warehouses, traditional candy shops and old-world charm.",
    location: "Kawagoe, Saitama (train from Ikebukuro)",
    price: "Free — snacks and transport ~¥1,500",
    duration: "Half day",
    bookingUrl: "https://www.kawagoe.or.jp/",
    tips: "Visit on a weekday. Candy Alley (Kashiya Yokocho) has 20+ traditional sweet shops.",
    image: "https://images.unsplash.com/photo-1578468928040-ed54e9188b4a?w=1200&q=80&auto=format&fit=crop"
  },
  {
    id: 22,
    title: "Kyoto Arashiyama Bamboo Grove",
    category: "NATURE",
    emoji: "�",
    for: "Both",
    description: "Early morning forest walk before crowds — walk through towering bamboo that sways and creaks in the wind.",
    location: "Arashiyama, Kyoto",
    price: "Free (grove), temples from ¥300",
    duration: "2–3 hours",
    bookingUrl: "https://www.japan-guide.com/e/e3912.html",
    tips: "Arrive by 7am for near-empty paths. Tenryu-ji opens 8:30am — perfect combo.",
    image: "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=1200&q=80&auto=format&fit=crop"
  },
  {
    id: 23,
    title: "Sonos Store Roppongi (Audio Paradise)",
    category: "DAD — TECH",
    emoji: "🔊",
    for: "Dad",
    description: "Premium audio equipment, headphones, demo room — test the world's finest speakers in an acoustically perfect space.",
    location: "Roppongi, Tokyo",
    price: "Shopping — varies",
    duration: "45 minutes",
    bookingUrl: "https://www.sonos.com/",
    tips: "Bring your own music. The Sonos Arc demo is worth experiencing.",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1200&q=80&auto=format&fit=crop"
  },
  {
    id: 24,
    title: "Kobe Beef Dinner",
    category: "FOOD",
    emoji: "🥩",
    for: "Both",
    description: "Enjoy world-class Kobe beef at a teppanyaki restaurant — watch the chef prepare A5-grade perfection right in front of you.",
    location: "Kobe (or Tokyo/Michelin-starred teppanyaki)",
    price: "¥15,000 – ¥40,000 per person",
    duration: "2 hours",
    bookingUrl: "https://www.kobe-niku.jp/",
    tips: "Book 1 month ahead. Lunch sets are 40% cheaper. The fat melts just above body temperature.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80&auto=format&fit=crop"
  },
  {
    id: 25,
    title: "TeamLab Planets Tokyo",
    category: "EXPERIENCE",
    emoji: "✨",
    for: "Both",
    description: "Immersive digital art — walk through water, flowers, and light in a mind-bending sensory experience unlike anything else.",
    location: "Toyosu, Tokyo",
    price: "¥3,800 per adult",
    duration: "1.5–2 hours",
    bookingUrl: "https://www.teamlab.art/e/planets/",
    tips: "Book 2+ weeks ahead. Wear shorts (you wade through water). No photos — just be present.",
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=1200&q=80&auto=format&fit=crop"
  },
]

const CATEGORIES = [
  { key: "ALL", label: "All 25", emoji: "\u2728" },
  { key: "FOOD", label: "Food & Drink", emoji: "\ud83c\udf63" },
  { key: "CULTURE", label: "Culture & Art", emoji: "\ud83c\udfa8" },
  { key: "NATURE", label: "Nature", emoji: "\ud83c\udf33" },
  { key: "DAD", label: "For Dad", emoji: "\ud83d\udc68" },
  { key: "MUMMY", label: "For Mum", emoji: "\ud83d\udc69" },
  { key: "EXPERIENCE", label: "Experiences", emoji: "\u2728" },
]

export default function Home() {
  const [authenticated, setAuthenticated] = useState(false)
  const [pin, setPin] = useState("")
  const [error, setError] = useState(false)
  const [shake, setShake] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [currentItem, setCurrentItem] = useState(null)
  const [filter, setFilter] = useState("ALL")
  const [scrollY, setScrollY] = useState(0)
  const videoRef = useRef(null)

  useEffect(() => {
    const stored = sessionStorage.getItem("hermes_travel_auth")
    if (stored === "true") setAuthenticated(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (modalOpen) {
      const handleKey = (e) => {
        if (e.key === "Escape") closeModal()
        if (e.key === "ArrowLeft") navigateModal(-1)
        if (e.key === "ArrowRight") navigateModal(1)
      }
      window.addEventListener("keydown", handleKey)
      document.body.style.overflow = "hidden"
      return () => {
        window.removeEventListener("keydown", handleKey)
        document.body.style.overflow = ""
      }
    } else {
      document.body.style.overflow = ""
    }
  }, [modalOpen, currentItem])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (pin === "8041") {
      setAuthenticated(true)
      sessionStorage.setItem("hermes_travel_auth", "true")
      setError(false)
    } else {
      setError(true)
      setShake(true)
      setTimeout(() => setShake(false), 500)
      setPin("")
    }
  }

  const openModal = (item) => {
    setCurrentItem(item)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setTimeout(() => setCurrentItem(null), 300)
  }

  const navigateModal = (direction) => {
    if (!currentItem) return
    const filtered = getFiltered()
    const currentIndex = filtered.findIndex(e => e.id === currentItem.id)
    const nextIndex = (currentIndex + direction + filtered.length) % filtered.length
    setCurrentItem(filtered[nextIndex])
  }

  const getFiltered = () => {
    return filter === "ALL"
      ? EXPERIENCES
      : EXPERIENCES.filter(e =>
          e.category.includes(filter) ||
          (filter === "DAD" && e.category.includes("DAD")) ||
          (filter === "MUMMY" && e.category.includes("MUMMY"))
        )
  }

  const filteredExperiences = getFiltered()

  if (!authenticated) {
    return (
      <>
        <Head>
          <title>Hermes Travel Wiki</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div style={styles.loginContainer}>
          <div style={Object.assign({}, styles.loginCard, { animation: shake ? "shake 0.5s" : "none" })}>
            <div style={styles.loginIcon}>\ud83d\udd12</div>
            <h1 style={styles.loginTitle}>Hermes Travel Wiki</h1>
            <p style={styles.loginSubtitle}>Enter PIN to access travel documents</p>
            <form onSubmit={handleSubmit}>
              <input
                type="password"
                maxLength={4}
                value={pin}
                onChange={(e) => setPin(e.target.value.replace(/[^0-9]/g, ""))}
                placeholder="\u2022\u2022\u2022\u2022"
                style={styles.loginInput}
                autoFocus
              />
              {error && <p style={styles.loginError}>Incorrect PIN</p>}
              <button type="submit" style={styles.loginButton}>Unlock</button>
            </form>
            <p style={styles.loginHint}>Default: 8041</p>
          </div>
          <style>{`
            @keyframes shake {
              0%, 100% { transform: translateX(0); }
              20%, 60% { transform: translateX(-10px); }
              40%, 80% { transform: translateX(10px); }
            }
          `}</style>
        </div>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Hermes PJB Travel \u2014 Japan in Bloom March 2027</title>
        <meta name="description" content="A premium travel guide for Mummy & Dad da Man's 3-week adventure in Japan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      {/* HERO WITH VIDEO BACKGROUND */}
      <div style={styles.heroSection}>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          style={Object.assign({}, styles.heroVideo, { transform: `translateY(${scrollY * 0.3}px)`, opacity: 0.22 })}
        >
          <source src="https://cdn.pixabay.com/video/2024/02/23/201565-916044064_large.mp4" type="video/mp4" />
          <source src="https://cdn.pixabay.com/video/2020/07/30/45349-445800817_large.mp4" type="video/mp4" />
        </video>
        <div style={styles.heroOverlay} />
        <div style={styles.heroContent}>
          <div style={styles.heroLogo}>
            Intelligence \u00d7 Precision \u00d7 Care
            <span style={styles.heroLogoMain}>HERMES PJB TRAVEL</span>
          </div>
          <div style={styles.heroTagline}>A Travel Guide for the Barden Family</div>
          <h1 style={styles.heroTitle}>
            <em style={styles.heroItalic}>Japan in Bloom</em>
            <br />
            March 2027
          </h1>
          <p style={styles.heroSubtitle}>A travel guide for Mummy &amp; Dad da Man\u2019s 3-week adventure in Japan</p>
          <div style={styles.heroDetails}>
            <div>\ud83c\uddfE <span>Osaka</span> \u00b7 <span>Tokyo</span> \u00b7 <span>Kyoto</span> \u00b7 <span>Hiroshima</span> \u00b7 <span>Kanazawa</span></div>
            <div>\ud83d\udcc5 <span>21 Days</span></div>
            <div>\ud83c\udf38 <span>Early Cherry Blossoms</span></div>
            <div>\ud83d\udddd\ufe0f <span>March 7\u201328, 2027</span></div>
          </div>
          <div style={styles.heroCredit}>Prepared with \u2764 by Mr P:JB \u00b7 Hermes \u00b7 June 2026</div>
        </div>
      </div>

      {/* MT FUJI HERO IMAGE - ROTATED BIG */}
      <div style={styles.heroImageContainer}>
        <img
          src="https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=1800&q=90&auto=format"
          alt="Mount Fuji with cherry blossoms at sunrise"
          style={styles.heroImage}
        />
        <div style={styles.heroImageOverlay}>
          <p style={styles.heroImageCaption}>Mount Fuji \u2014 Japan\u2019s sacred icon, framed by early spring blossoms</p>
        </div>
      </div>

      {/* TRIP OVERVIEW */}
      <section style={styles.section}>
        <div style={styles.sectionInner}>
          <div style={styles.sectionLabel}>Trip Overview</div>
          <h2 style={styles.sectionTitle}>The Journey at a <em style={styles.italic}>Glance</em></h2>
          <div style={styles.divider} />
          <p style={styles.introText}>
            Flights and accommodation have already been booked by Peter. Below is a curated travel guide with things to enjoy when you arrive.
          </p>
          <div style={styles.overviewGrid}>
            <div style={styles.glassCard}>
              <div style={styles.cardIcon}>\ud83d\udcc5</div>
              <h3 style={styles.cardLabel}>Dates</h3>
              <p style={styles.cardValue}>March 7 \u2013 March 28, 2027</p>
            </div>
            <div style={styles.glassCard}>
              <div style={styles.cardIcon}>\u2708\ufe0f</div>
              <h3 style={styles.cardLabel}>Flights</h3>
              <p style={styles.cardValue}>TBA</p>
            </div>
            <div style={styles.glassCard}>
              <div style={styles.cardIcon}>\ud83c\udf38</div>
              <h3 style={styles.cardLabel}>Season</h3>
              <p style={styles.cardValue}>Early Cherry Blossoms + Sumo</p>
            </div>
          </div>
          <div style={Object.assign({}, styles.overviewGrid, { gridTemplateColumns: "1fr 1fr", marginTop: "24px" })}>
            <div style={styles.glassCard}>
              <div style={styles.cardIcon}>\ud83c\udfe8</div>
              <h3 style={styles.cardLabel}>Accommodation</h3>
              <p style={styles.cardValue}>TBA</p>
            </div>
            <div style={styles.glassCard}>
              <div style={styles.cardIcon}>\ud83d\ude84</div>
              <h3 style={styles.cardLabel}>Transport</h3>
              <p style={styles.cardValue}>Green Car Shinkansen + Luggage Forwarding</p>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE GALLERY ROW 1 */}
      <section style={styles.imageGallerySection}>
        <div style={styles.imageGalleryGrid}>
          <div style={styles.galleryItem}>
            <img src="https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&q=90&auto=format" alt="Cherry blossoms in bloom" style={styles.galleryImage} />
            <div style={styles.galleryOverlay}>
              <span style={styles.galleryCaption}>Sakura season \u2014 nature\u2019s fleeting masterpiece</span>
            </div>
          </div>
          <div style={styles.galleryItem}>
            <img src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200&q=90&auto=format" alt="Osaka Castle" style={styles.galleryImage} />
            <div style={styles.galleryOverlay}>
              <span style={styles.galleryCaption}>Osaka Castle \u2014 a symbol of Japan\u2019s unification</span>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING INFO */}
      <section style={styles.sectionAlt}>
        <div style={styles.sectionInner}>
          <div style={styles.sectionLabel}>Useful Booking &amp; Info</div>
          <h2 style={styles.sectionTitle}>Things to <em style={styles.italic}>Sort Out</em></h2>
          <div style={styles.divider} />
          <div style={styles.flightCard}>
            <h4 style={styles.flightCardTitle}>\ud83d\udd25 Sumo Tournament Tickets</h4>
            <p><strong>March Grand Sumo Tournament (Haru Basho)</strong> is on in Osaka. Tickets go on sale <strong>February 6\u20138, 2027</strong> at 10:00 JST at <a href="https://sumo.pia.jp" target="_blank" rel="noopener noreferrer" style={styles.link}>sumo.pia.jp</a> \u2014 popular seats sell out fast.</p>
            <p style={{ marginTop: "8px", fontSize: "14px", color: "#64748b" }}>Book <strong>North Zone B or East Zone B</strong> seats (3rd floor) for good views. Seats with back support recommended.</p>
          </div>
          <div style={styles.flightCard}>
            <h4 style={styles.flightCardTitle}>\ud83d\udcdd Special Dining Reservations</h4>
            <p>If you\u2019d like a <strong>7-course kaiseki dinner</strong> (e.g. Oshikoji Okada in Kyoto) or popular restaurants, book 2\u20133 months ahead.</p>
          </div>
          <div style={styles.flightCard}>
            <h4 style={styles.flightCardTitle}>\ud83d\udcf1 Pocket WiFi or SIM Card</h4>
            <p>Pick up a <strong>pocket WiFi device</strong> or Japanese SIM card before departure for internet access. Essential for Google Maps, translation, and messaging.</p>
          </div>
          <div style={Object.assign({}, styles.flightCard, { background: "#fffbeb", borderLeft: "4px solid #c9a84c" })}>
            <h4 style={styles.flightCardTitle}>\u26a0\ufe0f Vernal Equinox Weekend \u2014 March 21-22, 2027</h4>
            <p><strong>Substitute holiday Monday 22 March</strong> = peak domestic travel window. Tokyo and Kyoto will be busy, so book attractions early.</p>
          </div>
        </div>
      </section>

      {/* TOKYO + SHINKANSEN IMAGES */}
      <section style={styles.imageGallerySection}>
        <div style={styles.imageGalleryGrid}>
          <div style={styles.galleryItem}>
            <img src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=1200&q=90&auto=format" alt="Tokyo Shibuya night" style={styles.galleryImage} />
            <div style={styles.galleryOverlay}>
              <span style={styles.galleryCaption}>Shibuya Crossing \u2014 the beating heart of Tokyo after dark</span>
            </div>
          </div>
          <div style={styles.galleryItem}>
            <img src="https://images.unsplash.com/photo-1565619625310-4b9d8b95a020?w=1200&q=90&auto=format" alt="Shinkansen bullet train" style={styles.galleryImage} />
            <div style={styles.galleryOverlay}>
              <span style={styles.galleryCaption}>Shinkansen E5 Series \u2014 engineering perfection at 320 km/h</span>
            </div>
          </div>
        </div>
      </section>

      {/* 25 EXPERIENCES */}
      <section style={styles.sectionAlt}>
        <div style={styles.sectionInner}>
          <div style={styles.sectionLabel}>Curated Experiences</div>
          <h2 style={styles.sectionTitle}>25 Things <em style={styles.italic}>You\u2019ll Love</em></h2>
          <div style={styles.divider} />
          <div style={styles.filterBar}>
            {CATEGORIES.map(cat => (
              <button
                key={cat.key}
                onClick={() => setFilter(cat.key)}
                style={Object.assign({}, styles.filterButton, filter === cat.key ? styles.filterButtonActive : {})}
              >
                <span style={{ marginRight: "6px" }}>{cat.emoji}</span>
                {cat.label}
              </button>
            ))}
          </div>
          <div style={styles.experiencesGrid}>
            {filteredExperiences.map((item) => (
              <div
                key={item.id}
                style={styles.experienceCard}
                onClick={() => openModal(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === "Enter") openModal(item) }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)"
                  e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.15)"
                  e.currentTarget.querySelector("img").style.transform = "scale(1.08)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)"
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.06)"
                  e.currentTarget.querySelector("img").style.transform = "scale(1)"
                }}
              >
                <div style={styles.cardImageWrapper}>
                  <img src={item.image} alt={item.title} style={styles.cardImage} loading="lazy" />
                  <div style={styles.cardImageOverlay}>
                    <span style={styles.cardNumber}>{String(item.id).padStart(2, "0")}</span>
                  </div>
                </div>
                <div style={styles.cardContent}>
                  <div style={styles.cardCategory}>{item.emoji} {item.category}</div>
                  <h4 style={styles.cardTitle}>{item.title}</h4>
                  <p style={styles.cardDescription}>{item.description}</p>
                  <div style={styles.cardFooter}>
                    <span style={styles.cardLocation}>\ud83d\udccd {item.location}</span>
                    <span style={styles.cardPrice}>{item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAVEL TIPS */}
      <section style={styles.section}>
        <div style={styles.sectionInner}>
          <div style={styles.sectionLabel}>Handy Tips</div>
          <h2 style={styles.sectionTitle}>Quick <em style={styles.italic}>Guidance</em> for Japan</h2>
          <div style={styles.divider} />
          <div style={styles.tipsGrid}>
            {[
              { icon: "\ud83d\udcb4", title: "Cash is Still King", desc: "Many smaller shops and temples are cash-only. 7-Eleven ATMs accept most cards." },
              { icon: "\ud83d\udde3\ufe0f", title: "Language", desc: "English signage in tourist areas. Download Google Translate offline Japanese." },
              { icon: "\ud83d\udeaa", title: "Trains & Stations", desc: "Get Suica/Pasmo IC cards. Google Maps has perfect JR schedules." },
              { icon: "\ud83d\udc5f", title: "Comfortable Shoes", desc: "You\u2019ll walk a lot. Many temples require removing shoes often." },
              { icon: "\ud83d\udce6", title: "Luggage Forwarding", desc: "Ask your hotel about luggage forwarding to your next stop." },
              { icon: "\ud83c\udf7b\ufe0f", title: "Etiquette", desc: "Don\u2019t tip. Bow slightly. Low voice on trains. Slurping noodles = appreciation!" },
            ].map((tip, i) => (
              <div key={i} style={styles.tipCard}>
                <div style={styles.tipIcon}>{tip.icon}</div>
                <h4 style={styles.tipTitle}>{tip.title}</h4>
                <p style={styles.tipDesc}>{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <div style={styles.footerLogo}>
          Intelligence \u00d7 Precision \u00d7 Care
          <span style={styles.footerLogoMain}>HERMES PJB TRAVEL</span>
        </div>
        <p style={{ marginTop: "20px", color: "rgba(255,255,255,0.5)", fontSize: "13px" }}>Travel advice prepared with love</p>
        <p style={{ marginTop: "10px", color: "rgba(255,255,255,0.3)", fontSize: "11px" }}>Made with \u2764 by Mr P:JB \u00b7 Hermes \u00b7 June 2026 \u00b7 Information subject to change</p>
      </footer>

      {/* FULL SCREEN MODAL */}
      {modalOpen && currentItem && (
        <div style={styles.modalBackdrop} onClick={closeModal}>
          <div style={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
            {/* Big X Close */}
            <button style={styles.modalClose} onClick={closeModal} aria-label="Close">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            {/* Left Arrow */}
            <button style={styles.modalNavLeft} onClick={() => navigateModal(-1)} aria-label="Previous">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            {/* Right Arrow */}
            <button style={styles.modalNavRight} onClick={() => navigateModal(1)} aria-label="Next">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
            {/* Image */}
            <div style={styles.modalImageContainer}>
              <img src={currentItem.image} alt={currentItem.title} style={styles.modalImage} />
              <div style={styles.modalImageOverlay}>
                <span style={styles.modalImageNumber}>{String(currentItem.id).padStart(2, "0")} / 25</span>
              </div>
            </div>
            {/* Content */}
            <div style={styles.modalContent}>
              <div style={styles.modalCategory}>{currentItem.emoji} {currentItem.category}</div>
              <h2 style={styles.modalTitle}>{currentItem.title}</h2>
              <p style={styles.modalDescription}>{currentItem.description}</p>
              <div style={styles.modalDetails}>
                <div style={styles.modalDetailRow}>
                  <span style={styles.modalDetailLabel}>\ud83d\udccd Location</span>
                  <span style={styles.modalDetailValue}>{currentItem.location}</span>
                </div>
                <div style={styles.modalDetailRow}>
                  <span style={styles.modalDetailLabel}>\ud83d\udcb0 Price</span>
                  <span style={styles.modalDetailValue}>{currentItem.price}</span>
                </div>
                <div style={styles.modalDetailRow}>
                  <span style={styles.modalDetailLabel}>\u23f1 Duration</span>
                  <span style={styles.modalDetailValue}>{currentItem.duration}</span>
                </div>
                <div style={styles.modalDetailRow}>
                  <span style={styles.modalDetailLabel}>\ud83d\udca1 Insider Tip</span>
                  <span style={styles.modalDetailValue}>{currentItem.tips}</span>
                </div>
              </div>
              <a href={currentItem.bookingUrl} target="_blank" rel="noopener noreferrer" style={styles.modalCta}>
                Book / Learn More →
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Inter', sans-serif; background: #faf7f0; color: #0f172a; line-height: 1.7; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(30px) scale(0.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
      `}</style>
    </>
  )
}

const styles = {
  loginContainer: { minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, #0a1628 0%, #1a3a5c 50%, #2d5a8a 100%)" },
  loginCard: { background: "rgba(255,255,255,0.95)", backdropFilter: "blur(20px)", borderRadius: "24px", padding: "50px 40px", textAlign: "center", maxWidth: "400px", width: "90%", boxShadow: "0 25px 80px rgba(0,0,0,0.4)" },
  loginIcon: { fontSize: "48px", marginBottom: "16px" },
  loginTitle: { fontSize: "24px", color: "#1a3a5c", marginBottom: "8px", fontWeight: 600, fontFamily: "'Playfair Display', serif" },
  loginSubtitle: { fontSize: "13px", color: "#475569", marginBottom: "30px", letterSpacing: "1px" },
  loginInput: { width: "160px", fontSize: "28px", letterSpacing: "12px", textAlign: "center", padding: "12px", border: "2px solid #e2e8f0", borderRadius: "12px", outline: "none", fontFamily: "monospace", background: "#f8fafc" },
  loginError: { color: "#d80a18", fontSize: "13px", marginTop: "12px" },
  loginButton: { display: "block", width: "100%", marginTop: "20px", padding: "16px", background: "linear-gradient(135deg, #1a3a5c, #2d5a8a)", color: "white", borderRadius: "12px", fontSize: "16px", letterSpacing: "2px", textTransform: "uppercase", fontWeight: 600 },
  loginHint: { fontSize: "11px", color: "#94a3b8", marginTop: "20px" },
  heroSection: { minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", color: "white", position: "relative", overflow: "hidden", padding: "40px 20px" },
  heroVideo: { position: "absolute", top: 0, left: 0, width: "100%", height: "120%", objectFit: "cover", zIndex: 0 },
  heroOverlay: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(180deg, rgba(10,22,40,0.7) 0%, rgba(26,58,92,0.55) 40%, rgba(45,90,138,0.7) 100%)", zIndex: 1 },
  heroContent: { position: "relative", zIndex: 2, maxWidth: "800px" },
  heroLogo: { fontSize: "13px", letterSpacing: "6px", textTransform: "uppercase", color: "#c9a84c", marginBottom: "20px", fontWeight: 500 },
  heroLogoMain: { fontSize: "clamp(20px, 4vw, 32px)", letterSpacing: "3px", display: "block", marginTop: "8px", fontWeight: 700, fontFamily: "'Playfair Display', serif" },
  heroTagline: { fontSize: "12px", letterSpacing: "4px", textTransform: "uppercase", color: "rgba(201,168,76,0.8)", marginBottom: "60px" },
  heroTitle: { fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 400, lineHeight: 1.15, marginBottom: "24px", fontFamily: "'Playfair Display', serif" },
  heroItalic: { fontStyle: "italic", color: "#c9a84c", fontWeight: 600 },
  heroSubtitle: { fontSize: "clamp(16px, 2.5vw, 22px)", color: "rgba(255,255,255,0.85)", marginBottom: "50px", fontStyle: "italic", fontFamily: "'Playfair Display', serif" },
  heroDetails: { display: "flex", gap: "40px", justifyContent: "center", flexWrap: "wrap", fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" },
  heroCredit: { marginTop: "50px", fontSize: "11px", color: "rgba(255,255,255,0.4)", letterSpacing: "2px" },
  heroImageContainer: { position: "relative", width: "100%", maxWidth: "1400px", margin: "0 auto", marginTop: "-100px", zIndex: 10, padding: "0 40px" },
  heroImage: { width: "100%", height: "clamp(300px, 50vw, 520px)", objectFit: "cover", borderRadius: "20px", boxShadow: "0 30px 80px rgba(0,0,0,0.25), 0 0 0 1px rgba(201,168,76,0.1)", transform: "rotate(-1.5deg)" },
  heroImageOverlay: { position: "absolute", bottom: "24px", left: "50%", transform: "translateX(-50%)", background: "rgba(0,0,0,0.6)", backdropFilter: "blur(12px)", padding: "12px 28px", borderRadius: "100px", whiteSpace: "nowrap" },
  heroImageCaption: { color: "white", fontSize: "clamp(11px, 1.5vw, 14px)", fontStyle: "italic" },
  section: { padding: "clamp(60px, 10vw, 100px) 40px", background: "#faf7f0" },
  sectionAlt: { padding: "clamp(60px, 10vw, 100px) 40px", background: "linear-gradient(180deg, #f1ece3 0%, #faf7f0 100%)" },
  sectionInner: { maxWidth: "1200px", margin: "0 auto" },
  sectionLabel: { fontSize: "12px", letterSpacing: "4px", textTransform: "uppercase", color: "#c9a84c", marginBottom: "12px", fontWeight: 600 },
  sectionTitle: { fontSize: "clamp(28px, 4vw, 42px)", color: "#1a3a5c", marginBottom: "8px", fontWeight: 600, fontFamily: "'Playfair Display', serif" },
  italic: { fontStyle: "italic", color: "#c9a84c" },
  divider: { width: "60px", height: "3px", background: "linear-gradient(90deg, #c9a84c, #e8d48b)", margin: "24px 0 40px", borderRadius: "2px" },
  introText: { fontSize: "17px", color: "#475569", maxWidth: "700px", lineHeight: 1.8 },
  overviewGrid: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "24px", marginTop: "40px" },
  glassCard: { background: "rgba(255,255,255,0.7)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.8)", padding: "32px", borderRadius: "20px", boxShadow: "0 8px 32px rgba(0,0,0,0.06)", textAlign: "center", transition: "transform 0.3s ease" },
  cardIcon: { fontSize: "36px", marginBottom: "12px" },
  cardLabel: { fontSize: "12px", color: "#64748b", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "8px", fontWeight: 600 },
  cardValue: { fontSize: "18px", color: "#0f172a", fontWeight: 600 },
  imageGallerySection: { padding: "0 40px 80px", background: "#faf7f0" },
  imageGalleryGrid: { maxWidth: "1400px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" },
  galleryItem: { position: "relative", borderRadius: "20px", overflow: "hidden", boxShadow: "0 12px 40px rgba(0,0,0,0.12)", cursor: "pointer" },
  galleryImage: { width: "100%", height: "clamp(240px, 35vw, 380px)", objectFit: "cover", transition: "transform 0.6s ease" },
  galleryOverlay: { position: "absolute", bottom: 0, left: 0, right: 0, padding: "24px", background: "linear-gradient(transparent, rgba(0,0,0,0.7))" },
  galleryCaption: { color: "white", fontSize: "clamp(12px, 1.5vw, 15px)", fontStyle: "italic" },
  flightCard: { background: "rgba(255,255,255,0.8)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.9)", borderRadius: "16px", padding: "28px", marginBottom: "16px", boxShadow: "0 4px 20px rgba(0,0,0,0.04)", borderLeft: "4px solid #c9a84c" },
  flightCardTitle: { fontSize: "17px", color: "#1a3a5c", marginBottom: "12px", fontWeight: 600 },
  link: { color: "#2563eb", textDecoration: "underline", textUnderlineOffset: "2px" },
  filterBar: { display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "40px" },
  filterButton: { padding: "10px 20px", borderRadius: "100px", fontSize: "13px", fontWeight: 500, color: "#475569", background: "rgba(255,255,255,0.6)", border: "1px solid rgba(201,168,76,0.2)", transition: "all 0.3s ease", display: "flex", alignItems: "center" },
  filterButtonActive: { background: "linear-gradient(135deg, #1a3a5c, #2d5a8a)", color: "white", border: "1px solid #1a3a5c", boxShadow: "0 4px 16px rgba(26,58,92,0.3)" },
  experiencesGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "28px" },
  experienceCard: { background: "rgba(255,255,255,0.85)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.9)", borderRadius: "24px", overflow: "hidden", cursor: "pointer", transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)", boxShadow: "0 8px 32px rgba(0,0,0,0.06)" },
  cardImageWrapper: { position: "relative", overflow: "hidden" },
  cardImage: { width: "100%", height: "220px", objectFit: "cover", transition: "transform 0.6s ease" },
  cardImageOverlay: { position: "absolute", top: "16px", right: "16px" },
  cardNumber: { display: "inline-block", background: "rgba(0,0,0,0.6)", backdropFilter: "blur(12px)", color: "#c9a84c", fontSize: "14px", fontWeight: 700, padding: "6px 14px", borderRadius: "100px", letterSpacing: "1px" },
  cardContent: { padding: "24px" },
  cardCategory: { fontSize: "11px", textTransform: "uppercase", letterSpacing: "2px", color: "#c9a84c", fontWeight: 600, marginBottom: "8px" },
  cardTitle: { fontSize: "18px", color: "#1a3a5c", marginBottom: "8px", fontWeight: 600, fontFamily: "'Playfair Display', serif", lineHeight: 1.3 },
  cardDescription: { fontSize: "13px", color: "#64748b", lineHeight: 1.6, marginBottom: "16px" },
  cardFooter: { display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" },
  cardLocation: { fontSize: "12px", color: "#64748b" },
  cardPrice: { fontSize: "12px", color: "#1a3a5c", fontWeight: 600 },
  tipsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" },
  tipCard: { background: "rgba(255,255,255,0.7)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.8)", borderRadius: "20px", padding: "28px", boxShadow: "0 4px 20px rgba(0,0,0,0.04)" },
  tipIcon: { fontSize: "48px", marginBottom: "12px" },
  tipTitle: { fontSize: "16px", color: "#1a3a5c", marginBottom: "8px", fontWeight: 600 },
  tipDesc: { fontSize: "13px", color: "#64748b", lineHeight: 1.6 },
  footer: { background: "linear-gradient(135deg, #0a1628 0%, #1a3a5c 100%)", color: "white", textAlign: "center", padding: "80px 40px" },
  footerLogo: { color: "#c9a84c", fontSize: "13px", letterSpacing: "6px", textTransform: "uppercase", fontWeight: 500 },
  footerLogoMain: { fontSize: "clamp(18px, 3vw, 28px)", display: "block", marginTop: "8px", letterSpacing: "3px", fontWeight: 700, fontFamily: "'Playfair Display', serif" },
  modalBackdrop: { position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.88)", backdropFilter: "blur(24px)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: "40px" },
  modalContainer: { position: "relative", background: "white", borderRadius: "28px", maxWidth: "900px", width: "100%", maxHeight: "90vh", overflow: "auto", boxShadow: "0 40px 100px rgba(0,0,0,0.4)" },
  modalClose: { position: "absolute", top: "20px", right: "20px", width: "48px", height: "48px", borderRadius: "50%", background: "rgba(0,0,0,0.5)", backdropFilter: "blur(12px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10, transition: "background 0.2s" },
  modalNavLeft: { position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", width: "52px", height: "52px", borderRadius: "50%", background: "rgba(0,0,0,0.4)", backdropFilter: "blur(12px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10 },
  modalNavRight: { position: "absolute", right: "16px", top: "50%", transform: "translateY(-50%)", width: "52px", height: "52px", borderRadius: "50%", background: "rgba(0,0,0,0.4)", backdropFilter: "blur(12px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10 },
  modalImageContainer: { position: "relative" },
  modalImage: { width: "100%", height: "clamp(250px, 40vw, 400px)", objectFit: "cover" },
  modalImageOverlay: { position: "absolute", top: "20px", right: "20px" },
  modalImageNumber: { display: "inline-block", background: "rgba(0,0,0,0.6)", backdropFilter: "blur(12px)", color: "white", fontSize: "13px", fontWeight: 600, padding: "8px 16px", borderRadius: "100px" },
  modalContent: { padding: "40px" },
  modalCategory: { fontSize: "12px", textTransform: "uppercase", letterSpacing: "3px", color: "#c9a84c", fontWeight: 600, marginBottom: "12px" },
  modalTitle: { fontSize: "clamp(24px, 4vw, 36px)", color: "#1a3a5c", marginBottom: "16px", fontWeight: 700, fontFamily: "'Playfair Display', serif", lineHeight: 1.2 },
  modalDescription: { fontSize: "16px", color: "#475569", lineHeight: 1.7, marginBottom: "28px" },
  modalDetails: { display: "grid", gap: "16px", marginBottom: "28px" },
  modalDetailRow: { display: "flex", gap: "16px", alignItems: "flex-start" },
  modalDetailLabel: { fontSize: "13px", fontWeight: 600, color: "#1a3a5c", minWidth: "100px", flexShrink: 0 },
  modalDetailValue: { fontSize: "14px", color: "#475569", lineHeight: 1.6 },
  modalCta: { display: "inline-block", padding: "14px 32px", background: "linear-gradient(135deg, #1a3a5c, #2d5a8a)", color: "white", borderRadius: "12px", fontSize: "15px", fontWeight: 600, boxShadow: "0 8px 24px rgba(26,58,92,0.3)", transition: "transform 0.2s, box-shadow 0.2s" },
}

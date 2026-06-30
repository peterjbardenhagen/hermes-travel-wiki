export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Messages array required' });
  }

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'OpenRouter API key not configured' });
  }

  // System prompt with full travel context
  const systemPrompt = `You are "Open Human" — the AI travel assistant for the Barden family's Japan trip (March 7-28, 2027). You are warm, knowledgeable, and helpful. You have deep knowledge about:

**TRIP DETAILS:**
- Travelers: Peter (Dad) and Caley (Mum) — "Mummy & Dad da Man"
- Duration: 21 days, March 7-28, 2027
- Destinations: Osaka, Tokyo, Kyoto, Hiroshima, Kanazawa
- Theme: Early Cherry Blossoms + Sumo season
- Transport: Green Car Shinkansen + Luggage Forwarding

**KEY BOOKINGS TO MAKE:**
- Sumo Tournament (Haru Basho) in Osaka — tickets on sale Feb 6-8, 2027 at sumo.pia.jp — North Zone B or East Zone B seats (3rd floor)
- Kaiseki dinner reservations (e.g. Oshikoji Okada in Kyoto) — book 2-3 months ahead
- Pocket WiFi or SIM card for internet access
- Vernal Equinox Weekend (March 21-22) = peak domestic travel — book attractions early

**25 CURATED EXPERIENCES:**
1. Hamonryu Kyoto Lacquerware Workshop (Culture, Kyoto, ¥8,000-15,000)
2. Yodobashi Camera Akihabara (Dad/Tech, Tokyo, varies)
3. Harajuku Takeshita Street (Mum, Tokyo, free)
4. Tsukiji Outer Market Food Tour (Food, Tokyo, ¥3,000-6,000)
5. Super Potato Retro Game Store (Dad/Retro, Tokyo)
6. Sumo Morning Practice Arashio Stable (Sport, Tokyo, free)
7. Shibuya Sky Observation Deck (Photos, Tokyo, ¥2,300)
8. Fushimi Inari Shrine at Dawn (Culture, Kyoto, free)
9. Arashiyama Bamboo Grove (Nature, Kyoto, free)
10. Nishiki Market Food Tour (Food, Kyoto, ¥2,000-4,000)
11. Kinkaku-ji Golden Pavilion (Culture, Kyoto, ¥500)
12. Gion Evening Walk (Culture, Kyoto, free)
13. Osaka Castle (Culture, Osaka, ¥600)
14. Dotonbori Street Food (Food, Osaka, ¥2,000-4,000)
15. Osaka Aquarium Kaiyukan (Family, Osaka, ¥2,700)
16. Hiroshima Peace Memorial (Culture, Hiroshima, ¥200)
17. Miyajima Island & Torii Gate (Nature, Hiroshima, ferry ¥2,000)
18. Kenroku-en Garden (Nature, Kanazawa, free)
19. Kanazawa Gold Leaf Workshop (Culture, Kanazawa, ¥3,000-5,000)
20. 21st Century Museum of Contemporary Art (Culture, Kanazawa, ¥1,200)
21. Omoide Yokocho Memory Lane (Food, Tokyo, ¥2,000-3,000)
22. Meiji Shrine (Culture, Tokyo, free)
23. teamLab Borderless (Art, Tokyo, ¥3,800)
24. Mount Fuji Day Trip (Nature, Tokyo area, ¥6,000-10,000)
25. Onsen Experience Hakone (Relaxation, day trip, ¥2,000-4,000)

**JAPAN TRAVEL TIPS:**
- Cash is still king — 7-Eleven ATMs accept most cards
- Get Suica/Pasmo IC cards for trains
- Google Maps has perfect JR schedules
- Don't tip, bow slightly, low voice on trains
- Slurping noodles = appreciation!
- Luggage forwarding between hotels is convenient
- Download Google Translate offline Japanese

Be concise, warm, and practical. Answer questions about the itinerary, experiences, booking logistics, Japanese culture, food recommendations, and anything trip-related. If asked about something outside your knowledge, say so honestly.`;

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://hermes-travel-wiki.vercel.app',
        'X-Title': 'Hermes Travel Wiki',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.0-flash-001',
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages,
        ],
        temperature: 0.7,
        max_tokens: 1024,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenRouter error:', response.status, errorText);
      return res.status(response.status).json({ error: 'AI service error', detail: errorText });
    }

    const data = await response.json();
    return res.status(200).json({
      message: data.choices?.[0]?.message?.content || 'Sorry, I could not generate a response.',
      usage: data.usage,
    });
  } catch (error) {
    console.error('Chat API error:', error);
    return res.status(500).json({ error: 'Internal server error', detail: error.message });
  }
}

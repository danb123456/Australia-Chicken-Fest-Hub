import React, { useState } from 'react';
import { BookOpen, BarChart2, ShieldAlert, CheckCircle2 } from 'lucide-react';

export function ContextView() {
  const [section, setSection] = useState('market');

  const sectionDefs = [
    { id: 'market',    label: 'AU Market Overview', icon: <BarChart2 size={16} /> },
    { id: 'casestudy', label: 'Case Studies',        icon: <BookOpen size={16} /> },
    { id: 'risks',    label: "Devil's Advocate",    icon: <ShieldAlert size={16} /> },
  ];

  return (
    <div style={{ animation: 'fadeIn 0.4s ease' }}>
      <div className="header-row">
        <div>
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <BookOpen size={28} /> MARKET CONTEXT & INTELLIGENCE
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginTop: '4px' }}>
            Research-backed analysis — updated with 2025/2026 data — to inform the Australian Poultry Festival strategy
          </p>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '12px', marginBottom: '32px' }}>
        {sectionDefs.map(s => (
          <button key={s.id} className={`filter-btn ${section === s.id ? 'active' : ''}`}
            onClick={() => setSection(s.id)}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px' }}
          >
            {s.icon} {s.label}
          </button>
        ))}
      </div>
      {section === 'market' && <MarketOverview />}
      {section === 'casestudy' && <CaseStudies />}
      {section === 'risks' && <RisksView />}
    </div>
  );
}

function MarketOverview() {
  const stats = [
    { label: 'Taste of Summer — Hobart (Dec 25/Jan 26)', value: '98,000+', sub: 'Up from 87k the prior season — a 13% single-year surge' },
    { label: 'Chicken Consumption in AU (2025)', value: '50kg/head/yr', sub: 'Projected to exceed 55kg by 2026 · QSR chicken sales >$4B by 2032' },
    { label: 'Orange FOOD Week 2025 Ticket Growth', value: '+31%', sub: 'Avg visitor stay up to 2.5 nights; 1-in-3 stayed 4+ nights' },
    { label: 'Wing Fest UK 2025 — 6-City Expansion', value: '11th Year', sub: '500,000+ wings at London leg alone · 60 traders across 6 cities' },
  ];

  const comparisons = [
    {
      topic: 'Food Festival Maturity (2025/2026 Snapshot)',
      au: 'The AU food festival market remains in a high-growth, post-COVID expansion phase with no sign of peaking. The Hobart Taste of Summer hit 98,000 attendees in Dec 2025/Jan 2026 — up 13% year-on-year. Tasting Australia (Adelaide) confirmed its 19th edition for May 2026. New festivals are emerging and existing ones are expanding, rather than consolidating.',
      uk: 'Wing Fest UK expanded from 2 to 6 cities in 2025 — its 11th year. Now visiting Derby, London, Birmingham, Bristol, Manchester and Sheffield, with ~60 traders competing across events. The London leg alone expected over 500,000 wings served over a long weekend. The format is proven and scalable.',
      gap: 'AU\\'s festival scene is growing faster than the UK\\'s in percentage terms. But the UK\\'s specialist chicken festival circuit is more developed. No "Wing Fest Australia" equivalent exists — this is the direct gap we are entering.'
    },
    {
      topic: 'Chicken Popularity & Consumer Demand (2026)',
      au: 'Australians consume 50kg+ of chicken per person per year, forecast to exceed 55kg by 2026. Chicken is the #1 most consumed meat in AU. QSR chicken sector is forecast to surpass AUD $4B by 2032. Culturally, chicken spans every demographic and income bracket — it is the universal Australian protein.',
      uk: 'Wing Fest 2025 expects 500,000+ wings served at its London event over a single long weekend. In 11 years the festival has grown from one London venue to a 6-city national tour. Chicken tenders overtook burgers as the best-selling festival dish across the UK in 2024.',
      gap: 'If Wing Fest can draw those numbers in a mature market, the AU equivalent — where per-capita chicken consumption is even higher — should be at minimum equally viable. The concept is proven; the territory is untapped.'
    },
    {
      topic: 'Consumer Experience Trends (Late 2025)',
      au: 'The Orange FOOD Week 2025 data is instructive: +31% ticket growth AND visitors staying on average 2.5 nights — suggesting food events are now driving meaningful tourism with economic multipliers beyond the gate. One-third of visitors stayed 4+ nights, double the previous year. Food events are becoming travel destinations, not just day-trips.',
      uk: 'In 2025, the UK festival sector projected 5.7% annual revenue growth, building on 4% historic CAGR from 2018–2023. Experiential food is the fastest-growing sub-category. Consumers are prioritising quality food experiences even during cost-of-living pressure — the "affordable luxury" positioning remains strong.',
      gap: 'The overnight stay behaviour visible in Australian food festivals in 2025 is a signal: visitors are not just coming for hours, they\\'re converting into mini-breaks. A 3-day Brisbane/Sydney/Melbourne tour format directly capitalises on this trend.'
    },
    {
      topic: 'Alcohol Culture & Bar Revenue (2025/2026)',
      au: 'Craft beer and cocktail culture continues to grow strongly. At major food festivals in 2025, bar revenue consistently outperforms food revenue per attendee. Alcohol prices remain 20–30% higher than the UK. The "Drink Victorian / Drink Local" movement is actively promoted by state governments, creating ready-made partnership opportunities with AU craft breweries.',
      uk: 'Wing Fest consistently reports bar revenue as the largest single revenue line. At UK festivals broadly, alcohol spend per head exceeds food spend at ratio of ~1.35:1. Non-alcoholic alternatives are growing (35% in 2024) but traditional drinks dominate. Bar efficiency is the biggest margin driver.',
      gap: 'AU\\'s structural bar margin advantage (higher prices, growing craft scene, government-backed local brand partnerships) means bar revenue should outperform our UK P&L assumptions. This is a hidden upside in the financial model.'
    },
  ];

  return (
    <div>
      {/* Recency badge */}
      <div style={{ background: 'rgba(255,204,0,0.07)', border: '1px solid rgba(255,204,0,0.25)', borderRadius: '8px', padding: '12px 16px', marginBottom: '28px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontSize: '1.2rem' }}>📅</span>
        <span style={{ fontSize: '0.85rem' }}>Stats updated with <strong style={{ color: 'var(--color-accent)' }}>late 2025 / early 2026</strong> data where available. Case studies include Meatstock 2026 tour, Taste of Summer Dec 2025/Jan 2026, and Wing Fest UK 2025 (6-city expansion).</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '40px' }}>
        {stats.map(s => (
          <div key={s.label} className="card" style={{ borderTop: '3px solid var(--color-accent)' }}>
            <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', fontWeight: 700, marginBottom: '8px' }}>{s.label}</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--color-accent)', marginBottom: '4px' }}>{s.value}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{s.sub}</div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {comparisons.map(c => (
          <div key={c.topic} className="card">
            <h4 style={{ color: 'var(--color-accent)', marginBottom: '16px' }}>{c.topic}</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '14px' }}>
              <div>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#4CAF50', marginBottom: '6px' }}>🇦🇺 AUSTRALIA</div>
                <p style={{ fontSize: '0.88rem', lineHeight: 1.7 }}>{c.au}</p>
              </div>
              <div style={{ borderLeft: '1px solid var(--color-border)', paddingLeft: '24px' }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#5b9bd5', marginBottom: '6px' }}>🇬🇧 UNITED KINGDOM</div>
                <p style={{ fontSize: '0.88rem', lineHeight: 1.7 }}>{c.uk}</p>
              </div>
            </div>
            <div style={{ background: 'rgba(255,204,0,0.06)', border: '1px solid rgba(255,204,0,0.2)', borderRadius: '8px', padding: '12px' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-accent)' }}>💡 OPPORTUNITY GAP: </span>
              <span style={{ fontSize: '0.85rem' }}>{c.gap}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CaseStudies() {
  const caseStudies = [
    {
      name: 'Meatstock Australia',
      type: 'BBQ, Music & Culture Festival',
      cities: 'Sydney · Toowoomba · Gippsland (NEW 2026) · NZ',
      relevance: 'HIGH',
      recency: '2026',
      stats: [
        { label: '2022 Total Attendance', value: '50,000+', note: 'Melbourne, Sydney & Toowoomba — AU\'s biggest BBQ festival' },
        { label: '2023 Total Attendance', value: '60,000+', note: 'Growth confirmed across all 3 events' },
        { label: '2026 Expansion', value: 'Gippsland NEW', note: 'Also Sydney May 1–2, Toowoomba Apr 10–11 confirmed' },
        { label: 'Programme 2026', value: 'BBQ + PBR + Music', note: 'PBR Bull Riding, World Butcher Wars, Fire Kitchen concept' },
      ],
      analysis: 'Meatstock is heading into its biggest ever year in 2026 — expanding to Gippsland as a fourth Australian location alongside confirmed dates in Sydney (May 1–2) and Toowoomba (Apr 10–11). The 2025 Sydney event introduced the "Fire Kitchen" concept, bringing world-class pitmasters to serve tasting dishes cooked over live fire. The 2026 programme adds PBR (Professional Bull Riding) to the roster alongside the established World Butcher Wars and BBQ competitions. This spectacle-led growth model — where competitive entertainment drives return visits — is directly applicable to our concept.',
      lessons: [
        '2026 confirmed: Meatstock is growing by geography (new cities) AND programming depth simultaneously',
        'The "Fire Kitchen" concept — premium pitmaster dining within a mass-market event — is a model we should replicate',
        'PBR Bull Riding proves that a food festival can host completely unrelated "must-see" events to drive gate',
        'World Butcher Wars = our Chicken Cook-Off equivalent. Competition formats create media moments and return visits',
      ]
    },
    {
      name: 'Taste of Summer — Hobart',
      type: 'Waterfront Food & Culture Festival',
      cities: 'Hobart, Tasmania (Dec–Jan)',
      relevance: 'HIGH',
      recency: '2025/26',
      stats: [
        { label: 'Dec 2025/Jan 2026 Attendance', value: '98,000+', note: 'Record high — up from 87,000 the prior season' },
        { label: 'Year-on-Year Growth', value: '+13%', note: 'Consistent upward trajectory' },
        { label: 'Format', value: 'Multi-week', note: 'Running across several weeks over the summer holiday period' },
        { label: 'Market Position', value: 'Free-access', note: 'Free entry model drives volume; revenue from food/bar' },
      ],
      analysis: 'The most recent hard attendance data point available (Dec 2025/Jan 2026) shows AU food event demand is not plateauing — it is still actively growing. Taste of Summer\'s 98,000 figure, achieved in deepest summer holiday season, confirms that when the product is right and the entry barrier is low, Australians will attend in very large numbers. Their free-entry-with-revenue-from-food-and-bar model is one we should seriously consider for the wandering/outer zone of our festival format.',
      lessons: [
        'Dec 2025/Jan 2026 data confirms AU food event demand is still actively growing — not plateauing',
        'Free-entry outer zones drive footfall volume; commercial revenue then comes from bar and food',
        'Summer timing in AU works for festivals — it just requires proper shade, water and heat management',
        'A 13% single-year growth rate in 2025/26 validates our timing as landing in a sustained growth window',
      ]
    },
    {
      name: 'Wing Fest UK — 2025 National Tour',
      type: 'Specialist Chicken Wing Festival',
      cities: 'Derby · London · Birmingham · Bristol · Manchester · Sheffield',
      relevance: 'HIGH',
      recency: '2025',
      stats: [
        { label: '2025 Cities', value: '6 cities', note: 'Expanded from 2 cities in its earlier years' },
        { label: 'Years Running', value: '11 years', note: 'In its 11th year in London in 2025' },
        { label: 'London Leg', value: '500,000+ wings', note: 'Expected over one long weekend' },
        { label: 'Traders & Competition', value: '~60 traders', note: 'Best Buffalo, Best BBQ, Best Wild Wing competitions' },
      ],
      analysis: 'Wing Fest UK is our closest global comparator — a dedicated chicken wing festival now running a 6-city national tour in its 11th year. The London event alone expects 500,000+ wings served over a single long weekend. This is the direct proof-of-concept for our Australian format: the Wing Fest model is a scalable, multi-city, specialist chicken event that works. It has not been replicated in Australia. We are not guessing — we are following a proven international playbook into an untapped market.',
      lessons: [
        'An 11-year, 6-city chicken festival is proof the specialist format is sustainable and scalable',
        '500,000+ wings at one event over a weekend directly validates the appetite for our format in AU',
        '~60 independent traders competing for wing titles is the exact structure our Chicken Fest should have',
        'Wing Fest hasn\'t launched in Australia — this is an explicit market gap we are the first to fill professionally',
      ]
    },
    {
      name: 'Orange FOOD Week 2025',
      type: 'Regional Food & Wine Festival',
      cities: 'Orange, NSW',
      relevance: 'MEDIUM',
      recency: '2025',
      stats: [
        { label: '2025 Ticket Growth', value: '+31%', note: 'Year-on-year overall ticket sales increase' },
        { label: 'Visitor Stay (2025)', value: '2.5 nights avg', note: 'Up significantly from prior year; 1-in-3 stayed 4+ nights' },
        { label: 'Economic Model', value: 'Tourism multiplier', note: 'Significant downstream visitor economy impact' },
        { label: '2026', value: 'More events', note: 'Expanding the programme further off the 2025 success' },
      ],
      analysis: 'Orange FOOD Week 2025 is a critical data point for an often-overlooked trend: food festivals in Australia are no longer just day-trips — they\'re becoming multi-night tourism destinations. A +31% ticket growth combined with average stays of 2.5 nights signals that attendees are treating the festival as a full weekend break. If this pattern holds for a metro event like ours in Brisbane or Sydney, the downstream economic impact — and the case for government/tourism board partnerships — becomes significantly stronger.',
      lessons: [
        '+31% ticket growth in 2025 confirms regional AU food festival demand is still accelerating',
        'Visitors extending stays to 2.5 nights means food festivals generate significant tourism multipliers beyond the gate',
        'This overnight-stay data strengthens the case for government and tourism board co-investment in our events',
        '2026 programme expansion from a 2025 success is the model: launch well, then compound year-on-year',
      ]
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {caseStudies.map(cs => (
        <div key={cs.name} className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                <h3 style={{ marginBottom: 0 }}>{cs.name}</h3>
                <span style={{ background: 'rgba(76,175,80,0.15)', color: '#4CAF50', fontSize: '0.65rem', fontWeight: 800, padding: '2px 8px', borderRadius: '4px' }}>
                  {cs.recency} DATA
                </span>
              </div>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>{cs.type} · {cs.cities}</p>
            </div>
            <span style={{
              background: cs.relevance === 'HIGH' ? 'rgba(76,175,80,0.2)' : 'rgba(255,204,0,0.15)',
              color: cs.relevance === 'HIGH' ? '#4CAF50' : 'var(--color-accent)',
              fontSize: '0.7rem', fontWeight: 900, padding: '4px 12px',
              borderRadius: '20px', whiteSpace: 'nowrap', flexShrink: 0
            }}>
              RELEVANCE: {cs.relevance}
            </span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '20px' }}>
            {cs.stats.map(s => (
              <div key={s.label} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '8px', padding: '12px' }}>
                <div style={{ fontSize: '0.65rem', color: 'var(--color-text-muted)', marginBottom: '4px', fontWeight: 700 }}>{s.label}</div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-accent)' }}>{s.value}</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', marginTop: '2px' }}>{s.note}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '16px', color: 'rgba(255,255,255,0.85)' }}>{cs.analysis}</p>
          <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '16px' }}>
            <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--color-accent)', marginBottom: '10px' }}>KEY LESSONS FOR OUR FESTIVAL</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              {cs.lessons.map((l, i) => (
                <div key={i} style={{ display: 'flex', gap: '10px', fontSize: '0.85rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={14} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }} />
                  <span>{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function RisksView() {
  const risks = [
    {
      title: 'You Are Running a Supply-Driven Event in a Demand-Uncertain Market',
      severity: 'HIGH',
      body: 'Even with strong market growth data (98k at Taste of Summer, +31% at Orange FOOD Week), these are established brands with years of trust built in their markets. You are launching cold with no existing AU brand equity. Success for others does not transfer automatically. Australians don\'t know who Savour Festival is — and they don\'t owe you their weekend.',
      mitigation: 'Run a genuine pilot (500–1,000 capacity) in one city — Brisbane is the lowest-risk entry point — before committing to a 3-city tour. Partner with an established AU promoter or venue with an existing email list. Launch the brand digitally 12+ months before tickets go on sale to build warm audiences.'
    },
    {
      title: 'Wing Fest Has 11 Years of Brand Equity We Do Not Have',
      severity: 'HIGH',
      body: 'Wing Fest\'s ability to draw 500,000+ wings at a single London event is built on a decade of trust, media coverage, and word-of-mouth. An AU equivalent in year one will not achieve anything close to this. Benchmarking success against an 11-year-old event in year one is a planning error that leads to dangerous expectations.',
      mitigation: 'Set year-one targets based on comparable first-year AU food events (typically 3,000–6,000 per event). Use Wing Fest as the long-term vision (year 4–5+), not the year-one benchmark. Explicitly model a year-one loss scenario and ensure you have the capital buffer to absorb it and return for year two.'
    },
    {
      title: 'Liquor Licensing & RSA Compliance is State-by-State in Australia',
      severity: 'HIGH',
      body: 'RSA requirements are significantly stricter than the UK. A Queensland licence does not apply in NSW or VIC. Lead times are 8–12 weeks minimum per state — and this is unforgiving. Unlike the UK, you cannot rely on a single legal framework across your three cities. Non-compliance risks on-the-day shutdowns.',
      mitigation: 'Engage a specialist AU events liquor licensing consultant before signing any venue contracts. Budget £3,000–£5,000 per city for licensing and compliance. Factor RSA training into all bar staff hiring costs and timelines. Begin licensing processes at least 16 weeks before each event date.'
    },
    {
      title: 'The Cost of Living Squeeze May Hit Discretionary Spend in 2027',
      severity: 'HIGH',
      body: 'AU food festival growth in 2025/26 has been strong, but it has benefited from the post-COVID pent-up demand tailwind. By 2027, this tailwind may be diminishing. If AU interest rates remain elevated or consumer confidence falls, discretionary festival spending (especially for a new, unproven brand) will be the first casualty.',
      mitigation: 'Offer a low-cost or free-access outer zone to capture footfall from cost-sensitive consumers. Price early-bird tickets at a meaningful discount to shift units in advance and de-risk the gate. Build in a free component (open space with free entertainment) that still monetises via food and bar spend.'
    },
    {
      title: 'Meatstock 2026\'s Expansion Increases Competition for Trader Headspace',
      severity: 'MEDIUM',
      body: 'Meatstock is expanding to a fourth AU city (Gippsland) in 2026 and runs April/May dates — overlapping with our feasible window. The same premium traders we are targeting will be evaluating Meatstock invitations at the same time. As an established brand in its 11th year, Meatstock will win those conversations if we don\'t differentiate clearly on concept, data, and financial terms.',
      mitigation: 'Position clearly as "specialist poultry/chicken" vs Meatstock\'s "BBQ generalist". Emphasise our Feb/March timing, which avoids direct clash with Meatstock\'s Apr/May dates. Approach traders with a specific differentiated pitch — our audience eats different food and has different demographics to a BBQ crowd.'
    },
    {
      title: 'Summer Heat is an Operational Risk Unique to Australia',
      severity: 'MEDIUM',
      body: 'February/March is peak AU summer. Brisbane regularly exceeds 35°C+. Melbourne delivers severe unexpected thunderstorms. Heat exhaustion and dehydration in crowds of 8–10k is a genuine public safety issue — very different from rain-management at UK festivals. The 2025/26 Taste of Summer ran December–January and required specific site heat management protocols.',
      mitigation: 'Mandate shade and shelter infrastructure in all venue contracts. Budget for water stations, misting fans and extended first aid. Strongly consider 5pm–10pm evening programming slots for summer. Weather-event cancellation insurance must specifically cover extreme heat events, not just rain.'
    },
    {
      title: 'The P&L Only Works at Near-Target Footfall',
      severity: 'MEDIUM',
      body: 'Our model requires 8,000–10,000 per event. Strong AU market data gives us confidence in the sector, but none of those festivals are our festival. Below ~5,000 the fixed cost base becomes unserviceable. A first-year event for an unknown brand routinely achieves 50–70% of projected attendance.',
      mitigation: 'Build and stress-test scenarios at 3,000, 5,000 and 8,000. Identify the break-even attendance per city. If break-even requires more than 6,000 per event, renegotiate the fixed cost base. Pursue partial sponsor guarantee revenue to backstop year-one downside.'
    },
  ];

  const sevColor = (s) => s === 'HIGH' ? '#ff4444' : '#ff9800';

  return (
    <div>
      <div className="card" style={{ background: 'rgba(255,68,68,0.05)', border: '1px solid rgba(255,68,68,0.2)', marginBottom: '28px' }}>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
          <ShieldAlert size={24} color="#ff4444" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <h4 style={{ color: '#ff6b6b', marginBottom: '8px' }}>DEVIL'S ADVOCATE — GENUINE RISKS</h4>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.8)' }}>These are not pessimistic — they are the hard questions any investor or senior partner will ask. Preparing honest answers is essential before committing capital or signing contracts. Being overly bullish in year one costs more than being cautious.</p>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {risks.map((r, i) => (
          <div key={i} className="card" style={{ borderLeft: `4px solid ${sevColor(r.severity)}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
              <h4 style={{ fontSize: '0.95rem', lineHeight: 1.4, paddingRight: '16px' }}>{r.title}</h4>
              <span style={{ background: sevColor(r.severity), color: '#000', fontSize: '0.65rem', fontWeight: 900, padding: '3px 8px', borderRadius: '4px', whiteSpace: 'nowrap', flexShrink: 0 }}>{r.severity}</span>
            </div>
            <p style={{ fontSize: '0.88rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.75)', marginBottom: '14px' }}>{r.body}</p>
            <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '6px', padding: '12px', borderLeft: '3px solid rgba(255,255,255,0.15)' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--color-accent)', marginBottom: '6px' }}>SUGGESTED MITIGATION</div>
              <p style={{ fontSize: '0.85rem', lineHeight: 1.65 }}>{r.mitigation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

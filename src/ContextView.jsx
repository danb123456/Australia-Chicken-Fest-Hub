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
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginTop: '4px' }}>Research-backed analysis to inform the Australian Poultry Festival strategy</p>
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
    { label: 'AU Food & Bev Tourism (2024)', value: 'USD $31.2B', sub: 'Projected $110.5B by 2033 · 15% CAGR' },
    { label: 'Chicken — Most Consumed Meat in AU', value: '50kg/head/yr', sub: '44% of all meat consumed · +2.1% p.a.' },
    { label: 'Good Food & Wine Show Growth (2023)', value: '+25%', sub: 'Exceeded pre-COVID attendance across 4 cities' },
    { label: 'Domestic Trips incl. Food Markets', value: '4.7M trips', sub: 'Contributing $4.5B to the AU visitor economy' },
  ];

  const comparisons = [
    {
      topic: 'Food Festival Maturity',
      au: 'High growth phase. Post-COVID rebound drove record-breaking attendance across 2023/24. Market is less saturated than the UK — genuine whitespace for niche specialist events like ours.',
      uk: 'Highly mature market with 7,000+ food trucks and a dense established festival circuit. Differentiation is critical. AU operators face far less competition for premium niches.',
      gap: 'Specialist poultry festivals virtually do not exist in AU. Wing Fest, Grillstock and Meatstock prove demand — but nobody has executed a dedicated chicken festival concept here yet.'
    },
    {
      topic: 'Chicken Popularity & Consumer Demand',
      au: 'Australians consume 50kg+ of chicken per person per year — one of the highest globally. QSR chicken sales forecast to exceed AUD $4B by 2032. Chicken is deeply embedded in everyday AU culture.',
      uk: 'Chicken tenders overtook burgers as the top-selling festival dish in 2024 (+18%). Wing Fest London sells out in weeks. Consumer appetite for chicken-focused events is definitively proven.',
      gap: 'AU has higher per-capita demand but no premium cultural festival vehicle. The UK\'s Wing Fest proves the concept is exportable — and AU is the ideal next frontier.'
    },
    {
      topic: 'Alcohol Culture & Bar Revenue Potential',
      au: 'Strong craft beer and cocktail scene. Alcohol prices 20–30% higher than the UK — structurally stronger bar margins. RSA compliance is stricter and operates state-by-state. Bar queues at scale are a serious ops risk.',
      uk: 'Festival-goers average £32/day on alcohol vs £24 on food — drink is THE primary revenue driver. Traditional lager outsells no/lo alternatives 5:1 despite a 35% growth in non-alc options.',
      gap: 'AU\'s higher alcohol prices mean bar EBITDA is structurally stronger. Craft beer brand partnerships with local AU breweries are a key untapped branding AND commercial strategy.'
    },
    {
      topic: '"Funflation" & Experience Trends (2020–2025)',
      au: 'Despite cost-of-living pressure, AU consumers are spending on experiences. 75% of AU travellers cite local food experiences as a top travel priority. The post-COVID experience boom visible across all major AU festivals.',
      uk: 'UK consumers are experience-hungry but budget-squeezed. 40% of festival-goers overspend on food. Younger demographics (18–35) are the fastest-growing segment. Health-conscious but willing to indulge.',
      gap: 'AU consumers are simultaneously chicken-obsessed AND experience-hungry in 2025–27. This conjunction is rare and time-sensitive — acting in 2027 captures peak momentum before saturation.'
    },
  ];

  return (
    <div>
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
      cities: 'Sydney, Brisbane, Bendigo + NZ',
      relevance: 'HIGH',
      stats: [
        { label: '2023 Total Attendance', value: '60,000+', note: 'Across 3 events in AU' },
        { label: '2024 Expansion', value: '4 cities', note: 'Added Bendigo; returned to NZ after 3yr hiatus' },
        { label: 'Years Running', value: '10+ years', note: '"Serious momentum" going into 2026' },
        { label: 'Revenue Model', value: 'Tickets + Bar + Traders', note: 'Multi-city scaling creates efficiencies' },
      ],
      analysis: 'Meatstock is the single closest comparable event to our concept. A niche BBQ + music hybrid has scaled across multiple AU cities with a loyal, repeat audience. Key differentiator: competitive elements (BBQ comps, beard wars, strongman) drive return visits and viral social content. Spectacle and participation are the engagement engines — not just eating.',
      lessons: [
        'Niche meat festivals attract diverse, family-friendly demographics — not just "foodies"',
        'Competition formats (our chicken cook-off equivalent) are a crucial secondary engagement engine',
        'Multi-city model creates production cost efficiencies and compound brand awareness',
        '10-year run including COVID demonstrates high demand resilience — this audience is loyal',
      ]
    },
    {
      name: 'Tasting Australia (Adelaide)',
      type: 'Premium Food & Beverage Showcase',
      cities: 'Adelaide — SA Government backed',
      relevance: 'MEDIUM',
      stats: [
        { label: '2024 Attendance (record)', value: '77,000+', note: 'All-time high, single city' },
        { label: 'COVID Trajectory', value: 'Cancelled → Record', note: 'Strong multi-year rebound' },
        { label: 'Key Differentiator', value: 'Government backed', note: 'SA Tourism Commission partnership' },
        { label: 'Positioning', value: 'Premium / Multi-day', note: 'Ticketed fine dining experiences' },
      ],
      analysis: 'Tasting Australia proves AU\'s appetite for premium food events is at an all-time high. 77k attendance in 2024 for a single-city event is exceptional. Their government/tourism backing dramatically reduces cost base — creating a structural advantage independent operators must compensate for through stronger commercial efficiency and sponsorship.',
      lessons: [
        'Post-COVID AU food event demand is genuinely at an all-time high — 2027 timing is well positioned',
        'Adelaide is often overlooked as a test market — our Brisbane/Sydney/Melbourne metro-first play is correct',
        'Government and tourism body partnerships can dramatically subsidise venue and marketing costs',
        'Experiential storytelling (craft + cultural narrative) outperforms generic food fairs every time',
      ]
    },
    {
      name: 'Good Food & Wine Show',
      type: 'Multi-city Consumer Food & Drink Expo',
      cities: 'Melbourne, Sydney, Perth, Brisbane',
      relevance: 'HIGH',
      stats: [
        { label: '2023 Total Visitors', value: '100,000+', note: '+25% on pre-COVID across 4 cities' },
        { label: '2022 Return', value: 'Cautious relaunch', note: 'Initially hesitant, then "took off"' },
        { label: '2024 Target', value: '+25% again', note: 'Year-on-year demand pipeline strong' },
        { label: 'Revenue Model', value: 'Exhibitor fees + Tickets', note: 'Dual model is structurally more resilient' },
      ],
      analysis: 'The clearest multi-city parallel to our exact circuit. 100k+ across four cities (ours plus Perth) shows the scale is very achievable. Their exhibitor-led revenue model — charging brands and traders for floor space on top of commission — is a playbook we should adapt. The +25% growth in 2023 directly validates the 2027 timing hypothesis.',
      lessons: [
        'Multi-city food events in our exact target cities are proven, scalable and commercially successful',
        'A dual revenue model (stall/floor fee + % commission) is more resilient than commission-only',
        'Trader and exhibitor acquisition is the single biggest commercial growth lever',
        'Timing the launch into sustained post-COVID growth momentum (not the initial spike) is critical',
      ]
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {caseStudies.map(cs => (
        <div key={cs.name} className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
            <div>
              <h3 style={{ marginBottom: '4px' }}>{cs.name}</h3>
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
      body: 'The success of Meatstock and Tasting Australia does not guarantee a new entrant will succeed. Both events built brand equity over 5–10 years. You are launching cold into markets with no existing AU brand recognition. The Australians don\'t know who Savour Festival is — and they don\'t owe you their weekend.',
      mitigation: 'Run a genuine pilot event (500–1,000 capacity) in one city — ideally Brisbane — before committing to a 3-city tour. Partner with an established AU promoter or venue with an existing audience. Launch the brand digitally 12+ months before tickets go on sale.'
    },
    {
      title: 'The Cost of Living Crisis Could Suppress Discretionary Spend in 2027',
      severity: 'HIGH',
      body: 'Australia\'s cost-of-living pressure is real and acute. "Funflation" is genuine, but it favours low/mid-ticket experiences. A 3-day festival requiring tickets, travel, accommodation AND food spend is a significant per-person cost. Assuming affluent spend patterns universally will be a mistake.',
      mitigation: 'Offer a low-cost or free wandering zone to maximise footfall even when ticket sales underperform. Build strong cashless bar and food offerings that capture revenue once people are through the gate. Price tickets progressively — early bird, standard, premium — to capture a wider income bracket.'
    },
    {
      title: 'Liquor Licensing & RSA Compliance is Genuinely Hard in Australia',
      severity: 'HIGH',
      body: 'RSA (Responsible Service of Alcohol) requirements are significantly stricter than the UK. State-by-state liquor licences are required  — a Queensland licence does not apply in NSW. Lead times are 8–12 weeks minimum per state. All bar staff must hold RSA certificates, adding recruitment complexity. Non-compliance risks on-the-day shutdowns.',
      mitigation: 'Engage a specialist AU events liquor licensing consultant before any venue contracts are signed. Budget £3,000–£5,000 per city for licensing fees and compliance. Factor RSA training into all bar staffing costs and recruitment timelines.'
    },
    {
      title: 'Remote Trader Acquisition Is Harder Than It Looks from the UK',
      severity: 'MEDIUM',
      body: 'AU food traders are regularly approached by promoters and view UK-based organisers with no AU track record with healthy scepticism. Pitch decks alone won\'t close deals with traders who are committing significant capital (kit, staff travel, inventory) to attend an unproven event.',
      mitigation: 'Hire an AU-based partnerships coordinator. Attend at least one Meatstock or comparable AU event in 2025 to make in-person connections before outreach. Consider offering a guaranteed minimum revenue to anchor traders in year one — absorbing the risk yourself to build the portfolio.'
    },
    {
      title: 'Summer Heat is an Operational Risk Unique to Australia',
      severity: 'MEDIUM',
      body: 'February/March is peak AU summer. Brisbane exceeds 35°C+ with high humidity. Melbourne delivers severe unexpected thunderstorms. Heat exhaustion and dehydration in crowds of 8–10k is a genuine public safety and liability issue — very different from managing rain at a UK festival.',
      mitigation: 'Mandate shade and shelter infrastructure in all venue agreements. Budget for water stations, misting fans and extended first aid. Strongly consider evening-weighted programming (5pm–10pm) when temperatures are manageable. Weather event cancellation insurance is non-negotiable.'
    },
    {
      title: 'The P&L Only Works at Near-Target Footfall',
      severity: 'MEDIUM',
      body: 'Our financial model requires 8,000–10,000 attendees per event. Below ~5,000, fixed costs (venue, production, security, stage) become unserviceable. First-year UK festivals regularly report 60–70% of projected footfall. An unknown brand in AU in year one achieving 50–60% is conservative but realistic.',
      mitigation: 'Build explicit 3,000 / 5,000 / 8,000 footfall scenarios with P&L at each level. Identify the break-even attendance figure. If break-even requires more than 6,000 per event, renegotiate the fixed cost structure. Seek a partial sponsor guarantee to backstop year-one downside.'
    },
    {
      title: 'You Are Entering a Market You Do Not Yet Operationally Understand',
      severity: 'MEDIUM',
      body: 'Supplier relationships, union rules for staff (especially in VIC), freight logistics for production kit, council event permit regimes, and relationships with local food safety officers are not transferable knowledge from the UK. What works in Manchester may be completely wrong in Melbourne.',
      mitigation: 'Hire an experienced AU event production company as the full operational partner for all three cities. This is risk mitigation, not overhead. Their pre-existing supplier, council and venue relationships are worth far more than their day rate — particularly in year one.'
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
            <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.8)' }}>These are not pessimistic — they are the hard questions any investor or senior partner will ask. Preparing honest answers is essential before committing capital or signing contracts.</p>
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

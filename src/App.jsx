import React, { useState } from 'react';
import './App.css';
import { traders, venues, nuances, influencers, desserts, projectConfig, plDefaults } from './data/festivalData';
import { 
  Users, 
  MapPin, 
  Info, 
  Mail, 
  ChevronRight, 
  Filter, 
  CheckCircle2, 
  AlertTriangle, 
  Zap,
  Star,
  IceCream,
  DollarSign,
  PieChart,
  TrendingUp,
  Settings
} from 'lucide-react';

function App() {
  const [activeView, setActiveView] = useState('traders');
  const [selectedCity, setSelectedCity] = useState('All');

  const filteredTraders = selectedCity === 'All' 
    ? traders 
    : traders.filter(t => t.city === selectedCity);

  const filteredVenues = selectedCity === 'All' 
    ? venues 
    : venues.filter(v => v.city === selectedCity);

  const filteredInfluencers = selectedCity === 'All'
    ? influencers
    : influencers.filter(i => i.city === selectedCity || i.city === 'National');

  const filteredDesserts = selectedCity === 'All'
    ? desserts
    : desserts.filter(d => d.city === selectedCity);

  return (
    <div className="app-container">
      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <div className="logo-container">
          <div className="logo-text">OUTREACH.AU</div>
        </div>
        
        <nav className="nav-links">
          <button 
            className={`nav-item ${activeView === 'traders' ? 'active' : ''}`}
            onClick={() => setActiveView('traders')}
          >
            <Users size={18} />
            Traders
          </button>
          <button 
            className={`nav-item ${activeView === 'venues' ? 'active' : ''}`}
            onClick={() => setActiveView('venues')}
          >
            <MapPin size={18} />
            Venues
          </button>
          <button 
            className={`nav-item ${activeView === 'nuances' ? 'active' : ''}`}
            onClick={() => setActiveView('nuances')}
          >
            <Info size={18} />
            Bridge AU/UK
          </button>
          <button 
            className={`nav-item ${activeView === 'desserts' ? 'active' : ''}`}
            onClick={() => setActiveView('desserts')}
          >
            <IceCream size={18} />
            Desserts
          </button>
          <button 
            className={`nav-item ${activeView === 'influencers' ? 'active' : ''}`}
            onClick={() => setActiveView('influencers')}
          >
            <Star size={18} />
            Influencers
          </button>
          <button 
            className={`nav-item ${activeView === 'drafter' ? 'active' : ''}`}
            onClick={() => setActiveView('drafter')}
          >
            <Zap size={18} />
            AI Drafter
          </button>
          <button 
            className={`nav-item ${activeView === 'pl-predictor' ? 'active' : ''}`}
            onClick={() => setActiveView('pl-predictor')}
          >
            <PieChart size={18} />
            P&L Predictor
          </button>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="main-content scroll-container">
        <div className="view-container">
          {activeView === 'traders' && (
            <TradersView 
              data={filteredTraders} 
              selectedCity={selectedCity} 
              setSelectedCity={setSelectedCity} 
            />
          )}
          {activeView === 'venues' && (
            <VenuesView 
              data={filteredVenues} 
              selectedCity={selectedCity} 
              setSelectedCity={setSelectedCity} 
            />
          )}
          {activeView === 'nuances' && <NuancesView data={nuances} />}
          {activeView === 'influencers' && (
            <InfluencersView 
              data={filteredInfluencers}
              selectedCity={selectedCity}
              setSelectedCity={setSelectedCity}
            />
          )}
          {activeView === 'desserts' && (
            <DessertsView 
              data={filteredDesserts} 
              selectedCity={selectedCity} 
              setSelectedCity={setSelectedCity} 
            />
          )}
          {activeView === 'drafter' && <EmailDrafter data={traders} venues={venues} influencers={influencers} desserts={desserts} />}
          {activeView === 'pl-predictor' && <PLPredictor />}
        </div>
      </main>
    </div>
  );
}

function TradersView({ data, selectedCity, setSelectedCity }) {
  return (
    <div>
      <div className="header-row">
        <h2>Poultry Vendors</h2>
        <div className="city-filters">
          {['All', 'Brisbane', 'Sydney', 'Melbourne'].map(city => (
            <button 
              key={city}
              className={`filter-btn ${selectedCity === city ? 'active' : ''}`}
              onClick={() => setSelectedCity(city)}
            >
              {city}
            </button>
          ))}
        </div>
      </div>
      
      <div className="data-grid">
        {data.map(trader => (
          <div key={trader.id} className="card">
            <span className={`badge ${trader.city}`}>{trader.city}</span>
            <h3>{trader.name}</h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '16px' }}>
              {trader.type} • @{trader.insta}
            </p>
            <p style={{ marginBottom: '20px', fontSize: '0.95rem' }}>{trader.notes}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-accent)', fontSize: '0.9rem', fontWeight: 600 }}>
              <Mail size={14} />
              {trader.email || 'Email not listed'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function VenuesView({ data, selectedCity, setSelectedCity }) {
  return (
    <div>
      <div className="header-row">
        <h2>Potential Venues</h2>
        <div className="city-filters">
          {['All', 'Brisbane', 'Sydney', 'Melbourne'].map(city => (
            <button 
              key={city}
              className={`filter-btn ${selectedCity === city ? 'active' : ''}`}
              onClick={() => setSelectedCity(city)}
            >
              {city}
            </button>
          ))}
        </div>
      </div>
      <div className="data-grid">
        {data.map(venue => (
          <div key={venue.id} className="card">
            <span className={`badge ${venue.city}`}>{venue.city}</span>
            <h3>{venue.name}</h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '12px' }}>{venue.type}</p>
            <p style={{ marginBottom: '16px' }}>{venue.notes}</p>
            <a href={`https://${venue.website}`} target="_blank" rel="noreferrer" style={{ color: 'var(--color-accent)', textDecoration: 'none', fontWeight: 600, fontSize: '0.85rem' }}>
              VISIT WEBSITE <ChevronRight size={14} style={{ verticalAlign: 'middle' }} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

function NuancesView({ data }) {
  return (
    <div>
      <div className="header-row">
        <h2>AU vs UK Nuances</h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {data.map(n => ( n.id !== "" && (
          <div key={n.id} className="card" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            <div style={{ gridColumn: 'span 2', borderBottom: '1px solid var(--color-border)', paddingBottom: '12px', marginBottom: '8px' }}>
              <h3>{n.title}</h3>
            </div>
            <div>
              <h4 style={{ color: 'var(--color-accent)', fontSize: '0.8rem', marginBottom: '8px' }}>AUSTRALIA (AU)</h4>
              <p style={{ fontSize: '0.95rem' }}>{n.au}</p>
            </div>
            <div style={{ borderLeft: '1px solid var(--color-border)', paddingLeft: '32px' }}>
              <h4 style={{ color: '#aaa', fontSize: '0.8rem', marginBottom: '8px' }}>UNITED KINGDOM (UK)</h4>
              <p style={{ fontSize: '0.95rem' }}>{n.uk}</p>
            </div>
            <div style={{ gridColumn: 'span 2', marginTop: '12px', display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,204,0,0.05)', padding: '12px', borderRadius: '8px' }}>
              <AlertTriangle size={18} color="var(--color-accent)" />
              <p style={{ fontSize: '0.9rem', fontWeight: 600 }}>{n.impact}</p>
            </div>
          </div>
        )))}
      </div>
    </div>
  );
}

function DessertsView({ data, selectedCity, setSelectedCity }) {
  return (
    <div>
      <div className="header-row">
        <h2>Dessert Traders</h2>
        <div className="city-filters">
          {['All', 'Brisbane', 'Sydney', 'Melbourne'].map(city => (
            <button 
              key={city}
              className={`filter-btn ${selectedCity === city ? 'active' : ''}`}
              onClick={() => setSelectedCity(city)}
            >
              {city}
            </button>
          ))}
        </div>
      </div>
      <div className="data-grid">
        {data.map(dessert => (
          <div key={dessert.id} className="card">
            <span className={`badge ${dessert.city}`}>{dessert.city}</span>
            <h3>{dessert.name}</h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '12px' }}>{dessert.type}</p>
            <p style={{ marginBottom: '16px' }}>{dessert.notes}</p>
            <div style={{ color: 'var(--color-accent)', fontWeight: 700, fontSize: '0.85rem' }}>
              @ {dessert.insta}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function InfluencersView({ data, selectedCity, setSelectedCity }) {
  return (
    <div>
      <div className="header-row">
        <h2>Top Food Influencers</h2>
        <div className="city-filters">
          {['All', 'Brisbane', 'Sydney', 'Melbourne'].map(city => (
            <button 
              key={city}
              className={`filter-btn ${selectedCity === city ? 'active' : ''}`}
              onClick={() => setSelectedCity(city)}
            >
              {city}
            </button>
          ))}
        </div>
      </div>
      <div className="data-grid">
        {data.map((inf, index) => (
          <div key={inf.id} className="card influencer-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <span className={`badge ${inf.city}`}>{inf.city}</span>
              <span style={{ fontSize: '1.2rem', fontWeight: 900, color: 'var(--color-accent)', opacity: 0.3 }}>#{index + 1}</span>
            </div>
            <h3>{inf.name}</h3>
            <p style={{ color: 'var(--color-accent)', fontSize: '1.1rem', fontWeight: 800, margin: '4px 0 12px 0' }}>{inf.followers} Followers</p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '8px' }}>
              {inf.platform} • {inf.handle}
            </p>
            <p style={{ marginBottom: '16px', fontSize: '0.9rem' }}>{inf.niche}</p>
            <div style={{ display: 'flex', gap: '8px' }}>
               <a 
                href={`https://instagram.com/${inf.handle.replace('@', '')}`} 
                target="_blank" 
                rel="noreferrer" 
                className="action-link"
              >
                SOCIAL PROFILE
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EmailDrafter({ data, venues, influencers, desserts }) {
  const [targetType, setTargetType] = useState('trader');
  const [selectedId, setSelectedId] = useState('');
  const [draft, setDraft] = useState('');
  const [sender, setSender] = useState(projectConfig.senders[0]);

  const handleGenerate = () => {
    const list = targetType === 'trader' ? data : (targetType === 'venue' ? venues : (targetType === 'influencer' ? influencers : desserts));
    const target = list.find(item => item.id === parseInt(selectedId));
    if (!target) return;

    let template = "";
    const sisterFestsStr = projectConfig.sisterFestivals.map(f => `${f.name}${f.url ? ' (' + f.url + ')' : ''}`).join(', ');

    if (targetType === 'trader' || targetType === 'dessert') {
      const typeLabel = targetType === 'trader' ? 'poultry' : 'dessert';
      template = `Subject: Partnership Proposal: Australia Chicken Festival Series - ${target.city} 2027

Hi ${target.contact || 'Team ' + target.name},

I'm reaching out from the festival organizing team. We've been following ${target.name} and love your setup in ${target.city}.

We are launching a specialized poultry festival series across Brisbane, Sydney, and Melbourne in ${projectConfig.timing}. We'd love to have you onboard as a key ${typeLabel} partner.

A bit about us: our sister festivals include ${sisterFestsStr}. For this Australian series, we are projecting a footfall of ${projectConfig.footfall} people over the 3-day event.

Given your reputation for quality, we think you'd be a perfect fit for our premium high-volume crowds.

Would you be open to a quick call this week to discuss a pitch deck and site availability?

Best regards,
${sender.name}
Outreach.AU Team`;
    } else if (targetType === 'venue') {
      template = `Subject: Venue Inquiry: Regional Poultry Festival Series - ${target.city} 2027

Dear ${target.name} Partnerships Team,

We are currently scouting locations for a high-profile multi-city food festival series focusing on poultry/chicken culture, targeting ${projectConfig.timing}.

We've identified ${target.name} as a top-tier candidate for our ${target.city} leg. Our event expects a high-turnout of ${projectConfig.footfall} visitors.

Outreach Details:
- Proposed Timing: ${projectConfig.timing} (Open to suggestions)
- Duration: ${projectConfig.duration}
- Logistics: ${projectConfig.buildBreak}
- Footprint Required: Main event arena for traders and seating, stage area for live music, separate trade/market zone, production & backstage area for crew and performers.

Our team has extensive experience with festivals like ${sisterFestsStr}. It would be great to see whether working with you (or any other suitable venue you might suggest) is possible.

Would you be open to discussing availability for 2027?

Best regards,
${sender.name}
Outreach.AU Organizing Committee`;
    } else if (targetType === 'influencer') {
      template = `Subject: Influencer Partnership: National Poultry Festival Series 2027

Hi ${target.name},

I'm from the Outreach.AU marketing team. We've been huge fans of your ${target.niche} content for a while!

We are launching Australia's largest dedicated poultry festival series (Feb/March 2027) and we're projecting ${projectConfig.footfall} attendees per city. We'd love to discuss an exclusive content partnership with you for the ${target.city === 'National' ? 'entire series' : target.city + ' leg'}.

We're looking for partners who truly understand the local food scene and can help us drive high engagement. 

Would you be open to hearing more about our creator packages?

Cheers,
${sender.name}
Marketing Team @ Outreach.AU`;
    }

    setDraft(template);
  };

  const openGmail = () => {
    const list = targetType === 'trader' ? data : (targetType === 'venue' ? venues : (targetType === 'influencer' ? influencers : desserts));
    const target = list.find(item => item.id === parseInt(selectedId));
    if (!target || !draft) return;

    const email = target.email || '';
    const subject = draft.split('\n')[0].replace('Subject: ', '');
    const body = draft.split('\n').slice(2).join('\n');
    
    // Using a more reliable Gmail compose link format
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <div>
      <div className="header-row">
        <h2>AI Outreach Drafter</h2>
      </div>
      <div className="card" style={{ maxWidth: '700px', margin: '0 auto' }}>
        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '8px', color: 'var(--color-text-muted)' }}>AUTHORIZED SENDER</label>
          <div style={{ display: 'flex', gap: '12px' }}>
            {projectConfig.senders.map(s => (
              <button 
                key={s.id}
                className={`filter-btn ${sender.id === s.id ? 'active' : ''}`}
                onClick={() => setSender(s)}
              >
                {s.name} ({s.email})
              </button>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '8px', color: 'var(--color-text-muted)' }}>RECIPIENT TYPE</label>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button 
              className={`filter-btn ${targetType === 'trader' ? 'active' : ''}`}
              onClick={() => { setTargetType('trader'); setSelectedId(''); setDraft(''); }}
            >
              Poultry Traders
            </button>
            <button 
              className={`filter-btn ${targetType === 'venue' ? 'active' : ''}`}
              onClick={() => { setTargetType('venue'); setSelectedId(''); setDraft(''); }}
            >
              Major Venues
            </button>
            <button 
              className={`filter-btn ${targetType === 'influencer' ? 'active' : ''}`}
              onClick={() => { setTargetType('influencer'); setSelectedId(''); setDraft(''); }}
            >
              Influencers
            </button>
            <button 
              className={`filter-btn ${targetType === 'dessert' ? 'active' : ''}`}
              onClick={() => { setTargetType('dessert'); setSelectedId(''); setDraft(''); }}
            >
              Desserts
            </button>
          </div>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '8px', color: 'var(--color-text-muted)' }}>SELECT TARGET</label>
          <select 
            value={selectedId} 
            onChange={(e) => setSelectedId(e.target.value)}
            style={{ width: '100%', padding: '12px', background: 'var(--color-bg)', border: '1px solid var(--color-border)', color: 'var(--color-text)', borderRadius: '8px' }}
          >
            <option value="">-- Select --</option>
            {(targetType === 'trader' ? data : (targetType === 'venue' ? venues : (targetType === 'influencer' ? influencers : desserts))).map(item => (
              <option key={item.id} value={item.id}>{item.name} ({item.city})</option>
            ))}
          </select>
        </div>

        <button 
          onClick={handleGenerate}
          disabled={!selectedId}
          style={{ width: '100%', padding: '16px', background: 'var(--color-accent)', color: 'var(--color-bg)', border: 'none', borderRadius: '8px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}
        >
          Generate Outreach Draft
        </button>

        {draft && (
          <div style={{ marginTop: '32px', animation: 'fadeIn 0.3s ease' }}>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
               <button 
                onClick={openGmail}
                style={{ flex: 1, padding: '14px', background: '#db4437', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
              >
                <Mail size={18} /> SEND VIA GMAIL
              </button>
              <button 
                onClick={() => { navigator.clipboard.writeText(draft); alert('Copied to clipboard!'); }}
                style={{ flex: 1, padding: '14px', background: 'var(--color-bg-alt)', color: 'var(--color-text)', border: '1px solid var(--color-border)', borderRadius: '8px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
              >
                <CheckCircle2 size={18} /> COPY TO CLIPBOARD
              </button>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <h4 style={{ color: 'var(--color-accent)' }}>PREVIEW DRAFT</h4>
            </div>
            <pre style={{ background: '#000', padding: '20px', borderRadius: '8px', overflowX: 'auto', whiteSpace: 'pre-wrap', fontSize: '0.9rem', color: '#ccc', border: '1px dashed #333' }}>
              {draft}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

function PLPredictor() {
  const [footfall, setFootfall] = useState(9000);
  const [city, setCity] = useState('Brisbane');
  const [editingId, setEditingId] = useState(null);
  const [costs, setCosts] = useState(plDefaults.costs.map(c => ({ ...c })));
  const [revenues, setRevenues] = useState(plDefaults.revenues.map(r => ({ ...r })));

  const cities = ['Brisbane', 'Sydney', 'Melbourne', 'Overview'];
  const sym = plDefaults.symbol;

  const fmt = (n) => `${sym}${Math.round(n).toLocaleString()}`;

  const totalCosts = costs.reduce((sum, c) => sum + (parseFloat(c.value) || 0), 0);

  const calcRevenue = (revItems, ff) =>
    revItems.reduce((sum, r) => {
      if (r.perHead) return sum + (parseFloat(r.perHead) || 0) * ff;
      if (r.flat) return sum + (parseFloat(r.flat) || 0);
      return sum;
    }, 0);

  const totalRevenue = calcRevenue(revenues, footfall);
  const grossProfit = totalRevenue - totalCosts;
  const margin = totalRevenue > 0 ? ((grossProfit / totalRevenue) * 100).toFixed(1) : 0;

  // For Overview: multiply per-city by 3
  const overviewRevenue = totalRevenue * 3;
  const overviewCosts = totalCosts * 3;
  const overviewProfit = grossProfit * 3;

  const updateCostValue = (id, val) => {
    setCosts(prev => prev.map(c => c.id === id ? { ...c, value: val } : c));
  };

  const updateRevenueValue = (id, field, val) => {
    setRevenues(prev => prev.map(r => r.id === id ? { ...r, [field]: val } : r));
  };

  const profitColor = grossProfit >= 0 ? '#4CAF50' : '#ff4444';

  const EditableNumber = ({ id, field, value, suffix = '' }) => {
    const isEditing = editingId === `${id}-${field}`;
    return isEditing ? (
      <input
        type="number"
        autoFocus
        defaultValue={value}
        onBlur={(e) => {
          if (field === 'value') updateCostValue(id, parseFloat(e.target.value) || 0);
          else updateRevenueValue(id, field, parseFloat(e.target.value) || 0);
          setEditingId(null);
        }}
        onKeyDown={(e) => e.key === 'Enter' && e.target.blur()}
        style={{
          width: '100px', padding: '4px 8px', background: '#1a1a1a',
          border: '1px solid var(--color-accent)', borderRadius: '4px',
          color: 'var(--color-accent)', fontWeight: 700, textAlign: 'right', fontSize: '0.9rem'
        }}
      />
    ) : (
      <span
        style={{ fontWeight: 700, cursor: 'pointer', borderBottom: '1px dashed rgba(255,204,0,0.4)', paddingBottom: '1px' }}
        onClick={() => setEditingId(`${id}-${field}`)}
        title="Click to edit"
      >
        {sym}{Number(value).toLocaleString()}{suffix}
      </span>
    );
  };

  const displayRevenue = city === 'Overview' ? overviewRevenue : totalRevenue;
  const displayCosts = city === 'Overview' ? overviewCosts : totalCosts;
  const displayProfit = city === 'Overview' ? overviewProfit : grossProfit;
  const displayMultiplier = city === 'Overview' ? 3 : 1;

  return (
    <div style={{ animation: 'fadeIn 0.4s ease' }}>
      <div className="header-row">
        <div>
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <PieChart size={28} /> EVENT P&L PREDICTOR
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginTop: '4px' }}>
            All figures in <strong style={{ color: 'var(--color-accent)' }}>Great British Pounds (£)</strong> · Click any value to edit it
          </p>
        </div>
      </div>

      {/* Top KPI row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '32px' }}>
        <div className="card" style={{ borderTop: `4px solid ${profitColor}` }}>
          <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--color-text-muted)', marginBottom: '8px' }}>
            {city === 'Overview' ? 'SERIES PROFIT' : 'EVENT GROSS PROFIT'}
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 900, color: profitColor }}>{fmt(displayProfit)}</div>
        </div>
        <div className="card">
          <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--color-text-muted)', marginBottom: '8px' }}>TOTAL REVENUE</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>{fmt(displayRevenue)}</div>
        </div>
        <div className="card">
          <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--color-text-muted)', marginBottom: '8px' }}>TOTAL COSTS</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ff6b6b' }}>{fmt(displayCosts)}</div>
        </div>
        <div className="card">
          <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--color-text-muted)', marginBottom: '8px' }}>MARGIN %</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>{margin}%</div>
        </div>
      </div>

      {/* Controls row */}
      <div style={{ display: 'flex', gap: '24px', marginBottom: '32px', flexWrap: 'wrap', alignItems: 'flex-end' }}>
        <div>
          <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--color-text-muted)', marginBottom: '8px' }}>VIEW</div>
          <div style={{ display: 'flex', gap: '8px' }}>
            {cities.map(c => (
              <button key={c} className={`filter-btn ${city === c ? 'active' : ''}`} onClick={() => setCity(c)}>{c}</button>
            ))}
          </div>
        </div>
        <div style={{ flex: 1, minWidth: '250px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>EST. FOOTFALL {city === 'Overview' ? '(PER EVENT)' : ''}</span>
            <span style={{ color: 'var(--color-accent)', fontWeight: 700 }}>{footfall.toLocaleString()}</span>
          </div>
          <input type="range" min="5000" max="15000" step="500" value={footfall}
            onChange={(e) => setFootfall(parseInt(e.target.value))}
            style={{ width: '100%', accentColor: 'var(--color-accent)' }}
          />
        </div>
      </div>

      {/* Two-column: Costs + Revenue */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>

        {/* === COSTS === */}
        <div className="card">
          <h4 style={{ marginBottom: '20px', color: 'var(--color-accent)', display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid var(--color-border)', paddingBottom: '12px' }}>
            <Settings size={18} /> OPERATIONAL COSTS <span style={{ marginLeft: 'auto', color: 'var(--color-text-muted)', fontWeight: 400, fontSize: '0.8rem' }}>Click value to edit</span>
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {costs.map((cost, i) => (
              <div key={cost.id} style={{
                display: 'flex', flexDirection: 'column', padding: '10px 0',
                borderBottom: i < costs.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{cost.label}</span>
                  <EditableNumber id={cost.id} field="value" value={cost.value} />
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '3px' }}>
                  {cost.reasoning}
                  {city === 'Overview' && <span style={{ color: 'var(--color-accent)', fontWeight: 600 }}> × 3 = {fmt(cost.value * 3)}</span>}
                </div>
              </div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 900, marginTop: '12px', paddingTop: '12px', borderTop: '2px solid var(--color-border)', fontSize: '1.1rem' }}>
              <span>TOTAL COSTS</span>
              <span style={{ color: '#ff6b6b' }}>{fmt(displayCosts)}</span>
            </div>
          </div>
        </div>

        {/* === REVENUE === */}
        <div className="card">
          <h4 style={{ marginBottom: '20px', color: 'var(--color-accent)', display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid var(--color-border)', paddingBottom: '12px' }}>
            <TrendingUp size={18} /> REVENUE STREAMS <span style={{ marginLeft: 'auto', color: 'var(--color-text-muted)', fontWeight: 400, fontSize: '0.8rem' }}>Click value to edit</span>
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {revenues.map((rev, i) => {
              const lineVal = rev.perHead ? (rev.perHead * footfall) : (rev.flat || 0);
              const displayVal = lineVal * displayMultiplier;
              return (
                <div key={rev.id} style={{
                  display: 'flex', flexDirection: 'column', padding: '10px 0',
                  borderBottom: i < revenues.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{rev.label}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {rev.perHead !== undefined && (
                        <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                          <EditableNumber id={rev.id} field="perHead" value={rev.perHead} />/head →
                        </span>
                      )}
                      {rev.flat !== undefined && (
                        <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                          flat: <EditableNumber id={rev.id} field="flat" value={rev.flat} /> →
                        </span>
                      )}
                      <span style={{ fontWeight: 700, color: '#4CAF50' }}>{fmt(displayVal)}</span>
                    </div>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '3px' }}>
                    {rev.reasoning}
                  </div>
                </div>
              );
            })}
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 900, marginTop: '12px', paddingTop: '12px', borderTop: '2px solid var(--color-border)', fontSize: '1.1rem' }}>
              <span>TOTAL REVENUE</span>
              <span style={{ color: '#4CAF50' }}>{fmt(displayRevenue)}</span>
            </div>
          </div>

          {/* Profit summary */}
          <div style={{ marginTop: '24px', padding: '20px', background: grossProfit >= 0 ? 'rgba(76,175,80,0.08)' : 'rgba(255,68,68,0.08)', borderRadius: '8px', border: `1px solid ${grossProfit >= 0 ? '#4CAF50' : '#ff4444'}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: 900, fontSize: '1.1rem' }}>{city === 'Overview' ? 'NET SERIES PROFIT' : 'GROSS PROFIT'}</span>
              <span style={{ fontSize: '1.8rem', fontWeight: 900, color: profitColor }}>{fmt(displayProfit)}</span>
            </div>
            <div style={{ marginTop: '8px', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
              Margin: {margin}% · Footfall: {city === 'Overview' ? (footfall * 3).toLocaleString() + ' total' : footfall.toLocaleString()} · ROI: {totalCosts > 0 ? (totalRevenue / totalCosts).toFixed(2) : '-'}x per event
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


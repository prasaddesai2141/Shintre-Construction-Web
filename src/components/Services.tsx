import React, { useState, useEffect, useRef } from 'react';
import { Home, Construction, Building, Wrench, Layers, ArrowRight, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Residential Construction',
    tagline: 'Dream Homes, Built Right',
    description:
      'From cozy family homes to grand villas, we craft living spaces that reflect your personality and stand the test of time. Every detail is meticulously planned and executed.',
    features: ['Custom Home Design', 'Villa Construction', 'Residential Complexes', 'Interior Finishing'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=85&auto=format&fit=crop',
    accent: '#2563eb',
  },
  {
    icon: Construction,
    title: 'Road Construction',
    tagline: 'Connecting Communities',
    description:
      'We engineer roads and infrastructure that serve cities and villages alike — built with durable materials, precision grading, and long-term performance in mind.',
    features: ['Highway Construction', 'Street Paving', 'Drainage Systems', 'Traffic Infrastructure'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=85&auto=format&fit=crop',
    accent: '#d97706',
  },
  {
    icon: Building,
    title: 'Commercial & Industrial',
    tagline: 'Spaces That Mean Business',
    description:
      'Office towers, warehouses, and manufacturing plants — we deliver commercial and industrial projects that prioritize functionality, safety, and future scalability.',
    features: ['Office Buildings', 'Warehouses', 'Manufacturing Facilities', 'Retail Spaces'],
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=85&auto=format&fit=crop',
    accent: '#059669',
  },
  {
    icon: Wrench,
    title: 'Renovation & Repair',
    tagline: 'Revive Your Space',
    description:
      'Breathe new life into existing structures with our expert renovation and repair services. From kitchen remodels to full structural makeovers, we handle every scope.',
    features: ['Kitchen Remodeling', 'Bathroom Renovation', 'Structural Repairs', 'Building Maintenance'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85&auto=format&fit=crop',
    accent: '#7c3aed',
  },
  {
    icon: Layers,
    title: 'Infrastructure Development',
    tagline: 'Strong Foundations, Bigger Futures',
    description:
      'Large-scale site development, utility installation, and foundation engineering. We lay the groundwork that makes ambitious projects possible.',
    features: ['Site Preparation', 'Foundation Work', 'Utility Installation', 'Landscaping'],
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&q=85&auto=format&fit=crop',
    accent: '#dc2626',
  },
];

const Services: React.FC = () => {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [panelVisible, setPanelVisible] = useState(false);

  function observeOnce(ref: React.RefObject<HTMLDivElement | null>, setter: (v: boolean) => void) {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setter(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }

  useEffect(() => observeOnce(headerRef, setHeaderVisible), []);
  useEffect(() => observeOnce(panelRef, setPanelVisible), []);

  // Auto-cycle every 4s unless user has clicked a tab
  useEffect(() => {
    if (userInteracted) return;
    timerRef.current = setInterval(() => {
      switchTo((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [userInteracted]);

  const switchTo = (indexOrFn: number | ((prev: number) => number)) => {
    setAnimating(true);
    setTimeout(() => {
      setActive(typeof indexOrFn === 'function' ? indexOrFn(active) : indexOrFn);
      setAnimating(false);
    }, 220);
  };

  const handleTabClick = (i: number) => {
    setUserInteracted(true);
    if (timerRef.current) clearInterval(timerRef.current);
    if (i === active) return;
    switchTo(i);
  };

  const current = services[active];

  return (
    <>
      <style>{`
        @keyframes panelFadeIn {
          from { opacity: 0; transform: translateX(16px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .service-panel-enter {
          animation: panelFadeIn 0.35s ease forwards;
        }
        .service-tab {
          cursor: pointer;
          transition: all 0.22s ease;
          border-left: 3px solid transparent;
          padding: 16px 20px;
          display: flex;
          align-items: center;
          gap: 14px;
          border-radius: 0 10px 10px 0;
          user-select: none;
        }
        .service-tab:hover {
          background: rgba(37,99,235,0.06);
        }
        .service-tab.active {
          background: #f0f4ff;
        }
        .service-feature-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 0;
          font-size: 14px;
          color: #374151;
          border-bottom: 1px solid #f3f4f6;
        }
        .service-feature-item:last-child {
          border-bottom: none;
        }
        /* Progress bar under active tab */
        @keyframes progressFill {
          from { width: 0%; }
          to   { width: 100%; }
        }
        .tab-progress {
          height: 2px;
          background: currentColor;
          border-radius: 1px;
          animation: progressFill 4s linear forwards;
        }
      `}</style>

      <section id="services" className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Section Header ── */}
          <div ref={headerRef} className="text-center mb-12">
            <span
              style={{
                display: 'inline-block',
                padding: '5px 16px',
                borderRadius: '999px',
                backgroundColor: '#eff6ff',
                color: '#2563eb',
                fontSize: '13px',
                fontWeight: 600,
                marginBottom: '10px',
                letterSpacing: '0.04em',
                transition: 'opacity 0.6s ease 0.05s, transform 0.6s ease 0.05s',
                opacity: headerVisible ? 1 : 0,
                transform: headerVisible ? 'translateY(0)' : 'translateY(16px)',
              }}
            >
              WHAT WE BUILD
            </span>
            <h2
              className="text-4xl font-bold text-gray-900 mb-4"
              style={{
                transition: 'opacity 0.65s ease 0.15s, transform 0.65s ease 0.15s',
                opacity: headerVisible ? 1 : 0,
                transform: headerVisible ? 'translateY(0)' : 'translateY(22px)',
              }}
            >
              <Wrench className="inline-block mr-3 mb-1 text-blue-600" size={36} />
              Our Services
            </h2>
            <p
              className="text-xl text-gray-500 max-w-2xl mx-auto"
              style={{
                transition: 'opacity 0.65s ease 0.28s, transform 0.65s ease 0.28s',
                opacity: headerVisible ? 1 : 0,
                transform: headerVisible ? 'translateY(0)' : 'translateY(16px)',
              }}
            >
              Comprehensive construction solutions for residential, commercial, and infrastructure projects
            </p>
          </div>

          {/* ── Main Interactive Panel ── */}
          <div
            ref={panelRef}
            style={{
              display: 'grid',
              gridTemplateColumns: '300px 1fr',
              gap: '0',
              minHeight: '480px',
              border: '1px solid #e5e7eb',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 4px 32px rgba(0,0,0,0.07)',
              transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
              opacity: panelVisible ? 1 : 0,
              transform: panelVisible ? 'translateY(0)' : 'translateY(32px)',
            }}
          >
            {/* ── LEFT: Tab List ── */}
            <div
              style={{
                backgroundColor: '#fafafa',
                borderRight: '1px solid #e5e7eb',
                display: 'flex',
                flexDirection: 'column',
                padding: '12px 0',
              }}
            >
              {services.map((s, i) => {
                const Icon = s.icon;
                const isActive = i === active;
                return (
                  <div key={i} style={{ position: 'relative' }}>
                    <div
                      className={`service-tab${isActive ? ' active' : ''}`}
                      style={{
                        borderLeftColor: isActive ? s.accent : 'transparent',
                        borderLeftWidth: '3px',
                        borderLeftStyle: 'solid',
                      }}
                      onClick={() => handleTabClick(i)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => e.key === 'Enter' && handleTabClick(i)}
                    >
                      <div
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '8px',
                          backgroundColor: isActive ? s.accent : '#e5e7eb',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          transition: 'background 0.22s ease',
                        }}
                      >
                        <Icon
                          size={18}
                          color={isActive ? '#fff' : '#6b7280'}
                        />
                      </div>
                      <div>
                        <div
                          style={{
                            fontSize: '14px',
                            fontWeight: isActive ? 700 : 500,
                            color: isActive ? '#111' : '#4b5563',
                            lineHeight: 1.3,
                          }}
                        >
                          {s.title}
                        </div>
                        {isActive && (
                          <div
                            style={{ fontSize: '11px', color: s.accent, marginTop: '2px', fontWeight: 500 }}
                          >
                            {s.tagline}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Auto-progress bar under active tab */}
                    {isActive && !userInteracted && (
                      <div style={{ padding: '0 20px' }}>
                        <div
                          key={active}
                          className="tab-progress"
                          style={{ color: current.accent }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* ── RIGHT: Feature Panel ── */}
            <div
              className={!animating ? 'service-panel-enter' : ''}
              key={animating ? 'animating' : active}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                opacity: animating ? 0 : 1,
                transition: 'opacity 0.18s ease',
              }}
            >
              {/* Content */}
              <div
                style={{
                  padding: '40px 36px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: '20px',
                }}
              >
                {/* Icon + title */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '14px',
                      backgroundColor: current.accent,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <current.icon size={26} color="#fff" />
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', color: current.accent, fontWeight: 600, letterSpacing: '0.06em' }}>
                      {current.tagline.toUpperCase()}
                    </div>
                    <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#111', margin: 0 }}>
                      {current.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.75, margin: 0 }}>
                  {current.description}
                </p>

                {/* Feature list */}
                <div>
                  {current.features.map((f, i) => (
                    <div key={i} className="service-feature-item">
                      <CheckCircle size={16} color={current.accent} style={{ flexShrink: 0 }} />
                      {f}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  style={{
                    marginTop: '4px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 24px',
                    borderRadius: '10px',
                    backgroundColor: current.accent,
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '14px',
                    border: 'none',
                    cursor: 'pointer',
                    width: 'fit-content',
                    transition: 'opacity 0.2s ease, transform 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLButtonElement).style.opacity = '0.88';
                    (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLButtonElement).style.opacity = '1';
                    (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
                  }}
                >
                  Get a Quote
                  <ArrowRight size={16} />
                </button>
              </div>

              {/* Right: Image */}
              <div
                style={{
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <img
                  src={current.image}
                  alt={current.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.6s ease',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; }}
                />
                {/* Accent gradient overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(135deg, ${current.accent}22 0%, transparent 60%)`,
                    pointerEvents: 'none',
                  }}
                />
              </div>
            </div>
          </div>

          {/* ── Bottom CTA Banner ── */}
          <div
            style={{
              marginTop: '40px',
              background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)',
              borderRadius: '16px',
              padding: '40px 48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '20px',
            }}
          >
            <div>
              <h3 style={{ color: '#fff', fontWeight: 800, fontSize: '22px', margin: '0 0 6px' }}>
                Need a Custom Solution?
              </h3>
              <p style={{ color: '#bfdbfe', fontSize: '15px', margin: 0 }}>
                Every project is unique. Let's discuss your requirements and get you a personalized quote.
              </p>
            </div>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                padding: '14px 32px',
                borderRadius: '10px',
                backgroundColor: '#fff',
                color: '#1e3a8a',
                fontWeight: 700,
                fontSize: '15px',
                border: 'none',
                cursor: 'pointer',
                flexShrink: 0,
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)';
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none';
              }}
            >
              Get Custom Quote →
            </button>
          </div>
        </div>

        {/* Responsive stacking */}
        <style>{`
          @media (max-width: 900px) {
            #services .service-main-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default Services;
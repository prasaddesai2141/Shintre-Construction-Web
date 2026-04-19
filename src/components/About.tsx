import React, { useEffect, useRef, useState } from 'react';
import { Award, Users, Clock, Shield, CheckCircle, TrendingUp, Heart, HardHat, ShieldCheck } from 'lucide-react';

// ── Count-up hook ──
function useCountUp(target: number, duration = 1800, triggered = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!triggered) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [triggered, target, duration]);
  return count;
}

// ── Animated stat item inside the dark band ──
const StatBandItem: React.FC<{
  icon: React.ElementType;
  target: number;
  suffix: string;
  label: string;
  triggered: boolean;
  delay: number;
}> = ({ icon: Icon, target, suffix, label, triggered, delay }) => {
  const count = useCountUp(target, 1600, triggered);
  return (
    <div
      style={{
        textAlign: 'center',
        padding: '32px 24px',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
        opacity: triggered ? 1 : 0,
        transform: triggered ? 'translateY(0)' : 'translateY(24px)',
      }}
    >
      <div
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '12px',
          background: 'rgba(255,255,255,0.12)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 12px',
        }}
      >
        <Icon size={22} color="#93c5fd" />
      </div>
      <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#fff', lineHeight: 1, letterSpacing: '-0.03em' }}>
        {count}{suffix}
      </div>
      <div style={{ fontSize: '13px', color: '#93c5fd', marginTop: '6px', fontWeight: 500 }}>
        {label}
      </div>
    </div>
  );
};



// ── "Why Us" cards ──
const whyUs = [
  {
    icon: Shield,
    title: 'Quality Assurance',
    desc: 'Only the finest materials and proven methods — every project is built to outlast expectations.',
    color: '#2563eb',
    bg: '#eff6ff',
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    desc: 'Disciplined project management means your project finishes on time, every time.',
    color: '#059669',
    bg: '#ecfdf5',
  },
  {
    icon: Heart,
    title: 'Personal Service',
    desc: 'We listen first. Your vision drives every decision we make on site.',
    color: '#7c3aed',
    bg: '#f5f3ff',
  },
  {
    icon: TrendingUp,
    title: 'Proven Track Record',
    desc: '25+ years of excellence with a 98% client satisfaction and on-time delivery rate.',
    color: '#d97706',
    bg: '#fffbeb',
  },
];

const About: React.FC = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const whyRef = useRef<HTMLDivElement>(null);

  const [triggered, setTriggered] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const [storyVisible, setStoryVisible] = useState(false);
  const [whyVisible, setWhyVisible] = useState(false);

  // Helper to attach a one-shot IntersectionObserver
  function observeOnce(ref: React.RefObject<HTMLDivElement | null>, setter: (v: boolean) => void) {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setter(true); obs.disconnect(); } },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }

  useEffect(() => observeOnce(statsRef, setTriggered), []);
  useEffect(() => observeOnce(titleRef, setTitleVisible), []);
  useEffect(() => observeOnce(storyRef, setStoryVisible), []);
  useEffect(() => observeOnce(whyRef, setWhyVisible), []);

  const stats = [
    { icon: Award,  target: 25,  suffix: '+', label: 'Years Experience' },
    { icon: Users,  target: 100, suffix: '+', label: 'Projects Completed' },
    { icon: Clock,  target: 98,  suffix: '%', label: 'On-Time Delivery' },
    { icon: Shield, target: 100, suffix: '%', label: 'Safety Record' },
  ];

  return (
    <>
      <style>{`
        @keyframes aboutFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .about-fade-up {
          opacity: 0;
          animation: aboutFadeUp 0.7s ease forwards;
        }
        .why-card {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: 28px 24px;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          cursor: default;
        }
        .why-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.10);
        }

      `}</style>

      <section id="about" className="py-10 bg-gray-50" style={{ overflow: 'hidden' }}>

        {/* ── TOP: Split — Image left, Story + Timeline right ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section label */}
          <div
            ref={titleRef}
            style={{
              textAlign: 'center',
              marginBottom: '48px',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
              opacity: titleVisible ? 1 : 0,
              transform: titleVisible ? 'translateY(0)' : 'translateY(28px)',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                padding: '5px 16px',
                borderRadius: '999px',
                backgroundColor: '#eff6ff',
                color: '#2563eb',
                fontSize: '13px',
                fontWeight: 600,
                marginBottom: '12px',
                letterSpacing: '0.05em',
                transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s',
                opacity: titleVisible ? 1 : 0,
                transform: titleVisible ? 'translateY(0)' : 'translateY(16px)',
              }}
            >
              WHO WE ARE
            </span>
            <h2
              style={{
                fontSize: '2.5rem',
                fontWeight: 800,
                color: '#0f172a',
                margin: '0 0 12px',
                letterSpacing: '-0.02em',
                transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
                opacity: titleVisible ? 1 : 0,
                transform: titleVisible ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              <HardHat className="inline-block mr-3 mb-1 text-blue-600" size={36} />
              About Shintre Construction
            </h2>
            <p
              style={{
                fontSize: '1.1rem',
                color: '#6b7280',
                maxWidth: '560px',
                margin: '0 auto',
                lineHeight: 1.7,
                transition: 'opacity 0.7s ease 0.35s, transform 0.7s ease 0.35s',
                opacity: titleVisible ? 1 : 0,
                transform: titleVisible ? 'translateY(0)' : 'translateY(16px)',
              }}
            >
              Building trust through quality craftsmanship and unwavering dedication to excellence since 2009.
            </p>
          </div>

          {/* Two-column: Photo | Story + Timeline */}
          <div
            className="about-two-col"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.15fr',
              gap: '56px',
              alignItems: 'start',
              marginBottom: '64px',
            }}
          >
            {/* ─── LEFT: Construction photo with floating badge ─── */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 24px 64px rgba(0,0,0,0.14)',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=85&auto=format&fit=crop"
                  alt="Shintre Construction team at work"
                  style={{ width: '100%', height: '520px', objectFit: 'cover', display: 'block' }}
                />
                {/* Dark overlay gradient */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(15,23,42,0.55) 0%, transparent 55%)',
                    borderRadius: '20px',
                  }}
                />
              </div>

              {/* Floating "Est. 2009" badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '28px',
                  left: '28px',
                  background: '#0f172a',
                  color: '#fff',
                  borderRadius: '14px',
                  padding: '14px 20px',
                  boxShadow: '0 12px 32px rgba(0,0,0,0.30)',
                }}
              >
                <div style={{ fontSize: '22px', fontWeight: 800, lineHeight: 1 }}>Est. 2009</div>
                <div style={{ fontSize: '12px', color: '#93c5fd', marginTop: '3px', fontWeight: 500 }}>
                  Pune, Maharashtra
                </div>
              </div>

              {/* Top-right floating card */}
              <div
                style={{
                  position: 'absolute',
                  top: '24px',
                  right: '-20px',
                  background: '#fff',
                  borderRadius: '14px',
                  padding: '14px 18px',
                  boxShadow: '0 8px 28px rgba(0,0,0,0.13)',
                  border: '1px solid #e5e7eb',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: '#eff6ff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <CheckCircle size={18} color="#2563eb" />
                </div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#111' }}>ISO Certified</div>
                  <div style={{ fontSize: '11px', color: '#9ca3af' }}>Quality Assured</div>
                </div>
              </div>
            </div>

            {/* ─── RIGHT: Story ─── */}
            <div ref={storyRef}>
              {/* Heading */}
              <h3
                style={{
                  fontSize: '1.6rem',
                  fontWeight: 800,
                  color: '#0f172a',
                  marginBottom: '16px',
                  transition: 'opacity 0.65s ease 0s, transform 0.65s ease 0s',
                  opacity: storyVisible ? 1 : 0,
                  transform: storyVisible ? 'translateY(0)' : 'translateY(24px)',
                }}
              >
                Our Story
              </h3>

              {/* Para 1 */}
              <p
                style={{
                  color: '#6b7280',
                  lineHeight: 1.8,
                  marginBottom: '16px',
                  fontSize: '15px',
                  transition: 'opacity 0.65s ease 0.12s, transform 0.65s ease 0.12s',
                  opacity: storyVisible ? 1 : 0,
                  transform: storyVisible ? 'translateY(0)' : 'translateY(24px)',
                }}
              >
                Founded in 2009 by <strong style={{ color: '#0f172a' }}>Mangesh Shintre</strong>, Shintre Construction began as a small family business with a simple mission: build structures that last and relationships that endure. What started with residential renovations has grown into a full-service construction company serving clients across the region.
              </p>

              {/* Para 2 */}
              <p
                style={{
                  color: '#6b7280',
                  lineHeight: 1.8,
                  marginBottom: '32px',
                  fontSize: '15px',
                  transition: 'opacity 0.65s ease 0.24s, transform 0.65s ease 0.24s',
                  opacity: storyVisible ? 1 : 0,
                  transform: storyVisible ? 'translateY(0)' : 'translateY(24px)',
                }}
              >
                Our commitment to quality, transparency, and customer satisfaction has earned us the trust of homeowners, businesses, and government agencies alike. Every project — big or small — receives the same attention to detail and dedication to excellence.
              </p>

              {/* ── Mission box ── */}
              <div
                style={{
                  background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
                  borderRadius: '14px',
                  padding: '20px 24px',
                  borderLeft: '4px solid #2563eb',
                  marginBottom: '36px',
                  transition: 'opacity 0.65s ease 0.36s, transform 0.65s ease 0.36s',
                  opacity: storyVisible ? 1 : 0,
                  transform: storyVisible ? 'translateY(0)' : 'translateY(24px)',
                }}
              >
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#2563eb', letterSpacing: '0.05em', marginBottom: '6px' }}>
                  OUR MISSION
                </div>
                <p style={{ color: '#1e40af', fontSize: '14.5px', lineHeight: 1.7, margin: 0 }}>
                  To provide reliable, affordable, and high-quality construction solutions while building lasting relationships through trust, integrity, and exceptional service.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── STATS BAND (dark, full-width) ── */}
        <div
          ref={statsRef}
          style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)',
            margin: '0 0 64px',
          }}
        >
          <div
            className="stats-grid"
            style={{
              maxWidth: '1280px',
              margin: '0 auto',
              padding: '0 32px',
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '0',
            }}
          >
            {stats.map((s, i) => (
              <div
                key={i}
                style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}
              >
                <StatBandItem
                  icon={s.icon}
                  target={s.target}
                  suffix={s.suffix}
                  label={s.label}
                  triggered={triggered}
                  delay={i * 130}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── WHY US cards ── */}
        <div ref={whyRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ paddingBottom: '16px' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <h3
              style={{
                fontSize: '1.8rem',
                fontWeight: 800,
                color: '#0f172a',
                margin: 0,
                transition: 'opacity 0.65s ease 0s, transform 0.65s ease 0s',
                opacity: whyVisible ? 1 : 0,
                transform: whyVisible ? 'translateY(0)' : 'translateY(24px)',
              }}
            >
              <ShieldCheck className="inline-block mr-2 mb-1 text-blue-600" size={28} />
              Why Choose Shintre Construction?
            </h3>
          </div>
          <div
            className="why-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '20px',
            }}
          >
            {whyUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="why-card"
                  style={{
                    transition: `opacity 0.6s ease ${i * 80}ms, transform 0.6s ease ${i * 80}ms`,
                    opacity: whyVisible ? 1 : 0,
                    transform: whyVisible ? 'translateY(0)' : 'translateY(28px)',
                  }}
                >
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '14px',
                      backgroundColor: item.bg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px',
                    }}
                  >
                    <Icon size={24} color={item.color} />
                  </div>
                  <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '13.5px', color: '#6b7280', lineHeight: 1.65, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Responsive */}
        <style>{`
          @media (max-width: 900px) {
            #about .about-two-col {
              grid-template-columns: 1fr !important;
            }
            #about .stats-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
            #about .why-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (max-width: 540px) {
            #about .stats-grid,
            #about .why-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default About;
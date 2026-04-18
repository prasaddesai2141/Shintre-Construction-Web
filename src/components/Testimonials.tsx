import React, { useEffect, useRef, useState } from 'react';
import { Star, Quote, MessageSquare } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Homeowner',
    image: 'https://d64gsuwffb70l.cloudfront.net/68bd9ce3b75b09e69991a7c7_1757257005181_26a3ee13.webp',
    rating: 5,
    text: 'Shintre Construction built our dream home exactly as we envisioned. Their attention to detail and commitment to quality is outstanding. Completed on time and within budget.',
    project: 'Custom Villa — Pune',
  },
  {
    id: 2,
    name: 'Rajesh Patel',
    role: 'Business Owner',
    image: 'https://d64gsuwffb70l.cloudfront.net/68bd9ce3b75b09e69991a7c7_1757257006937_abdb5ec7.webp',
    rating: 5,
    text: 'We hired Shintre Construction for our office building project. Their professionalism and expertise made the entire process smooth. Highly recommend them for commercial projects.',
    project: 'Office Complex — Mumbai',
  },
  {
    id: 3,
    name: 'Anita Desai',
    role: 'Property Developer',
    image: 'https://d64gsuwffb70l.cloudfront.net/68bd9ce3b75b09e69991a7c7_1757257008774_42e271e5.webp',
    rating: 5,
    text: 'Working with Shintre Construction on multiple residential projects has been a pleasure. They deliver quality work consistently and maintain excellent communication throughout.',
    project: 'Residential Complex — Nagpur',
  },
  {
    id: 4,
    name: 'Vikram Joshi',
    role: 'Real Estate Investor',
    image: 'https://i.pravatar.cc/80?img=11',
    rating: 5,
    text: 'Exceptional craftsmanship and transparent communication at every step. The team delivered beyond expectations and the final result is simply magnificent.',
    project: 'Apartment Block — Pune',
  },
  {
    id: 5,
    name: 'Sunita Kulkarni',
    role: 'Homeowner',
    image: 'https://i.pravatar.cc/80?img=5',
    rating: 5,
    text: 'From blueprint to handover, every stage was handled with care. Our new home is everything we dreamed of. The team is truly professional and trustworthy.',
    project: 'Dream Home — Nashik',
  },
  {
    id: 6,
    name: 'Anil Mehta',
    role: 'Factory Owner',
    image: 'https://i.pravatar.cc/80?img=15',
    rating: 5,
    text: 'The manufacturing facility they built for us is world-class. Delivered ahead of schedule with zero compromise on safety or quality standards.',
    project: 'Industrial Plant — Aurangabad',
  },
];

// All 6 duplicated for seamless single-row loop
const row1 = [...testimonials, ...testimonials];

// ── Single testimonial card ──
const TestimonialCard: React.FC<{ t: typeof testimonials[0] }> = ({ t }) => (
  <div
    style={{
      flexShrink: 0,
      width: '340px',
      background: '#fff',
      borderRadius: '18px',
      padding: '28px 26px',
      border: '1px solid #e5e7eb',
      boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
      position: 'relative',
      transition: 'box-shadow 0.3s ease, transform 0.3s ease',
    }}
    onMouseEnter={e => {
      (e.currentTarget as HTMLDivElement).style.boxShadow = '0 16px 40px rgba(0,0,0,0.13)';
      (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
    }}
    onMouseLeave={e => {
      (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)';
      (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
    }}
  >
    {/* Large quote icon */}
    <Quote
      size={32}
      style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        color: '#dbeafe',
        flexShrink: 0,
      }}
    />

    {/* Stars */}
    <div style={{ display: 'flex', gap: '3px', marginBottom: '14px' }}>
      {[...Array(t.rating)].map((_, i) => (
        <Star key={i} size={16} style={{ fill: '#facc15', color: '#facc15' }} />
      ))}
    </div>

    {/* Quote text */}
    <p
      style={{
        fontSize: '14.5px',
        color: '#374151',
        lineHeight: 1.75,
        fontStyle: 'italic',
        marginBottom: '20px',
      }}
    >
      "{t.text}"
    </p>

    {/* Divider */}
    <div style={{ height: '1px', background: '#f3f4f6', marginBottom: '16px' }} />

    {/* Author */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <img
        src={t.image}
        alt={t.name}
        style={{
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          objectFit: 'cover',
          border: '2px solid #eff6ff',
          flexShrink: 0,
        }}
      />
      <div>
        <div style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a' }}>{t.name}</div>
        <div style={{ fontSize: '12px', color: '#9ca3af' }}>{t.role}</div>
      </div>
      <div
        style={{
          marginLeft: 'auto',
          fontSize: '11px',
          fontWeight: 600,
          color: '#2563eb',
          background: '#eff6ff',
          padding: '3px 10px',
          borderRadius: '999px',
          whiteSpace: 'nowrap',
        }}
      >
        {t.project}
      </div>
    </div>
  </div>
);

// ── Marquee row ──
const MarqueeRow: React.FC<{ items: typeof testimonials; direction: 'left' | 'right'; speed: number }> = ({
  items,
  direction,
  speed,
}) => {
  const [paused, setPaused] = useState(false);
  const animName = direction === 'left' ? 'marqueeLeft' : 'marqueeRight';

  return (
    <div
      style={{
        overflow: 'hidden',
        maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        style={{
          display: 'flex',
          gap: '20px',
          width: 'max-content',
          animationName: animName,
          animationDuration: `${speed}s`,
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
          animationPlayState: paused ? 'paused' : 'running',
        }}
      >
        {items.map((t, i) => (
          <TestimonialCard key={i} t={t} />
        ))}
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setHeaderVisible(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes marqueeLeft {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
      `}</style>

      <section id="testimonials" className="py-10 bg-white" style={{ overflow: 'hidden' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Section Header ── */}
          <div
            ref={headerRef}
            style={{ textAlign: 'center', marginBottom: '48px' }}
          >
            <span
              style={{
                display: 'inline-block',
                padding: '5px 16px',
                borderRadius: '999px',
                backgroundColor: '#fefce8',
                color: '#ca8a04',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.05em',
                marginBottom: '12px',
                transition: 'opacity 0.6s ease 0.05s, transform 0.6s ease 0.05s',
                opacity: headerVisible ? 1 : 0,
                transform: headerVisible ? 'translateY(0)' : 'translateY(16px)',
              }}
            >
              CLIENT STORIES
            </span>
            <h2
              style={{
                fontSize: '2.5rem',
                fontWeight: 800,
                color: '#0f172a',
                margin: '0 0 12px',
                letterSpacing: '-0.02em',
                transition: 'opacity 0.65s ease 0.15s, transform 0.65s ease 0.15s',
                opacity: headerVisible ? 1 : 0,
                transform: headerVisible ? 'translateY(0)' : 'translateY(22px)',
              }}
            >
              <MessageSquare className="inline-block mr-3 mb-1 text-blue-600" size={36} />
              What Our Clients Say
            </h2>
            <p
              style={{
                fontSize: '1.05rem',
                color: '#6b7280',
                maxWidth: '520px',
                margin: '0 auto',
                lineHeight: 1.7,
                transition: 'opacity 0.65s ease 0.28s, transform 0.65s ease 0.28s',
                opacity: headerVisible ? 1 : 0,
                transform: headerVisible ? 'translateY(0)' : 'translateY(16px)',
              }}
            >
              Don't just take our word for it — hear from our satisfied clients about their experience with Shintre Construction
            </p>
          </div>
        </div>

        {/* ── Single marquee row (full-width, outside container) ── */}
        <div style={{ marginBottom: '20px' }}>
          <MarqueeRow items={row1} direction="left" speed={40} />
        </div>
      </section>
    </>
  );
};

export default Testimonials;
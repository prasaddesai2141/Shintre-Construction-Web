import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Calendar, ArrowRight, Building2 } from 'lucide-react';

const allProjects = [
  {
    id: 1,
    title: 'Luxury Villa Complex',
    location: 'Pune, Maharashtra',
    category: 'Residential',
    year: '2023',
    image: 'https://d64gsuwffb70l.cloudfront.net/68bd9ce3b75b09e69991a7c7_1757256981323_84514ac7.webp',
    description: 'Modern 4-bedroom villas with contemporary design and premium finishes.',
  },
  {
    id: 2,
    title: 'Corporate Office Tower',
    location: 'Mumbai, Maharashtra',
    category: 'Commercial',
    year: '2023',
    image: 'https://d64gsuwffb70l.cloudfront.net/68bd9ce3b75b09e69991a7c7_1757256987453_7e5fe566.webp',
    description: '15-story office building with modern amenities and sustainable design.',
  },
  {
    id: 3,
    title: 'Highway Extension Project',
    location: 'Nashik-Pune Highway',
    category: 'Infrastructure',
    year: '2022',
    image: 'https://d64gsuwffb70l.cloudfront.net/68bd9ce3b75b09e69991a7c7_1757256992055_d8781eb2.webp',
    description: '25km highway extension with modern drainage and safety features.',
  },
  {
    id: 4,
    title: 'Residential Apartments',
    location: 'Nagpur, Maharashtra',
    category: 'Residential',
    year: '2023',
    image: 'https://d64gsuwffb70l.cloudfront.net/68bd9ce3b75b09e69991a7c7_1757256983095_53d8859a.webp',
    description: '120-unit apartment complex with recreational facilities and parking.',
  },
  {
    id: 5,
    title: 'Manufacturing Facility',
    location: 'Aurangabad, Maharashtra',
    category: 'Industrial',
    year: '2022',
    image: 'https://d64gsuwffb70l.cloudfront.net/68bd9ce3b75b09e69991a7c7_1757256989482_cef5ce4d.webp',
    description: 'State-of-the-art manufacturing facility with modern infrastructure.',
  },
  {
    id: 6,
    title: 'Heritage Home Renovation',
    location: 'Kolhapur, Maharashtra',
    category: 'Renovation',
    year: '2023',
    image: 'https://d64gsuwffb70l.cloudfront.net/68bd9ce3b75b09e69991a7c7_1757257002631_51dfde58.webp',
    description: 'Complete renovation of 100-year-old heritage home preserving original character.',
  },
];

const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Infrastructure', 'Renovation'];

// Category accent colours
const categoryColors: Record<string, string> = {
  Residential:    '#2563eb',
  Commercial:     '#059669',
  Industrial:     '#d97706',
  Infrastructure: '#7c3aed',
  Renovation:     '#dc2626',
};

// ── Individual project card ──
const ProjectCard: React.FC<{ project: typeof allProjects[0]; delay: number; visible: boolean }> = ({
  project,
  delay,
  visible,
}) => {
  const [hovered, setHovered] = useState(false);
  const accent = categoryColors[project.category] ?? '#2563eb';

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        borderRadius: '18px',
        overflow: 'hidden',
        height: '320px',
        cursor: 'pointer',
        boxShadow: hovered
          ? '0 24px 56px rgba(0,0,0,0.22)'
          : '0 4px 20px rgba(0,0,0,0.08)',
        transition: `
          opacity 0.6s ease ${delay}ms,
          transform 0.6s ease ${delay}ms,
          box-shadow 0.35s ease
        `,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(32px) scale(0.98)',
      }}
    >
      {/* ── Image ── */}
      <img
        src={project.image}
        alt={project.title}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          transition: 'transform 0.55s ease',
          transform: hovered ? 'scale(1.07)' : 'scale(1)',
        }}
      />

      {/* ── Always-visible category pill (top-left) ── */}
      <div
        style={{
          position: 'absolute',
          top: '16px',
          left: '16px',
          backgroundColor: accent,
          color: '#fff',
          padding: '4px 12px',
          borderRadius: '999px',
          fontSize: '12px',
          fontWeight: 700,
          letterSpacing: '0.04em',
          boxShadow: '0 2px 8px rgba(0,0,0,0.20)',
          transition: 'opacity 0.3s ease',
          opacity: hovered ? 0 : 1,
        }}
      >
        {project.category}
      </div>

      {/* ── Hover overlay ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(8,8,20,0.92) 0%, rgba(8,8,20,0.55) 55%, rgba(8,8,20,0.10) 100%)',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.35s ease',
        }}
      />

      {/* ── Overlay content (slides up) ── */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '24px 22px',
          transform: hovered ? 'translateY(0)' : 'translateY(20px)',
          opacity: hovered ? 1 : 0,
          transition: 'transform 0.38s ease, opacity 0.32s ease',
        }}
      >
        {/* Category pill on overlay */}
        <span
          style={{
            display: 'inline-block',
            backgroundColor: accent,
            color: '#fff',
            padding: '3px 10px',
            borderRadius: '999px',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.05em',
            marginBottom: '8px',
          }}
        >
          {project.category}
        </span>

        <h3 style={{ color: '#fff', fontSize: '17px', fontWeight: 800, margin: '0 0 6px', lineHeight: 1.3 }}>
          {project.title}
        </h3>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '13px', lineHeight: 1.5, margin: '0 0 12px' }}>
          {project.description}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: '16px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: 'rgba(255,255,255,0.65)' }}>
              <MapPin size={12} /> {project.location}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: 'rgba(255,255,255,0.65)' }}>
              <Calendar size={12} /> {project.year}
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '13px',
              fontWeight: 700,
              color: '#fff',
              backgroundColor: accent,
              padding: '6px 14px',
              borderRadius: '999px',
            }}
          >
            View <ArrowRight size={13} />
          </div>
        </div>
      </div>
    </div>
  );
};

// ── Main component ──
const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filterChanging, setFilterChanging] = useState(false);
  const [displayedFilter, setDisplayedFilter] = useState('All');
  const [cardsVisible, setCardsVisible] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  // Observe header
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

  // Observe cards grid
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setCardsVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Animated filter switch — fade out → swap → fade in
  const handleFilter = (cat: string) => {
    if (cat === activeFilter) return;
    setFilterChanging(true);
    setCardsVisible(false);
    setTimeout(() => {
      setDisplayedFilter(cat);
      setActiveFilter(cat);
      setFilterChanging(false);
      setTimeout(() => setCardsVisible(true), 60);
    }, 260);
  };

  const filtered = displayedFilter === 'All'
    ? allProjects
    : allProjects.filter(p => p.category === displayedFilter);

  return (
    <>
      <style>{`
        @keyframes projFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .proj-filter-btn {
          padding: 8px 20px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: all 0.22s ease;
          outline: none;
        }
        .proj-filter-btn:hover {
          transform: translateY(-1px);
        }
      `}</style>

      <section id="projects" className="py-10 bg-gray-50" style={{ overflow: 'hidden' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Section Header ── */}
          <div
            ref={headerRef}
            style={{
              textAlign: 'center',
              marginBottom: '40px',
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
                letterSpacing: '0.05em',
                marginBottom: '12px',
                transition: 'opacity 0.6s ease 0.05s, transform 0.6s ease 0.05s',
                opacity: headerVisible ? 1 : 0,
                transform: headerVisible ? 'translateY(0)' : 'translateY(16px)',
              }}
            >
              OUR WORK
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
              <Building2 className="inline-block mr-3 mb-1 text-blue-600" size={36} />
              Our Projects
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
              Showcasing our commitment to excellence through completed projects across various sectors
            </p>
          </div>

          {/* ── Filter Pills ── */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '10px',
              marginBottom: '40px',
              transition: 'opacity 0.65s ease 0.38s',
              opacity: headerVisible ? 1 : 0,
            }}
          >
            {categories.map((cat) => {
              const isActive = activeFilter === cat;
              const accent = categoryColors[cat] ?? '#2563eb';
              return (
                <button
                  key={cat}
                  className="proj-filter-btn"
                  onClick={() => handleFilter(cat)}
                  style={{
                    backgroundColor: isActive ? (cat === 'All' ? '#0f172a' : accent) : '#fff',
                    color: isActive ? '#fff' : '#6b7280',
                    boxShadow: isActive
                      ? `0 4px 14px ${cat === 'All' ? 'rgba(15,23,42,0.25)' : `${accent}44`}`
                      : '0 1px 4px rgba(0,0,0,0.08)',
                    border: isActive ? 'none' : '1px solid #e5e7eb',
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* ── Cards Grid ── */}
          <div
            ref={sectionRef}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px',
              opacity: filterChanging ? 0 : 1,
              transition: 'opacity 0.25s ease',
            }}
          >
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                delay={i * 80}
                visible={cardsVisible}
              />
            ))}
          </div>

          {/* ── Empty state ── */}
          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 0', color: '#9ca3af', fontSize: '15px' }}>
              No projects found in this category.
            </div>
          )}

        </div>

        {/* Responsive */}
        <style>{`
          @media (max-width: 900px) {
            #projects .proj-grid { grid-template-columns: repeat(2,1fr) !important; }
          }
          @media (max-width: 560px) {
            #projects .proj-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </>
  );
};

export default Projects;
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ArrowUpRight, ArrowUp, MessageSquare } from 'lucide-react';

const PHONE = '+91 96375 04588';
const PHONE_RAW = '+919637504588';

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About Us', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Projects', id: 'projects' },
  { label: 'Testimonials', id: 'testimonials' },
  { label: 'Contact', id: 'contact' },
];

const serviceLinks = [
  'Residential Construction',
  'Commercial Buildings',
  'Road Construction',
  'Renovation & Repair',
  'Infrastructure Development',
];

const socials = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: MessageSquare, href: `https://wa.me/${PHONE_RAW}`, label: 'WhatsApp' },
];

const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <style>{`
        .footer-link {
          font-size: 14px;
          color: #94a3b8;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          text-align: left;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: color 0.2s ease, gap 0.2s ease;
          text-decoration: none;
          font-family: inherit;
        }
        .footer-link:hover { color: #fff; gap: 10px; }
        .footer-link .arrow {
          opacity: 0;
          width: 0;
          overflow: hidden;
          transition: opacity 0.2s ease, width 0.2s ease;
          flex-shrink: 0;
        }
        .footer-link:hover .arrow { opacity: 1; width: 13px; }
        .social-btn {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.10);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #94a3b8;
          text-decoration: none;
          transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
        }
        .social-btn:hover {
          background: #2563eb;
          color: #fff;
          border-color: #2563eb;
          transform: translateY(-2px);
        }
      `}</style>

      <footer
        style={{
          background: 'linear-gradient(180deg, #0f172a 0%, #0b1120 100%)',
          color: '#fff',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        {/* ── Main grid ── */}
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '64px 32px 40px',
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr',
            gap: '48px',
          }}
        >
          {/* ── Col 1: Brand ── */}
          <div>
            <div
              className="inline-block cursor-pointer mb-6 transition-transform duration-300 hover:scale-[1.1]"
              onClick={() => scrollTo('home')}
            >
              <img
                src="/logo3.png"
                alt="Shintre Construction Logo"
                className="h-[60px] w-auto object-contain scale-[1.45] origin-left drop-shadow-md"
              />
            </div>
            <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.75, marginBottom: '24px', maxWidth: '260px' }}>
              Building dreams and strengthening foundations with over 25 years of excellence in construction across Maharashtra.
            </p>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: '10px' }}>
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="social-btn">
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>

            {/* WhatsApp quick badge */}
            <a
              href={`https://wa.me/${PHONE_RAW}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                marginTop: '20px',
                padding: '8px 16px',
                borderRadius: '999px',
                background: 'rgba(22,163,74,0.15)',
                border: '1px solid rgba(22,163,74,0.30)',
                color: '#4ade80',
                fontSize: '13px',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(22,163,74,0.25)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(22,163,74,0.15)'; }}
            >
              <MessageSquare size={14} />
              Chat on WhatsApp
            </a>
          </div>

          {/* ── Col 2: Quick Links ── */}
          <div>
            <h4
              style={{
                fontSize: '12px',
                fontWeight: 700,
                color: '#475569',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {navLinks.map((n) => (
                <li key={n.id}>
                  <button className="footer-link" onClick={() => scrollTo(n.id)}>
                    <ArrowUpRight size={13} className="arrow" />
                    {n.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Services ── */}
          <div>
            <h4
              style={{
                fontSize: '12px',
                fontWeight: 700,
                color: '#475569',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}
            >
              Our Services
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {serviceLinks.map((s) => (
                <li key={s}>
                  <button className="footer-link" onClick={() => scrollTo('services')}>
                    <ArrowUpRight size={13} className="arrow" />
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Contact Info ── */}
          <div>
            <h4
              style={{
                fontSize: '12px',
                fontWeight: 700,
                color: '#475569',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}
            >
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <a
                href={`https://maps.google.com`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', textDecoration: 'none' }}
              >
                <MapPin size={15} color="#2563eb" style={{ marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.6, transition: 'color 0.2s' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.color = '#fff'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.color = '#94a3b8'; }}
                  >
                    123 Construction Plaza,<br />Pune, Maharashtra 411001
                  </div>
                </div>
              </a>

              <a
                href={`tel:${PHONE_RAW}`}
                className="footer-link"
                style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
              >
                <Phone size={15} color="#2563eb" style={{ flexShrink: 0 }} />
                {PHONE}
              </a>

              <a
                href="mailto:info@shintreconstruction.com"
                className="footer-link"
                style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
              >
                <Mail size={15} color="#2563eb" style={{ flexShrink: 0 }} />
                info@shintreconstruction.com
              </a>
            </div>

            {/* Business hours pill */}
            <div
              style={{
                marginTop: '20px',
                padding: '12px 16px',
                borderRadius: '12px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#475569', letterSpacing: '0.06em', marginBottom: '4px' }}>
                BUSINESS HOURS
              </div>
              <div style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6 }}>
                Mon – Sat: 9:00 AM – 6:00 PM<br />
                Sunday: 10:00 AM – 4:00 PM
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '20px 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <p style={{ fontSize: '13px', color: '#475569', margin: 0 }}>
            © {new Date().getFullYear()} Shintre Construction. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((t) => (
              <a
                key={t}
                href="#"
                style={{ fontSize: '13px', color: '#475569', textDecoration: 'none', transition: 'color 0.2s ease' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#94a3b8'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#475569'; }}
              >
                {t}
              </a>
            ))}
          </div>

          {/* Scroll to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            title="Back to top"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'rgba(37,99,235,0.15)',
              border: '1px solid rgba(37,99,235,0.30)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#60a5fa',
              cursor: 'pointer',
              transition: 'background 0.2s ease, transform 0.2s ease, color 0.2s ease',
              flexShrink: 0,
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.background = '#2563eb';
              (e.currentTarget as HTMLButtonElement).style.color = '#fff';
              (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(37,99,235,0.15)';
              (e.currentTarget as HTMLButtonElement).style.color = '#60a5fa';
              (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
            }}
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </footer>
    </>
  );
};

export default Footer;
import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle, Sparkles } from 'lucide-react';

const PHONE = '+91 96375 04588';
const PHONE_RAW = '+919637504588';
const WA_LINK = `https://wa.me/919637504588`;

const contactItems = [
  {
    icon: Phone,
    label: 'Phone',
    lines: [PHONE],
    href: `tel:${PHONE_RAW}`,
    color: '#2563eb',
    bg: '#eff6ff',
  },
  {
    icon: Mail,
    label: 'Email',
    lines: ['info@shintreconstruction.com'],
    href: 'mailto:info@shintreconstruction.com',
    color: '#7c3aed',
    bg: '#f5f3ff',
  },
  {
    icon: MapPin,
    label: 'Office Address',
    lines: ['123 Construction Plaza,', 'Pune, Maharashtra 411001'],
    href: 'https://maps.google.com',
    color: '#059669',
    bg: '#ecfdf5',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    lines: ['Mon – Sat: 9:00 AM – 6:00 PM', 'Sunday: 10:00 AM – 4:00 PM'],
    href: null,
    color: '#d97706',
    bg: '#fffbeb',
  },
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', service: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(false);

  const headerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

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
  useEffect(() => observeOnce(leftRef, setLeftVisible), []);
  useEffect(() => observeOnce(rightRef, setRightVisible), []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', service: '', message: '' });
    }, 3500);
  };

  return (
    <>
      <style>{`
        .contact-input {
          width: 100%;
          padding: 13px 16px;
          border: 1.5px solid #e5e7eb;
          border-radius: 10px;
          font-size: 14.5px;
          color: #111;
          background: #fafafa;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
          box-sizing: border-box;
          font-family: inherit;
        }
        .contact-input:focus {
          border-color: #2563eb;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(37,99,235,0.10);
        }
        .contact-input::placeholder { color: #9ca3af; }
        .contact-info-card {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 18px 20px;
          border-radius: 14px;
          border: 1px solid #e5e7eb;
          background: #fff;
          transition: transform 0.22s ease, box-shadow 0.22s ease;
          cursor: pointer;
          text-decoration: none;
        }
        .contact-info-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 28px rgba(0,0,0,0.09);
        }
        .submit-btn {
          width: 100%;
          padding: 15px;
          border-radius: 12px;
          background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%);
          color: #fff;
          font-weight: 700;
          font-size: 15px;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: opacity 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }
        .submit-btn:hover {
          opacity: 0.92;
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(37,99,235,0.30);
        }
      `}</style>

      <section id="contact" className="py-10 bg-gray-50" style={{ overflow: 'hidden' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Section Header ── */}
          <div
            ref={headerRef}
            style={{ textAlign: 'center', marginBottom: '48px' }}
          >
            <h2
              style={{
                fontSize: '2.5rem',
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.15,
                margin: '0 0 16px',
                letterSpacing: '-1px',
                transition: 'opacity 0.7s ease, transform 0.7s ease',
                opacity: headerVisible ? 1 : 0,
                transform: headerVisible ? 'translateY(0)' : 'translateY(24px)',
              }}
            >
              <Sparkles className="inline-block mr-3 mb-1 text-blue-600" size={36} />
              Ready to Build Your Dream Project?
            </h2>
            <p
              style={{
                fontSize: '1.05rem',
                color: '#6b7280',
                margin: '0 auto 24px',
                maxWidth: '480px',
                lineHeight: 1.7,
                transition: 'opacity 0.65s ease 0.15s, transform 0.65s ease 0.15s',
                opacity: headerVisible ? 1 : 0,
                transform: headerVisible ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              From initial consultation to final handover — we deliver with precision, transparency, and pride.
            </p>
            <div
              style={{
                display: 'flex',
                gap: '12px',
                justifyContent: 'center',
                flexWrap: 'wrap',
                transition: 'opacity 0.65s ease 0.28s, transform 0.65s ease 0.28s',
                opacity: headerVisible ? 1 : 0,
                transform: headerVisible ? 'translateY(0)' : 'translateY(16px)',
              }}
            >
              {['✓ Free Consultation', '✓ On-Time Delivery', '✓ 25+ Years Experience'].map((b) => (
                <span
                  key={b}
                  style={{
                    padding: '6px 16px',
                    borderRadius: '999px',
                    backgroundColor: '#eff6ff',
                    color: '#2563eb',
                    fontSize: '13px',
                    fontWeight: 600,
                  }}
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* ── Two Column Grid ── */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.15fr',
              gap: '40px',
              alignItems: 'start',
            }}
          >
            {/* ─── LEFT: Contact Info ─── */}
            <div
              ref={leftRef}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
                opacity: leftVisible ? 1 : 0,
                transform: leftVisible ? 'translateX(0)' : 'translateX(-28px)',
              }}
            >
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', margin: '0 0 4px' }}>
                Contact Information
              </h3>

              {/* Info cards */}
              {contactItems.map((item, i) => {
                const Icon = item.icon;
                const Wrapper = item.href ? 'a' : 'div';
                const wrapperProps = item.href
                  ? { href: item.href, target: item.href.startsWith('http') ? '_blank' : undefined, rel: 'noopener noreferrer' }
                  : {};

                return (
                  <Wrapper
                    key={i}
                    className="contact-info-card"
                    {...(wrapperProps as any)}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '14px',
                      padding: '18px 20px',
                      borderRadius: '14px',
                      border: '1px solid #e5e7eb',
                      background: '#fff',
                      transition: 'transform 0.22s ease, box-shadow 0.22s ease',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
                      (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 28px rgba(0,0,0,0.09)';
                    }}
                    onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                      (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                    }}
                  >
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '12px',
                        backgroundColor: item.bg,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={20} color={item.color} />
                    </div>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 600, color: '#9ca3af', marginBottom: '4px', letterSpacing: '0.03em' }}>
                        {item.label.toUpperCase()}
                      </div>
                      {item.lines.map((line, j) => (
                        <div key={j} style={{ fontSize: '14.5px', color: '#111', fontWeight: 500, lineHeight: 1.6 }}>
                          {line}
                        </div>
                      ))}
                    </div>
                  </Wrapper>
                );
              })}

              {/* WhatsApp quick contact card */}
              <div
                style={{
                  marginTop: '4px',
                  padding: '20px 22px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
                  border: '1px solid #86efac',
                }}
              >
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#14532d', marginBottom: '6px' }}>
                  💬 Quick Contact via WhatsApp
                </div>
                <p style={{ fontSize: '13px', color: '#166534', margin: '0 0 14px', lineHeight: 1.5 }}>
                  For immediate assistance, reach us instantly on WhatsApp.
                </p>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '9px 18px',
                      borderRadius: '9px',
                      backgroundColor: '#16a34a',
                      color: '#fff',
                      fontSize: '13px',
                      fontWeight: 700,
                      textDecoration: 'none',
                      transition: 'opacity 0.2s ease',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.88'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1'; }}
                  >
                    <MessageSquare size={15} />
                    WhatsApp
                  </a>
                  <a
                    href={`tel:${PHONE_RAW}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '9px 18px',
                      borderRadius: '9px',
                      backgroundColor: '#2563eb',
                      color: '#fff',
                      fontSize: '13px',
                      fontWeight: 700,
                      textDecoration: 'none',
                      transition: 'opacity 0.2s ease',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.88'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1'; }}
                  >
                    <Phone size={15} />
                    Call Now
                  </a>
                </div>
              </div>
            </div>

            {/* ─── RIGHT: Form ─── */}
            <div
              ref={rightRef}
              style={{
                backgroundColor: '#fff',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 4px 32px rgba(0,0,0,0.07)',
                border: '1px solid #f1f5f9',
                transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
                opacity: rightVisible ? 1 : 0,
                transform: rightVisible ? 'translateX(0)' : 'translateX(28px)',
              }}
            >
              {submitted ? (
                /* ── Success state ── */
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '380px',
                    textAlign: 'center',
                    gap: '16px',
                  }}
                >
                  <div
                    style={{
                      width: '72px',
                      height: '72px',
                      borderRadius: '50%',
                      backgroundColor: '#dcfce7',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <CheckCircle size={36} color="#16a34a" />
                  </div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                    Message Sent!
                  </h3>
                  <p style={{ color: '#6b7280', fontSize: '15px', maxWidth: '320px', margin: 0, lineHeight: 1.6 }}>
                    Thank you! We'll get back to you within 24 hours with your free quote.
                  </p>
                </div>
              ) : (
                /* ── Form ── */
                <>
                  <div style={{ marginBottom: '28px' }}>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', margin: '0 0 6px' }}>
                      Send us a Message
                    </h3>
                    <p style={{ fontSize: '13.5px', color: '#9ca3af', margin: 0 }}>
                      Fill out the form and we'll respond within 24 hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                    {/* Full Name */}
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="contact-input"
                        placeholder="Enter your full name"
                      />
                    </div>

                    {/* Phone + Email row */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="contact-input"
                          placeholder="+91 96375 04588"
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="contact-input"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    {/* Service */}
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>
                        Service Required
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="contact-input"
                      >
                        <option value="">Select a service</option>
                        <option value="residential">Residential Construction</option>
                        <option value="commercial">Commercial Construction</option>
                        <option value="road">Road Construction</option>
                        <option value="renovation">Renovation &amp; Repair</option>
                        <option value="infrastructure">Infrastructure Development</option>
                        <option value="consultation">Free Consultation</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="contact-input"
                        placeholder="Describe your project — location, size, timeline, or any specific requirements..."
                        style={{ resize: 'vertical', minHeight: '110px' }}
                      />
                    </div>

                    {/* Submit */}
                    <button type="submit" className="submit-btn">
                      <Send size={17} />
                      Send Message &amp; Get Free Quote
                    </button>

                    <p style={{ fontSize: '12px', color: '#9ca3af', textAlign: 'center', margin: 0 }}>
                      🔒 Your information is safe and will never be shared.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Responsive */}
        <style>{`
          @media (max-width: 900px) {
            #contact > div > div:last-child {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default Contact;
import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

// ── 10 construction images split across 2 columns ──
const col1Images = [
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80&auto=format&fit=crop',
    alt: 'Modern luxury home exterior',
  },
  {
    src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80&auto=format&fit=crop',
    alt: 'Construction blueprint',
  },
  {
    src: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80&auto=format&fit=crop',
    alt: 'Premium residential villa',
  },
  {
    src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80&auto=format&fit=crop',
    alt: 'Commercial building site',
  },
  {
    src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80&auto=format&fit=crop',
    alt: 'High-rise construction',
  },
];

const col2Images = [
  {
    src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80&auto=format&fit=crop',
    alt: 'Architectural structure',
  },
  {
    src: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&q=80&auto=format&fit=crop',
    alt: 'Contemporary building design',
  },
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop',
    alt: 'Interior construction finish',
  },
  {
    src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80&auto=format&fit=crop',
    alt: 'Luxury home architecture',
  },
  {
    src: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=600&q=80&auto=format&fit=crop',
    alt: 'Construction workers on site',
  },
];

// Duplicate arrays for seamless infinite loop
const loopCol1 = [...col1Images, ...col1Images];
const loopCol2 = [...col2Images, ...col2Images];

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* ── Keyframe CSS injected globally ── */}
      <style>{`
        @keyframes scrollUp {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scrollDown {
          0%   { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-title { opacity: 0; animation: heroFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.1s; }
        .hero-desc  { opacity: 0; animation: heroFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.25s; }
        .hero-btns  { opacity: 0; animation: heroFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.4s; }
        .hero-stats { opacity: 0; animation: heroFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.55s; }
        
        .hero-col-up {
          animation: scrollUp 20s linear infinite;
        }
        .hero-col-down {
          animation: scrollDown 24s linear infinite;
        }
        .hero-col-up:hover,
        .hero-col-down:hover {
          animation-play-state: paused;
        }
        .hero-scroll-wrapper {
          overflow: hidden;
          mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            black 12%,
            black 88%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            black 12%,
            black 88%,
            transparent 100%
          );
        }
      `}</style>

      <section id="home" className="relative bg-gray-900 text-white overflow-hidden min-h-screen flex items-center">
        {/* ── Background image with overlay ── */}
        <div className="absolute inset-0">
          <img
            src="https://d64gsuwffb70l.cloudfront.net/68bd9ce3b75b09e69991a7c7_1757256980534_fadad640.webp"
            alt="Construction site with workers and machinery"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/40"></div>
        </div>

        {/* ── MAIN GRID: Left text + Right scroll columns ── */}
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '48px',
              alignItems: 'center',
              minHeight: '80vh',
            }}
          >
            {/* ─── LEFT: Original Text Content ─── */}
            <div className="max-w-xl">
              <h1 className="hero-title text-4xl md:text-6xl font-bold leading-tight mb-6">
                Building Dreams,<br />
                <span className="text-blue-400">Strengthening Foundations</span>
              </h1>

              <p className="hero-desc text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                With over a decade of excellence in construction, Shintre Construction delivers
                quality residential, commercial, and infrastructure projects that stand the test of time.
              </p>

              <div className="hero-btns flex flex-col sm:flex-row gap-4 mb-12">
                <button
                  onClick={scrollToContact}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center group"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="tel:+919637504588"
                  className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 text-center"
                >
                  Call Now: +91 96375 04588
                </a>
              </div>

              <div className="hero-stats flex flex-wrap gap-6 text-sm">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  Licensed &amp; Insured
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  25+ Years Experience
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  100+ Projects Completed
                </div>
              </div>
            </div>

            {/* ─── RIGHT: Two auto-scroll image columns ─── */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px',
                height: '90vh',
                maxHeight: '800px',
              }}
            >
              {/* Column 1 — scrolls UP */}
              <div className="hero-scroll-wrapper" style={{ borderRadius: '16px' }}>
                <div className="hero-col-up" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {loopCol1.map((img, i) => (
                    <div
                      key={i}
                      style={{
                        borderRadius: '14px',
                        overflow: 'hidden',
                        flexShrink: 0,
                        height: '260px',
                      }}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                          transition: 'transform 0.4s ease',
                        }}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 2 — scrolls DOWN (offset start) */}
              <div
                className="hero-scroll-wrapper"
                style={{ borderRadius: '16px', marginTop: '40px' }}
              >
                <div className="hero-col-down" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {loopCol2.map((img, i) => (
                    <div
                      key={i}
                      style={{
                        borderRadius: '14px',
                        overflow: 'hidden',
                        flexShrink: 0,
                        height: '260px',
                      }}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                          transition: 'transform 0.4s ease',
                        }}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Responsive: stack on mobile ── */}
        <style>{`
          @media (max-width: 768px) {
            #home > div > div {
              grid-template-columns: 1fr !important;
            }
            #home .hero-scroll-wrapper-container {
              display: none;
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default Hero;
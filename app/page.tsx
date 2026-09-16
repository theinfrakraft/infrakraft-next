import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'InfraKraft — We Build, Automate & Grow Your Business',
  description: 'InfraKraft delivers website development, mobile apps, AI automation, and digital marketing for startups, SMBs, and enterprises across India.',
  openGraph: {
    url: 'https://infrakraft-next.vercel.app/',
    title: 'InfraKraft — We Build, Automate & Grow Your Business',
    description: 'Website development, mobile apps, AI automation, and digital marketing for Indian businesses.',
  },
};

const WA = '918148656971';

const SERVICES = [
  { icon: '🌐', title: 'Website Development', desc: 'High-performance websites, landing pages, and web apps built for speed, SEO, and conversions.', tag: 'Build' },
  { icon: '📱', title: 'Mobile Apps', desc: 'iOS and Android apps — from MVPs to full-scale products, delivered with clean code and full ownership.', tag: 'Build' },
  { icon: '🤖', title: 'AI Automation', desc: 'AI agents and workflow automation that run your operations 24/7 — eliminating manual work entirely.', tag: 'Automate' },
  { icon: '📣', title: 'Digital Marketing', desc: 'SEO, social media, paid ads, and content marketing — growth that brings real customers, not just traffic.', tag: 'Grow' },
  { icon: '💼', title: 'Software Contracts', desc: 'Dedicated engineering teams and contract development for businesses that need reliable tech capacity.', tag: 'Build' },
  { icon: '🚀', title: 'Product Development', desc: 'End-to-end product delivery — architecture to launch. Your idea, shipped fast and built to last.', tag: 'Build' },
];

const MARQUEE_ITEMS = [
  'Retail & E-commerce', 'Healthcare', 'FinTech', 'Real Estate',
  'Education', 'Hospitality', 'Logistics', 'SaaS', 'Manufacturing',
  'Professional Services', 'Media & Entertainment', 'Non-Profit',
];

const WHY = [
  { icon: '🎯', title: 'End-to-end ownership', desc: 'One team handles everything — strategy, design, dev, and marketing. No handoffs, no blame games.' },
  { icon: '💰', title: 'Fixed pricing', desc: 'Every project is scoped and priced upfront. You know what you\'re getting before you commit a rupee.' },
  { icon: '⚡', title: 'Fast delivery', desc: 'Most projects delivered in 1–3 weeks. We move fast without cutting corners.' },
  { icon: '🔑', title: 'You own everything', desc: 'All code, credentials, and assets handed over on delivery. No vendor lock-in, ever.' },
];

const TESTIMONIALS = [
  { quote: 'InfraKraft built our business website in under a week. We got our first Google enquiry within two weeks of going live.', name: 'Rekha N.', role: 'Founder, Bakery Chain — Bangalore', initials: 'RN' },
  { quote: 'Our deploy pipeline went from 45 minutes to under 8 minutes after InfraKraft set up our CI/CD on AWS. Exceptional work.', name: 'Vikram K.', role: 'CTO, Healthcare Startup', initials: 'VK' },
  { quote: 'The WhatsApp AI bot handles 80% of customer queries automatically. It paid for itself in the first month.', name: 'Arjun S.', role: 'Owner, Home Services Business — Chennai', initials: 'AS' },
];

export default function HomePage() {
  const marqueeItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'InfraKraft',
            description: 'Website development, mobile apps, AI automation, and digital marketing for Indian businesses.',
            url: 'https://infrakraft-next.vercel.app/',
            telephone: '+918148656971',
            email: 'contact.theinfrakraft@gmail.com',
            address: { '@type': 'PostalAddress', addressLocality: 'Bangalore', addressRegion: 'Karnataka', addressCountry: 'IN' },
            areaServed: 'IN',
          }),
        }}
      />

      {/* ── HERO ── */}
      <section className="ik-hero">
        <div className="ik-hero-bg-grid" aria-hidden="true" />
        <div className="ik-hero-glow" aria-hidden="true" />
        <div className="ik-container ik-hero-layout">

          {/* Left copy */}
          <div className="ik-hero-copy">
            <div className="ik-eyebrow">Technology · Marketing · Growth</div>
            <h1 className="ik-hero-h1">
              We <span className="ik-accent-text">build</span>,<br />
              automate &amp;<br />
              <span className="ik-gradient-text">grow your business.</span>
            </h1>
            <p className="ik-hero-sub">
              End-to-end technology and marketing solutions for startups, SMBs, and enterprises —{' '}
              <span id="ik-typeit-target"></span>
            </p>
            <div className="ik-hero-btns">
              <a href="https://cal.com/infrakraft/30min" className="ik-btn ik-btn-primary" target="_blank" rel="noopener">
                Get a free consultation
              </a>
              <a href={`https://wa.me/${WA}`} className="ik-btn ik-btn-wa" target="_blank" rel="noopener">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp us
              </a>
            </div>
          </div>

          {/* Right visual */}
          <div className="ik-hero-visual" aria-hidden="true">
            <div className="ik-preview-stack">
              <div className="ik-preview-card ik-preview-card--back">
                <div className="ik-preview-bar">
                  <span className="ik-dot red" /><span className="ik-dot yellow" /><span className="ik-dot green" />
                  <span className="ik-preview-url">infrakraft.ai · AI Agent</span>
                </div>
                <div className="ik-preview-body">
                  <div className="ik-agent-row"><span className="ik-agent-label">AGENT</span><span className="ik-agent-msg typing">Analysing your leads…</span></div>
                  <div className="ik-agent-row"><span className="ik-agent-label">ACTION</span><span className="ik-agent-msg">→ CRM updated · Slack notified</span></div>
                  <div className="ik-agent-row"><span className="ik-agent-label">STATUS</span><span className="ik-agent-status">● Running 24 / 7</span></div>
                </div>
              </div>
              <div className="ik-preview-card ik-preview-card--mid">
                <div className="ik-preview-bar">
                  <span className="ik-dot red" /><span className="ik-dot yellow" /><span className="ik-dot green" />
                  <span className="ik-preview-url">yourapp.com · Mobile App</span>
                </div>
                <div className="ik-preview-body ik-app-mock">
                  <div className="ik-app-header">Dashboard</div>
                  <div className="ik-app-stats">
                    <div className="ik-app-stat"><div className="ik-app-stat-val">₹2.4L</div><div className="ik-app-stat-lbl">Revenue</div></div>
                    <div className="ik-app-stat"><div className="ik-app-stat-val">148</div><div className="ik-app-stat-lbl">Orders</div></div>
                    <div className="ik-app-stat"><div className="ik-app-stat-val">94%</div><div className="ik-app-stat-lbl">Satisfied</div></div>
                  </div>
                  <div className="ik-app-bar-row">
                    <div className="ik-app-bar" style={{ '--w': '80%' } as React.CSSProperties} />
                    <div className="ik-app-bar" style={{ '--w': '55%' } as React.CSSProperties} />
                    <div className="ik-app-bar" style={{ '--w': '70%' } as React.CSSProperties} />
                  </div>
                </div>
              </div>
              <div className="ik-preview-card ik-preview-card--front">
                <div className="ik-preview-bar">
                  <span className="ik-dot red" /><span className="ik-dot yellow" /><span className="ik-dot green" />
                  <span className="ik-preview-url">yourbrand.in · Website</span>
                </div>
                <div className="ik-preview-body ik-web-mock">
                  <div className="ik-web-nav">
                    <div className="ik-web-logo">Brand</div>
                    <div className="ik-web-nav-links"><span /><span /><span /></div>
                  </div>
                  <div className="ik-web-hero-mock">
                    <div className="ik-web-h">Grow Your Business Online</div>
                    <div className="ik-web-sub">Professional. Fast. Affordable.</div>
                    <div className="ik-web-cta">Get Started →</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="ik-marquee-wrap">
        <div className="ik-marquee-track">
          {marqueeItems.map((item, i) => (
            <span key={i} className="ik-marquee-item">
              <span className="ik-marquee-dot" aria-hidden="true">◆</span>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section className="ik-section ik-section--light">
        <div className="ik-container">
          <div className="ik-section-head ik-reveal">
            <div className="ik-label">What we do</div>
            <h2 className="ik-section-h2">One partner for everything<br />tech and growth</h2>
            <p className="ik-section-sub">From your first website to a full AI-powered operation — we cover the complete stack of what modern businesses need to compete and grow.</p>
          </div>
          <div className="ik-services-grid ik-reveal-stagger">
            {SERVICES.map((s) => (
              <Link key={s.title} href="/services" className="ik-service-card">
                <div className="ik-service-tag">{s.tag}</div>
                <div className="ik-service-icon">{s.icon}</div>
                <div className="ik-service-name">{s.title}</div>
                <div className="ik-service-desc">{s.desc}</div>
                <div className="ik-service-arrow">→</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY INFRAKRAFT ── */}
      <section className="ik-section ik-section--dark ik-why-section">
        <div className="ik-why-glow" aria-hidden="true" />
        <div className="ik-container ik-why-layout">
          <div className="ik-why-copy ik-reveal">
            <div className="ik-label" style={{ color: 'var(--ik-gold)' }}>Why InfraKraft</div>
            <h2 className="ik-section-h2" style={{ color: '#fff' }}>Built for Indian businesses<br />that mean business.</h2>
            <p className="ik-section-sub" style={{ color: 'var(--ik-muted)' }}>We understand what Indian startups and SMBs need — fast turnaround, transparent pricing, and tech that actually works. No fluff, no excuses.</p>
            <a href="https://cal.com/infrakraft/30min" className="ik-btn ik-btn-primary" target="_blank" rel="noopener" style={{ marginTop: '8px' }}>
              Book a free call
            </a>
          </div>
          <div className="ik-why-grid ik-reveal-stagger">
            {WHY.map((w) => (
              <div key={w.title} className="ik-why-card">
                <div className="ik-why-icon">{w.icon}</div>
                <div className="ik-why-title">{w.title}</div>
                <div className="ik-why-desc">{w.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="ik-section ik-section--light">
        <div className="ik-container">
          <div className="ik-section-head ik-reveal">
            <div className="ik-label">Our process</div>
            <h2 className="ik-section-h2">Simple. Transparent. Fast.</h2>
            <p className="ik-section-sub">We've designed our process to remove friction at every step so you can focus on your business, not managing a vendor.</p>
          </div>
          <div className="ik-process-track ik-reveal-stagger">
            <div className="ik-process-step">
              <div className="ik-process-icon">📞</div>
              <div className="ik-process-content">
                <div className="ik-process-title">Free discovery call</div>
                <div className="ik-process-desc">No pitch, no pressure. We learn your goals, your challenges, and what success looks like for you.</div>
              </div>
            </div>
            <div className="ik-process-connector" aria-hidden="true" />
            <div className="ik-process-step">
              <div className="ik-process-icon">📋</div>
              <div className="ik-process-content">
                <div className="ik-process-title">Scope &amp; fixed quote</div>
                <div className="ik-process-desc">Within 24 hours: a detailed scope of work, timeline, and fixed price. No surprises, no hourly billing.</div>
              </div>
            </div>
            <div className="ik-process-connector" aria-hidden="true" />
            <div className="ik-process-step">
              <div className="ik-process-icon">🚀</div>
              <div className="ik-process-content">
                <div className="ik-process-title">Deliver &amp; hand over</div>
                <div className="ik-process-desc">We build with full transparency. All code, credentials, and assets are yours on delivery. Always.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="ik-section ik-section--dark ik-stats-section">
        <div className="ik-container">
          <div className="ik-stats-grid">
            <div className="ik-stat-item">
              <div className="ik-stat-val" data-count="50" data-suffix="+">0</div>
              <div className="ik-stat-label">Projects delivered</div>
            </div>
            <div className="ik-stat-item">
              <div className="ik-stat-val" data-count="12" data-suffix="">12</div>
              <div className="ik-stat-label">Industries served</div>
            </div>
            <div className="ik-stat-item">
              <div className="ik-stat-val" data-count="24" data-suffix="h">0</div>
              <div className="ik-stat-label">Response guarantee</div>
            </div>
            <div className="ik-stat-item">
              <div className="ik-stat-val" data-count="100" data-suffix="%">0</div>
              <div className="ik-stat-label">Code & IP ownership</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="ik-section ik-section--tinted">
        <div className="ik-container">
          <div className="ik-section-head ik-reveal">
            <div className="ik-label">Client stories</div>
            <h2 className="ik-section-h2">What our clients say</h2>
          </div>
          <div className="ik-testi-grid ik-reveal-stagger">
            {TESTIMONIALS.map((t) => (
              <div key={t.initials} className="ik-testi-card">
                <div className="ik-testi-quote-mark" aria-hidden="true">&ldquo;</div>
                <p className="ik-testi-body">{t.quote}</p>
                <div className="ik-testi-author">
                  <div className="ik-testi-avatar">{t.initials}</div>
                  <div>
                    <div className="ik-testi-name">{t.name}</div>
                    <div className="ik-testi-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="ik-section ik-cta-section">
        <div className="ik-cta-glow" aria-hidden="true" />
        <div className="ik-container ik-reveal">
          <div className="ik-cta-inner">
            <div className="ik-label" style={{ color: 'var(--ik-gold)' }}>Let&apos;s get started</div>
            <h2 className="ik-cta-h2">Ready to build<br />something great?</h2>
            <p className="ik-cta-sub">Whether you need a website, a mobile app, AI automation, or a full growth strategy — we&apos;re here. Let&apos;s talk about your business.</p>
            <div className="ik-cta-btns">
              <a href="https://cal.com/infrakraft/30min" className="ik-btn ik-btn-primary" target="_blank" rel="noopener">
                Book a free consultation
              </a>
              <Link href="/services" className="ik-btn ik-btn-ghost">
                Explore services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* GSAP core + ScrollTrigger */}
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" strategy="beforeInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" strategy="beforeInteractive" />
      {/* TypeIt */}
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/typeit/8.8.1/index.umd.min.js" strategy="beforeInteractive" />

      <Script id="hp-animations" strategy="afterInteractive">{`
        (function() {
          if (typeof gsap === 'undefined') return;

          gsap.registerPlugin(ScrollTrigger);

          /* ── Hero entrance (stagger children) ── */
          gsap.from('.ik-eyebrow', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out', delay: 0.1 });
          gsap.from('.ik-hero-h1', { y: 28, opacity: 0, duration: 0.7, ease: 'power3.out', delay: 0.22 });
          gsap.from('.ik-hero-btns', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out', delay: 0.45 });
          gsap.from('.ik-hero-visual', { x: 40, opacity: 0, duration: 0.9, ease: 'power3.out', delay: 0.3 });

          /* ── Scroll reveals ── */
          gsap.utils.toArray('.ik-reveal').forEach(function(el) {
            gsap.from(el, {
              y: 30, opacity: 0, duration: 0.75, ease: 'power3.out',
              scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' }
            });
          });

          gsap.utils.toArray('.ik-reveal-stagger').forEach(function(parent) {
            var children = parent.children;
            gsap.from(children, {
              y: 24, opacity: 0, duration: 0.6, ease: 'power3.out', stagger: 0.08,
              scrollTrigger: { trigger: parent, start: 'top 85%', toggleActions: 'play none none none' }
            });
          });

          /* ── Counter animation (GSAP) ── */
          gsap.utils.toArray('.ik-stat-val').forEach(function(el) {
            var target = parseInt(el.dataset.count, 10);
            var suffix = el.dataset.suffix || '';
            var obj = { val: 0 };
            gsap.to(obj, {
              val: target, duration: 2, ease: 'power2.out',
              scrollTrigger: { trigger: el, start: 'top 85%', once: true },
              onUpdate: function() { el.textContent = Math.round(obj.val) + suffix; }
            });
          });

          /* ── Service cards hover tilt ── */
          document.querySelectorAll('.ik-service-card').forEach(function(card) {
            card.addEventListener('mousemove', function(e) {
              var rect = card.getBoundingClientRect();
              var x = (e.clientX - rect.left) / rect.width - 0.5;
              var y = (e.clientY - rect.top)  / rect.height - 0.5;
              gsap.to(card, { rotateY: x * 6, rotateX: -y * 6, duration: 0.4, ease: 'power2.out', transformPerspective: 800 });
            });
            card.addEventListener('mouseleave', function() {
              gsap.to(card, { rotateY: 0, rotateX: 0, duration: 0.5, ease: 'elastic.out(1, 0.5)' });
            });
          });

          /* ── TypeIt hero sub ── */
          var tiTarget = document.getElementById('ik-typeit-target');
          if (tiTarget && typeof TypeIt !== 'undefined') {
            new TypeIt('#ik-typeit-target', {
              speed: 40,
              startDelay: 900,
              cursor: true,
              cursorChar: '|',
              loop: true,
              loopDelay: 3000,
            })
            .type('websites & web apps.')
            .pause(1800).delete()
            .type('mobile applications.')
            .pause(1800).delete()
            .type('AI automation & agents.')
            .pause(1800).delete()
            .type('digital marketing & growth.')
            .pause(1800).delete()
            .go();
          }

        })();
      `}</Script>
    </>
  );
}

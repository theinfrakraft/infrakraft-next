import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'InfraKraft — Freelance Web, Cloud & AI Services | Bangalore & Chennai',
  description: 'AWS-certified freelancer offering business websites, cloud & DevOps setup, and AI automation for Indian SMBs and startups. Free 30-min discovery call.',
  openGraph: {
    url: 'https://theinfrakraft.vercel.app/',
    title: 'InfraKraft — Web, Cloud & AI for Indian Businesses',
    description: 'AWS-certified freelancer. Business websites from ₹5,000. Cloud & DevOps, AI automation. Free 30-min call.',
  },
};

const WA = '918148656971';

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'InfraKraft',
            description: 'Freelance web, cloud, DevOps, and AI automation services for Indian businesses and startups.',
            url: 'https://theinfrakraft.vercel.app/',
            telephone: '+918148656971',
            email: 'contact.theinfrakraft@gmail.com',
            address: { '@type': 'PostalAddress', addressLocality: 'Bangalore', addressRegion: 'Karnataka', addressCountry: 'IN' },
            areaServed: 'IN',
            priceRange: '₹₹',
            sameAs: ['https://www.linkedin.com/in/krishna-prasad-15b555375'],
          }),
        }}
      />

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="hero-badges">
              <span className="hero-badge active">Small Business</span>
              <span className="hero-badge">Startups</span>
              <span className="hero-badge">Students</span>
            </div>
            <h1 className="hero-headline">
              Production-ready tech.<br />
              <em>No agency overhead.</em>
            </h1>
            <p className="hero-sub">
              Websites, cloud infrastructure, and AI automation — built by a senior engineer with 6+ years of production experience. One person, full accountability, delivered fast.
            </p>
            <div className="hero-actions">
              <a href={`https://wa.me/${WA}`} className="btn btn-whatsapp" target="_blank" rel="noopener">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
              <a href="https://cal.com/infrakraft/30min" className="btn btn-ghost" target="_blank" rel="noopener">Book a free 30-min call</a>
            </div>
          </div>
          <div className="cred-card">
            <div className="cred-card-header">
              <div className="cred-avatar">KP</div>
              <div>
                <div className="cred-name">Krishna Prasad</div>
                <div className="cred-title">Freelance Engineer · InfraKraft</div>
              </div>
            </div>
            <div className="cred-stats">
              <div className="cred-stat"><div className="cred-stat-val">6<span>+ yrs</span></div><div className="cred-stat-lbl">Experience</div></div>
              <div className="cred-stat"><div className="cred-stat-val">24<span>h</span></div><div className="cred-stat-lbl">Response SLA</div></div>
              <div className="cred-stat"><div className="cred-stat-val">3</div><div className="cred-stat-lbl">Cities served</div></div>
              <div className="cred-stat"><div className="cred-stat-val">50<span>%</span></div><div className="cred-stat-lbl">Upfront only</div></div>
            </div>
            <div className="cred-badges">
              <div className="cred-badge-row"><div className="cred-badge-icon aws">AWS</div><span>Certified Solutions Architect</span></div>
              <div className="cred-badge-row"><div className="cred-badge-icon loc">📍</div><span>Bangalore / Chennai</span><div className="status-dot" /></div>
              <div className="cred-badge-row"><div className="cred-badge-icon loc">💳</div><span>UPI · GPay · PhonePe</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="trust-bar">
        <div className="trust-inner">
          <div className="trust-item"><div className="trust-val">6+</div><div className="trust-lbl">Years production experience</div></div>
          <div className="trust-item"><div className="trust-val">AWS</div><div className="trust-lbl">Certified Solutions Architect</div></div>
          <div className="trust-item"><div className="trust-val">24h</div><div className="trust-lbl">Response guarantee</div></div>
          <div className="trust-item"><div className="trust-val">100%</div><div className="trust-lbl">Code & credentials ownership on delivery</div></div>
        </div>
      </div>

      {/* PORTFOLIO */}
      <section className="section" id="work" style={{ background: 'var(--surface-2)' }}>
        <div className="container">
          <div className="section-label">Selected work</div>
          <h2 className="section-title">Projects shipped</h2>
          <p className="section-sub">Real results from real clients. All code and credentials handed over on delivery.</p>
          <div className="portfolio-grid reveal-stagger">
            <div className="portfolio-card">
              <div className="portfolio-mock">
                <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
                  <rect width="400" height="200" fill="#0f2235" /><rect width="400" height="40" fill="#0B1D2E" /><circle cx="18" cy="20" r="5" fill="#C47E08" /><rect x="30" y="14" width="55" height="12" rx="3" fill="#E8A020" opacity=".9" />
                </svg>
              </div>
              <div className="portfolio-body">
                <span className="portfolio-tag">Website + SEO</span>
                <div className="portfolio-title">Local Bakery — Bangalore</div>
                <div className="portfolio-desc">3-page site with menu, WhatsApp order button, Google Maps & Business listing. Delivered in 6 days.</div>
                <div className="portfolio-result">&ldquo;First Google enquiry within 2 weeks of going live.&rdquo;</div>
              </div>
            </div>
            <div className="portfolio-card">
              <div className="portfolio-mock">
                <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
                  <rect width="400" height="200" fill="#0a1a2a" /><rect width="400" height="32" fill="#091525" /><text x="200" y="62" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#4ade80">✓ build passed · 7m 54s</text>
                </svg>
              </div>
              <div className="portfolio-body">
                <span className="portfolio-tag">Cloud · CI/CD</span>
                <div className="portfolio-title">Healthcare Software Startup</div>
                <div className="portfolio-desc">AWS CI/CD — push to prod in under 10 min, automated tests, security scans, Slack alerts. Terraform IaC.</div>
                <div className="portfolio-result">&ldquo;Deploy time cut from 45 min to 8 min.&rdquo;</div>
              </div>
            </div>
            <div className="portfolio-card">
              <div className="portfolio-mock">
                <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
                  <rect width="400" height="200" fill="#0d2218" /><rect x="55" y="16" width="290" height="168" rx="14" fill="#128c45" />
                </svg>
              </div>
              <div className="portfolio-body">
                <span className="portfolio-tag">WhatsApp AI</span>
                <div className="portfolio-title">Home Services Business — Chennai</div>
                <div className="portfolio-desc">WhatsApp AI assistant — instant replies to pricing & booking queries, automated appointment flow.</div>
                <div className="portfolio-result">&ldquo;20+ bookings in the first month post-launch.&rdquo;</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container">
          <div className="section-label">What clients say</div>
          <h2 className="section-title">In their words</h2>
          <div className="testimonials-grid reveal-stagger">
            <div className="testi-card">
              <div className="testi-quote">Krishna built our bakery website in under a week. We got our first Google enquiry within two weeks of going live.</div>
              <div className="testi-author"><div className="testi-avatar">RN</div><div><div className="testi-name">Rekha N.</div><div className="testi-role">Bakery owner, Bangalore</div></div></div>
            </div>
            <div className="testi-card">
              <div className="testi-quote">Our deploy pipeline used to take 45 minutes. After Krishna set up the CI/CD on AWS, it&apos;s under 8 minutes.</div>
              <div className="testi-author"><div className="testi-avatar">VK</div><div><div className="testi-name">Vikram K.</div><div className="testi-role">CTO, Healthcare startup</div></div></div>
            </div>
            <div className="testi-card">
              <div className="testi-quote">The tutoring sessions were hands-on from day one. I passed my AWS Cloud Practitioner exam on the first attempt.</div>
              <div className="testi-author"><div className="testi-avatar">DM</div><div><div className="testi-name">Divya M.</div><div className="testi-role">Software Engineer, Chennai</div></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* HOME CTA */}
      <section className="section" style={{ background: 'var(--bg-hero)', textAlign: 'center' }}>
        <div className="container">
          <div className="section-label" style={{ color: 'var(--accent-bright)' }}>Ready to start?</div>
          <h2 className="section-title" style={{ color: 'var(--text-hero)', margin: '0 auto 14px' }}>Not sure what you need? Let&apos;s figure it out.</h2>
          <p className="section-sub" style={{ color: 'var(--text-hero-muted)', margin: '0 auto 36px' }}>A free 30-minute call is enough to scope most projects. No sales pitch — just a straight conversation.</p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://cal.com/infrakraft/30min" className="btn btn-accent" target="_blank" rel="noopener">Book a free 30-min call</a>
            <Link href="/services" className="btn btn-ghost">See all services</Link>
          </div>
        </div>
      </section>

      <Script id="scroll-reveal" strategy="afterInteractive">{`
        var ro = new IntersectionObserver(function(entries) {
          entries.forEach(function(e) { if (e.isIntersecting) { e.target.classList.add('visible'); ro.unobserve(e.target); } });
        }, { threshold: 0.12 });
        document.querySelectorAll('.reveal, .reveal-stagger').forEach(function(el) { ro.observe(el); });
      `}</Script>
    </>
  );
}

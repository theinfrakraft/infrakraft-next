import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SERVICE_PILLARS, getPillarBySlug } from '@/lib/services-data';

export async function generateStaticParams() {
  return SERVICE_PILLARS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const pillar = getPillarBySlug(slug);
  if (!pillar) return {};
  return {
    title: `${pillar.name} | InfraKraft AI Services`,
    description: pillar.description,
    openGraph: { url: `https://infrakraft-next.vercel.app/services/${slug}` },
  };
}

export default async function ServicePillarPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pillar = getPillarBySlug(slug);
  if (!pillar) notFound();

  const currentIndex = SERVICE_PILLARS.findIndex((p) => p.slug === slug);
  const prev = currentIndex > 0 ? SERVICE_PILLARS[currentIndex - 1] : null;
  const next = currentIndex < SERVICE_PILLARS.length - 1 ? SERVICE_PILLARS[currentIndex + 1] : null;

  return (
    <>
      {/* HEADER */}
      <div className="page-header">
        <div className="container">
          <div style={{ marginBottom: '12px' }}>
            <Link href="/services" style={{ fontSize: '0.8rem', color: 'var(--accent-bright)', textDecoration: 'none' }}>
              ← All services
            </Link>
          </div>
          <div className="section-label">AI Services</div>
          <h1 className="section-title" style={{ marginBottom: '10px' }}>
            <span style={{ marginRight: '12px' }}>{pillar.icon}</span>{pillar.name}
          </h1>
          <p className="section-sub" style={{ marginBottom: '24px', maxWidth: '640px' }}>{pillar.tagline}</p>

          {/* Tools bar */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {pillar.tools.map((tool) => (
              <span key={tool} style={{
                fontSize: '0.75rem',
                padding: '4px 10px',
                borderRadius: '20px',
                background: 'var(--surface-2)',
                border: '1px solid var(--border)',
                color: 'var(--text-muted)',
              }}>
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* OVERVIEW */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '48px', alignItems: 'start' }}>
            <div>
              <div className="section-label">What this is</div>
              <p style={{ lineHeight: '1.7', color: 'var(--text)', marginTop: '8px' }}>{pillar.description}</p>
              <div style={{ marginTop: '28px' }}>
                <div className="section-label" style={{ marginBottom: '12px' }}>What we deliver</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {pillar.whatWeDo.map((item, i) => (
                    <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.9rem', color: 'var(--text)' }}>
                      <span style={{ color: 'var(--accent-bright)', marginTop: '2px', flexShrink: 0 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div style={{
              background: 'var(--bg-hero)',
              borderRadius: '16px',
              padding: '28px',
              border: '1px solid var(--border-hero)',
            }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--accent-bright)', fontWeight: 700, letterSpacing: '0.08em', marginBottom: '12px' }}>
                OUTCOME
              </div>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: 'var(--text-hero)', margin: '0 0 28px' }}>
                &ldquo;{pillar.outcome}&rdquo;
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a
                  href="https://cal.com/infrakraft/30min"
                  className="btn btn-accent"
                  target="_blank"
                  rel="noopener"
                  style={{ textAlign: 'center' }}
                >
                  Book a free scoping call
                </a>
                <a
                  href={`https://wa.me/918148656971?text=Hi%2C%20I%27m%20interested%20in%20your%20${encodeURIComponent(pillar.name)}%20service`}
                  className="btn btn-whatsapp"
                  target="_blank"
                  rel="noopener"
                  style={{ textAlign: 'center' }}
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="section" style={{ background: 'var(--surface-2)' }}>
        <div className="container">
          <div className="section-label">Use cases</div>
          <h2 className="section-title">What clients use this for</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginTop: '32px' }}>
            {pillar.useCases.map((uc, i) => (
              <div key={i} style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '24px',
              }}>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '8px', color: 'var(--text)' }}>
                  {uc.title}
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  {uc.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--bg-hero)', textAlign: 'center' }}>
        <div className="container">
          <div className="section-label" style={{ color: 'var(--accent-bright)' }}>Ready to start?</div>
          <h2 className="section-title" style={{ color: 'var(--text-hero)', margin: '0 auto 14px' }}>
            Let&apos;s scope your {pillar.name} project
          </h2>
          <p className="section-sub" style={{ color: 'var(--text-hero-muted)', margin: '0 auto 36px' }}>
            30 minutes is enough to understand your use case and give you a straight answer on what&apos;s possible, how long it takes, and what it costs.
          </p>
          <a href="https://cal.com/infrakraft/30min" className="btn btn-accent" target="_blank" rel="noopener">
            Book a free 30-min call
          </a>
        </div>
      </section>

      {/* PREV / NEXT NAV */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
            {prev ? (
              <Link href={`/services/${prev.slug}`} style={{
                display: 'flex', flexDirection: 'column', gap: '4px',
                padding: '16px 20px', border: '1px solid var(--border)',
                borderRadius: '10px', textDecoration: 'none', flex: '1', minWidth: '200px',
              }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>← Previous</span>
                <span style={{ fontWeight: 600, color: 'var(--text)' }}>{prev.icon} {prev.name}</span>
              </Link>
            ) : <div style={{ flex: 1 }} />}
            {next ? (
              <Link href={`/services/${next.slug}`} style={{
                display: 'flex', flexDirection: 'column', gap: '4px', textAlign: 'right',
                padding: '16px 20px', border: '1px solid var(--border)',
                borderRadius: '10px', textDecoration: 'none', flex: '1', minWidth: '200px',
              }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Next →</span>
                <span style={{ fontWeight: 600, color: 'var(--text)' }}>{next.icon} {next.name}</span>
              </Link>
            ) : <div style={{ flex: 1 }} />}
          </div>
        </div>
      </section>
    </>
  );
}

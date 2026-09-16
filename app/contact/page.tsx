'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus('ok');
        form.reset();
        const text = encodeURIComponent(
          `Hi, I'm ${data.name}. Interested in: ${data.service || 'your services'}.\n\n${data.message}`
        );
        window.open(`https://wa.me/918148656971?text=${text}`, '_blank');
      } else {
        setStatus('err');
      }
    } catch {
      setStatus('err');
    }
  }

  return (
    <section className="contact-section" id="contact" style={{ minHeight: 'calc(100vh - 62px)' }}>
      <div className="contact-inner">
        <div>
          <div className="section-label" style={{ color: 'var(--accent-bright)' }}>Get in touch</div>
          <h1 className="contact-heading">Let&apos;s talk about what you need</h1>
          <p className="contact-sub">WhatsApp is the fastest way to reach me. For a proper scoping call, book a free 30 minutes — no sales pitch, just a straight conversation about your project.</p>
          <div className="contact-channels">
            <a href="https://wa.me/918148656971" className="contact-channel" target="_blank" rel="noopener">
              <div className="contact-channel-icon wa">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              </div>
              <div>
                <div>+91 81486 56971</div>
                <div className="contact-channel-label">WhatsApp — fastest response</div>
              </div>
            </a>
            <a href="mailto:contact.theinfrakraft@gmail.com" className="contact-channel">
              <div className="contact-channel-icon mail">✉</div>
              <div>
                <div>contact.theinfrakraft@gmail.com</div>
                <div className="contact-channel-label">Email — reply within 24 hours</div>
              </div>
            </a>
            <a href="https://cal.com/infrakraft/30min" className="contact-channel" target="_blank" rel="noopener">
              <div className="contact-channel-icon cal">📅</div>
              <div>
                <div>Book a free 30-min call</div>
                <div className="contact-channel-label">cal.com/infrakraft/30min</div>
              </div>
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="cf-name">Your name</label>
              <input type="text" id="cf-name" name="name" placeholder="Priya / Arjun / Ravi" required />
            </div>
            <div className="form-field">
              <label htmlFor="cf-email">Email address</label>
              <input type="email" id="cf-email" name="email" placeholder="you@example.com" required />
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="cf-service">What are you looking for?</label>
            <select id="cf-service" name="service" defaultValue="">
              <option value="" disabled>Choose a service</option>
              <option>Business Website</option>
              <option>E-Commerce Store</option>
              <option>AWS Cloud Setup</option>
              <option>CI/CD Pipeline</option>
              <option>WhatsApp / AI Bot</option>
              <option>Business Automation</option>
              <option>Tutoring / Mentorship</option>
              <option>Something else</option>
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="cf-msg">Brief description</label>
            <textarea id="cf-msg" name="message" placeholder="Tell me about your business and what you're trying to build or fix." />
          </div>
          <button
            type="submit"
            className="btn btn-accent form-submit"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>
          {status === 'ok' && (
            <div style={{ textAlign: 'center', color: 'var(--green)', fontFamily: 'var(--font-head)', fontSize: '0.9rem', fontWeight: 600 }}>
              Message sent — I&apos;ll reply within 24 hours.
            </div>
          )}
          {status === 'err' && (
            <div style={{ textAlign: 'center', color: '#f87171', fontFamily: 'var(--font-head)', fontSize: '0.85rem', fontWeight: 600 }}>
              Something went wrong. Please try WhatsApp or email directly.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { SERVICE_PILLARS } from '@/lib/services-data';

export const metadata: Metadata = {
  title: 'AI Tools Demo | InfraKraft',
  description: 'Live demonstrations of the AI tools InfraKraft uses — from workflow automation to AI video production. See each pillar in action.',
  openGraph: { url: 'https://infrakraft-next.vercel.app/tools' },
};

const TOOL_DEMOS: Record<string, {
  demo: string;
  inputs: { label: string; placeholder: string; key: string }[];
  cta: string;
  apiPath: string;
}> = {
  'workflow-automation': {
    demo: 'Describe a manual business task and get an n8n workflow JSON you can import directly.',
    inputs: [{ label: 'What manual task do you want to automate?', placeholder: 'e.g. When a lead fills my form, add to CRM, send WhatsApp message, and create ClickUp task', key: 'task' }],
    cta: 'Generate Workflow',
    apiPath: '/api/tools/workflow-automation',
  },
  'ai-agents': {
    demo: 'Describe a research task and watch a 3-agent crew (Researcher → Analyst → Strategist) work through it.',
    inputs: [{ label: 'What should the agents research?', placeholder: 'e.g. Best AI tools for a small e-commerce business in India in 2025', key: 'task' }],
    cta: 'Run Agent Crew',
    apiPath: '/api/tools/ai-agents',
  },
  'multimodal-ai': {
    demo: 'Paste a YouTube video title or Instagram post description and get a GPT-4o analysis of its content strategy.',
    inputs: [{ label: 'YouTube title or content description', placeholder: 'e.g. 5 AI Tools That Will Replace Your Marketing Team in 2025', key: 'content' }],
    cta: 'Analyse Content',
    apiPath: '/api/tools/multimodal-ai',
  },
  'rag': {
    demo: 'Ask any question about AI tools and digital marketing — answered using InfraKraft\'s knowledge base.',
    inputs: [{ label: 'Ask a question', placeholder: 'e.g. What\'s the difference between LlamaIndex and LangChain for building a chatbot?', key: 'query' }],
    cta: 'Search Knowledge Base',
    apiPath: '/api/tools/rag',
  },
  'ai-product-development': {
    demo: 'Describe your product idea and get a tech stack recommendation + build time estimate.',
    inputs: [
      { label: 'Product idea', placeholder: 'e.g. Appointment booking app for a hair salon with UPI payments', key: 'description' },
      { label: 'Budget (bootstrap / seed / series-a)', placeholder: 'bootstrap', key: 'budget' },
    ],
    cta: 'Get Stack Recommendation',
    apiPath: '/api/tools/ai-product-development',
  },
  'ai-video-production': {
    demo: 'Enter a topic and get a complete YouTube video script + Short script, ready to paste into HeyGen or record yourself.',
    inputs: [{ label: 'Video topic', placeholder: 'e.g. How to automate your Instagram posting with n8n', key: 'topic' }],
    cta: 'Generate Script',
    apiPath: '/api/tools/ai-video-production',
  },
  'ai-voice-avatars': {
    demo: 'Paste a script and hear a sample of what it sounds like as an AI voiceover (ElevenLabs preview).',
    inputs: [{ label: 'Script (first 300 characters)', placeholder: 'e.g. In the next 60 seconds, I\'m going to show you how to save 10 hours a week using one simple automation tool...', key: 'script' }],
    cta: 'Preview Voiceover',
    apiPath: '/api/tools/ai-voice-avatars',
  },
  'connected-workspace': {
    demo: 'Describe your team\'s workflow and get a Notion database schema you can import directly.',
    inputs: [{ label: 'How does your team work today?', placeholder: 'e.g. We\'re a 5-person marketing agency. We track client projects in WhatsApp groups and a shared Google Sheet.', key: 'workflow' }],
    cta: 'Generate Workspace',
    apiPath: '/api/tools/connected-workspace',
  },
  'ai-quality-cost-monitoring': {
    demo: 'Paste an AI-generated response and get a quality score with specific improvement suggestions.',
    inputs: [{ label: 'AI-generated text to evaluate', placeholder: 'Paste any AI response here...', key: 'text' }],
    cta: 'Score Quality',
    apiPath: '/api/tools/ai-quality-cost-monitoring',
  },
};

export default function ToolsPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="section-label">Live Demos</div>
          <h1 className="section-title" style={{ marginBottom: '10px' }}>See it working — right now</h1>
          <p className="section-sub" style={{ marginBottom: 0 }}>
            Every tool InfraKraft deploys for clients, available to try for free. No signup. No credit card.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {SERVICE_PILLARS.map((pillar) => {
              const demo = TOOL_DEMOS[pillar.slug];
              if (!demo) return null;
              return (
                <div
                  key={pillar.slug}
                  id={pillar.slug}
                  style={{
                    border: '1px solid var(--border)',
                    borderRadius: '16px',
                    overflow: 'hidden',
                  }}
                  className="reveal"
                >
                  {/* Pillar header */}
                  <div style={{
                    background: 'var(--surface-2)',
                    padding: '20px 28px',
                    borderBottom: '1px solid var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    flexWrap: 'wrap',
                  }}>
                    <span style={{ fontSize: '1.6rem' }}>{pillar.icon}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text)' }}>{pillar.name}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '2px' }}>{demo.demo}</div>
                    </div>
                    <Link
                      href={`/services/${pillar.slug}`}
                      style={{ fontSize: '0.75rem', color: 'var(--accent-bright)', textDecoration: 'none', whiteSpace: 'nowrap' }}
                    >
                      See full service →
                    </Link>
                  </div>

                  {/* Demo area */}
                  <div style={{ padding: '24px 28px' }}>
                    <div
                      data-pillar={pillar.slug}
                      data-api={demo.apiPath}
                      className="tool-demo"
                      style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}
                    >
                      {demo.inputs.map((input) => (
                        <div key={input.key}>
                          <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>
                            {input.label}
                          </label>
                          <textarea
                            data-key={input.key}
                            placeholder={input.placeholder}
                            rows={3}
                            style={{
                              width: '100%',
                              padding: '10px 14px',
                              border: '1px solid var(--border)',
                              borderRadius: '8px',
                              background: 'var(--surface)',
                              color: 'var(--text)',
                              fontSize: '0.875rem',
                              fontFamily: 'var(--font-body)',
                              resize: 'vertical',
                              boxSizing: 'border-box',
                            }}
                          />
                        </div>
                      ))}

                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                        <button
                          className="btn btn-accent demo-submit"
                          style={{ minWidth: '160px' }}
                        >
                          {demo.cta}
                        </button>
                        <span className="demo-status" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }} />
                      </div>

                      <div
                        className="demo-output"
                        style={{
                          display: 'none',
                          background: 'var(--surface-2)',
                          border: '1px solid var(--border)',
                          borderRadius: '8px',
                          padding: '16px',
                          fontSize: '0.875rem',
                          color: 'var(--text)',
                          lineHeight: '1.6',
                          whiteSpace: 'pre-wrap',
                          maxHeight: '400px',
                          overflowY: 'auto',
                        }}
                      />

                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        {pillar.tools.slice(0, 4).map((tool) => (
                          <span key={tool} style={{
                            fontSize: '0.68rem',
                            padding: '2px 8px',
                            borderRadius: '20px',
                            background: 'var(--accent-bg)',
                            color: 'var(--accent)',
                            border: '1px solid var(--border)',
                          }}>
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div style={{ marginTop: '64px', textAlign: 'center', padding: '48px', background: 'var(--bg-hero)', borderRadius: '20px' }}>
            <div className="section-label" style={{ color: 'var(--accent-bright)' }}>Like what you see?</div>
            <h2 className="section-title" style={{ color: 'var(--text-hero)', margin: '0 auto 14px' }}>
              Get these tools working in your business
            </h2>
            <p className="section-sub" style={{ color: 'var(--text-hero-muted)', margin: '0 auto 32px' }}>
              Everything on this page is deployable, connected to your data, and live in 2–4 weeks.
            </p>
            <a href="https://cal.com/infrakraft/30min" className="btn btn-accent" target="_blank" rel="noopener">
              Book a free 30-min call
            </a>
          </div>
        </div>
      </section>

      <Script id="scroll-reveal" strategy="afterInteractive">{`
        var ro = new IntersectionObserver(function(entries) {
          entries.forEach(function(e) { if (e.isIntersecting) { e.target.classList.add('visible'); ro.unobserve(e.target); } });
        }, { threshold: 0.08 });
        document.querySelectorAll('.reveal').forEach(function(el) { ro.observe(el); });
      `}</Script>

      <Script id="tool-demos" strategy="afterInteractive">{`
        document.querySelectorAll('.tool-demo').forEach(function(demo) {
          var apiPath = demo.dataset.api;
          var btn = demo.querySelector('.demo-submit');
          var status = demo.querySelector('.demo-status');
          var output = demo.querySelector('.demo-output');

          btn.addEventListener('click', async function() {
            var payload = {};
            demo.querySelectorAll('textarea[data-key]').forEach(function(t) {
              payload[t.dataset.key] = t.value.trim();
            });

            var missing = Object.values(payload).some(function(v) { return !v; });
            if (missing) { status.textContent = 'Please fill in all fields.'; return; }

            btn.disabled = true;
            btn.textContent = 'Running...';
            status.textContent = '';
            output.style.display = 'none';

            try {
              var resp = await fetch(apiPath, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
              });
              var data = await resp.json();
              if (!resp.ok) throw new Error(data.error || resp.statusText);

              output.textContent = typeof data.result === 'string'
                ? data.result
                : JSON.stringify(data.result, null, 2);
              output.style.display = 'block';
              status.textContent = '';
            } catch (err) {
              status.textContent = 'Error: ' + err.message;
              status.style.color = '#f87171';
            } finally {
              btn.disabled = false;
              btn.textContent = btn.dataset.cta || 'Run';
            }
          });

          // Store original CTA text
          btn.dataset.cta = btn.textContent;
        });
      `}</Script>
    </>
  );
}

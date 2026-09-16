'use client';

import { useEffect, useState } from 'react';

interface ContentPost {
  id: string;
  created_at: string;
  topic_title: string;
  topic_source: string;
  content_angle: string;
  yt_title: string;
  yt_description: string;
  yt_script: string;
  yt_tags: string[];
  yt_thumbnail_idea: string;
  yt_video_id: string;
  short_title: string;
  short_script: string;
  short_hashtags: string[];
  ig_caption: string;
  ig_hashtags: string[];
  ig_image_prompt: string;
  ig_carousel_slides: string[];
  ig_image_urls: string[];
  ig_media_id: string;
  status: string;
}

type Tab = 'video' | 'short' | 'instagram';

const STATUS_STYLE: Record<string, { bg: string; color: string }> = {
  published: { bg: 'rgba(52,211,153,0.12)', color: '#34d399' },
  uploaded:  { bg: 'rgba(52,211,153,0.12)', color: '#34d399' },
  draft:     { bg: 'rgba(251,191,36,0.12)',  color: '#fbbf24' },
  pending:   { bg: 'rgba(251,191,36,0.12)',  color: '#fbbf24' },
  error:     { bg: 'rgba(248,113,113,0.12)', color: '#f87171' },
};

function StatusBadge({ status }: { status: string }) {
  const s = STATUS_STYLE[status] ?? { bg: 'rgba(156,163,175,0.12)', color: '#9ca3af' };
  return (
    <span style={{ fontSize: '0.72rem', fontWeight: 700, padding: '2px 8px', borderRadius: 4, background: s.bg, color: s.color, fontFamily: 'var(--font-head)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
      {status}
    </span>
  );
}

function Field({ label, value, mono = false }: { label: string; value?: string; mono?: boolean }) {
  if (!value) return null;
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6, fontFamily: 'var(--font-head)' }}>{label}</div>
      <div style={{ background: 'var(--bg-card, rgba(255,255,255,0.03))', border: '1px solid var(--border)', borderRadius: 8, padding: '12px 14px', fontSize: '0.85rem', lineHeight: 1.65, whiteSpace: mono ? 'pre-wrap' : 'normal', fontFamily: mono ? 'monospace' : 'inherit', color: 'var(--text)', maxHeight: mono ? 320 : 'none', overflowY: mono ? 'auto' : 'visible' }}>
        {value}
      </div>
    </div>
  );
}

export default function ContentDashboard() {
  const [posts, setPosts] = useState<ContentPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<ContentPost | null>(null);
  const [tab, setTab] = useState<Tab>('video');

  useEffect(() => {
    fetch('/api/content')
      .then((r) => r.json())
      .then((data) => { setPosts(data); if (data.length) setSelected(data[0]); })
      .finally(() => setLoading(false));
  }, []);

  const tabs: { key: Tab; label: string }[] = [
    { key: 'video', label: 'YouTube Video' },
    { key: 'short', label: 'YouTube Short' },
    { key: 'instagram', label: 'Instagram' },
  ];

  return (
    <div style={{ display: 'flex', gap: 0, height: 'calc(100vh - 0px)', overflow: 'hidden' }}>

      {/* Sidebar */}
      <div style={{ width: 300, minWidth: 300, borderRight: '1px solid var(--border)', overflowY: 'auto', padding: '0 0 24px' }}>
        <div style={{ padding: '20px 20px 12px', borderBottom: '1px solid var(--border)', marginBottom: 8 }}>
          <h1 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--text)', margin: 0 }}>Content Queue</h1>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: 4 }}>{posts.length} posts generated</p>
        </div>

        {loading && <p style={{ padding: '16px 20px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>Loading…</p>}

        {posts.map((p) => (
          <button
            key={p.id}
            onClick={() => { setSelected(p); setTab('video'); }}
            style={{
              width: '100%', textAlign: 'left', padding: '12px 20px', border: 'none', cursor: 'pointer',
              background: selected?.id === p.id ? 'rgba(var(--accent-rgb, 99,102,241),0.12)' : 'transparent',
              borderLeft: selected?.id === p.id ? '3px solid var(--accent, #6366f1)' : '3px solid transparent',
              transition: 'background 0.15s',
            }}
          >
            <div style={{ fontFamily: 'var(--font-head)', fontWeight: 600, fontSize: '0.85rem', color: 'var(--text)', marginBottom: 4, lineHeight: 1.4 }}>
              {p.topic_title}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                {new Date(p.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
              </span>
              <StatusBadge status={p.status} />
            </div>
          </button>
        ))}

        {!loading && !posts.length && (
          <div style={{ padding: '32px 20px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            No content yet.<br />Run the pipeline to generate posts.
          </div>
        )}
      </div>

      {/* Detail */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '24px 28px' }}>
        {!selected ? (
          <div style={{ color: 'var(--text-muted)', marginTop: 80, textAlign: 'center' }}>Select a topic to preview content</div>
        ) : (
          <>
            <div style={{ marginBottom: 20 }}>
              <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', margin: '0 0 6px' }}>{selected.topic_title}</h2>
              <p style={{ fontSize: '0.83rem', color: 'var(--text-muted)', margin: 0 }}>{selected.content_angle}</p>
            </div>

            {/* Tabs */}
            <div style={{ display: 'flex', gap: 8, marginBottom: 24, borderBottom: '1px solid var(--border)', paddingBottom: 0 }}>
              {tabs.map((t) => (
                <button
                  key={t.key}
                  onClick={() => setTab(t.key)}
                  style={{
                    padding: '8px 16px', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-head)', fontWeight: 600, fontSize: '0.82rem',
                    background: 'transparent', color: tab === t.key ? 'var(--accent, #6366f1)' : 'var(--text-muted)',
                    borderBottom: tab === t.key ? '2px solid var(--accent, #6366f1)' : '2px solid transparent',
                    marginBottom: -1,
                  }}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {tab === 'video' && (
              <div>
                <Field label="Title" value={selected.yt_title} />
                <Field label="Thumbnail idea" value={selected.yt_thumbnail_idea} />
                <Field label="Tags" value={selected.yt_tags?.join(', ')} />
                <Field label="Description" value={selected.yt_description} mono />
                <Field label="Script" value={selected.yt_script} mono />
                {selected.yt_video_id && (
                  <a href={`https://youtube.com/watch?v=${selected.yt_video_id}`} target="_blank" rel="noreferrer"
                    style={{ fontSize: '0.83rem', color: 'var(--accent)', textDecoration: 'underline' }}>
                    View on YouTube →
                  </a>
                )}
              </div>
            )}

            {tab === 'short' && (
              <div>
                <Field label="Title" value={selected.short_title} />
                <Field label="Hashtags" value={selected.short_hashtags?.join(' ')} />
                <Field label="Script" value={selected.short_script} mono />
              </div>
            )}

            {tab === 'instagram' && (
              <div>
                {selected.ig_image_urls?.[0] && (
                  <div style={{ marginBottom: 20, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                    {selected.ig_image_urls.map((url, i) => (
                      <img key={i} src={url} alt={`Slide ${i + 1}`}
                        style={{ width: 120, height: 120, objectFit: 'cover', borderRadius: 8, border: '1px solid var(--border)' }} />
                    ))}
                  </div>
                )}
                <Field label="Caption" value={selected.ig_caption} mono />
                <Field label="Hashtags" value={selected.ig_hashtags?.join(' ')} />
                <Field label="Image prompt" value={selected.ig_image_prompt} />
                {selected.ig_carousel_slides?.length > 0 && (
                  <div style={{ marginBottom: 16 }}>
                    <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8, fontFamily: 'var(--font-head)' }}>Carousel slides</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {selected.ig_carousel_slides.map((s, i) => (
                        <div key={i} style={{ background: 'var(--bg-card, rgba(255,255,255,0.03))', border: '1px solid var(--border)', borderRadius: 8, padding: '10px 14px', fontSize: '0.85rem', color: 'var(--text)' }}>
                          <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontFamily: 'var(--font-head)', fontWeight: 700 }}>SLIDE {i + 1} </span>{s}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {selected.ig_media_id && (
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Media ID: {selected.ig_media_id}</p>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

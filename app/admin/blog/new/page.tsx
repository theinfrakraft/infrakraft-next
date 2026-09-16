'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

function slugify(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export default function NewPostPage() {
  const router = useRouter();
  const [form, setForm] = useState({ title: '', slug: '', excerpt: '', content: '', published: false });
  const [slugTouched, setSlugTouched] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  function handleTitle(e: React.ChangeEvent<HTMLInputElement>) {
    const title = e.target.value;
    setForm((f) => ({ ...f, title, slug: slugTouched ? f.slug : slugify(title) }));
  }

  async function handleSubmit(published: boolean) {
    setSaving(true);
    setError('');
    const res = await fetch('/api/blog', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, published }),
    });
    if (!res.ok) {
      const d = await res.json().catch(() => ({}));
      setError(d.error || 'Something went wrong');
      setSaving(false);
      return;
    }
    router.push('/admin/blog');
    router.refresh();
  }

  const fieldStyle: React.CSSProperties = { width: '100%', padding: '10px 12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', background: 'var(--surface)', color: 'var(--text)', fontFamily: 'var(--font-body)', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' };
  const labelStyle: React.CSSProperties = { display: 'block', fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '6px', letterSpacing: '0.05em', textTransform: 'uppercase' };

  return (
    <div style={{ maxWidth: '720px' }}>
      <h1 style={{ fontFamily: 'var(--font-head)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)', marginBottom: '28px' }}>New post</h1>

      {error && <div style={{ padding: '12px 16px', background: 'rgba(248,113,113,0.1)', color: '#f87171', borderRadius: 'var(--radius-sm)', marginBottom: '20px', fontSize: '0.875rem' }}>{error}</div>}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div>
          <label style={labelStyle}>Title</label>
          <input style={fieldStyle} type="text" placeholder="Post title" value={form.title} onChange={handleTitle} />
        </div>

        <div>
          <label style={labelStyle}>Slug</label>
          <input style={fieldStyle} type="text" placeholder="post-url-slug" value={form.slug}
            onChange={(e) => { setSlugTouched(true); setForm((f) => ({ ...f, slug: e.target.value })); }} />
        </div>

        <div>
          <label style={labelStyle}>Excerpt</label>
          <input style={fieldStyle} type="text" placeholder="Short description shown in blog listing" value={form.excerpt}
            onChange={(e) => setForm((f) => ({ ...f, excerpt: e.target.value }))} />
        </div>

        <div>
          <label style={labelStyle}>Content (HTML)</label>
          <textarea
            style={{ ...fieldStyle, minHeight: '320px', resize: 'vertical', lineHeight: '1.6' }}
            placeholder="<p>Your post content here…</p>"
            value={form.content}
            onChange={(e) => setForm((f) => ({ ...f, content: e.target.value }))}
          />
        </div>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
          <button disabled={saving} onClick={() => handleSubmit(false)} className="btn btn-outline" style={{ padding: '10px 20px' }}>
            {saving ? 'Saving…' : 'Save as draft'}
          </button>
          <button disabled={saving} onClick={() => handleSubmit(true)} className="btn btn-accent" style={{ padding: '10px 20px' }}>
            {saving ? 'Publishing…' : 'Publish'}
          </button>
        </div>
      </div>
    </div>
  );
}

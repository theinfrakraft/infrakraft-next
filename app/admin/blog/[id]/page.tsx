'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  published: boolean;
}

export default function EditPostPage() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  const [form, setForm] = useState<Post | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/blog')
      .then((r) => r.json())
      .then((posts: Post[]) => {
        const post = posts.find((p) => p.id === id);
        if (post) setForm(post);
        else setError('Post not found');
      });
  }, [id]);

  async function handleSubmit(published: boolean) {
    if (!form) return;
    setSaving(true);
    setError('');
    const res = await fetch(`/api/blog/${id}`, {
      method: 'PUT',
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

  if (!form && !error) return <p style={{ color: 'var(--text-muted)' }}>Loading…</p>;

  if (error && !form) return (
    <div>
      <p style={{ color: '#f87171' }}>{error}</p>
      <button onClick={() => router.push('/admin/blog')} className="btn btn-outline" style={{ marginTop: '16px', padding: '8px 16px' }}>Back</button>
    </div>
  );

  return (
    <div style={{ maxWidth: '720px' }}>
      <h1 style={{ fontFamily: 'var(--font-head)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)', marginBottom: '28px' }}>Edit post</h1>

      {error && <div style={{ padding: '12px 16px', background: 'rgba(248,113,113,0.1)', color: '#f87171', borderRadius: 'var(--radius-sm)', marginBottom: '20px', fontSize: '0.875rem' }}>{error}</div>}

      {form && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={labelStyle}>Title</label>
            <input style={fieldStyle} type="text" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
          </div>

          <div>
            <label style={labelStyle}>Slug</label>
            <input style={fieldStyle} type="text" value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} />
          </div>

          <div>
            <label style={labelStyle}>Excerpt</label>
            <input style={fieldStyle} type="text" value={form.excerpt || ''} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} />
          </div>

          <div>
            <label style={labelStyle}>Content (HTML)</label>
            <textarea
              style={{ ...fieldStyle, minHeight: '320px', resize: 'vertical', lineHeight: '1.6' }}
              value={form.content || ''}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
            />
          </div>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
            <button disabled={saving} onClick={() => handleSubmit(false)} className="btn btn-outline" style={{ padding: '10px 20px' }}>
              {saving ? 'Saving…' : 'Save as draft'}
            </button>
            <button disabled={saving} onClick={() => handleSubmit(true)} className="btn btn-accent" style={{ padding: '10px 20px' }}>
              {saving ? 'Saving…' : 'Save & publish'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

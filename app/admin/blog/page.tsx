'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Post {
  id: string;
  title: string;
  slug: string;
  published: boolean;
  created_at: string;
}

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/blog').then((r) => r.json()).then(setPosts).finally(() => setLoading(false));
  }, []);

  async function togglePublish(post: Post) {
    await fetch(`/api/blog/${post.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ published: !post.published }),
    });
    setPosts((prev) => prev.map((p) => p.id === post.id ? { ...p, published: !p.published } : p));
  }

  async function deletePost(id: string) {
    if (!confirm('Delete this post? This cannot be undone.')) return;
    await fetch(`/api/blog/${id}`, { method: 'DELETE' });
    setPosts((prev) => prev.filter((p) => p.id !== id));
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
        <h1 style={{ fontFamily: 'var(--font-head)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)' }}>Blog posts</h1>
        <Link href="/admin/blog/new" className="btn btn-accent" style={{ padding: '9px 18px' }}>+ New post</Link>
      </div>

      {loading ? (
        <p style={{ color: 'var(--text-muted)' }}>Loading…</p>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Slug</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td style={{ fontWeight: 600 }}>{post.title}</td>
                <td style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>{post.slug}</td>
                <td>
                  <span className={`badge ${post.published ? 'badge-green' : 'badge-gray'}`}>
                    {post.published ? 'Published' : 'Draft'}
                  </span>
                </td>
                <td style={{ whiteSpace: 'nowrap', color: 'var(--text-muted)', fontSize: '0.82rem' }}>
                  {new Date(post.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                </td>
                <td>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <Link href={`/admin/blog/${post.id}`} className="btn btn-outline" style={{ padding: '5px 10px', fontSize: '0.78rem' }}>Edit</Link>
                    <button onClick={() => togglePublish(post)} className="btn btn-ghost" style={{ padding: '5px 10px', fontSize: '0.78rem', color: 'var(--text)', borderColor: 'var(--border)' }}>
                      {post.published ? 'Unpublish' : 'Publish'}
                    </button>
                    <button onClick={() => deletePost(post.id)} style={{ padding: '5px 10px', fontSize: '0.78rem', borderRadius: 'var(--radius-sm)', border: 'none', background: 'rgba(248,113,113,0.1)', color: '#f87171', cursor: 'pointer', fontFamily: 'var(--font-head)', fontWeight: 600 }}>Delete</button>
                  </div>
                </td>
              </tr>
            ))}
            {!posts.length && (
              <tr><td colSpan={5} style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '24px' }}>No posts yet — <Link href="/admin/blog/new" style={{ color: 'var(--accent)' }}>create one</Link></td></tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      router.push('/admin');
    } else {
      setError('Incorrect password');
      setLoading(false);
    }
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-hero)' }}>
      <div style={{ background: 'var(--surface-hero)', border: '1px solid var(--border-hero)', borderRadius: 'var(--radius-lg)', padding: '40px', width: '100%', maxWidth: '380px' }}>
        <div style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-hero)', marginBottom: '8px' }}>
          Infra<span style={{ color: 'var(--accent-bright)' }}>Kraft</span> Admin
        </div>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-hero-muted)', marginBottom: '28px' }}>Enter your admin password to continue.</p>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div className="form-field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Admin password"
              required
              autoFocus
            />
          </div>
          {error && <div style={{ color: '#f87171', fontSize: '0.85rem', fontFamily: 'var(--font-head)' }}>{error}</div>}
          <button type="submit" className="btn btn-accent" style={{ justifyContent: 'center' }} disabled={loading}>
            {loading ? 'Signing in…' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  );
}

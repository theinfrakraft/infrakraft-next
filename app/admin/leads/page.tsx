'use client';

import { useEffect, useState } from 'react';

interface Lead {
  id: string;
  name: string;
  email: string;
  service: string | null;
  message: string | null;
  created_at: string;
}

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetch('/api/leads').then((r) => r.json()).then(setLeads).finally(() => setLoading(false));
  }, []);

  function exportCsv() {
    const header = 'Name,Email,Service,Message,Date';
    const rows = leads.map((l) =>
      [l.name, l.email, l.service || '', (l.message || '').replace(/\n/g, ' '), l.created_at].map((v) => `"${v}"`).join(',')
    );
    const csv = [header, ...rows].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `leads-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  const filtered = leads.filter(
    (l) =>
      !filter ||
      l.name.toLowerCase().includes(filter.toLowerCase()) ||
      l.email.toLowerCase().includes(filter.toLowerCase()) ||
      (l.service || '').toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
        <h1 style={{ fontFamily: 'var(--font-head)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)' }}>Leads ({leads.length})</h1>
        <div style={{ display: 'flex', gap: '10px' }}>
          <input
            type="text"
            placeholder="Search name, email, service…"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            style={{ padding: '8px 12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', background: 'var(--surface)', color: 'var(--text)', fontFamily: 'var(--font-body)', fontSize: '0.875rem', outline: 'none', width: '220px' }}
          />
          <button onClick={exportCsv} className="btn btn-outline" style={{ padding: '8px 16px' }}>Export CSV</button>
        </div>
      </div>

      {loading ? (
        <p style={{ color: 'var(--text-muted)' }}>Loading…</p>
      ) : (
        <div style={{ overflowX: 'auto' }}>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Service</th>
                <th>Message</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((lead) => (
                <tr key={lead.id}>
                  <td style={{ fontWeight: 600 }}>{lead.name}</td>
                  <td><a href={`mailto:${lead.email}`} style={{ color: 'var(--accent)' }}>{lead.email}</a></td>
                  <td>{lead.service ? <span className="badge badge-amber">{lead.service}</span> : '—'}</td>
                  <td style={{ maxWidth: '260px', color: 'var(--text-muted)', fontSize: '0.82rem' }}>{lead.message || '—'}</td>
                  <td style={{ whiteSpace: 'nowrap', color: 'var(--text-muted)', fontSize: '0.82rem' }}>
                    {new Date(lead.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </td>
                </tr>
              ))}
              {!filtered.length && (
                <tr><td colSpan={5} style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '24px' }}>No leads found</td></tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

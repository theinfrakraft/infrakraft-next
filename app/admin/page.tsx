import { supabaseAdmin } from '@/lib/supabase';

export default async function AdminDashboard() {
  const [{ count: leadCount }, { count: postCount }, { data: recentLeads }] = await Promise.all([
    supabaseAdmin.from('leads').select('*', { count: 'exact', head: true }),
    supabaseAdmin.from('blog_posts').select('*', { count: 'exact', head: true }),
    supabaseAdmin.from('leads').select('name, email, service, created_at').order('created_at', { ascending: false }).limit(5),
  ]);

  return (
    <div>
      <h1 style={{ fontFamily: 'var(--font-head)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)', marginBottom: '24px' }}>Dashboard</h1>

      <div className="admin-stat-grid">
        <div className="admin-stat-card">
          <div className="admin-stat-val">{leadCount ?? 0}</div>
          <div className="admin-stat-lbl">Total leads</div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-val">{postCount ?? 0}</div>
          <div className="admin-stat-lbl">Blog posts</div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-val">{recentLeads?.length ?? 0}</div>
          <div className="admin-stat-lbl">New this week</div>
        </div>
      </div>

      <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '1rem', fontWeight: 700, color: 'var(--text)', marginBottom: '16px' }}>Recent leads</h2>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Service</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {recentLeads?.map((lead) => (
            <tr key={lead.email + lead.created_at}>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.service || '—'}</td>
              <td style={{ whiteSpace: 'nowrap', color: 'var(--text-muted)', fontSize: '0.82rem' }}>
                {new Date(lead.created_at).toLocaleDateString('en-IN')}
              </td>
            </tr>
          ))}
          {!recentLeads?.length && (
            <tr><td colSpan={4} style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '24px' }}>No leads yet</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

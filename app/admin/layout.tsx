import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token')?.value;

  if (token !== process.env.ADMIN_SECRET) {
    redirect('/admin/login');
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <aside className="admin-sidebar">
        <div style={{ padding: '0 20px 20px', borderBottom: '1px solid var(--border-hero)', marginBottom: '8px' }}>
          <Link href="/" style={{ fontFamily: 'var(--font-head)', fontSize: '1rem', fontWeight: 800, color: 'var(--text-hero)' }}>
            Infra<span style={{ color: 'var(--accent-bright)' }}>Kraft</span>
          </Link>
          <div style={{ fontSize: '0.72rem', color: 'var(--text-hero-muted)', marginTop: '2px', fontFamily: 'var(--font-head)' }}>ADMIN</div>
        </div>
        <nav style={{ flex: 1 }}>
          <Link href="/admin" className="admin-nav-link">📊 Dashboard</Link>
          <Link href="/admin/leads" className="admin-nav-link">📬 Leads</Link>
          <Link href="/admin/blog" className="admin-nav-link">✏️ Blog</Link>
        </nav>
        <div style={{ padding: '0 20px' }}>
          <form action="/api/admin/login" method="POST">
            <button
              type="button"
              className="admin-nav-link"
              style={{ width: '100%', textAlign: 'left', border: 'none', background: 'none', cursor: 'pointer', color: '#f87171' }}
              onClick={async () => {
                await fetch('/api/admin/login', { method: 'DELETE' });
                window.location.href = '/admin/login';
              }}
            >
              🚪 Sign out
            </button>
          </form>
        </div>
      </aside>
      <div className="admin-content">{children}</div>
    </div>
  );
}

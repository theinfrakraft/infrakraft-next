import type { Metadata } from 'next';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Blog | Practical Tech for Indian Businesses',
  description: 'Practical advice on business websites, AWS cloud, CI/CD, and AI automation for Indian small businesses and startups. No jargon.',
  openGraph: { url: 'https://theinfrakraft.vercel.app/blog' },
};

interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  created_at: string;
}

const STATIC_POSTS = [
  {
    id: 'static-1',
    slug: 'website-losing-customers',
    title: '5 Signs Your Small Business Website Is Losing You Customers',
    excerpt: 'You built a website. But customers aren\'t coming — or they\'re landing and leaving without doing anything. Here are five signs it might be working against you.',
    tag: 'Websites',
    created_at: '2026-09-01',
  },
  {
    id: 'static-2',
    slug: 'what-is-cicd',
    title: 'What Is CI/CD and Why Should Your Startup Care?',
    excerpt: 'If you\'ve heard "CI/CD" thrown around and nodded along, here\'s what it actually means — and why it directly affects how fast your team ships.',
    tag: 'Cloud & DevOps',
    created_at: '2026-09-05',
  },
  {
    id: 'static-3',
    slug: 'whatsapp-chatbot-bookings',
    title: 'How a WhatsApp Chatbot Turned Our Client\'s DMs Into Booked Appointments',
    excerpt: 'A home services business in Chennai had decent Instagram traction but chaotic DMs. Here\'s how an AI assistant changed that — and got them 20+ bookings in month one.',
    tag: 'AI & Automation',
    created_at: '2026-09-09',
  },
];

export const revalidate = 60;

export default async function BlogPage() {
  const { data: dbPosts } = await supabase
    .from('blog_posts')
    .select('id, slug, title, excerpt, created_at')
    .eq('published', true)
    .order('created_at', { ascending: false });

  const posts: (Post & { tag?: string })[] = dbPosts?.length
    ? dbPosts
    : STATIC_POSTS;

  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="section-label">From the blog</div>
          <h1 className="section-title" style={{ marginBottom: '10px' }}>Practical tech for real businesses</h1>
          <p className="section-sub" style={{ marginBottom: 0 }}>No jargon. Honest advice on websites, cloud, automation, and making tech work for you.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="blog-grid reveal-stagger">
            {posts.map((post) => (
              <article key={post.id} className="blog-card">
                {'tag' in post && post.tag && <span className="blog-tag">{post.tag}</span>}
                <h2 className="blog-title">{post.title}</h2>
                {post.excerpt && <p className="blog-excerpt">{post.excerpt}</p>}
                <Link href={`/blog/${post.slug}`} className="blog-read-btn">
                  Read more
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Script id="scroll-reveal" strategy="afterInteractive">{`
        var ro = new IntersectionObserver(function(entries) {
          entries.forEach(function(e) { if (e.isIntersecting) { e.target.classList.add('visible'); ro.unobserve(e.target); } });
        }, { threshold: 0.12 });
        document.querySelectorAll('.reveal, .reveal-stagger').forEach(function(el) { ro.observe(el); });
      `}</Script>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { supabase } from '@/lib/supabase';

interface Props {
  params: Promise<{ slug: string }>;
}

const STATIC_CONTENT: Record<string, { title: string; tag: string; content: string }> = {
  'website-losing-customers': {
    title: '5 Signs Your Small Business Website Is Losing You Customers',
    tag: 'Websites',
    content: `<p>You built a website. You paid for it, maybe even spent a weekend getting it just right. But customers aren't coming — or worse, they're landing on it and leaving without doing anything.</p>
<h3>1. It takes more than 3 seconds to load</h3>
<p>Most people on mobile won't wait. If your site is slow, they're already gone. A fast, lightweight site isn't a luxury anymore — it's the baseline. Tools like Google PageSpeed Insights will tell you exactly where you stand.</p>
<h3>2. Your phone number isn't clickable</h3>
<p>Sounds basic, but you'd be surprised how many business sites list a phone number as plain text. On mobile, that number should be a tap-to-call link. If it's not, you're adding friction between a potential customer and a booking.</p>
<h3>3. There's no clear "next step"</h3>
<p>Every page on your site should tell visitors what to do next. Book a call. Fill a form. WhatsApp us. If someone reads through your services and then... nothing, you've lost them.</p>
<h3>4. It doesn't show up on Google</h3>
<p>If your business doesn't appear when someone searches "[your service] in [your city]", your website exists only for people who already know you.</p>
<h3>5. It looks broken on mobile</h3>
<p>Over 70% of web traffic in India is on mobile. If your site doesn't resize properly, has buttons that are too small to tap, or text that runs off screen — people assume your business is the same: a bit unprofessional.</p>
<p>The good news? All of these are fixable. Most small business sites can be turned around in under two weeks. If any of this sounds familiar, <a href="https://cal.com/infrakraft/30min" target="_blank" rel="noopener">let's have a quick chat</a>.</p>`,
  },
  'what-is-cicd': {
    title: 'What Is CI/CD and Why Should Your Startup Care?',
    tag: 'Cloud & DevOps',
    content: `<p>If you've been in a few tech conversations lately, you've probably heard "CI/CD" thrown around. It sounds like jargon. It kind of is. But the thing it describes is genuinely important — and if your startup is shipping code, it directly affects how fast you move and how often things break.</p>
<h3>CI = Continuous Integration</h3>
<p>Every time a developer pushes code, automated tests run immediately. If something breaks, the team knows within minutes — not after it's already in front of users. No more "it worked on my machine."</p>
<h3>CD = Continuous Delivery</h3>
<p>Once the tests pass, the code can be automatically packaged and pushed to staging or production. No manual steps, no "deploy nights", no one nervously running scripts at midnight.</p>
<h3>Why does this matter for an early-stage startup?</h3>
<p>Because speed is your advantage. Big companies have processes and layers of approval. You can move faster — but only if your infrastructure supports it.</p>
<p>Without CI/CD, every release is a manual event. With CI/CD, you push code, tests run, and if everything's green, it ships. What used to take 45 minutes becomes 8.</p>
<p>You don't need a DevOps team. You need the right setup once — and then it runs on its own. If your team is still doing manual deploys, <a href="https://cal.com/infrakraft/30min" target="_blank" rel="noopener">that's worth a conversation</a>.</p>`,
  },
  'whatsapp-chatbot-bookings': {
    title: 'How a WhatsApp Chatbot Turned Our Client\'s DMs Into Booked Appointments',
    tag: 'AI & Automation',
    content: `<p>Here's a situation that plays out constantly for small service businesses: you post something on Instagram, people comment asking for prices or availability, you reply manually to each one, some of them ghost, and maybe one or two actually book. It works. But it's exhausting — and it doesn't scale.</p>
<p>A home services business in Chennai came to us with exactly this problem. They had decent traction on Instagram, but their DMs were a mess. Leads coming in at all hours, no consistent follow-up, and a lot of interested people falling through the cracks.</p>
<h3>What we set up</h3>
<p>We built them a WhatsApp AI assistant connected to their Instagram. When someone comments on a post or sends a DM asking about services or pricing, the bot responds instantly — politely, with the right information — and then guides them toward booking a slot.</p>
<h3>What happened</h3>
<p>Within the first month, they had 20+ confirmed bookings that came directly through the automated flow. The owner wasn't waking up to 40 unread DMs anymore.</p>
<h3>Is this only for big businesses?</h3>
<p>Not at all. This kind of setup is actually more impactful for solo operators and small teams, because you genuinely don't have the bandwidth to respond to every message manually.</p>
<p>If you're running a service business and your DMs are sitting unanswered for hours, <a href="https://wa.me/918148656971" target="_blank" rel="noopener">this is worth a conversation</a>.</p>`,
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const title = STATIC_CONTENT[slug]?.title || slug.replace(/-/g, ' ');
  return { title };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  const { data: post } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single();

  const staticPost = STATIC_CONTENT[slug];

  if (!post && !staticPost) notFound();

  const title = post?.title || staticPost?.title || '';
  const tag = staticPost?.tag;
  const content = post?.content || staticPost?.content || '';
  const date = post?.created_at ? new Date(post.created_at).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' }) : '';

  return (
    <article>
      <div className="page-header">
        <div className="container">
          {tag && <div className="section-label">{tag}</div>}
          <h1 className="section-title" style={{ marginBottom: '10px', maxWidth: '700px' }}>{title}</h1>
          {date && <p className="section-sub" style={{ marginBottom: 0, fontSize: '0.85rem' }}>{date}</p>}
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--border)', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a href="https://cal.com/infrakraft/30min" className="btn btn-accent" target="_blank" rel="noopener">Book a free 30-min call</a>
            <Link href="/blog" className="btn btn-outline">← Back to blog</Link>
          </div>
        </div>
      </section>
    </article>
  );
}

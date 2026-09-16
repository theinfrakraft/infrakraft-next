import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Services | Web, Cloud, DevOps & AI Automation',
  description: 'Business websites, AWS cloud setup, CI/CD pipelines, AI automation, WhatsApp bots, and DevOps tutoring. AWS-certified freelancer based in Bangalore & Chennai.',
  openGraph: { url: 'https://theinfrakraft.vercel.app/services' },
};

export default function ServicesPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="section-label">What I build</div>
          <h1 className="section-title" style={{ marginBottom: '10px' }}>Services for every stage</h1>
          <p className="section-sub" style={{ marginBottom: 0 }}>Whether you&apos;re a shop owner, a startup founder, or a fresher preparing for interviews — there&apos;s a service for where you are right now.</p>
        </div>
      </div>

      {/* FOR BUSINESSES */}
      <section className="section" id="businesses">
        <div className="container">
          <div className="section-label">For Businesses</div>
          <h2 className="section-title">Get online and get found</h2>
          <p className="section-sub">Professional, mobile-first websites and web apps that convert visitors into enquiries. No templates — every project is built for your specific business.</p>
          <div className="services-grid reveal-stagger" style={{ display: 'grid' }}>
            <div className="service-card"><div className="service-icon">🌐</div><div className="service-name">Business Website</div><div className="service-desc">Professional, mobile-friendly site for your shop, salon, restaurant, or service business. Contact form, Google Maps, WhatsApp button, Google Analytics, and SSL included. Delivered in 5–14 days.</div></div>
            <div className="service-card"><div className="service-icon">🛒</div><div className="service-name">E-Commerce Store</div><div className="service-desc">Online store with Razorpay / UPI / GPay payments, product listings, order management, and mobile-first design. Ideal for retail, fashion, food, and D2C brands.</div></div>
            <div className="service-card"><div className="service-icon">📱</div><div className="service-name">Mobile-First Web App</div><div className="service-desc">Booking systems, service portals, and customer dashboards built as progressive web apps — fast, installable, and works seamlessly on any phone without an app store.</div></div>
            <div className="service-card"><div className="service-icon">🔧</div><div className="service-name">Website Maintenance</div><div className="service-desc">Monthly retainer — content updates, uptime monitoring, security patches, daily backups, and performance checks. So you can focus on running the business.</div></div>
          </div>
          <div style={{ marginTop: '28px' }}><Link href="/pricing" className="btn btn-outline">See website pricing →</Link></div>
        </div>
      </section>

      {/* FOR STARTUPS */}
      <section className="section" id="startups" style={{ background: 'var(--surface-2)' }}>
        <div className="container">
          <div className="section-label">For Startups & Tech Teams</div>
          <h2 className="section-title">Ship faster. Break less.</h2>
          <p className="section-sub">Cloud infrastructure and DevOps that works — set up once, runs reliably, documented on handover. No DevOps hire needed.</p>
          <div className="services-grid reveal-stagger" style={{ display: 'grid' }}>
            <div className="service-card"><div className="service-icon">⚙️</div><div className="service-name">AWS Cloud Setup</div><div className="service-desc">AWS from scratch — EC2, S3, ECS/Fargate, RDS, IAM, VPC, CloudWatch. Terraform IaC throughout. Runbook and architecture diagram on handover.</div></div>
            <div className="service-card"><div className="service-icon">🚀</div><div className="service-name">CI/CD Pipeline</div><div className="service-desc">Automated build, test, and deploy pipeline using GitHub Actions or AWS CodePipeline. Docker containers, security scans, Slack/email notifications. Most pipelines cut deploy time by 70–80%.</div></div>
            <div className="service-card"><div className="service-icon">🧩</div><div className="service-name">Custom Web App</div><div className="service-desc">Internal dashboards, admin portals, booking systems, and APIs. Python / Flask / FastAPI backends on AWS, with full documentation and CI/CD baked in from day one.</div></div>
            <div className="service-card"><div className="service-icon">🔒</div><div className="service-name">Cloud Security Audit</div><div className="service-desc">One-time audit of your AWS setup — IAM policies, S3 bucket exposure, security groups, CloudTrail logging, and exposed credentials. Written report with prioritised fixes.</div></div>
          </div>
          <div style={{ marginTop: '28px' }}><Link href="/pricing#cloud" className="btn btn-outline">See cloud pricing →</Link></div>
        </div>
      </section>

      {/* AI SERVICES */}
      <section className="section" id="ai" style={{ background: 'var(--bg-hero)' }}>
        <div className="container">
          <div className="section-label" style={{ color: 'var(--accent-bright)' }}>AI & Automation</div>
          <h2 className="section-title" style={{ color: 'var(--text-hero)' }}>Make your business work while you sleep</h2>
          <p className="section-sub" style={{ color: 'var(--text-hero-muted)' }}>AI tools built for Indian businesses — connected to WhatsApp, your website, and your workflow. No ML team needed.</p>
          <div className="ai-grid reveal-stagger">
            <div className="ai-card"><span className="ai-icon">💬</span><div className="ai-card-name">Website Chatbot</div><div className="ai-card-desc">Chat widget trained on your business — answers customer questions 24/7 in your brand voice. Handles FAQs, pricing queries, and lead capture automatically.</div></div>
            <div className="ai-card"><span className="ai-icon">📲</span><div className="ai-card-name">WhatsApp AI Assistant</div><div className="ai-card-desc">AI replies automatically to order queries, appointment confirmations, and service questions on WhatsApp. Connects to your Instagram DMs too. Escalates to you for anything complex.</div></div>
            <div className="ai-card"><span className="ai-icon">⚡</span><div className="ai-card-name">Business Automation</div><div className="ai-card-desc">Automate follow-ups, invoice reminders, lead scoring, and status updates. Connects with Google Sheets, your CRM, email, and WhatsApp — no manual chasing.</div></div>
            <div className="ai-card"><span className="ai-icon">🔍</span><div className="ai-card-name">AI-Powered Product Search</div><div className="ai-card-desc">Intelligent search and filtering for your product catalogue — understands natural language queries and returns the right results.</div></div>
            <div className="ai-card"><span className="ai-icon">🛠️</span><div className="ai-card-name">Custom AI Integration</div><div className="ai-card-desc">Internal knowledge base, document Q&A, AI-powered search, or a bespoke use case for your business. Scoped and quoted after a free discovery call.</div></div>
          </div>
          <div style={{ marginTop: '36px', textAlign: 'center' }}><Link href="/pricing#ai" className="btn btn-accent">See AI pricing</Link></div>
        </div>
      </section>

      {/* TUTORING */}
      <section className="section" id="tutoring">
        <div className="container">
          <div className="section-label">Tutoring & Mentorship</div>
          <h2 className="section-title">Land your first DevOps role</h2>
          <p className="section-sub">Live 1-on-1 sessions via Google Meet. Real labs, real AWS environments, resume review, and mock interviews included. Start with a free 30-min intro call.</p>
          <div className="tutoring-layout reveal">
            <div>
              <table className="course-table">
                <thead><tr><th>Course</th><th>Level</th><th>Price</th></tr></thead>
                <tbody>
                  <tr><td>Linux & Shell Scripting</td><td><span className="course-level">Beginner → Intermediate</span></td><td className="course-price">₹500</td></tr>
                  <tr><td>AWS Cloud Fundamentals</td><td><span className="course-level">Beginner → Intermediate</span></td><td className="course-price">₹600</td></tr>
                  <tr><td>DevOps & CI/CD</td><td><span className="course-level">Intermediate</span></td><td className="course-price">₹700</td></tr>
                  <tr><td>Terraform & IaC</td><td><span className="course-level">Intermediate → Advanced</span></td><td className="course-price">₹700</td></tr>
                  <tr><td>Docker & Kubernetes</td><td><span className="course-level">Intermediate → Advanced</span></td><td className="course-price">₹800</td></tr>
                  <tr><td>DevOps Interview Coaching</td><td><span className="course-level">Interview Prep</span></td><td className="course-price">₹600</td></tr>
                </tbody>
              </table>
            </div>
            <div className="mentorship-card">
              <h3>4–8 Week Mentorship Programme</h3>
              <p>Structured mentorship for students and recent grads who want a roadmap, not just a course.</p>
              <div className="mentorship-perks">
                <div className="mentorship-perk">Structured project work</div>
                <div className="mentorship-perk">Resume + LinkedIn review</div>
                <div className="mentorship-perk">Mock interviews</div>
                <div className="mentorship-perk">WhatsApp support between sessions</div>
                <div className="mentorship-perk">Completion letter for your resume</div>
              </div>
              <a href="https://wa.me/918148656971?text=Hi%2C%20I%27m%20interested%20in%20the%20mentorship%20programme" className="btn btn-whatsapp" target="_blank" rel="noopener" style={{ width: '100%', justifyContent: 'center' }}>Enquire on WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--surface-2)', textAlign: 'center' }}>
        <div className="container">
          <div className="section-label">Not sure where to start?</div>
          <h2 className="section-title" style={{ margin: '0 auto 12px' }}>Book a free 30-min scoping call</h2>
          <p className="section-sub" style={{ margin: '0 auto 32px' }}>Tell me what you&apos;re trying to build. I&apos;ll tell you what it&apos;ll take, how long, and what it&apos;ll cost — no obligation.</p>
          <a href="https://cal.com/infrakraft/30min" className="btn btn-accent" target="_blank" rel="noopener">Book a free call</a>
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

import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Pricing | Transparent Fixed-Price Freelance Services',
  description: 'Fixed prices for business websites, cloud & DevOps, AI automation, and tutoring. No hidden charges. Free 30-min scoping call before you commit.',
  openGraph: { url: 'https://theinfrakraft.vercel.app/pricing' },
};

export default function PricingPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="section-label">Transparent pricing</div>
          <h1 className="section-title" style={{ marginBottom: '10px' }}>Fixed prices. No surprises.</h1>
          <p className="section-sub" style={{ marginBottom: 0 }}>Most projects have a fixed price. Complex builds are quoted individually after a free 30-min scoping call. 50% advance to start, 50% on delivery.</p>
        </div>
      </div>

      {/* WEBSITES */}
      <section className="section" id="websites">
        <div className="container">
          <div className="section-label">Websites & Web Apps</div>
          <h2 className="section-title">Online presence</h2>
          <div className="pricing-grid reveal-stagger" style={{ marginBottom: 0 }}>
            <div className="price-card">
              <div className="price-tier">Starter</div>
              <div className="price-amount"><sup>₹</sup>5,000</div>
              <div className="price-timeline">Delivered in 5–7 days</div>
              <div className="price-features">
                <div className="price-feature">Up to 3 pages, mobile-friendly</div>
                <div className="price-feature">Contact form + WhatsApp button</div>
                <div className="price-feature">Google Maps integration</div>
                <div className="price-feature">SSL + hosting setup</div>
                <div className="price-feature">1 month free support</div>
              </div>
              <a href="https://wa.me/918148656971?text=Hi%2C%20I%27m%20interested%20in%20the%20Starter%20Website" className="btn btn-outline price-cta" target="_blank" rel="noopener">Get started</a>
            </div>
            <div className="price-card featured">
              <div className="price-badge">Most popular</div>
              <div className="price-tier">Business</div>
              <div className="price-amount"><sup>₹</sup>15,000</div>
              <div className="price-timeline">Delivered in 10–14 days</div>
              <div className="price-features">
                <div className="price-feature">Up to 8 pages, custom design</div>
                <div className="price-feature">Blog / portfolio section</div>
                <div className="price-feature">SEO + Google Analytics</div>
                <div className="price-feature">WhatsApp Business integration</div>
                <div className="price-feature">3 months free support</div>
              </div>
              <a href="https://wa.me/918148656971?text=Hi%2C%20I%27m%20interested%20in%20the%20Business%20Website" className="btn btn-accent price-cta" target="_blank" rel="noopener">Get started</a>
            </div>
            <div className="price-card">
              <div className="price-tier">Monthly Retainer</div>
              <div className="price-amount"><sup>₹</sup>8,000<span style={{ fontSize: '1rem', fontWeight: 500 }}>/mo</span></div>
              <div className="price-timeline">Ongoing · cancel anytime</div>
              <div className="price-features">
                <div className="price-feature">20 hrs/month development</div>
                <div className="price-feature">Priority 4h response time</div>
                <div className="price-feature">Content updates + bug fixes</div>
                <div className="price-feature">Uptime monitoring + backups</div>
                <div className="price-feature">Monthly performance report</div>
              </div>
              <a href="https://wa.me/918148656971?text=Hi%2C%20I%27m%20interested%20in%20the%20Monthly%20Retainer" className="btn btn-outline price-cta" target="_blank" rel="noopener">Get started</a>
            </div>
          </div>
        </div>
      </section>

      {/* CLOUD & AI */}
      <section className="section" id="cloud" style={{ background: 'var(--surface-2)' }}>
        <div className="container">
          <div className="section-label">Cloud, DevOps & AI</div>
          <h2 className="section-title">Infrastructure & automation</h2>
          <p className="section-sub">Projects are scoped on a free 30-min call. Ranges below cover typical engagements — final quote confirmed before you commit anything.</p>
          <div className="cloud-pricing reveal">
            <div className="cloud-item" id="ai">
              <div className="cloud-service">AWS Cloud Setup</div>
              <div className="cloud-from">Starting from</div>
              <div className="cloud-price">₹8,000</div>
              <div className="cloud-scope">EC2, S3, ECS/Fargate, RDS, VPC, IAM, Terraform. Typical project ₹8,000–₹20,000.</div>
            </div>
            <div className="cloud-item">
              <div className="cloud-service">CI/CD Pipeline</div>
              <div className="cloud-from">Starting from</div>
              <div className="cloud-price">₹6,000</div>
              <div className="cloud-scope">GitHub Actions or AWS CodePipeline, Docker, Slack alerts. Most pipelines ₹6,000–₹14,000.</div>
            </div>
            <div className="cloud-item">
              <div className="cloud-service">AI Solutions</div>
              <div className="cloud-from">Starting from</div>
              <div className="cloud-price">₹8,999</div>
              <div className="cloud-scope">Website chatbot or WhatsApp bot from ₹8,999. Business automation suite ₹15,000–₹35,000.</div>
            </div>
            <div className="cloud-item">
              <div className="cloud-service">Cloud Security Audit</div>
              <div className="cloud-from">Fixed price</div>
              <div className="cloud-price">₹5,000</div>
              <div className="cloud-scope">One-time IAM, S3, security group, and CloudTrail audit. Written report. Delivered in 3 business days.</div>
            </div>
          </div>
          <div style={{ marginTop: '28px' }}>
            <a href="https://cal.com/infrakraft/30min" className="btn btn-accent" target="_blank" rel="noopener">Book a free scoping call</a>
          </div>
        </div>
      </section>

      {/* TUTORING PRICING */}
      <section className="section" id="tutoring">
        <div className="container">
          <div className="section-label">Tutoring & Mentorship</div>
          <h2 className="section-title">Course pricing</h2>
          <p className="section-sub">All courses are 1-on-1, live via Google Meet, with real labs and a free 30-min intro session before you pay anything.</p>
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
              <p>Structured mentorship for students and recent grads who want a full roadmap — not just a course.</p>
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

      {/* FAQ */}
      <section className="section" id="faq" style={{ background: 'var(--surface-2)' }}>
        <div className="container">
          <div className="section-label">Common questions</div>
          <h2 className="section-title">FAQ</h2>
          <div className="faq-list reveal">
            <details className="faq-item"><summary>How does payment work?</summary><div className="faq-body">50% advance to start, 50% on delivery after you review the finished work. Payments via UPI, GPay, PhonePe, or bank transfer. Tutoring courses are paid upfront per course.</div></details>
            <details className="faq-item"><summary>How long does a project take?</summary><div className="faq-body">A simple website takes 5–7 days. A multi-page site is 10–14 days. Cloud setup or CI/CD pipelines are typically 1–2 weeks. Complex apps with custom backend are 3–4 weeks. Timeline is confirmed before you pay the advance.</div></details>
            <details className="faq-item"><summary>Do I own everything after delivery?</summary><div className="faq-body">100%. All logins, source code, hosting credentials, and domain access are handed over on final payment. Nothing is locked to me — you can manage it yourself or with any other developer.</div></details>
            <details className="faq-item"><summary>I&apos;m not technical at all — will this still work for me?</summary><div className="faq-body">Yes. Most clients are not technical. Just tell me what your business does and what you want — I&apos;ll handle everything else and explain things in plain language at every step.</div></details>
            <details className="faq-item"><summary>What if I need changes after delivery?</summary><div className="faq-body">Minor revisions are included in the project price. The Starter plan includes 1 month of free support; Business includes 3 months. After that, small fixes are billed at ₹500/hr or covered under the Monthly Retainer.</div></details>
            <details className="faq-item"><summary>How do the tutoring sessions work?</summary><div className="faq-body">Start with a free 30-min intro call to align on your goals. Then 1–2 hour sessions, 2–3 times a week. Sessions are recorded on request. WhatsApp support between sessions is included.</div></details>
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

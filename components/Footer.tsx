import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <Link href="/" className="footer-logo">
          Infra<span>Kraft</span>
        </Link>
        <nav className="footer-links">
          <Link href="/services">Services</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
          <a href="https://www.instagram.com/theinfrakraft/" target="_blank" rel="noopener">Instagram</a>
          <a href="https://www.linkedin.com/in/krishna-prasad-15b555375/" target="_blank" rel="noopener">LinkedIn</a>
        </nav>
        <div className="footer-copy">
          © {new Date().getFullYear()} InfraKraft · Bangalore & Chennai
        </div>
      </div>
    </footer>
  );
}

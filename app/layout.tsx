import type { Metadata } from 'next';
import { Sora, Source_Sans_3, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WAButton from '@/components/WAButton';
import Script from 'next/script';

const sora = Sora({ subsets: ['latin'], variable: '--font-sora', display: 'swap' });
const sourceSans = Source_Sans_3({ subsets: ['latin'], variable: '--font-source', display: 'swap' });
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta', display: 'swap', weight: ['400','600','700','800'] });

export const metadata: Metadata = {
  title: {
    default: 'InfraKraft — We Build, Automate & Grow Your Business',
    template: '%s — InfraKraft',
  },
  description: 'InfraKraft delivers website development, mobile apps, AI automation, and digital marketing for startups, SMBs, and enterprises across India.',
  metadataBase: new URL('https://theinfrakraft.vercel.app'),
  openGraph: {
    type: 'website',
    siteName: 'InfraKraft',
    images: ['/og-image.png'],
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${sourceSans.variable} ${jakarta.variable}`}>
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='18' fill='%230B1D2E'/><text y='72' x='50' text-anchor='middle' font-size='62' font-family='system-ui'>⚡</text></svg>" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FMB911NCJ0"
          strategy="afterInteractive"
        />
        <Script id="ga" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-FMB911NCJ0');
        `}</Script>
      </head>
      <body>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <WAButton />
      </body>
    </html>
  );
}

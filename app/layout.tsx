import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/components/SiteHeader';
import { LiveTicker } from '@/components/LiveTicker';
import { Footer } from '@/components/Footer';
import { CookieConsentModal } from '@/components/CookieConsentModal';

// Headings/Brand: Space Grotesk - sharp, tech, institutional
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  fallback: ['system-ui', 'Arial', 'sans-serif'],
});

// Body/UI: Inter - clean readability
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
  display: 'swap',
  fallback: ['system-ui', 'Arial', 'sans-serif'],
});

// Numbers/Data: JetBrains Mono - strict tabular lining for market data
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '700'],
  display: 'swap',
  fallback: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
});

export const metadata: Metadata = {
  title: 'HGM - Harven Global Media',
  description: 'A modern news and data terminal inspired by The Block.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-background text-text-primary antialiased min-h-screen flex flex-col font-body font-normal leading-relaxed text-slate-300" suppressHydrationWarning>
        <SiteHeader />
        <LiveTicker />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <CookieConsentModal />
      </body>
    </html>
  );
}

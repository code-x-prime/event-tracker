import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Event Tracker | Exhibition & Event Infrastructure Mumbai',
  description:
    "Event Tracker is Mumbai's trusted exhibition and event infrastructure company. Shell schemes, furniture rental, carpeting, branding, staffing and display solutions across India. Call +91 82919 06056.",
  keywords:
    'exhibition setup Mumbai, shell scheme, furniture rental, event infrastructure, trade show booth, Event Tracker',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased font-sans`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}


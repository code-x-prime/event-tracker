import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

const sharpGroteskDisplay = localFont({
  src: [
    {
      path: './fonts/SharpGrotesk-Medium25.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/SharpGrotesk-Medium25.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/SharpGrotesk-Medium25.otf',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-playfair',
  display: 'swap',
});

const sharpGroteskBody = localFont({
  src: [
    {
      path: './fonts/SharpGrotesk-Light20.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/SharpGrotesk-Light20.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/SharpGrotesk-Light20.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/SharpGrotesk-Light20.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/SharpGrotesk-Light20.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Event Tracker | Exhibition & Event Infrastructure Mumbai',
  description:
    "Event Tracker is Mumbai's trusted exhibition and event infrastructure company. Shell schemes, furniture rental, carpeting, branding, staffing and display solutions across India. Call +91 95944 22056.",
  keywords:
    'exhibition setup Mumbai, shell scheme, furniture rental, event infrastructure, trade show booth, Event Tracker',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${sharpGroteskDisplay.variable} ${sharpGroteskBody.variable} antialiased font-sans`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

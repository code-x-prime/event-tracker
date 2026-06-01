'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

function IconInstagram({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function IconLinkedin({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function IconFacebook({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact Us', href: '/contact' },
];

const SERVICES = [
  'Custom Fabrications & Production',
  'Auxiliary Area',
  'Conference Services',
  'Rental — AV & Furniture',
  'Design & Layout',
];

const SOCIALS = [
  { icon: IconInstagram, label: 'Instagram', href: '#' },
  { icon: IconLinkedin, label: 'LinkedIn', href: '#' },
  { icon: IconFacebook, label: 'Facebook', href: '#' },
];

const CONTACT_ITEMS = [
  { icon: MapPin, text: 'Mumbai, Maharashtra, India', href: null },
  { icon: Phone, text: '+91 95944 22056', href: 'tel:+919594422056' },
  { icon: Mail, text: 'info@eventtracker.in', href: 'mailto:info@eventtracker.in' },
  { icon: Globe, text: 'www.eventtracker.in', href: 'https://www.eventtracker.in' },
];

const colLabel = 'font-sans text-[0.6rem] font-semibold uppercase tracking-[0.22em] mb-5 block';

export function Footer() {
  return (
    <footer style={{ background: '#1A1A1A', color: '#fff' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex select-none mb-5">
              <Image
                src="/logo-w.png"
                alt="Event Tracker"
                width={130}
                height={48}
                className="object-contain"
                style={{ height: '65px', width: 'auto' }}
              />
            </Link>
            <p
              className="font-sans text-sm leading-relaxed mb-6"
              style={{ color: 'rgba(255,255,255,0.6)' }}
            >
              Mumbai&apos;s trusted partner for end-to-end exhibition setup and event infrastructure services.
            </p>
            <div className="flex items-center gap-3">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <SocialIcon key={label} icon={Icon} label={label} href={href} />
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <span className={colLabel} style={{ color: 'rgba(255,255,255,0.4)' }}>
              Quick Links
            </span>
            <ul className="space-y-3">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={label} className="flex items-center gap-0 group">
                  <span
                    className="block h-[2px] w-0 group-hover:w-4 rounded-full group-hover:mr-2 transition-all duration-300 ease-out flex-shrink-0"
                    style={{ background: 'linear-gradient(90deg,#2B9E7C,#8AC63F)' }}
                  />
                  <FooterLink href={href}>{label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <span className={colLabel} style={{ color: 'rgba(255,255,255,0.4)' }}>
              Our Services
            </span>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s}>
                  <FooterLink href="/services">{s}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <span className={colLabel} style={{ color: 'rgba(255,255,255,0.4)' }}>
              Contact Us
            </span>
            <ul className="space-y-4">
              {CONTACT_ITEMS.map(({ icon: Icon, text, href }) => (
                <li key={text}>
                  <ContactItem icon={Icon} text={text} href={href} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Gradient divider */}
        <div
          className="w-full h-px mb-8"
          style={{
            background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent)',
          }}
        />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-sans text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
            © 2026 Event Tracker. All rights reserved.
          </p>
          <p className="font-sans text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Mumbai, Maharashtra — Exhibition &amp; Event Infrastructure
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="font-sans text-sm transition-colors duration-200"
      style={{ color: 'rgba(255,255,255,0.7)' }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#8AC63F')}
      onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.7)')}
    >
      {children}
    </Link>
  );
}

function SocialIcon({
  icon: Icon,
  label,
  href,
}: {
  icon: React.ElementType;
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
      style={{ border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.6)' }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.borderColor = '#2B9E7C';
        el.style.color = '#2B9E7C';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.borderColor = 'rgba(255,255,255,0.2)';
        el.style.color = 'rgba(255,255,255,0.6)';
      }}
    >
      <Icon size={15} />
    </a>
  );
}

function ContactItem({
  icon: Icon,
  text,
  href,
}: {
  icon: React.ElementType;
  text: string;
  href: string | null;
}) {
  const inner = (
    <span className="flex items-start gap-3">
      <Icon size={15} className="mt-0.5 flex-shrink-0" style={{ color: '#2B9E7C' }} />
      <span
        className="font-sans text-sm leading-relaxed transition-colors duration-200"
        style={{ color: 'rgba(255,255,255,0.7)' }}
      >
        {text}
      </span>
    </span>
  );

  if (href) {
    return (
      <a
        href={href}
        onMouseEnter={(e) => {
          const span = e.currentTarget.querySelector('span > span') as HTMLElement;
          if (span) span.style.color = '#2B9E7C';
        }}
        onMouseLeave={(e) => {
          const span = e.currentTarget.querySelector('span > span') as HTMLElement;
          if (span) span.style.color = 'rgba(255,255,255,0.7)';
        }}
      >
        {inner}
      </a>
    );
  }
  return inner;
}

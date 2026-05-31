'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact Us', href: '/contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const linkColor = scrolled ? '#2D2D2D' : '#ffffff';
  const trackerColor = scrolled ? '#2D2D2D' : '#ffffff';

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 1px 24px rgba(0,0,0,0.08)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none select-none">
            <span
              className="font-display font-bold text-2xl"
              style={{
                background: 'linear-gradient(90deg,#2B9E7C,#8AC63F)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              event
            </span>
            <span
              className="font-sans font-medium text-[0.55rem] uppercase transition-colors duration-500"
              style={{ letterSpacing: '0.35em', color: trackerColor }}
            >
              TRACKER
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className="relative font-sans text-[0.85rem] font-medium pb-1 group transition-colors duration-300"
                  style={{ color: linkColor }}
                >
                  {label}
                  {/* active underline */}
                  <span
                    className="absolute bottom-0 left-0 h-[2px] rounded-full transition-all duration-300"
                    style={{
                      background: 'linear-gradient(90deg,#2B9E7C,#8AC63F)',
                      width: active ? '100%' : '0%',
                    }}
                  />
                  {/* hover underline */}
                  {!active && (
                    <span
                      className="absolute bottom-0 left-0 h-[2px] rounded-full w-0 group-hover:w-full transition-all duration-300 ease-out"
                      style={{ background: 'linear-gradient(90deg,#2B9E7C,#8AC63F)' }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <QuoteButton className="hidden lg:inline-flex" />
            <button
              className="lg:hidden p-2 rounded-md transition-colors duration-300"
              style={{ color: linkColor }}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-500 ease-in-out bg-white"
        style={{ maxHeight: menuOpen ? '480px' : '0px' }}
      >
        <nav className="flex flex-col px-6 py-4 border-t border-[#E2EAE2]">
          {NAV_LINKS.map(({ label, href }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className="font-sans text-sm font-medium py-3.5 border-b border-[#E2EAE2] last:border-0 transition-colors duration-200"
                style={{ color: active ? '#2B9E7C' : '#2D2D2D' }}
              >
                {label}
              </Link>
            );
          })}
          <QuoteButton className="mt-5 mb-2 self-start" />
        </nav>
      </div>
    </header>
  );
}

function QuoteButton({ className = '' }: { className?: string }) {
  return (
    <Link
      href="/contact"
      className={`items-center gap-1.5 font-sans font-semibold text-sm text-white rounded-full px-5 py-2.5 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_4px_20px_rgba(43,158,124,0.45)] inline-flex ${className}`}
      style={{ background: 'linear-gradient(90deg,#2B9E7C,#8AC63F)' }}
    >
      Get a Quote
      <ChevronRight size={15} strokeWidth={2.5} />
    </Link>
  );
}

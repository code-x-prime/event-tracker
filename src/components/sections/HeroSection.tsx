'use client';

import Link from 'next/link';
import {
  IconBuildingStore,
  IconArrowRight,
  IconPhone,
  IconChevronsDown,
} from '@tabler/icons-react';

const STATS = [
  { number: '500+', label: 'Events Executed' },
  { number: '200+', label: 'Happy Clients' },
  { number: '15+', label: 'Years Experience' },
];

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden text-center px-4 md:px-5"
      style={{ background: '#0a1a12' }}
    >
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.6; transform: scale(1.4); }
        }
        @keyframes bounce-scroll {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(8px); }
        }
        @keyframes hero-btn-arrow {
          0%, 100% { transform: translateX(0); }
          50%       { transform: translateX(4px); }
        }
        .hero-btn-primary:hover .hero-arrow {
          animation: hero-btn-arrow 0.6s ease infinite;
        }
      `}</style>

      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/daffodils/event.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="none"
      />

      {/* Dark + green tint overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(10,26,18,0.60) 0%, rgba(15,42,30,0.55) 40%, rgba(10,10,10,0.70) 100%)',
        }}
      />

      {/* Green radial glow on top of video */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 30% 40%, rgba(43,158,124,0.12) 0%, transparent 55%), radial-gradient(circle at 80% 20%, rgba(138,198,63,0.06) 0%, transparent 45%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto w-full py-12 md:py-16 flex flex-col items-center">

        {/* ① Eyebrow badge */}
        <div
          style={{
            animation: 'slideUp 0.6s ease forwards',
            animationDelay: '0ms',
            opacity: 0,
          }}
        >
          <span
            className="hidden md:inline-flex items-center gap-2 px-2 md:px-4 py-2 rounded-full mb-3 md:mb-6 whitespace-nowrap"
            style={{
              border: '1px solid rgba(255,255,255,0.2)',
              background: 'rgba(255,255,255,0.05)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{
                background: 'linear-gradient(90deg,#2B9E7C,#8AC63F)',
                animation: 'pulse-dot 2s ease-in-out infinite',
              }}
            />
            <IconBuildingStore size={14} color="rgba(255,255,255,0.7)" />
            <span
              className="font-sans text-[10px] uppercase tracking-wide"
              style={{ color: 'rgba(255,255,255,0.7)' }}
            >
              Mumbai&apos;s #1 Exhibition Infrastructure Partner
            </span>
          </span>
        </div>

        {/* ② Heading */}
        <div
          style={{
            animation: 'slideUp 0.6s ease forwards',
            animationDelay: '150ms',
            opacity: 0,
          }}
        >
          <h1 className="font-display font-bold leading-tight mb-6">
            <span className="block text-white text-2xl md:text-5xl lg:text-6xl">
              Transforming Spaces Into
            </span>
            <span
              className="block text-2xl md:text-5xl lg:text-6xl"
              style={{
                background: 'linear-gradient(90deg,#2B9E7C,#8AC63F)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Powerful Brand Experiences
            </span>
          </h1>
        </div>

        {/* ③ Subtext */}
        <div
          style={{
            animation: 'slideUp 0.6s ease forwards',
            animationDelay: '300ms',
            opacity: 0,
          }}
        >
          <p
            className="font-sans text-[13px] md:text-lg leading-relaxed max-w-2xl mx-auto mb-8"
            style={{ color: 'rgba(255,255,255,0.6)' }}
          >
            Event Tracker delivers end-to-end exhibition setup — shell schemes, furniture,
            branding, carpeting, staffing, and display solutions across Mumbai and pan India.
          </p>
        </div>

        {/* ④ CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-3 items-center justify-center mb-10 w-full max-w-[280px] sm:max-w-none mx-auto"
          style={{
            animation: 'slideUp 0.6s ease forwards',
            animationDelay: '450ms',
            opacity: 0,
          }}
        >
          <Link
            href="/services"
            className="hero-btn-primary inline-flex items-center justify-center gap-2 font-sans font-semibold text-sm text-white rounded-full py-3 px-4 md:px-8 md:py-4 w-full sm:w-auto transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(90deg,#2B9E7C,#8AC63F)',
              boxShadow: '0 0 0 rgba(43,158,124,0)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                '0 8px 30px rgba(43,158,124,0.5)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                '0 0 0 rgba(43,158,124,0)';
            }}
          >
            Explore Our Services
            <IconArrowRight size={18} className="hero-arrow" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 font-sans font-semibold text-sm text-white rounded-full py-3 px-4 md:px-8 md:py-4 w-full sm:w-auto transition-all duration-300 hover:bg-white/10"
            style={{ border: '1.5px solid rgba(255,255,255,0.3)' }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.6)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.3)';
            }}
          >
            <IconPhone size={16} />
            Get a Quote
          </Link>
        </div>

        {/* ⑤ Stats strip */}
        <div
          className="w-full max-w-2xl mx-auto pt-4 md:pt-8 border-t flex flex-row items-center justify-center gap-8 sm:gap-0"
          style={{
            borderColor: 'rgba(255,255,255,0.1)',
            animation: 'slideUp 0.6s ease forwards',
            animationDelay: '600ms',
            opacity: 0,
          }}
        >
          {STATS.map(({ number, label }, i) => (
            <div key={label} className="flex items-center gap-0 w-full sm:w-auto">
              {i > 0 && (
                <div
                  className="hidden sm:block w-px h-10 mx-10 flex-shrink-0"
                  style={{ background: 'rgba(255,255,255,0.15)' }}
                />
              )}
              <div className="text-center flex-1 sm:flex-none">
                <span
                  className="block font-display text-xl md:text-3xl font-bold"
                  style={{
                    background: 'linear-gradient(90deg,#2B9E7C,#8AC63F)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {number}
                </span>
                <span
                  className="font-sans text-[10px] md:text-xs uppercase tracking-wide"
                  style={{ color: 'rgba(255,255,255,0.5)' }}
                >
                  {label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ⑥ Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 z-10"
        style={{ animation: 'bounce-scroll 1.5s ease-in-out infinite' }}
      >
        <IconChevronsDown size={22} color="rgba(255,255,255,0.4)" />
      </div>
    </section>
  );
}

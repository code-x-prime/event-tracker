'use client';

import Link from 'next/link';
import {
  IconSparkles,
  IconArrowRight,
  IconBriefcase,
  IconShieldCheck,
  IconMapPin,
  IconHeadset,
} from '@tabler/icons-react';

export default function CTABanner() {
  return (
    <section
      className="relative overflow-hidden py-14 md:py-20 px-6"
      style={{ background: '#0f1a14' }}
    >
      {/* Decorative layers */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: -100,
          left: -100,
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(43,158,124,0.18), transparent 70%)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: -100,
          right: -100,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(138,198,63,0.12), transparent 70%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          opacity: 0.4,
          zIndex: 0,
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: 2,
          background: 'linear-gradient(90deg, transparent, #2B9E7C, #8AC63F, transparent)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">

        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
          style={{ border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)' }}
        >
          <IconSparkles size={12} color="#8AC63F" />
          <span
            className="font-sans text-xs uppercase tracking-[0.3em]"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            Let&apos;s Build Something Great
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-display font-bold leading-tight mb-6">
          <span className="block text-white text-3xl sm:text-4xl lg:text-5xl">
            Ready to Make Your Next
          </span>
          <span
            className="block text-3xl sm:text-4xl lg:text-5xl py-2"
            style={{
              background: 'linear-gradient(90deg,#2B9E7C,#8AC63F)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Exhibition Unforgettable?
          </span>
        </h2>

        {/* Subtext */}
        <p
          className="font-sans text-lg leading-relaxed max-w-2xl mx-auto mb-10"
          style={{ color: 'rgba(255,255,255,0.55)' }}
        >
          From shell schemes to staffing — Event Tracker handles every detail so you can
          focus on what matters: your brand and your audience.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 font-sans font-semibold text-base text-white rounded-full px-9 py-4 transition-all duration-300 hover:scale-105"
            style={{ background: 'linear-gradient(90deg,#2B9E7C,#8AC63F)' }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                '0 10px 40px rgba(43,158,124,0.5)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
            }}
          >
            Start Your Project
            <IconArrowRight size={18} />
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 font-sans font-semibold text-base text-white rounded-full px-9 py-4 transition-all duration-200"
            style={{ border: '1.5px solid rgba(255,255,255,0.25)' }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = 'rgba(255,255,255,0.08)';
              el.style.borderColor = 'rgba(255,255,255,0.5)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = 'transparent';
              el.style.borderColor = 'rgba(255,255,255,0.25)';
            }}
          >
            <IconBriefcase size={16} />
            View Our Services
          </Link>
        </div>

        {/* Trust row */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-6 mt-12">
          <TrustPill icon={IconShieldCheck} label="ISO Quality Assured" />
          <Dot />
          <TrustPill icon={IconMapPin} label="Pan India Delivery" />
          <Dot />
          <TrustPill icon={IconHeadset} label="24/7 On-Site Support" />
        </div>
      </div>
    </section>
  );
}

function TrustPill({
  icon: Icon,
  label,
}: {
  icon: React.ElementType;
  label: string;
}) {
  return (
    <span className="flex items-center gap-2 font-sans text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
      <Icon size={16} color="#2B9E7C" />
      {label}
    </span>
  );
}

function Dot() {
  return (
    <span
      className="hidden sm:block flex-shrink-0 rounded-full"
      style={{ width: 4, height: 4, background: 'rgba(255,255,255,0.2)' }}
    />
  );
}

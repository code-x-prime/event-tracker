import Link from 'next/link';
import { IconChevronRight } from '@tabler/icons-react';

type PageHeroProps = {
  title: string;
  subtitle: string;
  badge?: string;
  breadcrumb?: string;
};

export default function PageHero({ title, subtitle, badge, breadcrumb = 'About Us' }: PageHeroProps) {
  const words = title.split(' ');
  const lastWord = words.pop();
  const firstWords = words.join(' ');

  return (
    <section
      className="relative overflow-hidden flex items-center"
      style={{
        height: '52vh',
        minHeight: 420,
        background: 'linear-gradient(135deg, #0a1a12 0%, #0f2a1e 50%, #1A1A1A 100%)',
      }}
    >
      <style>{`
        @keyframes ph-slideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Top gradient border */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{ height: 2, background: 'linear-gradient(90deg, transparent, #2B9E7C, #8AC63F, transparent)' }}
      />

      {/* Radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: -120,
          left: -120,
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(43,158,124,0.2), transparent 70%)',
        }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 w-full">

        {/* Breadcrumb */}
        <div
          className="flex items-center gap-1.5 mb-6"
          style={{ animation: 'ph-slideUp 0.5s ease forwards', opacity: 0 }}
        >
          <Link href="/" className="font-sans text-xs transition-colors duration-200 hover:text-white" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Home
          </Link>
          <IconChevronRight size={12} color="rgba(255,255,255,0.3)" />
          <span className="font-sans text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{breadcrumb}</span>
        </div>

        {/* Badge */}
        {badge && (
          <div style={{ animation: 'ph-slideUp 0.5s ease forwards', animationDelay: '80ms', opacity: 0 }}>
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 font-sans text-xs uppercase tracking-[0.25em]"
              style={{
                border: '1px solid rgba(255,255,255,0.15)',
                background: 'rgba(255,255,255,0.05)',
                color: 'rgba(255,255,255,0.6)',
              }}
            >
              {badge}
            </span>
          </div>
        )}

        {/* Title */}
        <div style={{ animation: 'ph-slideUp 0.5s ease forwards', animationDelay: '160ms', opacity: 0 }}>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
            <span className="text-white">{firstWords} </span>
            <span
              style={{
                background: 'linear-gradient(90deg,#2B9E7C,#8AC63F)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {lastWord}
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <div style={{ animation: 'ph-slideUp 0.5s ease forwards', animationDelay: '260ms', opacity: 0 }}>
          <p className="font-sans text-lg leading-relaxed max-w-2xl" style={{ color: 'rgba(255,255,255,0.55)' }}>
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}

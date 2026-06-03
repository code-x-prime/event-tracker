'use client';

import React from 'react';

// ─── Client list ────────────────────────────────────────────────────────────
// Replace these with actual client logo <img> tags once you have the files.
const CLIENTS = [
  { name: 'NSE', sub: 'National Stock Exchange' },
  { name: 'IMMA', sub: 'India Metal & Mining Assoc.' },
  { name: 'Navneet', sub: 'Education Ltd.' },
  { name: 'Barnet', sub: 'Integrated Finance' },
  { name: 'Ministry of Commerce', sub: 'Government of India' },
  { name: 'Ministry of Culture', sub: 'Government of India' },
  { name: 'NEWARCH', sub: 'Landscapes LLP' },
  { name: 'Godrej', sub: 'Properties' },
  { name: 'Tata', sub: 'Consultancy Services' },
  { name: 'L&T', sub: 'Construction' },
  { name: 'SECC', sub: 'Exhibition Centre' },
  { name: 'IIMTF', sub: 'Mumbai' },
];

// Duplicate for seamless infinite loop
const TRACK = [...CLIENTS, ...CLIENTS];

export default function ClientsCarousel() {
  return (
    <section
      className="py-14 md:py-20 overflow-hidden"
      style={{ background: '#FFFFFF' }}
    >
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        {/* Label */}
        <p
          className="font-sans text-xs uppercase tracking-[0.3em] mb-2"
          style={{ color: '#2B9E7C' }}
        >
          Trusted By
        </p>
        {/* Heading */}
        <h2
          className="font-display font-bold text-3xl lg:text-4xl"
          style={{ color: '#1A1A1A' }}
        >
          Brands That{' '}
          <span
            style={{
              background: 'linear-gradient(90deg,#2B9E7C,#8AC63F)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Trust Us
          </span>
        </h2>
        <p
          className="font-sans text-sm mt-3 max-w-lg mx-auto"
          style={{ color: '#666' }}
        >
          From government bodies to India&apos;s leading brands — we&apos;ve delivered
          across 500+ exhibitions nationwide.
        </p>
      </div>

      {/* ── Marquee track ── */}
      <div className="relative">
        {/* Left fade */}
        <div
          className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, #fff 0%, transparent 100%)',
          }}
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(to left, #fff 0%, transparent 100%)',
          }}
        />

        <div
          className="flex gap-5"
          style={{
            animation: 'marquee 30s linear infinite',
            width: 'max-content',
          }}
        >
          {TRACK.map((client, i) => (
            <ClientCard key={i} name={client.name} sub={client.sub} />
          ))}
        </div>
      </div>

      {/* Global keyframe — injected once */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

function ClientCard({ name, sub }: { name: string; sub: string }) {
  return (
    <div
      className="flex-shrink-0 flex flex-col items-center justify-center px-8 py-5 rounded-2xl select-none"
      style={{
        minWidth: 160,
        border: '1.5px solid #E2EAE2',
        background: '#FAFCFA',
        transition: 'box-shadow 0.2s, border-color 0.2s',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = '#2B9E7C';
        el.style.boxShadow = '0 4px 20px rgba(43,158,124,0.12)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = '#E2EAE2';
        el.style.boxShadow = 'none';
      }}
    >
      {/* Name styled as a logo */}
      <span
        className="font-display font-bold text-base tracking-tight text-center"
        style={{ color: '#1A2B4A' }}
      >
        {name}
      </span>
      <span
        className="font-sans text-[10px] mt-1 text-center"
        style={{ color: '#999', maxWidth: 120 }}
      >
        {sub}
      </span>
    </div>
  );
}

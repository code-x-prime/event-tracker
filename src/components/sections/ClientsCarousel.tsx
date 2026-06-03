'use client';

import React from 'react';
import Image from 'next/image';

const CLIENTS = [
  { name: 'Client 1', src: '/clients/client (1).jpeg' },
  { name: 'Client 2', src: '/clients/client (2).jpeg' },
  { name: 'Client 3', src: '/clients/client (3).jpeg' },
  { name: 'Client 4', src: '/clients/client (4).jpeg' },
  { name: 'Client 5', src: '/clients/client (5).jpeg' },
  { name: 'Client 6', src: '/clients/client (6).jpeg' },
];

const TRACK = [...CLIENTS, ...CLIENTS];

export default function ClientsCarousel() {
  return (
    <section
      className="py-12 md:py-16 overflow-hidden"
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
            <ClientCard key={i} name={client.name} src={client.src} />
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

function ClientCard({ name, src }: { name: string; src: string }) {
  return (
    <div
      className="flex-shrink-0 flex items-center justify-center rounded-2xl select-none overflow-hidden"
      style={{
        width: 180,
        height: 100,
        border: '1.5px solid #E2EAE2',
        background: '#FAFCFA',
        transition: 'box-shadow 0.2s, border-color 0.2s',
        padding: '12px 16px',
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
      <Image
        src={src}
        alt={name}
        width={148}
        height={76}
        style={{ objectFit: 'contain', width: '100%', height: '100%' }}
      />
    </div>
  );
}

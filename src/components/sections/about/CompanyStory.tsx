'use client';

import Link from 'next/link';
import { IconMapPin, IconArrowRight } from '@tabler/icons-react';

const TAGS = ['Shell Scheme', 'Furniture', 'Branding', 'Carpeting', 'Staffing', 'Display'];

export default function CompanyStory() {
  return (
    <section className="bg-white py-12 md:py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT — Visual card */}
        <div
          className="relative overflow-hidden rounded-3xl p-10"
          style={{ background: 'linear-gradient(135deg, #0f1a14, #0a2018)' }}
        >
          {/* Decorative EST text */}
          <div
            className="absolute bottom-0 right-0 leading-none select-none pointer-events-none font-display font-bold"
            style={{ fontSize: '8rem', color: 'rgba(255,255,255,0.05)', lineHeight: 1 }}
          >
            EST.
          </div>

          {/* Radial glow */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: -60,
              right: -60,
              width: 280,
              height: 280,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(43,158,124,0.15), transparent 70%)',
            }}
          />

          {/* Dot grid */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          <div className="relative z-10">
            {/* Label */}
            <p
              className="font-sans text-xs uppercase tracking-widest mb-4"
              style={{ color: 'rgba(255,255,255,0.4)' }}
            >
              Our Story
            </p>

            {/* Quote */}
            <div
              className="pl-5"
              style={{ borderLeft: '3px solid #2B9E7C' }}
            >
              <p
                className="font-display text-2xl font-semibold text-white leading-relaxed"
                style={{ fontStyle: 'italic' }}
              >
                &ldquo;Mumbai&apos;s trusted name in exhibition infrastructure.&rdquo;
              </p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 mt-6">
              <IconMapPin size={14} color="#2B9E7C" />
              <span className="font-sans text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Mumbai, Maharashtra, India
              </span>
            </div>

            {/* Tag chips */}
            <div className="flex flex-wrap gap-2 mt-6">
              {TAGS.map((tag) => (
                <span
                  key={tag}
                  className="font-sans text-xs px-3 py-1 rounded-full"
                  style={{ border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.5)' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — Text */}
        <div>
          {/* Label */}
          <div className="flex items-center gap-3 mb-5">
            <span
              className="block h-[2px] w-8 flex-shrink-0 rounded-full"
              style={{ background: 'linear-gradient(90deg,#2B9E7C,#8AC63F)' }}
            />
            <span className="font-sans text-xs uppercase tracking-[0.3em]" style={{ color: '#2B9E7C' }}>
              Who We Are
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-display font-bold text-4xl leading-tight mb-6" style={{ color: '#1A1A1A' }}>
            Building Exhibition Experiences
          </h2>

          {/* Body */}
          <div className="flex flex-col gap-4">
            <p className="font-sans text-base leading-relaxed" style={{ color: '#555555' }}>
              Event Tracker is a Mumbai-based exhibition and event infrastructure company
              specializing in end-to-end exhibition setup and support services.
            </p>
            <p className="font-sans text-base leading-relaxed" style={{ color: '#555555' }}>
              We help brands, organizers, and exhibitors create impactful exhibition spaces
              through high-quality execution, innovative designs, and reliable on-site support.
            </p>
            <p className="font-sans text-base leading-relaxed" style={{ color: '#555555' }}>
              From concept to completion, our team ensures every detail is handled with
              precision — so your brand commands attention on the exhibition floor.
            </p>
          </div>

          {/* CTA link */}
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-sans font-semibold text-sm mt-6 transition-all duration-200 group hover:gap-3"
            style={{ color: '#2B9E7C' }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#8AC63F')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#2B9E7C')}
          >
            Explore Our Services
            <IconArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

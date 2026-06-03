'use client';

import Image from 'next/image';
import Link from 'next/link';
import { IconArrowRight } from '@tabler/icons-react';

const SERVICES = [
  {
    svg: '/event-services/temporary-staffing.svg',
    title: 'Shell Scheme',
    desc: 'Standard and customized booth construction for trade shows and exhibitions — modular, fast, and professional.',
    color: '#2B9E7C',
  },
  {
    svg: '/event-services/exhibition-shell-scheme-solutions.svg',
    title: 'Custom Stall Design & Fabrication',
    desc: 'Fully customized exhibition stalls designed and fabricated to your brand specifications — from concept to on-site build.',
    color: '#2BA896',
  },
  {
    svg: '/event-services/branding-graphics.svg',
    title: 'Branding & Graphics',
    desc: 'Large-format printing, vinyl graphics, LED-lit backdrops, signage, and promotional displays that make your stall unmissable.',
    color: '#3BA882',
  },
  {
    svg: '/event-services/product-display-solutions.svg',
    title: 'Turnkey Projects',
    desc: 'Complete end-to-end project delivery — design, fabrication, logistics, setup, and dismantling all under one roof.',
    color: '#52B48A',
  },
  {
    svg: '/event-services/carpeting-services.svg',
    title: 'Carpeting Services',
    desc: 'High-quality flooring and carpeting in a variety of colors, textures, and finishes to elevate your exhibition space.',
    color: '#6BBF92',
  },
  // {
  //   svg: '/event-services/temporary-staffing.svg',
  //   title: 'Project & Event Management',
  //   desc: 'On-ground project managers and event coordinators ensuring flawless execution from pre-event planning to wrap-up.',
  //   color: '#7CC440',
  // },
  {
    svg: '/event-services/premium-furniture-rental.svg',
    title: 'Conference Setup & Management',
    desc: 'Complete conference room setups — furniture, AV, staging, and professional management for seamless events.',
    color: '#8AC63F',
  },
];

export default function ServicesGrid() {
  return (
    <section style={{ background: '#F7F9F7' }} className="py-12 md:py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="block h-[2px] w-8 flex-shrink-0 rounded-full"
              style={{ background: 'linear-gradient(90deg,#2B9E7C,#8AC63F)' }}
            />
            <span
              className="font-sans text-xs uppercase tracking-[0.3em]"
              style={{ color: '#2B9E7C' }}
            >
              What We Offer
            </span>
          </div>
          <h2
            className="font-display font-bold text-3xl lg:text-5xl max-w-xl"
            style={{ color: '#1A1A1A' }}
          >
            Our Exhibition &amp; Event Services
          </h2>
          <p className="font-sans text-base mt-3 max-w-lg" style={{ color: '#555555' }}>
            From shell schemes to staffing — every detail handled with precision and professionalism across Mumbai and India.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map(({ svg, title, desc, color }, i) => (
            <ServiceCard
              key={title}
              svg={svg}
              title={title}
              desc={desc}
              color={color}
              index={i}
            />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p
            className="font-display font-semibold text-2xl"
            style={{ color: '#1A1A1A' }}
          >
            Need a custom solution for your event?
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-sans font-semibold text-sm text-white rounded-full px-8 py-4 transition-all duration-300 hover:scale-105 flex-shrink-0"
            style={{
              background: 'linear-gradient(90deg,#2B9E7C,#8AC63F)',
              boxShadow: '0 0 0 rgba(43,158,124,0)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                '0 8px 24px rgba(43,158,124,0.4)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                '0 0 0 rgba(43,158,124,0)';
            }}
          >
            View All Services
            <IconArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  svg,
  title,
  desc,
  color,
  index,
}: {
  svg: string;
  title: string;
  desc: string;
  color: string;
  index: number;
}) {
  const num = String(index + 1).padStart(2, '0');

  return (
    <div
      className="group relative bg-white rounded-2xl p-5  transition-all duration-300 overflow-hidden"
      style={{ border: '1.5px solid #E2EAE2' }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = 'transparent';
        el.style.boxShadow = '0 12px 40px rgba(43,158,124,0.12)';
        el.style.transform = 'translateY(-4px)';
        const bar = el.querySelector('.card-accent-bar') as HTMLElement;
        if (bar) bar.style.opacity = '1';
        const link = el.querySelector('.card-learn-more') as HTMLElement;
        if (link) link.style.opacity = '1';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = '#E2EAE2';
        el.style.boxShadow = 'none';
        el.style.transform = 'translateY(0)';
        const bar = el.querySelector('.card-accent-bar') as HTMLElement;
        if (bar) bar.style.opacity = '0';
        const link = el.querySelector('.card-learn-more') as HTMLElement;
        if (link) link.style.opacity = '0';
      }}
    >
      {/* Left accent bar */}
      <div
        className="card-accent-bar absolute top-0 left-0 w-[3px] h-full rounded-l-2xl transition-opacity duration-300"
        style={{ background: 'linear-gradient(180deg,#2B9E7C,#8AC63F)', opacity: 0 }}
      />

      {/* Decorative number */}
      <span
        className="absolute top-5 right-6 font-display font-bold text-5xl select-none pointer-events-none"
        style={{ color: '#E2EAE2' }}
      >
        {num}
      </span>

      {/* SVG Icon */}
      <div
        className="w-[60px] h-[60px] rounded-xl flex items-center justify-center mb-5"
        style={{ background: color + '18' }}
      >
        <Image src={svg} alt={title} width={45} height={45} />
      </div>

      {/* Title */}
      <h3 className="font-display font-semibold text-lg md:text-xl mb-3" style={{ color: '#1A1A1A' }}>
        {title}
      </h3>

      {/* Description */}
      <p className="font-sans text-sm leading-relaxed mb-4" style={{ color: '#555555' }}>
        {desc}
      </p>

      {/* Learn more */}
      <Link
        href={`/services#${title.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
        className="card-learn-more inline-flex items-center gap-1 font-sans text-sm font-medium transition-all duration-300 group/link"
        style={{ color: '#2B9E7C', opacity: 0 }}
      >
        Learn More
        <IconArrowRight
          size={15}
          className="transition-transform duration-200 group-hover/link:translate-x-1"
        />
      </Link>
    </div>
  );
}

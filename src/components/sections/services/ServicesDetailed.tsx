'use client';

import Image from 'next/image';
import Link from 'next/link';
import { IconCheck, IconArrowRight } from '@tabler/icons-react';

const SERVICES = [
  {
    number: '01',
    svg: '/event-services/temporary-staffing.svg',
    title: 'Shell Scheme',
    desc: 'Standard and customized booth construction for trade shows and exhibitions — modular, fast, and professional.',
    features: [
      'Standard & customized octanorm stalls',
      'Fascia board name writing & numbering',
      'Modular panels, tables & chair setups',
      'Speedy assembly & dismantling support',
    ],
    img: '/services/service-1.jpeg',
    color: '#2B9E7C',
  },
  {
    number: '02',
    svg: '/event-services/exhibition-shell-scheme-solutions.svg',
    title: 'Custom Stall Design & Fabrication',
    desc: 'Fully customized exhibition stalls designed and fabricated to your brand specifications — from concept to on-site build.',
    features: [
      'Concept design & 3D visualization',
      'Custom fabrication in any size or shape',
      'Double-storey & island stalls',
      'On-site build, dressing & dismantling',
    ],
    img: '/services/service-2.jpeg',
    color: '#2BA896',
  },
  {
    number: '03',
    svg: '/event-services/branding-graphics.svg',
    title: 'Branding & Graphics',
    desc: 'Large-format printing, vinyl graphics, LED-lit backdrops, signage, and promotional displays that make your stall unmissable.',
    features: [
      'Large format digital printing',
      'Vinyl wraps & wall graphics',
      'LED-lit backdrops & signage',
      'Custom promotional displays',
    ],
    img: '/services/service-3.jpeg',
    color: '#3BA882',
  },
  {
    number: '04',
    svg: '/event-services/product-display-solutions.svg',
    title: 'Turnkey Projects',
    desc: 'Complete end-to-end project delivery — design, fabrication, logistics, setup, and dismantling all under one roof.',
    features: [
      'Single point of contact for everything',
      'Design, fabrication & logistics',
      'On-site setup & supervision',
      'Dismantling & storage solutions',
    ],
    img: '/services/service-4.jpeg',
    color: '#52B48A',
  },
  {
    number: '05',
    svg: '/event-services/carpeting-services.svg',
    title: 'Carpeting Services',
    desc: 'High-quality flooring and carpeting in a variety of colors, textures, and finishes to elevate your exhibition space.',
    features: [
      'Multiple colors & textures',
      'Cut & loop pile options',
      'Anti-slip underlay included',
      'Quick installation & removal',
    ],
    img: '/services/service-5.jpeg',
    color: '#6BBF92',
  },
  {
    number: '06',
    svg: '/event-services/premium-furniture-rental.svg',
    title: 'Conference Setup & Management',
    desc: 'Complete conference room setups — furniture, AV, staging, and professional management for seamless events.',
    features: [
      'Conference furniture & staging',
      'AV systems & screen setup',
      'Podiums, panels & signage',
      'Full event-day management',
    ],
    img: '/services/service-6.jpeg',
    color: '#8AC63F',
  },
];

export default function ServicesDetailed() {
  return (
    <section className="bg-white py-12 md:py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="block h-[2px] w-8 flex-shrink-0 rounded-full"
              style={{ background: 'linear-gradient(90deg,#2B9E7C,#8AC63F)' }}
            />
            <span className="font-sans text-xs uppercase tracking-[0.3em]" style={{ color: '#2B9E7C' }}>
              What We Offer
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl lg:text-5xl" style={{ color: '#1A1A1A' }}>
            Complete Exhibition Infrastructure Solutions
          </h2>
        </div>

        {/* Service blocks */}
        <div className="divide-y divide-[#E2EAE2]">
          {SERVICES.map(({ number, svg, title, desc, features, img, color }, i) => {
            const isOdd = i % 2 === 0;
            const id = title.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
            return (
              <div
                key={number}
                id={id}
                className={`py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center scroll-mt-24 ${isOdd ? '' : 'lg:[&>*:first-child]:order-last'}`}
              >
                {/* Visual card */}
                <div
                  className="relative overflow-hidden rounded-[20px]"
                  style={{ minHeight: 320 }}
                >
                  <Image
                    src={img}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.35)' }} />
                  {/* Decorative number */}
                  <span
                    className="absolute bottom-4 right-6 font-display font-bold select-none pointer-events-none z-10"
                    style={{ fontSize: '7rem', color: 'rgba(255,255,255,0.12)', lineHeight: 1 }}
                  >
                    {number}
                  </span>
                </div>

                {/* Text */}
                <div>
                  <p className="font-sans text-xs font-bold tracking-widest mb-3" style={{ color: '#2B9E7C' }}>
                    {number}
                  </p>
                  <div
                    className="w-[60px] h-[60px] rounded-xl flex items-center justify-center mb-4"
                    style={{ background: color + '18' }}
                  >
                    <Image src={svg} alt={title} width={45} height={45} />
                  </div>
                  <h3 className="font-display font-bold text-3xl mb-4" style={{ color: '#1A1A1A' }}>
                    {title}
                  </h3>
                  <p className="font-sans text-base leading-relaxed mb-6" style={{ color: '#555555' }}>
                    {desc}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {features.map((f) => (
                      <li key={f} className="flex items-center gap-3">
                        <span
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: 'rgba(43,158,124,0.12)' }}
                        >
                          <IconCheck size={12} color="#2B9E7C" />
                        </span>
                        <span className="font-sans text-sm" style={{ color: '#2D2D2D' }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 font-sans font-semibold text-sm transition-all duration-200 group hover:gap-3"
                    style={{ color: '#2B9E7C' }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#8AC63F')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#2B9E7C')}
                  >
                    Get a Quote for This
                    <IconArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

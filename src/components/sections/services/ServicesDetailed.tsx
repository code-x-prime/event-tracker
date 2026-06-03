'use client';

import Image from 'next/image';
import Link from 'next/link';
import { IconCheck, IconArrowRight } from '@tabler/icons-react';

const SERVICES = [
  {
    number: '01',
    svg: '/event-services/exhibition-shell-scheme-solutions.svg',
    title: 'Custom Stall Design & Fabrication',
    desc: 'Fully customized exhibition stalls designed and fabricated to your exact brand specifications. From concept sketches and 3D renders to on-site build and breakdown — we handle every detail.',
    features: [
      'Concept design & 3D visualization',
      'Custom fabrication in any size or shape',
      'Double-storey & island stalls',
      'On-site build, dressing & dismantling',
    ],
    img: '/services/exhibition-shell-scheme-solutions.jpg',
    color: '#2B9E7C',
  },
  {
    number: '02',
    svg: '/event-services/branding-graphics.svg',
    title: 'Branding & Graphics',
    desc: 'End-to-end branding solutions including large-format printing, vinyl graphics, LED-lit backdrops, signage, and custom promotional displays that make your exhibition stall unmissable.',
    features: [
      'Large format digital printing',
      'Vinyl wraps & wall graphics',
      'LED-lit backdrops & signage',
      'Custom promotional displays',
    ],
    img: '/services/branding-graphics.jpg',
    color: '#3BA882',
  },
  {
    number: '03',
    svg: '/event-services/product-display-solutions.svg',
    title: 'Turnkey Projects',
    desc: 'Complete end-to-end project delivery under one roof — from design and fabrication to logistics, on-site setup, event execution, and full dismantling. Zero hassle for the client.',
    features: [
      'Single point of contact for everything',
      'Design, fabrication & logistics',
      'On-site setup & supervision',
      'Dismantling & storage solutions',
    ],
    img: '/services/product-display-solutions.jpg',
    color: '#52B48A',
  },
  {
    number: '04',
    svg: '/event-services/carpeting-services.svg',
    title: 'Carpeting Services',
    desc: 'High-quality flooring and carpeting options for exhibition stands and event venues. Available in a variety of colors, textures, and finishes to match your brand and exhibition theme.',
    features: [
      'Multiple colors & textures',
      'Cut & loop pile options',
      'Anti-slip underlay included',
      'Quick installation & removal',
    ],
    img: '/services/carpeting-services.jpg',
    color: '#6BBF92',
  },
  {
    number: '05',
    svg: '/event-services/temporary-staffing.svg',
    title: 'Project & Event Management',
    desc: 'Dedicated on-ground project managers and event coordinators who ensure flawless execution — from pre-event planning and vendor coordination to live event supervision and wrap-up.',
    features: [
      'Dedicated project manager assigned',
      'Vendor & timeline coordination',
      'Live on-site supervision',
      'Post-event reporting & debrief',
    ],
    img: '/services/temporary-staffing.jpg',
    color: '#82C93A',
  },
  {
    number: '06',
    svg: '/event-services/premium-furniture-rental.svg',
    title: 'Conference Setup & Management',
    desc: 'Complete conference and seminar room setups — furniture, AV systems, staging, podiums, and professional on-ground management for seamless corporate and exhibition-adjacent events.',
    features: [
      'Conference furniture & staging',
      'AV systems & screen setup',
      'Podiums, panels & signage',
      'Full event-day management',
    ],
    img: '/services/premium-furniture-rental.jpg',
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
            return (
              <div
                key={number}
                className={`py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isOdd ? '' : 'lg:[&>*:first-child]:order-last'}`}
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

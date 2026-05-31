'use client';

import Image from 'next/image';
import Link from 'next/link';
import { IconCheck, IconArrowRight } from '@tabler/icons-react';

const SERVICES = [
  {
    number: '01',
    svg: '/event-services/exhibition-shell-scheme-solutions.svg',
    title: 'Exhibition Shell Scheme Solutions',
    desc: 'Standard and fully customized booth construction for trade shows and exhibitions. From single-storey standard setups to complex double-decker structures — built to your brand specifications.',
    features: [
      'Standard & custom booth sizes',
      'Double-storey structures available',
      'Fascia boards with branding',
      'Modular & reusable systems',
    ],
    img: '/services/exhibition-shell-scheme-solutions.jpg',
    color: '#2B9E7C',
  },
  {
    number: '02',
    svg: '/event-services/premium-furniture-rental.svg',
    title: 'Premium Furniture Rental',
    desc: 'Modern and elegant furniture solutions for exhibition stands, conferences, and corporate events. Chairs, tables, counters, sofas, and display plinths available for rental across Mumbai and India.',
    features: [
      'Wide range of modern styles',
      'Conference & lounge furniture',
      'Display counters & plinths',
      'Pan India delivery & pickup',
    ],
    img: '/services/premium-furniture-rental.jpg',
    color: '#3BA882',
  },
  {
    number: '03',
    svg: '/event-services/carpeting-services.svg',
    title: 'Carpeting Services',
    desc: 'High-quality flooring and carpeting options for exhibition stands and event venues. Available in a variety of colors, textures, and finishes to match your brand identity and exhibition theme.',
    features: [
      'Multiple colors & textures',
      'Cut & loop pile options',
      'Anti-slip underlay included',
      'Quick installation & removal',
    ],
    img: '/services/carpeting-services.jpg',
    color: '#52B48A',
  },
  {
    number: '04',
    svg: '/event-services/branding-graphics.svg',
    title: 'Branding & Graphics',
    desc: 'End-to-end branding solutions including large-format printing, vinyl graphics, LED-lit backdrops, signage, and custom promotional displays that make your exhibition stand unmissable.',
    features: [
      'Large format digital printing',
      'Vinyl wraps & wall graphics',
      'LED-lit backdrops & signage',
      'Custom promotional displays',
    ],
    img: '/services/branding-graphics.jpg',
    color: '#6BBF92',
  },
  {
    number: '05',
    svg: '/event-services/temporary-staffing.svg',
    title: 'Temporary Staffing',
    desc: 'Professional, well-trained event staff for your exhibition — hostesses, brand promoters, registration desk personnel, crowd managers, and general support teams across all major venues.',
    features: [
      'Trained hostesses & promoters',
      'Registration desk teams',
      'Crowd & floor management',
      'Multilingual staff available',
    ],
    img: '/services/temporary-staffing.jpg',
    color: '#82C93A',
  },
  {
    number: '06',
    svg: '/event-services/product-display-solutions.svg',
    title: 'Product Display Solutions',
    desc: 'Innovative and eye-catching product display units, merchandising setups, and showcase systems designed to highlight your products and drive engagement on the exhibition floor.',
    features: [
      'Custom display unit fabrication',
      'Lit & backlit showcase options',
      'Modular merchandising systems',
      'Interactive display solutions',
    ],
    img: '/services/product-display-solutions.jpg',
    color: '#8AC63F',
  },
];

export default function ServicesDetailed() {
  return (
    <section className="bg-white py-14 md:py-20 px-6">
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

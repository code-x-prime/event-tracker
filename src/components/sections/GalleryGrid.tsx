'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IconTag, IconArrowRight } from '@tabler/icons-react';

const TABS = ['All', 'Shell Scheme', 'Branding', 'Furniture', 'Carpeting'];

const GALLERY_ITEMS = [
  {
    title: 'Shell Scheme — Auto Expo 2024',
    category: 'Shell Scheme',
    img: '/gallery/shell-scheme-auto-expo-2024.jpg',
    colSpan: 'lg:col-span-2',
    rowSpan: 'lg:row-span-2',
  },
  {
    title: 'Full Branding — IIMTF Mumbai',
    category: 'Branding',
    img: '/gallery/full-branding-IIMTF-mumbai.jpg',
    colSpan: 'lg:col-span-1',
    rowSpan: 'lg:row-span-1',
  },
  {
    title: 'Luxury Furniture Setup',
    category: 'Furniture',
    img: '/gallery/luxury-furniture-setup.jpg',
    colSpan: 'lg:col-span-1',
    rowSpan: 'lg:row-span-1',
  },
  {
    title: 'Product Display — FMCG Expo',
    category: 'Carpeting',
    img: '/gallery/product-display-fmcg-expo.jpg',
    colSpan: 'lg:col-span-1',
    rowSpan: 'lg:row-span-1',
  },
  {
    title: 'Signage & Backdrops',
    category: 'Branding',
    img: '/gallery/signage-backdrops.jpg',
    colSpan: 'lg:col-span-2',
    rowSpan: 'lg:row-span-1',
  },
  {
    title: 'Double-Storey Shell — Pragati',
    category: 'Shell Scheme',
    img: '/gallery/double-storey-shell-pragati.jpg',
    colSpan: 'lg:col-span-1',
    rowSpan: 'lg:row-span-2',
  },
  {
    title: 'Carpet + Flooring — BKC Expo',
    category: 'Carpeting',
    img: '/gallery/carpet-flooring-bkc-expo.jpg',
    colSpan: 'lg:col-span-1',
    rowSpan: 'lg:row-span-1',
  },
  {
    title: 'Conference Furniture Rental',
    category: 'Furniture',
    img: '/gallery/conference-furniture-rental.jpg',
    colSpan: 'lg:col-span-1',
    rowSpan: 'lg:row-span-1',
  },
  {
    title: 'Premium Carpeting — SECC',
    category: 'Carpeting',
    img: '/gallery/premium-carpeting-SECC.jpg',
    colSpan: 'lg:col-span-1',
    rowSpan: 'lg:row-span-1',
  },
];

export default function GalleryGrid() {
  const [activeTab, setActiveTab] = useState('All');

  const filtered =
    activeTab === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((i) => i.category === activeTab);

  return (
    <section style={{ background: '#F7F9F7' }} className="py-14 md:py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center">
          <p className="font-sans text-xs uppercase tracking-[0.3em]" style={{ color: '#2B9E7C' }}>
            Our Work
          </p>
          <h2 className="font-display font-bold text-3xl lg:text-5xl mt-2" style={{ color: '#1A1A1A' }}>
            Exhibition Setups That Speak Volumes
          </h2>
          <p className="font-sans text-base max-w-xl mx-auto mt-3 leading-relaxed" style={{ color: '#555555' }}>
            A glimpse into our executed projects — from shell schemes to full branded exhibition environments.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mt-10 mb-10">
          {TABS.map((tab) => {
            const active = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="font-sans text-sm font-medium px-5 py-2 rounded-full transition-all duration-200 cursor-pointer"
                style={{
                  background: active ? 'linear-gradient(90deg,#2B9E7C,#8AC63F)' : '#fff',
                  color: active ? '#fff' : '#555555',
                  border: active ? '1.5px solid transparent' : '1.5px solid #E2EAE2',
                }}
                onMouseEnter={(e) => {
                  if (!active) {
                    const el = e.currentTarget as HTMLButtonElement;
                    el.style.borderColor = '#2B9E7C';
                    el.style.color = '#2B9E7C';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    const el = e.currentTarget as HTMLButtonElement;
                    el.style.borderColor = '#E2EAE2';
                    el.style.color = '#555555';
                  }
                }}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" style={{ gridAutoRows: '220px' }}>
          {filtered.map((item) => (
            <GalleryCard key={item.title} {...item} />
          ))}
        </div>

        {/* Bottom link */}
        <div className="mt-10 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 font-sans font-semibold text-sm transition-all duration-200 group"
            style={{ color: '#2B9E7C' }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#8AC63F')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#2B9E7C')}
          >
            View Full Gallery
            <IconArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function GalleryCard({
  title,
  category,
  img,
  colSpan,
  rowSpan,
}: {
  title: string;
  category: string;
  img: string;
  colSpan: string;
  rowSpan: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-2xl cursor-pointer ${colSpan} ${rowSpan}`}
      style={{
        minHeight: '220px',
        transform: hovered ? 'scale(1.02)' : 'scale(1)',
        transition: 'transform 0.35s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <Image
        src={img}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />

      {/* Dark base overlay for readability */}
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.25)' }} />

      {/* Category badge */}
      <div className="absolute top-4 right-4 z-10">
        <span
          className="font-sans text-xs uppercase px-2 py-1 rounded-md"
          style={{ background: 'rgba(0,0,0,0.4)', color: 'rgba(255,255,255,0.8)' }}
        >
          {category}
        </span>
      </div>

      {/* Hover overlay */}
      <div
        className="absolute inset-0 flex flex-col justify-end transition-opacity duration-300 z-10"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)',
          opacity: hovered ? 1 : 0,
        }}
      >
        <div className="px-5 pb-5">
          <p className="font-display font-semibold text-lg text-white leading-snug">{title}</p>
          <span className="flex items-center gap-1 mt-1">
            <IconTag size={12} color="rgba(255,255,255,0.6)" />
            <span className="font-sans text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>
              {category}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

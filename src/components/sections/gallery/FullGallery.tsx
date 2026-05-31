'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  IconMaximize,
  IconX,
  IconChevronLeft,
  IconChevronRight,
  IconTag,
} from '@tabler/icons-react';

const TABS = [
  'All',
  'Shell Scheme',
  'Branding & Graphics',
  'Furniture',
  'Carpeting',
  'Staffing',
  'Product Display',
];

const GALLERY_ITEMS = [
  { id: 1, title: 'Double Storey Shell — Auto Expo Mumbai', cat: 'Shell Scheme', span: 'lg:col-span-2 lg:row-span-2', img: '/gallery/shell-scheme-auto-expo-2024.jpg' },
  { id: 2, title: 'Modular Booth — BKC Trade Fair', cat: 'Shell Scheme', span: 'lg:col-span-1 lg:row-span-1', img: '/gallery/double-storey-shell-pragati.jpg' },
  { id: 3, title: 'Vinyl Wrap Branding — SECC', cat: 'Branding & Graphics', span: 'lg:col-span-1 lg:row-span-1', img: '/gallery/full-branding-IIMTF-mumbai.jpg' },
  { id: 4, title: 'LED Backdrop — IIMTF 2024', cat: 'Branding & Graphics', span: 'lg:col-span-1 lg:row-span-2', img: '/gallery/signage-backdrops.jpg' },
  { id: 5, title: 'Conference Furniture — Bombay Expo', cat: 'Furniture', span: 'lg:col-span-1 lg:row-span-1', img: '/gallery/conference-furniture-rental.jpg' },
  { id: 6, title: 'Lounge Setup — Pragati Maidan', cat: 'Furniture', span: 'lg:col-span-1 lg:row-span-1', img: '/gallery/luxury-furniture-setup.jpg' },
  { id: 7, title: 'Premium Carpet — Auto Components Expo', cat: 'Carpeting', span: 'lg:col-span-1 lg:row-span-1', img: '/gallery/premium-carpeting-SECC.jpg' },
  { id: 8, title: 'Multi-Color Flooring — Retail Expo', cat: 'Carpeting', span: 'lg:col-span-2 lg:row-span-1', img: '/gallery/carpet-flooring-bkc-expo.jpg' },
  { id: 9, title: 'Promoter Team — FMCG Expo 2024', cat: 'Staffing', span: 'lg:col-span-1 lg:row-span-1', img: '/gallery/product-display-fmcg-expo.jpg' },
  { id: 10, title: 'Registration Desk — Tech Summit', cat: 'Staffing', span: 'lg:col-span-1 lg:row-span-1', img: '/gallery/shell-scheme-auto-expo-2024.jpg' },
  { id: 11, title: 'Product Showcase — Consumer Electronics', cat: 'Product Display', span: 'lg:col-span-1 lg:row-span-2', img: '/gallery/product-display-fmcg-expo.jpg' },
  { id: 12, title: 'Backlit Display Unit — Pharma Expo', cat: 'Product Display', span: 'lg:col-span-1 lg:row-span-1', img: '/gallery/full-branding-IIMTF-mumbai.jpg' },
  { id: 13, title: 'Custom Shell — Jewellery Show Mumbai', cat: 'Shell Scheme', span: 'lg:col-span-1 lg:row-span-1', img: '/gallery/double-storey-shell-pragati.jpg' },
  { id: 14, title: 'Fascia Board Branding — Food Expo', cat: 'Branding & Graphics', span: 'lg:col-span-2 lg:row-span-1', img: '/gallery/signage-backdrops.jpg' },
  { id: 15, title: 'Plinth & Counter Rental — B2B Summit', cat: 'Furniture', span: 'lg:col-span-1 lg:row-span-1', img: '/gallery/luxury-furniture-setup.jpg' },
  { id: 16, title: 'Loop Carpet — Real Estate Expo', cat: 'Carpeting', span: 'lg:col-span-1 lg:row-span-1', img: '/gallery/carpet-flooring-bkc-expo.jpg' },
  { id: 17, title: 'Hostess Team — Automobile Show', cat: 'Staffing', span: 'lg:col-span-1 lg:row-span-1', img: '/gallery/conference-furniture-rental.jpg' },
  { id: 18, title: 'Interactive Display — Ed-Tech Expo', cat: 'Product Display', span: 'lg:col-span-1 lg:row-span-1', img: '/gallery/product-display-fmcg-expo.jpg' },
];

type GalleryItem = typeof GALLERY_ITEMS[number];

export default function FullGallery() {
  const [activeTab, setActiveTab] = useState('All');
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  const filtered = activeTab === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((i) => i.cat === activeTab);

  const selectedIdx = selected ? filtered.findIndex((i) => i.id === selected.id) : -1;

  const prev = () => {
    if (selectedIdx > 0) setSelected(filtered[selectedIdx - 1]);
  };
  const next = () => {
    if (selectedIdx < filtered.length - 1) setSelected(filtered[selectedIdx + 1]);
  };

  return (
    <section className="bg-white py-14 md:py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
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

        {/* Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          style={{ gridAutoRows: '220px' }}
        >
          {filtered.map((item) => (
            <GalleryCard
              key={item.id}
              item={item}
              onClick={() => setSelected(item)}
            />
          ))}
        </div>

        {/* Count */}
        <p className="text-center font-sans text-sm mt-8" style={{ color: '#555555' }}>
          Showing <span style={{ color: '#2B9E7C', fontWeight: 600 }}>{filtered.length}</span> projects
        </p>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ background: 'rgba(0,0,0,0.9)' }}
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setSelected(null)}
              className="absolute -top-14 right-0 w-11 h-11 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
              style={{ background: 'rgba(255,255,255,0.1)' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = 'linear-gradient(135deg,#2B9E7C,#8AC63F)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.1)';
              }}
            >
              <IconX size={18} />
            </button>

            {/* Lightbox image */}
            <div className="relative w-full rounded-2xl overflow-hidden mb-5" style={{ minHeight: 340 }}>
              <Image src={selected.img} alt={selected.title} fill className="object-cover" sizes="100vw" />
              <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.2)' }} />
            </div>

            {/* Info */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display font-semibold text-2xl text-white mb-1">
                  {selected.title}
                </h3>
                <span className="flex items-center gap-1.5">
                  <IconTag size={12} color="#8AC63F" />
                  <span className="font-sans text-sm" style={{ color: '#8AC63F' }}>
                    {selected.cat}
                  </span>
                </span>
              </div>

              {/* Prev / Next */}
              <div className="flex gap-2 flex-shrink-0">
                <button
                  onClick={prev}
                  disabled={selectedIdx === 0}
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white transition-all duration-200 disabled:opacity-30"
                  style={{ background: 'rgba(255,255,255,0.1)' }}
                  onMouseEnter={(e) => {
                    if (selectedIdx > 0) (e.currentTarget as HTMLButtonElement).style.background = 'linear-gradient(135deg,#2B9E7C,#8AC63F)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.1)';
                  }}
                >
                  <IconChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  disabled={selectedIdx === filtered.length - 1}
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white transition-all duration-200 disabled:opacity-30"
                  style={{ background: 'rgba(255,255,255,0.1)' }}
                  onMouseEnter={(e) => {
                    if (selectedIdx < filtered.length - 1) (e.currentTarget as HTMLButtonElement).style.background = 'linear-gradient(135deg,#2B9E7C,#8AC63F)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.1)';
                  }}
                >
                  <IconChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function GalleryCard({ item, onClick }: { item: GalleryItem; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-2xl cursor-pointer ${item.span}`}
      style={{
        minHeight: 220,
        transform: hovered ? 'scale(1.02)' : 'scale(1)',
        transition: 'transform 0.35s ease',
      }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Real image */}
      <Image
        src={item.img}
        alt={item.title}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />

      {/* Base dark overlay */}
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.25)' }} />

      {/* Category badge */}
      <div className="absolute top-4 right-4 z-10">
        <span
          className="font-sans text-xs uppercase px-2 py-1 rounded-md"
          style={{ background: 'rgba(0,0,0,0.4)', color: 'rgba(255,255,255,0.8)' }}
        >
          {item.cat}
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
        <div className="px-5 pb-5 flex items-end justify-between gap-3">
          <div>
            <p className="font-display font-semibold text-lg text-white leading-snug">
              {item.title}
            </p>
            <span className="flex items-center gap-1 mt-1">
              <IconTag size={11} color="rgba(255,255,255,0.6)" />
              <span className="font-sans text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>
                {item.cat}
              </span>
            </span>
          </div>
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: 'rgba(255,255,255,0.2)' }}
          >
            <IconMaximize size={14} color="#fff" />
          </div>
        </div>
      </div>
    </div>
  );
}

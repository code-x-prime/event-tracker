'use client';

import { Suspense, useState, useEffect } from 'react';
import Link from 'next/link';
import { IconArrowRight, IconMaximize } from '@tabler/icons-react';
import { ImageLightbox } from '@/components/ui/ImageLightbox';
import { MasonryGrid } from '@/components/ui/image-testimonial-grid';
import { GALLERY_SHOWS } from '@/lib/image-index';

export default function GalleryGrid() {
  const [activeTab, setActiveTab] = useState(0);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [columns, setColumns] = useState(3);

  const getColumns = (width: number) => {
    if (width < 640) return 1;
    if (width < 1024) return 2;
    return 3;
  };

  useEffect(() => {
    const handleResize = () => setColumns(getColumns(window.innerWidth));
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const show = GALLERY_SHOWS[activeTab];
  // home preview: 8 visually distinct images (handpicked, no near-duplicates)
  const PREVIEW_PICKS: Record<string, string[]> = {
    'nse-imma': [
      '/gallery/1000084960.jpg',
      '/gallery/1000084963.jpg',
      '/gallery/1000084965.jpg',
      '/gallery/1000084967.jpg',
      '/gallery/1000084973.jpg',
      '/gallery/1000084983.jpg',
      '/gallery/1000084986.jpg',
      '/gallery/1000085004.jpg',
    ],
  };
  const previewImages = PREVIEW_PICKS[show.id] ?? show.images.slice(0, 8);

  return (
    <section style={{ background: '#F7F9F7' }} className="py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8">
          <p className="font-sans text-xs uppercase tracking-[0.3em]" style={{ color: '#2B9E7C' }}>
            Our Work
          </p>
          <h2 className="font-display font-bold text-3xl lg:text-5xl mt-2" style={{ color: '#1A1A1A' }}>
            Exhibition Setups That Speak Volumes
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {GALLERY_SHOWS.map((s, i) => {
            const isActive = i === activeTab;
            return (
              <button
                key={s.id}
                onClick={() => { setActiveTab(i); setLightboxIdx(null); }}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-sans text-sm font-semibold transition-all duration-200"
                style={{
                  background: isActive
                    ? 'linear-gradient(135deg,#1A2B4A,#0D1B30)'
                    : '#fff',
                  color: isActive ? '#fff' : '#555',
                  border: isActive ? 'none' : '1.5px solid #E2EAE2',
                  boxShadow: isActive ? '0 2px 12px rgba(26,43,74,0.18)' : 'none',
                }}
              >
                {isActive && (
                  <span
                    className="font-sans text-xs uppercase tracking-[0.2em] font-semibold"
                    style={{ color: '#8AC63F' }}
                  >
                    Show
                  </span>
                )}
                {s.label}
              </button>
            );
          })}
        </div>

        {/* Gallery grid */}
        <Suspense fallback={<div className="h-[420px] rounded-2xl bg-[#E2EAE2] animate-pulse" />}>
          <MasonryGrid columns={columns} gap={8}>
            {previewImages.map((img, i) => (
              <GalleryCard key={img} img={img} onClick={() => setLightboxIdx(i)} />
            ))}
          </MasonryGrid>
        </Suspense>

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

      {lightboxIdx !== null && (
        <ImageLightbox
          images={previewImages}
          initialIndex={lightboxIdx}
          onClose={() => setLightboxIdx(null)}
        />
      )}
    </section>
  );
}

function GalleryCard({ img, onClick }: { img: string; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-2xl cursor-pointer group mb-2"
      style={{
        width: '100%',
        transform: hovered ? 'scale(1.02)' : 'scale(1)',
        transition: 'transform 0.35s ease',
      }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={img}
        alt="Event Tracker project"
        className="w-full h-auto object-cover"
        loading="lazy"
      />
      <div
        className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
        style={{ background: 'rgba(0,0,0,0.3)', opacity: hovered ? 1 : 0 }}
      >
        <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.2)' }}>
          <IconMaximize size={18} color="#fff" />
        </div>
      </div>
    </div>
  );
}

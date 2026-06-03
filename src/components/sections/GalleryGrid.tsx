'use client';

import { Suspense, useState, useEffect } from 'react';
import Link from 'next/link';
import { IconArrowRight, IconMaximize } from '@tabler/icons-react';
import { ImageLightbox } from '@/components/ui/ImageLightbox';
import { MasonryGrid } from '@/components/ui/image-testimonial-grid';

// 8 visually distinct images for home preview (no duplicates)
const HOME_IMAGES = [
  '/gallery/1000084979.jpg',
  '/gallery/1000084965.jpg',
  '/gallery/1000084970.jpg',
  '/gallery/1000084971.jpg',
  '/gallery/1000084973.jpg',
  '/gallery/1000084986.jpg',
  '/gallery/1000084988.jpg',
  '/gallery/1000085004.jpg',
];

const GALLERY_ITEMS = HOME_IMAGES.map((img) => ({ img }));

const IMAGES = GALLERY_ITEMS.map((i) => i.img);

export default function GalleryGrid() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [columns, setColumns] = useState(3);

  // Determine columns based on screen width
  const getColumns = (width: number) => {
    if (width < 640) return 1;    // sm: single column for mobile
    if (width < 1024) return 2;   // md/lg: two columns for tablet
    return 3;                     // xl and up: three columns for desktop
  };

  useEffect(() => {
    const handleResize = () => {
      setColumns(getColumns(window.innerWidth));
    };

    handleResize(); // Set initial columns on mount

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section style={{ background: '#F7F9F7' }} className="py-14 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="font-sans text-xs uppercase tracking-[0.3em]" style={{ color: '#2B9E7C' }}>
            Our Work
          </p>
          <h2 className="font-display font-bold text-3xl lg:text-5xl mt-2" style={{ color: '#1A1A1A' }}>
            Exhibition Setups That Speak Volumes
          </h2>
          <div className="inline-flex items-center gap-2 mt-4 px-5 py-2 rounded-full" style={{ background: 'linear-gradient(135deg, #1A2B4A 0%, #0D1B30 100%)', boxShadow: '0 2px 12px rgba(26,43,74,0.18)' }}>
            <span className="font-sans text-xs uppercase tracking-[0.25em] font-semibold" style={{ color: '#8AC63F' }}>Show</span>
            <span className="w-px h-3 inline-block" style={{ background: 'rgba(255,255,255,0.25)' }} />
            <span className="font-display font-bold text-sm tracking-wide" style={{ color: '#FFFFFF' }}>NSE / IMMA</span>
          </div>
        </div>

        {/* Gallery grid using Masonry layout */}
        <Suspense fallback={<div className="h-[420px] rounded-2xl bg-[#E2EAE2] animate-pulse" />}>
          <MasonryGrid columns={columns} gap={8}>
            {GALLERY_ITEMS.map((item, i) => (
              <GalleryCard key={i} img={item.img} onClick={() => setLightboxIdx(i)} />
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
          images={IMAGES}
          initialIndex={lightboxIdx}
          onClose={() => setLightboxIdx(null)}
        />
      )}
    </section>
  );
}

function GalleryCard({
  img,
  onClick,
}: {
  img: string;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-2xl cursor-pointer group mb-6"
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

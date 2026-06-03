'use client';

import { Suspense, useState, useEffect } from 'react';
import Link from 'next/link';
import { IconArrowRight, IconMaximize } from '@tabler/icons-react';
import { ImageLightbox } from '@/components/ui/ImageLightbox';
import { MasonryGrid } from '@/components/ui/image-testimonial-grid';
import { GALLERY_IMAGES } from '@/lib/image-index';

const HOME_IMAGES = GALLERY_IMAGES;

export default function GalleryGrid() {
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

  return (
    <section style={{ background: '#F7F9F7' }} className="py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="font-sans text-xs uppercase tracking-[0.3em]" style={{ color: '#2B9E7C' }}>
            Our Work
          </p>
          <h2 className="font-display font-bold text-3xl lg:text-5xl mt-2" style={{ color: '#1A1A1A' }}>
            Exhibition Setups That Speak Volumes
          </h2>
        </div>

        {/* Gallery grid */}
        <Suspense fallback={<div className="h-[420px] rounded-2xl bg-[#E2EAE2] animate-pulse" />}>
          <MasonryGrid columns={columns} gap={8}>
            {HOME_IMAGES.map((img, i) => (
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
          images={HOME_IMAGES}
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

'use client';

import { useState, useEffect } from 'react';
import { IconMaximize } from '@tabler/icons-react';
import { ImageLightbox } from '@/components/ui/ImageLightbox';
import { GALLERY_IMAGES } from '@/lib/image-index';
import { MasonryGrid } from '@/components/ui/image-testimonial-grid';

export default function FullGallery() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [columns, setColumns] = useState(3);

  const imagesList: string[] = [...GALLERY_IMAGES];

  // Determine column layout based on screen width
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
    <section className="bg-white py-14 md:py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-2 px-5 py-2 rounded-full" style={{ background: 'linear-gradient(135deg, #1A2B4A 0%, #0D1B30 100%)', boxShadow: '0 2px 12px rgba(26,43,74,0.18)' }}>
            <span className="font-sans text-xs uppercase tracking-[0.25em] font-semibold" style={{ color: '#8AC63F' }}>Show</span>
            <span className="w-px h-3 inline-block" style={{ background: 'rgba(255,255,255,0.25)' }} />
            <span className="font-display font-bold text-sm tracking-wide" style={{ color: '#FFFFFF' }}>NSE / IMMA</span>
          </div>
        </div>

        <MasonryGrid columns={columns} gap={5}>
          {imagesList.map((src, idx) => (
            <GalleryCard
              key={idx}
              src={src}
              onClick={() => setLightboxIdx(idx)}
            />
          ))}
        </MasonryGrid>
      </div>

      {lightboxIdx !== null && (
        <ImageLightbox
          images={imagesList}
          initialIndex={lightboxIdx}
          onClose={() => setLightboxIdx(null)}
        />
      )}
    </section>
  );
}

function GalleryCard({
  src,
  onClick,
}: {
  src: string;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-2xl cursor-pointer group mb-5"
      style={{
        width: '100%',
        transform: hovered ? 'scale(1.02)' : 'scale(1)',
        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        boxShadow: hovered ? '0 12px 30px rgba(0, 0, 0, 0.15)' : 'none',
      }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={src}
        alt="Event Setup"
        className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        loading="lazy"
      />
      
      {/* Visual Hover Overlay (zoom icon only, no text) */}
      <div
        className="absolute inset-0 flex items-center justify-center transition-all duration-300"
        style={{
          background: 'rgba(0, 0, 0, 0.35)',
          opacity: hovered ? 1 : 0,
        }}
      >
        <div className="w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-300 scale-90 group-hover:scale-100" style={{ background: 'rgba(255, 255, 255, 0.25)', backdropFilter: 'blur(4px)' }}>
          <IconMaximize size={20} color="#fff" />
        </div>
      </div>
    </div>
  );
}

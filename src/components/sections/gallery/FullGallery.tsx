'use client';

import { useState, useEffect } from 'react';
import { IconMaximize } from '@tabler/icons-react';
import { ImageLightbox } from '@/components/ui/ImageLightbox';
import { GALLERY_SHOWS } from '@/lib/image-index';
import { MasonryGrid } from '@/components/ui/image-testimonial-grid';

export default function FullGallery() {
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
  const images = show.images;

  return (
    <section className="bg-white py-12 md:py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8">
          <p className="font-sans text-xs uppercase tracking-[0.3em] mb-2" style={{ color: '#2B9E7C' }}>
            Portfolio
          </p>
          <h1 className="font-display font-bold text-3xl lg:text-5xl" style={{ color: '#1A1A1A' }}>
            Our Exhibition Gallery
          </h1>
          <p className="font-sans text-sm mt-3 max-w-lg mx-auto" style={{ color: '#666' }}>
            Real setups. Real events. Real results across India&apos;s top trade shows and exhibitions.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {GALLERY_SHOWS.map((s, i) => {
            const isActive = i === activeTab;
            return (
              <button
                key={s.id}
                onClick={() => { setActiveTab(i); setLightboxIdx(null); }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-sans text-sm font-semibold transition-all duration-200"
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
                <span
                  className="font-sans text-xs rounded-full px-2 py-0.5"
                  style={{
                    background: isActive ? 'rgba(255,255,255,0.15)' : '#F0F4F0',
                    color: isActive ? '#8AC63F' : '#888',
                  }}
                >
                  {s.images.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <MasonryGrid columns={columns} gap={6}>
          {images.map((src, idx) => (
            <GalleryCard
              key={src}
              src={src}
              onClick={() => setLightboxIdx(idx)}
            />
          ))}
        </MasonryGrid>
      </div>

      {lightboxIdx !== null && (
        <ImageLightbox
          images={images}
          initialIndex={lightboxIdx}
          onClose={() => setLightboxIdx(null)}
        />
      )}
    </section>
  );
}

function GalleryCard({ src, onClick }: { src: string; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-2xl cursor-pointer group mb-2"
      style={{
        width: '100%',
        transform: hovered ? 'scale(1.02)' : 'scale(1)',
        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        boxShadow: hovered ? '0 12px 30px rgba(0,0,0,0.15)' : 'none',
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
      <div
        className="absolute inset-0 flex items-center justify-center transition-all duration-300"
        style={{ background: 'rgba(0,0,0,0.35)', opacity: hovered ? 1 : 0 }}
      >
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-300 scale-90 group-hover:scale-100"
          style={{ background: 'rgba(255,255,255,0.25)', backdropFilter: 'blur(4px)' }}
        >
          <IconMaximize size={20} color="#fff" />
        </div>
      </div>
    </div>
  );
}

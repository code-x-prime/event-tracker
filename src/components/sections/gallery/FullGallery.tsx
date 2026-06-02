'use client';

import { useState } from 'react';
import Image from 'next/image';
import { IconMaximize } from '@tabler/icons-react';
import { ImageLightbox } from '@/components/ui/ImageLightbox';
import { GALLERY_IMAGES } from '@/lib/image-index';

export default function FullGallery() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  // List of image paths
  const imagesList: string[] = [...GALLERY_IMAGES];

  return (
    <section className="bg-white py-14 md:py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Gallery grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          style={{ gridAutoRows: '240px' }}
        >
          {imagesList.map((src, idx) => (
            <GalleryCard
              key={idx}
              src={src}
              onClick={() => setLightboxIdx(idx)}
            />
          ))}
        </div>
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
      className="relative overflow-hidden rounded-2xl cursor-pointer group"
      style={{
        height: '100%',
        transform: hovered ? 'scale(1.02)' : 'scale(1)',
        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        boxShadow: hovered ? '0 12px 30px rgba(0, 0, 0, 0.15)' : 'none',
      }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={src}
        alt="Event Setup"
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        loading="lazy"
        quality={80}
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

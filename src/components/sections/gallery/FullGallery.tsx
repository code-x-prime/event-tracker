'use client';

import { useState } from 'react';
import Image from 'next/image';
import { IconMaximize } from '@tabler/icons-react';
import { ImageLightbox } from '@/components/ui/ImageLightbox';
import { GALLERY_IMAGES } from '@/lib/image-index';

const SPANS = [
  'lg:col-span-2 lg:row-span-2',
  'lg:col-span-1 lg:row-span-1',
  'lg:col-span-1 lg:row-span-1',
  'lg:col-span-1 lg:row-span-1',
  'lg:col-span-2 lg:row-span-1',
  'lg:col-span-1 lg:row-span-2',
  'lg:col-span-1 lg:row-span-1',
  'lg:col-span-1 lg:row-span-1',
  'lg:col-span-1 lg:row-span-1',
  'lg:col-span-2 lg:row-span-1',
  'lg:col-span-1 lg:row-span-1',
  'lg:col-span-1 lg:row-span-2',
  'lg:col-span-1 lg:row-span-1',
  'lg:col-span-1 lg:row-span-1',
  'lg:col-span-2 lg:row-span-1',
  'lg:col-span-1 lg:row-span-1',
  'lg:col-span-1 lg:row-span-1',
  'lg:col-span-1 lg:row-span-1',
  'lg:col-span-1 lg:row-span-1',
];

const GALLERY_ITEMS = GALLERY_IMAGES.map((img, i) => ({ id: i + 1, img, span: SPANS[i] }));

const IMAGES = GALLERY_ITEMS.map((i) => i.img);

export default function FullGallery() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  return (
    <section className="bg-white py-14 md:py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          style={{ gridAutoRows: '220px' }}
        >
          {GALLERY_ITEMS.map((item, i) => (
            <GalleryCard key={item.id} item={item} onClick={() => setLightboxIdx(i)} />
          ))}
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
  item,
  onClick,
}: {
  item: typeof GALLERY_ITEMS[number];
  onClick: () => void;
}) {
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
      <Image
        src={item.img}
        alt="Event Tracker project"
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        loading="lazy"
        quality={85}
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

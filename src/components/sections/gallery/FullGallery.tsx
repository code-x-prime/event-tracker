'use client';

import { useState } from 'react';
import Image from 'next/image';
import { IconMaximize } from '@tabler/icons-react';
import { ImageLightbox } from '@/components/ui/ImageLightbox';

const BASE = 'https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/ecomdata/products/event-traker';

const GALLERY_ITEMS = [
  { id: 1,  span: 'lg:col-span-2 lg:row-span-2', img: `${BASE}/1000084979.jpg` },
  { id: 2,  span: 'lg:col-span-1 lg:row-span-1', img: `${BASE}/1000084960.jpg` },
  { id: 3,  span: 'lg:col-span-1 lg:row-span-1', img: `${BASE}/1000084961.jpg` },
  { id: 4,  span: 'lg:col-span-1 lg:row-span-1', img: `${BASE}/1000084962.jpg` },
  { id: 5,  span: 'lg:col-span-2 lg:row-span-1', img: `${BASE}/1000084965.jpg` },
  { id: 6,  span: 'lg:col-span-1 lg:row-span-2', img: `${BASE}/1000084966.jpg` },
  { id: 7,  span: 'lg:col-span-1 lg:row-span-1', img: `${BASE}/1000084967.jpg` },
  { id: 8,  span: 'lg:col-span-1 lg:row-span-1', img: `${BASE}/1000084968.jpg` },
  { id: 9,  span: 'lg:col-span-1 lg:row-span-1', img: `${BASE}/1000084970.jpg` },
  { id: 10, span: 'lg:col-span-2 lg:row-span-1', img: `${BASE}/1000084971.jpg` },
  { id: 11, span: 'lg:col-span-1 lg:row-span-1', img: `${BASE}/1000084973.jpg` },
  { id: 12, span: 'lg:col-span-1 lg:row-span-2', img: `${BASE}/1000084974.jpg` },
  { id: 13, span: 'lg:col-span-1 lg:row-span-1', img: `${BASE}/1000084982.jpg` },
  { id: 14, span: 'lg:col-span-1 lg:row-span-1', img: `${BASE}/1000084983.jpg` },
  { id: 15, span: 'lg:col-span-2 lg:row-span-1', img: `${BASE}/1000084986.jpg` },
  { id: 16, span: 'lg:col-span-1 lg:row-span-1', img: `${BASE}/1000084988.jpg` },
  { id: 17, span: 'lg:col-span-1 lg:row-span-1', img: `${BASE}/1000084963.jpg` },
  { id: 18, span: 'lg:col-span-1 lg:row-span-1', img: `${BASE}/1000085004.jpg` },
  { id: 19, span: 'lg:col-span-1 lg:row-span-1', img: `${BASE}/1000085009.jpg` },
];

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

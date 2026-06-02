'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IconArrowRight, IconMaximize } from '@tabler/icons-react';
import { ImageLightbox } from '@/components/ui/ImageLightbox';
import { GALLERY_IMAGES } from '@/lib/image-index';

const SPANS = [
  { colSpan: 'lg:col-span-2', rowSpan: 'lg:row-span-2' },
  { colSpan: 'lg:col-span-1', rowSpan: 'lg:row-span-1' },
  { colSpan: 'lg:col-span-1', rowSpan: 'lg:row-span-1' },
  { colSpan: 'lg:col-span-1', rowSpan: 'lg:row-span-1' },
  { colSpan: 'lg:col-span-2', rowSpan: 'lg:row-span-1' },
  { colSpan: 'lg:col-span-1', rowSpan: 'lg:row-span-2' },
  { colSpan: 'lg:col-span-1', rowSpan: 'lg:row-span-1' },
  { colSpan: 'lg:col-span-1', rowSpan: 'lg:row-span-1' },
  { colSpan: 'lg:col-span-1', rowSpan: 'lg:row-span-1' },
  { colSpan: 'lg:col-span-2', rowSpan: 'lg:row-span-1' },
  { colSpan: 'lg:col-span-1', rowSpan: 'lg:row-span-1' },
  { colSpan: 'lg:col-span-1', rowSpan: 'lg:row-span-2' },
  { colSpan: 'lg:col-span-1', rowSpan: 'lg:row-span-1' },
  { colSpan: 'lg:col-span-1', rowSpan: 'lg:row-span-1' },
  { colSpan: 'lg:col-span-2', rowSpan: 'lg:row-span-1' },
  { colSpan: 'lg:col-span-1', rowSpan: 'lg:row-span-1' },
  { colSpan: 'lg:col-span-1', rowSpan: 'lg:row-span-1' },
  { colSpan: 'lg:col-span-1', rowSpan: 'lg:row-span-1' },
  { colSpan: 'lg:col-span-1', rowSpan: 'lg:row-span-1' },
];

const GALLERY_ITEMS = GALLERY_IMAGES.map((img, i) => ({ img, ...SPANS[i] }));

const IMAGES = GALLERY_ITEMS.map((i) => i.img);

export default function GalleryGrid() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  return (
    <section style={{ background: '#F7F9F7' }} className="py-14 md:py-20 px-6">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" style={{ gridAutoRows: '220px' }}>
          {GALLERY_ITEMS.map((item, i) => (
            <GalleryCard key={i} {...item} eager={i < 3} onClick={() => setLightboxIdx(i)} />
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
  colSpan,
  rowSpan,
  onClick,
  eager = false,
}: {
  img: string;
  colSpan: string;
  eager?: boolean;
  rowSpan: string;
  onClick: () => void;
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
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={img}
        alt="Event Tracker project"
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        loading={eager ? 'eager' : 'lazy'}
        quality={70}
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

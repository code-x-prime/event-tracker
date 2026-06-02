import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';
import FullGallery from '@/components/sections/gallery/FullGallery';
import CTABanner from '@/components/sections/CTABanner';

const BASE = 'https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/ecomdata/products/event-traker';

// Prefetch first 6 visible images
const PREFETCH_IMAGES = [
  `${BASE}/1000084979.jpg`,
  `${BASE}/1000084960.jpg`,
  `${BASE}/1000084961.jpg`,
  `${BASE}/1000084962.jpg`,
  `${BASE}/1000084965.jpg`,
  `${BASE}/1000084966.jpg`,
];

export const metadata: Metadata = {
  title: 'Gallery | Event Tracker — Exhibition & Event Infrastructure Mumbai',
  description:
    'View our portfolio of exhibition setups — shell schemes, branding, furniture, carpeting, staffing, and product display solutions across India.',
};

export default function GalleryPage() {
  return (
    <main>
      {/* Prefetch first visible images */}
      {PREFETCH_IMAGES.map((src) => (
        <link key={src} rel="prefetch" as="image" href={src} />
      ))}
      <PageHero
        badge="Our Work in Action"
        title="Project Gallery"
        subtitle="Real exhibitions, real results — a showcase of our setups across India's top trade shows and expos."
        breadcrumb="Gallery"
      />
      <FullGallery />
      <CTABanner />
    </main>
  );
}

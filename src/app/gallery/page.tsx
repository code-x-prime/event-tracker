import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';
import FullGallery from '@/components/sections/gallery/FullGallery';
import CTABanner from '@/components/sections/CTABanner';

export const metadata: Metadata = {
  title: 'Gallery | Event Tracker — Exhibition & Event Infrastructure Mumbai',
  description:
    'View our portfolio of exhibition setups — shell schemes, branding, furniture, carpeting, staffing, and product display solutions across India.',
};

export default function GalleryPage() {
  return (
    <main>
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

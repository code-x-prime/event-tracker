import HeroSection from '@/components/sections/HeroSection';
import ServicesGrid from '@/components/sections/ServicesGrid';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import GalleryGrid from '@/components/sections/GalleryGrid';
import CTABanner from '@/components/sections/CTABanner';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesGrid />
      <WhyChooseUs />
      <GalleryGrid />
      <CTABanner />
    </main>
  );
}

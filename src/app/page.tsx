import HeroSection from '@/components/sections/HeroSection';
import ServicesGrid from '@/components/sections/ServicesGrid';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import ClientsCarousel from '@/components/sections/ClientsCarousel';
import GalleryGrid from '@/components/sections/GalleryGrid';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';
import CTABanner from '@/components/sections/CTABanner';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesGrid />
      <WhyChooseUs />
      <ClientsCarousel />
      <GalleryGrid />
      <TestimonialsCarousel />
      <CTABanner />
    </main>
  );
}


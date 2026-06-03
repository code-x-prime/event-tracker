import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';
import ServicesDetailed from '@/components/sections/services/ServicesDetailed';
import ProcessSteps from '@/components/sections/services/ProcessSteps';
import CTABanner from '@/components/sections/CTABanner';

export const metadata: Metadata = {
  title: 'Services | Event Tracker — Exhibition & Event Infrastructure Mumbai',
  description:
    'Shell scheme, custom stall design & fabrication, branding & graphics, turnkey projects, carpeting services, and conference setup & management. End-to-end exhibition services across India.',
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        badge="End-to-End Exhibition Services"
        title="Our Services"
        subtitle="Everything your exhibition needs — under one roof, delivered with precision across India."
        breadcrumb="Services"
      />
      <ServicesDetailed />
      <ProcessSteps />
      <CTABanner />
    </main>
  );
}

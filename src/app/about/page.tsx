import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';
import CompanyStory from '@/components/sections/about/CompanyStory';
import MissionValues from '@/components/sections/about/MissionValues';
import StatsStrip from '@/components/sections/about/StatsStrip';
import CTABanner from '@/components/sections/CTABanner';

export const metadata: Metadata = {
  title: 'About Us | Event Tracker — Exhibition & Event Infrastructure Mumbai',
  description:
    "Learn about Event Tracker — Mumbai's trusted exhibition and event infrastructure company. End-to-end setup, shell schemes, furniture, branding, and more.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        badge="Mumbai's Exhibition Experts"
        title="About Event Tracker"
        subtitle="Mumbai's trusted partner for end-to-end exhibition setup and event infrastructure services."
        breadcrumb="About Us"
      />
      <CompanyStory />
      <MissionValues />
      <StatsStrip />
      <CTABanner />
    </main>
  );
}

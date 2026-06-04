import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';
import ContactMain from '@/components/sections/contact/ContactMain';
import ContactInfoCards from '@/components/sections/contact/ContactInfoCards';

export const metadata: Metadata = {
  title: 'Contact Us | Event Tracker — Exhibition & Event Infrastructure Mumbai',
  description:
    'Get in touch with Event Tracker for exhibition setup, shell schemes, furniture rental, branding, and staffing services. Call +91 82919 06056 or email info@eventtracker.in.',
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        badge="Let's Work Together"
        title="Contact Us"
        subtitle="Tell us about your exhibition needs and we'll get back to you within 24 hours."
        breadcrumb="Contact Us"
      />
      <ContactMain />
      <ContactInfoCards />
    </main>
  );
}

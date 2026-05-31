import { IconPhone, IconMail, IconMapPin } from '@tabler/icons-react';

const CARDS = [
  {
    icon: IconPhone,
    title: 'Call Us',
    value: '+91 95944 22056',
    sub: 'Mon–Sat, 9 AM – 7 PM',
    href: 'tel:+919594422056',
  },
  {
    icon: IconMail,
    title: 'Email Us',
    value: 'info@eventtracker.in',
    sub: 'We reply within 24 hours',
    href: 'mailto:info@eventtracker.in',
  },
  {
    icon: IconMapPin,
    title: 'Our Location',
    value: 'Mumbai, Maharashtra',
    sub: 'India — Serving Pan India',
    href: 'https://maps.google.com/?q=Mumbai,Maharashtra,India',
  },
];

export default function ContactInfoCards() {
  return (
    <section style={{ background: '#F7F9F7' }} className="py-20 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {CARDS.map(({ icon: Icon, title, value, sub, href }) => (
          <a
            key={title}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="bg-white rounded-2xl p-8 text-center block transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
            style={{ border: '1.5px solid #E2EAE2' }}
          >
            <div
              className="w-[60px] h-[60px] rounded-2xl flex items-center justify-center mx-auto mb-5"
              style={{ background: 'linear-gradient(135deg,#2B9E7C,#8AC63F)' }}
            >
              <Icon size={26} color="#fff" />
            </div>
            <p className="font-sans font-semibold text-sm uppercase tracking-wider mb-2" style={{ color: '#555555' }}>
              {title}
            </p>
            <p className="font-display font-semibold text-base mb-1" style={{ color: '#1A1A1A' }}>
              {value}
            </p>
            <p className="font-sans text-xs" style={{ color: '#555555' }}>
              {sub}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}

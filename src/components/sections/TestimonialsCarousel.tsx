'use client';

import { useRef, useEffect, useState } from 'react';
import { IconChevronLeft, IconChevronRight, IconQuote } from '@tabler/icons-react';

const TESTIMONIALS = [
  {
    name: 'Rajesh Mehta',
    company: 'Ashecontrol Pvt. Limited',
    event: 'Automationexpo 2025',
    quote:
      'Event Tracker delivered an outstanding stall setup at Automationexpo. The fabrication quality and on-time execution were truly impressive. Our brand stood out on the floor.',
    initials: 'RM',
    color: '#2B9E7C',
  },
  {
    name: 'Soumya Roy',
    company: 'SteelTech Industries',
    event: 'AIIFA-STEELEX 2025',
    quote:
      'The team handled everything end-to-end — design, branding, carpeting, and setup. Zero stress for us. We will definitely work with them again at the next expo.',
    initials: 'SR',
    color: '#3BA882',
  },
  {
    name: 'Priya Nair',
    company: 'TechNova Solutions',
    event: 'ReTechCon 2025',
    quote:
      'Fantastic execution. The conference setup was exactly as per our brief, and the team was professional right from planning to dismantling. Highly recommended.',
    initials: 'PN',
    color: '#52B48A',
  },
  {
    name: 'Amit Sharma',
    company: 'PrintVision Ltd.',
    event: 'Pamex 2026',
    quote:
      "Our double-storey stall at Pamex got a lot of attention. Event Tracker's attention to detail and branding quality was exceptional. Great value for the quality delivered.",
    initials: 'AS',
    color: '#6BBF92',
  },
  {
    name: 'Rekha Iyer',
    company: 'GreenBuild Infra',
    event: 'BuildCon Mumbai 2025',
    quote:
      'From concept to completion in just 5 days — remarkable turnaround. The carpeting and furniture rental were top-notch, and the whole stall looked premium.',
    initials: 'RI',
    color: '#8AC63F',
  },
  {
    name: 'Vikram Joshi',
    company: 'AutoDrive Corp.',
    event: 'Auto Expo 2025',
    quote:
      "We've worked with many vendors, but Event Tracker truly stands apart. Their project management is smooth, communication is prompt, and results are always excellent.",
    initials: 'VJ',
    color: '#2B9E7C',
  },
];

export default function TestimonialsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const total = TESTIMONIALS.length;

  // Auto-advance every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 4000);
    return () => clearInterval(timer);
  }, [total]);

  // Scroll track to active card (only scroll the container, not the page)
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[active] as HTMLElement;
    if (card) {
      const cardLeft = card.offsetLeft;
      const cardWidth = card.offsetWidth;
      const trackWidth = track.offsetWidth;
      track.scrollTo({
        left: cardLeft - (trackWidth / 2) + (cardWidth / 2),
        behavior: 'smooth',
      });
    }
  }, [active]);

  const prev = () => setActive((a) => (a - 1 + total) % total);
  const next = () => setActive((a) => (a + 1) % total);

  return (
    <section style={{ background: '#F7F9F7' }} className="py-14 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.3em] mb-2" style={{ color: '#2B9E7C' }}>
              Client Testimonials
            </p>
            <h2 className="font-display font-bold text-3xl lg:text-5xl" style={{ color: '#1A1A1A' }}>
              Industry{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg,#2B9E7C,#8AC63F)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Feedback
              </span>
            </h2>
            <p className="font-sans text-sm mt-2" style={{ color: '#666' }}>
              What our clients say after working with us across India&apos;s top expos.
            </p>
          </div>

          {/* Arrow controls */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={prev}
              aria-label="Previous"
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200"
              style={{ border: '1.5px solid #D0D8D0', background: '#fff', color: '#1A1A1A' }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.borderColor = '#2B9E7C';
                el.style.color = '#2B9E7C';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.borderColor = '#D0D8D0';
                el.style.color = '#1A1A1A';
              }}
            >
              <IconChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200"
              style={{ border: '1.5px solid #D0D8D0', background: '#fff', color: '#1A1A1A' }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.borderColor = '#2B9E7C';
                el.style.color = '#2B9E7C';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.borderColor = '#D0D8D0';
                el.style.color = '#1A1A1A';
              }}
            >
              <IconChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Cards track */}
        <div
          ref={trackRef}
          className="flex gap-5 overflow-x-auto pb-4 py-3"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard
              key={i}
              {...t}
              isActive={i === active}
              onClick={() => setActive(i)}
            />
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === active ? 24 : 8,
                height: 8,
                background: i === active
                  ? 'linear-gradient(90deg,#2B9E7C,#8AC63F)'
                  : '#D0D8D0',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  name,
  company,
  event,
  quote,
  initials,
  color,
  isActive,
  onClick,
}: {
  name: string;
  company: string;
  event: string;
  quote: string;
  initials: string;
  color: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="flex-shrink-0 rounded-2xl p-5 cursor-pointer transition-all duration-400"
      style={{
        width: 320,
        background: isActive ? '#fff' : '#F0F4F0',
        border: `1.5px solid ${isActive ? color : '#E2EAE2'}`,
        boxShadow: isActive ? '0 12px 40px rgba(43,158,124,0.12)' : 'none',
        transform: isActive ? 'translateY(-4px)' : 'translateY(0)',
        opacity: isActive ? 1 : 0.72,
      }}
    >
      {/* Quote icon */}
      <div className="mb-4">
        <IconQuote size={28} style={{ color, opacity: 0.5 }} />
      </div>

      {/* Quote text */}
      <p className="font-sans text-sm leading-relaxed mb-6" style={{ color: '#444' }}>
        &quot;{quote}&quot;
      </p>

      {/* Divider */}
      <div className="h-px w-full mb-5" style={{ background: '#E2EAE2' }} />

      {/* Person */}
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ background: color + '20' }}
        >
          <span className="font-display font-bold text-sm" style={{ color }}>
            {initials}
          </span>
        </div>
        <div>
          <p className="font-display font-semibold text-sm" style={{ color: '#1A1A1A' }}>
            {name}
          </p>
          <p className="font-sans text-xs" style={{ color: '#888' }}>
            {company}
          </p>
          <span
            className="inline-block font-sans text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full mt-1"
            style={{ background: color + '15', color }}
          >
            {event}
          </span>
        </div>
      </div>
    </div>
  );
}

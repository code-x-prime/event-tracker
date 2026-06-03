import Image from 'next/image';
import { IconMapPin } from '@tabler/icons-react';

const REASONS = [
  {
    svg: '/why-choose/experienced-exhibition-team.svg',
    title: 'Experienced Exhibition Team',
    desc: "Seasoned exhibition and event management team with hands-on expertise across India's top trade shows.",
  },
  {
    svg: '/why-choose/timely-project-execution.svg',
    title: 'Timely Project Execution',
    desc: 'Strict deadline adherence and reliable on-site support — delivered on time, every time.',
  },
  {
    svg: '/why-choose/customized-solutions.svg',
    title: 'Customized Solutions',
    desc: "Tailored booth designs and services built precisely around your brand's requirements.",
  },
  {
    svg: '/why-choose/quality-materials-workmanship.svg',
    title: 'Quality Materials & Workmanship',
    desc: 'High-grade materials paired with professional craftsmanship on every project.',
  },
  {
    svg: '/why-choose/cost-effective-excellence.svg',
    title: 'Cost-Effective Excellence',
    desc: 'Competitive pricing with zero compromise on quality or execution standards.',
  },
];

const STATS = [
  { number: '500+', label: 'Events Executed' },
  { number: '200+', label: 'Happy Clients' },
  { number: '15+', label: 'Years Experience' },
  { number: '6', label: 'Core Services' },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-12 md:py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT — Text + Reasons */}
        <div className="order-last lg:order-first">

          {/* Label */}
          <div className="flex items-center gap-3 mb-5">
            <span
              className="block h-[2px] w-8 flex-shrink-0 rounded-full"
              style={{ background: 'linear-gradient(90deg,#2B9E7C,#8AC63F)' }}
            />
            <span
              className="font-sans text-xs uppercase tracking-[0.3em]"
              style={{ color: '#2B9E7C' }}
            >
              Why Choose Us
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-display font-bold text-3xl md:text-5xl leading-tight" style={{ color: '#1A1A1A' }}>
            The Event Tracker
            <br />
            <span
              style={{
                background: 'linear-gradient(90deg,#2B9E7C,#8AC63F)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Difference.
            </span>
          </h2>

          {/* Subtext */}
          <p
            className="font-sans text-base leading-relaxed max-w-md mt-4"
            style={{ color: '#555555' }}
          >
            We don&apos;t just set up exhibitions — we engineer experiences that make
            your brand impossible to ignore.
          </p>

          {/* Reasons */}
          <div className="mt-10 flex flex-col gap-5">
            {REASONS.map(({ svg, title, desc }) => (
              <div key={title} className="flex items-start gap-5">
                <div
                  className="flex-shrink-0 w-[52px] h-[52px] rounded-xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg,#2B9E7C,#8AC63F)' }}
                >
                  <Image src={svg} alt={title} width={28} height={28} style={{ filter: 'brightness(0) invert(1)' }} />
                </div>
                <div>
                  <p className="font-sans font-semibold text-base mb-1" style={{ color: '#1A1A1A' }}>
                    {title}
                  </p>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: '#555555' }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Stats card */}
        <div className="order-first lg:order-last">
          <div
            className="relative overflow-hidden rounded-3xl p-5 sm:p-7 lg:p-10"
            style={{ background: 'linear-gradient(135deg,#0f1a14,#0a2018)' }}
          >
            {/* Glow */}
            <div
              className="absolute pointer-events-none"
              style={{
                width: 300,
                height: 300,
                borderRadius: '50%',
                background: 'radial-gradient(circle,rgba(43,158,124,0.2),transparent)',
                top: -80,
                right: -80,
              }}
            />

            {/* Dot grid */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.05]"
              style={{
                backgroundImage:
                  'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />

            {/* Inner content */}
            <div className="relative z-10">
              <p
                className="font-sans text-xs uppercase tracking-widest mb-8"
                style={{ color: 'rgba(255,255,255,0.4)' }}
              >
                Event Tracker at a Glance
              </p>

              {/* 2×2 stats */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                {STATS.map(({ number, label }) => (
                  <div
                    key={label}
                    className="rounded-xl p-4 sm:p-5"
                    style={{ background: 'rgba(255,255,255,0.05)' }}
                  >
                    <span
                      className="block font-display font-bold text-2xl sm:text-3xl lg:text-4xl"
                      style={{
                        background: 'linear-gradient(90deg,#2B9E7C,#8AC63F)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      {number}
                    </span>
                    <span
                      className="font-sans text-xs uppercase tracking-wider mt-1 block"
                      style={{ color: 'rgba(255,255,255,0.5)' }}
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Divider + tagline */}
              <div
                className="mt-8 pt-6"
                style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
              >
                <div className="flex items-center gap-2">
                  <IconMapPin size={14} color="#2B9E7C" />
                  <span
                    className="font-sans text-sm"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                  >
                    Mumbai, Maharashtra — Serving Pan India
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

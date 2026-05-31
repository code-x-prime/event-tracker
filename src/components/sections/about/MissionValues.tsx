import { IconBulb, IconHeartHandshake, IconStar } from '@tabler/icons-react';

const VALUES = [
  {
    icon: IconBulb,
    title: 'Creative Excellence',
    desc: 'Innovative designs and unique setups that make every exhibition space memorable.',
  },
  {
    icon: IconHeartHandshake,
    title: 'Reliable Execution',
    desc: 'Consistent on-time delivery with professional on-site support from setup to close.',
  },
  {
    icon: IconStar,
    title: 'Client-First Approach',
    desc: "Customized solutions built around each client's exact vision, budget, and goals.",
  },
];

export default function MissionValues() {
  return (
    <section style={{ background: '#F7F9F7' }} className="py-14 md:py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Mission */}
        <div className="text-center mb-16">
          {/* Label */}
          <p className="font-sans text-xs uppercase tracking-[0.3em] mb-3" style={{ color: '#2B9E7C' }}>
            Our Mission
          </p>
          <h2 className="font-display font-bold text-4xl lg:text-5xl mb-8" style={{ color: '#1A1A1A' }}>
            Why We Do What We Do
          </h2>

          {/* Quote block */}
          <div className="relative max-w-3xl mx-auto px-4">
            <span
              className="font-display font-bold absolute -top-8 left-0 leading-none select-none pointer-events-none"
              style={{
                fontSize: '6rem',
                background: 'linear-gradient(90deg,#2B9E7C,#8AC63F)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                opacity: 0.3,
              }}
            >
              &ldquo;
            </span>
            <p
              className="font-display text-xl leading-relaxed mx-auto text-center relative z-10"
              style={{ color: '#2D2D2D', fontStyle: 'italic' }}
            >
              To deliver seamless exhibition and event solutions that enhance brand visibility,
              create engaging visitor experiences, and contribute to the success of every event
              we support.
            </p>
            <span
              className="font-display font-bold absolute -bottom-14 right-0 leading-none select-none pointer-events-none"
              style={{
                fontSize: '6rem',
                background: 'linear-gradient(90deg,#2B9E7C,#8AC63F)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                opacity: 0.3,
              }}
            >
              &rdquo;
            </span>
          </div>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {VALUES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ border: '1px solid #E2EAE2' }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                style={{ background: 'linear-gradient(135deg,#2B9E7C,#8AC63F)' }}
              >
                <Icon size={26} color="#fff" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-3" style={{ color: '#1A1A1A' }}>
                {title}
              </h3>
              <p className="font-sans text-sm leading-relaxed" style={{ color: '#555555' }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

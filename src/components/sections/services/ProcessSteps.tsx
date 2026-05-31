import {
  IconMessageCircle,
  IconRuler,
  IconTools,
  IconRosetteDiscountCheck,
} from '@tabler/icons-react';

const STEPS = [
  {
    num: '01',
    icon: IconMessageCircle,
    title: 'Brief & Consultation',
    desc: 'Share your requirements, venue details, and brand guidelines with us.',
  },
  {
    num: '02',
    icon: IconRuler,
    title: 'Design & Proposal',
    desc: 'We create a customized design and detailed proposal for your approval.',
  },
  {
    num: '03',
    icon: IconTools,
    title: 'Fabrication & Setup',
    desc: 'Our team handles complete fabrication, logistics, and on-site setup.',
  },
  {
    num: '04',
    icon: IconRosetteDiscountCheck,
    title: 'Support & Handover',
    desc: 'On-site support throughout the event, then clean dismantling after.',
  },
];

export default function ProcessSteps() {
  return (
    <section style={{ background: '#F7F9F7' }} className="py-14 md:py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-sans text-xs uppercase tracking-[0.3em] mb-3" style={{ color: '#2B9E7C' }}>
            How We Work
          </p>
          <h2 className="font-display font-bold text-4xl" style={{ color: '#1A1A1A' }}>
            From Brief to Brilliant
          </h2>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Connector line (desktop) */}
          <div
            className="absolute hidden md:block top-6 left-[12.5%] right-[12.5%] h-px border-t-2 border-dashed"
            style={{ borderColor: '#E2EAE2' }}
          />

          {STEPS.map(({ num, icon: Icon, title, desc }) => (
            <div key={num} className="relative text-center p-6">
              {/* Number circle */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-5 relative z-10"
                style={{ background: 'linear-gradient(135deg,#2B9E7C,#8AC63F)' }}
              >
                <span className="font-display font-bold text-base text-white">{num}</span>
              </div>

              {/* Icon */}
              <div className="flex justify-center mb-3">
                <Icon size={24} color="#2B9E7C" />
              </div>

              {/* Title */}
              <p className="font-sans font-semibold text-base mb-2" style={{ color: '#1A1A1A' }}>
                {title}
              </p>

              {/* Desc */}
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

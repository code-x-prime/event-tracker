const STATS = [
  { number: '500+', label: 'Events Executed' },
  { number: '200+', label: 'Happy Clients' },
  { number: '15+', label: 'Years Experience' },
  { number: '6', label: 'Core Services' },
];

export default function StatsStrip() {
  return (
    <section
      className="py-16 px-6"
      style={{ background: 'linear-gradient(90deg, #0f2a1e, #1a1a1a, #0f2a1e)' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map(({ number, label }, i) => (
            <div key={label} className="flex items-center">
              {i > 0 && (
                <div
                  className="hidden md:block w-px h-16 mr-8 flex-shrink-0"
                  style={{ background: 'rgba(255,255,255,0.1)' }}
                />
              )}
              <div className="text-center flex-1">
                <span
                  className="block font-display font-bold text-5xl mb-1"
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
                  className="font-sans text-xs uppercase tracking-[0.2em]"
                  style={{ color: 'rgba(255,255,255,0.5)' }}
                >
                  {label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import {
  IconPhone,
  IconMail,
  IconWorld,
  IconMapPin,
  IconClock,
  IconSend,
  IconCircleCheck,
  IconBrandInstagram,
} from '@tabler/icons-react';

const SERVICES = [
  'Select a Service',
  'Shell Scheme',
  'Custom Stall Design & Fabrication',
  'Branding & Graphics',
  'Turnkey Projects',
  'Carpeting Services',
  'Conference Setup & Management',
  'Multiple Services / Full Setup',
];

const VENUES = [
  'Select Venue',
  'Bombay Exhibition Centre (BEC)',
  'Bandra Kurla Complex (BKC)',
  'Nehru Centre Mumbai',
  'Jio World Convention Centre',
  'Pragati Maidan Delhi',
  'BIEC Bangalore',
  'SECC Kolkata',
  'Other (mention in message)',
];

const CONTACT_ITEMS = [
  { icon: IconPhone, label: 'Phone', value: '+91 95944 22056', href: 'tel:+919594422056' },
  { icon: IconMail, label: 'Email', value: 'info@eventtracker.in', href: 'mailto:info@eventtracker.in' },
  { icon: IconWorld, label: 'Website', value: 'www.eventtracker.in', href: 'https://www.eventtracker.in' },
  { icon: IconMapPin, label: 'Location', value: 'Mumbai, Maharashtra, India', href: null },
  { icon: IconClock, label: 'Hours', value: 'Mon–Sat, 9:00 AM – 7:00 PM', href: null },
];

const inputClass = 'w-full px-4 py-3.5 font-sans text-sm rounded-xl bg-white transition-all duration-200 outline-none';
const inputStyle = { border: '1.5px solid #E2EAE2', color: '#2D2D2D' };
const EMPTY = { name: '', company: '', email: '', phone: '', service: '', venue: '', message: '' };

export default function ContactMain() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [submittedName, setSubmittedName] = useState('');

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed');
      setSubmittedName(form.name);
      setForm(EMPTY);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const focusStyle = (focused: boolean) => ({
    ...inputStyle,
    borderColor: focused ? '#2B9E7C' : '#E2EAE2',
    boxShadow: focused ? '0 0 0 3px rgba(43,158,124,0.1)' : 'none',
  });

  return (
    <section className="bg-white py-12 md:py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">

        {/* LEFT — Form */}
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="block h-[2px] w-8 flex-shrink-0 rounded-full" style={{ background: 'linear-gradient(90deg,#2B9E7C,#8AC63F)' }} />
            <span className="font-sans text-xs uppercase tracking-widest" style={{ color: '#2B9E7C' }}>Send a Message</span>
          </div>
          <h2 className="font-display font-bold text-3xl mb-8" style={{ color: '#1A1A1A' }}>
            Tell Us About Your Project
          </h2>

          {status === 'success' ? (
            <div className="text-center py-12 px-6">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                style={{ background: 'linear-gradient(135deg,#2B9E7C,#8AC63F)' }}
              >
                <IconCircleCheck size={32} color="#fff" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-2" style={{ color: '#1A1A1A' }}>
                Thank You, {submittedName}!
              </h3>
              <p className="font-sans text-base leading-relaxed mb-6" style={{ color: '#555555' }}>
                Your enquiry has been received. We&apos;ll get back to you within <strong style={{ color: '#2B9E7C' }}>24 hours</strong>.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="font-sans text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:scale-105"
                style={{ background: 'linear-gradient(90deg,#2B9E7C,#8AC63F)', color: '#fff' }}
              >
                Send Another Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField label="Full Name *">
                  <input
                    required
                    type="text"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={set('name')}
                    className={inputClass}
                    style={inputStyle}
                    onFocus={(e) => Object.assign(e.target.style, focusStyle(true))}
                    onBlur={(e) => Object.assign(e.target.style, focusStyle(false))}
                  />
                </FormField>
                <FormField label="Company Name">
                  <input
                    type="text"
                    placeholder="Your company"
                    value={form.company}
                    onChange={set('company')}
                    className={inputClass}
                    style={inputStyle}
                    onFocus={(e) => Object.assign(e.target.style, focusStyle(true))}
                    onBlur={(e) => Object.assign(e.target.style, focusStyle(false))}
                  />
                </FormField>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField label="Email Address *">
                  <input
                    required
                    type="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={set('email')}
                    className={inputClass}
                    style={inputStyle}
                    onFocus={(e) => Object.assign(e.target.style, focusStyle(true))}
                    onBlur={(e) => Object.assign(e.target.style, focusStyle(false))}
                  />
                </FormField>
                <FormField label="Phone Number *">
                  <input
                    required
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={form.phone}
                    onChange={set('phone')}
                    className={inputClass}
                    style={inputStyle}
                    onFocus={(e) => Object.assign(e.target.style, focusStyle(true))}
                    onBlur={(e) => Object.assign(e.target.style, focusStyle(false))}
                  />
                </FormField>
              </div>

              {/* Row 3 — Service */}
              <FormField label="Service Required">
                <select
                  value={form.service}
                  onChange={set('service')}
                  className={inputClass}
                  style={{ ...inputStyle, cursor: 'pointer' }}
                  onFocus={(e) => Object.assign(e.target.style, focusStyle(true))}
                  onBlur={(e) => Object.assign(e.target.style, focusStyle(false))}
                >
                  {SERVICES.map((s) => (
                    <option key={s} value={s === 'Select a Service' ? '' : s}>
                      {s}
                    </option>
                  ))}
                </select>
              </FormField>

              {/* Row 4 — Venue */}
              <FormField label="Exhibition / Event Venue">
                <select
                  value={form.venue}
                  onChange={set('venue')}
                  className={inputClass}
                  style={{ ...inputStyle, cursor: 'pointer' }}
                  onFocus={(e) => Object.assign(e.target.style, focusStyle(true))}
                  onBlur={(e) => Object.assign(e.target.style, focusStyle(false))}
                >
                  {VENUES.map((v) => (
                    <option key={v} value={v === 'Select Venue' ? '' : v}>
                      {v}
                    </option>
                  ))}
                </select>
              </FormField>

              {/* Row 5 — Message */}
              <FormField label="Your Requirements">
                <textarea
                  rows={5}
                  placeholder="Tell us more about your requirements..."
                  value={form.message}
                  onChange={set('message')}
                  className={`${inputClass} resize-none`}
                  style={inputStyle}
                  onFocus={(e) => Object.assign(e.target.style, focusStyle(true))}
                  onBlur={(e) => Object.assign(e.target.style, focusStyle(false))}
                />
              </FormField>

              {/* Submit */}
              {status === 'error' && (
                <p className="font-sans text-sm text-red-500 text-center -mb-1">
                  Something went wrong. Please try again or call us directly.
                </p>
              )}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full inline-flex items-center justify-center gap-2 font-sans font-semibold text-base text-white py-4 rounded-full transition-all duration-300 hover:scale-[1.01] disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100"
                style={{ background: 'linear-gradient(90deg,#2B9E7C,#8AC63F)' }}
                onMouseEnter={(e) => {
                  if (status !== 'loading') (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 30px rgba(43,158,124,0.4)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none';
                }}
              >
                {status === 'loading' ? (
                  <>
                    <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="3" />
                      <path d="M12 2a10 10 0 0 1 10 10" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>Send Enquiry <IconSend size={18} /></>
                )}
              </button>
            </form>
          )}
        </div>

        {/* RIGHT — Info card */}
        <div className="lg:sticky lg:top-8">
          <div
            className="relative overflow-hidden rounded-3xl p-8 lg:p-10"
            style={{ background: 'linear-gradient(135deg, #0f1a14, #0a2018)' }}
          >
            {/* Glow */}
            <div
              className="absolute pointer-events-none"
              style={{ top: -60, right: -60, width: 260, height: 260, borderRadius: '50%', background: 'radial-gradient(circle,rgba(43,158,124,0.15),transparent 70%)' }}
            />
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.04]"
              style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '24px 24px' }}
            />

            <div className="relative z-10">
              <h3 className="font-display font-bold text-2xl text-white mb-2">Get In Touch</h3>
              <p className="font-sans text-sm leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Reach out directly or fill the form — we respond within 24 hours.
              </p>

              <div className="flex flex-col gap-6">
                {CONTACT_ITEMS.map(({ icon: Icon, label, value, href }) => {
                  const content = (
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(43,158,124,0.15)' }}>
                        <Icon size={20} color="#2B9E7C" />
                      </div>
                      <div>
                        <p className="font-sans text-xs uppercase tracking-wider mb-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>{label}</p>
                        <p className="font-sans text-sm font-medium text-white transition-colors duration-200">{value}</p>
                      </div>
                    </div>
                  );
                  return href ? (
                    <a
                      key={label}
                      href={href}
                      className="block group"
                      onMouseEnter={(e) => {
                        const val = e.currentTarget.querySelector('p:last-child') as HTMLElement;
                        if (val) val.style.color = '#8AC63F';
                      }}
                      onMouseLeave={(e) => {
                        const val = e.currentTarget.querySelector('p:last-child') as HTMLElement;
                        if (val) val.style.color = '#fff';
                      }}
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={label}>{content}</div>
                  );
                })}
              </div>

              {/* Divider */}
              <div className="my-8 h-px" style={{ background: 'rgba(255,255,255,0.1)' }} />

              {/* Socials */}
              <p className="font-sans text-xs uppercase tracking-wider mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>
                Follow Us
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/eventtracker.mumbai"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{ border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.6)' }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = 'linear-gradient(135deg,#2B9E7C,#8AC63F)';
                    el.style.borderColor = 'transparent';
                    el.style.color = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = 'transparent';
                    el.style.borderColor = 'rgba(255,255,255,0.15)';
                    el.style.color = 'rgba(255,255,255,0.6)';
                  }}
                >
                  <IconBrandInstagram size={16} />
                </a>
                <a
                  href="https://www.instagram.com/eventtracker.mumbai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm transition-colors duration-200"
                  style={{ color: 'rgba(255,255,255,0.6)' }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#8AC63F')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.6)')}
                >
                  @eventtracker.mumbai
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block font-sans text-xs font-medium mb-1.5" style={{ color: '#555555' }}>
        {label}
      </label>
      {children}
    </div>
  );
}

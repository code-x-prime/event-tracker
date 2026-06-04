'use client';

import Image from 'next/image';

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918291906056"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed z-[999] transition-all duration-200 hover:scale-110"
      style={{
        bottom: '24px',
        right: '24px',
        width: '56px',
        height: '56px',
        display: 'block',
        filter: 'drop-shadow(0 4px 16px rgba(37,211,102,0.5))',
      }}
    >
      <Image
        src="/whatsapp.png"
        alt="Chat on WhatsApp"
        width={56}
        height={56}
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      />
    </a>
  );
}

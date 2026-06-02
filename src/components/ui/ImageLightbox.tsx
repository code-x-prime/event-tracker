'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  IconX,
  IconChevronLeft,
  IconChevronRight,
  IconZoomIn,
  IconZoomOut,
  IconMaximize,
} from '@tabler/icons-react';

type Props = {
  images: string[];
  initialIndex: number;
  onClose: () => void;
};

export function ImageLightbox({ images, initialIndex, onClose }: Props) {
  const [idx, setIdx] = useState(initialIndex);
  const [zoom, setZoom] = useState(1);

  const prev = () => { setIdx((i) => Math.max(0, i - 1)); setZoom(1); };
  const next = () => { setIdx((i) => Math.min(images.length - 1, i + 1)); setZoom(1); };
  const zoomIn = () => setZoom((z) => Math.min(3, +(z + 0.5).toFixed(1)));
  const zoomOut = () => setZoom((z) => Math.max(1, +(z - 0.5).toFixed(1)));

  useEffect(() => {
    setIdx(initialIndex);
    setZoom(1);
  }, [initialIndex]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === '+') zoomIn();
      if (e.key === '-') zoomOut();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  });

  const btnStyle = { background: 'rgba(255,255,255,0.12)' } as React.CSSProperties;

  return (
    <div
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center px-4 py-6"
      style={{ background: 'rgba(0,0,0,0.94)' }}
      onClick={onClose}
    >
      {/* Toolbar */}
      <div
        className="flex items-center gap-2 mb-4 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <IconBtn onClick={zoomOut} disabled={zoom <= 1} style={btnStyle}>
          <IconZoomOut size={17} />
        </IconBtn>
        <span className="font-sans text-xs w-10 text-center" style={{ color: 'rgba(255,255,255,0.5)' }}>
          {Math.round(zoom * 100)}%
        </span>
        <IconBtn onClick={zoomIn} disabled={zoom >= 3} style={btnStyle}>
          <IconZoomIn size={17} />
        </IconBtn>
        <IconBtn onClick={() => setZoom(1)} style={btnStyle}>
          <IconMaximize size={17} />
        </IconBtn>
        <div className="w-px h-6 mx-1" style={{ background: 'rgba(255,255,255,0.15)' }} />
        <IconBtn onClick={onClose} style={btnStyle}>
          <IconX size={17} />
        </IconBtn>
      </div>

      {/* Image area */}
      <div
        className="relative w-full flex items-center justify-center overflow-hidden"
        style={{ maxWidth: 900, height: '68vh' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            transform: `scale(${zoom})`,
            transition: 'transform 0.25s ease',
            position: 'relative',
            width: '100%',
            height: '100%',
            cursor: zoom > 1 ? 'zoom-out' : 'default',
          }}
          onClick={() => zoom > 1 ? setZoom(1) : undefined}
        >
          <Image
            src={images[idx]}
            alt="Event Tracker project"
            fill
            className="object-contain"
            sizes="(max-width: 900px) 100vw, 900px"
            priority
            quality={85}
          />
        </div>
      </div>

      {/* Bottom nav */}
      <div
        className="flex items-center gap-4 mt-4"
        onClick={(e) => e.stopPropagation()}
      >
        <IconBtn onClick={prev} disabled={idx === 0} style={btnStyle}>
          <IconChevronLeft size={20} />
        </IconBtn>
        <span className="font-sans text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
          {idx + 1} / {images.length}
        </span>
        <IconBtn onClick={next} disabled={idx === images.length - 1} style={btnStyle}>
          <IconChevronRight size={20} />
        </IconBtn>
      </div>
    </div>
  );
}

function IconBtn({
  children,
  onClick,
  disabled = false,
  style,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-9 h-9 rounded-full flex items-center justify-center text-white transition-all duration-200 disabled:opacity-30 hover:scale-110"
      style={style}
      onMouseEnter={(e) => {
        if (!disabled) (e.currentTarget as HTMLButtonElement).style.background = 'linear-gradient(135deg,#2B9E7C,#8AC63F)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.background = style?.background as string ?? 'rgba(255,255,255,0.12)';
      }}
    >
      {children}
    </button>
  );
}

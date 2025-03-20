import React, { useEffect, useRef } from 'react';
import './backgroundmedia.css';

interface BackgroundMediaProps {
  type: 'video' | 'image';
  src: string;
  hasOverlay?: boolean;
}

export function BackgroundMedia({ type, src, hasOverlay = true }: BackgroundMediaProps) {
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!mediaRef.current) return;

      const scrolled = window.pageYOffset;
      const rate = scrolled * 0.5;
      mediaRef.current.style.transform = `translate3d(0, ${rate}px, 0)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={mediaRef} className="background-media">
      {type === 'video' ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="background-media__content"
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <img
          src={src}
          alt="Background"
          className="background-media__content"
        />
      )}
      {hasOverlay && <div className="background-media__overlay" />}
    </div>
  );
}
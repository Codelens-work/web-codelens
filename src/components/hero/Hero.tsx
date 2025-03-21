import React, { ReactNode } from 'react';
import { BackgroundMedia } from './BackgroundMedia';
import './hero.css';

interface HeroProps {
  className?: string;
  children?: ReactNode;
  media?: {
    type: 'video' | 'image';
    src: string;
    alt?: string;
  };
  hasOverlay?: boolean;
}

export function Hero({ children, className = '', media, hasOverlay }: HeroProps) {
  return (
    <section className={`hero ${className}`}>
      {media && <BackgroundMedia {...media} hasOverlay={hasOverlay} />}
      {children && <div className="hero-content">{children}</div>}
    </section>
  );
}
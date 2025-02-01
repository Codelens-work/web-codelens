import React, { ReactNode } from 'react';
import { BackgroundMedia } from './BackgroundMedia';
import './hero.css';

interface HeroProps {
  className?: string;
  children?: ReactNode;
  media?: {
    type: 'video' | 'image';
    src: string;
  };
  hasOverlay?: boolean;
}

export function Hero({ 
  children, 
  className = '', 
  media
}: HeroProps) {
  return (
    <section className={`hero  ${className}`}>
      {media && <BackgroundMedia {...media} />}
      {children && ( 
        <div className="hero-content">
          {children}
        </div>
      )}
    </section>
  );
}
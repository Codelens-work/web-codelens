import React from 'react';
import './backgroundmedia.css';

interface BackgroundMediaProps {
  type: 'video' | 'image';
  src: string;
  overlayVariant?: 'default';
  hasOverlay?: boolean;
}

export function BackgroundMedia({ 
  type, 
  src, 
  hasOverlay = true,
}: BackgroundMediaProps) {
  return (
    <div className="background-media">
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
      <div className={`background-media__overlay`} />
    </div>
  );
}
import React from 'react';

import './blog.css';
import { Hero } from '../../components/hero/Hero';

export function Blog() {
  return (
    <Hero 
      media={{
        type: 'image',
        src: '/hero/hero-blog.webp',
      }}
    >
    </Hero>
  );
}
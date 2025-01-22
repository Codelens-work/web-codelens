import React from 'react';

import './about.css';
import { Hero } from '../../components/hero/Hero';
import LinkButton from '../../components/linkButton/LinkButton';

export function About() {
  return (
    <Hero 
      media={{
        type: 'image',
        src: '/hero/hero-about.webp',
      }}
    >
        <div className="about-hero-content">
            <h1 className="about-title">
                Conócenos
            </h1>
            <p className="about-description">
            Convierte ideas en excelencia en línea con nuestras soluciones innovadoras y servicios digitales estratégicos
            </p>
            <div className="hero-button">
              <LinkButton 
                      label="CONTACTANOS"
                       href="#"
                       size="normal"
                     />
            </div>
      </div>
    </Hero>
  );
}
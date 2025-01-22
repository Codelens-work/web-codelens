import React from 'react';
import { Hero } from '../../../components/hero/Hero';

import './WebDevelopment.css';
import LinkButton from '../../../components/linkButton/LinkButton';



export function WebDevelopment() {
  return (
    <Hero
      media={{
        type: 'image',
        src: '/hero/hero-web.webp',
      }}
    >
       <div className='hero__title-container'>
            <h1 className="title-service">Desarrollo Web desde Cero</h1>
            <p className="paragraph-service">
              En CodeLens, creemos que un sitio web efectivo es más que una página bonita. Desde el diseño hasta la funcionalidad, construimos soluciones digitales a medida que representan la esencia de tu marca y conectan de manera auténtica con tu audiencia.
            </p>
            <LinkButton 
              label="CONTACTANOS"
              href="#"
              size="small"
            />
       </div>
    </Hero>
  );
}
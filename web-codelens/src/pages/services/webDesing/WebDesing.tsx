import React from 'react';
import { Hero } from '../../../components/hero/Hero';

import './webdesing.css';
import LinkButton from '../../../components/linkButton/LinkButton';



export function WebDesing() {
  return (
    <Hero
      media={{
        type: 'image',
        src: '/hero/hero-desing.webp',
      }}
    >
       <div className='hero__title-container'>
            <h1 className="title-service">Diseño Web</h1>
            <p className="paragraph-service">
                En CodeLens, transformamos tus ideas en diseños visualmente atractivos y efectivos que comunican tus valores y cautivan a tus usuarios. Nos especializamos en crear interfaces intuitivas y estéticamente impactantes que hacen de cada visita una experiencia memorable.
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
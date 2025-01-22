import React from 'react';
import { Hero } from '../../../components/hero/Hero';

import './appiservice.css';
import LinkButton from '../../../components/linkButton/LinkButton';



export function AppiService() {
  return (
    <Hero
      media={{
        type: 'image',
        src: '/hero/hero-api.webp',
      }}
    >
       <div className='hero__title-container'>
            <h1 className="title-service">Desarrollo de APIS que Potencian a tus Usuarios</h1>
            <p className="paragraph-service">
                En CodeLens, diseñamos y desarrollamos APIs que no solo conectan sistemas, sino que también permiten a nuestros clientes ofrecer servicios innovadores a sus propios usuarios. Estas APIs están diseñadas para ser seguras, escalables y fáciles de implementar, asegurando que tus clientes puedan integrarlas sin complicaciones.
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
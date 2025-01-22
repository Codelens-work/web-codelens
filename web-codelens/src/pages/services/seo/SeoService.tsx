import React from 'react';
import { Hero } from '../../../components/hero/Hero';

import './seoservice.css';
import LinkButton from '../../../components/linkButton/LinkButton';



export function SeoService() {
  return (
    <Hero
      media={{
        type: 'image',
        src: '/hero/hero-seo.webp',
      }}
    >
       <div className='hero__title-container'>
            <h1 className="title-service">Mejora y Optimización de Sitios Web</h1>
            <p className="paragraph-service">
              En CodeLens, transformamos sitios web existentes para maximizar su rendimiento, actualizar su diseño, y añadir funcionalidades que aumenten su impacto. Ya sea mejorando la velocidad de carga, actualizando el diseño, o integrando nuevas características, nuestro equipo se asegura de que tu sitio esté a la altura de tus objetivos.
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
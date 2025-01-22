import React from 'react';
import { Hero } from '../../../components/hero/Hero';

import './appweb.css';
import LinkButton from '../../../components/linkButton/LinkButton';



export function AppWeb() {
  return (
    <Hero
      media={{
        type: 'image',
        src: '/hero/hero-apps.webp',
      }}
    >
       <div className='hero__title-container'>
            <h1 className="title-service">Desarrollo de Aplicaciones Web Personalizadas para Potenciar tu Negocio</h1>
            <p className="paragraph-service">
                En CodeLens, desarrollamos aplicaciones web a medida, diseñadas específicamente para optimizar y mejorar los procesos de tu empresa. Ya sea un sistema de gestión, una herramienta de automatización, o una plataforma de comunicación, transformamos tus ideas en aplicaciones funcionales, seguras y escalables.
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
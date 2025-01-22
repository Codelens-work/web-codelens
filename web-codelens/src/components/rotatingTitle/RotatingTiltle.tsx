import React, { useState, useEffect } from 'react';
import './rotatingtitle.css';

const services = [
  'Página Web',
  'Aplicación Web',
  'API Personalizada',
  'Estrategia SEO',
  'Interfaz Moderna'
];

export function RotatingTitle() {
  const [currentService, setCurrentService] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((current) => (current + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
      <h1 className="rotating-title">
        <span className='title-first'>Crear una</span>
        <div className="service-wrapper">
          <span className="service-text">
            {services[currentService]}
          </span>
        </div>
        <span className='title-last'>es lo que sabemos hacer</span>
      </h1>  
  );
}
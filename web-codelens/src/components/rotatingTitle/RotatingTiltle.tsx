import React, { useState, useEffect } from 'react';
import './rotatingtitle.css';
import { useTranslation } from 'react-i18next'

const services = [
  'Página Web',
  'Aplicación Web',
  'API Personalizada',
  'Estrategia SEO',
  'Interfaz Moderna'
];

export function RotatingTitle() {
  const { t } = useTranslation();

  const services = t('home.hero-section.services', { returnObjects: true }) || [];
  const [currentService, setCurrentService] = useState(0);

  useEffect(() => {
    if (!Array.isArray(services) || services.length === 0) return; // Verifica si es un array válido
  
    const interval = setInterval(() => {
      setCurrentService((current) => (current + 1) % services.length);
    }, 3000);
  
    return () => clearInterval(interval);
  }, [services]);
  
  return (
      <h1 className="rotating-title">
        <span className='title-first'>{t('home.hero-section.heading')}</span>
        <div className="service-wrapper">
          <span className="service-text">
            {services[currentService] || ""}
          </span>
        </div>
        <span className='title-last'>{t('home.hero-section.description')}</span>
      </h1>  
  );
}
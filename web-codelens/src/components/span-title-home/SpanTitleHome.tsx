import React from 'react';
import './spantitlhome.css';


export function SpanTitleHome() {
  return (
    <div className="hero-label-container">
        <div className="hero-label">
            <span >CODELENS</span> 
            <span className='hero-label-separator'></span> 
            <span>SOLUCIONES IT</span>
        </div>
        <div className="hero-lines-with-logo">
            <div className="line"></div>
            <img src="/icons/logo_icon_gris.svg" alt="Logo" className="logo" />
            <div className="line"></div>
        </div>
  </div>
  );    
}


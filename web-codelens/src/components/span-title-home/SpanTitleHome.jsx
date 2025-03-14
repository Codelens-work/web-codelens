import './spantitlhome.css';
import { useTranslation } from 'react-i18next'

export function SpanTitleHome() {

  const { t } = useTranslation();

  return (
    <div className="hero-label-container">
        <div className="hero-label">
            <span>CODELENS</span> 
            <span className='hero-label-separator'></span> 
            <span>{t('home.hero-section.logo-text')}</span>
        </div>
        <div className="hero-lines-with-logo">
            <div className="line"></div>
            <img src="/icons/logo_icon_gris.svg" alt="Logo Codelens" className="logo" />
            <div className="line"></div>
        </div>
  </div>
  );    
}


import './about.css';
import { Hero } from '../../components/hero/Hero';
import LinkButton from '../../components/linkButton/LinkButton';
import { useTranslation } from 'react-i18next'

const  About = () => {
  
  const { t } = useTranslation()

  return (
    <Hero 
      media={{
        type: 'image',
        src: '/hero/hero-about.webp',
      }}
    >
      <div className="about-hero-content">
        <h1 className="about-title">
        {t('about-us-page.hero.heading')}
        </h1>
        <h2 className='about-subtitle'>
        {t('about-us-page.hero.sub-heading')}
        </h2>
        <p className="about-description">
        {t('about-us-page.hero.content')}
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

export default About;
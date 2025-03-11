import { Helmet } from "react-helmet";
import './about.css';
import { Hero } from '../../components/hero/Hero';
import LinkButton from '../../components/linkButton/LinkButton';
import AboutCodeLens from '../../components/about-codelens/AboutCodeLens';
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion';
import ValueSection from '../../components/values-section/valuesSection';
import TeamSection from '../../components/teamSection/TeamSection';
import { useEffect } from "react";


const  About = () => {
  
  const { t } = useTranslation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);


  return (
    <>
     <Helmet>
        <meta
          name="description"
          content={t("metadescription.about-us")}
        />
        <meta
          name="keywords"
          content={t("keywords.about-us", { returnObjects: true }).join(", ")}
          />
        <meta name="author" content="CodeLens" />
        <link rel="canonical" href="https://codelenstech.com/" />
      </Helmet>
    <Hero 
      media={{
        type: 'image',
        src: '/hero/hero-about.webp',
      }}
    >
      <motion.div 
        className="about-hero-content"
        initial={{ opacity: 0, y: 50 }} // Empieza oculto y desplazado hacia abajo
        animate={{ opacity: 1, y: 0 }} // Se muestra y sube a su posición normal
        transition={{ duration: 0.8, ease: "easeOut" }} // Duración y efecto suave
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
              label={t('btn-contact.text')}
              href="/#Contact"
              size="normal"
            />
          </div>
        </div>
      </motion.div>
    </Hero>
      <AboutCodeLens />
      <ValueSection />
      <TeamSection />
    </>
  );
}

export default About;
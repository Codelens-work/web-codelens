import { Helmet } from "react-helmet";
import './about.css';
import { Hero } from '../../components/hero/Hero';
import LinkButton from '../../components/linkButton/LinkButton';
import AboutCodeLens from '../../components/about-codelens/AboutCodeLens';
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion';
import ValueSection from '../../components/values-section/ValuesSection';
import TeamSection from '../../components/teamSection/TeamSection';
import { useScrollToTop } from "/src/hooks/useScroll";


const About = () => {

  const { t, i18n } = useTranslation()

  const aboutUs = t('about-us-page', {returnObjects: true})
  useScrollToTop()
  
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
          alt: t('about-us-page.hero.background-alt')
      }}
      >
        <motion.div
          className="about-hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="about-hero-content">
            <h1 className="about-title">
              {aboutUs.hero.heading}
            </h1>
            <h2 className='about-subtitle'>
              {aboutUs.hero['sub-heading']}
            </h2>
            <p className="about-description">
              {aboutUs.hero.content}
            </p>
            <div className="hero-button">
              <LinkButton
                label={t('btn-contact.text')}
                href={i18n.language === 'en' ? "/#contact" : "/#contacto"}
                size="normal"
              />
            </div>
          </div>
        </motion.div>
      </Hero>
      <AboutCodeLens aboutUsText={aboutUs['about-section']}/>
      <ValueSection  valuesSectionText={aboutUs['values-section']}/>
      <TeamSection  teamSectionContent={aboutUs['team-section']}/>
    </>
  );
}

export default About;
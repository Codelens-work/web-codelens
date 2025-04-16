import './about.css';
import { Hero } from '../../components/hero/Hero';
import LinkButton from '../../components/linkButton/LinkButton';
import AboutCodeLens from '../../components/about-codelens/AboutCodeLens';
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion';
import ValueSection from '../../components/values-section/ValuesSection';
import TeamSection from '../../components/teamSection/TeamSection';
import { useScrollToTop } from "/src/hooks/useScroll";
import SeoMeta from "../../components/seoHelmet/SeoMeta";


const About = () => {

  const { t, i18n } = useTranslation()
  const canonical = i18n.language === 'en'
    ? 'https://codelenstech.com/en/about-us'
    : 'https://codelenstech.com/nosotros';

  const title = t('titles.about');
  const description = t('metadescription.about-us');
  const keywords = t('keywords.about-us', { returnObjects: true });
  const aboutUs = t('about-us-page', {returnObjects: true})
  useScrollToTop()
  
  return (
    <>
      <SeoMeta
        title={title}
        description={description}
        canonical={canonical}
        keywords={keywords}
      />
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
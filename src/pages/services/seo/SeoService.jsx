import { Helmet } from "react-helmet";
import { Hero } from "../../../components/hero/Hero";
import "./seoservice.css";
import LinkButton from "../../../components/linkButton/LinkButton.jsx";
import Services from "../../../components/services/Services.jsx";
import { useTranslation } from 'react-i18next'
import Breadcrumb from "../../../components/breadcrumbs/Breadcrumbs.jsx";
import { useEffect } from "react";


import { motion } from 'framer-motion';

export function SeoService() {

  const { t, i18n } = useTranslation();
  const tBenefits = t(
    "services-pages.seo.about-section.benefits-section.list",
    { returnObjects: true }
  );
  const tFeatures = t("services-pages.seo.features-section.cards", {
    returnObjects: true,
  });

  const tCartsTitle = tFeatures.map((item) => item.title);
  const tCartsContent = tFeatures.map((item) => item.content);

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);


  return (
    <>
     <Helmet>
        <meta
          name="description"
          content={t("metadescription.seo")}
        />
        <meta
          name="keywords"
          content={t("keywords.seo", { returnObjects: true }).join(", ")}
          />
        <meta name="author" content="CodeLens" />
        <link rel="canonical" href="https://codelenstech.com/" />
      </Helmet>
      <Hero
        media={{
          type: "image",
          src: "/hero/hero-seo.webp",
          alt: t('services-pages.seo.hero.background-alt')
        }}
      >
      <motion.div 
        className="hero__title-container-seo"
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }} 
      >
        <Breadcrumb currentService={t('breadcrumbs.seo')} />
          <h1 className="title-service">
            {t('services-pages.seo.hero.heading')}
          </h1>
          <p className="paragraph-service">
            {t('services-pages.seo.hero.content')}
          </p>
          <LinkButton label={t('btn-contact.text')} href={i18n.language === 'en' ? "/#contact" : "/#contacto"} size="small" />
      </motion.div>
    </Hero>

      <Services
        img="/service/seo.svg"
        altImg={t("services-pages.seo.about-section.value-proposal.alt-img")}
        titleOne={t('services-pages.seo.about-section.value-proposal.heading')}
        paragraphOne={t('services-pages.seo.about-section.value-proposal.content')}
        titleTwo={t('services-pages.seo.about-section.benefits-section.heading')}
        items={tBenefits}
        titleCarts={tCartsTitle}
        descriptionCart={tCartsContent}
        titleServiceContact={t("services-pages.seo.cto-section.heading")}
      paragraphServiceContact={t("services-pages.seo.cto-section.content")}
      />
    </>
  );
}

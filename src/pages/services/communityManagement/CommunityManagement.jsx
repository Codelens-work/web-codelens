import { Helmet } from "react-helmet";
import { Hero } from "../../../components/hero/Hero";
import "./communityManagement.css";
import LinkButton from "../../../components/linkButton/LinkButton.jsx";
import Services from "../../../components/services/Services.jsx";
import { useTranslation } from "react-i18next";
import Breadcrumb from "../../../components/breadcrumbs/Breadcrumbs.jsx";
import { motion } from 'framer-motion';
import { useEffect } from "react";

export function CommunityManagement() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);


  const tApiBenedit = t(
    "services-pages.community-management.about-section.benefits-section.list",
    { returnObjects: true }
  );
  const tApiFeatures = t(
    "services-pages.community-management.features-section.cards",
    { returnObjects: true }
  );
  const tApiCartsTitle = tApiFeatures.map((item) => item.title);
  const tApiCartsContent = tApiFeatures.map((item) => item.content);

  return (
    <>
     <Helmet>
        <meta
          name="description"
          content={t("metadescription.community-management")}
        />
        <meta
          name="keywords"
          content={t("keywords.community-management", { returnObjects: true }).join(", ")}
          />
        <meta name="author" content="CodeLens" />
        <link rel="canonical" href="https://codelenstech.com/" />
      </Helmet>
      <Hero
        media={{
          type: "image",
          src: "/hero/community-hero.webp",
        }}
      >
        <motion.div 
        className="hero__title-container-api"
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }} 
      >
        <Breadcrumb currentService={t('breadcrumbs.community-management')} />
          <h1 className="title-service">
            {t("services-pages.community-management.hero.heading")}
          </h1>
          <p className="paragraph-service">
            {t("services-pages.community-management.hero.content")}
          </p>
          <LinkButton label={t('btn-contact.text')} href={i18n.language === 'en' ? "/#contact" : "/#contacto"} size="small" />
        </motion.div>
      </Hero>

      <Services
        img="/service/community-manager.svg"
        titleOne={t(
          "services-pages.community-management.about-section.value-proposal.heading"
        )}
        paragraphOne={t(
          "services-pages.community-management.about-section.value-proposal.content"
        )}
        titleTwo={t(
          "services-pages.community-management.about-section.benefits-section.heading"
        )}
        items={tApiBenedit}
        titleCarts={tApiCartsTitle}
        descriptionCart={tApiCartsContent}
        titleServiceContact={t(
          "services-pages.community-management.cto-section.heading"
        )}
        paragraphServiceContact={t(
          "services-pages.community-management.cto-section.content"
        )}
      />
    </>
  );
}

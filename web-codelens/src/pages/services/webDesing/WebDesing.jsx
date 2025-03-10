import { Helmet } from "react-helmet";
import { Hero } from "../../../components/hero/Hero";
import "./webdesing.css";
import LinkButton from "../../../components/linkButton/LinkButton";
import Services from "../../../components/services/Services.jsx";
import { useTranslation } from "react-i18next";
import Breadcrumb from "../../../components/breadcrumbs/Breadcrumbs";
import { motion } from 'framer-motion';

export function WebDesing() {
  const { t } = useTranslation();
  const tBenefits = t(
    "services-pages.web-design.about-section.benefits-section.list",
    { returnObjects: true }
  );
  const tFeatures = t("services-pages.web-design.features-section.cards", {
    returnObjects: true,
  });

  const tCartsTitle = tFeatures.map((item) => item.title);
  const tCartsContent = tFeatures.map((item) => item.content);

  return (
    <>
     <Helmet>
        <meta
          name="description"
          content={t("metadescription.web-design")}
        />
        <meta
          name="keywords"
          content={t("keywords.web-design", { returnObjects: true }).join(", ")}
          />
        <meta name="author" content="CodeLens" />
        <link rel="canonical" href="https://codelenstech.com/" />
      </Helmet>
      <Hero
        media={{
          type: "image",
          src: "/hero/hero-desing.webp",
        }}
      >
      <motion.div 
        className="hero__title-container-desing"
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }} 
      >
        <Breadcrumb currentService={t('breadcrumbs.diseno')} />
          <h1 className="title-service">
            {t("services-pages.web-design.hero.heading")}
          </h1>
          <p className="paragraph-service">
            {t("services-pages.web-design.hero.content")}
          </p>
          <LinkButton label={t('btn-contact.text')} href="/#Contact" size="small" />
        </motion.div>
      </Hero>
      <Services
        img="../service/webDesign.svg"
        titleOne={t(
          "services-pages.web-design.about-section.value-proposal.heading"
        )}
        paragraphOne={t(
          "services-pages.web-design.about-section.value-proposal.content"
        )}
        titleTwo={t(
          "services-pages.web-design.about-section.benefits-section.heading"
        )}
        items={tBenefits}
        titleCarts={tCartsTitle}
        descriptionCart={tCartsContent}
        titleServiceContact={t("services-pages.web-design.cto-section.heading")}
        paragraphServiceContact={t(
          "services-pages.web-design.cto-section.content"
        )}
      />
    </>
  );
}

import SeoMeta from "../../../components/seoHelmet/SeoMeta";
import { Hero } from "../../../components/hero/Hero";
import "./webdesing.css";
import LinkButton from "../../../components/linkButton/LinkButton.jsx";
import Services from "../../../components/services/Services.jsx";
import { useTranslation } from "react-i18next";
import Breadcrumb from "../../../components/breadcrumbs/Breadcrumbs.jsx";
import { useScrollToTop } from "../../../hooks/useScroll.jsx";

import { motion } from 'framer-motion';

export function WebDesing() {
  const { t, i18n } = useTranslation();
  const tBenefits = t(
    "services-pages.web-design.about-section.benefits-section.list",
    { returnObjects: true }
  );
  const tFeatures = t("services-pages.web-design.features-section.cards", {
    returnObjects: true,
  });

  const tCartsTitle = tFeatures.map((item) => item.title);
  const tCartsContent = tFeatures.map((item) => item.content);

  useScrollToTop()

  const title = t("breadcrumbs.diseno");
  const description = t("metadescription.web-design");
  const keywords = t("keywords.web-design", { returnObjects: true });

  const canonical = i18n.language === "en"
    ? "https://codelenstech.com/en/services/web-design"
    : "https://codelenstech.com/servicios/diseno-web";

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
          type: "image",
          src: "/hero/hero-desing.webp",
          alt: t('services-pages.web-design.hero.background-alt')
        }}
      >
      <motion.div 
        className="hero__title-container-desing"
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }} 
      >
          <Breadcrumb currentService={t("breadcrumbs.diseno")} />
          <h1 className="title-service">
            {t("services-pages.web-design.hero.heading")}
          </h1>
          <p className="paragraph-service">
            {t("services-pages.web-design.hero.content")}
          </p>
          <LinkButton
            label={t("btn-contact.text")}
            href={i18n.language === 'en' ? "/#contact" : "/#contacto"}
            size="small"
          />
        </motion.div>
      </Hero>
      <Services
        img="/service/webDesign.svg"
        altImg={t("services-pages.web-design.about-section.value-proposal.alt-img")}
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

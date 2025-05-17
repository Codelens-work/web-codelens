import SeoMeta from "../../../components/seoHelmet/SeoMeta";
import { Hero } from "../../../components/hero/Hero";
import "./appweb.css";
import LinkButton from "../../../components/linkButton/LinkButton.jsx";
import Services from "../../../components/services/Services.jsx";
import { useTranslation } from "react-i18next";
import Breadcrumb from "../../../components/breadcrumbs/Breadcrumbs.jsx";
import { motion } from 'framer-motion';
import { useScrollToTop } from "../../../hooks/useScroll.jsx";

export function AppWeb() {
  const { t, i18n } = useTranslation();

  const tBenefits = t(
    "services-pages.web-app.about-section.benefits-section.list",
    { returnObjects: true }
  );

  const tFeatures = t("services-pages.web-app.features-section.cards", {
    returnObjects: true,
  });

  const tCartsTitle = tFeatures.map((item) => item.title);
  const tCartsContent = tFeatures.map((item) => item.content);

  const title = t("breadcrumbs.aplicaciones-web");
  const description = t("metadescription.web-app");
  const keywords = t("keywords.web-app", { returnObjects: true });

  const canonical = i18n.language === "en"
    ? "https://www.codelenstech.com/en/services/web-app"
    : "https://www.codelenstech.com/servicios/aplicaciones-web";

  useScrollToTop();

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
          src: "/hero/hero-apps.webp",
          alt: t('services-pages.web-app.hero.background-alt')
        }}
      >
        <motion.div
          className="hero__title-container-appWeb"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Breadcrumb currentService={t('breadcrumbs.aplicaciones-web')} />
          <h1 className="title-service-appWeb">
            {t("services-pages.web-app.hero.heading")}
          </h1>
          <p className="paragraph-service">
            {t("services-pages.web-app.hero.content")}
          </p>
          <LinkButton label={t('btn-contact.text')} href={i18n.language === 'en' ? "/#contact" : "/#contacto"} size="small" />
        </motion.div>
      </Hero>

      <Services
        img="/service/appWeb.svg"
        altImg={t("services-pages.web-app.about-section.value-proposal.alt-img")}
        titleOne={t("services-pages.web-app.about-section.value-proposal.heading")}
        paragraphOne={t("services-pages.web-app.about-section.value-proposal.content")}
        titleTwo={t("services-pages.web-app.about-section.benefits-section.heading")}
        items={tBenefits}
        titleCarts={tCartsTitle}
        descriptionCart={tCartsContent}
        titleServiceContact={t("services-pages.web-app.cto-section.heading")}
        paragraphServiceContact={t("services-pages.web-app.cto-section.content")}

      />
    </>
  );
}

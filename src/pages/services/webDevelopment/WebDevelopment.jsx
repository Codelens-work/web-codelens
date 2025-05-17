import SeoMeta from "../../../components/seoHelmet/SeoMeta";
import { Hero } from "../../../components/hero/Hero";
import "./WebDevelopment.css";
import LinkButton from "../../../components/linkButton/LinkButton.jsx";
import Services from "../../../components/services/Services.jsx";
import { useTranslation } from "react-i18next";
import Breadcrumb from "../../../components/breadcrumbs/Breadcrumbs.jsx";
import { useScrollToTop } from "../../../hooks/useScroll.jsx";
import { motion } from 'framer-motion';

export function WebDevelopment() {
  const { t, i18n } = useTranslation();
  const tBenefits = t(
    "services-pages.web-development.about-section.benefits-section.list",
    { returnObjects: true }
  );
  const tFeatures = t("services-pages.web-development.features-section.cards", {
    returnObjects: true,
  });

  const tCartsTitle = tFeatures.map((item) => item.title);
  const tCartsContent = tFeatures.map((item) => item.content);

  useScrollToTop()

  const title = t("breadcrumbs.desarrollo-web");
  const description = t("metadescription.web-development");
  const keywords = t("keywords.web-development", { returnObjects: true });

  const canonical = i18n.language === "en"
    ? "https://www.codelenstech.com/en/services/web-development"
    : "https://www.codelenstech.com/servicios/desarrollo-web";

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
          src: "/hero/hero-web.webp",
          alt: t('services-pages.web-development.hero.background-alt')
        }}
      >
        <motion.div 
          className="hero__title-container-webdevelopment"
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }} 
        >
          <Breadcrumb currentService={t("breadcrumbs.desarrollo-web")} />
          <h1 id="Web-development" className="title-service">
            {t("services-pages.web-development.hero.heading")}
          </h1>
          <p className="paragraph-service">
            {t("services-pages.web-development.hero.content")}
          </p>
          <LinkButton
            label={t("btn-contact.text")}
            href={i18n.language === 'en' ? "/#contact" : "/#contacto"}
            size="small"
          />
        </motion.div>
      </Hero>

      <Services
        img="/service/webDevelopment.svg"
        altImg={t("services-pages.web-development.about-section.value-proposal.alt-img")}
        titleOne={t(
          "services-pages.web-development.about-section.value-proposal.heading"
        )}
        paragraphOne={t(
          "services-pages.web-development.about-section.value-proposal.content"
        )}
        titleTwo={t(
          "services-pages.web-development.about-section.benefits-section.heading"
        )}
        items={tBenefits}
        titleCarts={tCartsTitle}
        descriptionCart={tCartsContent}
        titleServiceContact={t(
          "services-pages.web-development.cto-section.heading"
        )}
        paragraphServiceContact={t(
          "services-pages.web-development.cto-section.content"
        )}
      />
    </>
  );
}

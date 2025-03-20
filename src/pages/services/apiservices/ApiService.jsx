import { Helmet } from "react-helmet";
import { Hero } from "../../../components/hero/Hero";
import "./apiservice.css";
import LinkButton from "../../../components/linkButton/LinkButton.jsx";
import Services from "../../../components/services/Services.jsx";
import { useTranslation } from "react-i18next";
import Breadcrumb from "../../../components/breadcrumbs/Breadcrumbs.jsx";
import { motion } from 'framer-motion';
import { useScrollToTop } from "/src/hooks/useScroll";



export function ApiService() {
  const { t, i18n } = useTranslation();

  const tApiBenedit = t(
    "services-pages.api-development.about-section.benefits-section.list",
    { returnObjects: true }
  );
  const tApiFeatures = t(
    "services-pages.api-development.features-section.cards",
    { returnObjects: true }
  );
  const tApiCartsTitle = tApiFeatures.map((item) => item.title);
  const tApiCartsContent = tApiFeatures.map((item) => item.content);

  useScrollToTop()

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content={t("metadescription.api-development")}
        />
        <meta
          name="keywords"
          content={t("keywords.api-development", { returnObjects: true }).join(", ")}
        />
        <meta name="author" content="CodeLens" />
        <link rel="canonical" href="https://codelenstech.com/" />
      </Helmet>
      <Hero
        media={{
          type: "image",
          src: "/hero/hero-api.webp",
          alt: t('services-pages.api-development.hero.background-alt')
        }}
      >
        <motion.div
          className="hero__title-container-api"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Breadcrumb currentService={t('breadcrumbs.api')} />
          <h1 className="title-service">
            {t("services-pages.api-development.hero.heading")}
          </h1>
          <p className="paragraph-service">
            {t("services-pages.api-development.hero.content")}
          </p>
          <LinkButton label={t('btn-contact.text')} href={i18n.language === 'en' ? "/#contact" : "/#contacto"} size="small" />
        </motion.div>
      </Hero>

      <Services
        img="/service/api.svg"
        altImg={t("services-pages.api-development.about-section.value-proposal.alt-img")}
        titleOne={t(
          "services-pages.api-development.about-section.value-proposal.heading"
        )}
        paragraphOne={t(
          "services-pages.api-development.about-section.value-proposal.content"
        )}
        titleTwo={t(
          "services-pages.api-development.about-section.benefits-section.heading"
        )}
        items={tApiBenedit}
        titleCarts={tApiCartsTitle}
        descriptionCart={tApiCartsContent}
        titleServiceContact={t(
          "services-pages.api-development.cto-section.heading"
        )}
        paragraphServiceContact={t(
          "services-pages.api-development.cto-section.content"
        )}
      />
    </>
  );
}

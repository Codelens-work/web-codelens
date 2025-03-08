import { Helmet } from "react-helmet";
import { Hero } from "../../../components/hero/Hero";
import "./appweb.css";
import LinkButton from "../../../components/linkButton/LinkButton";
import Services from "../../../components/services/Services.jsx";
import { useTranslation } from "react-i18next";
import Breadcrumb from "../../../components/breadcrumbs/Breadcrumbs";
import { useEffect } from "react";



export function AppWeb() {
  const { t } = useTranslation();

  const tBenefits = t(
    "services-pages.web-app.about-section.benefits-section.list",
    { returnObjects: true }
  );
  
  const tFeatures = t("services-pages.web-app.features-section.cards", {
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
          content={t("metadescription.web-app")}
        />
        <meta
          name="keywords"
          content={t("keywords.web-app", { returnObjects: true }).join(", ")}
          />
        <meta name="author" content="CodeLens" />
        <link rel="canonical" href="https://codelenstech.com/" />
      </Helmet>
      <Hero
        media={{
          type: "image",
          src: "/hero/hero-apps.webp",
        }}
      >
        <div className="hero__title-container-appWeb">
          <Breadcrumb currentService={t('breadcrumbs.aplicaciones-web')} />
          <h1 className="title-service-appWeb">
            {t("services-pages.web-app.hero.heading")}
          </h1>
          <p className="paragraph-service">
            {t("services-pages.web-app.hero.content")}
          </p>
          <LinkButton label={t('btn-contact.text')} href="/#Contact" size="small" />
        </div>
      </Hero>

      <Services
        img="../service/appWeb.svg"
        titleOne={t("services-pages.web-app.about-section.heading")}
        paragraphOne={t("services-pages.web-app.about-section.content")}
        titleTwo={t("services-pages.web-app.benefits-section.heading")}
        items={tBenefits}
        titleCarts={tCartsTitle}
        descriptionCart={tCartsContent}
        titleServiceContact={t("services-pages.web-app.cto-section.heading")}
      paragraphServiceContact={t("services-pages.web-app.cto-section.content")}
      
      />
    </>
  );
}

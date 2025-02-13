import { Hero } from "../../../components/hero/Hero";
import "./appweb.css";
import LinkButton from "../../../components/linkButton/LinkButton";
import Services from "../../../components/services/Services.jsx";
import { useTranslation } from "react-i18next";

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

  return (
    <>
      <Hero
        media={{
          type: "image",
          src: "/hero/hero-apps.webp",
        }}
      >
        <div className="hero__title-container-appWeb">
          <h1 className="title-service-appWeb">
            {t("services-pages.web-app.hero.heading")}
          </h1>
          <p className="paragraph-service">
            {t("services-pages.web-app.hero.content")}
          </p>
          <LinkButton label={t('btn-contact.text')} href="#" size="small" />
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

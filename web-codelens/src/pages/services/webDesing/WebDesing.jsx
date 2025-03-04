import { Hero } from "../../../components/hero/Hero";
import "./webdesing.css";
import LinkButton from "../../../components/linkButton/LinkButton";
import Services from "../../../components/services/Services.jsx";
import { useTranslation } from "react-i18next";
import Breadcrumb from "../../../components/breadcrumbs/Breadcrumbs";

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
      <Hero
        media={{
          type: "image",
          src: "/hero/hero-desing.webp",
        }}
      >
        <div className="hero__title-container-desing">
        <Breadcrumb currentService={t('breadcrumbs.diseno')} />
          <h1 className="title-service">
            {t("services-pages.web-design.hero.heading")}
          </h1>
          <p className="paragraph-service">
            {t("services-pages.web-design.hero.content")}
          </p>
          <LinkButton label={t('btn-contact.text')} href="/#Contact" size="small" />
        </div>
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

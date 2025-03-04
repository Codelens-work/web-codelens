import { Hero } from "../../../components/hero/Hero";
import "./apiservice.css";
import LinkButton from "../../../components/linkButton/LinkButton";
import Services from "../../../components/services/Services.jsx";
import { useTranslation } from "react-i18next";
import Breadcrumb from "../../../components/breadcrumbs/Breadcrumbs";

export function ApiService() {
  const { t } = useTranslation();

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

  return (
    <>
      <Hero
        media={{
          type: "image",
          src: "/hero/hero-api.webp",
        }}
      >
        <div className="hero__title-container-api">
        <Breadcrumb currentService={t('breadcrumbs.api')} />
          <h1 className="title-service">
            {t("services-pages.api-development.hero.heading")}
          </h1>
          <p className="paragraph-service">
            {t("services-pages.api-development.hero.content")}
          </p>
          <LinkButton label={t('btn-contact.text')} href="/#Contact" size="small" />
        </div>
      </Hero>

      <Services
        img="../service/api.svg"
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

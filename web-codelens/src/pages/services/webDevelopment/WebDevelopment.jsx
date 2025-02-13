import { Hero } from "../../../components/hero/Hero";
import "./WebDevelopment.css";
import LinkButton from "../../../components/linkButton/LinkButton";
import Services from "../../../components/services/Services.jsx";
import { useTranslation } from 'react-i18next'

export function WebDevelopment() {

  const { t } = useTranslation();
  const tBenefits = t(
    "services-pages.web-development.about-section.benefits-section.list",
    { returnObjects: true }
  );
  const tFeatures = t("services-pages.web-development.features-section.cards", {
    returnObjects: true,
  });

  const tCartsTitle = tFeatures.map((item) => item.title);
  const tCartsContent = tFeatures.map((item) => item.content);

  return (
    <>
      <Hero
        media={{
          type: "image",
          src: "/hero/hero-web.webp",
        }}
      >
        <div className="hero__title-container-webdevelopment">
          <h1 className="title-service">
            {t('services-pages.web-development.hero.heading')}
          </h1>
          <p className="paragraph-service">
            {t('services-pages.web-development.hero.content')}
          </p>
          <LinkButton label={t('btn-contact.text')} href="#" size="small" />
        </div>
      </Hero>

      <Services
        img="../service/webDevelopment.svg"
        titleOne={t('services-pages.web-development.about-section.value-proposal.heading')}
        paragraphOne={t('services-pages.web-development.about-section.value-proposal.content')}
        titleTwo={t('services-pages.web-development.about-section.benefits-section.heading')}
        items={tBenefits}
        titleCarts={tCartsTitle}
        descriptionCart={tCartsContent}
        titleServiceContact={t("services-pages.web-development.cto-section.heading")}
      paragraphServiceContact={t("services-pages.web-development.cto-section.content")}
      
      />
    </>
  );
}

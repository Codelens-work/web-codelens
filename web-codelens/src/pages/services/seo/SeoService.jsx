import { Hero } from "../../../components/hero/Hero";
import "./seoservice.css";
import LinkButton from "../../../components/linkButton/LinkButton";
import Services from "../../../components/services/Services.jsx";
import { useTranslation } from 'react-i18next'

export function SeoService() {

  const { t } = useTranslation();
  const tBenefits = t(
    "services-pages.seo.about-section.benefits-section.list",
    { returnObjects: true }
  );
  const tFeatures = t("services-pages.seo.features-section.cards", {
    returnObjects: true,
  });

  const tCartsTitle = tFeatures.map((item) => item.title);
  const tCartsContent = tFeatures.map((item) => item.content);


  return (
    <>
      <Hero
        media={{
          type: "image",
          src: "/hero/hero-seo.webp",
        }}
      >
        <div className="hero__title-container-seo">
          <h1 className="title-service">
            {t('services-pages.seo.hero.heading')}
          </h1>
          <p className="paragraph-service">
            {t('services-pages.seo.hero.content')}
          </p>
          <LinkButton label={t('btn-contact.text')} href="#" size="small" />
        </div>
      </Hero>

      <Services
        img="../service/seo.svg"
        titleOne={t('services-pages.seo.about-section.value-proposal.heading')}
        paragraphOne={t('services-pages.seo.about-section.value-proposal.content')}
        titleTwo={t('services-pages.seo.about-section.benefits-section.heading')}
        items={tBenefits}
        titleCarts={tCartsTitle}
        descriptionCart={tCartsContent}
        titleServiceContact={t("services-pages.seo.cto-section.heading")}
      paragraphServiceContact={t("services-pages.seo.cto-section.content")}
      />
    </>
  );
}

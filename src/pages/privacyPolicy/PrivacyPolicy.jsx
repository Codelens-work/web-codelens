import { Helmet } from "react-helmet";
import LegalSection from "../../components/lagalSection/LegalSection";
import { Hero } from "/src/components/hero/Hero.tsx";
import "./privacityPolicy.css";
import { useTranslation } from 'react-i18next'

const PrivacyPolicy = () => {

  const { t } = useTranslation()
  const tPrivAbout = t('privacy-page.about-section.content', { returnObjects: true });
  const tPrivSection = t('privacy-page.privacy-section', { returnObjects: true });

  const tPrivSectionTitle = tPrivSection.map((item) => item.title);
  const tPrivSectionContent = tPrivSection.map((item) => item.content);

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content={t("metadescription.privacy-policy")}
        />
        <meta
          name="keywords"
          content={t("keywords.privacy-policy", { returnObjects: true }).join(", ")}
        />
        <meta name="author" content="CodeLens" />
        <link rel="canonical" href="https://codelenstech.com/" />
      </Helmet>
      <Hero
        media={{
          type: 'image',
          src: '/hero/hero-terms-privacity.webp',
        }}
      >
        <div className="terms-hero-content">
          <h1 className="terms-title-hero">{t('privacy-page.hero.heading')}</h1>
        </div>
      </Hero>
      <LegalSection
        title={"Política de Privacidad de CodeLens"}
        paragraph={
          tPrivAbout[0]
        }
        secondParagraph={
          tPrivAbout[1]
        }

        titles={tPrivSectionTitle}
        description={tPrivSectionContent}

      />
    </>
  );
};

export default PrivacyPolicy;

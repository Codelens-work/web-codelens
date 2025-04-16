import LegalSection from "../../components/lagalSection/LegalSection";
import { Hero } from "/src/components/hero/Hero.tsx";
import "./privacityPolicy.css";
import { useTranslation } from 'react-i18next'
import { useScrollToTop } from "/src/hooks/useScroll";
import SeoMeta from "../../components/seoHelmet/SeoMeta";

const PrivacyPolicy = () => {

  const { t, i18n } = useTranslation();
  const tPrivAbout = t('privacy-page.about-section.content', { returnObjects: true });
  const tPrivSection = t('privacy-page.privacy-section', { returnObjects: true });
  const tPrivSectionTitle = tPrivSection.map((item) => item.title);
  const tPrivSectionContent = tPrivSection.map((item) => item.content);

  useScrollToTop()

  const title = t('titles.privacy-policy');
  const description = t('metadescription.privacy-policy');
  const keywords = t('keywords.privacy-policy', { returnObjects: true });

  const canonical = i18n.language === 'en'
    ? 'https://codelenstech.com/en/privacy-policy'
    : 'https://codelenstech.com/politica-de-privacidad';

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
        type: 'image',
        src: '/hero/hero-terms-privacity.webp',
        alt: t('privacy-page.hero.background-alt')
      }}
    >
      <div className="terms-hero-content">
        <h1 className="terms-title-hero">{t('privacy-page.hero.heading')}</h1>
      </div>
    </Hero>
    <LegalSection
      title={t('privacy-page.hero.heading')}
      altImg={t("privacy-page.about-section.alt-img")}
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

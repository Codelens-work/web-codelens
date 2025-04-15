import SeoMeta from "../../components/seoHelmet/SeoMeta";
import LegalSection from "../../components/lagalSection/LegalSection";
import { Hero } from "/src/components/hero/Hero.tsx";
import { useTranslation } from "react-i18next";
import { useScrollToTop } from "/src/hooks/useScroll";
import "./termsPage.css";

const TermsAndConditions = () => {
  const { t, i18n } = useTranslation();
  const tTermsContent = t("terms-page.about-section.content", {
    returnObjects: true,
  });
  const tTermsSeccion = t("terms-page.terms-section", { returnObjects: true });

  const tTermsSeccionTitles = tTermsSeccion.map((item) => item.title);
  const tTermsSeccionContent = tTermsSeccion.map((item) => item.content);

  const title = t("titles.terms-and-conditions");
  const description = t("metadescription.terms-and-conditions");
  const keywords = t("keywords.terms-and-conditions", { returnObjects: true });

  const canonical = i18n.language === "en"
    ? "https://codelenstech.com/en/terms-and-conditions"
    : "https://codelenstech.com/terms-and-conditions";

  useScrollToTop();

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
          src: "/hero/hero-terms-privacity.webp",
          alt: t('terms-page.hero.background-alt')
        }}
      >
        <div className="terms-hero-content">
          <h1 className="terms-title-hero">{t("terms-page.hero.heading")}</h1>
        </div>
      </Hero>

      <LegalSection
        title={t("terms-page.hero.heading")}
        altImg={t("terms-page.about-section.alt-img")}
        paragraph={tTermsContent[0]}
        secondParagraph={tTermsContent[1]}
        thirdParagraph={tTermsContent[2]}
        textColor={tTermsContent[3]}
        titles={tTermsSeccionTitles}
        description={tTermsSeccionContent}
      />
    </>
  );
};

export default TermsAndConditions;

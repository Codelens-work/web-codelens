import { Helmet } from "react-helmet";
import LegalSection from "../../components/lagalSection/LegalSection";
import { Hero } from "/src/components/hero/Hero.tsx";
import { useTranslation } from "react-i18next";
import "./termsPage.css";

const TermsAndConditions = () => {
  const { t } = useTranslation();
  const tTermsContent = t("terms-page.about-section.content", {
    returnObjects: true,
  });
  const tTermsSeccion = t("terms-page.terms-section", { returnObjects: true });

  const tTermsSeccionTitles = tTermsSeccion.map((item) => item.title);
  const tTermsSeccionContent = tTermsSeccion.map((item) => item.content);

  return (
    <>
     <Helmet>
        <meta
          name="description"
          content={t("metadescription.terms-and-conditions")}
        />
        <meta
          name="keywords"
          content={t("keywords.terms-and-conditions", { returnObjects: true }).join(", ")}
          />
        <meta name="author" content="CodeLens" />
        <link rel="canonical" href="https://codelenstech.com/" />
      </Helmet>
      <Hero
        media={{
          type: "image",
          src: "/hero/hero-terms-privacity.webp",
        }}
      >
        <div className="terms-hero-content">
          <h1 className="terms-title-hero">{t("terms-page.hero.heading")}</h1>
        </div>
      </Hero>

      <LegalSection
        title={t("terms-page.hero.heading")}
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

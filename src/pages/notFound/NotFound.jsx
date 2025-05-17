import { useTranslation } from "react-i18next";
import "./notFound.css";
import LinkButton from "/src/components/linkButton/LinkButton.jsx";
import Section from "/src/components/section/Section.jsx";
import SeoMeta from "../../components/seoHelmet/SeoMeta";

const NotFound = () => {
  const { t, i18n } = useTranslation();
  const title = t("titles.404");
  const description = t("metadescription.404");
  const keywords = t("keywords.404", { returnObjects: true });

  const canonical = i18n.language === "en"
    ? "https://www.codelenstech.com/en/404"
    : "https://www.codelenstech.com/404";

  return (
    <>
      <SeoMeta
        title={title}
        description={description}
        canonical={canonical}
        keywords={keywords}
      />
      <div className="error-container">
        <Section className="error-section">
          <div className="content-container">
          <div className="title-error-container">
            <h1>{t("404.title")}</h1>
            <h2>{t("404.subtitle")}</h2>
          </div>
            <div className="error-message">
              <span>{t("404.paragraph")}</span>
              <span>{t("404.second-paragraph")}</span>
              <LinkButton label={t("404.button")} href="/" size="error"/>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
};

export default NotFound;

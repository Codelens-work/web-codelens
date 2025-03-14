import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import "./notFound.css";
import LinkButton from "/src/components/linkButton/LinkButton.jsx";
import Section from "/src/components/section/Section.jsx";

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
      <meta
        name="description"
        content={t("metadescription.404")}
      />
      <meta
        name="keywords"
        content={t("keywords.404", { returnObjects: true }).join(", ")}
        />
      <meta name="author" content="CodeLens" />
      <link rel="canonical" href="https://codelenstech.com/" />
    </Helmet>
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

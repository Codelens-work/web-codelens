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
            <h1>Error 404</h1>
            <h2>Oops! Página no encontrada, pero el código sigue corriendo...</h2>
            <div className="error-message">
              <span>Parece que te perdiste en el camino...</span>
              <span>Pero no te preocupes, siempre puedes regresar al inicio</span>
              <LinkButton label="Home" href="/" size="error" />
            </div>
          </div>
        </Section>
      </div>
    </>
  );
};

export default NotFound;

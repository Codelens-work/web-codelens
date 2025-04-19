import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const SeoMeta = ({ title, description, canonical, keywords }) => {

  const image = "/icons/Logo_web.svg";
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <Helmet>
      <html lang={currentLang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords.join(", ")} />}
      <meta name="author" content="CodeLens" />
      <link rel="canonical" href={canonical} />

       {/* Open Graph (Facebook, LinkedIn) */}
       <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SeoMeta;
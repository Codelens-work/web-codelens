import { Helmet } from "react-helmet";

const SeoMeta = ({ title, description, canonical, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords.join(", ")} />}
      <meta name="author" content="CodeLens" />
      <link rel="canonical" href={canonical} />
    </Helmet>
  );
};

export default SeoMeta;
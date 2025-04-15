import { Helmet } from "react-helmet";
import "./blog.css";
import { Hero } from "../../components/hero/Hero";
import { useTranslation } from "react-i18next";
import LastArticles from "../../components/blogCard/LastArticles";
import { useScrollToTop } from "../../hooks/useScroll";

const Blog = () => {
  const { t, i18n } = useTranslation();

  const prevArticle = {
    image: "/blog/article1-thumbnail.svg",
    description: "Descripción del artículo anterior",
  };
  const nextArticle = {
    image: "/blog/article2-thumbnail.svg",
    description: "Descripción del siguiente artículo",
  };

  useScrollToTop()

  return (
    <>
      <Helmet>
        <meta name="description" content={t("metadescription.blog")} />
        <meta
          name="keywords"
          content={t("keywords.blog", { returnObjects: true }).join(", ")}
        />
        <meta name="author" content="CodeLens" />
        <link rel="canonical" href="https://codelenstech.com/" />
      </Helmet>
      <Hero
        media={{
          type: "image",
          src: "/hero/hero-blog.webp",
          alt: t('blog.hero-section.background-alt')
        }}
      >
        <div className="blog-hero-content">
          <h1 className="blog-title">{t("blog.hero-section.heading")}</h1>
          <h2 className="blog-subtitle">
            {t("blog.hero-section.sub-heading")}
          </h2>
          <p className="blog-description">
            {t("blog.hero-section.description")}
          </p>
        </div>
      </Hero>
      <LastArticles lang={i18n.language}/>
    </>
  );
};

export default Blog;

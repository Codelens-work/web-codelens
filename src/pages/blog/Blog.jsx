import SeoMeta from "../../components/seoHelmet/SeoMeta";
import "./blog.css";
import { Hero } from "../../components/hero/Hero";
import { useTranslation } from "react-i18next";
import LastArticles from "../../components/blogCard/LastArticles";
import { useScrollToTop } from "../../hooks/useScroll";

const Blog = () => {
  const { t, i18n } = useTranslation();

  useScrollToTop()

  const title = t("titles.blog");
  const description = t("metadescription.blog");
  const keywords = t("keywords.blog", { returnObjects: true });

  const canonical = i18n.language === "en"
  ? "https://codelenstech.com/en/blog"
  : "https://codelenstech.com/blog";

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
      <LastArticles lang={i18n.language} h1={t('blog.articles-section.last-articles')}/>
    </>
  );
};

export default Blog;

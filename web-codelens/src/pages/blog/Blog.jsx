import "./blog.css";
import { Hero } from "../../components/hero/Hero";
import { useTranslation } from "react-i18next";
import BlogCard from "../../components/blogCard/BlogCard";

const Blog = () => {
  const { t } = useTranslation();

  return (
    <>
      <Hero
        media={{
          type: "image",
          src: "/hero/hero-blog.webp",
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
      <div className="card-container-blog">

      <BlogCard />
      </div>
    </>
  );
};

export default Blog;

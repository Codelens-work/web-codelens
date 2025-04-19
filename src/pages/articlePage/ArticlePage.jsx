import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { BlogContext } from "../../context/BlogContext";
import "./articlePage.css";
import ArticleNavigation from "../../components/articleNavigation/ArticleNavigation";
import RelatedArticles from "../../components/relatedArticles/RelatedArticles";
import SeoMeta from "../../components/seoHelmet/SeoMeta";
import parse from 'html-react-parser'

const ArticlePage = () => {
  const { getArticleBySlug } = useContext(BlogContext)
  const { slug } = useParams();
  const { i18n } = useTranslation()
  const [article, setArticle] = useState(null);
  const lang = i18n.language
  const navigate = useNavigate()

  useEffect(() => {
    const getCurrentArticle = () => {
      try {
        const currentArticle = getArticleBySlug(slug)
        if (!currentArticle) {
          throw new Error("No se encontró ningún artículo")
        }
        setArticle(currentArticle)
      }
      catch {
        navigate("/404");
      }
    }
    getCurrentArticle()
  }, [slug]);

  // Poner otro spinner bonito o el rocket
  if (!article) return <p>Cargando...</p>;

  const canonical = lang === "en"
  ? `https://codelenstech.com/en/blog/${article.slug.en}`
  : `https://codelenstech.com/en/blog/${article.slug.es}`

  return (
    <>
    <SeoMeta
    title={article.h1[lang]}
    description={article.metadescription[lang]}
    canonical={canonical}
    keywords={article.focusKeyword[lang]}
    />
    <div>
      <article className="article-page">
        <picture className="article-image">
          <img src={article.imgUrl} alt={article.imgAlt[lang]} />
        </picture>
        <section className="article-content-container">
          <div className="article-content">
            <div className="content-block">
              {parse(article.content[lang])}
            </div>
            <div className="content-block">
              <RelatedArticles currentSlug={slug} lang={lang} />
            </div>
          </div>
        </section>
      </article>
      <ArticleNavigation currentArticle={slug} />
    </div>
    </>
  );
};

export default ArticlePage;
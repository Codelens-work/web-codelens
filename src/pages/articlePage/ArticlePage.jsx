import { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ArticleContent from "../../components/articleContent/ArticleContent";
import { BlogContext } from "../../context/BlogContext";
import "./articlePage.css";
import ArticleNavigation from "../../components/articleNavigation/ArticleNavigation";
import RelatedArticles from "../../components/relatedArticles/RelatedArticles";

const ArticlePage = () => {
  const { getArticleBySlug } = useContext(BlogContext)
  const { slug } = useParams();
  const { i18n } = useTranslation()
  const [article, setArticle] = useState(null);
  const lang = i18n.language


  useEffect(() => {
    const getCurrentArticle = () => {
      try {
        const currentArticle = getArticleBySlug(slug)
        if(!currentArticle){
          throw new Error("No se encontró ningún artículo")
        }
        setArticle(currentArticle)
       }
       catch {
        console.log(error)
        // Poner lógica para redirigir a 404 indicando que el artículo no existe
       }
    }
   getCurrentArticle()
  }, []);

  // Poner otro spinner bonito o el rocket
  if (!article) return <p>Cargando...</p>;

  // const currentIndex = articles.findIndex((a) => a.id === id);
  // const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;
  // const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;

  return (
    <div className="article-page">
      <article>
        <img src={article.imgUrl} alt={article.imgAlt[lang]} />
        <h1>{article.h1[lang]}</h1>
        <ArticleContent sections={article.sections[lang]} />
      </article>
      <ArticleNavigation currentArticle={slug}/>
      <RelatedArticles currentSlug={slug} lang={lang}/>
    </div>
  );
};

export default ArticlePage;
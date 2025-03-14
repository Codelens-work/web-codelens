import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Para manejar el idioma
import ArticleCardSmall from "../components/ArticleCardSmall";
import "./articlePage.css";

const ArticlePage = () => {
  const { id } = useParams();
  const { i18n } = useTranslation();
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch("/articles.json")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        const foundArticle = data.find((a) => a.id === id);
        setArticle(foundArticle);
      });
  }, [id]);

  if (!article) return <p>Cargando...</p>;

  // Buscar el índice del artículo actual
  const currentIndex = articles.findIndex((a) => a.id === id);
  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;
  const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;

  return (
    <div className="article-page">
      {/* Imagen principal */}
      <img src={article.image} alt={article.title[i18n.language]} className="header-image" />

      {/* Contenido del artículo */}
      <div className="article-content">
        {article.content.map((block, index) => {
          switch (block.type) {
            case "h1":
              return <h1 key={index}>{block[i18n.language]}</h1>;
            case "h2":
              return <h2 key={index}>{block[i18n.language]}</h2>;
            case "p":
              return <p key={index}>{block[i18n.language]}</p>;
            default:
              return null;
          }
        })}
      </div>

      {/* Aside con artículos relacionados */}
      <aside className="related-articles">
        <h3>{i18n.language === "es" ? "Artículos Relacionados" : "Related Articles"}</h3>
        {article.related.map((rel) => (
          <Link to={`/blog/${rel.id}`} key={rel.id}>
            <ArticleCardSmall image={rel.image} description={rel[i18n.language]} />
          </Link>
        ))}
      </aside>

      {/* Navegación Anterior/Siguiente */}
      <div className="article-navigation">
        {prevArticle && (
          <Link to={`/blog/${prevArticle.id}`} className="prev">
            ← {prevArticle.title[i18n.language]}
          </Link>
        )}
        {nextArticle && (
          <Link to={`/blog/${nextArticle.id}`} className="next">
            {nextArticle.title[i18n.language]} →
          </Link>
        )}
      </div>
    </div>
  );
};

export default ArticlePage;
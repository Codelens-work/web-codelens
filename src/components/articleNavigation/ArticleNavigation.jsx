import "./articleNavigation.css";
import { useContext } from "react";
import ArticleCardSmall from "../articleCardSmall/ArticleCardSmall.jsx";
import { useTranslation } from "react-i18next";
import { BlogContext } from "../../context/BlogContext.jsx";
import { Link } from "react-router-dom";


const ArticleNavigation = ({ currentArticle }) => {
  const { t , i18n} = useTranslation();
  const { getAdjacentArticles } = useContext(BlogContext)
  const adjacents = getAdjacentArticles(currentArticle)
  const lang = i18n.language

  return (
    <div className="article-navigation">
      {adjacents.prev && (
        <div className="navigation-container">
          <Link className="navigation-art-link" to={`/blog/${adjacents.prev.slug[lang]}`}>
          <div className="nav-item prev">
            <picture className="icon-navigation">
              <img src="/blog/prev.svg" alt="previous" />
            </picture>
            <ArticleCardSmall image={adjacents.prev.imgUrl} alt={adjacents.prev.imgAlt[lang]} description={adjacents.prev.h1[lang]} /> 
          </div>
          </Link>
          <div>
            <span> {t("blog.navigation.previous")}</span>
          </div>
        </div>
      )}
      {adjacents.next && (
        <div className="navigation-container">
          <Link className="navigation-art-link" to={`/blog/${adjacents.next.slug[lang]}`}>
          <div className="nav-item next">
            <ArticleCardSmall image={adjacents.next.imgUrl} alt={adjacents.next.imgAlt[lang]} description={adjacents.next.h1[lang]} /> 
            <picture className="icon-navigation">
              <img src="/blog/next.svg" alt="next" />
            </picture>
          </div>
          </Link>
          <div>
            <span> {t("blog.navigation.next")}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleNavigation;
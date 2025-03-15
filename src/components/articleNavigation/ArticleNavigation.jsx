import "./articleNavigation.css";
import ArticleCardSmall from "../articleCardSmall/ArticleCardSmall.jsx";
import { useTranslation } from "react-i18next";


const ArticleNavigation = ({ prevArticle, nextArticle }) => {

  const { t } = useTranslation();

  return (
    <div className="article-navigation">
      {prevArticle && (
        <div className="navigation-container">
          <div className="nav-item prev">
            <picture className="icon-navigation">
              <img src="blog/prev.svg" alt="previous" />
            </picture>
            <ArticleCardSmall image={prevArticle.image} description={prevArticle.description} />
          </div>
          <div>
            <span> {t("blog.navigation.previous")}</span>
          </div>
        </div>
      )}
      {nextArticle && (
        <div className="navigation-container">
          <div className="nav-item next">
            <ArticleCardSmall image={nextArticle.image} description={nextArticle.description} />
            <picture className="icon-navigation">
              <img src="blog/next.svg" alt="next" />
            </picture>
          </div>
          <div>
            <span> {t("blog.navigation.next")}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleNavigation;
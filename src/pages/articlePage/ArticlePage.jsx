import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ArticleContent from "../../components/articleContent/ArticleContent";
import "./articlePage.css";

const ArticlePage = () => {
  const { slug } = useParams();
  const { i18n } = useTranslation()
  // const [articles, setArticles] = useState([]);
  // const [article, setArticle] = useState(null);

  // useEffect(() => {
  //   fetch("/articles.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setArticles(data);
  //       const foundArticle = data.find((a) => a.id === id);
  //       setArticle(foundArticle);
  //     });
  // }, [id]);

  // if (!article) return <p>Cargando...</p>;

  // const currentIndex = articles.findIndex((a) => a.id === id);
  // const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;
  // const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;

  return (
    <div className="article-page">
      <h1>{i18n.language == 'es' ? 'Articulo' : 'Article in englich'}</h1>
      <ArticleContent></ArticleContent>

      {/* <aside className="related-articles">
        <h3>{i18n.language === "es" ? "Artículos Relacionados" : "Related Articles"}</h3>
        {article.related.map((rel) => (
          <Link to={`/blog/${rel.id}`} key={rel.id}>
            <ArticleCardSmall image={rel.image} description={rel[i18n.language]} />
          </Link>
        ))}
      </aside>

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
      </div> */}
    </div>
  );
};

export default ArticlePage;
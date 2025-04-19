import "./relatedArticles.css"
import { useContext } from "react"
import { BlogContext } from "../../context/BlogContext"
import { Link } from 'react-router-dom'
import ArticleCardSmall from '../articleCardSmall/ArticleCardSmall'
import { ImDroplet } from "react-icons/im"


const RelatedArticles = ({ lang, currentSlug }) => {

  const { getRandomArticles } = useContext(BlogContext)

  const articles = getRandomArticles(currentSlug, 2)

  return (
<aside className="related-articles">
  <h3>{lang === "es" ? "Artículos Relacionados" : "Related Articles"}</h3>
  <div className="related-articles-list">
    {articles.map((rel, i) => (
      <Link to={`/blog/${rel.slug[lang]}`} key={i}>
        <ArticleCardSmall image={rel.imgUrl} description={rel.h1[lang]} />
      </Link>
    ))}
  </div>
</aside>
  )
}

export default RelatedArticles;
import "./relatedArticles.css"
import { useContext, useEffect, useState } from "react"
import { BlogContext } from "../../context/BlogContext"
import { Link } from 'react-router-dom'
import ArticleCardSmall from '../articleCardSmall/ArticleCardSmall'


const RelatedArticles = ({ lang, currentSlug }) => {

  const { getRandomArticles } = useContext(BlogContext)
  const [articles, setArticles] = useState(null)


  useEffect(() => {
    const articlesData = getRandomArticles(currentSlug, 2)
    setArticles(articlesData)
  }, [currentSlug])
  

  if(!articles) return <span>Cargando</span>

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
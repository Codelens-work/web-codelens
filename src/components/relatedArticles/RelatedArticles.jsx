import { useEffect, useContext, useState } from "react"
import { BlogContext } from "../../context/BlogContext"


const RelatedArticles = ({ lang, currentSlug}) => {

  const { getRandomArticles } = useContext(BlogContext)

  const [articles, setArticles] = useState([])
  useEffect(() => {
    try {
      const data = getRandomArticles(currentSlug, 2)
      if(data.length > 0){
        setArticles(data)
      }
      else throw new Error("Error al obtener datos")
    }
    catch {
      //Se produjo un error al retornar los artículos
      console.log(console.error())
    }
  })

  if(!articles) return <span>Cargando</span>

  return(
    <aside className="related-articles">
        <h3>{lang === "es" ? "Artículos Relacionados" : "Related Articles"}</h3>
        {articles.related.map((rel) => (
          <Link to={`/blog/${rel.id}`} key={rel.id}>
            <ArticleCardSmall image={rel.image[lang]} description={rel.h1[lang]} />
          </Link>
        ))}
      </aside>
  )
}

export default RelatedArticles;
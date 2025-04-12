import { createContext } from "react";
import articles from '/src/articles/blogArticles.json'

export const BlogContext = createContext()

export function BlogProvider({children}) {
  // Lista para las cards del blog, recibe "es" o "en" como parámetro
  const getArticlesListData = (lang) => {
    const articleDataList = articles.map(article => {
      return  {
        h1: article.h1[lang],
        slug: article.slug[lang],
        imgUrl: article.imgUrl,
        imgAlt: article.imgAlt[lang],
        createdDate: article.createdDate
      }
    })
    return articleDataList
  }

// Obtener el artículo entero según el slug, o sea todo en inglés y en español
const getArticleBySlug = (slug) =>{
  for (let article of articles){
    if (article.slug.en == slug || article.slug.es == slug){
      return article
    }
  }
  return null
}

const getAdjacentArticles = (slug) => {
  //obtener titulo, imagen y fecha del articulo anterior y el siguiente al indicado
  const current = getArticleBySlug(slug)
  const adjacents = {}
  
  articles.forEach((article, i) => {
    if(article.id === current.id + 1 && i <= articles.length){   
      adjacents.next = {id: article.id, slug: article.slug , imgUrl: article.imgUrl, imgAlt: article.imgAlt, h1: article.h1, createdDate: article.createdDate}
    }
    if(article.id === current.id - 1 && i >= 0){
      adjacents.prev = {id: article.id, slug: article.slug , imgUrl: article.imgUrl, imgAlt: article.imgAlt, h1: article.h1, createdDate: article.createdDate}
    }
  })

return adjacents
}

  return (
    <BlogContext.Provider value={{
      getArticlesListData,
      getArticleBySlug,
      getAdjacentArticles
    }}>
      {children}
    </BlogContext.Provider>
  )
}
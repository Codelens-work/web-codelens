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

// const getPrevNextArticle = (slug) => {
//   //obtener titulo, imagen y fecha del articulo anterior y el siguiente al indicado
// }

  return (
    <BlogContext.Provider value={{
      getArticlesListData,
      getArticleBySlug
    }}>
      {children}
    </BlogContext.Provider>
  )
}
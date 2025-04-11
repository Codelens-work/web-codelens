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

//tener todos los artículos disponibles
// obtener artículo por slug
// obtener artículo anterior y siguiente

  return (
    <BlogContext.Provider value={{
      getArticlesListData
    }}>
      {children}
    </BlogContext.Provider>
  )
}
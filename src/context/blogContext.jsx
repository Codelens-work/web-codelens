import { createContext } from "react";
import articles from '/src/articles/blogArticles.json'
import { shuffleArray } from "../utils/helpers";

export const BlogContext = createContext()

export function BlogProvider({children}) {

  // Lista para las cards del blog, recibe "es" o "en" como parámetro
  const getArticlesListData = () => {
    const articleDataList = articles.map(article => {
      return  {
        h1: article.h1,
        slug: article.slug,
        metadescription: article.metadescription,
        imgUrl: article.imgUrl,
        imgAlt: article.imgAlt,
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

// Obtener artículo anterior y siguiente al actual
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

//Obtener x cantidad de artículos random excluyendo actual
const getRandomArticles = (slug, amount = 5) => {
  const filtered = articles.filter(article => article.slug.en !== slug && article.slug.es !== slug)
  if(filtered.length < amount || articles.length <= amount){
    return []
  }
  shuffleArray(filtered)
  const randomArticles = filtered.slice(0, amount)
  const mappedArticles = randomArticles.map(article => {
    return  {
      h1: article.h1,
      slug: article.slug,
      imgUrl: article.imgUrl,
      imgAlt: article.imgAlt,
      createdDate: article.createdDate
    }
  })
  
  return mappedArticles
}

const sortArticlesByDate = (array, desc) => {
  const sorted = array.sort((a, b) => {
    return desc ? new Date(b.createdDate) - new Date(a.createdDate) : new Date(a.createdDate) - new Date(b.createdDate) 
  })
  return sorted
}

  return (
    <BlogContext.Provider value={{
      getArticlesListData,
      getArticleBySlug,
      getAdjacentArticles,
      getRandomArticles,
      sortArticlesByDate
    }}>
      {children}
    </BlogContext.Provider>
  )
}
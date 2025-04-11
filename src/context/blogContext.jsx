import { createContext } from "react";

export const BlogContext = createContext()

export function BlogProvider({children}) {
//tener todos los artículos disponibles
// obtener artículo por slug
// obtener artículo anterior y siguiente

  return (
    <BlogContext.Provider value={{
      articles: {},
      getArticle: ""

    }}>
      {children}
    </BlogContext.Provider>
  )
}
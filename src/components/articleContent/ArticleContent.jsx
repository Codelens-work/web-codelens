
import "./ArticleContent.css"

const ArticleContent = ({content}) => {

  return (
    <div className="article-sections">
      {parse(content)}
    </div>
  )
}

export default ArticleContent;


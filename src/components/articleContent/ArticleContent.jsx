import parse from 'html-react-parser'
import "./ArticleContent.css"

const ArticleContent = ({sections}) => {

  const generateStringHtml = (object) => {
    let resultHtml = ''
    for(let tag in object){
      const value = object[tag]
      if(Array.isArray(value)){
        if (tag === 'ul' && value.length > 0) {
          let ulTag = '<ul>'
          value.map(li => {
            ulTag += `<li>${li}</li>`
            return
          })
          ulTag + '</ul>'
          resultHtml += ulTag
        }
        if(tag === 'p' && value.length > 0){
          value.map(p => {
            resultHtml += `<p>${p}</p>`
            return
          })
        }
      }
      else resultHtml += `<${tag}>${object[tag]}</${tag}>`
    }
    return resultHtml
  }

  return (
    <div className="article-sections">
      {sections.map((section, i) => {
        const markdown = generateStringHtml(section)
        return <section key={`section${i}`}>{parse(markdown)}</section>
      })}
    </div>
  )
}

export default ArticleContent;


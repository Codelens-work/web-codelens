const ArticleContent = ({sections}) => {


  return (
<>
{sections.map((section, i) => {

  return <section>{i}</section>
})}
</>
  )
}

export default ArticleContent;
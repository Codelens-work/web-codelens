import parse from 'html-react-parser'

const ArticleContent = ({sections}) => {

const htmlexample = '<h2>Este es un html de prueba</h2><p>Este html debería mostrarse ok</p>'
  return (
<>
{sections.map((section, i) => {
  const contents = Object.entries(section)
  return <section key={`section${i}`}>{parse(htmlexample)}</section>
})}
</>
  )
}

export default ArticleContent;

/*
- Tengo una sección que es un objeto con las tags como keys
- Por cada sección devuelvo un section, ese section tiene el html con el contenido adentro
- Tengo que mapear cada objeto para que devuelva <key>value</key>
- Algunas keys pueden ser arrays, por ejemplo p y ul. Si es ul tiene que mapearse con li adentro.
- el mapeado anterior se tiene que devolver dentro de cada sección
<section>
<key>value</key>
<key>value</key>
<key>value</key>
</section>

*/

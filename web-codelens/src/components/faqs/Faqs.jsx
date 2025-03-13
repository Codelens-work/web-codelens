import './faqs.css'
import { Accordion } from 'react-bootstrap'
import { useTranslation, Trans } from 'react-i18next'

const Faqs = () => {

  const { t , i18n} = useTranslation()

  const sectionContent = t("home.faqs-section", {returnObjects: true})

  const currentLanguage = i18n.language

  return(
<section id={currentLanguage === 'en' ? 'FAQs' : 'preguntas-frecuentes'} className='faqs-section'>
  <div className='faqs-text-container'>
  <h2>{sectionContent.heading}</h2>
  <p>{sectionContent.intro}</p>
  </div>
<Accordion>
{sectionContent.content.map((item, i) => {
  return <Accordion.Item eventKey={i} key={'acc' + i} >
    <Accordion.Header>{item.question}</Accordion.Header>
    <Accordion.Body><Trans components={{ul: <ul />, li: <li />, strong: <strong />}}>{item.answer}</Trans></Accordion.Body>
  </Accordion.Item>
})}
</Accordion>



</section>
  )
}

export default Faqs;
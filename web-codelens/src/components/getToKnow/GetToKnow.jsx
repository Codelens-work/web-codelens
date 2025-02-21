import Section from '../section/Section' 
import LinkButton from '../linkButton/LinkButton'
import './getToKnow.css'

const GetToKnow = ({ t }) => {

  return(
    <Section className='get-to-know-section'>
      <div className="get-to-know-content">
        <h2 className='h2-line'>{t.heading}</h2>
        <span>{t.subheading}</span>
        <p>{t.description}</p>
        <LinkButton label={t['get-to-know-btn']} href={'/about'} size="normal" />
      </div>
      <div className="get-to-know-img">
        <img src="/imgs/get-to-know-us.webp" alt={t.heading + " photo"} />
      </div>
    </Section>
  )
}

export default GetToKnow;
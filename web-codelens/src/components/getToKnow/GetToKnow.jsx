import Section from '../section/Section' 
import LinkButton from '../linkButton/LinkButton'
import './getToKnow.css'

const GetToKnow = ({ t }) => {

  return(
    <Section>
      <div className="get-to-know-content">
        <h2 className='h2-line'></h2>
        <span></span>
        <p></p>
        <LinkButton label={t} href={t} size="normal" />
      </div>
      <div className="get-to-know-img">
        <img src="" alt="" />
      </div>
    </Section>
  )
}

export default GetToKnow;
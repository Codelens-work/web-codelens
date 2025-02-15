import Section from '../section/Section';
import './homeServices.css'

const HomeServices = ({ t }) => {

return(
  <Section className='home-services-section'>
    <h2 className='home-services-h2'>{t.heading}</h2>
    <span>{t.intro}</span>
    <div className='home-services-cards'>

    </div>
  </Section>
)
} 

export default HomeServices;
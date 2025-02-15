import Section from '../section/Section';
import cardHomeService from '../cardHomeService/cardHomeService';
import './homeServices.css'

const HomeServices = ({ t }) => {
const services = t.cards
return(
  <Section className='home-services-section'>
    <h2 className='home-services-h2'>{t.heading}</h2>
    <span>{t.intro}</span>
    <div className='home-services-cards'>
    {services.map((service, i) => {
      <cardHomeService
      key={service.i+ service.url}
      title={service.title}
      content={service.content}
      icon={service.icon}
      serviceUrl={service.url}
      cta={t['services-card-cta']}
      />
    }
    
    )}
    </div>
  </Section>
)
} 

export default HomeServices;
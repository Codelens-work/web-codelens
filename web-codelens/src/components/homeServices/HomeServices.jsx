import Section from '../section/Section';
import CardHomeService from '../cardHomeService/cardHomeService';
import './homeServices.css'

const HomeServices = ({ t }) => {
const services = t.cards
console.log(services)
return(
  <Section className='home-services-section'>
    <h2 className='home-services-h2 h2-line'>{t.heading}</h2>
    <span>{t.intro}</span>
    <div className='home-services-cards'>
    {services.map((service, i) => {
      return <CardHomeService
      key={i+ service.url}
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
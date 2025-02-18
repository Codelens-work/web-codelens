import Section from '../section/Section';
import CardHomeService from '../cardHomeService/cardHomeService';
import './homeServices.css'
import { useState } from 'react'

const HomeServices = ({ t }) => {
const services = t.cards
const [activeSlide, setActiveSlide] = useState(null)

return(
  <Section className='home-services-section'>
    <h2 className='home-services-h2 h2-line'>{t.heading}</h2>
    <span>{t.intro}</span>
    <div className='home-services-carousel'>
    <div className='home-carousel-cards'>
    {services.map((service, i) => {
      return <CardHomeService
      activeClass={activeSlide === i ? "activeSlide" : ""}
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
    <ul className="home-carousel-bullets">
      {services.map((s, i) => {
        return <li key={s+i} className={activeSlide === i ? "activeSlide" : ""} onClick={() => {setActiveSlide(i)}}></li>
      })}
    </ul>
    </div>
    
  </Section>
)
} 

export default HomeServices;
import Section from '../section/Section';
import CardHomeService from '../cardHomeService/cardHomeService';
import './homeServices.css'
import { useState, useRef } from 'react'

const HomeServices = ({ t }) => {
  const services = t.cards
  const [activeSlide, setActiveSlide] = useState(0)
  const [isTouching, setIsTouching] = useState(false)
  const [prevItemX, setPrevItemX] = useState(undefined)
  const [prevScrollLeft, setPrevScrollLeft] = useState(undefined)
  const carouselRef = useRef(null)

  const scrollStart = (e) => {
    setIsTouching(true);
    setPrevItemX(e.touches[0].pageX)
    setPrevScrollLeft(carouselRef.current.scrollLeft) 
  }

  const scrolling = (e) => {
    if(!isTouching) return;
    carouselRef.current.scrollLeft = e.touches[0].pageX
  }

  return (
    <Section className='home-services-section'>
      <div className="home-services-content">
        <h2 className='h2-line'>{t.heading}</h2>
        <span>{t.intro}</span>
      </div>
      <div className='home-services-carousel'>
        <div 
          className='home-carousel-slides' 
          ref={carouselRef} 
          onTouchStart={(e) => scrollStart(e)} 
          onTouchMove={(e) => scrolling(e)}
          onTouchEnd={() => setIsTouching(false)}
        >
          {services.map((service, i) => {
            return <CardHomeService
              activeClass={activeSlide === i ? "activeSlide" : ""}
              key={i + service.url}
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
            return <li key={s + i} className={activeSlide === i ? "activeSlide" : ""} onClick={() => { setActiveSlide(i) }}></li>
          })}
        </ul>
      </div>

    </Section>
  )
}

export default HomeServices;
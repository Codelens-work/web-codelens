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

  // Guarda valores iniciales de cuando el usuario tocó el carousel
  const scrollStart = (e) => {
    setIsTouching(true);
    setPrevItemX(e.touches[0].pageX);
    setPrevScrollLeft(carouselRef.current.scrollLeft); 
    return
  }

  // Usa los valores de la función ScrollStart para calcular cuánto mover el slider
  const scrolling = (e) => {
    if(!isTouching) return;
    let pageX = e.touches[0].pageX;
    let diff = pageX - prevItemX;
    carouselRef.current.scrollLeft = prevScrollLeft - diff;
    return
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
import Section from '../section/Section';
import CardHomeService from '../cardHomeService/cardHomeService';
import './homeServices.css'
import { useState, useRef , useEffect} from 'react'

const HomeServices = ({ t }) => {
  const services = t.cards
  const [activeSlide, setActiveSlide] = useState(0)
  const [isTouching, setIsTouching] = useState(false) // isMousedown
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const carouselRef = useRef(null)
  const cardRefs = useRef([])
  const length = services.length
  const cardWidth = 320

  useEffect(() => {
    if (cardRefs.current[activeSlide]) {
      cardRefs.current[activeSlide].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeSlide]);

  // Guarda valores iniciales de cuando el usuario tocó el carousel
  const handleMouseDown = (e) => {
    e.preventDefault()
    setIsTouching(true);
    setStartX(e.pageX); 
    console.log("click", isTouching)
    return
  }

  const handleMouseUp = () =>{
    setIsTouching(false)
    console.log('Dejó de hacer click', isTouching)
    return 
  }
  // Usa los valores de la función ScrollStart para calcular cuánto mover el slider
  const scrolling = (e) => {
    if(!isTouching || !carouselRef.current) return;
    const deltaX = e.clientX - startX;
    carouselRef.current.scrollLeft = scrollLeft - deltaX;
    return
  }

  const prevSlide = () => {
      setActiveSlide(activeSlide === 0 ? length - 1 : activeSlide - 1 )
  }

  const nextSlide = () => {
    setActiveSlide(activeSlide === length - 1 ? 0 : activeSlide + 1 )
}

  return (
    <Section className='home-services-section'>
      <div className="home-services-content">
        <h2 className='h2-line'>{t.heading}</h2>
        <span>{t.intro}</span>
      </div>
      <div className='home-services-carousel'>
        <div className="izq" onClick={prevSlide}>
        {"<--"}
        </div>
        <div className="der" onClick={nextSlide}>
        {"-->"}
        </div>
        <div 
          className='home-carousel-slides' 
          ref={carouselRef} 
          style={{ transform: `translateX(-${activeSlide * cardWidth}px)` }}
          // Eventos touch
          // onTouchStart={(e) => scrollStart(e)} 
          // onTouchMove={(e) => scrolling(e)}
          // onTouchEnd={() => {
          //     setIsTouching(false)
          //   }}

          // Eventos mouse
          // onMouseDown={(e) => {handleMouseDown(e)}}
          // onMouseMove={(e) => {scrolling(e)}}
          // onMouseUp={() => {handleMouseUp()}}
        >
          {services.map((service, i) => {
            return <CardHomeService
              ref={(el) => (cardRefs.current[i] = el)}
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
            return <li key={s + i} className={activeSlide === i ? "activeSlide" : ""} onClick={() => setActiveSlide(i)}></li>
          })}
        </ul>
      </div>

    </Section>
  )
}

export default HomeServices;

/*

- Si el usuario scrollea para la izquierda, restar el width de la card y el gap 
- sino, añadirlo

- Hacer andar botones

*/
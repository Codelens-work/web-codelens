import Section from "../section/Section";
import CardHomeService from "../cardHomeService/cardHomeService";
import "./homeServices.css";
import { useState, useRef, useEffect } from "react";

const HomeServices = ({ t }) => {
  const services = t.cards;
  const [activeSlide, setActiveSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0); //Guarda posicion inicial del mouse
  const [offsetX, setOffsetX] = useState(0); // Guarda distancia q se arrastro
  const carouselRef = useRef(null);
  const length = services.length;
  const cardWidth = 320; //tamaños de las cards
  const gap = 35;

  // Centrar automáticamente la card en el carrusel
  useEffect(() => {
    if (carouselRef.current) {
      //se  calcula el desplazamiento horizontal
      //newScrollLeft es la cantidad de pixeles que se desplaza
      const newScrollLeft = activeSlide * (cardWidth + gap); 
      carouselRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
    }
  }, [activeSlide]);

  
  //marca que se empezo a arrastrar y la pocicion inicial
  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches ? e.touches[0].clientX : e.clientX);
    setOffsetX(0);
  };


  //calcula el cuanto se movio el arrastre
  const handleDragMove = (e) => {
    if (!isDragging) return;
    const currentX = e.touches ? e.touches[0].clientX : e.clientX;
    setOffsetX(currentX - startX);
  };


  //calcula cuando dejo de arrastrase
  const handleDragEnd = () => {
    setIsDragging(false);
    if (Math.abs(offsetX) > cardWidth / 4) {
      setActiveSlide((prev) => (offsetX < 0 ? Math.min(prev + 1, length - 1) : Math.max(prev - 1, 0)));
    }
    setOffsetX(0);
  };

  return (
    <Section className="home-services-section">
      <div className="home-services-content">
        <div className="wrapper">
          <h2 className="h2-line">{t.heading}</h2>
        </div>
        <span>{t.intro}</span>
      </div>
      <div className="home-services-carousel">
        <div
          className="home-carousel-slides"
          ref={carouselRef}
          style={{
            transform: `translateX(calc(-${activeSlide * cardWidth}px + ${offsetX}px))`,
            transition: isDragging ? "none" : "transform 0.3s ease-out",
          }}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          {services.map((service, i) => (
            <div key={service.url}>
              <CardHomeService
                title={service.title}
                content={service.content}
                icon={service.icon}
                serviceUrl={service.url}
                cta={t["services-card-cta"]}
              />
            </div>
          ))}
        </div>
        <ul className="home-carousel-bullets">
          {services.map((_, i) => (
            <li key={i} className={activeSlide === i ? "activeSlide" : ""} onClick={() => setActiveSlide(i)}></li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default HomeServices;

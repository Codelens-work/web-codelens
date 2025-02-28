import Section from '../section/Section';
import CardHomeService from '../cardHomeService/cardHomeService';
import './homeServices.css'
import { useState, useRef, useEffect } from "react";

const HomeServices = ({ t }) => {
  const services = t.cards;
  const [activeSlide, setActiveSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const carouselRef = useRef(null);
  const cardRefs = useRef([]);
  const length = services.length;
  const cardWidth = 320;

  // Centrar automáticamente la card activa
  useEffect(() => {
    if (cardRefs.current[activeSlide]) {
      cardRefs.current[activeSlide].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeSlide]);

  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches ? e.touches[0].clientX : e.clientX);
    setOffsetX(0);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    const currentX = e.touches ? e.touches[0].clientX : e.clientX;
    const deltaX = currentX - startX;
    setOffsetX(deltaX);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    if (Math.abs(offsetX) > cardWidth / 2) {
      setActiveSlide((prev) =>
        offsetX < 0 ? Math.min(prev + 1, length - 1) : Math.max(prev - 1, 0)
      );
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
        {/* <div className="izq" onClick={() => setActiveSlide(Math.max(0, activeSlide - 1))}>{"<--"}</div>
        <div className="der" onClick={() => setActiveSlide(Math.min(length - 1, activeSlide + 1))}>{"-->"}</div> */}
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
            <div
              key={service.url}
              ref={(el) => (cardRefs.current[i] = el)}
            >
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
            <li
              key={i}
              className={activeSlide === i ? "activeSlide" : ""}
              onClick={() => setActiveSlide(i)}
            ></li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default HomeServices;

/*

- Si el usuario scrollea para la izquierda, restar el width de la card y el gap 
- sino, añadirlo

- Hacer andar botones

*/
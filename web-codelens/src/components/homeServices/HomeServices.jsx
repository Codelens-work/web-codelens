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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  const cardWidth = 320; //tamaños de las cards
  const gap = 35;

   // Detectar cambios en el tamaño de la ventana y actualizar `isMobile`
   useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 500);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Centrar automáticamente la card en el carrusel
  useEffect(() => {
    if (isMobile && carouselRef.current) {
      //se  calcula el desplazamiento horizontal
      //newScrollLeft es la cantidad de pixeles que se desplaza
      const newScrollLeft = activeSlide * (cardWidth + gap); 
      carouselRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
    }
  }, [activeSlide, isMobile]);

  
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
      <div className={`home-services-carousel ${isMobile ? "mobile" : "desktop"}`}>
        <div
          className="home-carousel-slides"
          ref={carouselRef}
          style={{
            transform: isMobile ? `translateX(${-activeSlide * (cardWidth + gap)}px)` : "none",
            transition: isDragging ? "none" : "transform 0.3s ease-out",
            overflow: isMobile ? "auto" : "visible", // En desktop desactiva el scroll
            justifyContent: isMobile ? "flex-start" : "center", // Centra en desktop
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

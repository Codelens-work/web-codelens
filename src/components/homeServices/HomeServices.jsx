import { useState, useEffect, useRef } from "react";
import Section from "../section/Section";
import CardHomeService from "../cardHomeService/cardHomeService";
import "./homeServices.css";

const HomeServices = ({ t }) => {
  const services = t.cards;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliderActive, setIsSliderActive] = useState(window.innerWidth <= 500);
  const sliderRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const handleResize = () => {
      setIsSliderActive(window.innerWidth <= 654);
      setCurrentIndex(0); 
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToSlide = (index) => {
    if (index >= 0 && index < services.length) {
      setCurrentIndex(index);
    }
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const deltaX = touchStartX.current - touchEndX.current;
    if (deltaX > 50) {
      goToSlide(currentIndex + 1); 
    } else if (deltaX < -50) {
      goToSlide(currentIndex - 1); 
    }
  };


  return (
    <Section className="home-services-section">
      <div className="home-services-content">
        <div className="wrapper">
          <h2 className="h2-line">{t.heading}</h2>
        </div>
        <span className="paragraph-custom">{t.intro}</span>
      </div>
      <div className="home-services-carousel">
        {isSliderActive ? (
          <>
            <div
              className="slider-container"
              ref={sliderRef}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="slider"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {services.map((service, i) => (
                  <div key={service.url} className="slide">
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
            </div>

            {/* Bullets */}
            <ul className="home-carousel-bullets">
              {services.map((_, index) => (
                <li
                  key={index}
                  className={index === currentIndex ? "activeSlide" : ""}
                  onClick={() => goToSlide(index)}
                ></li>
              ))}
            </ul>
          </>
        ) : (
          <div className="home-carousel-slides">
            {services.map((service, i) => (
              <div key={service.url} className="card-container-mobile">
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
        )}
      </div>
    </Section>
  );
};

export default HomeServices;

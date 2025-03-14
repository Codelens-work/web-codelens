import React, { useState } from "react";
import PropTypes from "prop-types";
import { Trans } from "react-i18next";
import "./legalSection.css";

const SectionDisplay = ({ titles, description }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const transTags = {ul: <ul />, li: <li />, strong: <strong />, a: <a />, div: <div/>, h4: <h4/>}

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const selectSection = (i) => {
    setActiveIndex(activeIndex === i ? -1 : i);
  };

  if (isMobile) {
    return (
      <div className="section-display-container mobile">
        {titles.map((title, i) => (
          <div key={i} className="accordion-item">
            <div 
              className={`accordion-title ${activeIndex === i ? "active" : ""}`}
              onClick={() => selectSection(i)}
            >
              {title}
            </div>
            <div className={`accordion-content ${activeIndex === i ? "show" : ""}`}>
              <Trans components={transTags}>{description[i]}</Trans>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="section-display-container desktop">
      <div className="left-column titles-for-display">
        {titles.map((title, i) => (
          <span 
            key={i} 
            onClick={() => selectSection(i)} 
            className={activeIndex === i ? "active" : ""}
          >
            {title}
          </span>
        ))}
      </div>
      <div className="right-column p-for-display">
        <Trans components={transTags}>{description[activeIndex]}</Trans>
      </div>
    </div>
  );
};

SectionDisplay.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SectionDisplay;

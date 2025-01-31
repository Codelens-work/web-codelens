import React, { useState } from "react";
import PropTypes from "prop-types";

const SectionDisplay = ({ titles, description }) => {
  //deberia recibir un array de ambos y mapearlo
  const [activeIndex, setActiveIndex] = useState(0);

  const selectSection = (i) => {
    setActiveIndex(i);
  };

  return (
    <div className="section-display-container ">
      <div className="left-column titles-for-display">
        {/*active tiene que apaerecer solo si se hace click en el titulo*/}
        {titles.map((title, i) => (
          <p key={i} onClick={()=> selectSection(i)} className={activeIndex === i ? "active" : ""}>
            {title}
          </p>
        ))}
      </div>
      <div className="right-column p-for-display ">
        <p>{description[activeIndex]}</p>
      </div>
    </div>
  );
};

SectionDisplay.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SectionDisplay;

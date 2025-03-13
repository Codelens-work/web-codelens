import React from "react";
import PropTypes from "prop-types";
import "../lagalSection/legalSection.css";

const LegalDescription = ({ paragraph, secondParagraph, thirdParagraph, textColor }) => {
  return (
    <div className="legal-description-container">
      <div className="right-column">
        <img src="/imgs/conditions.svg" alt='conditions'  />
      </div>

      <div className="left-column">
        <p>{paragraph}</p>
        <p>{secondParagraph}</p>
        <p>{thirdParagraph} <spam className= "textColor">{textColor}</spam></p>
      </div>
    </div>
  );
};
LegalDescription.porpTypes = {
  paragraph: PropTypes.string.isRequired,
  secondParagraph: PropTypes.string.isRequired,
  thirdParagraph: PropTypes.string,
  textColor: PropTypes.string
};

export default LegalDescription;

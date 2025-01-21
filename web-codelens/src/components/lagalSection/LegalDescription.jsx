import React from "react";
import PropTypes from "prop-types";
import "../lagalSection/legalSection.css";

const LegalDescription = ({ img, paragraph, secondParagraph, thirdParagraph, textColor }) => {
  return (
    <div className="legal-description-container">
      <div className="right-column">
        <img src={img} alt={`img${img}`}  />
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
  img: PropTypes.string,
  paragraph: PropTypes.string.isRequired,
  secondParagraph: PropTypes.string.isRequired,
  thirdParagraph: PropTypes.string,
  textColor: PropTypes.string
};

export default LegalDescription;

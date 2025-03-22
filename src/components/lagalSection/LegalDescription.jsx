import PropTypes from "prop-types";
import "./legalSection.css";

const LegalDescription = ({altImg, paragraph, secondParagraph, thirdParagraph, textColor }) => {
  return (
    <div className="legal-description-container">
      <div className="right-column">
        <img src="/imgs/conditions.svg" alt={altImg}  />
      </div>

      <div className="left-column">
        <p>{paragraph}</p>
        <p>{secondParagraph}</p>
        <p>{thirdParagraph} <span className= "textColor">{textColor}</span></p>
      </div>
    </div>
  );
};
LegalDescription.porpTypes = {
  altImg: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  secondParagraph: PropTypes.string.isRequired,
  thirdParagraph: PropTypes.string,
  textColor: PropTypes.string
};

export default LegalDescription;

import LegalDescription from "./LegalDescription";
import PropTypes from "prop-types";
import SectionDisplay from "./SectionDisplay";
import "./legalSection.css";


const LegalSection = ({
  altImg,
  paragraph,
  secondParagraph,
  thirdParagraph,
  textColor,
  titles,
  description,
}) => {
  return (
    <div>
      <LegalDescription
        altImg={altImg}
        paragraph={paragraph}
        secondParagraph={secondParagraph}
        thirdParagraph={thirdParagraph}
        textColor={textColor}
      />
      <SectionDisplay titles={titles} description={description} />
    </div>
  );
};

LegalSection.propTypes = {
  title: PropTypes.string.isRequired,
  altImg: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  secondParagraph: PropTypes.string.isRequired,
  thirdParagraph: PropTypes.string,
  textColor: PropTypes.string,

  titles: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default LegalSection;

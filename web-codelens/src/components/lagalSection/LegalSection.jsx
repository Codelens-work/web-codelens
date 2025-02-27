import LegalDescription from "./LegalDescription";
import PropTypes from "prop-types";
import SectionDisplay from "./SectionDisplay";
import "../lagalSection/legalSection.css";


const LegalSection = ({
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
  paragraph: PropTypes.string.isRequired,
  secondParagraph: PropTypes.string.isRequired,
  thirdParagraph: PropTypes.string,
  textColor: PropTypes.string,

  titles: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default LegalSection;

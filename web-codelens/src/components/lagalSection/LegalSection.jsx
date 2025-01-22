import React from "react";
import LegalHeader from "./LegalHeader";
import LegalDescription from "./LegalDescription";
import PropTypes from "prop-types";

const LegalSection = ({
  title,
  paragraph,
  secondParagraph,
  thirdParagraph,
  textColor,
}) => {
  return (
    <div>
      <LegalHeader title={title} />
      <LegalDescription
        paragraph={paragraph}
        secondParagraph={secondParagraph}
        thirdParagraph={thirdParagraph}
        textColor={textColor}
      />
    </div>
  );
};

LegalSection.propTypes = {
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  secondParagraph: PropTypes.string.isRequired,
  thirdParagraph: PropTypes.string,
  textColor: PropTypes.string,
};

export default LegalSection;

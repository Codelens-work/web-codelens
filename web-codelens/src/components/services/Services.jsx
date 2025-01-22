import React from "react";
import Service from "./Service";
import PropTypes from "prop-types"

const Services = ({ img, titleOne, paragraphOne, titleTwo, items }) => {
  return (
    <div>
      <Service
        img={img}
        titleOne={titleOne}
        paragraphOne={paragraphOne}
        titleTwo={titleTwo}
        items={items}
      />
    </div>
  );
};

Services.propTypes = {
  img: PropTypes.string.isRequired,
  titleOne: PropTypes.string.isRequired,
  paragraphOne: PropTypes.string.isRequired,
  titleTwo: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Services;

import React from "react";
import Service from "./Service";
import PropTypes from "prop-types";
import ServiceCardSection from "./ServiceCardSection";

const Services = ({
  img,
  titleOne,
  paragraphOne,
  titleTwo,
  items,
  titleCarts,
  descriptionCart,
}) => {
  return (
    <div>
      <Service
        img={img}
        titleOne={titleOne}
        paragraphOne={paragraphOne}
        titleTwo={titleTwo}
        items={items}
      />
      <ServiceCardSection
        titleCarts={titleCarts}
        descriptionCart={descriptionCart}
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

  titleCarts: PropTypes.arrayOf(PropTypes.string).isRequired,
  descriptionCart: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Services;

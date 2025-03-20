import React from "react";
import Service from "./Service";
import PropTypes from "prop-types";
import ServiceCardSection from "./ServiceCardSection";
import ServiceContact from "./ServiceContact";

const Services = ({
  img,
  altImg,
  titleOne,
  paragraphOne,
  titleTwo,
  items,
  titleCarts,
  descriptionCart,
  titleServiceContact,
  paragraphServiceContact,
}) => {
  return (
    <div>
      <Service
        img={img}
        altImg={altImg}
        titleOne={titleOne}
        paragraphOne={paragraphOne}
        titleTwo={titleTwo}
        items={items}
      />
      <ServiceCardSection
        titleCarts={titleCarts}
        descriptionCart={descriptionCart}
      />
      <ServiceContact 
      titleServiceContact={titleServiceContact}
      paragraphServiceContact={paragraphServiceContact}/>
    </div>
  );
};

Services.propTypes = {
  img: PropTypes.string.isRequired,
  altImg: PropTypes.string.isRequired,
  titleOne: PropTypes.string.isRequired,
  paragraphOne: PropTypes.string.isRequired,
  titleTwo: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,

  titleCarts: PropTypes.arrayOf(PropTypes.string).isRequired,
  descriptionCart: PropTypes.arrayOf(PropTypes.string).isRequired,

  titleServiceContact: PropTypes.string.isRequired,
  paragraphServiceContact: PropTypes.string.isRequired,
};
export default Services;

import React from "react";
import PropTypes from "prop-types";
import ServiceCard from "./ServiceCard";

const ServiceCardSection = ({ titleCarts, descriptionCart }) => {
  return (
    <div className="secion-card-container">
      <h2>Características del servicio</h2>
      <div className="card-group">
        {titleCarts.map((title, index) => (
          <ServiceCard
            titleCarts={title}
            descriptionCart={descriptionCart[index]}
          />
        ))}
      </div>
    </div>
  );
};

ServiceCardSection.propTypes = {
  titleCarts: PropTypes.string,
  descriptionCart: PropTypes.string,
};
export default ServiceCardSection;

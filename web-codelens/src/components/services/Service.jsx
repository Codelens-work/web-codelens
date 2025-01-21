import React from "react";
import "../services/service.css";
import PropTypes from "prop-types"

const Service = ({ img, titleOne, paragraphOne, titleTwo, paragraphTwo }) => {
  return (
    <div className="service-container">
      <div className="right-column">
        <div>
          <h2>{titleOne}</h2>
          <p>{paragraphOne}</p>
        </div>
        <div>
          <h2>{titleTwo}</h2>
          <p>{paragraphTwo}</p>
        </div>
      </div>
      <div className="left-column">
        <img src={img} alt={`imgService`} />
      </div>
    </div>
  );
};

Service.propTypes={
    img: PropTypes.string.isRequired,
    titleOne: PropTypes.string.isRequired,
    paragraphOne: PropTypes.string.isRequired,
    titleTwo: PropTypes.string.isRequired,
    paragraphTwo: PropTypes.string.isRequired
}

export default Service;

import React from "react";
import "../services/service.css";
import PropTypes from "prop-types"

const Service = ({ img, titleOne, paragraphOne, titleTwo, items }) => {
  console.log(img)
  return (
    <div className="service-container">
      <div className="right-column">
        <div className="paragraphOne">
          <h2>{titleOne}</h2>
          <p>{paragraphOne}</p>
        </div>
        <div className="items">
          <h2>{titleTwo}</h2>
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="left-column">
        <img src={img}alt={`imgService`} />
      </div>
    </div>
  );
};

Service.propTypes={
    img: PropTypes.string.isRequired,
    titleOne: PropTypes.string.isRequired,
    paragraphOne: PropTypes.string.isRequired,
    titleTwo: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Service;

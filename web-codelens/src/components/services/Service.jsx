import React from "react";
import "../services/service.css";
import PropTypes from "prop-types"
import Section  from "../section/Section";

const Service = ({ img, titleOne, paragraphOne, titleTwo, items }) => {
  return (
    <div className="service-section-container">
      <Section>
        <div className="service-container">
          <div className="right-column-service">
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
            <div className="left-column-service">
              <img src={img}alt={`imgService`} />
            </div>
        </div>
      </Section>
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

import React from "react";
import PropTypes from "prop-types";
import ServiceCard from "./ServiceCard";
import { useTranslation } from 'react-i18next'
import Section from "../section/Section";

const ServiceCardSection = ({ titleCarts, descriptionCart }) => {
    const { t } = useTranslation();

  return (
   <div className="service-card-section-container">
      <Section>
        <div className="secion-card-container">
         <div className="title-container-cardService">
          <h2 className="h2-line">{t("services-pages.api-development.features-section.heading")}</h2>
         </div>
          <div className="card-group">
            {titleCarts.map((title, index) => (
              <ServiceCard
              key={index}
                titleCarts={title}
                descriptionCart={descriptionCart[index]}
              />
            ))}
          </div>
        </div>
      </Section>
   </div>
  );
};

ServiceCardSection.propTypes = {
  titleCarts: PropTypes.arrayOf(PropTypes.string).isRequired,
  descriptionCart: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default ServiceCardSection;

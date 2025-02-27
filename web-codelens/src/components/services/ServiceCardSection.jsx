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
          <h2>{t("services-pages.api-development.features-section.heading")}</h2>
          <div className="card-group">
            {titleCarts.map((title, index) => (
              <ServiceCard
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
  titleCarts: PropTypes.string,
  descriptionCart: PropTypes.string,
};
export default ServiceCardSection;

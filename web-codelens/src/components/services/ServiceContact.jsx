import React from "react";
import "../services/service.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next'


import PropTypes from "prop-types";
import LinkButton from "../linkButton/LinkButton";

const ServiceContact = ({titleServiceContact, paragraphServiceContact}) => {
  const { t } = useTranslation()
  
  return (
    <div className="service-contact">
      <h2>{titleServiceContact}</h2>
      <p>{paragraphServiceContact}</p>
      <LinkButton href="/#Contact" label={t('home.contact-section.heading')} size="small"/>
    </div>
  );
};

ServiceContact.propTypes = {
    titleServiceContact: PropTypes.string.isRequired,
    paragraphServiceContact: PropTypes.string.isRequired,
};

export default ServiceContact;

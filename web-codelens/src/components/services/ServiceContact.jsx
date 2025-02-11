import React from "react";
import "../services/service.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next'


import PropTypes from "prop-types";
import "/src/components/linkButton/linkbutton.css"

const ServiceContact = ({titleServiceContact, paragraphServiceContact}) => {
  const { t } = useTranslation()
  
  const navigate = useNavigate();

  return (
    <div className="service-contact">
      <h2>{titleServiceContact}</h2>
      <p>{paragraphServiceContact}</p>
      <a className={`link-btn link-btn-small`} onClick={()=>navigate("/#Contact")}>
      {t('home.contact-section.heading')}
      </a>
    </div>
  );
};

ServiceContact.propTypes = {
    titleServiceContact: PropTypes.string.isRequired,
    paragraphServiceContact: PropTypes.string.isRequired,
};

export default ServiceContact;

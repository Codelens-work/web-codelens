import React from "react";
import "../services/service.css";
import { useNavigate } from "react-router-dom";

import PropTypes from "prop-types";
import "/src/components/linkButton/linkbutton.css"
const ServiceContact = ({titleServiceContact, paragraphServiceContact}) => {
  const navigate = useNavigate();

  return (
    <div className="service-contact">
      <h2>¿Listo para optimizar tu negocio con una aplicación personalizada?</h2>
      <p>Hablemos sobre cómo CodeLens puede desarrollar una solución a tu medida.</p>
      <a className={`link-btn link-btn-small`} onClick={()=>navigate("/#Contact")}>
      CONTACTANOS
      </a>
    </div>
  );
};

ServiceContact.propTypes = {
    titleServiceContact: PropTypes.string.isRequired,
    paragraphServiceContact: PropTypes.string.isRequired,
};

export default ServiceContact;

import React, { useRef, useEffect } from "react";
import "../services/service.css";
import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useTranslation } from 'react-i18next'


import PropTypes from "prop-types";
import LinkButton from "../linkButton/LinkButton";

const ServiceContact = ({titleServiceContact, paragraphServiceContact}) => {
  const { t, i18n } = useTranslation()
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, threshold: 0.1 });

  useEffect(() => {
    console.log("Elemento referenciado:", ref.current);
    console.log("isInView:", isInView);
  }, [isInView]);
  
  return (
    <div ref={ref} className="service-contact">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {titleServiceContact}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        {paragraphServiceContact}
      </motion.p>
      <LinkButton href={i18n.language === 'en' ? "/#contact" : "/#contacto"} label={t("home.contact-section.heading")} size="small" />
    </div>
  );
};

ServiceContact.propTypes = {
    titleServiceContact: PropTypes.string.isRequired,
    paragraphServiceContact: PropTypes.string.isRequired,
};

export default ServiceContact;

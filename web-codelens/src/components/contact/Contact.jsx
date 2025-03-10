import ContactForm from "./ContactForm";
import "../contact/contact.css";
import { useTranslation } from "react-i18next";
import Section from "../section/Section";
import { motion } from 'framer-motion';

const Contact = () => {
 const { t } = useTranslation();
  const tContact = t("home.contact-section", { returnObjects: true });

  // Variants para las animaciones
  const slideInLeft = {
    hidden: { opacity: 0, x: -50 }, // Antes -100
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };
  
  const slideInRight = {
    hidden: { opacity: 0, x: 50 }, // Antes 100
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
   <Section className="contact-container-section">
      <div id="Contact" className="contact-container">
        <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount:  0.5 }} // Se activa cuando el 20% del componente es visible
        variants={slideInLeft}
        className="left-c text-container"
      >
            <h2 className="h2-invitation-one h2-line">{tContact.heading}</h2>
            <h3 className="h3-invitation">
              {t("home.contact-section.intro-text")}
            </h3>
            <p className="invitation-one">
            {t("home.contact-section.intro-description")}
            </p>
            <img
              className="logo-codelens"
              src="public/logos/Logo_CodeLens_contacto.svg"
              alt="Logo Codelens"
            />
            <h2 className="h2-invitation-two">
            {t("home.contact-section.contact-cta")}
            </h2>
            <p className="invitation-two">
            {t("home.contact-section.socials-message")}
            </p>
            <p className="invitation-three"> <span><img src="..\icons\Message-contact.svg"/></span>
            {t("home.contact-section.chat-text")}</p>
            <a className="email" href="mailto:contacto@codelenstech.com">contacto@codelenstech.com</a>
            <p className="invitation-three"> <span><img src="..\icons\Chat-contact.svg"/></span>{t("home.contact-section.media-text")}</p>
            <div className="social-logo-container">
              {/* <img
                className="logo-social"
                src="public/social/facebook.svg"
                alt="facebook"
              /> */}
              <a href="https://www.instagram.com/codelens.tech/" 
                target="_blank"
                rel="noopener noreferrer" 
                className="social-link">
                <img
                  className="logo-social"
                  src="public/social/instagram.svg"
                  alt="instagram"
                />
                <span className="tooltip">Codelens.tech</span>
              </a>
            </div>
        </motion.div>
        <motion.div 
          className="right-c "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount:  0.5 }} // Se activa cuando el 20% del componente es visible
          variants={slideInRight}
        >
          <ContactForm />
        </motion.div>
      </div>
   </Section>
  );
};

export default Contact;

import React from "react";
import ContactForm from "./ContactForm";
import "../contact/contact.css";
import { useTranslation } from "react-i18next";

const Contact = () => {
 const { t, i18n } = useTranslation();
  const tContact = t("home.contact-section", { returnObjects: true });


  return (
    <div id="Contact" className="contact-container">
      <div className="left-c">
        <div className="text-container">
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
          <p className="email">codelens@gmail.com</p>
          <p className="invitation-three"> <span><img src="..\icons\Chat-contact.svg"/></span>{t("home.contact-section.media-text")}</p>
          <div>
            <img
              className="logo-social"
              src="public/social/facebook.svg"
              alt="facebook"
            />
            <img
              className="logo-social"
              src="public/social/instagram.svg"
              alt="instagram"
            />
          </div>
        </div>
      </div>
      <div className="right-c ">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;

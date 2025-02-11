import React from "react";
import ContactForm from "./ContactForm";
import "../contact/contact.css";

const Contact = () => {
  return (
    <div id="Contact" className="contact-container">
      <div className="left-c">
        <div className="text-container">
          <h2 className="h2-invitation-one">Contáctenos</h2>
          <h3 className="h3-invitation">
            Estamos aquí para ayudarte a subir de nivel. ¡Hablemos sobre tu
            próximo proyecto!
          </h3>
          <p className="invitation-one">
            Ya sea que necesites un sitio web desde cero, mejorar el que ya
            tienes o desarrollar una aplicación personalizada, estamos aquí para
            ayudarte. En CodeLens, estamos comprometidos con soluciones
            tecnológicas claras y efectivas. Escríbenos y descubre cómo podemos
            colaborar.
          </p>
          <img
            className="logo-codelens"
            src="public/logos/Logo_CodeLens_contacto.svg"
            alt="Logo Codelens"
          />
          <h2 className="h2-invitation-two">
            Ponte en contacto <br />
            con nosotros
          </h2>
          <p className="invitation-two">
            En CodeLens, nos encanta colaborar con personas y empresas
            apasionadas. ¡Esperamos saber de ti pronto!
          </p>

          <p className="invitation-three"> <span><img src="..\icons\Message-contact.svg"/></span>Chatea con Nosotros</p>
          <p className="email">codelens@gmail.com</p>
          <p className="invitation-three"> <span><img src="..\icons\Chat-contact.svg"/></span>Visita nuestras redes</p>
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

import React from "react";
import LegalSection from "../../components/lagalSection/LegalSection";

const PrivacyPolicy = () => {
  return (
    <LegalSection
      title={"Política de Privacidad de CodeLens"}
      paragraph={
        "En CodeLens, la protección de su información personal es nuestra prioridad. Esta política de privacidad explica cómo recopilamos, utilizamos, almacenamos y protegemos sus datos personales cuando utiliza nuestro sitio web o nuestros servicios."
      }
      secondParagraph={
        "Nos tomamos muy en serio la privacidad de nuestros usuarios. Al utilizar nuestro sitio “(https://codelens.com/)”, los clientes aceptan los términos de esta Política de Privacidad."
      }
    />
  );
};

export default PrivacyPolicy;

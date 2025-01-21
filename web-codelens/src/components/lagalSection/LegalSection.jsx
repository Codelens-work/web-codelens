import React from "react";
import LegalHeader from "./LegalHeader";
import LegalDescription from "./LegalDescription";

const LegalSection = () => {
  return (
    <div>
      <LegalHeader title={"Titlexxx"} />
      <LegalDescription
        img={"public/imgs/conditions.svg"}
        paragraph={
          "¡Bienvenido a los términos de uso de CodeLens! Estamos realmente muy contentos de que usted esté a aquí. Gracias por elegir usar nuestros servicios."
        }
        secondParagraph={
          "A continuación hemos enumerado términos legales importantes que se aplican a cualquier persona que contrata nuestros servicios. Estos términos son necesarios para la protección tanto de usted como de nosotros y para hacer que nuestros servicios sean posibles y más agradables para todos."
        }
        thirdParagraph={
          "Sabemos que leer términos legales puede ser agotador. Por eso, intentamos hacer que sea una experiencia más agradable. Si tiene alguna duda lo invitamos a"
        }
        textColor={"comunicarse con nosotros."}
      />
    </div>
  );
};

export default LegalSection;

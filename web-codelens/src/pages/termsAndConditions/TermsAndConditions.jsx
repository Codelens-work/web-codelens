import React from "react";
import LegalSection from "../../components/lagalSection/LegalSection";

const TermsAndConditions = () => {
  return (
    <LegalSection
      title={"Condiciones generales de prestación de servicios"}
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
      
      
      titles={["Acuerdo de Servicios","Medios de Pago","Política de Reembolsos","Propiedad Intelectual","Productos y servicios","Enlaces a sitios de terceros","Confidencialidad","Modificaciones y Revisiones","Exención de responsabilidad","Soporte Técnico y Mantenimiento","Fuerza mayor","Modificaciones a los Términos y Condiciones","Derechos de desistimiento","Terminación de servicio"]}
      description={["Al contratar los servicios de desarrollo de software y diseño web ofrecidos por CodeLens, el cliente acepta todos los términos y condiciones aquí establecidos. Nos comprometemos a prestar nuestros servicios de manera profesional, cumpliendo con los estándares de calidad y plazos acordados con el cliente.","texto2texto2texto2texto2texto2texto2texto2texto2texto2texto2texto2texto2texto2texto2texto2","Texto3Texto3Texto3Texto3Texto3Texto3Texto3Texto3Texto3Texto3Texto3Texto3","Texto4","Texxto5","Texto6","texto7","texto8","texto9","texto10"]}
    />
  );
};

export default TermsAndConditions;

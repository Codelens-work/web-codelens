import React from "react";
import { Hero } from "../../../components/hero/Hero";

import "./apiservice.css";
import LinkButton from "../../../components/linkButton/LinkButton";

import Services from "../../../components/services/Services.jsx";

export function AppiService() {
  return (
    <>
      <Hero
        media={{
          type: "image",
          src: "/hero/hero-api.webp",
        }}
      >
        <div className="hero__title-container">
          <h1 className="title-service">
            Desarrollo de APIS que Potencian a tus Usuarios
          </h1>
          <p className="paragraph-service">
            En CodeLens, diseñamos y desarrollamos APIs que no solo conectan
            sistemas, sino que también permiten a nuestros clientes ofrecer
            servicios innovadores a sus propios usuarios. Estas APIs están
            diseñadas para ser seguras, escalables y fáciles de implementar,
            asegurando que tus clientes puedan integrarlas sin complicaciones.
          </p>
          <LinkButton label="CONTACTANOS" href="#" size="small" />
        </div>
      </Hero>

      <Services
        img="../service/api.svg"
        titleOne="Por Qué Elegir APIs Personalizadas para Tu Negocio?"
        paragraphOne="En un mundo digital donde la conectividad y la eficiencia son clave, las APIs personalizadas te permiten crear soluciones hechas a medida para satisfacer las necesidades específicas de tu negocio."
        titleTwo="Beneficios de elegirnos"
        items={[
          "APIs listas para integraciones masivas.",
          "Seguridad garantizada para proteger datos.",
          "Documentación clara para desarrolladores.",
          "Soporte técnico post-implementación.",
        ]}
        
        titleCarts={[
          "Desarrollo de Controladores",
          "Diseño y Desarrollo de Endpoints",
          "Modelado de Base de Datos",
          "Data Entry y Carga Inicial de Datos",
          "Documentación Completa",
          "Seguridad y Autenticación",
          "Soporte y Mantenimiento Opcionales",
        ]}
        descriptionCart={["Creamos la lógica que conecta y gestiona la comunicación entre tus aplicaciones y la base de datos, asegurando una funcionalidad precisa y eficiente.", "Diseñamos puntos de acceso claros y bien definidos para que otras aplicaciones o sistemas puedan interactuar con tu API de forma segura y fluida.", "Si no tienes una base de datos propia, diseñamos y construimos una desde cero, optimizada para la estructura de tu negocio y preparada para escalar.", "Nos encargamos de la carga inicial de información para que tus APIs estén completamente funcionales desde el primer día.", "Incluimos una guía detallada y profesional para que tú y tus desarrolladores puedan entender e integrar fácilmente la API.", "Implementamos medidas avanzadas de seguridad y autenticación para proteger la información sensible de tus usuarios y sistemas.", "Ofrecemos paquetes de soporte y mantenimiento para garantizar que tu API siga funcionando de manera óptima y se actualice según las necesidades de tu negocio."]}
      />
    </>
  );
}

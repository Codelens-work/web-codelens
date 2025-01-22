import React from "react";
import { Hero } from "../../../components/hero/Hero";

import "./appweb.css";
import LinkButton from "../../../components/linkButton/LinkButton";
import Services from "../../../components/services/Services.jsx";

export function AppWeb() {
  return (
    <>
      <Hero
        media={{
          type: "image",
          src: "/hero/hero-apps.webp",
        }}
      >
        <div className="hero__title-container">
          <h1 className="title-service">
            Desarrollo de Aplicaciones Web Personalizadas para Potenciar tu
            Negocio
          </h1>
          <p className="paragraph-service">
            En CodeLens, desarrollamos aplicaciones web a medida, diseñadas
            específicamente para optimizar y mejorar los procesos de tu empresa.
            Ya sea un sistema de gestión, una herramienta de automatización, o
            una plataforma de comunicación, transformamos tus ideas en
            aplicaciones funcionales, seguras y escalables.
          </p>
          <LinkButton label="CONTACTANOS" href="#" size="small" />
        </div>
      </Hero>

      <Services
        img="../service/appWeb.svg"
        titleOne="Por Qué Optar por una Aplicación Web Personalizada"
        paragraphOne="Las aplicaciones personalizadas permiten resolver problemas específicos y optimizar procesos únicos de tu empresa, brindándote una ventaja competitiva al mejorar la eficiencia y simplificar tareas complejas."
        titleTwo="Beneficios de elegirnos"
        items={[
          "Adaptación a las Necesidades del Negocio: Funcionalidades desarrolladas específicamente para tus procesos.",
          "Escalabilidad: Crecimiento y adaptabilidad a medida que tu negocio evoluciona.",
          "Acceso Remoto y Colaboración: Disponibilidad desde cualquier dispositivo y ubicación.",
          "Optimización de Recursos: Automatización de tareas y mejor gestión del tiempo.",
          "Seguridad Personalizada: Protocolos de seguridad avanzados para proteger la información sensible.",
        ]}
      />
    </>
  );
}

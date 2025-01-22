import React from "react";
import { Hero } from "../../../components/hero/Hero";

import "./seoservice.css";
import LinkButton from "../../../components/linkButton/LinkButton";
import Services from "../../../components/services/Services.jsx";

export function SeoService() {
  return (
    <>
      <Hero
        media={{
          type: "image",
          src: "/hero/hero-seo.webp",
        }}
      >
        <div className="hero__title-container">
          <h1 className="title-service">Mejora y Optimización de Sitios Web</h1>
          <p className="paragraph-service">
            En CodeLens, transformamos sitios web existentes para maximizar su
            rendimiento, actualizar su diseño, y añadir funcionalidades que
            aumenten su impacto. Ya sea mejorando la velocidad de carga,
            actualizando el diseño, o integrando nuevas características, nuestro
            equipo se asegura de que tu sitio esté a la altura de tus objetivos.
          </p>
          <LinkButton label="CONTACTANOS" href="#" size="small" />
        </div>
      </Hero>

      <Services
        img="../service/seo.svg"
        titleOne="Por Qué Optimizar tu Sitio Web"
        paragraphOne="La optimización de un sitio web ayuda a mejorar su rendimiento y adaptarlo a las expectativas y necesidades actuales de los usuarios, permitiéndote competir en el mercado digital de manera más eficaz"
        titleTwo="Beneficios de elegirnos"
        items={[
          "Mejora del Rendimiento: Velocidad de carga más rápida y mejor respuesta del sitio.",
          "Mayor Seguridad: Actualización de medidas de seguridad para proteger a tus usuarios.",
          "Experiencia de Usuario Mejorada: Navegación optimizada y diseño actualizado.",
          "Aumento en el SEO: Mejoras en el SEO para que tu sitio tenga mejor visibilidad en motores de búsqueda.",
          "Compatibilidad con Nuevas Tecnologías: Asegura que tu sitio esté optimizado para los últimos navegadores y dispositivos.",
        ]}
      />
    </>
  );
}

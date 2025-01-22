import React from "react";
import { Hero } from "../../../components/hero/Hero";

import "./WebDevelopment.css";
import LinkButton from "../../../components/linkButton/LinkButton";
import Services from "../../../components/services/Services.jsx";



export function WebDevelopment() {
  return (
    <>
      <Hero
        media={{
          type: "image",
          src: "/hero/hero-web.webp",
        }}
      >
        <div className="hero__title-container">
          <h1 className="title-service">Desarrollo Web desde Cero</h1>
          <p className="paragraph-service">
            En CodeLens, creemos que un sitio web efectivo es más que una página
            bonita. Desde el diseño hasta la funcionalidad, construimos
            soluciones digitales a medida que representan la esencia de tu marca
            y conectan de manera auténtica con tu audiencia.
          </p>
          <LinkButton label="CONTACTANOS" href="#" size="small" />
        </div>
      </Hero>

      <Services
        img="../service/webDevelopment.svg"
        titleOne="Por Qué Elegir Desarrollo a Medida"
        paragraphOne="Cada negocio es único, y tu sitio web debe reflejarlo. Nuestro equipo se especializa en crear sitios web personalizados que se ajustan a las necesidades y objetivos específicos de cada cliente."
        titleTwo="Beneficios de elegirnos"
        items={[
          "Adaptabilidad: Diseños a medida que evolucionan contigo.",
          "Escalabilidad: Preparados para el crecimiento de tu negocio.",
          "Optimización Completa: Enfocados en rendimiento, seguridad y SEO desde el inicio.",
          "Experiencia Única de Usuario: Interfaces intuitivas y amigables para cualquier dispositivo.",
        ]}
      />
    </>
  );
}

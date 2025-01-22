import React from "react";
import { Hero } from "../../../components/hero/Hero";

import "./webdesing.css";
import LinkButton from "../../../components/linkButton/LinkButton";
import Services from "../../../components/services/Services.jsx";

export function WebDesing() {
  return (
    <>
      <Hero
        media={{
          type: "image",
          src: "/hero/hero-desing.webp",
        }}
      >
        <div className="hero__title-container">
          <h1 className="title-service">Diseño Web</h1>
          <p className="paragraph-service">
            En CodeLens, transformamos tus ideas en diseños visualmente
            atractivos y efectivos que comunican tus valores y cautivan a tus
            usuarios. Nos especializamos en crear interfaces intuitivas y
            estéticamente impactantes que hacen de cada visita una experiencia
            memorable.
          </p>
          <LinkButton label="CONTACTANOS" href="#" size="small" />
        </div>
      </Hero>
      <Services
        img="../service/webDesign.svg"
        titleOne="Por Qué Elegir un Diseño Web a medida"
        paragraphOne="Un diseño web bien elaborado no solo mejora la apariencia de tu sitio, sino que también potencia su funcionalidad y mejora la experiencia del usuario, ayudándote a conectar mejor con tu audiencia."
        titleTwo="Beneficios de elegirnos"
        items={[
          "Impacto Visual: Diseño atractivo que representa tu identidad de marca.",
          "Usabilidad y Experiencia de Usuario: Interfaz intuitiva y fácil de navegar.",
          "Diseño Adaptado a Dispositivos: Totalmente responsive para todos los dispositivos.",
          "Consistencia de Marca: Identidad visual alineada y coherente.",
        ]}
      />
    </>
  );
}

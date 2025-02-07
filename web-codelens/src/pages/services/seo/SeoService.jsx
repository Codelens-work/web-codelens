import { Hero } from "../../../components/hero/Hero";
import "./seoservice.css";
import LinkButton from "../../../components/linkButton/LinkButton";
import Services from "../../../components/services/Services.jsx";
import { useTranslation } from 'react-i18next'

export function SeoService() {

  const { t } = useTranslation();

  return (
    <>
      <Hero
        media={{
          type: "image",
          src: "/hero/hero-seo.webp",
        }}
      >
        <div className="hero__title-container">
          <h1 className="title-service">
            {t('services-pages.seo.hero.heading')}
          </h1>
          <p className="paragraph-service">
            {t('services-pages.seo.hero.content')}
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
        titleCarts={[
          "Rediseño de Secciones y Contenido",
          "Integración de Nuevas Funcionalidades",
          "SEO y Mejora de Experiencia de Usuario",
        ]}
        descriptionCart={[
          "Actualizamos las secciones para modernizar la estética y hacerlas más funcionales.",
          "Agregamos funcionalidades que mejoran la interacción y la conversión, como formularios avanzados o buscadores de productos.",
          "Realizamos ajustes en el SEO y la estructura del sitio para mejorar la visibilidad y la satisfacción del usuario."
        ]}
      />
    </>
  );
}

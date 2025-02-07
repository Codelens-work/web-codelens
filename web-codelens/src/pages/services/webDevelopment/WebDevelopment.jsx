import { Hero } from "../../../components/hero/Hero";
import "./WebDevelopment.css";
import LinkButton from "../../../components/linkButton/LinkButton";
import Services from "../../../components/services/Services.jsx";
import { useTranslation } from 'react-i18next'

export function WebDevelopment() {

  const { t } = useTranslation();

  return (
    <>
      <Hero
        media={{
          type: "image",
          src: "/hero/hero-web.webp",
        }}
      >
        <div className="hero__title-container">
          <h1 className="title-service">
            {t('services-pages.web-development.hero.heading')}
          </h1>
          <p className="paragraph-service">
            {t('services-pages.web-development.hero.content')}
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

        
        titleCarts={[
          "Desarrollo Completo y Personalizado",
          "Integración de Funcionalidades Específicas",
          "Optimización para Dispositivos Móviles y SEO",
          "Asesoramiento en Hosting y Dominios",
        ]}
        descriptionCart={[
          "Diseñamos y construimos un sitio web que representa a tu marca de manera auténtica.",
          "Desde sistemas de reservas hasta carritos de compra, integramos todas las funcionalidades que necesitas.",
          "Nuestro desarrollo es completamente responsivo y optimizado para mejorar tu posicionamiento en motores de búsqueda.",
          "Te ayudamos a elegir el hosting y dominio que mejor se adapten a las necesidades de tu negocio.",
        ]}
      />
    </>
  );
}

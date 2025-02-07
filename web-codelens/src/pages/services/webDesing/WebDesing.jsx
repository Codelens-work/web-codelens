import { Hero } from "../../../components/hero/Hero";
import "./webdesing.css";
import LinkButton from "../../../components/linkButton/LinkButton";
import Services from "../../../components/services/Services.jsx";
import { useTranslation } from 'react-i18next'

export function WebDesing() {

  const { t } = useTranslation();

  return (
    <>
      <Hero
        media={{
          type: "image",
          src: "/hero/hero-desing.webp",
        }}
      >
        <div className="hero__title-container">
          <h1 className="title-service">
            {t('services-pages.web-design.hero.heading')}
          </h1>
          <p className="paragraph-service">
            {t('services-pages.web-design.hero.content')}
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

        
        titleCarts={[
          "Diseño de UI/UX centrado en el usuario",
          "Identidad Visual Alineada con tu Marca",
          "Optimización Visual para Todas las Plataformas",
          "Prototipos Interactivos y Revisión",
         
        ]}
        descriptionCart={["Creamos interfaces intuitivas y visualmente atractivas que guían a los usuarios de manera natural.", "Desarrollamos una identidad visual que captura la esencia de tu negocio, desde tipografías hasta colores y estilos.", "Cada diseño es totalmente responsive y se adapta a todos los dispositivos, asegurando una experiencia perfecta.", "Realizamos prototipos para que puedas visualizar la estructura y diseño de cada sección antes del desarrollo."]}
      />
    </>
  );
}

import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/mainLayout/MainLayout";
import LegalSection from "./components/lagalSection/LegalSection";
import Services from "./components/services/Services";
import Home from './pages/home/Home';
import About from './pages/about/About';
import Blog from './pages/blog/Blog';


function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:(
        <MainLayout>
          <Home/>
        </MainLayout>
      ),
    },
    {
      path: "/nosotros",
      element: <MainLayout>{/* <About /> */}</MainLayout>,
    },
    {
      path: "/servicios/desarrollo-api",
      element: (
        <MainLayout>
          <Services
            img="../service/api.svg"
            titleOne="Por Qué Elegir APIs Personalizadas para Tu Negocio?"
            paragraphOne="En un mundo digital donde la conectividad y la eficiencia son clave, las APIs personalizadas te permiten crear soluciones hechas a medida para satisfacer las necesidades específicas de tu negocio."
            titleTwo="Beneficios de elegirnos"
            items={[
              "APIs listas para integraciones masivas.",
              "Seguridad garantizada para proteger datos.",
              "Documentación clara para desarrolladores.",
              "Soporte técnico post-implementación."
            ]}
          />
        </MainLayout>
      ),
    },
    {
      path: "/servicios/app-web",
      element: (
        <MainLayout>
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
        </MainLayout>
      ),
    },
    {
      path: "/servicios/diseno-web",
      element: (
        <MainLayout>
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
        </MainLayout>
      ),
    },
    {
      path: "/servicios/desarrollo-web",
      element: (
        <MainLayout>
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
        </MainLayout>
      ),
    },
    {
      path: "/servicios/seo",
      element: (
        <MainLayout>
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
        </MainLayout>
      ),
    },
    {
      path: "/terminos-y-condiciones",
      element: (
        <MainLayout>
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
          />
        </MainLayout>
      ),
    },
    {
      path: "/politica-de-privacidad",
      element: (
        <MainLayout>
          <LegalSection
            title={"Política de Privacidad de CodeLens"}
            paragraph={
              "En CodeLens, la protección de su información personal es nuestra prioridad. Esta política de privacidad explica cómo recopilamos, utilizamos, almacenamos y protegemos sus datos personales cuando utiliza nuestro sitio web o nuestros servicios."
            }
            secondParagraph={
              "Nos tomamos muy en serio la privacidad de nuestros usuarios. Al utilizar nuestro sitio “(https://codelens.com/)”, los clientes aceptan los términos de esta Política de Privacidad."
            }
          />
        </MainLayout>
      ),
    },
    {
      path: "/blog",
      element: <MainLayout>{/* </> */}</MainLayout>,
    },
    {
      path: "/*", //Con el * cualquier ruta que no sea las indicadas tira notfound
      element: <MainLayout>{/* <NotFound/> */}</MainLayout>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

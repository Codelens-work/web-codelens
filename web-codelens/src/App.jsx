import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/mainLayout/MainLayout";
import LegalSection from "./components/lagalSection/LegalSection";
import Services from "./components/services/Services";
import { AppiService } from "./pages/services/appi/AppiService";
import { AppWeb } from "./pages/services/appWeb/AppWeb";
import { WebDesing } from "./pages/services/webDesing/WebDesing";
import { WebDevelopment } from "./pages/services/webDevelopment/WebDevelopment";
import { SeoService } from "./pages/services/seo/SeoService";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
    },
    {
      path: "/nosotros",
      element: <MainLayout>{/* <About /> */}</MainLayout>,
    },
    {
      path: "/servicios/desarrollo-api",
      element: (
        <MainLayout>
          <AppiService />
        </MainLayout>
      ),
    },
    {
      path: "/servicios/app-web",
      element: (
        <MainLayout>
          <AppWeb />
        </MainLayout>
      ),
    },
    {
      path: "/servicios/diseno-web",
      element: (
        <MainLayout>
          <WebDesing />
        </MainLayout>
      ),
    },
    {
      path: "/servicios/desarrollo-web",
      element: (
        <MainLayout>
          <WebDevelopment />
        </MainLayout>
      ),
    },
    {
      path: "/servicios/seo",
      element: (
        <MainLayout>
          <SeoService/>
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

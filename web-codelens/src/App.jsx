import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/mainLayout/MainLayout";
import { AppiService } from "./pages/services/appi/AppiService";
import { AppWeb } from "./pages/services/appWeb/AppWeb";
import { WebDesing } from "./pages/services/webDesing/WebDesing";
import { WebDevelopment } from "./pages/services/webDevelopment/WebDevelopment";
import { SeoService } from "./pages/services/seo/SeoService";
import TermsAndConditions from "./pages/termsAndConditions/TermsAndConditions";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";
import Contact from "./components/contact/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout><Contact/></MainLayout>,
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
          <TermsAndConditions/>
        </MainLayout>
      ),
    },
    {
      path: "/politica-de-privacidad",
      element: (
        <MainLayout>
          <PrivacyPolicy/>
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

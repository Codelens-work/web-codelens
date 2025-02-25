import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/mainLayout/MainLayout";
import { ApiService } from "./pages/services/apiservices/ApiService.jsx";
import { AppWeb } from "./pages/services/appWeb/AppWeb";
import { WebDesing } from "./pages/services/webDesing/WebDesing";
import { WebDevelopment } from "./pages/services/webDevelopment/WebDevelopment";
import { SeoService } from "./pages/services/seo/SeoService";
import TermsAndConditions from "./pages/termsAndConditions/TermsAndConditions";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  const services = t("footer-section.lists.services-list.items", {
    returnObjects: true,
  });
  const route = t("footer-section.lists.find-way-list.items", {
    returnObjects: true,
  });
  const routeHelp = t("footer-section.lists.help-list.items", {
    returnObjects: true,
  });

  const webDevelopmentUrl = services[0]?.url;
  const webDesignUrl = services[1]?.url;
  const appWebUrl = services[3]?.url;
  const apiUrl = services[4]?.url;

  const aboutUrl = route[1].url;

  const faqsUrl = routeHelp[0].url;
  const termsAndConditionsUrl = routeHelp[2].url;
  const privacyPolicyUrl = routeHelp[3].url;

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <MainLayout>
          <Home />
        </MainLayout>
      ),
    },
    {
      path: aboutUrl,
      element: (
        <MainLayout>
          <About />
        </MainLayout>
      ),
    },
    {
      path: apiUrl,
      element: (
        <MainLayout>
          <ApiService />
        </MainLayout>
      ),
    },
    {
      path: appWebUrl,
      element: (
        <MainLayout>
          <AppWeb />
        </MainLayout>
      ),
    },
    {
      path: webDesignUrl,
      element: (
        <MainLayout>
          <WebDesing />
        </MainLayout>
      ),
    },
    {
      path: webDevelopmentUrl,
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
          <SeoService />
        </MainLayout>
      ),
    },
    {
      path: termsAndConditionsUrl,
      element: (
        <MainLayout>
          <TermsAndConditions />
        </MainLayout>
      ),
    },
    {
      path: privacyPolicyUrl,
      element: (
        <MainLayout>
          <PrivacyPolicy />
        </MainLayout>
      ),
    },
    {
      path: "/blog",
      element: (
        <MainLayout>
          <Blog />
        </MainLayout>
      ),
    },
    {
      path: "/*", //Con el * cualquier ruta que no sea las indicadas tira notfound
      element: <MainLayout>{/* <NotFound/> */}</MainLayout>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

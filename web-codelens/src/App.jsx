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
 import NotFound from "./pages/notFound/NotFound.jsx";
 import { useEffect } from "react";
 import i18n from "i18next";
import { CommunityManagement } from "./pages/services/communityManagement/CommunityManagement";

function App() {
  const { t } = useTranslation();
  // const services = t("footer-section.lists.services-list.items", {
  //   returnObjects: true,
  // });
  // const route = t("footer-section.lists.find-way-list.items", {
  //   returnObjects: true,
  // });
  // const routeHelp = t("footer-section.lists.help-list.items", {
  //   returnObjects: true,
  // });

  // const webDevelopmentUrl = services[0]?.url;
  // const webDesignUrl = services[1]?.url;
  // const seoUrl = services[2]?.url;
  // const appWebUrl = services[3]?.url;
  // const apiUrl = services[4]?.url;
  //const communityUrl = services[5]?.url;

 /*  const aboutUrl = route[1].url;
  const blogUrl = route[2].url
  const faqsUrl = routeHelp[0].url;
  const termsAndConditionsUrl = routeHelp[2].url;
  const privacyPolicyUrl = routeHelp[3].url; */

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "es";
    i18n.changeLanguage(savedLanguage);
  }, []);

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
      path: '/nosotros',
      element: (
        <MainLayout>
          <About />
        </MainLayout>
      ),
    },
    {
      path: "/en/About-Us",
      element: (
        <MainLayout>
          <About />
        </MainLayout>
      ),
    },
    {
      path: "/servicios/desarrollo-api",
      element: (
        <MainLayout>
          <ApiService />
        </MainLayout>
      ),
    },
    {
      path: "/en/services/development-api" ,
      element: (
        <MainLayout>
          <ApiService />
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
      path: "/en/services/app-web",
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
      path: "/en/services/web-design",
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
      path:  "/en/services/web-development",
      element: (
        <MainLayout>
          <WebDevelopment />
        </MainLayout>
      ),
    },
    {
      path:  "/servicios/seo",
      element: (
        <MainLayout>
          <SeoService />
        </MainLayout>
      ),
    },
    {
      path: "/en/services/seo" ,
      element: (
        <MainLayout>
          <SeoService />
        </MainLayout>
      ),
    },
    {
      path: "/servicios/community-management",
      element: (
        <MainLayout>
          <CommunityManagement />
        </MainLayout>
      ),
    },
    {
      path: "/en/services/community-management",
      element: (
        <MainLayout>
          <CommunityManagement />
        </MainLayout>
      ),
    },
    {
      path:  "/terminos-y-condiciones",
      element: (
        <MainLayout>
          <TermsAndConditions />
        </MainLayout>
      ),
    },
    {
      path: "/en/Terms-and-Conditions",
      element: (
        <MainLayout>
          <TermsAndConditions />
        </MainLayout>
      ),
    },
    {
      path: "/politica-de-privacidad",
      element: (
        <MainLayout>
          <PrivacyPolicy />
        </MainLayout>
      ),
    },
    {
      path: "/en/Privacy-Policy",
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
      path: "/en/blog",
      element: (
        <MainLayout>
          <Blog />
        </MainLayout>
      ),
    },
    {
      path: "/*", //Con el * cualquier ruta que no sea las indicadas tira notfound
      element: <NotFound />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

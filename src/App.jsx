import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/mainLayout/MainLayout.jsx";
import { ApiService } from "./pages/services/apiservices/ApiService.jsx";
import { AppWeb } from "./pages/services/appWeb/AppWeb.jsx";
import { WebDesing } from "./pages/services/webDesing/WebDesing.jsx";
import { WebDevelopment } from "./pages/services/webDevelopment/WebDevelopment.jsx";
import { SeoService } from "./pages/services/seo/SeoService.jsx";
import TermsAndConditions from "./pages/termsAndConditions/TermsAndConditions.jsx";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy.jsx";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Blog from "./pages/blog/Blog.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";
import { useEffect } from "react";
import i18n from "i18next";
import { CommunityManagement } from "./pages/services/communityManagement/CommunityManagement.jsx";

function App() {

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "es";
    i18n.changeLanguage(savedLanguage);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
        path: '/nosotros',
        element: <About />
      },
      {
        path: "/en/about-us",
        element: <About />
      },
      {
        path: "/servicios/desarrollo-api",
        element: <ApiService />
      },
      {
        path: "/en/services/development-api",
        element: <ApiService />
      },
      {
        path: "/servicios/app-web",
        element: <AppWeb />
      },
      {
        path: "/en/services/app-web",
        element: <AppWeb />
      },
      {
        path: "/servicios/diseno-web",
        element: <WebDesing />
      },
      {
        path: "/en/services/web-design",
        element: <WebDesing />
      },
      {
        path: "/servicios/desarrollo-web",
        element: <WebDevelopment />
      },
      {
        path: "/en/services/web-development",
        element: <WebDevelopment />
      },
      {
        path: "/servicios/seo",
        element: <SeoService />
      },
      {
        path: "/en/services/seo",
        element: <SeoService />
      },
      {
        path: "/servicios/community-management",
        element: <CommunityManagement />
      },
      {
        path: "/en/services/community-management",
        element: <CommunityManagement />
      },
      {
        path: "/terminos-condiciones",
        element: <TermsAndConditions />
      },
      {
        path: "/en/terms-conditions",
        element: <TermsAndConditions />
      },
      {
        path: "/politicas-privacidad",
        element: <PrivacyPolicy />
      },
      {
        path: "/en/privacy-policy",
        element: <PrivacyPolicy />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/en/blog",
        element: <Blog />
      }]
    },
    {
      path: "/*",
      element: <NotFound />,
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App;

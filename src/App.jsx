import "./App.css";
import { useEffect, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import i18n from "i18next";

const Home = lazy(() => import('./pages/home/Home.jsx'));
const About = lazy(() => import('./pages/about/About.jsx'));
const Blog = lazy(() => import('./pages/blog/Blog.jsx'));
const NotFound = lazy(() => import('./pages/notFound/NotFound.jsx'));
const MainLayout = lazy(() => import('./components/mainLayout/MainLayout.jsx'));
const ApiService = lazy(() => import('./pages/services/apiservices/ApiService.jsx'))
const AppWeb = lazy(() => import('./pages/services/appWeb/AppWeb.jsx'))
const SeoService = lazy(() =>"./pages/services/seo/SeoService.jsx");
const TermsAndConditions = lazy(() => "./pages/termsAndConditions/TermsAndConditions.jsx");
const PrivacyPolicy = lazy(() => import("./pages/privacyPolicy/PrivacyPolicy.jsx"));
const WebDesing = lazy(() => import("./pages/services/webDesing/WebDesing.jsx"));
const WebDevelopment = lazy(() => import("./pages/services/webDevelopment/WebDevelopment.jsx"));
const CommunityManagement = lazy(() => import("./pages/services/communityManagement/CommunityManagement.jsx"));

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

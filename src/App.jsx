import "./App.css";
import { useEffect, useState, lazy, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import i18n from "i18next";
import RocketSpinner from "./components/spinner/Spinner.jsx";
import SeoMeta from "./components/seoHelmet/SeoMeta.jsx";

const Home = lazy(() => import('./pages/home/Home.jsx'));
const About = lazy(() => import('./pages/about/About.jsx'));
const Blog = lazy(() => import('./pages/blog/Blog.jsx'));
const NotFound = lazy(() => import('./pages/notFound/NotFound.jsx'));
const MainLayout = lazy(() => import('./components/mainLayout/MainLayout.jsx'));
const PrivacyPolicy = lazy(() => import("./pages/privacyPolicy/PrivacyPolicy.jsx"));
const TermsAndConditions = lazy(() => import("./pages/termsAndConditions/TermsAndConditions.jsx"));
const ArticlePage = lazy(() => import("./pages/articlePage/ArticlePage.jsx"));
const ApiService = lazy(() => import('./pages/services/apiservices/ApiService.jsx').then((module) => { return { default: module.ApiService} }))
const AppWeb = lazy(() => import('./pages/services/appWeb/AppWeb.jsx').then((module) => { return { default: module.AppWeb} }))
const SeoService = lazy(() => import("./pages/services/seo/SeoService.jsx").then((module) => { return { default: module.SeoService} }));
const WebDesing = lazy(() => import("./pages/services/webDesing/WebDesing.jsx").then((module) => { return { default: module.WebDesing} }));
const WebDevelopment = lazy(() => import("./pages/services/webDevelopment/WebDevelopment.jsx").then((module) => { return { default: module.WebDevelopment} }));
const CommunityManagement = lazy(() => import("./pages/services/communityManagement/CommunityManagement.jsx").then((module) => { return { default: module.CommunityManagement} }));


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "es";
    i18n.changeLanguage(savedLanguage);
  
    // Se ejecuta cuando toda la página ha cargado completamente
    window.onload = () => {
      setTimeout(() => setIsLoading(false), 3000); // Agrega un pequeño delay opcional
    };
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
      },
      {
        path: "/en/blog/:slug",
        element: <ArticlePage/>
      },
      {
        path: "/blog/:slug",
        element: <ArticlePage/>
      }
    
    ]
    },
    {
      path: "/*",
      element: <NotFound />,
    }
  ]);
  return (
    <Suspense fallback={<RocketSpinner />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;

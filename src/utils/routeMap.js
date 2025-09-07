const routes = [
  // Páginas principales
  { es: "/", en: "/en" },
  { es: "/nosotros", en: "/en/about-us" },
  { es: "/blog", en: "/en/blog" },
  { es: "/terminos-condiciones", en: "/en/terms-conditions" },
  { es: "/politicas-privacidad", en: "/en/privacy-policy" },
  
  // Servicios
  { es: "/servicios/desarrollo-api", en: "/en/services/development-api" },
  { es: "/servicios/app-web", en: "/en/services/app-web" },
  { es: "/servicios/diseno-web", en: "/en/services/web-design" },
  { es: "/servicios/desarrollo-web", en: "/en/services/web-development" },
  { es: "/servicios/seo", en: "/en/services/seo" },
  { es: "/servicios/community-management", en: "/en/services/community-management" },
  
  // Artículos del blog
  { es: "/blog/importancia-sitio-web", en: "/en/blog/importance-professional-website" },
  { es: "/blog/actualización-sitio-web", en: "/en/blog/website-update" },
  { es: "/blog/landing-page", en: "/en/blog/landing-page" },
  { es: "/blog/velocidad-sitio-web", en: "/en/blog/website-speed-performance" },
  { es: "/blog/tipo-sitio-web", en: "/en/blog/website-types" }
];

// Convertir a formato de objeto para búsqueda rápida
const routeMap = routes.reduce((acc, route) => {
  acc[route.es] = route.en;
  acc[route.en] = route.es;
  return acc;
}, {});

export default routeMap;

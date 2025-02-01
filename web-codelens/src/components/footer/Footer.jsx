import './footer.css'

export default function Footer() {
  return (
    <footer>
      <div className='firstRowContainer'>
        <div className="socialLogoContainer">
          <a href="/"><img id="footerLogo" src="/icons/logo_completo.svg" alt="Logo" /></a>
          <span>Convierte ideas en excelencia en línea con nuestras soluciones innovadoras y servicios digitales estratégicos</span>
          <div className="mediaContainer">
            <a href="https://www.instagram.com/codelens.tech/" target='_blank'><img src="/icons/icon_instagram.svg" alt="Instagram" /></a>
            <a href="#" target='_blank'><img src="/icons/icon_facebook.svg" alt="Facebook" /></a>
          </div>
        </div>
        <div className="servicesContainer">
          <span className="containerTitle">Servicios</span>
          <ul className="footerList">
            <li><a href="/servicios/desarrollo-web">Desarrollo Web</a></li>
            <li><a href="/servicios/diseno-web">Diseño Web</a></li>
            <li><a href="/servicios/seo">Mejora y Optimización</a></li>
            <li><a href="/servicios/app-web">Desarrollo de Aplicaciones Web</a></li>
            <li><a href="/servicios/desarrollo-api">Desarrollo de APIS</a></li>
          </ul>
        </div>
        <div className="wayContainer">
          <span className="containerTitle">Encuentra tu camino</span>
          <ul className="footerList">
            <li><a href="/">Inicio</a></li>
            <li><a href="/nosotros">Sobre Nosotros</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>
        <div className="helpContainer">
          <span className="containerTitle">Ayuda</span>
          <ul className="footerList">
            <li><a href="/preguntas-frecuentes">FAQs</a></li>
            <li><a href="/contacto">Contacto</a></li>
            <li><a href="/terminos-y-condiciones">Términos y condiciones</a></li>
            <li><a href="/politica-de-privacidad">Política de privacidad</a></li>
          </ul>
        </div>
      </div>
      <div className="copyright"><span>- 2025 - Codelens -</span></div>
    </footer>
  )
}
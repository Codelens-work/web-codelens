import './footer.css'

export default function Footer() {
  return (
    <footer>
      <div className='firstRowContainer'>
        <div className="socialLogoContainer">
          <a href="#"><img id="footerLogo" src="/src/assets/icons/logo_Completo.svg" alt="Logo" /></a>
          <span>Convierte ideas en excelencia en línea con nuestras soluciones innovadoras y servicios digitales estratégicos</span>
          <div className="mediaContainer">
            <a href="#"><img src="/src/assets/icons/icon_instagram.svg" alt="Instagram" /></a>
            <a href="#"><img src="/src/assets/icons/icon_facebook.svg" alt="Facebook" /></a>
          </div>
        </div>
        <div className="servicesContainer">
          <span className="containerTitle">Servicios</span>
          <ul className="footerList">
            <li><a href="#">Desarrollo Web</a></li>
            <li><a href="#">Diseño Web</a></li>
            <li><a href="#">Mejora y Optimización</a></li>
            <li><a href="#">Desarrollo de Aplicaciones Web</a></li>
            <li><a href="#">Desarrollo de APIS</a></li>
          </ul>
        </div>
        <div className="wayContainer">
          <span className="containerTitle">Encuentra tu camino</span>
          <ul className="footerList">
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Sobre Nosotros</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div className="helpContainer">
          <span className="containerTitle">Ayuda</span>
          <ul className="footerList">
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Términos y condiciones</a></li>
            <li><a href="#">Política de privacidad</a></li>
          </ul>
        </div>
      </div>
      <div className="copyright"><span>- 2025 - Codelens -</span></div>
    </footer>
  )
}
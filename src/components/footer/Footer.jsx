import './footer.css'
import { useTranslation } from 'react-i18next'
import { useNavigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

export default function Footer() {

  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const footer = t('footer-section', { returnObjects: true })
  
  const { "services-list": servicesList, "find-way-list": findWayList, "help-list": helpList } = footer.lists;


   useEffect(() => {
      const hash = location.hash;
      //Para que el boton lleve a la seccion directamente. (hay un id=*** en el div principal de la seccion)
      if (hash) {
        const targetSection = document.querySelector(hash);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, [location]);

  return (
    <footer>
      <div className='firstRowContainer'>
        <div className="socialLogoContainer">
          <a href="/"><img id="footerLogo" src="/icons/logo_completo.svg" alt="Logo" /></a>
          <span>{footer.intro}</span>
          <div className="mediaContainer">
            <a href="https://www.instagram.com/codelens.tech/" target='_blank'><img src="/icons/icon_instagram.svg" alt="Instagram" /></a>
          </div>
        </div>
        <div className="urlContainer">
          <div className="servicesContainer">
            <span className="containerTitle">{servicesList.title}</span>
            <ul className="footerList">
              {servicesList.items.map((item, i) => {
                return <li key={i}><a href={item.url} onClick={() => { navigate(item.url)}}>{item.text}</a></li>
              })}
            </ul>
          </div>
          <div className="wayContainer">
            <span className="containerTitle">{findWayList.title}</span>
            <ul className="footerList">
              {findWayList.items.map((item, i) => {
                if(item.url === '/blog' || item.url === '/en/blog') {
                  return <li key={i}  className='disabled'><a href='#' onClick={(e) => {e.preventDefault()}}>{item.text}</a></li>
                }
                return <li key={i}><a href={item.url} onClick={() => { navigate(item.url)}}>{item.text}</a></li>
              })}
            </ul>
          </div>
          <div className="helpContainer">
            <span className="containerTitle">{helpList.title}</span>
            <ul className="footerList">
              {helpList.items.map((item, i) => {
                return <li key={i}><a onClick={() => { navigate(item.url)}}>{item.text}</a></li>
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright"><span>- 2025 - Codelens -</span></div>
    </footer>
  )
}
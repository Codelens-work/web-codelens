import './footer.css'
import { Link } from 'react-router-dom'
import { useScrollIntoView } from '/src/hooks/useScroll'

export default function Footer({footerTexts}) {
  
  const { "services-list": servicesList, "find-way-list": findWayList, "help-list": helpList } = footerTexts.lists;
  useScrollIntoView()

  return (
    <footer>
      <div className='firstRowContainer'>
        <div className="socialLogoContainer">
          <a href="/"><img id="footerLogo" src="/icons/logo_completo.svg" alt="CodeLens Logo" /></a>
          <span>{footerTexts.intro}</span>
          <div className="mediaContainer">
            <a href="https://www.instagram.com/codelens.tech/" target='_blank'><img src="/icons/icon_instagram.svg" alt="Instagram" /></a>
          </div>
        </div>
        <div className="urlContainer">
          <div className="servicesContainer">
            <span className="containerTitle">{servicesList.title}</span>
            <ul className="footerList">
              {servicesList.items.map((item, i) => {
                return <li key={i}><Link to={item.url}>{item.text}</Link></li>
              })}
            </ul>
          </div>
          <div className="wayContainer">
            <span className="containerTitle">{findWayList.title}</span>
            <ul className="footerList">
              {findWayList.items.map((item, i) => {
                return <li key={i}><Link to={item.url}>{item.text}</Link></li>
              })}
            </ul>
          </div>
          <div className="helpContainer">
            <span className="containerTitle">{helpList.title}</span>
            <ul className="footerList">
              {helpList.items.map((item, i) => {
                return <li key={i}><Link to={item.url}>{item.text}</Link></li>
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright"><span>- 2025 - Codelens -</span></div>
    </footer>
  )
}
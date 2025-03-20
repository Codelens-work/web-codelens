import LinkButton from "../linkButton/LinkButton"
import Section from "../section/Section"
import './homeAbout.css'

const HomeAbout = ({ t, btn, currentLanguage }) => {
  return (
    <Section className="home-about-section">
      <div className="home-about-img">
        <img src="/imgs/homeIntroImg.svg" alt={t["img-alt"]} />
      </div>
      <div className="home-about-content">
        <img className="home-about-logo" src="/logos/homeAboutLogo.svg" alt="Codelens Logo" />
        <h2>{t.heading}</h2>
        <span>{t.subheading}</span>
        <p className="paragraph-custom">{t.description}</p>
        <LinkButton label={btn} size="normal" href={currentLanguage === 'en' ? "/#contact" : "/#contacto"} />
      </div>
    </Section>
  )
}

export default HomeAbout;
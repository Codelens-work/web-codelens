import LinkButton from "../linkButton/LinkButton"
import Section from "../section/Section"
const HomeAbout = ({ t, btn }) => {
  return(
    <Section className="home-about-section">
    <div className="home-about-img">
      <img src="/imgs/homeIntroImg.webp" alt="About image" />
    </div>
    <div className="home-about-content">
      <img className="home-about-logo" src="/logos/Logo_CodeLens_contacto.svg" alt="Codelens Logo" />
      <h2>{t.heading}</h2>
      <span>{t.subheading}</span>
      <p>{t.description}</p>
    <LinkButton label={btn} size="normal" href="/Contacto"/>
    </div>
    </Section>
  )
}

export default HomeAbout;
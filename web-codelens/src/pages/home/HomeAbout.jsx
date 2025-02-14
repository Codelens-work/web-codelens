import LinkButton from "../../components/linkButton/LinkButton"
import Section from "../../components/section/Section"
const HomeAbout = ({ t }) => {
console.log(t)
  return(
    <Section>
    <div className="intro-img">
      <img src="" alt="" />
    </div>
    <div className="intro-content">
      <img  className="intro-logo" src="" alt="" />
      <h2>{t.heading}</h2>
      <span>{t.subheading}</span>
      <p>{t.description}</p>
    <LinkButton label="Contactanos" size="normal" href="/Contacto"/>
    </div>
    </Section>
  )
}

export default HomeAbout;
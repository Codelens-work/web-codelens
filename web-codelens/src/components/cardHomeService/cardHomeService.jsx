import LinkButton from "../linkButton/LinkButton";
import './cardHomeService.css'

const cardHomeService = ({title, content, icon, cta, serviceUrl}) => {

  return(
    <div className="home-service-card">
      <img src={"/logos/" + icon + ".webp"} alt={title + "logo"} />
      <h3>{title}</h3>
      <p>{content}</p>
      <LinkButton label={cta} href={serviceUrl}/>
    </div>
  )
}

export default cardHomeService;
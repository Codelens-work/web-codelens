import LinkButton from "../linkButton/LinkButton";
import './cardHomeService.css'

const CardHomeService = ({title, content, icon, cta, serviceUrl, activeClass}) => {
  return(
    <div className={`home-service-card ${activeClass}`}>
      <img src={"/logos/" + icon + ".webp"} alt={title + " logo"} />
      <h3>{title}</h3>
      <p>{content}</p>
      <LinkButton label={cta} size="small" href={"/servicios/" + serviceUrl} />
    </div>
  )
}

export default CardHomeService;
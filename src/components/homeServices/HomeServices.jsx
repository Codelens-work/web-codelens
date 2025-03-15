import Section from "../section/Section";
import CardHomeService from "../cardHomeService/cardHomeService";
import "./homeServices.css";

const HomeServices = ({ t }) => {
  const services = t.cards;

  return (
    <Section className="home-services-section">
      <div className="home-services-content">
        <div className="wrapper">
          <h2 className="h2-line">{t.heading}</h2>
        </div>
        <span>{t.intro}</span>
      </div>
      <div className="home-services-carousel">
        {services.map((service, i) => (
            <div key={service.url}
              className="card-container-mobile">
              <CardHomeService
                title={service.title}
                content={service.content}
                icon={service.icon}
                serviceUrl={service.url}
                cta={t["services-card-cta"]}
              />
            </div>
          ))}
      </div>
    </Section>
  );
};

export default HomeServices;

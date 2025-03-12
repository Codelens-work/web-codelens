import { Helmet } from "react-helmet";
import { Hero } from "../../components/hero/Hero";
import "./home.css";
import { RotatingTitle } from "../../components/rotatingTitle/RotatingTiltle";
import LinkButton from "../../components/linkButton/LinkButton";
import { SpanTitleHome } from "../../components/span-title-home/SpanTitleHome";
import Contact from "../../components/contact/Contact";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Faqs from "../../components/faqs/Faqs";
import HomeAbout from "../../components/homeAbout/HomeAbout";
import HomeServices from "../../components/homeServices/HomeServices";
import GetToKnow from "../../components/getToKnow/getToKnow";
import SectionReference from "../../components/references/SectionReferences";

const Home = () => {
  const { t } = useTranslation();
  const location = useLocation();

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
    <>
      <Helmet>
        <meta
          name="description"
          content={t("metadescription.home")}
        />
        <meta
          name="keywords"
          content={t("keywords.home", { returnObjects: true }).join(", ")}
        />
        <meta name="author" content="CodeLens" />
        <link rel="canonical" href="https://codelenstech.com/" />
      </Helmet>
      <Hero
        media={{
          type: "video",
          src: "/hero/Hero.mp4",

        }}
      >
        <div id="Home" className="hero-content-container">
          <div className="span-title-container">
            <SpanTitleHome />
          </div>
          <div className="title-container">
            <RotatingTitle />
            <div className="hero-button">
              <LinkButton
                label={t("btn-contact.text")}
                href="/#Contact"
                size="normal"
              />
            </div>
          </div>
        </div>
      </Hero>
      <HomeAbout
        t={t("home.about-section", { returnObjects: true })}
        btn={t("btn-contact.text")}
      />
      <HomeServices t={t("home.services-section", { returnObjects: true })} />
      <GetToKnow t={t("home.get-to-know-section", { returnObjects: true })} />
      <SectionReference /> 
      <Contact />
      <Faqs />
    </>
  );
};

export default Home;

/*
- Arreglar footer
- Arreglar before


*/

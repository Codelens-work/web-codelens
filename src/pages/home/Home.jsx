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
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const currentLanguage = i18n.language
  const homeText =  t('home', { returnObjects: true })
  const footerLists = t("footer-section.lists", {
    returnObjects: true,
  });
  const btnLabel = t("btn-contact.text");
  const aboutUrl = footerLists["find-way-list"].items[1].url;
  const contactUrl = footerLists["help-list"].items[1].url;

  useEffect(() => {
    const hash = location.hash;
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
          content={t("metadescription.home", {
            returnObjects: true,
          })}
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
        <div id={currentLanguage === 'en' ? "home" : "inicio"} className="hero-content-container container-hero-home">
          <div className="span-title-container">
            <SpanTitleHome />
          </div>
          <div className="title-container">
            <RotatingTitle />
            <div className="hero-button">
              <LinkButton
                label={btnLabel}
                href={contactUrl}
                size="normal"
              />
            </div>
          </div>
        </div>
      </Hero>
      <HomeAbout
        t={homeText["about-section"]}
        btn={btnLabel}
        currentLanguage={currentLanguage}
      />
      <HomeServices t={homeText["services-section"]} />
      <GetToKnow t={homeText["get-to-know-section"]} url={aboutUrl} />
      <SectionReference />
      <Contact />
      <Faqs />
    </>
  );
};

export default Home;

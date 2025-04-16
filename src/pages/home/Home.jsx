import { Hero } from "../../components/hero/Hero";
import "./home.css";
import { RotatingTitle } from "../../components/rotatingTitle/RotatingTiltle";
import LinkButton from "../../components/linkButton/LinkButton";
import { SpanTitleHome } from "../../components/span-title-home/SpanTitleHome";
import Contact from "../../components/contact/Contact";
import { useTranslation } from "react-i18next";
import { useScrollIntoView } from '/src/hooks/useScroll'
import Faqs from "../../components/faqs/Faqs";
import HomeAbout from "../../components/homeAbout/HomeAbout";
import HomeServices from "../../components/homeServices/HomeServices";
import GetToKnow from "../../components/getToKnow/getToKnow";
import SectionReference from "../../components/references/SectionReferences";
import SeoMeta from "../../components/seoHelmet/SeoMeta";


const Home = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const currentLanguage = i18n.language
  const homeText =  t('home', { returnObjects: true })
  const footerLists = t("footer-section.lists", {
    returnObjects: true,
  });
  const btnLabel = t("btn-contact.text");
  const aboutUrl = footerLists["find-way-list"].items[1].url;
  const contactUrl = footerLists["help-list"].items[1].url;

  const canonicalUrl =
    lang === "en"
      ? "https://codelenstech.com/en"
      : "https://codelenstech.com/";

  
  useScrollIntoView()
  return (
    <>
       <SeoMeta
        title={t("titles.seoHomeTitle")}
        description={t("metadescription.home")}
        canonical={canonicalUrl}
        keywords={t("keywords.home", { returnObjects: true })}
      />
      <Hero
        media={{
          type: "video",
          src: "/hero/Hero.mp4",
        }}
        id={currentLanguage === 'en' ? "home" : "inicio"}
      >
        <div className="hero-content-container">
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

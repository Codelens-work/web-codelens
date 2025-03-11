import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Navbar,
  Nav,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./navBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

const NavBar = () => {
  const { t } = useTranslation();
  const handleLanguageToggle = () => {
    const newLanguage = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLanguage);
  };

  const [navActive, setNavActive] = useState(false);
  const [expanded, setExpanded] = useState(false); // Estado del menú
  const navigate = useNavigate();
  const [dropdown, setDropdown] = useState(false);

  const handleDropdownItemClick = (path) => {
    navigate(path);
    setDropdown(false);
    setExpanded(false);
  };

  const services = t("footer-section.lists.services-list.items", {
    returnObjects: true,
  });
  const route = t("footer-section.lists.find-way-list.items", {
    returnObjects: true,
  });
  const routeHelp = t("footer-section.lists.help-list.items", {
    returnObjects: true,
  });

  const webDevelopmentUrl = services[0]?.url;
  const webDevelopmentText = services[0]?.text;
  const webDesignUrl = services[1]?.url;
  const webDesignText = services[1]?.text;
  const seoUrl = services[2]?.url;
  const appWebUrl = services[3]?.url;
  const appWebText = services[3]?.text;
  const apiUrl = services[4]?.url;
  const apiText = services[4]?.text;
  const communityUrl = services[5]?.url;
  const communityText = services[5]?.text;

  const homeText = route[0].text;
  const aboutUrl = route[1].url;
  const aboutText = route[1].text;
  const blogUrl = route[2].url;

  const faqsUrl = routeHelp[0].url;
  const faqsText = routeHelp[0].text;
  const termsAndConditionsUrl = routeHelp[2].url;
  const termsAndConditionsText = routeHelp[2].text;
  const privacyPolicyUrl = routeHelp[3].url;
  const privacyPolicyText = routeHelp[3].text;

  useEffect(() => {
    const handleScroll = () => {
      setNavActive(window.scrollY > 50);
    };

    // Toggle body scroll when menu is open
    if (expanded) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      // Make sure to remove the class when component unmounts
      document.body.classList.remove("menu-open");
    };
  }, [expanded]); // Add expanded as a dependency


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
    <header>
      <Navbar
        expand="lg"
        className={`navbar-custom ${navActive ? "active" : ""}`}
        variant="light"
      >
        <div className="navbar-container-custom">
          <Navbar.Brand>
            <img
              className="logo"
              src="/icons/logo_nombre.svg"
              alt="Logo"
              onClick={() => navigate("/#Home")}
              style={{ cursor: "pointer" }}
            />
          </Navbar.Brand>
          {/* Botón hamburguesa */}
          <Navbar.Toggle
            aria-controls="navbar-nav"
            className="hamburger-menu"
            onClick={() => setExpanded(!expanded)}
          >
            <img
              src={expanded ? "/icons/icon_close.svg" : "/icons/icon_menu.svg"}
              alt="menu"
              className="menu-icon"
            />
          </Navbar.Toggle>
          {/* Menú colapsable personalizado */}
          <div className={`navbar-collapse ${expanded ? "show" : ""}`}>
            <Nav className="navbar-links-custom d-flex align-items-center">
              <a
                onClick={() => {
                  navigate("/#Home");
                  setExpanded(false); // Cierra el menú al navegar
                }}
                className="link-navbar-custom mx-2 btn btn-outline-light"
              >
                {t("titles.home")}
              </a>
              <a
                onClick={() => {
                  navigate(aboutUrl);
                  setExpanded(false);
                }}
                className="link-navbar-custom mx-2 btn btn-outline-light"
              >
                {t(aboutText)}
              </a>
              <Dropdown
                show={dropdown}
                onToggle={() => setDropdown(!dropdown)}
                id="dropdown-services"
                className="dropdown-mobile mx-2"
              >
                <DropdownToggle className="dropdown-title">
                  {t("titles.services")}
                </DropdownToggle>
                <DropdownMenu className="dropdown-custom">
                  <Dropdown.Item
                    className="dropdown-item"
                    onClick={() => handleDropdownItemClick(webDevelopmentUrl)}
                  >
                    {webDevelopmentText}
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-item"
                    onClick={() => handleDropdownItemClick(seoUrl)}
                  >
                    SEO
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-item"
                    onClick={() => handleDropdownItemClick(webDesignUrl)}
                  >
                    {webDesignText}
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-item"
                    onClick={() => handleDropdownItemClick(appWebUrl)}
                  >
                    {appWebText}
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-item"
                    onClick={() => handleDropdownItemClick(apiUrl)}
                  >
                    {apiText}
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-item"
                    onClick={() => handleDropdownItemClick(communityUrl)}
                  >
                    {communityText}
                  </Dropdown.Item>
                </DropdownMenu>
              </Dropdown>
              <a
                onClick={() => {
                  navigate("/#Contact");
                  setExpanded(false);
                }}
                className="link-navbar-custom mx-2 btn btn-outline-light"
              >
                {t("titles.contact")}
              </a>
              <a
                onClick={() => {
                  navigate(blogUrl);
                  setExpanded(false);
                }}
                className="link-navbar-custom mx-2 btn btn-outline-light"
              >
                {t("titles.blog")}
              </a>
              <div className="navbar-language">
                <picture className="icon-language-container">
                  <img
                    className="icon-language"
                    src="/icons/icon-language.svg"
                    alt="icono de mundo"
                  />
                </picture>
                <button className="language" onClick={handleLanguageToggle}>
                  {i18n.language.toUpperCase()}
                </button>
              </div>
            </Nav>
          </div>
        </div>
      </Navbar>
    </header>
  );
};

export default NavBar;

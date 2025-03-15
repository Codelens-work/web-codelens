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
    localStorage.setItem("language", newLanguage);

  };

  const [navActive, setNavActive] = useState(false);
  const [expanded, setExpanded] = useState(false);
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

  const webDevelopmentUrl = services[0]?.url;
  const webDevelopmentText = services[0]?.text;
  const webDesignUrl = services[1]?.url;
  const webDesignText = services[1]?.text;
  const seoText = services[2]?.text;
  const seoUrl = services[2]?.url;
  const appWebUrl = services[3]?.url;
  const appWebText = services[3]?.text;
  const apiUrl = services[4]?.url;
  const apiText = services[4]?.text;
  const communityUrl = services[5]?.url;
  const communityText = services[5]?.text;
  const aboutUrl = route[1].url;
  const aboutText = route[1].text;


  useEffect(() => {
    const handleScroll = () => {
      setNavActive(window.scrollY > 50);
    };

    if (expanded) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.classList.remove("menu-open");
    };
  }, [expanded]);

  const location = useLocation();

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
              onClick={() => {
                const url = i18n.language === 'en' ? "/#home" : "/#inicio"
                navigate(url)
              }}
              style={{ cursor: "pointer" }}
            />
          </Navbar.Brand>
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
          <div className={`navbar-collapse ${expanded ? "show" : ""}`}>
            <Nav className="navbar-links-custom d-flex align-items-center">
              <a
                onClick={() => {
                  const url = i18n.language === 'en' ? "/#home" : "/#inicio"
                  navigate(url);
                  setExpanded(false);
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
                    {seoText}
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
                  const url = i18n.language === 'en' ? "/#contact" : "/#contacto"
                  navigate(url);
                  setExpanded(false);
                }}
                className="link-navbar-custom mx-2 btn btn-outline-light"
              >
                {t("titles.contact")}
              </a>
              <a
                onClick={(e) => {
                  e.preventDefault();
                }}
                className="link-navbar-custom mx-2 btn btn-outline-light"
                style={{ cursor: "not-allowed", opacity: 0.5 }}
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
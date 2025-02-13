import { useState, useEffect } from "react";
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
import { useTranslation } from 'react-i18next'
import i18n from 'i18next'



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

  useEffect(() => {
    const handleScroll = () => {
      setNavActive(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Toggle body scroll when menu is open
    if (expanded) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
            onClick={() => navigate("/")}
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
            src={
              expanded
                ? "/icons/icon_close.svg"
                : "/icons/icon_menu.svg"
            }
            alt="menu"
            className="menu-icon"
          />
        </Navbar.Toggle>
        {/* Menú colapsable personalizado */}
        <div className={`navbar-collapse ${expanded ? "show" : ""}`}>
          <Nav className="navbar-links-custom d-flex align-items-center">
            <a
              onClick={() => {
                navigate("/");
                setExpanded(false); // Cierra el menú al navegar
              }}
              className="link-navbar-custom mx-2 btn btn-outline-light"
            >
              {t('titles.home')}
            </a>
            <a
              onClick={() => {
                navigate("/nosotros");
                setExpanded(false);
              }}
              className="link-navbar-custom mx-2 btn btn-outline-light"
            >
              {t('titles.about')}
            </a>
            <Dropdown
              show={dropdown}
              onToggle={() => setDropdown(!dropdown)}
              id="dropdown-services"
              className="dropdown-mobile mx-2"
            >
              <DropdownToggle className="dropdown-title">
              {t('titles.services')}
              </DropdownToggle>
              <DropdownMenu className="dropdown-custom">
                <Dropdown.Item
                  className="dropdown-item"
                  onClick={() => handleDropdownItemClick("/servicios/desarrollo-web")}
                >
                  Desarrollo Web
                </Dropdown.Item>
                <Dropdown.Item
                  className="dropdown-item"
                  onClick={() => handleDropdownItemClick("/servicios/seo")}
                >
                  SEO
                </Dropdown.Item>
                <Dropdown.Item
                  className="dropdown-item"
                  onClick={() => handleDropdownItemClick("/servicios/diseno-web")}
                >
                  Diseño Web
                </Dropdown.Item>
                <Dropdown.Item
                  className="dropdown-item"
                  onClick={() => handleDropdownItemClick("/servicios/app-web")}
                >
                  App Web
                </Dropdown.Item>
                <Dropdown.Item
                  className="dropdown-item"
                  onClick={() => handleDropdownItemClick("/servicios/desarrollo-api")}
                >
                  Desarrollo API
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
              {t('titles.contact')}
            </a>
            <a
              onClick={() => {
                navigate("/blog");
                setExpanded(false);
              }}
              className="link-navbar-custom mx-2 btn btn-outline-light"
            >
              {t('titles.blog')}
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

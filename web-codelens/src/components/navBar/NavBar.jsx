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
//import { useLanguage } from "../../costantsLanguage/LanguageContext.jsx";



const NavBar = () => {
/*   const { t, i18n } = useTranslation();
  const handleLanguage = () => {
    const newLanguage = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLanguage);
  }; */

  const [navActive, setNavActive] = useState(false);
  const [expanded, setExpanded] = useState(false); // Estado del menú
  const navigate = useNavigate();
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavActive(window.scrollY > 50);
    };

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
              Inicio
            </a>
            <a
              onClick={() => {
                navigate("/nosotros");
                setExpanded(false);
              }}
              className="link-navbar-custom mx-2 btn btn-outline-light"
            >
              ¿Quiénes Somos?
            </a>
            <Dropdown
              show={dropdown}
              onToggle={() => setDropdown(!dropdown)}
              id="dropdown-services"
              className="dropdown-mobile mx-2"
            >
              <DropdownToggle className="dropdown-title">
                Servicios
              </DropdownToggle>
              <DropdownMenu className="dropdown-custom">
                <Dropdown.Item
                  className="dropdown-item"
                  onClick={() => navigate("/servicios/desarrollo-web")}
                >
                  Desarrollo Web
                </Dropdown.Item>
                <Dropdown.Item
                  className="dropdown-item"
                  onClick={() => navigate("/servicios/seo")}
                >
                  SEO
                </Dropdown.Item>
                <Dropdown.Item
                  className="dropdown-item"
                  onClick={() => navigate("/servicios/diseno-web")}
                >
                  Diseño Web
                </Dropdown.Item>
                <Dropdown.Item
                  className="dropdown-item"
                  onClick={() => navigate("/servicios/app-web")}
                >
                  App Web
                </Dropdown.Item>
                <Dropdown.Item
                  className="dropdown-item"
                  onClick={() => navigate("/servicios/desarrollo-api")}
                >
                  Desarrollo API
                </Dropdown.Item>
              </DropdownMenu>
            </Dropdown>
            <a
              onClick={() => {
                navigate("/contacto");
                setExpanded(false);
              }}
              className="link-navbar-custom mx-2 btn btn-outline-light"
            >
              Contacto
            </a>
            <a
              onClick={() => {
                navigate("/blog");
                setExpanded(false);
              }}
              className="link-navbar-custom mx-2 btn btn-outline-light"
            >
              Blog
            </a>
            <div className="navbar-language">
              <picture className="icon-language-container">
                <img
                  className="icon-language"
                  src="/icons/icon-language.svg"
                  alt="icono de mundo"
                />
              </picture>
              <button className="language">ES</button>
            </div>
          </Nav>
          </div>
      </Navbar>
    </header>
  );
};

export default NavBar;

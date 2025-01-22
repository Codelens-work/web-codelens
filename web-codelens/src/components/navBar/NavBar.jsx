import { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
} from "react-bootstrap";

import { useNavigate } from "react-router-dom";
//import logo from '/public/icons/logo_nombre.svg';
//import { FaGlobe } from "react-icons/fa";
import "./navBar.css";
import "bootstrap/dist/css/bootstrap.min.css";

//import { useLanguage } from "../../costantsLanguage/LanguageContext.jsx";

import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

const NavBar = () => {
  const { t, i18n } = useTranslation();
  const handleLanguage = () => {
    const newLanguage = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLanguage);
  };

  const [navActive, setNavActive] = useState(false);
  const navigate = useNavigate();
  const [dropdown, SetDropdown] = useState(false);

  const openDropdow = () => {
    SetDropdown(!dropdown);
    console.log(dropdown);
  };

  // cambia el estado/color de la navbar al hacer scroll
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
        className={`navbar-custom ${navActive ? "active" : ""}`}
        variant="light"
      >
        <Nav className="d-flex align-items-center">
          <img
            className="logo"
            src="public\icons\logo_nombre.svg"
            alt="Logo"
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          />
          <a onClick={() => navigate("/")} className="mx-2 btn btn-outline-light">
            Inicio
          </a>
          <a
            onClick={() => navigate("/nosotros")}
            className="mx-2 btn btn-outline-light"
          >
            Quienes Somos?
          </a>

          <Dropdown
            show={dropdown}
            defaultShow={false}
            onToggle={openDropdow}
            id="dropdown-services"
            className="mx-2"
          >
            <DropdownToggle>Servicios</DropdownToggle>
            <DropdownMenu>
              <Dropdown.Item onClick={() => navigate("/servicios/app-web")}>
                App Web
              </Dropdown.Item>
              <Dropdown.Item onClick={() => navigate("/servicios/seo")} >SEO</Dropdown.Item>
              <Dropdown.Item onClick={() => navigate("/servicios/diseno-web")}  >
                Diseño Web
              </Dropdown.Item>
              <Dropdown.Item onClick={() => navigate("/servicios/desarrollo-web")} >
                Desarrollo Web
              </Dropdown.Item>
              <Dropdown.Item onClick={() => navigate("/servicios/desarrollo-api")}>
                Desarrollo API
              </Dropdown.Item>
            </DropdownMenu>
          </Dropdown>

          <a onClick={() => navigate("/contacto")} className="mx-2 btn btn-outline-light">
            Contacto
          </a>
          <a onClick={() => navigate("/blog")} className="mx-2 btn btn-outline-light">
            Blog
          </a>

          <div className="navbar-language " onClick={handleLanguage}>
            <picture className="icon-language-container">
              <img
                className="icon-language"
                src="/icons/icon-language.svg"
                alt="icono de mundo"
              />
            </picture>
            <button className="language">{i18n.language}</button>
          </div>
        </Nav>
      </Navbar>
    </header>
  );
};

export default NavBar;

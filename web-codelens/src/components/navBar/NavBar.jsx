import { useState, useEffect } from "react";
import { Navbar, Form, Nav, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, DropdownButton } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
//import logo from '/public/icons/logo_nombre.svg';
import { FaGlobe } from 'react-icons/fa';
import './navBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const NavBar = () => {
    const [navActive, setNavActive] = useState(false);
    const navigate = useNavigate();
    const [dropdown, SetDropdown] = useState(false);

    const openDropdow = () => {
        SetDropdown(!dropdown);
        console.log(dropdown);
    }

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
            <Navbar className={`navbar-custom ${navActive ? 'active' : ''}`} variant="light">
                <Nav className="d-flex align-items-center">
                    <img
                        className="logo"
                        src='public\icons\logo_nombre.svg'
                        alt="Logo"
                        onClick={() => navigate("/")}
                        style={{ cursor: 'pointer' }}
                    />
                    <a href="/" className="mx-2 btn btn-outline-light">Inicio</a>
                    <a href="/nosotros" className="mx-2 btn btn-outline-light">Quienes Somos?</a>

                    <Dropdown
                        isOpen={dropdown}
                        show={dropdown}
                        defaultShow={false}
                        onToggle={openDropdow}
                        id="dropdown-services"
                        className="mx-2"
                    >
                        <DropdownToggle>
                            Servicios
                        </DropdownToggle>
                        <DropdownMenu>
                            <Dropdown.Item href="/servicios/app-web">App Web</Dropdown.Item>
                            <Dropdown.Item href="/servicios/seo">SEO</Dropdown.Item>
                            <Dropdown.Item href="/servicios/diseno-web">Diseño Web</Dropdown.Item>
                            <Dropdown.Item href="/servicios/desarrollo-web">Desarrollo Web</Dropdown.Item>
                            <Dropdown.Item href="/servicios/desarrollo-api">Desarrollo API</Dropdown.Item>
                        </DropdownMenu>

                    </Dropdown>

                    <a href="/contacto" className="mx-2 btn btn-outline-light">Contacto</a>
                    <a href="/blog" className="mx-2 btn btn-outline-light">Blog</a>


                    {/* <spam><FaGlobe /></spam> */}
                    <Form.Select className="btn">
                        <option value="1">EN</option>
                        <option value="2">ES</option>
                    </Form.Select>
                </Nav>
            </Navbar>
        </header>
    );
};

export default NavBar;
import { useState, useEffect } from "react";
import { Container, Navbar, Form, Nav, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
//import logo from "";
import { FaGlobe } from 'react-icons/fa';
import './navBar.css';

const NavBar = () => {
    const [navActive, setNavActive] = useState(false);
    const navigate = useNavigate();


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
                    <Navbar.Brand>
                        <img
                            width={navActive ? "10" : "50"} // cambia el tamaño del logo al hacer scroll
                            height={navActive ? "40" : "50"}
                            className="logo"
                            // src={logo}
                            alt="Logo"
                            //onClick={() => navigate("/")}
                            style={{ cursor: 'pointer' }}
                        />
                    </Navbar.Brand>

                    <Button variant="outline-light" className="mx-2" onClick={() => navigate("/")}>Inicio</Button>
                    <Button variant="outline-light" className="mx-2" onClick={() => navigate("/nosotros")}>Quienes Somos?</Button>
                    <Button variant="outline-light" className="mx-2" onClick={() => navigate("/servicios")}>Servicios</Button>
                    <Button variant="outline-light" className="mx-2" onClick={() => navigate("/nosotros")}>Contacto</Button>
                    <Button variant="outline-light" className="mx-2" onClick={() => navigate("/blog")}>Blog</Button>

                    <spam><FaGlobe /></spam>
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
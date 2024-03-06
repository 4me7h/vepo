import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"

import { useState } from "react";
import {Link} from 'react-scroll';

const Navbar = () => {

    const [visible, setVisible] = useState(true);
    const toggleNavbar = () => {
        setVisible(!visible);
    }

    return (
        <nav className="navBar">
            <Container>
                <Row>
                    <Col>
                        <div className="navBar__container">
                            <div className="navBar__col">
                                <Link href="#" to="hero" smooth={true} duration={500} className="navBar__brand">Vepo</Link>
                            </div>
                            <div className="navBar__col">
                                <button className="navBar__toggle" onClick={toggleNavbar}>
                                    <span className="navBar__toggle__icon"></span>
                                    <span className="navBar__toggle__icon"></span>
                                    <span className="navBar__toggle__icon"></span>
                                </button>
                            </div>
                            <div className="navBar__col">
                                <ul className={`navBar__nav ${visible ? 'visible' : ''}`}>
                                    <li className="navBar__nav__item"><Link href="#" to="hero" smooth={true} duration={500}  activeClassName="active">inicio</Link></li>
                                    <li className="navBar__nav__item"><Link href="#" to="micro" smooth={true} duration={500}>Microgerminados</Link></li>
                                    <li className="navBar__nav__item"><Link href="#" to="about" smooth={true} duration={500}>Acerca de</Link></li>
                                    <li className="navBar__nav__item"><Link href="#" to="products" smooth={true} duration={500}>Productos</Link></li>
                                    <li className="navBar__nav__item"><Link href="#" to="team" smooth={true} duration={500}>Team</Link></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </nav>
    ) 
}
export default Navbar;
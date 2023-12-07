import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import img01 from "../images/vepo-micro-01.jpg";
import img02 from "../images/vepo-micro-02.jpg";
import img03 from "../images/vepo-micro-03.jpg";
import img04 from "../images/vepo-micro-04.jpg";

const Micro = () => {
    return (
        <section className="micro">
            <Container>
                <Row>
                    <Col>
                        <div className="micro__container">
                            <div className="micro__header">
                                <h3 className="text--subtitle">
                                    Microgerminados
                                </h3>
                            </div>
                            <div className="micro__content">
                                <ul className="micro__grid">
                                    <li className="micro__grid__item">
                                        <img className="micro__grid__img" src={img01} alt="microgerminados pic" />
                                    </li>
                                    <li className="micro__grid__item">
                                        <img className="micro__grid__img" src={img02} alt="microgerminados pic" />
                                    </li>
                                    <li className="micro__grid__item">
                                        <img className="micro__grid__img" src={img03} alt="microgerminados pic" />
                                    </li>
                                    <li className="micro__grid__item">
                                        <img className="micro__grid__img" src={img04} alt="microgerminados pic" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Micro;
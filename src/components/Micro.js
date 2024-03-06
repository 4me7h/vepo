import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import img01 from "../images/vepo-micro-01.jpg";
import img02 from "../images/vepo-micro-02.jpg";
import img03 from "../images/vepo-micro-03.jpg";
import img04 from "../images/vepo-micro-04.jpg";
import img05 from "../images/vepo-micro-05.jpg";
import img06 from "../images/vepo-micro-06.jpg";

import { Fade, Bounce } from 'react-awesome-reveal';

const Micro = () => {
    return (
        <section className="micro">
            <Container>
                <Row>
                    <Col>
                        <div className="micro__container">
                            
                            <div className="micro__header">
                                <Fade direction="left" triggerOnce>
                                <h3 className="text--subtitle">
                                    Microgerminados
                                </h3>
                                </Fade> 
                            </div>
                            
                            <div className="micro__content">
                                <Fade cascade triggerOnce>
                                <div className="micro__lead">
                                    <p className="text--lead">
                                        <strong>Lo más nuevo,</strong> dale ese toque dulce a tus mejores platillos con el nuevo microgen de melón.
                                    </p>
                                </div>
                                <ul className="micro__content__gallery">
                                    <li className="micro__content__item">
                                        <img className="micro__content__img" src={img05} alt="microgerminados pic" />
                                        <img className="micro__content__img" src={img02} alt="microgerminados pic" />
                                    </li>
                                    <li className="micro__content__item">
                                        <img className="micro__content__img" src={img06} alt="microgerminados pic" />
                                        <img className="micro__content__img" src={img05} alt="microgerminados pic" />
                                        <img className="micro__content__img" src={img01} alt="microgerminados pic" />
                                    </li>
                                    <li className="micro__content__item">
                                        <img className="micro__content__img" src={img01} alt="microgerminados pic" />
                                        <img className="micro__content__img" src={img03} alt="microgerminados pic" />
                                    </li>
                                </ul>
                                </Fade>
                                <Fade cascade triggerOnce direction="right">
                                <div className="micro__benefits">
                                    <h4 class="text--lead">Beneficios de los Microgerminados</h4>
                                    <p className="text--body">
                                        Todos los nutrientes que necesita una planta adulta para crecer están concentradas en este pequeño brote.
                                    </p>
                                    <p className="text--body">
                                        Así es, los nutrientes de un delicioso melón, están en un delicioso microgreen.
                                    </p>
                                    <p className="text--body"><strong>Compuesto de:</strong> <span className="lighted">Calcio, Magnesio, Hierro, Antioxidantes, Compuestos Vegetales, entre otros elementos</span></p>
                                    <p className="text--body">
                                        Una explosión de sabor en cada bocado, preparate para un viaje de sabores donde el límite es tu imaginación.
                                    </p>
                                    <p className="text--body">
                                        Cultivados y cosechados como en el espacio.
                                    </p>
                                    <p className="text--body">
                                        Culvitamos con tecnología como lo hacen los astronáutas. 
                                    </p>
                                    <ul className="list--body">
                                        <li>Sin tierra</li>
                                        <li>Sin químicos</li>
                                        <li>En un espacio controlado</li>
                                    </ul>
                                    <p className="text--body">
                                        ¿Y tú qué esperas para brobar?
                                    </p>
                                    <p className="text--body">
                                        Vepo, donde tú eres nuestra prioridad.
                                    </p>
                                </div>
                                </Fade>  
                                <Fade cascade triggerOnce>
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
                                </Fade>
                            </div>
                            
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Micro;
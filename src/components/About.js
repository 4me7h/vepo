import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import image02 from '../images/img-02.jpg';
import image03 from '../images/img-03.jpg';
import image04 from '../images/img-04.jpg';

import image05 from '../images/img-05.jpg';
import image06 from '../images/img-06.jpg';
import image07 from '../images/img-07.jpg';

import { Fade } from 'react-awesome-reveal';

export default function About() {
  return (
    <section className="about">
      <Container>
        <Row>
          <Col>
            <div className="about__container">
              <Fade direction="up" triggerOnce>
              <div className="about__header">
                <h3 className="text--subtitle">¿Qué es VEPO?</h3>
              </div>
              </Fade>
              <Fade direction="right" triggerOnce>
              <div className="about__lead">
                <p className="text--lead">
                  En <span className="lighted">Vepo</span>, creemos que la <span className="lighted">hidroponia</span> es más que una <span className="lighted">técnica de cultivo</span>; es un enfoque para <span className="lighted">alimentar</span> el mundo de manera eficiente y respetuosa con el <span className="lighted">medio ambiente</span>. 
                </p>
              </div>
              </Fade>
              <Fade direction="left" triggerOnce>
              <div className="about__images-grid">
                <img className="about__images-grid__item" alt="image" src={image02}/>
                <img className="about__images-grid__item" alt="image1" src={image03}/>
                <img className="about__images-grid__item" alt="image2" src={image04}/>
              </div>
              </Fade>
              <Fade direction="right" triggerOnce>
              <div className="about__content">
                <p className="text--body">
                  Nuestro proyecto nace de la pasión por crear una conexión más cercana entre las personas y los alimentos que consumen.
                </p>
              </div>  
              </Fade>
              <Fade direction="right" triggerOnce>
              <div className="about__images-grid">
                <img className="about__images-grid__item" alt="image" src={image05}/>
                <img className="about__images-grid__item" alt="image1" src={image06}/>
                <img className="about__images-grid__item" alt="image2" src={image07}/>
              </div>
              </Fade>
              <Fade direction='up' triggerOnce>
              <div className="about__content">
                <p className="text--body">
                  A través de la <span className="lighted">innovación</span> y el compromiso con la calidad, estamos reinventando la <span className="lighted">agricultura</span> para las generaciones venideras.
                </p>
              </div>
              </Fade>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

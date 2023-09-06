import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from './Cards';

import image01 from '../images/img-08.jpg';
import image02 from '../images/img-10.jpg';
import image03 from '../images/img-09.jpg';

export default function Products() {
  return (
    <div className="products">
      <Container>
        <Row>
          <Col>
            <div className="products__container">
              <div className="products__header">
                <h2 className="text--subtitle">Productos</h2>
              </div>
              <div className="products__content">
                <p className="text--body">
                  Descubre cómo Vepo puede transformar tu relación con la comida fresca y saludable. 
                </p>
                <p className="text--body">
                  
                  Ofrecemos una gama de soluciones hidropónicas diseñadas para adaptarse a tus necesidades y estilo de vida:
                </p>
                <ul className="products__list">
                  <li className="products__item">
                    <Card 
                      image = {image01}
                      name = "1. Cultivo en Casa"
                      description = "Experimenta la alegría de cultivar tus propios vegetales en la comodidad de tu hogar."
                    />
                  </li>
                  <li className="products__item">
                  <Card 
                      image = {image02}
                      name = "2. Granja Urbana"
                      description = "Participa en la revolución verde al unirte a nuestra red de granjas urbanas sostenibles."
                    />
                  </li>
                  <li className="products__item">
                  <Card 
                      image = {image03}
                      name = "3. Productos Frescos"
                      description = "Explora nuestra selección de productos hidropónicos frescos, cultivados con cuidado."
                    />
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

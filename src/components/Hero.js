import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Hero = () => {
    const backgroundImage = {
        backgroundImage: "url(https://tinyurl.com/vepoh)"
    }
    
    return (
        <div className="hero hero--img" style={backgroundImage}>
            <div className="hero--overlay"></div>
            <Container>
                <Row>
                    <Col>
                        <div className="hero__content">
                            <h1>Vepo</h1>
                            <h2>Cultivando Sustentabilidad, Cosechando Bienestar: Vepo, Donde Tú Eres Nuestra Prioridad.</h2>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Hero;
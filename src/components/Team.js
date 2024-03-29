import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Fade } from 'react-awesome-reveal';

const Team = () => {
    return(
        <div className="team">
            <Container>
                <Row>
                    <Col>
                        <div className="team__container">
                            <Fade direction='down' triggerOnce>
                            <div className="team__header">
                                <h2 className="text--subtitle">Nosotros</h2>
                            </div>
                            </Fade>
                            <Fade direction='up' triggerOnce>
                            <div className="team__content">
                                <p className="text--body">
                                    Detrás de cada hoja de lechuga y cada tomate jugoso, hay un equipo apasionado que impulsa el corazón de Vepo. 
                                </p>
                                <p className="text--body">
                                    Nuestros expertos en agronomía, tecnología y sostenibilidad trabajan juntos para crear soluciones que hagan del mundo un lugar mejor a través de la agricultura inteligente. Conócenos y únete a nuestra misión.
                                </p>                          
                            </div>
                            </Fade>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Team;
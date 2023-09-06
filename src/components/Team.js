import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Team = () => {
    return(
        <div className="team">
            <Container>
                <Row>
                    <Col>
                        <div className="team__container">
                            <h2>Team</h2>
                            <p>
                                Detrás de cada hoja de lechuga y cada tomate jugoso, hay un equipo apasionado que impulsa el corazón de Vepo. Nuestros expertos en agronomía, tecnología y sostenibilidad trabajan juntos para crear soluciones que hagan del mundo un lugar mejor a través de la agricultura inteligente. Conócenos y únete a nuestra misión.
                            </p>
                            <p>
                                Conoce a Nuestro Equipo (Botón de llamada a la acción)
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Team;
import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Instagram, Github, Linkedin } from 'react-bootstrap-icons';




const Footer = () => {
    return (
        <footer className="footerLine footer">
            <Container className="footStyle">
                <Row>
                    <Col>
                        <a href="https://github.com/Tarynmoore">
                            <button
                                className="footButton">
                                <Github size={40} />
                            </button>
                        </a>
                        <a href="https://www.instagram.com/tarynitup628/">
                        <button className="footButton">
                            <Instagram size={40} />
                        </button>
                        </a>
                        <a href="https://www.linkedin.com/in/taryn-moore-a4466b7a/">
                        <button className="footButton">
                            <Linkedin size={40} />
                        </button>
                        </a>

                    </Col>
                </Row>
            </Container>

        </footer>
    )
}


export default Footer;

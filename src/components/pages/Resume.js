import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import pdf from './image/resume22.pdf'

export default function Resume() {
    return(
        <div>
         <Row xs={12}>
            <h1 className="line name">Want to know more?</h1>
        </Row>

        <Container>
                <Row>
                <Col xs={12}>
                    <h3 >Languages I have mastered</h3>
                    <h5>Frontend:</h5>
                    <p>HTML, CSS, React, Javascript, jQuery</p>
                    <h5>Backend:</h5>
                    <p>Express, NoSQL, mySQL, NOde.js, MongoDb</p>
                </Col>
                <Col>
                <a href={pdf} download>Download my resume!</a>
                </Col>
                </Row>

        </Container>





        </div>
    )
}
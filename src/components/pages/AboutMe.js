import React from "react";
import profilePic from './image/profilePic.jpeg'
import 'bootstrap/dist/css/bootstrap.css'
import Image from "react-bootstrap/Image";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function AboutMe() {
    return (
        <div>
            <Row xs={12}>
            <h1 className="line name">Hi, I'm Taryn Moore</h1>
            </Row>
            <Container >

                <Row className="format">
                    <Col xs={12}>
                        <h3>Welcome,</h3>
                        <p>I have spent the past few months furthering my knowledge on frontend and
                            backend web development. When I am not spending my time studying
                            I enjoy practing yoga, taking my dog for walks, and creating applications
                            to practice my coding. Most of my professional career has been spent working
                            locally. I have completed my associates in Education, and am looking forward
                            to my career in tech.
                        </p>
                   
                    </Col>
                    <Col>
                        <Image
                            src={profilePic}
                            alt="Taryn Moore"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

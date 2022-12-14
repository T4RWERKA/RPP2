import React, { Component } from "react";
import { Button, Card, CardGroup, Container, Figure } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Metliskij from "./Auth/Metliskij"
import Hilevich from "./Auth/Nil"
import Brovka from "./Auth/Brovka"
import Boroda from "./Auth/Boroda"
import Adam from "./Auth/Adam"

import Globus from "../assets/Globus.jpg"
import egor from "../assets/Boroda.jpg"
import Nil from '../assets/Nil1.jpg'
import Petr from '../assets/Petr1.jpg'
import Mik from '../assets/Nikolaj_Metlitskij.jpg'

class Authors extends Component {
    render() {
        return (
            <Container className="text-center ">
            <Row className = "w-100  row justify-content-md-center">
                <Col className = "gy-5">
                    <Card border="primary" > 
                        <Card.Img
                            variant="top"
                            src={Mik}
                            alt="Mikola"
                        />
                        <Card.Body>
                            <Card.Title>Николай Метлицкий</Card.Title>
                            <Button href={Metliskij} variant="outline-primary">Об авторе</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className = "gy-5">
                    <Card border="primary">
                        <Card.Img
                            variant="top"
                            src={Nil}
                            alt="Nil"
                        />
                        <Card.Body>
                        <Card.Title>Нил Гилевич</Card.Title>
                            <Button href={Hilevich} variant="outline-primary">Об авторе</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className = "gy-5">
                    <Card border="primary" className="">
                        <Card.Img
                            variant="top"
                            alt="Brovka"
                            src={Petr}
                        />
                        <Card.Body>
                        <Card.Title>Пётр Бровка</Card.Title>
                            <Button href={Brovka}variant="outline-primary">Об авторе</Button>
                        </Card.Body>
                    </Card>
                </Col>
                </Row>
                <Row>
                <Col className = "gy-2">
                    <Card border="primary"> 
                        <Card.Img
                            variant="top"
                            src={egor}
                            alt="Baradulin"
                        />
                        <Card.Body>
                            <Card.Title>Егор Барадулин</Card.Title>
                            <Button href={Boroda} variant="outline-primary">Об авторе</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className = "gy-2">
                    <Card border="primary">
                        <Card.Img
                            variant="top"
                            src={Globus}
                            alt="Globus"
                        />
                        <Card.Body>
                        <Card.Title>Адам Глобус</Card.Title>
                            <Button href={Adam} variant="outline-primary">Об авторе</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        );
    }
}
export default Authors;

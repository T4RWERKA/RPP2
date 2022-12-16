import React, { Component } from "react";
import { Button, Card, CardGroup, Container, Figure } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Globus from "../assets/Globus.jpg";
import egor from "../assets/Boroda.jpg";
import Nil from "../assets/Nil1.jpg";
import Petr from "../assets/Petr1.jpg";
import Mik from "../assets/Nikolaj_Metlitskij.jpg";

class Authors extends Component {
  render() {
    return (
      <>
        <Container className="text-center ">
          <div id="authors_flex">
            <Card border="dark">
              <Card.Img variant="top" src={Mik} alt="Mikola" />
              <Card.Body>
                <Card.Title>Николай Метлицкий</Card.Title>
                <Button href="/RPP2_react.github.io/authors/metliskij" variant="outline-dark">
                  Об авторе
                </Button>
              </Card.Body>
            </Card>

            <Card border="dark">
              <Card.Img variant="top" src={Nil} alt="Nil" />
              <Card.Body>
                <Card.Title>Нил Гилевич</Card.Title>
                <Button href="/RPP2_react.github.io/authors/hilevich" variant="outline-dark">
                  Об авторе
                </Button>
              </Card.Body>
            </Card>

            <Card border="dark" className="">
              <Card.Img variant="top" alt="Brovka" src={Petr} />
              <Card.Body>
                <Card.Title>Пётр Бровка</Card.Title>
                <Button href="/RPP2_react.github.io/authors/brovka" variant="outline-dark">
                  Об авторе
                </Button>
              </Card.Body>
            </Card>

            <Card border="dark">
              <Card.Img variant="top" src={egor} alt="Baradulin" />
              <Card.Body>
                <Card.Title>Рыгор Барадулин</Card.Title>
                <Button href="/RPP2_react.github.io/authors/borodulin" variant="outline-dark">
                  Об авторе
                </Button>
              </Card.Body>
            </Card>

            <Card border="dark">
              <Card.Img variant="top" src={Globus} alt="Globus" />
              <Card.Body>
                <Card.Title>Адам Глобус</Card.Title>
                <Button href="/RPP2_react.github.io/authors/globus" variant="outline-dark">
                  Об авторе
                </Button>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </>
    );
  }
}
export default Authors;

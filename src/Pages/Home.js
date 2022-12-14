import React, { Component } from "react";
import { Button, Card, CardGroup, Container } from "react-bootstrap";
import CarouselBox from "../Components/CarouselBox";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import evgexaxzc from "../assets/evgexaxzc.png";
import MenterCOX from "../assets/MenterCOX.png";
import T4WERKA from "../assets/T4WERKA.jpg";

class Home extends Component {
  render() {
    return (
      <>
    
        <CarouselBox/>
        <Container className="text-center">
            <h2 className="text-center m-4">Our team</h2>
            <Row>
                <Col>
                    <Card className="ml-auto"> 
                        <Card.Img
                            variant="top"
                            src={evgexaxzc}
                            alt="evgexaxzc"
                        />
                        <Card.Body>
                            <Card.Title>evgexaxzc</Card.Title>
                            <Card.Text>Евгений Митюля</Card.Text>
                            <Button href="https://github.com/evgexaxzc" variant="primary">Об участнике</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col >
                    <Card>
                        <Card.Img
                            variant="top"
                            src={MenterCOX}
                            alt="MenterCOX"
                        />
                        <Card.Body>
                            <Card.Title>MenterCOX</Card.Title>
                            <Card.Text>Даниил Ягниш</Card.Text>
                            <Button href="https://github.com/MenterCOX" variant="primary">Об участнике</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col >
                    <Card className="mr-auto">
                        <Card.Img
                            variant="top"
                            alt="T4WERKA"
                            src={T4WERKA}
                        />
                        <Card.Body>
                            <Card.Title>T4WERKA</Card.Title>
                            <Card.Text>Денис Шафаренко</Card.Text>
                            <Button href="https://github.com/T4RWERKA" variant="primary">Об участнике</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>    
        </Container>
        
      </>
    );
  }
 
}
export default Home;

import React, { Component } from "react";
import { Button, Card, CardGroup, Container, Figure } from "react-bootstrap";
import CarouselBox from "../Components/CarouselBox";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import evgexaxzc from "../assets/evgexaxzc.png";
import MenterCOX from "../assets/MenterCOX.jpg";
import T4WERKA from "../assets/T4WERKA.jpg";
import Nikolai from "../assets/Nikolaj_Metlitskij.jpg";                     

class Home extends Component {
  render() {
    return (
      <>
    
        <CarouselBox/>
        <Container>
            <h2 className="text-center m-4">Биография</h2>
            <div id="person">
                <div align="left">
                    <p class="person_about">
                    Никола́й Миха́йлович Метли́цкий (белор. Мікала́й Міха́йлавіч (Міко́ла) Мятлі́цкі; 20 марта 1954, д. Бабчин, Хойнинский район, 
                    Гомельская область — 27 ноября 2021) — белорусский поэт, переводчик, публицист, журналист. Заслуженный деятель культуры Республики Беларусь (2019). 
                    Лауреат Государственной премии Республики Беларусь имени Янки Купалы (1998). Лауреат премии Ленинского комсомола Белорусской ССР (1986). 
                    Лауреат Специальной премии Президента Республики Беларусь деятелям культуры и искусства (2013). Член Союза писателей СССР (1981).
                    </p>
                </div>
                <div class="person_card">
                    <Figure align="center">
                        <Figure.Image
                            src={Nikolai}
                            alt="Nikolai"
                            height={100}
                            weight={100}
                        />
                        <Figure.Caption>
                            <h4>Николай Метлицкий</h4>
                            <p><b>Дата рождения</b> 20 марта 1954</p>
                            <p><b>Место рождения</b> д. Бабчин, Гомельская область, БССР</p>
                            <p><b>Гражданство</b> Беларусь</p>
                            <p><b>Дата смерти</b> 27 ноября 2021</p>
                        </Figure.Caption>
                    </Figure>
                </div>
            </div>
        
        </Container>
        
        <Container className="text-center">
            <h2 className="text-center m-4">Наша команда</h2>
            <Row>
                <Col>
                    <Card border="primary"> 
                        <Card.Img
                            variant="top"
                            src={evgexaxzc}
                            alt="evgexaxzc"
                        />
                        <Card.Body>
                            <Card.Title>evgexaxzc</Card.Title>
                            <Card.Text style={{fontSize:"20px"}}>Евгений Митюля</Card.Text>
                            <Button href="https://github.com/evgexaxzc" variant="outline-primary">Об участнике</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card border="primary">
                        <Card.Img
                            variant="top"
                            src={MenterCOX}
                            alt="MenterCOX"
                        />
                        <Card.Body>
                            <Card.Title>MenterCOX</Card.Title>
                            <Card.Text style={{fontSize:"20px"}}>Даниил Ягниш</Card.Text>
                            <Button href="https://github.com/MenterCOX" variant="outline-primary">Об участнике</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card border="primary">
                        <Card.Img
                            variant="top"
                            alt="T4WERKA"
                            src={T4WERKA}
                        />
                        <Card.Body>
                            <Card.Title>T4WERKA</Card.Title>
                            <Card.Text style={{fontSize:"20px"}}>Денис Шафаренко</Card.Text>
                            <Button href="https://github.com/T4RWERKA" variant="outline-primary">Об участнике</Button>
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

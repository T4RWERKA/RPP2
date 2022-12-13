import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import zamok from "../assets/zamok.jpg";
import zamok2 from "../assets/zamok2.jpg";

class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img height={700} className="d-block w-100" src={zamok} alt="zamok" />
          <Carousel.Caption>
            <h3>Minsk</h3>
            <p>Тут могла быть ваша реклама</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img height={700} className="d-block w-100" src={zamok2} alt="zamok2" />
          <Carousel.Caption>
            <h3>Minsk 123</h3>
            <p>Тут могла быть 3asdasdваша реклама</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default CarouselBox;

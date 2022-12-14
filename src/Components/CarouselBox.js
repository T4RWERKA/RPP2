import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Mik from "../assets/Mik.jpg";
import Mik1 from "../assets/Mik1.jpg";
import Mik2 from "../assets/Mik2.jpg";

class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img height={840} className="d-block w-100" src={Mik} alt="Mik" />
          <Carousel.Caption>
            <h3>Николай Метлицкий</h3>
            <p>Белорусский поэт, переводчик, публицист, журналист. </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img height={840} className="d-block w-100" src={Mik} alt="Mik" />
          <Carousel.Caption>
            <h3>Николай Метлицкий</h3>
            <p>Белорусский поэт, переводчик, публицист, журналист. </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img height={840} className="d-block w-100" src={Mik1} alt="Mik1" />
          <Carousel.Caption>
            <h3>Няправільныя санкі</h3>
            <p>Наиболее популярное произведение</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img height={840} className="d-block w-100" src={Mik2} alt="Mik2" />
          <Carousel.Caption>
            <h3>Переводы</h3>
            <p>Перевёл на белорусский язык ряд текстов поэтов Китая</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default CarouselBox;

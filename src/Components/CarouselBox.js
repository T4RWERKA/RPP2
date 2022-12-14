import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Mik from "../assets/Mik.jpg";
import Mik1 from "../assets/Mik1.jpg";
import Mik2 from "../assets/Mik2.jpg";
import Mik_1 from "../assets/Mik_1.jpg";
import Mik_2 from "../assets/Mik_2.jpg";

class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <div id="carousel">
            <img 
              class="carousel_img"
              height={840}
              className="d-block w-100"
              src={Mik_1}
              alt="Mik"
            />
          </div>
          <Carousel.Caption>
            <h3>Николай Метлицкий</h3>
            <p>Белорусский поэт, переводчик, публицист, журналист. </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div id="carousel">
            <img
              class="carousel_img"
              height={840}
              className="d-block w-100"
              src={Mik_2}
              alt="Mik1"
            />
          </div>
          <Carousel.Caption>
            <h3>Няправільныя санкі</h3>
            <p>Наиболее популярное произведение</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div id="carousel">
            <img
              height={840}
              className="d-block w-100"
              src={Mik}
              alt="Mik2"
            />
            <Carousel.Caption>
              <h3>Переводы</h3>
              <p>Перевёл на белорусский язык ряд текстов поэтов Китая</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default CarouselBox;

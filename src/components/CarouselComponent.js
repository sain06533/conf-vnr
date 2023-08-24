import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CarouselComponent.css'; // You can create this CSS file for additional styling
import iimg1 from './iimg1.png'
import img2 from './images/img2.png'
import img3 from './images/img3.png'

function CarouselComponent() {
  return (
    <Carousel className="custom-carousel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={iimg1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Slide 1</h3>
          <p>This is the first slide's description.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Slide 2</h3>
          <p>This is the second slide's description.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Slide 1</h3>
          <p>This is the first slide's description.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Add more Carousel.Items as needed */}
    </Carousel>
  );
}

export default CarouselComponent;

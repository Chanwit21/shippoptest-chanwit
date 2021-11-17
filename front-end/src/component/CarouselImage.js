import React from "react";
import { Carousel } from "react-bootstrap";
import grayImage from "../PIC/images.jpg";

function CarouselBook() {
  return (
    <Carousel
      className="overflow-hidden"
      interval={3000}
      indicators={false}
      nextIcon={
        <div className="carousel-control-next-box-icon">
          <span aria-hidden="true" className="carousel-control-next-icon" />
        </div>
      }
      prevIcon={
        <div className="carousel-control-prev-box-icon">
          <span aria-hidden="true" className="carousel-control-prev-icon" />
        </div>
      }
      style={{ height: "60vh" }}
    >
      <Carousel.Item>
        <img className="d-block w-100" src={grayImage} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={grayImage} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={grayImage} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselBook;

import React, { useState } from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const genCarouselItem = (books) => {
  const result = [];
  for (let i = 1; i <= Math.floor(books.length / 5); i++) {
    const element = (
      <Carousel.Item key={i}>
        <Row>
          {books.slice(5 * (i - 1), 5 * i).map((book) => {
            return (
              <Col key={book.id}>
                <ProductCard book={book} />
              </Col>
            );
          })}
        </Row>
      </Carousel.Item>
    );
    result.push(element);
  }
  return result;
};

function ProductSlider({ header, books }) {
  const [isSlide, setIsSlide] = useState(false);
  const bookShow = genCarouselItem(books);

  const handleSlide = () => {
    setIsSlide(true);
  };

  const handleSlid = () => {
    setIsSlide(false);
  };

  return (
    <Container fluid className="my-5">
      <Row>
        <Col>
          <h3>
            <strong>{header}</strong>
          </h3>
        </Col>
        <Col className="d-flex justify-content-end">
          <Link to="#" style={{ color: "#000" }}>
            ดูสินค้าทั้งหมด
          </Link>
        </Col>
      </Row>
      <Carousel
        interval={null}
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
        onSlide={handleSlide}
        onSlid={handleSlid}
        style={{ overflow: isSlide ? "hidden" : "visible" }}
      >
        {bookShow}
      </Carousel>
    </Container>
  );
}

export default ProductSlider;

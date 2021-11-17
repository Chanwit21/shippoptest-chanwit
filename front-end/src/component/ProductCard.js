import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import RatingView from "./RatingView";
import { thbFormat } from "../services";
import { useCartContext } from "../context";

function ProductCard({ book }) {
  const [cardHover, setCardHover] = useState(false);
  const { dispatch } = useCartContext();

  const handleOnMouseOver = () => {
    setCardHover(true);
  };

  const handleOnMouseLeave = () => {
    setCardHover(false);
  };

  const handleClickAddToCart = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_CART", payload: { product: { ...book, quantity: 1 } } });
  };

  return (
    <Container
      fluid
      className={`product-card py-3${cardHover ? " shadow product-card-hover" : ""}`}
      onMouseOver={handleOnMouseOver}
      onMouseLeave={handleOnMouseLeave}
    >
      <Link to={`/product-detail/${book.id}`} style={{ textDecoration: "none", color: "#000" }}>
        <Row>
          <Col style={{ color: "green" }}>
            <i className="bi bi-check-circle-fill"></i>
            <span className="ms-2">มีสินค้า</span>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="my-1" style={{ position: "relative" }}>
              <img
                src={book.imageUrl}
                alt="book"
                style={{ width: "70%", height: "150px", objectFit: "cover", margin: "0 auto", display: "block" }}
              />

              {cardHover ? (
                <div className="product-card-icon">
                  <div className="d-flex flex-column" style={{ marginRight: "-15px" }}>
                    <Button variant="light" className="icon-in-card border border-3 rounded-pill p-0 m-0 my-1">
                      <i className="bi bi-suit-heart"></i>
                    </Button>
                    <Button variant="light" className="icon-in-card border border-3 rounded-pill p-0 m-0">
                      <i className="bi bi-bar-chart-fill"></i>
                    </Button>
                  </div>
                </div>
              ) : null}
            </div>
          </Col>
        </Row>

        {cardHover ? (
          <Row className="justify-content-center my-2">
            <Button
              variant="outline-primary"
              className="rounded-pill"
              style={{ width: "80%" }}
              onClick={handleClickAddToCart}
            >
              <i className="bi bi-cart3"></i>
              Add To Cart
            </Button>
          </Row>
        ) : null}

        <Row>
          <Col>
            <div className="d-flex justify-content-start my-2">
              <RatingView point={4.5} />
              <span className="ms-2">Review(4)</span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="fs-6 m-0">
              <strong>{book.name}</strong>
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-decoration-line-through m-0">{thbFormat(book.price)}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="fs-5">
              <strong>{thbFormat(book.price * (1 - book.discount))}</strong>
            </p>
          </Col>
        </Row>
      </Link>
    </Container>
  );
}

export default ProductCard;

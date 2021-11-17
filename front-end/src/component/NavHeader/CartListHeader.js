import React from "react";
import { Row, Col, Image, Container, Button } from "react-bootstrap";

function CartListHeader({ product, deleteProductInCart }) {
  const handleClickDelete = () => {
    deleteProductInCart(product.id);
  };
  return (
    <Container fluid className="py-3 border-bottom" style={{ borderColor: "rgba(0,0,0,.15)" }}>
      <Row style={{ height: "4vw" }} className="p-0 m-0">
        <Col xs lg="1" className="d-flex align-items-center">{`${product.quantity}x`}</Col>
        <Col xs lg="4" className="d-flex alignitem-cenetr align-items-center">
          <Image src={product.imageUrl} rounded style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </Col>
        <Col className="d-flex justi align-items-start">{product.name}</Col>
        <Col xs lg="2" className="d-flex align-items-start">
          <Container fluid className="p-0">
            <Row>
              <Col>
                <Button
                  variant="light"
                  className="rounded-circle p-0 m-0 mb-2 d-flex align-items-center justify-content-center border border-2"
                  style={{ width: "20px", height: "20px" }}
                  onClick={handleClickDelete}
                >
                  <i className="bi bi-x-lg" style={{ fontSize: "10px" }}></i>
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button
                  variant="light"
                  className="rounded-circle p-0 m-0 d-flex align-items-center justify-content-center border border-2"
                  style={{ width: "20px", height: "20px" }}
                >
                  <i className="bi bi-pencil" style={{ fontSize: "10px" }}></i>
                </Button>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default CartListHeader;

import React, { useState } from "react";
import { Col, Dropdown, Row, Image, Button } from "react-bootstrap";
import { useCartContext } from "../../context";
import { thbFormat } from "../../services";

function ProductListInCart({ product }) {
  const [quantity, setQuantity] = useState(product.quantity);
  const { dispatch } = useCartContext();

  const handleClickIncrease = () => {
    setQuantity((cur) => {
      const newProduct = { ...product, quantity: cur + 1 };
      dispatch({ type: "UPDATE_CART", payload: { product: newProduct, productId: product.id } });
      return cur + 1;
    });
  };

  const handleClickDecrease = () => {
    if (quantity > 1) {
      setQuantity((cur) => {
        const newProduct = { ...product, quantity: cur - 1 };
        dispatch({ type: "UPDATE_CART", payload: { product: newProduct, productId: product.id } });
        return cur - 1;
      });
    }
  };

  const handleClickDeleteProduct = () => {
    dispatch({ type: "DELETE_CART", payload: { productId: product.id } });
  };

  return (
    <Row className="py-2">
      <Col lg={6}>
        <Row style={{ height: "15vh" }} className="py-2">
          <Col className="d-flex align-items-center" lg={4}>
            <Image src={product.imageUrl} rounded style={{ width: "100%", height: "90%", objectFit: "cover" }} />
          </Col>
          <Col>
            <p className="p-0">
              <strong>{product.name}</strong>
            </p>
          </Col>
        </Row>
      </Col>
      <Col lg={2}>
        <h5 className="m-0">
          <strong>{thbFormat(product.price * (1 - product.discount))}</strong>
        </h5>
      </Col>
      <Col lg={2}>
        <div className="d-flex">
          <div
            style={{ width: "40%", heigth: "30%" }}
            className="d-flex justify-content-center align-items-center bg-secondary bg-opacity-25 rounded-start"
          >
            <strong>{quantity}</strong>
          </div>
          <div className="d-flex flex-column">
            <Button
              variant="light"
              className="bg-secondary bg-opacity-25 border-0"
              style={{ borderRadius: "0 0.25rem 0 0" }}
              onClick={handleClickIncrease}
            >
              <strong>
                <i className="bi bi-chevron-up" style={{ fontSize: "15px" }}></i>
              </strong>
            </Button>
            <Button
              variant="light"
              className="bg-secondary bg-opacity-25 border-0"
              style={{ borderRadius: "0 0 0.25rem 0" }}
              onClick={handleClickDecrease}
            >
              <strong>
                <i className="bi bi-chevron-down" style={{ fontSize: "15px" }}></i>
              </strong>
            </Button>
          </div>
        </div>
      </Col>
      <Col lg={2} style={{ position: "relative" }}>
        <p className="m-0">
          <strong>{thbFormat(product.price * (1 - product.discount) * quantity)}</strong>
        </p>
        <div className="product-card-icon">
          <div className="d-flex flex-column">
            <Button
              variant="light"
              className="icon-in-card border border-3 rounded-pill p-0 m-0 mb-1"
              onClick={handleClickDeleteProduct}
            >
              <i className="bi bi-x-lg" style={{ fontSize: "1px" }}></i>
            </Button>
            <Button variant="light" className="icon-in-card border border-3 rounded-pill p-0 m-0">
              <i className="bi bi-pencil" style={{ fontSize: "1px" }}></i>
            </Button>
          </div>
        </div>
      </Col>
      <Dropdown.Divider />
    </Row>
  );
}

export default ProductListInCart;

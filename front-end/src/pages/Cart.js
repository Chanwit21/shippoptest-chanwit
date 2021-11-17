import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import CartTableHeader from "../component/Cart/CartTableHeader";
import ProductListInCart from "../component/Cart/ProductListInCart";
import OrderSummaryCard from "../component/OrderSummaryCard";
import { useCartContext } from "../context";

function Cart() {
  const {
    state: { products, totalPrice, countCart },
    dispatch,
  } = useCartContext();
  const shippingPrice = 1;

  const handleClickInitCart = () => {
    dispatch({ type: "INIT_CART" });
  };
  return (
    <Container className="pt-5">
      <Row className="pb-3">
        <h1>
          <strong>ตระกร้าสินค้าของฉัน</strong>
        </h1>
      </Row>
      <Row>
        <Col lg={8}>
          {countCart === 0 ? (
            <>
              <h1>ไม่มีสินค้าในตระกร้า</h1>
              <Button as={Link} to="/" variant="outline-dark" className="rounded-pill px-5" style={{ fontSize: "1vw" }}>
                ซื้อสินค้าต่อไป
              </Button>
            </>
          ) : (
            <>
              <CartTableHeader />
              {products.map((product) => {
                return <ProductListInCart product={product} key={product.id} />;
              })}
              <Row>
                <Col>
                  <Button
                    as={Link}
                    to="/"
                    variant="outline-dark"
                    className="rounded-pill px-5"
                    style={{ fontSize: "1vw" }}
                  >
                    ซื้อสินค้าต่อไป
                  </Button>
                  <Button
                    variant="dark"
                    className="rounded-pill px-5 ms-3"
                    style={{ fontSize: "1vw" }}
                    onClick={handleClickInitCart}
                  >
                    ล้างตระกร้าสินค้า
                  </Button>
                </Col>
              </Row>
            </>
          )}
        </Col>
        <Col lg={4}>
          <OrderSummaryCard totalPrice={totalPrice} shippingPrice={shippingPrice} buttonName="ไปชำระเงิน" />
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;

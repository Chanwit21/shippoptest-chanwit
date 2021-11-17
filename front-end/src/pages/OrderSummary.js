import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AddressForm from "../component/OrderSummary/AddressForm";
import Payment from "../component/OrderSummary/Payment";
import Shipping from "../component/OrderSummary/Shipping";
import OrderSummaryCard from "../component/OrderSummaryCard";
import { useCartContext } from "../context";

function OrderSummary() {
  const [addressFrom, setAddressFrom] = useState({
    firstName: "",
    lastName: "",
    country: "",
    address: "",
    subDistrict: "",
    district: "",
    province: "",
    postalcode: "",
    phone: "",
  });
  const [errorAddressFrom, setErrorAddressFrom] = useState({
    firstName: "",
    lastName: "",
    country: "",
    address: "",
    subDistrict: "",
    district: "",
    province: "",
    postalcode: "",
    phone: "",
  });
  const [methodeShippingSelect, setMethodeShippingSelect] = useState("1");
  const [methodePaymentSelect, setMethodePaymentSelect] = useState("1");

  const handleChangeMethodShipping = (e) => {
    setMethodeShippingSelect(e.target.value);
  };

  const handleChangeMethodPayment = (e) => {
    setMethodePaymentSelect(e.target.value);
  };

  const {
    state: { totalPrice },
  } = useCartContext();

  const shippingPrice = 1;

  return (
    <Container className="mt-5">
      <Row className="pb-3">
        <h1>
          <strong>ชำระเงิน</strong>
        </h1>
      </Row>
      <Row>
        <Col lg={8}>
          <AddressForm
            addressFrom={addressFrom}
            setAddressFrom={setAddressFrom}
            errorAddressFrom={errorAddressFrom}
            setErrorAddressFrom={setErrorAddressFrom}
          />
          <Shipping handleChangeMethod={handleChangeMethodShipping} methodeSelect={methodeShippingSelect} />
          <Payment handleChangeMethod={handleChangeMethodPayment} methodeSelect={methodePaymentSelect} />
        </Col>
        <Col lg={4}>
          <OrderSummaryCard
            totalPrice={totalPrice}
            shippingPrice={shippingPrice}
            buttonName="ชำระเงิน"
            buttonIcon={<i className="bi bi-lock-fill"></i>}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default OrderSummary;

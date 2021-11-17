import React from "react";
import { Col, Dropdown, Row } from "react-bootstrap";

function CartTableHeader() {
  return (
    <Row>
      <Col lg={6}>
        <p className="m-0">
          <strong>สินค้า</strong>
        </p>
      </Col>
      <Col lg={2}>
        <p className="m-0">
          <strong>ราคา</strong>
        </p>
      </Col>
      <Col lg={2}>
        <p className="m-0">
          <strong>จำนวน</strong>
        </p>
      </Col>
      <Col lg={2}>
        <p className="m-0">
          <strong>ยอดรวม</strong>
        </p>
      </Col>
      <Dropdown.Divider />
    </Row>
  );
}

export default CartTableHeader;

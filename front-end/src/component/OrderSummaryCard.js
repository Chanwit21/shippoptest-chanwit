import React from "react";
import { Link } from "react-router-dom";
import { Card, Dropdown, Button } from "react-bootstrap";
import { thbFormat } from "../services";

function OrderSummaryCard({ totalPrice, shippingPrice, buttonName, buttonIcon }) {
  return (
    <Card className="px-3 py-2 border-0 ms-4" style={{ backgroundColor: "#0dcaf033" }}>
      <Card.Body>
        <Card.Title className="mb-3">
          <h4>
            <strong>สรุปคำสั่งซื้อ</strong>
          </h4>
        </Card.Title>
        <Card.Text>
          <div className="d-flex justify-content-between">
            <p>
              <strong>ยอดรวม</strong>
            </p>
            <p>
              <strong>{thbFormat(totalPrice)}</strong>
            </p>
          </div>
        </Card.Text>
        <Card.Text>
          <div className="d-flex justify-content-between">
            <p>
              <strong>ค่าส่ง</strong>
            </p>
            <p>
              <strong>{thbFormat(shippingPrice)}</strong>
            </p>
          </div>
        </Card.Text>
        <Dropdown.Divider />
        <Card.Text className="mt-4">
          <div className="d-flex justify-content-between">
            <p>
              <strong>ยอดสุทธิ</strong>
            </p>
            <h5>
              <strong>{thbFormat(totalPrice + shippingPrice)}</strong>
            </h5>
          </div>
        </Card.Text>
        <Button style={{ width: "100%" }} className="rounded-pill p-2">
          <h4 className="m-0">
            {buttonIcon ? buttonIcon : null}
            <strong>
              <Link to="/order-summary" style={{ color: "inherit", textDecoration: "none" }}>
                {buttonName}
              </Link>
            </strong>
          </h4>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default OrderSummaryCard;

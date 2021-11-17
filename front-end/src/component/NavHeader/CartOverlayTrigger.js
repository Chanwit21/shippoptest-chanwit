import React, { useState } from "react";
import { OverlayTrigger, Popover, Button, Dropdown, Badge } from "react-bootstrap";
import CartListHeader from "./CartListHeader";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context";
import { thbFormat } from "../../services";

function CartOverlayTrigger() {
  const [showOverlay, setShowOverlay] = useState(false);
  const {
    state: { products, countCart, totalPrice },
    dispatch,
  } = useCartContext();

  const handleToggleOverlay = () => {
    setShowOverlay((cur) => !cur);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
  };

  const deleteProductInCart = (id) => {
    dispatch({ type: "DELETE_CART", payload: { productId: id } });
  };

  return (
    <OverlayTrigger
      trigger="click"
      show={showOverlay}
      onToggle={handleToggleOverlay}
      placement="bottom"
      overlay={
        <Popover id={`popover-positioned-bottom`}>
          <Popover.Body className="text-center">
            <h5>
              <strong>ตระกร้าสินค้าของฉัน</strong>
            </h5>
            <p>{`${countCart} สินค้าในตระกร้า`}</p>
            <Button
              as={Link}
              to="/carts"
              variant="outline-primary"
              className="rounded-pill"
              style={{ width: "90%" }}
              onClick={handleCloseOverlay}
            >
              ดูหรือแก้ไขตระกร้าของฉัน
            </Button>
          </Popover.Body>
          <Dropdown.Divider className="p-0 m-0" />
          <Popover.Body className="p-0">
            {products.map((product) => {
              return <CartListHeader key={product.id} product={product} deleteProductInCart={deleteProductInCart} />;
            })}
          </Popover.Body>
          <Popover.Body className="text-center">
            <div className="d-flex justify-content-center align-items-end">
              <span>ยอดรวม&nbsp;:&nbsp;</span>
              <h5 className="p-0 m-0">{thbFormat(totalPrice)}</h5>
            </div>
            <Button
              variant="primary"
              className="rounded-pill my-3"
              style={{ width: "90%" }}
              as={Link}
              to="/order-summary"
              onClick={handleCloseOverlay}
            >
              ไปชำระเงิน
            </Button>
          </Popover.Body>
        </Popover>
      }
    >
      <Button variant="light">
        <i className="bi bi-cart2"></i>
        <Badge pill bg="primary" style={{ position: "relative", top: "-30%", right: "10%" }}>
          {countCart}
        </Badge>
      </Button>
    </OverlayTrigger>
  );
}

export default CartOverlayTrigger;

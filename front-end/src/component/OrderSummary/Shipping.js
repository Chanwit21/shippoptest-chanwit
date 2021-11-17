import React from "react";
import { shippingMethode } from "../../mocks";
import ShippingList from "../OrderSummary/ShippingList";

function Shipping({ methodeSelect, handleChangeMethod }) {
  const shippingList = shippingMethode.map((methode) => {
    return (
      <ShippingList key={methode.id} methode={methode} onChange={handleChangeMethod} methodeSelect={methodeSelect} />
    );
  });
  return (
    <div className="row mt-4">
      <div className="col-12 border-bottom">
        <p style={{ fontSize: "0.9vw" }}>
          <strong>ที่อยู่ในการจัดส่ง</strong>
        </p>
      </div>
      {shippingList}
    </div>
  );
}

export default Shipping;

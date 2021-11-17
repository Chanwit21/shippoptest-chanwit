import React from "react";
import { paymentMethode } from "../../mocks";
import PaymentMethodeList from "./PaymentMethodeList";

function Payment({ handleChangeMethod, methodeSelect }) {
  const paymentList = paymentMethode.map((methode) => {
    return (
      <PaymentMethodeList
        key={methode.id}
        methode={methode}
        onChange={handleChangeMethod}
        methodeSelect={methodeSelect}
      />
    );
  });

  return (
    <div className="row mt-4">
      <div className="col-12 border-bottom">
        <p style={{ fontSize: "0.9vw" }}>
          <strong>ที่อยู่ในการจัดส่ง</strong>
        </p>
      </div>
      {paymentList}
    </div>
  );
}

export default Payment;

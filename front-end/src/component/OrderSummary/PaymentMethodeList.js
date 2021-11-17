import React from "react";

function PaymentMethodeList({ methode, methodeSelect, onChange }) {
  return (
    <div
      className={`col-12 mt-3 ps-4 d-flex align-items-center rounded border${
        methodeSelect === "" + methode.id ? " border-primary" : ""
      }`}
      style={{ width: "100%" }}
    >
      <input
        className="form-check-input"
        value={methode.id}
        type="radio"
        name="choose-payment"
        id={`methode-payment-${methode.id}`}
        onChange={(e) => onChange(e)}
        checked={methodeSelect === "" + methode.id}
      />
      <label className="form-check-label form-check flex-grow-1" htmlFor={`methode-payment-${methode.id}`}>
        <div className="row p-2 rounded m-0 align-items-center" style={{ fontSize: "1vw", height: "4vw" }}>
          <div className="col-12">
            <span>{methode.icon}</span>
            <span className="ms-3">{methode.name}</span>
          </div>
        </div>
      </label>
    </div>
  );
}

export default PaymentMethodeList;

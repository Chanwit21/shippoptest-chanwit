import React from "react";
import { thbFormat } from "../../services";

function ShippingList({ onChange, methodeSelect, methode }) {
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
        name="choose-shipping"
        id={`methode-shipping-${methode.id}`}
        onChange={(e) => onChange(e)}
        checked={methodeSelect === "" + methode.id}
      />
      <label className="form-check-label form-check flex-grow-1" htmlFor={`methode-shipping-${methode.id}`}>
        <div className="row p-2 rounded m-0 align-items-center" style={{ fontSize: "1vw", height: "4vw" }}>
          <div className="col-10">
            <span>{methode.name}</span>
          </div>
          <div className="col-2">{thbFormat(methode.price)}</div>
        </div>
      </label>
    </div>
  );
}

export default ShippingList;

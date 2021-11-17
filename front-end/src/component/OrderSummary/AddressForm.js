import React from "react";

function AddressForm({ addressFrom, setAddressFrom, errorAddressFrom, setErrorAddressFrom }) {
  const handleChangeInput = (field, e) => {
    setAddressFrom((cur) => {
      const clone = { ...cur };
      clone[field] = e.target.value;
      return clone;
    });
    setErrorAddressFrom((cur) => {
      const clone = { ...cur };
      clone[field] = "";
      return clone;
    });
  };

  return (
    <div className="row mt-4">
      <div className="col-12 border-bottom">
        <p style={{ fontSize: "0.9vw" }}>
          <strong>ที่อยู่ในการจัดส่ง</strong>
        </p>
      </div>
      <div className="col-6 mt-3">
        <label htmlFor="firstName" className="form-label">
          ชื่อ
        </label>
        <input
          id="firstName"
          type="text"
          className={`rounded-pill form-control border-dark${errorAddressFrom.firstName ? " is-invalid" : ""}`}
          value={addressFrom.firstName}
          onChange={(e) => handleChangeInput("firstName", e)}
        />
        {errorAddressFrom.firstName ? <div className="invalid-feedback">{errorAddressFrom.firstName}</div> : null}
      </div>
      <div className="col-6 mt-3">
        <label htmlFor="lastName" className="form-label">
          นามสกุล
        </label>
        <input
          id="lastName"
          type="text"
          className={`rounded-pill form-control border-dark${errorAddressFrom.lastName ? " is-invalid" : ""}`}
          value={addressFrom.lastName}
          onChange={(e) => handleChangeInput("lastName", e)}
        />
        {errorAddressFrom.lastName ? <div className="invalid-feedback">{errorAddressFrom.lastName}</div> : null}
      </div>
      <div className="col-12">
        <label htmlFor="country" className="form-label">
          ประเทศ
        </label>
        <select
          id="country"
          className={`rounded-pill form-select border-dark`}
          value={addressFrom.country}
          onChange={(e) => handleChangeInput("country", e)}
        >
          <option value="thailand">Thailand</option>
          <option value="england">England</option>
        </select>
      </div>
      <div className="col-12">
        <label htmlFor="address" className="form-label">
          ที่อยู่ <span style={{ opacity: "50%" }}>(บ้านเลขที/หมู่บ้าน/หมู่ที่/ซอย/ถนน)</span>
        </label>
        <input
          id="address"
          type="text"
          className={`rounded-pill form-control border-dark${errorAddressFrom.address ? " is-invalid" : ""}`}
          value={addressFrom.address}
          onChange={(e) => handleChangeInput("address", e)}
        />
        {errorAddressFrom.address ? <div className="invalid-feedback">{errorAddressFrom.address}</div> : null}
      </div>
      <div className="col-6">
        <label htmlFor="subDistrict" className="form-label">
          แขวง/ตำบล
        </label>
        <input
          id="subDistrict"
          type="text"
          className={`rounded-pill form-control border-dark${errorAddressFrom.subDistrict ? " is-invalid" : ""}`}
          value={addressFrom.subDistrict}
          onChange={(e) => handleChangeInput("subDistrict", e)}
        />
        {errorAddressFrom.subDistrict ? <div className="invalid-feedback">{errorAddressFrom.subDistrict}</div> : null}
      </div>
      <div className="col-6">
        <label htmlFor="district" className="form-label">
          เขต/อำเภอ
        </label>
        <input
          id="district"
          type="text"
          className={`rounded-pill form-control border-dark${errorAddressFrom.district ? " is-invalid" : ""}`}
          value={addressFrom.district}
          onChange={(e) => handleChangeInput("district", e)}
        />
        {errorAddressFrom.district ? <div className="invalid-feedback">{errorAddressFrom.district}</div> : null}
      </div>
      <div className="col-6">
        <label htmlFor="province" className="form-label">
          จังหวัด
        </label>
        <input
          id="province"
          type="text"
          className={`rounded-pill form-control border-dark${errorAddressFrom.province ? " is-invalid" : ""}`}
          value={addressFrom.province}
          onChange={(e) => handleChangeInput("address1", e)}
        />
        {errorAddressFrom.province ? <div className="invalid-feedback">{errorAddressFrom.province}</div> : null}
      </div>
      <div className="col-6">
        <label htmlFor="postalcode" className="form-label">
          รหัสไปรษณีย์
        </label>
        <input
          id="postalcode"
          type="text"
          className={`rounded-pill form-control border-dark${errorAddressFrom.postalcode ? " is-invalid" : ""}`}
          value={addressFrom.postalcode}
          onChange={(e) => handleChangeInput("postalcode", e)}
        />
        {errorAddressFrom.postalcode ? <div className="invalid-feedback">{errorAddressFrom.postalcode}</div> : null}
      </div>
      <div className="mb-3 col-12">
        <label htmlFor="phone" className="form-label">
          เบอร์ติดต่อ <span style={{ opacity: "50%" }}>(กรุณาระบุหมายเลขโทรศัพท์ เฉพาะตัวเลขเท่านั้น)</span>
        </label>
        <input
          id="phone"
          type="text"
          className={`rounded-pill form-control border-dark${errorAddressFrom.phone ? " is-invalid" : ""}`}
          value={addressFrom.phone}
          onChange={(e) => handleChangeInput("phoneNumber", e)}
        />
        {errorAddressFrom.phone ? <div className="invalid-feedback">{errorAddressFrom.phone}</div> : null}
      </div>
    </div>
  );
}

export default AddressForm;

import React from "react";
import { Routes, Route } from "react-router-dom";
import NavHeader from "../component/NavHeader";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import OrderSummary from "../pages/OrderSummary";
import ProductDetail from "../pages/ProductDetail";

function AppContainer() {
  return (
    <>
      <NavHeader />
      <div className="overflow-auto">
        <div style={{ height: "65px", width: "100%" }}></div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/carts" element={<Cart />} />
          <Route exact path="/order-summary" element={<OrderSummary />} />
          <Route exact path="/product-detail/:productId" element={<ProductDetail />} />
        </Routes>
      </div>
    </>
  );
}

export default AppContainer;

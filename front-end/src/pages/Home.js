import React from "react";
import { Container } from "react-bootstrap";
import CarouselBook from "../component/CarouselImage";
import ProductSlider from "../component/ProductSlider";
import { adviseBooks, bestSallers } from "../mocks";

function Home() {
  return (
    <Container>
      <CarouselBook />
      <ProductSlider header="สินค้าขายดี" books={bestSallers} />
      <ProductSlider header="สินค้าแนะนำ" books={adviseBooks} />
    </Container>
  );
}

export default Home;

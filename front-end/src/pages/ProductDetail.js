import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Image, Row, Button, Dropdown } from "react-bootstrap";
import { bestSallers } from "../mocks";
import { thbFormat } from "../services";
import { useCartContext } from "../context";
import ProductSlider from "../component/ProductSlider";

function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const { productId } = useParams();
  const book = bestSallers.find((item) => item.id === +productId);
  const [imageChoose, setImageChoose] = useState(book?.imageUrl);

  const { dispatch } = useCartContext();

  const handleClickIncrease = () => {
    setQuantity((cur) => {
      return cur + 1;
    });
  };

  const handleClickDecrease = () => {
    if (quantity > 1) {
      setQuantity((cur) => {
        return cur - 1;
      });
    }
  };

  const handleClickImage = (imageUrl) => {
    setImageChoose(imageUrl);
  };

  const handleClickAddToCart = () => {
    dispatch({ type: "ADD_CART", payload: { product: { ...book, quantity: quantity } } });
    setQuantity(1);
  };

  return (
    <>
      <Container className="" style={{ marginTop: "5vh" }}>
        <Row className="my-3">
          <Col lg={5}>
            <Image src={imageChoose} style={{ width: "100%", height: "70vh", objectFit: "cover" }} />
          </Col>
          <Col lg={1}></Col>
          <Col lg={6}>
            <h1 className="mt-5">
              <strong>{book?.name}</strong>
            </h1>
            <div className="mt-5" style={{ fontSize: "1vw" }}>
              <p>ผู้เขียน : {book?.writer}</p>
              <p>สำนักพิมพ์ : {book?.publisher}</p>
              <p>หมวดหมู่ : {book?.category}</p>
              <p>ประเภทของสินค้า : {book?.productType}</p>
              <p>บาร์โค้ด : {book?.barcode}</p>
            </div>
            <div className="d-flex align-items-center my-5">
              <p className="fs-2">ราคา</p>
              <h1 className="mx-4">
                <strong>{thbFormat(book.price * (1 - book.discount))}</strong>
              </h1>
              <h3 className="text-decoration-line-through" style={{ opacity: "50%" }}>
                <strong>{thbFormat(book.price)}</strong>
              </h3>
            </div>
            <Row className="my-5">
              <Col lg={3}>
                <div className="d-flex" style={{ height: "4.5vh" }}>
                  <div
                    style={{ width: "40%", heigth: "30%" }}
                    className="d-flex justify-content-center align-items-center bg-secondary bg-opacity-25 rounded-start"
                  >
                    <strong>{quantity}</strong>
                  </div>
                  <div className="d-flex flex-column" style={{ height: "4.5vh" }}>
                    <Button
                      variant="light"
                      className="bg-secondary bg-opacity-25 border-0 py-0"
                      style={{ borderRadius: "0 0.25rem 0 0", height: "50%" }}
                      onClick={handleClickIncrease}
                    >
                      <strong>
                        <i className="bi bi-chevron-up" style={{ fontSize: "15px" }}></i>
                      </strong>
                    </Button>
                    <Button
                      variant="light"
                      className="bg-secondary bg-opacity-25 border-0 py-0"
                      style={{ borderRadius: "0 0 0.25rem 0", height: "50%" }}
                      onClick={handleClickDecrease}
                    >
                      <strong>
                        <i className="bi bi-chevron-down" style={{ fontSize: "15px" }}></i>
                      </strong>
                    </Button>
                  </div>
                </div>
              </Col>
              <Col>
                <Button
                  variant="primary"
                  className="rounded-pill"
                  style={{ width: "100%", height: "100%" }}
                  onClick={handleClickAddToCart}
                >
                  <h5 className="p-0 m-0">Add</h5>
                </Button>
              </Col>
              <Col>
                <Button
                  variant="warning"
                  className="rounded-pill"
                  style={{ width: "100%", height: "100%", color: "#FFF" }}
                >
                  <h5 className="p-0 m-0">
                    <i className="bi bi-heart-fill me-3"></i>Wishlist
                  </h5>
                </Button>
              </Col>
            </Row>
            <div className="d-flex">
              <div>
                <h3>แชร์ : </h3>
              </div>
              <div className="d-flex ms-3">
                <div
                  className="d-flex justify-content-center align-items-center rounded-circle mx-1"
                  style={{ backgroundColor: "#00FF00", color: "#fff", width: "1.5vw", height: "1.5vw" }}
                >
                  <i className="bi bi-envelope-fill"></i>
                </div>
                <div
                  className="d-flex justify-content-center align-items-center rounded-circle mx-1"
                  style={{ backgroundColor: "#6A5ACD", color: "#fff", width: "1.5vw", height: "1.5vw" }}
                >
                  <i className="bi bi-twitter"></i>
                </div>
                <div
                  className="d-flex justify-content-center align-items-center rounded-circle mx-1"
                  style={{ backgroundColor: "#00BFFF", color: "#fff", width: "1.5vw", height: "1.5vw" }}
                >
                  <i className="bi bi-facebook"></i>
                </div>
                <div
                  className="d-flex justify-content-center align-items-center rounded-circle mx-1"
                  style={{ backgroundColor: "	#B22222", color: "#fff", width: "1.5vw", height: "1.5vw" }}
                >
                  <i className="bi bi-google"></i>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={2} onClick={(e) => handleClickImage(book?.imageUrl)}>
            <Image
              src={book?.imageUrl}
              style={{
                width: "100%",
                height: "20vh",
                objectFit: "cover",
                opacity: imageChoose === book?.imageUrl ? "" : "50%",
              }}
            />
          </Col>
          <Col lg={2} onClick={(e) => handleClickImage(book?.imageUrl1)}>
            <Image
              src={book?.imageUrl1}
              style={{
                width: "100%",
                height: "20vh",
                objectFit: "cover",
                opacity: imageChoose === book?.imageUrl1 ? "" : "50%",
              }}
            />
          </Col>
        </Row>
        <Row className="mb-3" style={{ marginTop: "5vh" }}>
          <div className="d-flex" style={{ fontSize: "0.8vw" }}>
            <p className="px-2" style={{ borderBottom: "3px solid blue" }}>
              <strong>เกี่ยวกับสินค้า</strong>
            </p>
            <p className="px-2 ms-3" style={{ opacity: "50%" }}>
              <strong>รายละเอียด</strong>
            </p>
          </div>
        </Row>
      </Container>
      <Dropdown.Divider />
      <Container className="mt-5">
        <Row>
          <div className="d-flex" style={{ fontSize: "0.9vw" }}>
            <p>
              <strong>รายละเอียด : &nbsp;</strong>
            </p>
            <p>{book?.name}</p>
          </div>
        </Row>
        <Row style={{ whiteSpace: "pre-wrap", fontSize: "0.9vw", opacity: "70%", marginBottom: "10vh" }}>
          {book?.detail}
        </Row>
        <Row>
          <ProductSlider header="สินค้าที่เกี่ยวข้อง" books={bestSallers} />
        </Row>
      </Container>
    </>
  );
}

export default ProductDetail;

import React, { useState } from "react";
import { FormControl, Navbar, Container, Nav, Button, InputGroup } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import CartOverlayTrigger from "./NavHeader/CartOverlayTrigger";

function NavHeader() {
  const [onSearch, setOnSearch] = useState(false);

  const handleClickToggleSearch = () => {
    setOnSearch((cur) => !cur);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      className="shadow"
      fixed="top"
      style={{ height: "65px" }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <h3>
            <strong>BOOK</strong>
          </h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" bg="light">
          {onSearch ? (
            <Nav className="flex-grow-1">
              <InputGroup style={{ width: "100%" }}>
                <FormControl
                  placeholder="ค้นหาสินค้า"
                  style={{ borderRadius: "50em 0 0 50em", backgroundColor: "#ADADAD66", border: "none" }}
                />
                <Button
                  variant="outline-primary"
                  id="button-addon2"
                  style={{
                    borderRadius: "0 50em 50em 0",
                    backgroundColor: "#ADADAD66",
                    marginLeft: "0",
                    border: "none",
                  }}
                >
                  <i className="bi bi-search"></i>
                </Button>
              </InputGroup>
            </Nav>
          ) : (
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="#">
                สินค้าใหม่
              </Nav.Link>
              <Nav.Link as={NavLink} to="#">
                สินค้าขายดี
              </Nav.Link>
              <Nav.Link as={NavLink} to="#">
                สินค้าลดราคา
              </Nav.Link>
              <Nav.Link as={NavLink} to="#">
                สินค้าแนะนำ
              </Nav.Link>
            </Nav>
          )}

          <Nav className="flex-grow-0">
            <Button variant="light" onClick={handleClickToggleSearch}>
              {onSearch ? <i className="bi bi-x-lg"></i> : <i className="bi bi-search"></i>}
            </Button>

            <CartOverlayTrigger />

            <Nav.Link as={Link} to="/">
              <i className="bi bi-person-circle"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavHeader;

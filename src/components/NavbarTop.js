import React, { useState } from "react";
import {
  Nav,
  Navbar,
  Container,
  Button,
  FormControl,
  NavDropdown,
  Form,
  Badge,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const handleAddToCart = () => {
  console.log();
  localStorage.setItem("Cart");
};

const NavbarTop = () => {
  const [cartCount, setCartCount] = useState();

  const myLocal = localStorage.getItem("Cart");

  return (
    <div className="navbar-top">
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <div className="brand-logo">
            <Link to="/">MyBrand</Link>
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown title="Collection" id="navbarScrollingDropdown">
                <div className="dropdown-container-main">
                  {/* <NavDropdown.Item> */}
                  <Link to="/men">Men</Link>
                  {/* </NavDropdown.Item> */}
                  {/* <NavDropdown.Item> */}
                  <Link to="/men">Women</Link>
                  {/* </NavDropdown.Item> */}
                </div>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Tech accessories
                </NavDropdown.Item>
              </NavDropdown>
              <div className="other-service">
                <Link to="/about">About</Link>
                <Link to="/track">Track</Link>
              </div>
            </Nav>
            {/* <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
            <Link to="/cart">
              <FaShoppingCart className="cart-icon" />
              <Badge bg="secondary">{cartCount}</Badge>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarTop;

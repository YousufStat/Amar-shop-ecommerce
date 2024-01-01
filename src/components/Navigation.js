import { useProductContext } from '../context/productContext';
import React from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import { FiShoppingCart } from "react-icons/fi";
import { NavLink } from 'react-router-dom';


export default function Navigation() {
const {isLoading,products}=useProductContext();

const getUniqueData = (data, attr) => {
  let newVal = data.map((curElem) => {
    return curElem[attr];
  });
  // unique data get
  // return (newVal = [...new Set(newVal)]);
  return (newVal = ['All',...new Set(newVal)]);
};
const categoryData = getUniqueData(products, "category");

  if(isLoading){
    return <div>....Loading</div>
  }
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">
            <h1 className="text-success">amarSHOP</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown
                className="NavItem"
                title="Category"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action1">
                <NavLink className="NavItem" to="/">Home</NavLink>
              </Nav.Link>
              <Nav.Link href="#action1">
              <NavLink className="NavItem" to="/products">Products</NavLink>
              </Nav.Link>
              <Nav.Link href="#action1">
              <NavLink className="NavItem" to="/service">Service</NavLink>
              </Nav.Link>
              <Nav.Link  href="#action2">
              <NavLink className="NavItem" to="/offers">Offer</NavLink>
              </Nav.Link>
              <Nav.Link href="#action1">
              <NavLink  className="NavItem" to="/about">About</NavLink>
              </Nav.Link>
              <Nav.Link href="#action2">
              <NavLink  className="NavItem" to="/contact">Contact</NavLink>
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search Product"
                className="me-2 NavItem"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          
            <Nav.Link className="navbar-link cart-trolley--link">
              <NavLink to="/cart">
            <FiShoppingCart className="cart-trolley" />
              <span className="cart-total--item"> 10 </span>
            </NavLink>
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            {categoryData.map((curElem) => {
            return  (<Navbar.Brand href="#home">{curElem}</Navbar.Brand>)
          })}
            {/* <Navbar.Brand href="#home">Cloth</Navbar.Brand>
            <Navbar.Brand href="#home">Cloth</Navbar.Brand>
            <Navbar.Brand href="#home">Cloth</Navbar.Brand> */}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

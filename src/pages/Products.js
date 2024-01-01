import React from "react";
import FilterSection from "../components/FilterSection";
import Sort from "../components/Sort";
import ProductList from "../components/ProductList";
import { Col, Container, Row } from "react-bootstrap";

const Products = () => {
  return (
    <>
      <div>
        <Sort />
      </div>
      <Container>
        <Row>
          <Col md={3} lg={3} sm={3}>
            <div>
              <FilterSection />
            </div>
          </Col>
          <Col md={9} lg={9} sm={9}>
            <div className="filterProductList">
              <ProductList/>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Products;

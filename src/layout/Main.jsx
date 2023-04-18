import React from "react";
import Header from "../pages/shared/Header";
import Footer from "../pages/shared/Footer";
import LeftNav from "../pages/shared/LeftNav/LeftNav";
import RightNav from "../pages/shared/RightNav/RightNav";
import { Col, Container, Row } from "react-bootstrap";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg={3}>
            <LeftNav></LeftNav>
          </Col>
          <Col lg={6}>Main content</Col>
          <Col lg={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;

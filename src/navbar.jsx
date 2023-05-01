import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import "./styles.css";

function App() {
  return (
    <div className="App">
      <Container>
        {/* Desktop View */}
        <Row className="d-none d-lg-flex">
          <Col lg="3">Sidebar</Col>
          <Col lg="9">Main Content</Col>
        </Row>

        {/* Tablet View */}
        <Row className="d-none d-md-flex d-lg-none">
          <Col md="4">Sidebar</Col>
          <Col md="8">Main Content</Col>
        </Row>

        {/* Mobile View */}
        <Row className="d-flex d-md-none">
          <Col>Sidebar</Col>
        </Row>
        <Row className="d-flex d-md-none">
          <Col>Main Content</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

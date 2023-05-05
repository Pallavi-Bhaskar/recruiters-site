import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Navigation from "../../navbar/navigation";
import { Link } from "react-router-dom";

const mobilelogin = () => {
  return (
    <div>
      <Navigation />
      <Container style={{ overflowX: "hidden", overflowY: "hidden" }}>
        <Row>
          <Col>
            <h4 className="text-center">
              <b>Login to your Account</b>
            </h4>
            <p className="mb-4 text-center">
              Welcome back, please enter your details.
            </p>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mt-5">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <div className="d-flex mt-5">
                <Form>
                  {["checkbox"].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check
                        inline
                        label="Remember Me"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                        style={{ fontSize: "12px" }}
                      />
                    </div>
                  ))}
                </Form>
                <div className="me-1">Forgot Password?</div>
              </div>
              <Button
                variant="primary"
                type="submit"
                style={{
                  marginLeft: "20px",
                }}
                className="vw-100 text-center"
              >
                Login
              </Button>
              <h6 className="text-center mt-2">
                Don't have an account? {""}
                <Link style={{ textDecoration: "none" }} to="/mobileregister">
                  Sign Up
                </Link>
              </h6>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default mobilelogin;

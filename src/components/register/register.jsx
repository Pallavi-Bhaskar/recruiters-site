import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./register.css";

const LoginRegister = () => {
  return (
    <Container style={{ overflow: "hidden" }}>
      <Row>
        {/* This creates a vertical line */}
        <Col md={8}>
          <h4 className="mb-5">Register today.</h4>
          <Form>
            <div className="d-flex mb-5">
              <Form.Group
                controlId="formBasicName"
                style={{ marginRight: "15px" }}
              >
                <Form.Label>Full Name:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  style={{ width: "350px" }}
                />
              </Form.Group>
              <Form.Group
                controlId="formBasicEmail"
                style={{ marginLeft: "15px" }}
              >
                <Form.Label>Email address:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  style={{ width: "350px" }}
                />
              </Form.Group>
            </div>
            <div className="d-flex mb-5">
              <Form.Group
                controlId="formBasicPassword"
                style={{ marginRight: "15px" }}
              >
                <Form.Label>Password:</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  style={{ width: "350px" }}
                />
              </Form.Group>

              <Form.Group
                controlId="formBasicPassword"
                style={{ marginLeft: "15px" }}
              >
                <Form.Label>Confirm Password:</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  style={{ width: "350px" }}
                />
              </Form.Group>
            </div>
            <Form className="d-flex mb-4">
              <Form.Text>Register as:</Form.Text>
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="Jobseeker"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                    className="ms-3"
                  />
                  <Form.Check
                    inline
                    label="Recruiter"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                  <Form.Check
                    inline
                    label="Employer"
                    name="group1"
                    type={type}
                    id={`inline-${type}-3`}
                  />
                </div>
              ))}
            </Form>
            <Button
              variant="primary"
              type="submit"
              style={{ marginTop: "10px", width: "200px" }}
            >
              Register
            </Button>
          </Form>
        </Col>
        <div className="vl"></div>
        <Col md={4}>
          <h4>Already Registered ?</h4>
          <h4 className="mb-5">Login to your Account</h4>
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
              <p>Forgot Password?</p>
              <Button
                variant="primary"
                type="submit"
                style={{
                  marginLeft: "20px",
                  paddingTop: "2px",
                  paddingBottom: "2px",
                }}
              >
                Login
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginRegister;

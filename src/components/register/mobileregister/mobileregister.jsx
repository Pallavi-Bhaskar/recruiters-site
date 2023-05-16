import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navigation from "../../navbar/navigation";

const mobileLogin = () => {
  return (
    <div>
      <Navigation />
      <Container style={{ overflowX: "hidden", overflowY: "hidden" }}>
        <Row>
          <Col>
            <h4 className="text-center">
              <b>Create an account</b>
            </h4>
            <h6 className="text-center">Please enter your details.</h6>
            <Form>
              <Form.Group controlId="formBasicName">
                <Form.Label className="mt-2">Full Name:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  className="mb-4"
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address:</Form.Label>
                <Form.Control
                  className="mb-4"
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                  className="mb-4"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Confirm Password:</Form.Label>
                <Form.Control
                  className="mb-4"
                  type="password"
                  placeholder="Confirm Password"
                />
              </Form.Group>
              <Form.Label>Register as:</Form.Label>
              <Form className="d-flex mb-3">
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
                className="text-center mb-4  "
                style={{ width: "100%", marginRight: "20px" }}
              >
                Sign Up
              </Button>

              <h6 className="text-center">
                Already have an account?{" "}
                <Link style={{ textDecoration: "none" }} to="/mobilelogin">
                  {" "}
                  Login
                </Link>
              </h6>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default mobileLogin;

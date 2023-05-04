// import React from "react";

// const dropdown = () => {
//   return (
// <div className="btn-group">
//   <a
//     className="nav-link me-5 ms-5 d-none d-sm-block m-auto"
//     style={{ margin: "auto 60px auto auto" }}
//   >
//     <button
//       type="button"
//       className="btn btn-outline-primary dropdown-toggle dropdown-toggle-no-caret "
//       aria-expanded="false"
//       data-toggle="dropdown"
//       aria-haspopup="true"
//     >
//       Login
//     </button>
//     <ul class="dropdown-menu">
//       <li>
//         <a class="dropdown-item" href="#">
//           Action
//         </a>
//       </li>
//       <li>
//         <a class="dropdown-item" href="#">
//           Another action
//         </a>
//       </li>
//       <li>
//         <a class="dropdown-item" href="#">
//           Something else here
//         </a>
//       </li>
//       <li>
//         <hr class="dropdown-divider" />
//       </li>
//       <li>
//         <a class="dropdown-item" href="#">
//           Separated link
//         </a>
//       </li>
//     </ul>
//   </a>
// </div>
// <div class="btn-group">
//   <button
//     type="button"
//     class="btn btn-danger dropdown-toggle"
//     data-bs-toggle="dropdown"
//     aria-expanded="false"
//   >
//     Action
//   </button>
//   <ul class="dropdown-menu">
//     <li>
//       <a class="dropdown-item" href="#">
//         Action
//       </a>
//     </li>
//     <li>
//       <a class="dropdown-item" href="#">
//         Another action
//       </a>
//     </li>
//     <li>
//       <a class="dropdown-item" href="#">
//         Something else here
//       </a>
//     </li>
//     <li>
//       <hr class="dropdown-divider" />
//     </li>
//     <li>
//       <a class="dropdown-item" href="#">
//         Separated link
//       </a>
//     </li>
//   </ul>
// </div>
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./logindrodown.css";

const LoginRegister = () => {
  return (
    <Container>
      <Row>
        {/* This creates a vertical line */}
        <Col md={8}>
          <h2>Register today.</h2>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Full Name:</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address:</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Confirm Password:</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              style={{ marginTop: "10px" }}
            >
              Register
            </Button>
          </Form>
        </Col>
        <div className="vl"></div>
        <Col md={4}>
          <h2>Already Registered ?</h2>
          <h2>Login to your Account</h2>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              style={{ marginTop: "10px" }}
            >
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginRegister;

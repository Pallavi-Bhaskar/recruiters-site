import React from "react";
import { Button, Form } from "react-bootstrap";
import "./logindropdown.css";
import { FaLock } from "react-icons/fa";
import passwordToggle from "./password";

const dropdown = () => {
  const [PasswordInputType, ToggleIcon] = passwordToggle();
  return (
    <div className="dropdown ">
      {/* <button
          className="btn btn-secondary  dropdown-toggle-no-caret"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        > */}
      <a className="nav-link  m-auto">
        <button
          type="button"
          className="dropdown-toggle-no-caret btn btn-outline-primary me-5 ms-5 d-none d-lg-block"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Login
        </button>

        {/* </button> */}
        <ul className="dropdown-menu">
          <Form>
            <Form.Group controlId="formBasicEmail" className="ms-3 me-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group
              controlId="formBasicPassword"
              className="mt-1 ms-3 me-3"
            >
              <Form.Label>Password:</Form.Label>
              <Form.Control type={PasswordInputType} placeholder="Password" />
              <span>{ToggleIcon}</span>
            </Form.Group>
            <div className="d-flex mt-3 ms-3 me-3">
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
              <p style={{ fontSize: "13px" }}>
                <b>Forgot Password?</b>
              </p>
              <Button
                variant="primary"
                type="submit"
                style={{
                  marginLeft: "20px",
                  //   paddingTop: "2px",
                  //   paddingBottom: "2px",
                }}
              >
                Login
              </Button>
            </div>
          </Form>
        </ul>
      </a>
    </div>
  );
};

export default dropdown;

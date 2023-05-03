import React from "react";
import Sidebar from "./sidebar";
import Button from "react-bootstrap/Button";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container-fluid">
        <a className="navbar-brand ms-5" href="#">
          <img
            src="infosec.png"
            alt="Logo"
            className="d-inline-block align-text-top"
            style={{ height: "60px", width: "150px" }}
          />
        </a>

        <div
          className="collapse navbar-collapse d-flex justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav --bs-secondary-color-rgb: 33, 37, 41;">
            <li className="nav-item me-5">
              <a className="nav-link">
                <button>Register</button>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link">
                <button>Login</button>
              </a>
            </li>

            <li className="nav-item mt-2 me-5">
              <Sidebar />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

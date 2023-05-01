import React from "react";

import "./navbar.css";

const navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-fixed-top  navbar-light bg-light   ">
      <div className="container-fluid">
        <a className="navbar-brand ms-5" href="#">
          <img
            src="infosec.png"
            alt="Logo"
            className="d-inline-block align-text-top"
            style={{ height: "60px", width: "150px" }}
          />
        </a>
        div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item mt-2">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item mt-2">
            <a className="nav-link" href="#">
              Browse Jobs
            </a>
          </li>
          <li className="nav-item mt-2">
            <a className="nav-link" href="#">
              Browse Candidates
            </a>
          </li>
          <li class="nav-item mt-2">
            <a className="nav-link " href="#">
              For Jobseekers
            </a>
          </li>
          <li className="nav-item mt-2">
            <a className="nav-link" href="#">
              For Recruiters
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link">
              <button type="button" className="btn btn-outline-primary ">
                Login
              </button>
            </a>
          </li>

          <li className="nav-item me-5">
            <a className="nav-link">
              <button type="button" className="btn btn-primary ">
                Register
              </button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default navbar;

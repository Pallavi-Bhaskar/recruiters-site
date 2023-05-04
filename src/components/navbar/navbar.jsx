import React, { useState } from "react";

import "./styles.module.css";
import { Button } from "react-bootstrap";
import Sidebar from "./tabsidebar";
import Login from "../dropdown/logindropdown";
import "./navbar.css";

const navbar = () => {
  return (
    <div className="mypage">
      <nav className="navbar navbar-expand-lg navbar-fixed-top navbar-light bg-light d-flex">
        <div className="container-fluid  justify-content-between">
          <a className="navbar-brand ms-4" href="#">
            <img
              src="infosec.png"
              alt="Logo"
              className="d-inline-block align-text-top"
              style={{ height: "60px", width: "150px" }}
            />
          </a>

          <div className="collapse navbar-collapse j" id="navbarNav">
            <ul className="navbar-nav">
              <li className=" nav-item mt-2  ms-5 me-5">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item mt-2 me-5">
                <a className="nav-link" href="#">
                  Browse Jobs
                </a>
              </li>
              <li className="nav-item mt-2 me-5">
                <a className="nav-link" href="#">
                  Browse Candidates
                </a>
              </li>
              <li className="nav-item mt-2 me-5">
                <a className="nav-link " href="#">
                  For Jobseekers
                </a>
              </li>
              <li className="nav-item mt-2 me-5">
                <a className=" nav-link" href="#">
                  For Recruiters
                </a>
              </li>
            </ul>
          </div>
          <div className="d-flex ">
            <Login />
            <a className="nav-link d-none d-sm-block m-auto me-5">
              <button
                type="button"
                className="btn btn-primary"
                data-toggle="dropdown"
                aria-haspopup="true"
              >
                Register
              </button>
            </a>
          </div>
          <div className="d-lg-none">
            <Sidebar />
          </div>
          {/* <button
            className="navbar-toggler "
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          > */}

          {/* </button> */}
        </div>
      </nav>
    </div>
  );
};

export default navbar;

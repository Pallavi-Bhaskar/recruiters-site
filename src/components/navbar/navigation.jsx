import React from "react";

import Sidebar from "./tabsidebar";

import { Link } from "react-router-dom";
import "./navbar.css";
import Dropdown from "../dropdown/dropdown";

const Navigation = () => {
  return (
    <div className="mypage">
      <nav className="navbar navbar-expand-lg navbar-fixed-top navbar-light bg-light d-flex">
        <div className="container-fluid justify-content-between">
          <Link className="navbar-brand ms-4" to="/">
            <img
              src="infosec.png"
              alt="Logo"
              className="d-inline-block align-text-top"
              style={{ height: "60px", width: "150px" }}
            />
          </Link>

          <div className="collapse navbar-collapse j" id="navbarNav">
            <ul className="navbar-nav">
              <li className=" nav-item mt-2  ms-5 me-5">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item mt-2 me-5">
                <Link className="nav-link" to="/browsejobs">
                  Browse Jobs
                </Link>
              </li>
              <li className="nav-item mt-2 me-5">
                <Link className="nav-link" to="/browsecandidates">
                  Browse Candidates
                </Link>
              </li>
              <li className="nav-item mt-2 me-5">
                <Link className="nav-link " to="/forjobseekers">
                  For Jobseekers
                </Link>
              </li>
              <li className="nav-item mt-2 me-5">
                <Link className=" nav-link" to="/forrecruiters">
                  For Recruiters
                </Link>
              </li>
            </ul>
          </div>
          <div className="d-flex ">
            <Dropdown />
            <Link
              className="nav-link d-none d-lg-block m-auto me-5"
              to="/register"
            >
              <button
                type="button"
                className="btn btn-primary"
                data-toggle="dropdown"
                aria-haspopup="true"
              >
                Register
              </button>
            </Link>
          </div>
          <div className="d-lg-none">
            <Sidebar />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;

import React from "react";
import Sidebar from "./sidebar";

const mobile = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-fixed-top navbar-light bg-light">
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
          <ul className="navbar-nav">
            <form class="d-flex" role="search">
              <input
                class="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
            </form>
            <li className="nav-item mt-2 me-5">
              <Sidebar />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default mobile;

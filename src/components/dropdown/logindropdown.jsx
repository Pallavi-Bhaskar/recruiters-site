import React from "react";

const dropdown = () => {
  return (
    <div className="btn-group dropdown">
      <a className="nav-link me-5 ms-5 d-none d-lg-block m-auto">
        <button
          type="button"
          className="dropdown-toggle btn btn-outline-primary "
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Login
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item list" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item list" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </a>
    </div>
  );
};
export default dropdown;
//

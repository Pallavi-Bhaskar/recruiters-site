import React from "react";

const shortListedButtons = () => {
  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">
            Shortlisted
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link ms-1">Scheduled</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ms-1" href="#">
            Interviewed
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link ms-1" href="#">
            Wait Listed
          </a>
        </li>
      </ul>
    </div>
  );
};

export default shortListedButtons;

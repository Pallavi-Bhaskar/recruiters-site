import React from "react";

const viewApplication = () => {
  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">
            New
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link ms-1">Viewed</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ms-1" href="#">
            Processed
          </a>
        </li>
      </ul>
    </div>
  );
};

export default viewApplication;

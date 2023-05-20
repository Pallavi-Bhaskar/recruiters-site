import React from "react";

const hiredButtons = () => {
  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">
            All
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link ms-1">Under Discussion</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ms-1" href="#">
            Under Consideration
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link ms-1" href="#">
            Offered
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link ms-1" href="#">
            Joined
          </a>
        </li>
      </ul>
    </div>
  );
};

export default hiredButtons;

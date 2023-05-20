import React from "react";

const PostJobsButtons = () => {
  return (
    <div>
      <ul className="nav nav-tabs ">
        <li className="nav-item ">
          <a className="nav-link" href="#">
            Live
          </a>
        </li>
        <li className="nav-item ">
          <a className="nav-link ms-2 ">Under Review</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link ms-2 " href="#">
            Paused
          </a>
        </li>
      </ul>
    </div>
  );
};

export default PostJobsButtons;

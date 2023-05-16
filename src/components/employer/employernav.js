import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ImProfile } from "react-icons/im";
import { RiUserSearchFill } from "react-icons/ri";

const employernav = () => {
  return (
    <div>
      <div className="navbar navbar-expand-lg navbar-fixed-top navbar-light bg-light d-flex">
        <div className="container-fluid justify-content-between">
          <Link className="navbar-brand" to="/">
            <img
              src="infosec.png"
              alt="Logo"
              className="d-inline-block align-text-top"
              style={{ height: "60px", width: "150px", marginLeft: "80px" }}
            />
          </Link>
          <div className="d-flex">
            <div>
              <div className="d-flex justify-content-center">
                <RiUserSearchFill />
              </div>
              <div>Search Candidates</div>
            </div>
            <div>
              <div></div>
              <div className="ms-5 ">
                <div className="d-flex justify-content-center">
                  <ImProfile />
                </div>
                <div>Post New Job</div>
              </div>
            </div>
            <div>
              <div className="d-flex justify-content-center me-4">
                <FaUserCircle />
              </div>
              <div className="dropdown">
                <div
                  className="ms-5  dropdown-toggle "
                  style={{ marginRight: "80px" }}
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  My Profile
                </div>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      View Profile
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Edit Profile
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Security
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default employernav;

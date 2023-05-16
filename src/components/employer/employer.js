import React from "react";
import { FaUserCircle, FaUserEdit, FaFileSignature } from "react-icons/fa";
import { GrLogout } from "react-icons/gr";
import { ImProfile } from "react-icons/im";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { GiHandBag } from "react-icons/gi";
import "./employer.css";
import EmployerButtons from "./CompanyDetails/employerbuttons";

const employer = () => {
  return (
    <div>
      <div className="row mt-5 mb-5">
        <div className="col-sm-3">
          <div
            className="card shadow"
            style={{
              height: "100%",
              background: "#F2F2F2",
              border: "none",
              marginLeft: "90px",
            }}
          >
            {/* immediate parent container  */}
            <div className="card-body">
              <div className="d-flex justify-content-center">
                <FaUserCircle size={60} color="#133D7A" />
              </div>

              <h5 className="card-title text-center fw-semibold ">
                Dr. Arvind K
              </h5>
              <div className="mt-3">
                <p className="card-text me-3 d-flex">
                  <div>
                    <HiBuildingOffice2 />
                  </div>
                  <div className="ms-3 fw-bold">Company Details</div>
                </p>
                <p className="card-text me-3 fw-bold d-flex ">
                  <div>
                    <FaFileSignature />
                  </div>
                  <div className="ms-3">Add a Job</div>
                </p>
                <p className="card-text me-3 ">
                  <div className="fw-bold d-flex ">
                    <div>
                      <GiHandBag />
                    </div>
                    <div className="ms-3">Jobs</div>
                  </div>
                  <ul className="employer-ul" style={{ listStyleType: "none" }}>
                    <li className="mt-1">Posted Jobs</li>
                    <li className="mt-1">Drafts</li>
                    <li className="mt-1">Closed Jobs</li>
                  </ul>
                </p>
                <p className="card-text me-3  ">
                  <div className="d-flex">
                    <div>
                      <ImProfile />
                    </div>
                    <div className="ms-3 fw-bold"> Applications</div>
                  </div>
                  <ul className="employer-ul" style={{ listStyleType: "none" }}>
                    <li className="mt-1">View Applications</li>
                    <li className="mt-1">Shortlisted Candidates</li>
                    <li className="mt-1">Hired Candidates</li>
                    <li className="mt-1 ">Rejected Candidates</li>
                  </ul>
                </p>
                <p className="card-text me-3  d-flex">
                  <div>
                    <FaUserEdit />
                  </div>
                  <div className="ms-3 fw-bold">Update Profile</div>
                </p>
                <p className="card-text me-3  d-flex">
                  <div>
                    <GrLogout />
                  </div>
                  <div className="ms-3 fw-bold">Logout</div>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div
            className="middle"
            style={{
              height: "100%",

              color: "white",
              border: "none",
            }}
          >
            <EmployerButtons />
          </div>
        </div>
        <div className="col-sm-3">
          <div
            className="card shadow card2"
            style={{
              height: "100%",
              background: "#F2F2F2",
              color: "#008b8b",
              border: "none",
              marginRight: "90px",
            }}
          >
            <div className="card-body"></div>
          </div>
        </div>
      </div>
      <div className="row ">
        <div className="col-8 text-center">
          <a className="nav-link  py-5  ">
            <button
              type="button"
              className="btn btn-outline-primary buttonCancel "
            >
              Cancel
            </button>
          </a>
        </div>
        <div className="col-4 ">
          <a className="nav-link py-5 ">
            <button
              type="button"
              className="btn btn-primary px-4 buttonSave mt-2 "
            >
              Save
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default employer;

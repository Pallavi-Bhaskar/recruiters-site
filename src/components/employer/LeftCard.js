import React, { useState } from "react";
import { FaUserCircle, FaUserEdit, FaFileSignature } from "react-icons/fa";
import { GrLogout } from "react-icons/gr";
import { ImProfile } from "react-icons/im";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { GiHandBag } from "react-icons/gi";
import "./employer.css";
import CompanyDetailsButtons from "./CompanyDetails/companyButton";

import AddJobButtons from "./AddJob/addJobButtons";
import PostJobsButtons from "./Jobs/PostJobsButtons";
import ViewApplicationButtons from "./Applications/viewApplicationButtons";
import HiredButtons from "./Applications/hiredButtons";
import RejectButtons from "./Applications/rejectButton";
import ShortListedButtons from "./Applications/shortListedButtons";
import SettingsButtton from "./Settings/settingsButtton";

const Employer = ({ buttonIndex, buttonText, onButtonClick }) => {
  // const [pageDiv, setPage] = useState();
  // const [currentPage, setCurrentPage] = useState(null);

  // // const handleClick = (divId) => {
  // //   setPage(divId);
  // // };
  // const changeCurrentPage = (page) => {
  //   console.log("executed with page,", page);
  //   setCurrentPage(page);
  // };

  // let pageContent = null;

  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  // const [activePage, setActivePage] = useState("about");

  // const handlePageChange = (page) => {
  //   setActivePage(page);
  // };

  // if (pageDiv === 1) {
  //   pageContent = <CompanyDetailsButtons
  //    pageChange={changeCurrentPage}
  //    />;}
  // } else if (pageDiv === 2) {
  //   pageContent = <AddJobButtons />;
  // } else if (pageDiv === 3) {
  //   pageContent = <PostJobsButtons />;
  // } else if (pageDiv === 4) {
  //   pageContent = <ViewApplicationButtons />;
  // } else if (pageDiv === 5) {
  //   pageContent = <ShortListedButtons />;
  // } else if (pageDiv === 6) {
  //   pageContent = <HiredButtons />;
  // } else if (pageDiv === 7) {
  //   pageContent = <RejectButtons />;
  // } else if (pageDiv === 8) {
  //   pageContent = <SettingsButtton />;
  // }

  // const [activeButton, setActiveButton] = useState(null);
  // const [activeNavItem, setActiveNavItem] = useState(null);

  // const handleButtonClick = (buttonIndex) => {
  //   setActiveButton(buttonIndex);
  //   setActiveNavItem(null); // Reset active nav item when a different button is clicked
  // };

  // const handleNavItemClick = (navItemIndex) => {
  //   setActiveNavItem(navItemIndex);
  // };

  return (
    <div>
      <div className="row mt-5 mb-5">
        <div className="col-sm-3">
          <div
            className="card shadow"
            style={{
              // height: "100%",
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
                  <a
                    className="ms-3 fw-bold nav-link"
                    onClick={() => handleButtonClick("buttonA")}
                    href="#"
                  >
                    Company Details
                  </a>
                </p>
                <p className="card-text me-3  d-flex ">
                  <div>
                    <FaFileSignature />
                  </div>
                  <a
                    className="ms-3 fw-bold nav-link"
                    // onClick={() => handleClick(2)}
                    onClick={() => handleButtonClick("buttonB")}
                    href="#"
                  >
                    Add a Job
                  </a>
                </p>
                <p className="card-text me-3 ">
                  <div className="fw-bold d-flex ">
                    <div>
                      <GiHandBag />
                    </div>
                    <div className="ms-3">Jobs</div>
                  </div>
                  <ul className="employer-ul" style={{ listStyleType: "none" }}>
                    <li
                      className="mt-1"
                      //  onClick={() => handleClick(3)}
                      onClick={() => handleButtonClick("buttonC")}
                    >
                      <a className="nav-link" href="#">
                        Posted Jobs
                      </a>
                    </li>
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
                    <li
                      className="mt-1"
                      //  onClick={() => handleClick(4)}
                      onClick={() => handleButtonClick("buttonD")}
                    >
                      <a className="nav-link" href="#">
                        View Applications
                      </a>
                    </li>
                    <li
                      className="mt-1"
                      // onClick={() => handleClick(5)}
                      onClick={() => handleButtonClick("buttonE")}
                    >
                      <a className="nav-link" href="#">
                        Shortlisted Candidates
                      </a>
                    </li>
                    <li
                      className="mt-1"
                      // onClick={() => handleClick(6)}
                      onClick={() => handleButtonClick("buttonF")}
                    >
                      <a className="nav-link" href="#">
                        Hired Candidates
                      </a>
                    </li>
                    <li
                      className="mt-1 "
                      //  onClick={() => handleClick(7)}
                      onClick={() => handleButtonClick("buttonG")}
                    >
                      <a className="nav-link" href="#">
                        Rejected Candidates
                      </a>
                    </li>
                  </ul>
                </p>
                <p className="card-text me-3  d-flex">
                  <div>
                    <FaUserEdit />
                  </div>
                  <div
                    className="ms-3 fw-bold"
                    // onClick={() => handleClick(8)}
                    onClick={() => handleButtonClick("buttonH")}
                  >
                    <a className="nav-link" href="#">
                      Settings
                    </a>
                  </div>
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
            {/* {pageContent} */}
            {/* {currentPage === "about" ? <About /> : ""}
            {currentPage === "company-details" ? <Contact /> : ""} */}
            {/* {activeButton === "buttonA" && (
              <CompanyDetailsButtons
                activePage={activePage}
                onPageChange={handlePageChange}
              />
            )}*/}

            {activeButton === "buttonA" ? <CompanyDetailsButtons /> : ""}
            {activeButton === "buttonB" ? <AddJobButtons /> : ""}
            {activeButton === "buttonC" ? <PostJobsButtons /> : ""}
            {activeButton === "buttonD" && <ViewApplicationButtons />}
            {activeButton === "buttonE" && <ShortListedButtons />}
            {activeButton === "buttonF" && <HiredButtons />}
            {activeButton === "buttonG" && <RejectButtons />}
            {activeButton === "buttonH" && <SettingsButtton />}
          </div>
        </div>
        <div className="col-sm-3">
          <div
            className="card shadow card2"
            style={{
              height: "60%",
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
    </div>
  );
};

export default Employer;

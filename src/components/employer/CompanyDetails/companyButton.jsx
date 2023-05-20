import React, { useState } from "react";
import About from "./about";
import Contact from "./contact";
import Legalinformation from "./legalinformation";
import Office from "./office";

const Employerbuttons = () => {
  const [pageDiv, setPage] = useState(null);

  const handleClick = (navItem) => {
    setPage(navItem);
  };

  // const handleClick = (props) => {
  //   const { pageChange } = props;
  //   setPage(divId);
  // };
  // let pageContent = null;

  // if (pageDiv === ) {
  //   pageContent = <About />;
  // } else if (pageDiv === 2) {
  //   pageContent = <Contact />;
  // } else if (pageDiv === 3) {
  //   pageContent = <Legalinformation />;
  // } else if (pageDiv === 4) {
  //   pageContent = <Office />;
  // }

  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item  " onClick={() => handleClick("about")}>
          <a className="nav-link " aria-current="page" href="#">
            About
          </a>
        </li>
        <li className="nav-item" onClick={() => handleClick("contactDetails")}>
          {/* <div
            className={activePage === "contact" ? "active" : ""}
            onClick={() => onPageChange("contact")}
          > */}
          <a
            className="nav-link ms-2"
            href="#"
            // onClick={() => pageChange("contact-details")}
          >
            Contact Details
          </a>
          {/* </div> */}
        </li>
        <li
          className="nav-item"
          onClick={() => handleClick("legalInformation")}
        >
          <a className="nav-link ms-2" href="#">
            Legal Information
          </a>
        </li>
        <li className="nav-item" onClick={() => handleClick("office")}>
          <a className="nav-link ms-2" href="#">
            Offices
          </a>
        </li>
      </ul>
      <div>
        {pageDiv === "about" ? <About /> : ""}
        {pageDiv === "contactDetails" ? <Contact /> : ""}
        {pageDiv === "legalInformation" ? <Legalinformation /> : ""}
        {pageDiv === "office" ? <Office /> : ""}
      </div>
    </div>
  );
};

export default Employerbuttons;

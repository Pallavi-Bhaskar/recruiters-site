import React, { useState } from "react";
import CompanyDetails from "./companyDetails";
import ContactDetails from "./contactDetails";
import SecurityPrivacy from "./securityPrivacy";

const SettingsButtton = () => {
  const [pageDiv, setPage] = useState(null);

  const handleClick = (navItem) => {
    setPage(navItem);
  };
  return (
    <div>
      <ul className="nav nav-tabs " style={{ color: "black" }}>
        <li className="nav-item ">
          <a className="nav-link" href="#">
            Update Profile
          </a>
        </li>
        <li className="nav-item " onClick={() => handleClick("companyDetails")}>
          <a className="nav-link ms-2 " href="#">
            Company Details
          </a>
        </li>
        <li className="nav-item " onClick={() => handleClick("contactDetails")}>
          <a className="nav-link ms-2 " href="#">
            Contact Details
          </a>
        </li>
        <li
          className="nav-item "
          onClick={() => handleClick("securityPrivacy")}
        >
          <a className="nav-link ms-2 " href="#">
            Security and Privacy
          </a>
        </li>
      </ul>
      <div>
        {pageDiv === "companyDetails" ? <CompanyDetails /> : ""}
        {pageDiv === "contactDetails" ? <ContactDetails /> : ""}
        {pageDiv === "securityPrivacy" ? <SecurityPrivacy /> : ""}
      </div>
    </div>
  );
};

export default SettingsButtton;

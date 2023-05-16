import React, { useState } from "react";

const Employerbuttons = () => {
  const [pageContent, setPageContent] = useState("about");

  const handleAboutClick = () => {
    setPageContent("about");
  };

  const handleContactClick = () => {
    setPageContent("contact");
  };

  const handleLegalInformationClick = () => {
    setPageContent("legalinformation");
  };
  const handleOfficesClick = () => {
    setPageContent("offices");
  };

  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            className="nav-link "
            aria-current="page"
            href="#"
            onClick={handleAboutClick}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link ms-2" href="#" onClick={handleContactClick}>
            Contact Details
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link ms-2"
            href="#"
            onClick={handleLegalInformationClick}
          >
            Legal Information
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link ms-2" onClick={handleOfficesClick}>
            Offices
          </a>
        </li>
      </ul>
      <div>
        {pageContent === "about" && (
          <div>
            <h1>About Page</h1>
            <p>This is the about page content.</p>
          </div>
        )}
        {pageContent === "contact" && (
          <div>
            <h1>Contact Page</h1>
            <p>This is the contact page content.</p>
          </div>
        )}
        {pageContent === "legalinformation" && (
          <div>
            <h1>Social Media Page</h1>
            <p>This is the social media page content.</p>
          </div>
        )}
        {pageContent === "offices" && (
          <div>
            <h1>Social Media Page</h1>
            <p>This is the social media page content.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Employerbuttons;

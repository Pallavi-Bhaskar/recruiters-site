import React from "react";
import { FaUserCircle } from "react-icons/fa";

const CompanyDetails = () => {
  return (
    <div
      className="py-5"
      style={{ color: "black", backgroundColor: "rgba(230, 247, 255, 0.5)" }}
    >
      {/* <div className="ms-5 me-5">
        <div className="ms-5 me-5"> */}
      <div className="row">
        <div className="col-2 text-center ">
          <FaUserCircle size={60} color="#133D7A" />
        </div>
        <div className="col-sm-10">
          <div>
            <h3 className="">Company Name</h3>
            <div>Display Name</div>
            <h3 className="mt-5">Website</h3>
            <div>
              <a href="#" style={{ textDecoration: "none" }}>
                https://infosec-future.com/
              </a>
            </div>
            <h3 className="mt-5">Description</h3>
            <div>
              InfoSec Future - based in Delhi, India - is an emerging provider{" "}
              <br />
              of IT Security Training and Services to corporations and aspiring{" "}
              <br />
              IT Professionals. It is well equipped with internationally
              certified <br />
              instructors to impart the skills needed to secure one’s <br />
              information in an increasingly connected world.
              <br />
              InfoSec Future addresses the entire spectrum of information <br />
              security training with live and practical demo.
              <br />
              Welcome to the world of Hacking and Security.
            </div>
            <h3 className="mt-5">Registration Number</h3>
            <div>78945612587</div>
          </div>
        </div>
      </div>
    </div>
    // </div>
    // </div>
  );
};

export default CompanyDetails;

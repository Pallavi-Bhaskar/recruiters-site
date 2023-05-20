import React from "react";
import { FaUserCircle } from "react-icons/fa";

const CompanyDetails = () => {
  return (
    <div>
      <div className="ms-5 me-5">
        <div className="ms-5 me-5">
          <div className="row">
            <div className="col-4 text-center py-3">
              <FaUserCircle size={60} color="#133D7A" />
            </div>
            <div className="col-sm-8">
              <div>
                <h3 className="py-3">Company Name</h3>
                <h5>Display Name</h5>
                <h3 className="mt-5">Website</h3>
                <h5>
                  <a href="#" style={{ textDecoration: "none" }}>
                    https://infosec-future.com/
                  </a>
                </h5>
                <h3 className="mt-5">Description</h3>
                <h5>
                  InfoSec Future - based in Delhi, India - is an emerging
                  provider <br />
                  of IT Security Training and Services to corporations and
                  aspiring <br />
                  IT Professionals. It is well equipped with internationally
                  certified <br />
                  instructors to impart the skills needed to secure one’s <br />
                  information in an increasingly connected world.
                  <br />
                  InfoSec Future addresses the entire spectrum of information{" "}
                  <br />
                  security training with live and practical demo.
                  <br />
                  Welcome to the world of Hacking and Security.
                </h5>
                <h3 className="mt-5">Registration Number</h3>
                <h5>78945612587</h5>
                <h3 className="mt-5">Number of Employes</h3>
                <h5>200+</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;

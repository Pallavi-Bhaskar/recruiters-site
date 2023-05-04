// import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

import { useState } from "react";

import Offcanvas from "react-bootstrap/Offcanvas";
import { Button } from "react-bootstrap";

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div variant="primary" onClick={handleShow} className="sidebar me-5">
        {<AiOutlineMenu style={{ height: "30px", width: "24px" }} />}
      </div>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <a className="navbar-brand ms-5" href="#">
              <img
                src="infosec.png"
                alt="Logo"
                className=" align-item-center"
              />
            </a>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <div className="list-group list-group-flush">
          <a
            href="#"
            className="list-group-item list-group-item-action active"
            aria-current="true"
          >
            Home
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            Browse jobs
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            Browse Candidates
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            For Jobseekers
          </a>
          <a className="list-group-item list-group-item-action ">
            For Recruiters
          </a>
        </div>
        <div>
          <Offcanvas.Footer classname="d-flex ">
            <li className="list-group-item me-5 mt-5 col-md-6">
              <a href="#login" style={{ textDecoration: "none" }}>
                Register
              </a>
            </li>
          </Offcanvas.Footer>
        </div>
      </Offcanvas>
    </>
  );
}

function Sidebar() {
  return (
    <>
      {["end"].map((placement, id) => (
        <OffCanvasExample key={id} placement={placement} name={placement} />
      ))}
    </>
  );
}

export default Sidebar;

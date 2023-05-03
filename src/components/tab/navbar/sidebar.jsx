// import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

import { useState } from "react";

import Offcanvas from "react-bootstrap/Offcanvas";

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div variant="primary" onClick={handleShow} className="sidebar me-2">
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
                style={{ height: "60px", width: "150px" }}
              />
            </a>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <div class="list-group list-group-flush">
          <a
            href="#"
            class="list-group-item list-group-item-action active"
            aria-current="true"
          >
            Home
          </a>
          <a href="#" class="list-group-item list-group-item-action">
            Browse jobs
          </a>
          <a href="#" class="list-group-item list-group-item-action">
            Browse Candidates
          </a>
          <a href="#" class="list-group-item list-group-item-action">
            For Jobseekers
          </a>
          <a class="list-group-item list-group-item-action ">For Recruiters</a>
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

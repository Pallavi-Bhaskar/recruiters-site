// import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

// const sidebar = () => {
//   return (
//     <div>
//       <button
//         class="btn btn-primary"
//         type="button"
//         data-bs-toggle="offcanvas"
//         data-bs-target="#offcanvasRight"
//         aria-controls="offcanvasRight"
//       >
//         Toggle right offcanvas
//       </button>

//       <div
//         class="offcanvas offcanvas-end"
//         tabindex="-1"
//         id="offcanvasRight"
//         aria-labelledby="offcanvasRightLabel"
//       >
//         <div class="offcanvas-header">
//           <h5 class="offcanvas-title" id="offcanvasRightLabel">
//             Offcanvas right
//           </h5>
//           <button
//             type="button"
//             class="btn-close"
//             data-bs-dismiss="offcanvas"
//             aria-label="Close"
//           ></button>
//         </div>
//         <div class="offcanvas-body">...</div>
//       </div>
//     </div>
//   );
// };

// export default sidebar;
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div variant="primary" onClick={handleShow} className="me-2">
        {<AiOutlineMenu style={{ height: "30px", width: "24px" }} />}
      </div>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <div class="list-group">
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

function Example() {
  return (
    <>
      {["end"].map((placement, id) => (
        <OffCanvasExample key={id} placement={placement} name={placement} />
      ))}
    </>
  );
}

export default Example;

// import React from "react";
// import Example from "./sidebar";

// const navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-fixed-top bg-body-tertiary ms-5 me-5  ">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#">
//           <img
//             src="infosec.png"
//             alt="Logo"
//             className="d-inline-block align-text-top"
//           />
//         </a>

//         <div
//           className="collapse navbar-collapse d-flex justify-content-end"
//           id="navbarNav"
//         >
//           <ul className="navbar-nav">
//             <li className="nav-item ">
//               <a className="nav-link">
//                 <button type="button" className="btn btn-outline-primary ">
//                   Login
//                 </button>
//               </a>
//             </li>

//             <li className="nav-item">
//               <a className="nav-link">
//                 <button type="button" className="btn btn-primary ">
//                   Register
//                 </button>
//               </a>
//             </li>
//             <li className="nav-item mt-2">
//               <Example />
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default navbar;

import React from "react";
import Example from "./sidebar";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container-fluid">
        <a className="navbar-brand ms-5" href="#">
          <img
            src="infosec.png"
            alt="Logo"
            className="d-inline-block align-text-top"
            style={{ height: "60px", width: "150px" }}
          />
        </a>

        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}

        <div
          className="collapse navbar-collapse d-flex justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav --bs-secondary-color-rgb: 33, 37, 41;">
            <li className="nav-item">
              <a className="nav-link">
                <button type="button" className="btn btn-outline-primary">
                  Login
                </button>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link">
                <button type="button" className="btn btn-primary">
                  Register
                </button>
              </a>
            </li>

            <li className="nav-item mt-2 me-5">
              <Example />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

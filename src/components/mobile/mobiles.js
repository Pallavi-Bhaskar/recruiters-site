// import React, { useState } from "react";
// import { Navbar, Nav, NavDropdown } from "react-bootstrap";

// function Ap() {
//   const [expanded, setExpanded] = useState(false);

//   return (
//     <Navbar collapseOnSelect expand="lg sm" Collapse bg="light" variant="light">
//       <Navbar.Brand href="#home">My Website</Navbar.Brand>
//       <Navbar.Toggle
//         aria-controls="responsive-navbar-nav"
//         onClick={() => setExpanded(expanded ? false : "expanded")}
//       />
//       <Navbar.Collapse
//         id="responsive-navbar-nav"
//         className={expanded ? "show" : ""}
//       >
//         <Nav className="mr-auto">
//           <Nav.Link href="#features">Features</Nav.Link>
//           <Nav.Link href="#pricing">Pricing</Nav.Link>
//           <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
//             <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//             <NavDropdown.Item href="#action/3.2">
//               Another action
//             </NavDropdown.Item>
//             <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//             <NavDropdown.Divider />
//             <NavDropdown.Item href="#action/3.4">
//               Separated link
//             </NavDropdown.Item>
//           </NavDropdown>
//         </Nav>
//         <Nav>
//           <Nav.Link href="#login">Login</Nav.Link>
//           <Nav.Link href="#signup">Sign Up</Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }

// export default Ap;
// import { useState } from "react";
// import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

// function NavigationBar() {
//   const [expanded, setExpanded] = useState(false);

//   const handleToggle = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Navbar bg="dark" variant="dark" expand="md" expanded={expanded}>
//       <Navbar.Brand href="/">My Website</Navbar.Brand>
//       <Navbar.Toggle onClick={handleToggle} />
//       <Navbar.Collapse>
//         <Nav className="mr-auto">
//           <Nav.Link href="/">Home</Nav.Link>
//           <Nav.Link href="/about">About</Nav.Link>
//           <Nav.Link href="/contact">Contact</Nav.Link>
//         </Nav>
//         <Form inline className="ml-auto d-md-none">
//           <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//           <Button variant="outline-light">Search</Button>
//         </Form>
//         <Nav className="ml-auto d-none d-md-flex">
//           <Nav.Link href="/login">Login</Nav.Link>
//           <Nav.Link href="/register">Register</Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }

// export default NavigationBar;

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Navbar, Nav, NavDropdown } from "react-bootstrap";

// function NavigationBar() {
//   const [expanded, setExpanded] = useState(false);

//   const handleToggle = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Navbar bg="light" expand="md" expanded={expanded}>
//       <Navbar.Brand as={Link} to="/">
//         <img src="/logo.png" alt="Logo" height="30" />
//       </Navbar.Brand>
//       <Navbar.Toggle onClick={handleToggle} />
//       <Navbar.Collapse>
//         <Nav className="mr-auto">
//           <Nav.Link as={Link} to="/home">
//             Home
//           </Nav.Link>
//           <Nav.Link as={Link} to="/about">
//             About
//           </Nav.Link>
//           <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//             <NavDropdown.Item as={Link} to="/action1">
//               Action 1
//             </NavDropdown.Item>
//             <NavDropdown.Item as={Link} to="/action2">
//               Action 2
//             </NavDropdown.Item>
//             <NavDropdown.Divider />
//             <NavDropdown.Item as={Link} to="/action3">
//               Action 3
//             </NavDropdown.Item>
//           </NavDropdown>
//         </Nav>
//         <Nav>
//           <Nav.Link as={Link} to="/login">
//             Login
//           </Nav.Link>
//           <Nav.Link as={Link} to="/register">
//             Register
//           </Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }

// export default NavigationBar;

// import React from "react";

// const mobiles = () => {
//   return (
//     <div>
//       <div class="container-fluid">
//         <div class="row">
//           <div class="col-md-6">
//             <form>
//               <h2>Login</h2>
//               <div class="form-group">
//                 <label for="username">Username</label>
//                 <input
//                   type="text"
//                   class="form-control"
//                   id="username"
//                   name="username"
//                 />
//               </div>
//               <div class="form-group">
//                 <label for="password">Password</label>
//                 <input
//                   type="password"
//                   class="form-control"
//                   id="password"
//                   name="password"
//                 />
//               </div>
//               <button type="submit" class="btn btn-primary">
//                 Submit
//               </button>
//             </form>
//           </div>
//           <div class="col-md-6 border-left">
//             <form>
//               <h2>Register</h2>
//               <div class="form-group">
//                 <label for="name">Name</label>
//                 <input type="text" class="form-control" id="name" name="name" />
//               </div>
//               <div class="form-group">
//                 <label for="email">Email</label>
//                 <input
//                   type="email"
//                   class="form-control"
//                   id="email"
//                   name="email"
//                 />
//               </div>
//               <div class="form-group">
//                 <label for="password">Password</label>
//                 <input
//                   type="password"
//                   class="form-control"
//                   id="password"
//                   name="password"
//                 />
//               </div>
//               <button type="submit" class="btn btn-primary">
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default mobiles;

// import styles from "./styles.module.css";
// export default function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg bg-light fixed-top">
//       <div className="container">
//         <a className="navbar-brand" href="#">
//           <img src="/logo.png" width="43" height="48.8" loading="lazy" />
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="offcanvas"
//           data-bs-target="#offcanvasNavbar"
//           aria-controls="offcanvasNavbar"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div
//           className="offcanvas offcanvas-end"
//           tabindex="-1"
//           id="offcanvasNavbar"
//           aria-labelledby="offcanvasNavbarLabel"
//         >
//           <div className="offcanvas-header">
//             {/* <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
//               Offcanvas
//             </h5> */}
//             <button
//               type="button"
//               className="btn-close"
//               data-bs-dismiss="offcanvas"
//               aria-label="Close"
//             ></button>
//           </div>
//           <div className="offcanvas-body">
//             <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="#">
//                   Home
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">
//                   Browse Jobs
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">
//                   Browse Candidates
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">
//                   For Jobseekers
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">
//                   For Recruiters
//                 </a>
//               </li>
//             </ul>
//             {/* <div className={styles.insideLoginButtonContainer}> */}
//               <form
//                 className="d-flex justify-content-between gap-3"
//                 role="search"
//               >
//                 <button type="button" class="btn btn-outline-primary w-50">
//                   Login
//                 </button>
//                 <a class="btn btn-primary w-50" href="#" role="button">
//                   Register
//                 </a>
//               </form>
//             </div>
//             {/* <form className="d-lg-flex d-none gap-3" role="search">
//               <button type="button" class="btn btn-outline-primary">
//                 Login
//               </button>
//               <a class="btn btn-primary" href="#" role="button">
//                 Register
//               </a>
//             </form> */}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

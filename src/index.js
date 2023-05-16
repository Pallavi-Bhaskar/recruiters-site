import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
// import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
library.add(faUser, faEnvelope, faLock, faEye, faEyeSlash);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

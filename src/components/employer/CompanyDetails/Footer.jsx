import React from "react";

const Footer = () => {
  return (
    <div className="row ">
      <div className="col-8 text-center">
        <a className="nav-link  py-5  ">
          <button
            type="button"
            className="btn btn-outline-primary buttonCancel "
          >
            Cancel
          </button>
        </a>
      </div>
      <div className="col-4 ">
        <a className="nav-link py-5 ">
          <button
            type="button"
            className="btn btn-primary px-4 buttonSave mt-2 "
          >
            Save
          </button>
        </a>
      </div>
    </div>
  );
};

export default Footer;

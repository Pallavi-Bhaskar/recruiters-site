import React from "react";

const addDetails = () => {
  return (
    <div className="ms-5 me-5" style={{ color: "black" }}>
      <div className="ms-5 me-5 mt-5">
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Description:
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Responsibilities:
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Qualifications:
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div className="d-flex">
          <div>Minimum Requirements</div>
          <div className="text-muted">
            (Add required skills and experience in particular skills):
          </div>
        </div>
        <div className="row">
          <div className="mb-3 col-sm-5">
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Skills"
            />
          </div>
          <div className="mb-3 col-sm-5">
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Experience"
            />
          </div>
          <div className="mb-3 col-sm-2 mt-2"> + Add New</div>
        </div>
      </div>
    </div>
  );
};

export default addDetails;

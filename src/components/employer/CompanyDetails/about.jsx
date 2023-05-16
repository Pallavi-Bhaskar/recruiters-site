import React from "react";
import EmployersNav from "../employernav";

const about = () => {
  return (
    <div>
      <div className="ms-5 me-5">
        <div className="ms-5 me-5">
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Company Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Industry:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div className="d-flex row">
            <div className="mb-3 col-sm-6">
              <label for="exampleFormControlInput1" className="form-label">
                Company Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div className="mb-3 col-sm-6">
              <label for="exampleFormControlInput1" className="form-label">
                Company Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;

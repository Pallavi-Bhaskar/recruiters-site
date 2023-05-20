import React, { useState } from "react";

const PayoutDetails = () => {
  const [selectedItem, setSelectedItem] = useState("");

  const handleDropdownChange = (event) => {
    setSelectedItem(event.target.value);
  };
  return (
    <div className="ms-5 me-5" style={{ color: "black" }}>
      <div className="ms-5 me-5 mt-5">
        <div className="row">
          <div className="mb-3 col-sm-5">
            <label for="exampleFormControlInput1" className="form-label">
              No.of vacancies:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          <div className="mb-3 col-sm-5">
            <label for="exampleFormControlInput1" className="form-label">
              No. of Application required:
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>
        </div>
        <div className="row">
          <div className="mb-3 col-sm-10">
            <label for="exampleFormControlInput1" className="form-label">
              Annual CTC range:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Currency"
            />
          </div>
        </div>
        <div className="row">
          <div className="mb-3 col-sm-5">
            <label for="exampleFormControlInput1" className="form-label">
              Maximum Budget:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          <div className="mb-3 col-sm-5">
            <label for="exampleFormControlInput1" className="form-label">
              Minimum CTC:
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>
        </div>
        <div>
          <div>Fullfillment Payout:</div>
          <div className="form-check form-check-inline ">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
            />
            <label className="form-check-label" for="inlineRadio2">
              Percentage
            </label>
          </div>
          <div className="form-check form-check-inline ms-4">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio3"
              value="option3"
            />
            <label className="form-check-label " for="inlineRadio3">
              Fixed Payout
            </label>
          </div>
        </div>
        <div className="mb-3 col-sm-10">
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="% of Annual CTC"
          />
        </div>
      </div>
    </div>
  );
};

export default PayoutDetails;

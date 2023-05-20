import React, { useState } from "react";

const Legalinformation = () => {
  const [selectedItem, setSelectedItem] = useState("");

  const handleDropdownChange = (event) => {
    setSelectedItem(event.target.value);
  };
  return (
    <div className="ms-5 me-5 " style={{ color: "black" }}>
      <div className="ms-5 me-5 mt-5">
        <div className="row ">
          <div className="mb-3 col-sm-6">
            <label for="exampleFormControlInput1" className="form-label">
              Company Type::
            </label>
            {/* <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
            /> */}
            <div className="row justify-content-center">
              <div className="input-group  ">
                <input
                  type="text"
                  className="form-control"
                  // placeholder="Select an item"
                  // aria-label="Select an item"
                  value={selectedItem}
                  onChange={(event) => setSelectedItem(event.target.value)}
                />
                <button
                  className="btn btn-outline-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                ></button>
                <ul className="dropdown-menu  dropdown-menu-start">
                  <li>
                    <button
                      className="dropdown-item"
                      value="Sole Proprietorship"
                      onClick={handleDropdownChange}
                    >
                      Sole Proprietorship
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      value="Private Limited"
                      onClick={handleDropdownChange}
                    >
                      Private Limited
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      value="Public Limited"
                      onClick={handleDropdownChange}
                    >
                      Public Limited
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      value="Partnership Firm"
                      onClick={handleDropdownChange}
                    >
                      Partnership Firm
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      value="Not-For-Profit Organization"
                      onClick={handleDropdownChange}
                    >
                      Not-For-Profit Organization
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      value="One-Person Company"
                      onClick={handleDropdownChange}
                    >
                      One-Person Company
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      value="Limited Liability Partnership"
                      onClick={handleDropdownChange}
                    >
                      Limited Liability Partnership
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mb-3 col-sm-6">
            <label for="exampleFormControlInput1" className="form-label">
              Registration Number:
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>
        </div>
        <div className="row ">
          <div className="mb-3 col-sm-6">
            <label for="exampleFormControlInput1" className="form-label">
              Year of Registration:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          <div className="mb-3 col-sm-6">
            <label for="exampleFormControlInput1" className="form-label">
              TIN/GSTIN Number:
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>
        </div>
        <div className="row ">
          <div className="mb-3 col-sm-6">
            <label for="exampleFormControlInput1" className="form-label">
              <div className="d-flex">
                <div>Last FY Turnover</div>
                <div className="text-muted">(Approx figures):</div>
              </div>
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>
        </div>
        <div className="fw-bold mt-3 mb-4">Registered Adress: </div>
        <div className="row ">
          <div className="mb-3 col-sm-6">
            <label for="exampleFormControlInput1" className="form-label">
              Address Line 1:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          <div className="mb-3 col-sm-6">
            <label for="exampleFormControlInput1" className="form-label">
              Address Line 2:
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>
        </div>
        <div className="row ">
          <div className="mb-3 col-sm-6">
            <label for="exampleFormControlInput1" className="form-label">
              City:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          <div className="mb-3 col-sm-6">
            <label for="exampleFormControlInput1" className="form-label">
              State:
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>
        </div>
        <div className="row ">
          <div className="mb-3 col-sm-6">
            <label for="exampleFormControlInput1" className="form-label">
              Pin Code:
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
  );
};

export default Legalinformation;

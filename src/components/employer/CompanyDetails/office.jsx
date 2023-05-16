import React, { useState } from "react";

const Office = () => {
  const [selectedItem, setSelectedItem] = useState("");

  const handleDropdownChange = (event) => {
    setSelectedItem(event.target.value);
  };
  return (
    <div className="ms-5 me-5">
      <div className="ms-5 me-5 mt-5">
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Job Type:
          </label>
          {/* <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
          /> */}
          <div className="row justify-content-center">
            <div className="input-group ">
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
              <ul className="dropdown-menu w-100 custom-dropdown-menu">
                <li>
                  <button
                    className="dropdown-item"
                    value="Registered Office"
                    onClick={handleDropdownChange}
                  >
                    Registered Office
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    value="Corporate Office"
                    onClick={handleDropdownChange}
                  >
                    Corporate Office
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    value="Branch Office"
                    onClick={handleDropdownChange}
                  >
                    Branch Office
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    value="Site Office"
                    onClick={handleDropdownChange}
                  >
                    Site Office
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    value="Client's location"
                    onClick={handleDropdownChange}
                  >
                    Client's location
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    value="Head Office"
                    onClick={handleDropdownChange}
                  >
                    Head Office
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
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
              Address Line 1:
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

export default Office;

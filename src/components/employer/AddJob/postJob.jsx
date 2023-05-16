import React, { useState } from "react";
// import "./office.css";

const Offices = () => {
  const [selectedItem, setSelectedItem] = useState("");

  const handleDropdownChange = (event) => {
    setSelectedItem(event.target.value);
  };
  return (
    <div className="ms-5 me-5">
      <div className="ms-5 me-5">
        <div className="ms-5 me-5">
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Job Title:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Workspace Type:
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
                      value="On-site"
                      onClick={handleDropdownChange}
                    >
                      On-site
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      value="Hybrid"
                      onClick={handleDropdownChange}
                    >
                      Hybrid
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      value="Remote"
                      onClick={handleDropdownChange}
                    >
                      Remote
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              City:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Country:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>
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
                      value="Full time"
                      onClick={handleDropdownChange}
                    >
                      Full time
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      value="Part time"
                      onClick={handleDropdownChange}
                    >
                      Part time
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      value="Contract"
                      onClick={handleDropdownChange}
                    >
                      Contract
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      value="Temporary"
                      onClick={handleDropdownChange}
                    >
                      Temporary
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      value="Volunteer"
                      onClick={handleDropdownChange}
                    >
                      Volunteer
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      value="Internship"
                      onClick={handleDropdownChange}
                    >
                      Internship
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      value="Other"
                      onClick={handleDropdownChange}
                    >
                      Other
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offices;

import React, { useState } from "react";

const ReviewSubmit = () => {
  const [selectedItem, setSelectedItem] = useState("");

  const handleDropdownChange = (event) => {
    setSelectedItem(event.target.value);
  };
  return (
    <div className="ms-5 me-5">
      <div className="ms-5 me-5">
        <div className="fw-bold">Applicant must answer each question.</div>
        <div className="d-flex">
          <div className="fw-bold">1.</div>
          <div className="mb-3 ">
            <label for="exampleFormControlInput1" className="form-label">
              Write question here:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>
        </div>
        <div className="row ">
          <div className="mb-3 col-sm-6">
            <label for="exampleFormControlInput1" className="form-label">
              Answer Type:
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
                      value="yes/No"
                      onClick={handleDropdownChange}
                    >
                      Yes/No
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      value="Numbers"
                      onClick={handleDropdownChange}
                    >
                      Numbers
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      value="One line"
                      onClick={handleDropdownChange}
                    >
                      One line
                    </button>
                  </li>
                </ul>
              </div>
              {/* </div> */}
            </div>
          </div>
          <div className="mb-3 col-sm-6 mt-5">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                Must have Qualifications
              </label>
            </div>
          </div>
        </div>
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

        <div className="d-flex">
          <div className="fw-bold">2.</div>
          <div className="mb-3 ">
            <label for="exampleFormControlInput1" className="form-label">
              Write question here:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>
        </div>
        <div className="row ">
          <div className="mb-3 col-sm-6 ">
            <label for="exampleFormControlInput1" className="form-label">
              Answer Type:
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
                      value="yes/No"
                      onClick={handleDropdownChange}
                    >
                      Yes/No
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      value="Numbers"
                      onClick={handleDropdownChange}
                    >
                      Numbers
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      value="One line"
                      onClick={handleDropdownChange}
                    >
                      One line
                    </button>
                  </li>
                </ul>
              </div>
              {/* </div> */}
            </div>
          </div>
          <div className="mb-3 col-sm-6 mt-5">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                Must have Qualifications
              </label>
            </div>
          </div>
        </div>
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
        <div className="d-flex">
          <div className="fw-bold">3.</div>
          <div className="mb-3 ">
            <label for="exampleFormControlInput1" className="form-label">
              Write question here:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>
        </div>
        <div className="row ">
          <div className="mb-3 col-sm-6">
            <label for="exampleFormControlInput1" className="form-label">
              Answer Type:
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
                      value="yes/No"
                      onClick={handleDropdownChange}
                    >
                      Yes/No
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      value="Numbers"
                      onClick={handleDropdownChange}
                    >
                      Numbers
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      value="One line"
                      onClick={handleDropdownChange}
                    >
                      One line
                    </button>
                  </li>
                </ul>
              </div>
              {/* </div> */}
            </div>
          </div>
          <div className="mb-3 col-sm-6 mt-5">
            <div class="form-check">
              <input
                class="form-check-input "
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label class="form-check-label " for="flexCheckChecked">
                Must have Qualifications
              </label>
            </div>
          </div>
        </div>
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
      </div>
    </div>
  );
};

export default ReviewSubmit;

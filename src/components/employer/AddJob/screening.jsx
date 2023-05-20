import React, { useState } from "react";

const Screening = () => {
  const [selectedItem1, setSelectedItem1] = useState("");

  const handleDropdownChange1 = (event) => {
    setSelectedItem1(event.target.value);
  };
  const [selectedItem2, setSelectedItem2] = useState("");

  const handleDropdownChange2 = (event) => {
    setSelectedItem2(event.target.value);
  };

  const [selectedItem3, setSelectedItem3] = useState("");

  const handleDropdownChange3 = (event) => {
    setSelectedItem3(event.target.value);
  };
  return (
    <div className="ms-5 me-5" style={{ color: "black" }}>
      <div className="ms-5 me-5 mt-5">
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
                  value={selectedItem1}
                  onChange={(event) => setSelectedItem1(event.target.value)}
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
                      onClick={handleDropdownChange1}
                    >
                      Yes/No
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      value="Numbers"
                      onClick={handleDropdownChange1}
                    >
                      Numbers
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      value="One line"
                      onClick={handleDropdownChange1}
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
                  value={selectedItem2}
                  onChange={(event) => setSelectedItem2(event.target.value)}
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
                      onClick={handleDropdownChange2}
                    >
                      Yes/No
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      value="Numbers"
                      onClick={handleDropdownChange2}
                    >
                      Numbers
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      value="One line"
                      onClick={handleDropdownChange2}
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
                  value={selectedItem3}
                  onChange={(event) => setSelectedItem3(event.target.value)}
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
                      onClick={handleDropdownChange3}
                    >
                      Yes/No
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      value="Numbers"
                      onClick={handleDropdownChange3}
                    >
                      Numbers
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      value="One line"
                      onClick={handleDropdownChange3}
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

export default Screening;

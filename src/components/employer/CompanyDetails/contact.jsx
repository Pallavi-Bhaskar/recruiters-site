import React, { useState } from "react";

const Contact = () => {
  const [selectedItem, setSelectedItem] = useState("");

  const handleDropdownChange = (event) => {
    setSelectedItem(event.target.value);
  };
  return (
    <div className="ms-5 me-5">
      <div className="ms-5 me-5 mt-5">
        <div className="row">
          <div className="mb-3 dropdown col-sm-3">
            <label for="exampleFormControlInput1" className="form-label">
              Title
            </label>

            {/* <input
              type="text"
              className="form-control dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              id="exampleFormControlInput1"
            />
            <ul class="dropdown-menu">
              <li>Mr.</li>
              <li>Mrs.</li>
              <li>Miss.</li>
              <li>Ms.</li>
            </ul> */}
            {/* <div className="container"> */}
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
                      value="Mr."
                      onClick={handleDropdownChange}
                    >
                      Mr.
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      value="Mrs."
                      onClick={handleDropdownChange}
                    >
                      Mrs.
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      value="Miss"
                      onClick={handleDropdownChange}
                    >
                      Miss
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      value="Ms."
                      onClick={handleDropdownChange}
                    >
                      Ms.
                    </button>
                  </li>
                </ul>
              </div>
              {/* </div> */}
            </div>
          </div>
          {/* </div> */}
          <div className="col-sm-9 mb-3 ">
            <label for="exampleFormControlInput1" className="form-label">
              Contact Person Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>
        </div>
        <div className="row">
          <div className="mb-3 col-sm-6">
            <label for="exampleFormControlInput1" className="form-label">
              Industry:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          <div className="mb-3 col-sm-6">
            <label for="exampleFormControlInput1" className="form-label">
              Email Adress:
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <label for="exampleFormControlInput1" className="form-label">
              Industry:
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

export default Contact;

import React, { useState } from "react";
import AddDetail from "./addDetails";
import PayoutDetails from "./payoutDetails";
import PostJob from "./postJob";
import ReviewSubmit from "./reviewSubmit";
import Screening from "./screening";

const AddJobButtons = () => {
  const [pageDiv, setPage] = useState(null);

  const handleClick = (navItem) => {
    setPage(navItem);
  };
  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item" onClick={() => handleClick("postJob")}>
          <a className="nav-link " aria-current="page" href="#">
            Post a Job
          </a>
        </li>
        <li className="nav-item" onClick={() => handleClick("addDetails")}>
          <a className="nav-link ms-0" href="#">
            Add Details
          </a>
        </li>
        <li className="nav-item" onClick={() => handleClick("screening")}>
          <a className="nav-link ms-0" href="#">
            Screening Questions
          </a>
        </li>
        <li className="nav-item" onClick={() => handleClick("payOut")}>
          <a className="nav-link ms-0" href="#">
            Payout Details
          </a>
        </li>
        <li className="nav-item" onClick={() => handleClick("reviewSubmit")}>
          <a className="nav-link ms-0" href="#">
            Review and Submit
          </a>
        </li>
      </ul>
      <div>
        {pageDiv === "postJob" ? <PostJob /> : ""}
        {pageDiv === "addDetails" ? <AddDetail /> : ""}
        {pageDiv === "screening" ? <Screening /> : ""}
        {pageDiv === "payOut" ? <PayoutDetails /> : ""}
        {pageDiv === "reviewSubmit" ? <ReviewSubmit /> : ""}
      </div>
    </div>
  );
};

export default AddJobButtons;

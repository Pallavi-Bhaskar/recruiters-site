import React from "react";

const screening = () => {
  return (
    <div className="ms-5 me-5">
      <div className="ms-5 me-5 mt-5">
        <div>
          <div className="fw-bold ms-4">Job Title</div>
          <ul className="" style={{ listStyleType: "none" }}>
            <li>Country, City</li>
            <li>Workplace (Hybrid, Remote, On-site)</li>
            <li>Job type (fulltime, part-time, etc..)</li>
          </ul>
        </div>
        <div>
          <div className="fw-bold ms-4">Details</div>
          <ul className="" style={{ listStyleType: "none" }}>
            <li>Description</li>
            <li>Qualifications</li>
            <li>Skills, Experience</li>
          </ul>
        </div>
        <div>
          <div className="fw-bold ms-4">Details</div>
          <ul className="" style={{ listStyleType: "none" }}>
            <li>1.Question </li>
            <li>Answer</li>
            <li>2. Question</li>
            <li>Answer</li>
            <li>3. Question</li>
            <li>Answer</li>
          </ul>
        </div>
        <div>
          <div className="fw-bold ms-4">Questions</div>
          <ul style={{ listStyleType: "none" }}>
            <li className="">No. of vacancies</li>
            <li>No. of Application required</li>
            <li>Annual CTC range</li>
            <li>Max budget-Min CTC</li>
            <li>Fulfilment Payout (Percentage, Fixed Payout)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default screening;

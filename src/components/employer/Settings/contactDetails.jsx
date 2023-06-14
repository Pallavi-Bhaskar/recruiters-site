const companyDetails = () => {
  return (
    <div
      style={{ backgroundColor: "rgba(230, 247, 255, 0.5)", color: "black" }}
    >
      {/* <div className="ms-5 me-5">
        <div className="ms-5 me-5"> */}
      <div className="row py-5 ms-2">
        <div className="mb-3 col-sm-6">
          <h5>Contact Person Name</h5>
        </div>
        <div className="mb-3 col-sm-6">Name</div>
      </div>
      <div className="row ms-2">
        <div className="mb-3 col-sm-6">
          <h5>Contact Number</h5>
        </div>
        <div className="mb-3 col-sm-6">1234567890</div>
      </div>
      <div className="row mt-5 ms-2">
        <div className="mb-3 col-sm-6">
          <h5>Email Address</h5>
        </div>
        <div className="mb-3 col-sm-6">yahoo@gmail.com</div>
      </div>
      <div className="row mt-5 ms-2">
        <div className="mb-3 col-sm-6">
          <h5>Designation</h5>
        </div>
        <div className="mb-3 col-sm-6">Developer</div>
      </div>
    </div>
    //   </div>
    // </div>
  );
};

export default companyDetails;

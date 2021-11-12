import React, { useState } from "react";
import swal from "sweetalert";
import "./ContractUs.css";

const ContractUs = () => {
  const [contract, setContract] = useState();
  let handleContractForm = (e) => {
    swal("Thank you!", "For getting in touch!", "success");
    setContract("");
    e.preventDefault();
  };
  return (
    <div>
      <div className="contractContainer">
        <center>
          <h3>
            <b style={{ color: "#f85032" }}>Contract Us</b>
          </h3>
          <p style={{ color: "white" }}>
            <h2>Always Connect With Us</h2>
          </p>{" "}
          <br />
          <form onSubmit={handleContractForm} className="contractForm">
            <input
              value={contract}
              required
              placeholder="Email Address"
              type="email"
            />{" "}
            <br /> <br />
            <input
              value={contract}
              required
              placeholder="Subject"
              type="text"
            />
            <br /> <br />
            <textarea
              value={contract}
              required
              placeholder="Your Messages"
              cols="30"
              rows="10"
            ></textarea>{" "}
            <br />
            <button
              type="submit"
              className="appointmentRM"
              variant="contained"
            >
              Submit
            </button>
          </form>
        </center>
      </div>
    </div>
  );
};

export default ContractUs;

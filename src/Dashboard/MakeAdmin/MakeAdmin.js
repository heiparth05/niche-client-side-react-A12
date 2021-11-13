import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState();

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleMakeAdmin = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div style={{ marginTop: "6%" }}>
        <center>
          <h1>Make Admin</h1> <br />
          <form onSubmit={handleMakeAdmin}>
            <input
              onBlur={handleOnBlur}
              placeholder="Enter email address"
              style={{ width: "25%", padding: "0.2%" }}
              type="email"
            />{" "}
            <br /> <br />
            <button className="btn btn-outline-danger">Make Admin</button>
          </form>
        </center>
      </div>
    </>
  );
};

export default MakeAdmin;

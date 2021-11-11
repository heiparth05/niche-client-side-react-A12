import React from "react";
import error from "../images/Error_with_broken.png";
import "./Error.css";

const Error = () => {
  return (
    <div>
      <center>
        {" "}
        <img className="errorImg" src={error} alt="" />
      </center>
    </div>
  );
};

export default Error;

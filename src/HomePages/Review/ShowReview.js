/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./ShowReview.css";

const ShowReview = (props) => {
  const { name, email, feedback } = props.sentRev;
  return (
    <>
      <div className="showRContainer">
        <div className="showRContent">
          <center>
            <img src="https://img.icons8.com/nolan/50/quote.png" />
          </center>
          <br /> <b> " {feedback} "</b> <br /> <br />
          <small>
            {" "}
            <b>- {name}</b>
          </small>{" "}
          <br />
          <small>{email}</small>
        </div>
      </div>
    </>
  );
};

export default ShowReview;

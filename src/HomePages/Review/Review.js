import React from "react";
import "./Review.css";

const Review = () => {
  return (
    <div>
      <div className="reviewDContainer">
        <div className="rDContent1">
          <h5 style={{ color: "#f85032" }}>
            <b>Review</b>
          </h5>
          <h1>
            What Our Clients <br /> Says
          </h1>
        </div>
        <div className="rDContent2">
          <i className="fas fa-quote-right fa-7x"></i>
        </div>
      </div>
    </div>
  );
};

export default Review;

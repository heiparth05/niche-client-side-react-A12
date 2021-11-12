import React, { useState, useEffect } from "react";
import "./Review.css";
import ShowReview from "./ShowReview";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://blooming-fjord-40715.herokuapp.com/allFeedback")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

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
      </div>{" "}
      <br /> <br /> <br />
      <div className="reviewContainer">
        <div className="reviewContent">
          {reviews.map((review) => (
            <ShowReview sentRev={review}></ShowReview>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;

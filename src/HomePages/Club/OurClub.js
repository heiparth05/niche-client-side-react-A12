import React from "react";
import "./OurClub.css";

const OurClub = () => {
  return (
    <div>
      <center>
        <h2 className="ourClubHead" style={{ color: "#f85032" }}>
          Our Club
        </h2>
        <h5>Buy our product and become a part of our club</h5>
      </center>{" "}
      <br />
      <br />
      <div className="clubContainer">
        <div className="clubContent">
          <img
            src="https://themebing.com/wp/motormania/wp-content/uploads/2021/03/1-150x150.png"
            alt=""
          />
        </div>
        <div className="clubContent">
          <img
            src="https://themebing.com/wp/motormania/wp-content/uploads/2021/03/7-150x150.png"
            alt=""
          />
        </div>
        <div className="clubContent">
          <img
            src="https://themebing.com/wp/motormania/wp-content/uploads/2021/03/6-150x150.png"
            alt=""
          />
        </div>
        <div className="clubContent">
          <img
            src="https://themebing.com/wp/motormania/wp-content/uploads/2021/03/5-150x150.png"
            alt=""
          />
        </div>
        <div className="clubContent">
          <img
            src="https://themebing.com/wp/motormania/wp-content/uploads/2021/03/3-150x150.png"
            alt=""
          />
        </div>
        <div className="clubContent">
          <img
            src="https://themebing.com/wp/motormania/wp-content/uploads/2021/03/2-150x150.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default OurClub;

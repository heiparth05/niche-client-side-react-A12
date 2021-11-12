import React from "react";
import "./Facilities.css";

const Facilities = () => {
  return (
    <>
      <div className="facilitiesContainer">
        <div className="facilitiesContent">
          <div className="fasContent1">
            <i className="fas fa-shipping-fast fa-4x"></i>
          </div>
          <div className="fasContent2">
            <h5>Free Shipping</h5>
            <h6>For Orders From $50</h6>
          </div>
        </div>
        <div className="facilitiesContent">
          <div className="fasContent1">
            <i className="fas fa-headset fa-4x"></i>
          </div>
          <div className="fasContent2">
            <h5>Support 24/7</h5>
            <h6>Call Us Anytime</h6>
          </div>
        </div>
        <div className="facilitiesContent">
          <div className="fasContent1">
            <i className="fas fa-shield-virus fa-4x"></i>
          </div>
          <div className="fasContent2">
            <h5>100% Safety</h5>
            <h6>Only Secure Payment</h6>
          </div>
        </div>
        <div className="facilitiesContent">
          <div className="fasContent1">
            <i className="fas fa-tags fa-4x"></i>
          </div>
          <div className="fasContent2">
            <h5>Hot Offers</h5>
            <h6>Discount Upto 69%</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Facilities;

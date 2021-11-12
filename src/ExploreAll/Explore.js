import React from "react";
import "./Explore.css";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const Explore = (props) => {
  const { _id, img, name, stock, price } = props.sentExpo;
  return (
    <div>
      <Fade left cascade>
        <div className="productContainer">
          <img src={img} alt="" /> <br /> <br />
          <h6 style={{ color: "gray" }}>
            <b>{name}</b>
          </h6>
          <p style={{ color: "#6e6ee2" }}>Available : {stock}</p>
          <p>
            {" "}
            <b>Price : $ {price}</b>
          </p>
          <Link to={`/checkout/${_id}`}>
            <button type="button" className="btn btn-outline-danger">
              Buy Now
            </button>
          </Link>
        </div>
      </Fade>
    </div>
  );
};

export default Explore;

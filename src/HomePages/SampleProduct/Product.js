import React from "react";
import "./Product.css";
import Fade from "react-reveal/Fade";

const Product = (props) => {
  const { img, name, stock, price } = props.sentPro;
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
          <button type="button" class="btn btn-outline-danger">
            Buy Now
          </button>
        </div>
      </Fade>
    </div>
  );
};

export default Product;

import React from "react";
import "./MyOrder.css";

const MyOrder = (props) => {
  const { helmetName, helmetImg, helmetPrice, address, phoneNumber } =
    props.sentMyOrder;
  return (
    <div>
      <div className="helmetDContainer">
        <div className="helmetDContent1">
          <img src={helmetImg} alt="" />
        </div>{" "}
        <br /> <br />
        <div className="helmetDContent2">
          <b style={{ color: "gray" }}> Model : {helmetName}</b> <br />
          <small>Price : {helmetPrice}</small> <br />
          <small>Delivery Address : {address}</small> <br />
          <small>Phone Number : {phoneNumber}</small> <br />
        </div>
        <div className="helmetDContent3">
          <button className="btn btn-outline-danger">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;

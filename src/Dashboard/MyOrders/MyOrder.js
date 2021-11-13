import React, { useState } from "react";
import "./MyOrder.css";

const MyOrder = (props) => {
  const {
    _id,
    helmetName,
    helmetImg,
    helmetPrice,
    address,
    phoneNumber,
    clientName,
  } = props.sentMyOrder;

  // const [cancel,setCancel]= useState(false)

  const deleteProduct = (_id) => {
    alert("Vai aibar akta reload dan 😅 ");

    // console.log(_id)
    fetch(`https://blooming-fjord-40715.herokuapp.com/deleteOrder/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deleteCount > 0) {
          //  setCancel(!cancel)
        }
      });
  };

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
          <small>Your Name : {clientName}</small> <br />
          <small>Delivery Address : {address}</small> <br />
          <small>Phone Number : {phoneNumber}</small> <br />
        </div>
        <div className="helmetDContent3">
          <button
            onClick={() => deleteProduct(_id)}
            className="btn btn-outline-danger"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;

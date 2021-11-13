import React, { useState, useEffect } from "react";
import DashNav from "./../DashNav/DashNav";
import MyOrder from "./MyOrder";
import "./MyOrders.css";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allOrders")
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, []);

  return (
    <>
      <div>
        <DashNav></DashNav> <br /> <br /> <br /> <br />
      </div>
      <div>
        <h2>
          {" "}
          <center>You Confirm This Item</center>
        </h2>
      </div>{" "}
      <br />
      <div className="myOrdersMainContainer">
        {myOrders.map((myOrder) => (
          <MyOrder key={myOrder._id} sentMyOrder={myOrder}></MyOrder>
        ))}
      </div>
    </>
  );
};

export default MyOrders;

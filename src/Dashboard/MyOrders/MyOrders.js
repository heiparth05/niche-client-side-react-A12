import React, { useState, useEffect } from "react";
import DashNav from "./../DashNav/DashNav";
import MyOrder from "./MyOrder";
import "./MyOrders.css";
import useAuth from "./../../Hooks/useAuth";

const MyOrders = () => {
  const { user } = useAuth();
  const email = user.email;

  console.log(email);

  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    // fetch(`https://blooming-fjord-40715.herokuapp.com/allOrders/${email}`)

    fetch("https://blooming-fjord-40715.herokuapp.com/allOrders")
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [email]);

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

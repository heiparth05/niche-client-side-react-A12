import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Checkout.css";
import NavBar from "./../HomePages/NavBar/NavBar";
import useAuth from "./../Hooks/useAuth";
import { useForm } from "react-hook-form";

const Checkout = () => {
  const { user } = useAuth();

  const { helmetId } = useParams();

  const { register, handleSubmit, reset } = useForm();

  const [singlePro, setSinglePro] = useState({});

  console.log(singlePro.img, singlePro.price, singlePro.name);

  useEffect(() => {
    fetch(
      `https://blooming-fjord-40715.herokuapp.com/allHelmetData/${helmetId}`
    )
      .then((res) => res.json())
      .then((data) => setSinglePro(data));
  }, [helmetId]);

  const onSubmit = (data) => {
    data.clientEmail = user.email;
    data.clientName = user.displayName;
    data.helmetImg = singlePro.img;
    data.helmetName = singlePro.name;
    data.helmetPrice = "$" + singlePro.price;
    console.log(data);

    fetch("https://blooming-fjord-40715.herokuapp.com/allOrders", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Are you sure you want to purchase this product?");
        reset();
      });
  };

  return (
    <>
      <div>
        <NavBar></NavBar>
        <div className="checkoutContainer">
          <div className="checkoutContent1">
            <img src={singlePro.img} alt="" /> <br /> <br />
            <h6 style={{ color: "gray" }}>
              <b>{singlePro.name}</b>
            </h6>
            <p>
              {" "}
              <b>Price : $ {singlePro.price}</b>
            </p>
          </div>

          <div className="checkoutContent2">
            <div className="reactFormDiv ckOFDiv">
              <form
                className="reactForm checkOutForm"
                onSubmit={handleSubmit(onSubmit)}
              >
                <input value={user.displayName} {...register("clientName")} />{" "}
                <br />
                <input value={user.email} {...register("clientEmail")} /> <br />
                <input
                  value={singlePro.name}
                  {...register("helmetName")}
                />{" "}
                <br />
                <input value={singlePro.img} {...register("helmetImg")} />{" "}
                <br />
                <input
                  value={"$" + singlePro.price}
                  {...register("helmetPrice", {
                    required: true,
                    maxLength: 20,
                  })}
                />{" "}
                <br />
                <input
                  required
                  placeholder="Your home address"
                  {...register("address")}
                />{" "}
                <br />
                <input
                  required
                  placeholder="Give us your phone number"
                  type="number"
                  {...register("phoneNumber")}
                />{" "}
                <br />
                <input
                  value="Checkout"
                  className="reactFSub checkoutSub"
                  type="submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;

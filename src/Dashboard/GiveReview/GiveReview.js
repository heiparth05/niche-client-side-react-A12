import React from "react";
import DashNav from "./../DashNav/DashNav";
import useAuth from "./../../Hooks/useAuth";
import "./GiveReview.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GiveReview = () => {
  const { user } = useAuth();

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://blooming-fjord-40715.herokuapp.com/allFeedback", data)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Thanks for your feedback!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          reset();
        }
      });
  };

  return (
    <>
      <div>
        <DashNav></DashNav>
      </div>
      <br /> <br /> <br /> <br />
      <div className="reactFormDiv">
        <form className="reactForm" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="gRInput"
            value={user.displayName}
            {...register("name", { required: true, maxLength: 20 })}
          />{" "}
          <br />
          <input
            className="gRInput"
            value={user.email}
            {...register("email")}
          />{" "}
          <br />
          <textarea
            required
            rows="5"
            cols="5"
            type="text"
            className="feedBack"
            placeholder="Write Your Feedback"
            {...register("feedback")}
          />{" "}
          <br />
          <input className="reactFSub gRInput" type="submit" value="Submit" />
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default GiveReview;

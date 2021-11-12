/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import NavBar from "../HomePages/NavBar/NavBar";
import logReg from "../images/Motocross-bro.png";
import swal from "sweetalert";
import { Link, useLocation, useHistory  } from "react-router-dom";
import useAuth from "./../Hooks/useAuth";
import Loader from "react-loader-spinner";

const Register = () => {
  const [loginData, setLoginData] = useState({});

  const location = useLocation();
  const history = useHistory();

  const { user, isLoading, authError, registerUser, signInUseGoogle } =
    useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newLoginData = { ...loginData };
    newLoginData[field] = value;

    setLoginData(newLoginData);

    // console.log(newLoginData);
  };

  const registerSubmit = (e) => {
    if (loginData.password1 !== loginData.password2) {
      swal("Dadaaa!", "Type Same Password In Two Password Field", "error");
      return;
    }

    // console.log(loginData);

    registerUser(loginData.email, loginData.password1,loginData.name,location,history);

    // console.log(registerUser);

    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInUseGoogle();
  };

  return (
    <>
      <NavBar></NavBar> <br /> <br /> <br />
      <br />
      <div>
        {!isLoading && (
          <div className="loginContainer">
            <div className="loginContent1">
              <div className="loginCard">
                <center>
                  <h5>
                    <b>
                      Please REGISTER &nbsp;<i className="fas fa-user-plus"></i>
                    </b>
                  </h5>{" "}
                </center>{" "}
                <br />
                <form onSubmit={registerSubmit}>
                  <input
                    required
                    onBlur={handleOnBlur}
                    name="name"
                    type="text"
                    placeholder="Enter Your Full Name"
                  />{" "}
                  <br /> <br />
                  <input
                    required
                    onBlur={handleOnBlur}
                    name="email"
                    type="email"
                    placeholder="Enter Your Email"
                  />{" "}
                  <br /> <br />
                  <input
                    required
                    onBlur={handleOnBlur}
                    name="password1"
                    type="password"
                    placeholder="Enter Your Password"
                  />{" "}
                  <br /> <br />
                  <input
                    required
                    onBlur={handleOnBlur}
                    name="password2"
                    type="password"
                    placeholder="Confirm Your Password"
                  />{" "}
                  <br /> <br />
                  <button type="submit">Register</button>
                  <br />
                  <p style={{ color: "#7f7fd5" }}>
                    Already have an account?
                    <Link
                      style={{
                        textDecoration: "none",
                        border: "none",
                        color: "red",
                      }}
                      to="/login"
                    >
                      {" "}
                      Please LogIn!
                    </Link>
                  </p>{" "}
                  <center>OR</center>
                  <div onClick={handleGoogleSignIn} className="googleContainer">
                    <div className="gIContent">
                      <img src="https://img.icons8.com/plasticine/35/000000/google-logo.png" />
                    </div>
                    <div className="wContent">
                      <p>Sign in With Google</p>
                    </div>
                  </div>{" "}
                  <br />
                  {user?.email && (
                    <div className="alert alert-success" role="alert">
                      Congratulations! Registration Success
                    </div>
                  )}
                  {authError && (
                    <div className="alert alert-danger" role="alert">
                      {authError}
                    </div>
                  )}
                </form>
              </div>
            </div>
            <div className="loginContent2">
              <img src={logReg} alt="" />
            </div>
          </div>
        )}
        {isLoading && (
          <div>
            <center style={{ marginTop: "15%" }}>
              <Loader type="Circles" color="#7f7fd5" height={80} width={80} />
            </center>
          </div>
        )}
      </div>
    </>
  );
};

export default Register;

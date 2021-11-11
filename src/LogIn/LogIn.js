/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "./LogIn.css";
import NavBar from "../HomePages/NavBar/NavBar";
import logReg from "../images/Motocross-bro.png";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "./../Hooks/useAuth";
import Loader from "react-loader-spinner";

const LogIn = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, isLoading, authError, signInUseGoogle } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const loginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInUseGoogle(location, history);
  };

  return (
    <>
      <NavBar></NavBar> <br /> <br /> <br />
      <br />
      {!isLoading && (
        <div className="loginContainer">
          <div className="loginContent1">
            <div className="loginCard">
              <center>
                <h5>
                  <b>
                    Please LOGIN &nbsp;<i className="fas fa-user-circle"></i>
                  </b>
                </h5>{" "}
              </center>{" "}
              <br />
              <form onSubmit={loginSubmit}>
                <input
                  required
                  onBlur={handleOnBlur}
                  name="email"
                  type="email"
                  placeholder="Your Email"
                />{" "}
                <br /> <br />
                <input
                  required
                  onBlur={handleOnBlur}
                  name="password"
                  type="password"
                  placeholder="Your Password"
                />{" "}
                <br /> <br />
                <button type="submit">LogIn</button>
                <br />
                {user?.email && (
                  <div className="alert alert-success" role="alert">
                    Congratulations! LogIn Success
                  </div>
                )}
                {authError && (
                  <div className="alert alert-danger" role="alert">
                    {authError}
                  </div>
                )}
                <p style={{ color: "#7f7fd5" }}>
                  Don't have any account?
                  <Link
                    style={{
                      textDecoration: "none",
                      border: "none",
                      color: "red",
                    }}
                    to="/register"
                  >
                    {" "}
                    Please Register!
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
    </>
  );
};

export default LogIn;

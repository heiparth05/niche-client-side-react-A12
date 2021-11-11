/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "./../../Hooks/useAuth";

const DashNav = () => {
  const { logOut } = useAuth();
  return (
    <div>
      <nav
        className="navbar p-3 fixed-top navbar-expand-lg navbar-light NavCard"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <h3 className="mr-5">
          <span>D</span> <span>A</span> <span>S</span> <span>H</span>{" "}
          <span>B</span> <span>O</span> <span>A</span> <span>R</span>{" "}
          <span>D</span>
        </h3>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active ml-3">
              <a className="nav-link" href="#">
                <NavLink to="/home">Home</NavLink>
              </a>
            </li>

            <li className="nav-item active ml-3">
              <a className="nav-link" href="#">
                <NavLink to="/myOrders">My Orders</NavLink>
              </a>
            </li>

            <li className="nav-item active ml-3">
              <a className="nav-link" href="#">
                <NavLink to="/payNow">Pay Now</NavLink>
              </a>
            </li>

            <li className="nav-item active ml-3">
              <a className="nav-link" href="#">
                <NavLink to="/giveReview">Review</NavLink>
              </a>
            </li>

            <li onClick={logOut} className="nav-item active ml-3">
              <a className="nav-link" href="#">
                <NavLink to="">LogOut</NavLink>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default DashNav;

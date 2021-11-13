/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "./../../Hooks/useAuth";
import MakeAdmin from "./../MakeAdmin/MakeAdmin.js";
import ManageAllProducts from "./../ManageAllProducts/ManageAllProducts.js";
import AddProduct from "./../AddProduct/AddProduct.js";

import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

const DashNav = () => {
  const { logOut } = useAuth();

  let { path, url } = useRouteMatch();

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
                <NavLink to="/dashboard">Admin Dashboard</NavLink>
              </a>
            </li>

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

            <li className="nav-item active ml-3">
              <a className="nav-link" href="#">
                <Link to={`${url}/makeAdmin`}>Make Admin</Link>
              </a>
            </li>

            <li className="nav-item active ml-3">
              <a className="nav-link" href="#">
                <Link to={`${url}/manageAllProducts`}>Manage All Product</Link>
              </a>
            </li>

            <li className="nav-item active ml-3">
              <a className="nav-link" href="#">
                <NavLink to={`${url}/addProduct`}>Add Products</NavLink>
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
      <div>
        <Switch>
          <Route path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path={`${path}/manageAllProducts`}>
            <ManageAllProducts></ManageAllProducts>
          </Route>
          <Route path={`${path}/addProduct`}>
            <AddProduct></AddProduct>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default DashNav;

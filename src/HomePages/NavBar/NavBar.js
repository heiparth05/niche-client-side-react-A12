/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import useAuth from "./../../Hooks/useAuth";

const NavBar = () => {
  const { user, logOut } = useAuth();

  return (
    <>
      <div>
        <nav
          className="navbar p-3 fixed-top navbar-expand-lg navbar-light NavCard"
          style={{ backgroundColor: "#e3f2fd" }}
        >
          <img
            className="mr-5 NavImg"
            src="https://themebing.com/wp/motormania/wp-content/uploads/2021/02/logo.png"
            alt=""
          />
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
                  <NavLink to="/explore">Explore</NavLink>
                </a>
              </li>

              {user?.email && (
                <li className="nav-item active ml-3">
                  <a className="nav-link" href="#">
                    <NavLink to="/dashboard">Your Dashboard</NavLink>
                  </a>
                </li>
              )}

              {user?.email ? (
                <li onClick={logOut} className="nav-item active ml-3">
                  <a className="nav-link" href="#">
                    <NavLink to=""> LogOut</NavLink>
                  </a>
                </li>
              ) : (
                <li className="nav-item active ml-3">
                  <a className="nav-link" href="#">
                    <NavLink to="/login">LogIn</NavLink>
                  </a>
                </li>
              )}
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-danger my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;

import React from "react";
import "./Explores.css";
import { useState } from "react";
import { useEffect } from "react";
import NavBar from "./../HomePages/NavBar/NavBar";
import Typewriter from "typewriter-effect";
import Explore from "./Explore";

const Explores = () => {
  const [explores, setExplores] = useState([]);
  useEffect(() => {
    fetch("https://blooming-fjord-40715.herokuapp.com/allHelmetData")
      .then((res) => res.json())
      .then((data) => setExplores(data));
  }, []);
  return (
    <>
      <NavBar></NavBar>
      <br />
      <div>
        <center>
          <div className="exploreTypewriter">
            <b>
              <div style={{ color: "red", fontSize: "2rem", marginTop: "5%" }}>
                <span>
                  <Typewriter
                    options={{
                      strings: ["Explore Our All Helmet Collections 🤞"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </div>
            </b>
          </div>
        </center>
        <div>
          <div className="exploresMainContainer">
            {explores.slice(9, 36).map((explore) => (
              <Explore key={explore._id} sentExpo={explore}></Explore>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Explores;

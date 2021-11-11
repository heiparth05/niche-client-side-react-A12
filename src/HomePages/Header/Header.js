/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./Header.css";
import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <>
      <div>
        <div className="headerMainContainer">
          <div className="headerMainContent1">
            <h1>
              Find the Best <br /> Motorbike Parts For <br />{" "}
              <span style={{ color: "#e52727" }}>Your Vehicle</span> Over
              hundreds of brands and tens of thousands of parts
            </h1>
            <br />
            <p>
              <Typewriter
                options={{
                  strings: [
                    "Browse our range of Gore-Tex Motorcycle Clothing",
                    "Including Rukka Dainese Richa Alpinestars and more ",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </p>
            <br /> <br />
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=8RiBZQ-AaBg&ab_channel=TheAfrojkhan"
            >
              <button className="watchVideo">Watch Video </button>
            </a>
          </div>
          <div className="headerMainContent2">
            <img
              src="https://themebing.com/wp/motormania/wp-content/uploads/2021/01/h3-img-3-2.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

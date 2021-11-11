/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Footer.css";
import logo1 from "../images/App_Store_Badge.png";
import logo2 from "../images/play store.png";

const Footer = () => {
  return (
    <>
      <div>
        <section className="last_part p-5" id="contract">
          <div
            className="
            row
            container-fluid
            d-flex
            align-items-center
            justify-content-center
          "
          >
            <div className="col-lg-3">
              <b> Download Our App </b>
              <br />
              <br />
              <img src={logo1} alt="" className="play_store" />
              <br />
              <br />
              <img src={logo2} alt="" className="app_store" />
            </div>
            <div className="col-lg-3 pt-4">
              <b> Menu </b> <br />
              <br />
              <h6>Privacy Policy</h6>
              <h6>Cookie Policy</h6>
              <h6>Purchasing Policy</h6>
              <h6>Terms & Conditions</h6>
              <h6>Career</h6>
            </div>
            <div className="col-lg-3">
              <b> Contact Us </b>
              <br />
              <br />
              <h6>House #6, Road # 9,</h6>
              <h6>Gulshan, Dhaka-1212.</h6>
              <h6>Email: contract@bikeBarn.bd</h6>
              <h6>Contact no: 2441139</h6>
            </div>
            <div className="col-lg-3 footerIcon">
              <b> Get In Touch </b>
              <br />
              <br />
              <a href="https://www.facebook.com/" target="_blank">
                <img src="https://img.icons8.com/bubbles/50/000000/facebook-new.png" />
                &nbsp;
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <img src="https://img.icons8.com/bubbles/50/000000/instagram-new--v2.png" />
                &nbsp;
              </a>
              <a href="https://www.twitter.com/" target="_blank">
                <img src="https://img.icons8.com/bubbles/50/000000/twitter.png" />
                &nbsp;
              </a>
            </div>
          </div>
          <br />
          <hr />
          <div className="text-center pt-3">
            <h6> &copy; Partho Majumdar 2021, All rights reserved. </h6>
          </div>
        </section>
      </div>
    </>
  );
};

export default Footer;

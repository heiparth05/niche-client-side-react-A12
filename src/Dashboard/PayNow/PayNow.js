import React from "react";
import DashNav from "./../DashNav/DashNav";
import Typewriter from "typewriter-effect";

const PayNow = () => {
  return (
    <>
      <div>
        <DashNav></DashNav>
      </div>{" "}
      <br /> <br /> <br />
      <center>
        <div>
          <b>
            <div style={{ color: "red", fontSize: "2rem", marginTop: "5%" }}>
              <span>
                <Typewriter
                  options={{
                    strings: [
                      "Payment Method Add Soon 😊  ",
                      "Stay With Us 🤞 ",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div>
          </b>
        </div>
      </center>
    </>
  );
};

export default PayNow;

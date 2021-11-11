import React from "react";
import "./OfferBanner.css";

const OfferBanner = () => {
  return (
    <>
      <div>
        <div className="offerBannerContainer">
          <div className="offerContent1">
            <b>
              <h2>
                Limited offer Get Your <br /> Helmet
              </h2>
            </b>
          </div>
          <div className="offerContent2">
            <img
              src="https://themebing.com/wp/motormania/wp-content/uploads/2021/02/helmet-1.png"
              alt=""
            />
          </div>
          <div className="offerContent3">
            <h5>
              Take care of your helmet 40% off This discount is not valid in
              conjunction with other offers
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default OfferBanner;

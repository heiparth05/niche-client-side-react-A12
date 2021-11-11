import React from "react";
import Footer from "../../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import ContractUs from "./../ContractUs/ContractUs";
import Header from "./../Header/Header";
import OurClub from "./../Club/OurClub";
import Facilities from "./../Facilities/Facilities";
import OfferBanner from "./../OfferBanner/OfferBanner";
import Review from "./../Review/Review";
import Products from "./../SampleProduct/Products";

const Home = () => {
  return (
    <>
      <div>
        <NavBar /> <br />
        <br />
        <br />
        <Header />
        <br />
        <br />
        <br />
        <Facilities />
        <br />
        <br />
        <br />
        <OfferBanner />
        <br />
        <br />
        <br />
        <Products />
        <br />
        <br />
        <br />
        <OurClub />
        <br />
        <br />
        <br />
        <Review />
        <br />
        <br />
        <br />
        <ContractUs />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    </>
  );
};

export default Home;

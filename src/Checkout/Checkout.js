import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Checkout.css";
import NavBar from './../HomePages/NavBar/NavBar';

const Checkout = () => {
  const { helmetId } = useParams();

  const [singlePro, setSinglePro] = useState({});

  useEffect(() => {
    fetch(`https://blooming-fjord-40715.herokuapp.com/allHelmetData/${helmetId}`)
      .then((res) => res.json())
      .then((data) => setSinglePro(data));
  }, [helmetId]);

  return (
    <>
      <div>
        <NavBar></NavBar>
        <div className="checkoutContainer">
          <div className="checkoutContent1">
            <img src={singlePro.img} alt="" /> <br /> <br />
            <h6 style={{ color: "gray" }}>
              <b>{singlePro.name}</b>
            </h6>
            <p>
              {" "}
              <b>Price : $ {singlePro.price}</b>
            </p>
            <button type="button" className="btn btn-outline-danger">
              Checkout
            </button>
          </div>



          <div className="checkoutContent2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
            temporibus nostrum aliquid eos delectus cupiditate minima eligendi
            nobis provident voluptate labore soluta, autem excepturi
            perferendis, recusandae omnis dignissimos doloribus, ut corrupti
            tempora aliquam accusamus aspernatur? Recusandae voluptatum soluta,
            accusamus eos earum maiores reprehenderit architecto provident
            dolorum illum qui quasi a voluptates excepturi officia suscipit
            velit voluptas laborum quibusdam aliquam consequatur hic nemo nulla
            animi! Exercitationem blanditiis maiores esse doloremque dolores
            minus aspernatur consequatur nihil porro voluptatum sunt dignissimos
            eveniet dolore possimus temporibus expedita minima accusantium
            voluptatibus illum architecto ducimus, dolorum quaerat? Cum quasi
            excepturi optio molestiae error tempora amet nisi.
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;

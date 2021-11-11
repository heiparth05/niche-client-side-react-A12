import React from "react";
import "./Products.css";
import { useState } from "react";
import { useEffect } from "react";
import Product from "./Product";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("./sampleProduct.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <Zoom left>
        <center>
          {" "}
          <h2 style={{ color: "#f85032" }}>Our Products</h2>
        </center>
      </Zoom>
      <br />
      <br />
      <div className="productsContainer">
        <div className="productsContent1">
          <h4>
            <b>
              Here is our <br /> some latest products
            </b>
          </h4>
        </div>
        <div className="productsContent2">
          <Link to="/explore">See All</Link>
        </div>
      </div>
      <div className="productMainContainer">
        {products.map((product) => (
          <Product sentPro={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;

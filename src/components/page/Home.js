import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="container-flued  px-5" style={{marginTop:"6rem"}}>
      <div className="card text-white border-0">
        <img
          src="./assests/hero.jpeg"
          className="card-img"
          alt="hero"
          height="550px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="conatiner ">
            <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
            <p className="card-text lead fs-2">
              CHECK OUT THE SEASON ARRIVALS
            </p>
          </div>
        </div>
      </div>
      <Products/>
    </div>
  );
};

export default Home;

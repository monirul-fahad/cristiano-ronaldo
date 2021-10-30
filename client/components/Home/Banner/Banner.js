import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row ">
          <div className="col-md-6 text-white text-start">
            <h1 className="fw-bold">Lorem ipsum dolor sit amet.</h1>
            <p className="fs-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatibus totam assumenda eius cupiditate quae. Cum,
              dignissimos! Consequatur accusamus ea quos?
            </p>
            <button className="btn btn-primary" id="doctors">
              Book A Package{" "}
            </button>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React from "react";
import banner from "../../assets/images/banner.jpg";
import logo from "../../assets/images/logo.png";

const Banner = () => {
  return (
    <div className="row mb-5 bg-light">
      <div className="col-12 col-md-6 row">
        <img className="img-fluid" src={logo} alt="" />
        <div className="col-2"></div>
        <h1 className="display-1 col-10">
          We Love <br /> Delicious Food
        </h1>
        <div className="col-2"></div>
      </div>
      <img
        className="col-12 col-md-6 p-0 m-0 img-fluid"
        src={banner}
        alt=""
      />
    </div>
  );
};

export default Banner;

import React from "react";
import banner from "../../assets/images/banner.jpg";
import logo from "../../assets/images/logo.png";

const Banner = () => {
  return (
    <div className="row mb-5">
      <div className="col-12 col-md-6 row">
        <img src={logo} alt="" />
        <div className="col-2"></div>
        <h1 className="display-1 col-10">
          We Love <br /> Delicious Food
        </h1>
        <div className="col-2"></div>
      </div>
      <img className="col-12 col-md-6 p-0 m-0" src={banner} alt="" />
    </div>
  );
};

export default Banner;

import React from "react";
import hero1 from "../../assets/images/hero1.jpg";
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
      <div className="col-12 col-md-6">
        <img className="w-100" src={hero1} alt=""/>
      </div>
    </div>
  );
};

export default Banner;

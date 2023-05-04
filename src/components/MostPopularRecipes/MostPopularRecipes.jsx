import React from "react";

// Images
import dish2 from "../../assets/images/dish2.jpg";
import dish3 from "../../assets/images/dish3.jpg";
import dish4 from "../../assets/images/dish4.jpg";
import dish5 from "../../assets/images/dish5.jpg";
import dish6 from "../../assets/images/dish6.jpg";

const MostPopularRecipes = () => {
  return (
    <div className="text-center mt-5">
        <h2 className="text-center display-5">Most Popular Recipes</h2>
      <hr />
      <div>
        <img className="img-fluid rounded p-2" width={300} height={350} src={dish2} alt="" />
        <img className="img-fluid rounded p-2" width={300} height={350} src={dish3} alt="" />
        <img className="img-fluid rounded p-2" width={300} height={350} src={dish4} alt="" />
        <img className="img-fluid rounded p-2" width={300} height={350} src={dish5} alt="" />
        <img className="img-fluid rounded p-2" width={300} height={350} src={dish6} alt="" />
      </div>
    </div>
  );
};

export default MostPopularRecipes;

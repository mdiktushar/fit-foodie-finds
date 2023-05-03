import React from "react";
import ChefCard from "./ChefCard/ChefCard";

const chefs = ({ chefs }) => {
  //   console.log(chefs);
  return (
    <div className="mt-5">
      <h2 className="text-center display-5">Chefs</h2>
      <hr />
      <div className="row g-2">
        {chefs.map((chef) => (
          <div
            key={chef.id}
            className="col-12 col-md-6 col-lg-4 border rounded"
          >
            <ChefCard chef={chef} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default chefs;

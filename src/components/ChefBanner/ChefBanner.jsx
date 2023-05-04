import React from "react";
import LazyLoad from "react-lazyload";

const ChefBanner = ({ chef }) => {
  const { id, name, photo, bio, likes, years_of_experience, recipe } = chef;
  console.log(id);
  return (
    <div className="bg-light">
      <div className="row">
        <div className="col-12 col-md-6">
          <LazyLoad>
            <img className="rounded img-fluid " src={photo} alt="" />
          </LazyLoad>
        </div>

        <div className="lh-sm col-12 col-md-6 d-flex flex-column justify-content-center align-items-center p-5">
          <h5 className="display-3">{name}</h5>
          <p className="small lh-sm text-center">{bio}</p>
          <p className="small">
            Likes: <samp>{likes}</samp>
          </p>
          <p className="small">Experience: {years_of_experience}</p>
          <p className="small">Number of recipes: {recipe.length}</p>
        </div>
      </div>
    </div>
  );
};

export default ChefBanner;

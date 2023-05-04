import React from "react";
import { Button } from "react-bootstrap";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";

const ChefCard = ({ chef }) => {
  const { id, name, photo, years_of_experience, likes, recipe } = chef;
  return (
    <div className="row p-1">
      <div className="col-6">
        <LazyLoad>
          <img
            style={{ height: 166, width: 166 }}
            className="img-fluid rounded"
            src={photo}
            alt={name}
          />
        </LazyLoad>
      </div>
      <div className="col-6 p-1 lh-1">
        <p className="lead">{name}</p>
        <div className="small">
          <p>
            Experience: <samp>{years_of_experience}</samp> years
          </p>
          <p>
            Number of recipe: <samp>{recipe.length}</samp> years
          </p>
          <p>
            Likes: <samp>{likes}</samp> years
          </p>
        </div>

        <Link to={`chef/${id}`}>
          <Button className="btn-sm" variant="success">
            View
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ChefCard;

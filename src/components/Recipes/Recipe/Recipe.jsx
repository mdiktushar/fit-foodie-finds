import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";

const Recipe = ({ recipe }) => {
  const [favorite, setFavorite] = useState(true);
  const { name, ingredients, cooking_method, rating } = recipe;
  let count = 0;

  const favoriteHandler = () => {
    toast(`${name} is added to favorites...!`);
    setFavorite(!favorite);
  };

  return (
    <Card style={{}}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Ingredients</Card.Subtitle>
        <ul>
          {ingredients.map((item) => (
            <li key={count++}>{item}</li>
          ))}
        </ul>
        <Card.Text>{cooking_method}</Card.Text>
        <div className="d-flex align-items-center">
          <Rating style={{ maxWidth: 80 }} value={rating} readOnly />
          <samp className="ms-2">{rating}</samp>
        </div>
        {favorite && (
          <Button onClick={favoriteHandler} variant="outline-success">
            Favorite
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default Recipe;

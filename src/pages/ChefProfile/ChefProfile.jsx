import React from "react";
import { useLoaderData } from "react-router-dom";
import ChefBanner from "../../components/ChefBanner/ChefBanner";
import { Container } from "react-bootstrap";
import Recipes from "../../components/Recipes/Recipes";

const ChefProfile = () => {
  const chef = useLoaderData();
  // console.log(chef);
  return (
    <>
      <ChefBanner chef = {chef} />
      <Container>
        <Recipes recipes = {chef.recipe}/>
      </Container>
    </>
  );
};

export default ChefProfile;

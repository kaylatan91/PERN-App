import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function SingleRecipe({ recipe }) {
  const { recipesId } = useParams();
  const navigate = useNavigate();

const handler = () => {
    navigate(`/recipe/${recipe.recipesId}`)
}
  return (
    <div onClick = {handler}key={recipe.recipesId}>
      <h2>{recipe.recipe_name}</h2>
      <img src = {recipe.image} alt = {recipe.name} />
      <p>{recipe.description}</p>
      <p>{recipe.prep_time}</p>
      <p>{recipe.cook_time}</p>
      <p>{recipe.servings}</p>
    </div>
  );
}

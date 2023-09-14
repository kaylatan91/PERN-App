import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  fetchSingleRecipe,
  fetchIngredients,
  fetchInstructions,
  deleteRecipe,
} from "../../fetching";

export default function RecipeCard() {
  const [recipe, setRecipe] = useState([]);
  const [ingredientsRC, setIngredientsRC] = useState({
    ingredients: [],
    measurements: [],
  });
  const [instructionsRC, setInstructionsRC] = useState({ steps: [] });
  const { id } = useParams();
  const navigate = useNavigate();

  async function handleDelete() {
    try {
      const result = await deleteRecipe(id);
      console.log(result);
      navigate("/recipes");
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    async function getRecipe() {
      console.log("entering getRecipe");
      const recipe = await fetchSingleRecipe(id);
      const ingredientsRC = await fetchIngredients(id);
      const instructionsRC = await fetchInstructions(id);
      setRecipe(recipe);
      setIngredientsRC(ingredientsRC);
      setInstructionsRC(instructionsRC);
      //   console.log(recipe);
      //   console.log(ingredients);
      //   console.log(instructions);
      //   return recipe;
    }
    getRecipe();
  }, [id]);

  return (
    <div className="recipe-container">
      <h1>{recipe.recipe_name}</h1>
      <img src={recipe.image} alt={recipe.name} />
      <h2>Ingredients:</h2>
      {ingredientsRC.ingredients && ingredientsRC.ingredients.length > 0 ? (
        <ul>
          {ingredientsRC.ingredients.map((ingredient, index) => (
            <p key={index}>{ingredient}</p>
          ))}
        </ul>
      ) : (
        <p>No ingredients available</p>
      )}
      <h2>Measurements:</h2>
      {ingredientsRC.measurements && ingredientsRC.measurements.length > 0 ? (
        <ul>
          {ingredientsRC.measurements.map((measurement, index) => (
            <p key={index}>{measurement}</p>
          ))}
        </ul>
      ) : (
        <p>No measurements available</p>
      )}
      <h2>Instructions:</h2>
      {instructionsRC.steps && instructionsRC.steps.length > 0 ? (
        <ol>
          {instructionsRC.steps.map((step, index) => (
            <p key={index}>{step}</p>
          ))}
        </ol>
      ) : (
        <p>No instructions available</p>
      )}
      <button onClick={handleDelete}>Delete Recipe</button>
    </div>
  );
}

// <div className="container">
//     <h2>{recipe.recipe_name}</h2>
//     <img src = {recipe.image} alt = {recipe.name} />
//     <h2>Ingredients:</h2>
//     <ul>
//     <p>{ingredients.ingredients}</p>
//     </ul>
//     <h2>Measurements:</h2>
//     <ul>
//     <p>{ingredients.measurements}</p>
//     </ul>
//     <h2>Instructions:</h2>
//     <ol>
//     <p>{instructions.steps}</p>
//     </ol>
// </div>

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {fetchSingleRecipe, fetchIngredients, fetchInstructions, deleteRecipe} from "../../fetching";

export default function RecipeCard() {
  const [recipe, setRecipe] = useState([]);
  const [ingredients, setIngredients] = useState({ingredients: [], measurements: []});
  const [instructions, setInstructions] = useState({steps: []});
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
      const recipe = await fetchSingleRecipe(id);
      const ingredients = await fetchIngredients(id);
      const instructions = await fetchInstructions(id);
      setRecipe(recipe);
      setIngredients(ingredients);
      setInstructions(instructions);
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
      {ingredients.ingredients && ingredients.ingredients.length > 0 ? (
        <ul>
          {ingredients.ingredients.map((ingredient, index) => (
            <p key={index}>{ingredient}</p>
          ))}
        </ul>
      ) : ( 
        <p>No ingredients available</p>
      )}
      <h2>Measurements:</h2>
      {ingredients.measurements && ingredients.measurements.length > 0 ? (
        <ul>
          {ingredients.measurements.map((measurement, index) => (
            <p key={index}>{measurement}</p>
          ))}
        </ul>
      ) : ( 
        <p>No measurements available</p>
      )}
      <h2>Instructions:</h2>
      {instructions.steps && instructions.steps.length > 0 ? (
        <ol>
          {instructions.steps.map((step, index) => (
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

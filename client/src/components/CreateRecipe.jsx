import { useState } from "react";
import {
  createRecipe,
  createIngredients,
  createInstructions,
} from "../../fetching";

export default function CreateRecipeForm({ setRecipes }) {
  const [recipeName, setRecipeName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [servings, setServings] = useState("");
  const [error, setError] = useState(null);

  const [ingredients, setIngredients] = useState([]);
  const [currIngredient, setCurrIngredient] = useState("");
  const [currMeasurment, setCurrMeasurement] = useState("");
  const [currStep, setCurrStep] = useState("");
  const [measurements, setMeasurements] = useState([]);

  const [steps, setSteps] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    const APIData = await createRecipe(
      recipeName,
      image,
      description,
      prepTime,
      cookTime,
      servings
    );
    const createdIngredients = { recipesId: null, ingredients, measurements };
    const createdInstructions = { recipesId: null, steps };
    if (APIData.success) {
      console.log("New Recipe: ", APIData.result);

      const newRecipe = APIData.result;
      setRecipes((recipes) => [...recipes, newRecipe]);
      createdIngredients.recipesId = newRecipe.recipesId;
      createdInstructions.recipesId = newRecipe.recipesId;
      setRecipeName("");
      setImage("");
      setDescription("");
      setPrepTime("");
      setCookTime("");
      setServings("");
      setError(null);
      setCurrIngredient("");
      setCurrMeasurement("");
      setCurrStep("");
    } else {
      setError(APIData.message);
    }
    const ingredientsAPI = await createIngredients(createdIngredients);
    if (!ingredientsAPI.success) setError(ingredientsAPI.message);
    const instructionsAPI = await createInstructions(createdInstructions);
    if (!instructionsAPI.success) setError(instructionsAPI.message);
  }

  const setValue = (option) => {
    if (option === "ingredients") {
      setIngredients([...ingredients, currIngredient]);
      setCurrIngredient("");
    } else if (option === "measurements") {
      setMeasurements([...measurements, currMeasurment]);
      setCurrMeasurement("");
    } else if (option === "steps") {
      setSteps([...steps, currStep]);
      setCurrStep("");
    }
  };

  return (
    <div>
      <form className="recipe-container" onSubmit={handleSubmit}>
        {error && <p>{error}</p>}
        <h1>Share your recipe!</h1>
        <input
          value={recipeName}
          type="text"
          name="recipeName"
          placeholder="Recipe Name"
          onChange={(e) => setRecipeName(e.target.value)}
        />
        <br />
        <br />
        <input
          value={image}
          type="text"
          name="image"
          placeholder="Insert Image URL Link"
          onChange={(e) => setImage(e.target.value)}
        />
        {image && <img src={image} alt="Recipe" />}
        <br />
        <br />
        <input
          value={description}
          type="text"
          name="description"
          placeholder="Enter description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <br />
        <input
          value={prepTime}
          type="text"
          name="prepTime"
          placeholder="Enter Prep Time"
          onChange={(e) => setPrepTime(e.target.value)}
        />
        <br />
        <br />
        <input
          value={cookTime}
          type="text"
          name="cookTime"
          placeholder="Enter Cook Time"
          onChange={(e) => setCookTime(e.target.value)}
        />
        <br />
        <br />
        <input
          value={servings}
          type="text"
          name="servings"
          placeholder="Enter serving size"
          onChange={(e) => setServings(e.target.value)}
        />
        <br />
        <br />
        <input
          value={currIngredient}
          type="text"
          name="ingredients"
          placeholder="List Ingredients"
          onChange={(e) => setCurrIngredient(e.target.value)}
        />
        <button type="button" onClick={() => setValue("ingredients")}>
          Add to Ingredients
        </button>
        <br />
        <br />
        <input
          value={currMeasurment}
          type="text"
          name="measurements"
          placeholder="Insert Measurements for Ingredients"
          onChange={(e) => setCurrMeasurement(e.target.value)}
        />
        <button type="button" onClick={() => setValue("measurements")}>
          Add to Measurements
        </button>
        <input
          value={currStep}
          type="text"
          name="steps"
          placeholder="Insert instructions here"
          onChange={(e) => setCurrStep(e.target.value)}
        />
        <button type="button" onClick={() => setValue("steps")}>
          Add to Instructions
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

{
  /* <CreateIngredients
ingredientsList={ingredientsList}
setIngredientsList={setIngredientsList}
/>
<CreateInstructions
instructionsList={instructionsList}
setInstructionsList={setInstructionsList}
/> */
}

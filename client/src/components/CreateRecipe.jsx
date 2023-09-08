import {useState} from "react";
import { createRecipe } from "../../fetching";
import CreateIngredients from './CreateIngredients';
import CreateInstructions from './CreateInstructions';

export default function CreateRecipeForm({recipe, setRecipe}) {
    const [recipeName, setRecipeName] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [prepTime, setPrepTime] = useState("");
    const [cookTime, setCookTime] = useState("");
    const [servings, setServings] = useState("");
    const [error, setError] = useState(null);

    const [ingredientsList, setIngredientsList] = useState([]);
    const [instructionsList, setInstructionsList] = useState([]);

    async function handleSubmit(e) {
        e.preventDefault();
        const APIData = await createRecipe(recipeName, image, description, prepTime, cookTime, servings)
        if (APIData.success) {
            console.log("New Recipe: ", APIData.data.newRecipe)

            const newRecipe = APIData.data.newRecipe;
            setRecipe((recipes) => [...recipes, newRecipe]);

            setRecipeName("");
            setImage("");
            setDescription("");
            setPrepTime("");
            setCookTime("");
            setServings("");
            setError(null);
          } else {
            setError(APIData.error.message);
          }
        }

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
                {image && (
                    <img
                    src={image}
                    alt="Recipe"
                    />
                )}
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
            <CreateIngredients
            ingredientsList={ingredientsList}
            setIngredientsList={setIngredientsList}
            />
            <CreateInstructions
            instructionsList={instructionsList}
            setInstructionsList={setInstructionsList}
            />
            <button>Submit</button>
            </form>
        </div>
    )
}

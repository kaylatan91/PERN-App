import {useState} from "react";
import { createIngredients } from "../../fetching";

export default function CreateIngredientsForm({ingredientsList, setIngredientsList}) {
    const [ingredients, setIngredients] = useState("");
    const [measurements, setMeasurements] = useState("");
    const [error, setError] = useState(null);

    async function Ingredients () {
        const APIData = await createIngredients(ingredients, measurements)
        if (APIData.success) {
            console.log("New Ingredients List: ", APIData.data.newIngredients)
    
            const newIngredients = APIData.data.newIngredients;
            setIngredientsList((prevIngredients) => [...prevIngredients,newIngredients]);
    
            setIngredients("");
            setMeasurements("");
        } else {
            setError(APIData.error.message)
        }

    }

    return (
        <form className="recipe-container">
            {error && <p>{error}</p>}
            <input
            value={ingredients}
            type="text"
            name="ingredients"
            placeholder="List Ingredients"
            onChange={(e) => setIngredients(e.target.value)}
            />
            <br />
            <br />
            <input
            value={measurements}
            type="text"
            name="measurements"
            placeholder="Insert Measurements for Ingredients"
            onChange={(e) => setMeasurements(e.target.value)}
            />
        </form>
    )

}
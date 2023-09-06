import {useState, useEffect} from 'react';
import { fetchAllRecipes } from '../../fetching';

export default function AllRecipes() {
    const [recipes, setRecipes] = useState([]);
    const [searchParam, setSearchParam] = useState("");

    useEffect(() => {
        async function getAllRecipes() {
            const recipes = await fetchAllRecipes();
            setRecipes(recipes);
            console.log(recipes);
            return recipes;
        }
        getAllRecipes();
    },[]);

    const recipesToDisplay = searchParam
    ? recipes.filter((recipe) =>
        recipe.recipe_name.toLowerCase().includes(searchParam)
    )
    : recipes;

    return(
        <div>
            <label>
            Search:{" "}
            <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
            />
            </label>
            {
                recipesToDisplay.map((recipe)=> {
                    return (
                        <div key={recipe.recipesId}>
                            <h2>{recipe.recipe_name}</h2>
                            <p>{recipe.description}</p>
                            <p>{recipe.prep_time}</p>
                            <p>{recipe.cook_time}</p>
                            <p>{recipe.servings}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
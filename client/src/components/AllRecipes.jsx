import {useState, useEffect} from 'react';
import { fetchAllRecipes } from '../../fetching';
import SingleRecipe from './SingleRecipe';
import CreateRecipeForm from './CreateRecipe';

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

    return (
        <div className="recipe-container">
            <label id="search-container">
            Search:{" "}
            <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
            />
            </label>
            <CreateRecipeForm setRecipes={setRecipes}/>
            {
                recipesToDisplay.map((recipe)=> {
                    return (
                    <SingleRecipe key={recipe.id} recipe={recipe} />
                    )
                })
            }
        </div>
    )
}
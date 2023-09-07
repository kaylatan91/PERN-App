import React from "react";
import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import { fetchSingleRecipe,fetchIngredients, fetchInstructions } from "../../fetching";


export default function RecipeCard() {
    const [recipe, setRecipe] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [instructions, setInstructions] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        async function getRecipe() {
            const recipe = await fetchSingleRecipe(id);
            setRecipe(recipe);
            console.log(recipe);
            return recipe;
        }
        getRecipe();
    },[]);

    // useEffect(() => {
    //     async function getRecipeDetails() {
    //         const ingredients = await fetchIngredients(ingredientsId);
    //         setIngredients(ingredients);
    //         console.log(ingredients);
    //         return ingredients;
    //     }
    //     getRecipeDetails();
    // },[]);

    // useEffect(() => {
    //     async function getRecipeInstructions() {
    //         const instructions = await fetchInstructions(id);
    //         setInstructions(instructions);
    //         console.log(instructions);
    //         return instructions;
    //     }
    //     getRecipeInstructions();
    // },[]);

    return (
        <div className="container">
            <h2>{recipe.recipe_name}</h2>
            <img src = {recipe.image} alt = {recipe.name} />
            <h2>Ingredients</h2>

        </div>
    )
}

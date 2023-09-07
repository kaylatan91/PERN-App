import React from "react";
import { useLocation } from "react-router-dom";
import { fetchIngredients, fetchInstructions } from "../../fetching";


function RecipeCard() {
    const location = useLocation();
    console.log(location);

    return (
        <div className="container">
            <h2>Ingredients</h2>
        </div>
    )
}

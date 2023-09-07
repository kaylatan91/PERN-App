// -----RECIPES FETCH REQUESTS-----
const baseUrl = "http://localhost:8080/api";

export async function fetchAllRecipes () {
    try {
        // fetch data from the API
        const response = await fetch(`${baseUrl}/recipes`)
        const recipes = await response.json();
        return recipes;
    } catch (error) {
        console.error(error)
    }
}

export async function fetchSingleRecipe(recipesId) {
    try {
        const response = await fetch(`${baseUrl}/recipes/${recipesId}`)
        const recipe = await response.json();
        return recipe;
    } catch (error) {
        console.error(error)
    }
}

export async function createRecipe(recipe_name, description, prep_time, cook_time, servings) {
    try {
        const response = await fetch(`${baseUrl}/recipes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                recipe_name,
                description,
                prep_time,
                cook_time,
                servings
            })
        })
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error)
    }
}

export async function deleteRecipe(recipesId) {
    try {
        const response = await fetch(`${baseUrl}/recipes/${recipesId}`, {
            method: "DELETE"
        })
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error)
    }
}

// -----INGREDIENTS FETCH REQUESTS-----

export async function fetchAllIngredients () {
    try {
        // fetch data from the API
        const response = await fetch(`${baseUrl}/ingredients`)
        const ingredients = await response.json();
        return ingredients;
    } catch (error) {
        console.error(error)
    }
}

export async function fetchIngredients(ingredientsId) {
    try {
        const response = await fetch(`${baseUrl}/ingredients/${ingredientsId}`)
        const ingredient = await response.json();
        return ingredient;
    } catch (error) {
        console.error(error)
    }
}


// -----INSTRUCTIONS FETCH REQUESTS-----

export async function fetchAllInstructions () {
    try {
        const response = await fetch(`${baseUrl}/instructions`)
        const instructions = await response.json();
        return instructions;
    } catch (error) {
        console.error(error)
    }
}

export async function fetchInstructions(instructionsId) {
    try {
        const response = await fetch(`${baseUrl}/instructions/${instructionsId}`)
        const instruction = await response.json();
        return instruction;
    } catch (error) {
        console.error(error)
    }
}
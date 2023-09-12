const client = require('../client')

const createRecipe = async ({ recipe_name, image, description, prep_time, cook_time, servings }) => {
    try {
        const {
            rows: [recipe],
        } = await client.query (
            //INSERT SQL query
            // insert into table(column 1, column 2, etc.)
            `
            INSERT INTO recipes(recipe_name, image, description, prep_time, cook_time, servings)
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING *
            `,

            //Kind of like a dependency array, hooks up the parameters to the $ variables
            [ recipe_name, image, description, prep_time, cook_time, servings ]
        )
        return recipe 
    } catch (error) {
        throw error 
    }
}

const getAllRecipes = async () => {
    try {
        const { rows }
        = await client.query(`
            SELECT * 
            FROM recipes;
        `)
        console.log(rows)
        return rows 
    } catch (error) {
        throw error
    }
}

const getRecipeById = async (recipesId) => {
    try{
        const {
            rows: [recipe]
        } = await client.query(
            `
                SELECT * 
                FROM recipes
                WHERE "recipesId" =${recipesId}
            `
        );
        return recipe;
    } catch (error) {
        throw error
    }
}

const updateRecipe = async (recipesId, body) => {
    try {
        const { rows } = await client.query(
            `
                UPDATE recipes
                SET recipe_name = '${body.recipe_name}',
                image = '${body.image}',
                description = '${body.description}',
                prep_time = '${body.prep_time}',
                cook_time = '${body.cook_time}',
                servings = '${body.servings}'
                WHERE "recipesId" = ${recipesId}
                RETURNING *; 
            `
        );
        return rows;
    } catch (error) {
        throw error
    }
}

const deleteRecipe = async (recipesId) => {
    try {
        const { rows: ingredients } = await client.query(
            `
            DELETE FROM ingredients
            WHERE "recipesId" = ${recipesId}
            RETURNING *;
            `
        )
        const { rows: instructions } = await client.query(
            `
            DELETE FROM instructions
            WHERE "recipesId" = ${recipesId}
            RETURNING *;
            `
        )
        const { rows } = await client.query(
            `
            DELETE FROM recipes 
            WHERE "recipesId" = ${recipesId}
            RETURNING *;
            `
        );
        rows.ingredients=ingredients
        rows.instructions=instructions
        return rows;
    } catch (error) {
       throw error 
    }
}


module.exports = { createRecipe, getAllRecipes, getRecipeById, updateRecipe, deleteRecipe }
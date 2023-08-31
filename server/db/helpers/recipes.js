const client = require('../client')

const createRecipe = async ({ recipeName, description, prepTime, cookTime, servings }) => {
    try {
        const {
            rows: [recipe],
        } = await client.query (
            //INSERT SQL query
            // insert into table(column 1, column 2, etc.)
            `
            INSERT INTO recipes(recipeName, description, prepTime, cookTime, servings)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *
            `,

            //Kind of like a dependency array, hooks up the parameters to the $ variables
            [ recipeName, description, prepTime, cookTime, servings ]
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

module.exports = { createRecipe, getAllRecipes }
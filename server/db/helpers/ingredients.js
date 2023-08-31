const client = require('../client')

const createIngredients = async ({ recipeId, ingredients, measurements }) => {
    try {
        const {
            rows: [ingredient],
        } = await client.query (
            `
            INSERT INTO ingredients(ingredients, measurements)
            VALUES ($1, $2)
            RETURNING *
            `,

            [ recipeId, ingredients, measurements]
        )
        return ingredient
    } catch (error) {
        throw error
    }
}

const getAllIngredients = async () => {
    try {
        const { rows }
        = await client.query(`
            SELECT * 
            FROM ingredients;
        `)
        console.log(rows)
        return rows 
    } catch (error) {
        throw error
    }
}



module.exports = { createIngredients, getAllIngredients }
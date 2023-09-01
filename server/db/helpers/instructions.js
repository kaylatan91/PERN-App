const client = require('../client')

const createInstructions = async ({ recipesId, steps }) => {
    try {
        const {
            rows: [instruction]
        } = await client.query (
            `
            INSERT INTO instructions("recipesId", steps)
            VALUES ($1, $2)
            RETURNING *
            `,
            [recipesId, steps]
        )
        return instruction
    } catch (error) {
        throw error 
    }
}

const getAllInstructions = async () => {
    try {
        const { rows }
        = await client.query(`
            SELECT * 
            FROM instructions;
        `)
        console.log(rows)
        return rows
    } catch (error) {
        throw error
    }
}


module.exports = {createInstructions, getAllInstructions}
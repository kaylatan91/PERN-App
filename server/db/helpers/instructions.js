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

const getInstructionsById = async (recipesId) => {
    try {
        const {
            rows: [instruction]
        } = await client.query(
            `
                SELECT recipes.*,
                instructions.*
                FROM recipes
                JOIN instructions 
                ON recipes."recipesId" = instructions."recipesId"
                WHERE instructions."recipesId" =${recipesId}
            `
        )
        return instruction;
    } catch (error) {
        throw error
    }
}

const updateInstruction = async (instructionsId, body) => {
    try {
        const { rows } = await client.query(
            `
            UPDATE instructions
            SET "recipesId" = '${body.recipesId}',
            steps = '{${body.steps}}'
            WHERE "instructionsId" = ${instructionsId}
            RETURNING *;
            `
        );
        return rows;
    } catch (error) {
        throw error;
    }
}

module.exports = {createInstructions, getAllInstructions, getInstructionsById, updateInstruction}
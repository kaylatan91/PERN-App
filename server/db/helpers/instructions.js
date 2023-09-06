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

const getInstructionsById = async (instructionsId) => {
    try {
        const {
            rows: [instruction]
        } = await client.query(
            `
                SELECT * 
                FROM instructions 
                WHERE "instructionsId" =${instructionsId}
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

// const deleteInstruction = async (instructionsId) => {
//     try {
//         const { rows } = await client.query(
//             `
//             DELETE FROM instructions
//             WHERE "instructionsId" = ${instructionsId}
//             RETURNING *;
//             `
//         )
//         return rows;
//     } catch (error) {
        
//     }
// }

module.exports = {createInstructions, getAllInstructions, getInstructionsById, updateInstruction}
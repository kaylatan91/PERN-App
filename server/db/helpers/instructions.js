const client = require('../client')

const createInstructions = async ({ steps }) => {
    try {
        const {
            rows: [instruction]
        } = await client.query (
            `
            INSERT INTO instructions(steps)
            VALUES ($1)
            RETURNING *
            `,
            [steps]
        )
        return instruction
    } catch (error) {
        throw error 
    }
}

module.exports = {createInstructions}
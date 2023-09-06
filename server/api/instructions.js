const express = require('express');
const router = express.Router();

const { createInstructions, getAllInstructions, getInstructionsById, updateInstruction} = require('../db/helpers/instructions');

// GET = /api/instructions - get all instructions 
router.get('/', async (req, res, next) => {
    try {
        const instructions = await getAllInstructions();
        res.send(instructions)
    } catch (error) {
        next(error)
    }
})

// GET - by Id
router.get('/:id', async (req, res, next) => {
    try {
        const instruction = await getInstructionsById(req.params.id);
        res.send(instruction);
    } catch (error) {
        next(error)
    }
})

// POST - /api/instructions - create instructions 
router.post('/', async (req, res, next) => {
    try {
        const instruction = await createInstructions(req.body)
        res.send(instruction)
    } catch (error) {
        next(error)
    }
})

// UPDATE - /api/instructions/:instructionsId - update instructions 
router.put('/:id', async (req, res, next) => {
    try {
        const instruction = await updateInstruction(req.params.id, req.body);
        res.send(instruction)
    } catch (error) {
        next(error)
    }
})

// DELETE - /api/instructions/:instructionsId - delete instructions
// router.delete('/:id', async (req, res, next) => {
//     try {
//         const instruction = await deleteInstruction(req.params.id);
//         res.send(instruction);
//     } catch (error) {
//         next(error)
//     }
// })


module.exports = router;


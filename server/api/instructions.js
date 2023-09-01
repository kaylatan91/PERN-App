const express = require('express');
const router = express.Router();

const { createInstructions, getAllInstructions } = require('../db/helpers/instructions');

// GET = /api/instructions - get all instructions 
router.get('/', async (req, res, next) => {
    try {
        const instructions = await getAllInstructions();
        res.send(instructions)
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

module.exports = router;

// http://localhost:8080/api/
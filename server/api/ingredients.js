const express = require('express');
const router = express.Router();

const { createIngredients, getAllIngredients } = require('../db/helpers/ingredients');

// GET = /api/ingredients - get all ingredients 
router.get('/', async (req, res, next) => {
    try {
        const ingredients = await getAllIngredients();
        res.send(ingredients)
    } catch (error) {
        next(error)
    }
})

// POST - /api/ingredients - create ingredients
router.post('/', async (req, res, next) => {
    try {
        const ingredient = await createIngredients(req.body)
        res.send(ingredient)
    } catch (error) {
        next(error)
    }
})

module.exports = router;
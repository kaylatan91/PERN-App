const express = require('express');
const router = express.Router();

const { createIngredients, getAllIngredients, getIngredientsById, updateIngredient } = require('../db/helpers/ingredients');

// GET = /api/ingredients - get all ingredients 
router.get('/', async (req, res, next) => {
    try {
        const ingredients = await getAllIngredients();
        res.send(ingredients);
    } catch (error) {
        next(error)
    }
})

// GET - by Id
router.get('/:id', async (req, res, next) => {
    try {
        const ingredient = await getIngredientsById(req.params.id);
        res.send(ingredient);
    } catch (error) {
        next(error)
    }
})

// POST - /api/ingredients - create a new list of ingredients
router.post('/', async (req, res, next) => {
    try {
        const ingredient = await createIngredients(req.body)
        res.send(ingredient);
    } catch (error) {
        next(error)
    }
})

// UPDATE - /api/ingredients/:ingredientsId - update ingredients list
router.put('/:id', async (req, res, next) => {
    try {
        const ingredient = await updateIngredient(req.params.id, req.body);
        res.send(ingredient);
    } catch (error) {
        next(error)
    }
})

module.exports = router;
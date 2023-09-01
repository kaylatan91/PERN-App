const express = require('express');
const router = express.Router();

const { createRecipe, getAllRecipes } = require('../db/helpers/recipes');

// GET - /api/recipes - get all recipes
router.get('/', async (req, res, next) => {
    try {
        const recipes = await getAllRecipes();
        res.send(recipes)
    } catch (error) {
        next(error)
    }
})

// POST - /api/recipes - create a new recipe
router.post('/', async (req, res, next) => {
    try {
        const recipe = await createRecipe(req.body);
        res.send(recipe);
    } catch (error) {
        next(error)
    }
});

module.exports = router;
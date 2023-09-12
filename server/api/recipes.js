const express = require('express');
const router = express.Router();

const { createRecipe, getAllRecipes, getRecipeById, updateRecipe, deleteRecipe } = require('../db/helpers/recipes');

// GET - /api/recipes - get all recipes
router.get('/', async (req, res, next) => {
    try {
        const recipes = await getAllRecipes();
        res.send(recipes);
    } catch (error) {
        next(error)
    }
});

// GET - /api/recipes/:recipesId - get recipe by Id
router.get('/:id', async (req, res, next) => {
    try {
        const recipe = await getRecipeById(req.params.id);
        res.send(recipe);
    } catch (error) {
        next(error)
    }
});

// POST - /api/recipes - create a new recipe
router.post('/', async (req, res, next) => {
    try {
        const recipe = await createRecipe(req.body);
        res.send(recipe);
    } catch (error) {
        next(error)
    }
});

// UPDATE - /api/recipes/:recipesId - update a recipe 
router.put('/:id', async (req, res, next) => {
    try {
        const recipe = await updateRecipe(req.params.id, req.body);
        res.send(recipe);
    } catch (error) {
        next(error)
    }
});

// DELETE - /api/recipes/:recipesId - delete a recipe
router.delete('/:id', async (req, res, next) => {
    try {
        const recipe = await deleteRecipe(req.params.id);
        res.send(recipe);
    } catch (error) {
        next(error)
    }
})

module.exports = router;
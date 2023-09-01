const express = require('express');
const router = express.Router();

// ROUTER: /api/recipes
router.use('/recipes', require('./recipes'));

// ROUTER: /api/ingredients
router.use('/ingredients', require('./ingredients'));

// ROUTER: /api/instructions
router.use('/instructions', require('./instructions'));

module.exports = router;
const express = require('express');
const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        res.send("OK")
    } catch (error) {
        console.log(error);
    }
})

// ROUTER: /api/users
router.use('/users', require('./users'));

// ROUTER: /api/register
router.use("/register", require('./users'))

// ROUTER: /api/login
router.use('/login', require('./users'))

// ROUTER: /api/recipes
router.use('/recipes', require('./recipes'));

// ROUTER: /api/ingredients
router.use('/ingredients', require('./ingredients'));

// ROUTER: /api/instructions
router.use('/instructions', require('./instructions'));


module.exports = router;
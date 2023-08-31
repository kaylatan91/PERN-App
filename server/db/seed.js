// THIS FILE WILL RESET YOUR DATABASE - PROCEED WITH CAUTION
const client = require('./client')

const { recipes, ingredients, instructions } = require("./seedData")
const { createRecipe } = require('./helpers/recipes')
const { createIngredients } = require('./helpers/ingredients')
const { createInstructions } = require('./helpers/instructions')


// Drop Tables for cleanliness
const dropTables = async () => {
    try {
        console.log("Starting to drop tables")
        await client.query(`
        DROP TABLE IF EXISTS recipes CASCADE;
        DROP TABLE IF EXISTS ingredients CASCADE;
        DROP TABLE IF EXISTS instructions CASCADE;
        `)
        console.log("Tables dropped!")
    } catch (error) {
        throw error
    }
}

// Create Tables because we need a place for the data to live 
const createTables = async () => {
    console.log("Building tables")
    await client.query(`
        CREATE TABLE recipes (
            "recipe_id" SERIAL PRIMARY KEY,
            recipeName TEXT,
            description TEXT,
            prepTime TEXT,
            cookTime TEXT,
            servings TEXT
        );
        CREATE TABLE ingredients (
            "ingredients_id" SERIAL PRIMARY KEY,
            ingredients TEXT [],
            measurements TEXT []
        );
        CREATE TABLE instructions (
            "instructions_id" SERIAL PRIMARY KEY,
            steps TEXT []
        );
    `)
    console.log("Tables built!")
}

// Insert mock data from seedData.js
//Create recipes 
const createInitialRecipe = async () => {
    try {
        // Looping through the "recipe" array from seedData
        for ( const recipe of recipes){
            //Insert each recipe into the table 
            await createRecipe(recipe)
        }
        console.log("created recipes")
    } catch (error) {
        throw error
    }
}

// Create ingredients 
const createInitialIngredients = async () => {
    try {
        for (const ingredient of ingredients){
            await createIngredients(ingredient)
        }
        console.log("created ingredients")
    } catch (error) {
        throw error 
    }
}

// Create instructions 
const createInitialInstructions = async () => {
    try {
        for (const instruction of instructions){
            await createInstructions(instruction)
        }
        console.log("created instructions")
    } catch (error) {
        throw error 
    }
}


// Call all my functions and 'BUILD' my database
const rebuildDb = async () => {
    try {
        // ACTUALLY connect to my local database
        client.connect()
        // Run our functions
        await dropTables()
        await createTables()

        //Generating starting data 
        await createInitialRecipe()
        await createInitialIngredients()
        await createInitialInstructions()
    } catch (error) {
        console.error(error)
    } finally {
        // Close our connection
        client.end()
    }
}

rebuildDb()
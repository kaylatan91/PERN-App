// THIS FILE WILL RESET YOUR DATABASE - PROCEED WITH CAUTION
const client = require('./client')

const { users, recipes, ingredients, instructions } = require("./seedData")
const { createRecipe } = require('./helpers/recipes')
const { createIngredients } = require('./helpers/ingredients')
const { createInstructions } = require('./helpers/instructions')
const { createUser } = require('./helpers/users')


// Drop Tables for cleanliness
const dropTables = async () => {
    try {
        console.log("Starting to drop tables")
        await client.query(`
        DROP TABLE IF EXISTS users CASCADE;
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
        CREATE TABLE users (
            "usersId" SERIAL PRIMARY KEY,
            username VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
        );
        CREATE TABLE recipes (
            "recipesId" SERIAL PRIMARY KEY,
            recipe_name VARCHAR(255),
            image VARCHAR(1000),
            description VARCHAR(255) NOT NULL,
            prep_time VARCHAR(255) NOT NULL,
            cook_time VARCHAR(255) NOT NULL,
            servings VARCHAR(255) NOT NULL
        );
        CREATE TABLE ingredients (
            "ingredientsId" SERIAL PRIMARY KEY,
            "recipesId" INTEGER REFERENCES recipes("recipesId") NOT NULL,
            ingredients TEXT [],
            measurements TEXT []
        );
        CREATE TABLE instructions (
            "instructionsId" SERIAL PRIMARY KEY,
            "recipesId" INTEGER REFERENCES recipes("recipesId") NOT NULL,
            steps TEXT []
        );
    `)
    console.log("Tables built!")
}

// Insert mock data from seedData.js

//Create users
const createInitialUser = async () => {
    try {
        for (const user of users) {
            await createUser(user)
        }
        console.log("createed user")
    } catch (error) {
        throw error
    }
}


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
        await createInitialUser()
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
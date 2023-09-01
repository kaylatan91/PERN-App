//Make some arrays of objects based on the schema design I created


// Recipes
const recipes = [
    { recipeName: 'Easy Overnight Oats', 
    description: 'Insert description here.', 
    prepTime: '5 mins', 
    cookTime: '0 mins', 
    servings: '1'},
    { recipeName: 'Cold Peanut Noodle Salad', 
    description: 'Insert description here', 
    prepTime: '20', 
    cookTime: '10', 
    servings: '4' },
    { recipeName: 'Thai Inspired Salmon Coconut Curry', 
    description: 'Insert description here.', 
    prepTime: '15', 
    cookTime: '20', 
    servings: '4'}
]

// Ingredients
const ingredients = [
    { recipesId: 1,
    ingredients: ['Rolled oats'],
    measurements: ['1/2 cup']
    },
    { recipesId: 2,
    ingredients: ['Peanut butter'],
    measurements: ['3 Tbsp']
    },
    { recipesId: 3,
    ingredients: ['Fresh Salmon'],
    measurements: ['1 pound']
    }

]

// Instructions 
const instructions = [
    { recipesId: 1,
    steps: [
    'Step 1: Insert description here'],
    },
    { recipesId: 2,
    steps: [
    'Step 1: Insert description here'],
    },
    { recipesId: 3,
    steps: [
    'Step 1: Insert description here'],
    }
]

module.exports = { recipes, ingredients, instructions }
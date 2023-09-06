//Make some arrays of objects based on the schema design I created


// Recipes
const recipes = [
    { recipe_name: 'Easy Overnight Oats', 
    description: 'Insert description here.', 
    prep_time: '5 mins', 
    cook_time: '0 mins', 
    servings: '1'},
    { recipe_name: 'Cold Peanut Noodle Salad', 
    description: 'Insert description here', 
    prep_time: '20', 
    cook_time: '10', 
    servings: '4' },
    { recipe_name: 'Thai Inspired Salmon Coconut Curry', 
    description: 'Insert description here.', 
    prep_time: '15', 
    cook_time: '20', 
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
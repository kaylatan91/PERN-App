//Make some arrays of objects based on the schema design I created


// Recipes
const recipes = [
     { recipe_name: 'Easy Overnight Oats', 
    image: 'https://thefoodiephysician.com/wp-content/uploads/2023/05/fullsizeoutput_33e9.jpeg',
    description: 'This overnight oats recipe is a great and easy way to start off your day. You can prepare these in advance and it will last all week!', 
    prep_time: 'Prep Time: 5 mins', 
    cook_time: 'Cook Time: 0 mins', 
    servings: 'Servings: 1'},
    { recipe_name: 'Cold Peanut Noodle Salad',
    image: 'https://www.budgetbytes.com/wp-content/uploads/2019/06/Portion-Cold-Peanut-Noodle-Salad.jpg',
    description: 'This Cold Peanut Noodle Salad is the perfect meal of the summer! There is no need to reheat this dish since its flavors are so fresh, it will cool you down.', 
    prep_time: 'Prep Time: 20 mins', 
    cook_time: 'Cook Time: 10 mins', 
    servings: 'Servings: 4' },
    { recipe_name: 'Thai Inspired Salmon Coconut Curry',
    image: 'https://images.themodernproper.com/billowy-turkey/production/posts/2022/EasyOnePotCurrySalmon_Shot4_86.jpg?w=960&h=960&q=82&fm=jpg&fit=crop&dm=1664828670&s=762397fa9de335a847c59814228fa8db',
    description: 'This easy Thai-inspired salmon coconut curry has a tender pan-seared salmon in a creamy red curry coconut milk sauce. Giving you lots of flavor and comfort!', 
    prep_time: 'Prep Time: 15 mins', 
    cook_time: 'Cook Time: 20 mins', 
    servings: 'Servings: 4'}
]

// Ingredients
const ingredients = [
    { recipesId: 1,
    ingredients: ['Rolled oats', 'Milk of choice', 'Non-fat Greek yogurt', 'Chia Seeds (optional)', 'Sweetener (Honey or Maple Syrup)', 'Vanilla extract', 'Cinnamon (optional)'],
    measurements: ['1/2 cup', '2/3 cup', '1/4 cup', '1 Tbsp', '1 Tbsp', '1/4 tsp', 'To taste']
    },
    { recipesId: 2,
    ingredients: ['Peanut butter','Brown sugar', 'Minced garlic', 'Grated Fresh Ginger', 'Lime', 'Soy sauce', 'Neutral oil', 'Noodles or Spaghetti of choice', 'Red cabbage', 'Carrots', 'Cilantro', 'Green onions (sliced)', 'Chopped peanuts'],
    measurements: ['3 Tbsp', '1 Tbsp', '1 clove', '1/2 tsp', '1 juiced', '2 tsp', '1/4 cup', '8 oz', '4 cups', '2', '1/2 bunch', '4', '1/2 cup']
    },
    { recipesId: 3,
    ingredients: ['Fresh Salmon', 'Salt & Pepper', 'Olive Oil', 'Butter', 'Onion (chopped)', 'Minced garlic', 'Thai Red curry paste', 'Fish sauce (optional)', 'Full-fat Coconut milk', 'Brown Sugar', 'Broccoli', 'Peppers', 'Lime juice', 'Cilantro'],
    measurements: ['1 pound', 'To taste', '1 Tbsp', '1 Tbsp', '1/2', '2 cloves', '2 heaping tablespoons', '1/2 tsp', '1 can (13.5 oz)', '1/2 tsp', '1 cup', '1 cup', '1 tsp', 'To taste']
    }

]

// Instructions 
const instructions = [
    { recipesId: 1,
    steps: [
    'Step 1: Place all ingredients into a large glass container and mix until combined', 'Step 2: Cover the container and place in the refrigerator for at least 2 hours or overnight. Toppings like granola and fruit can be added before serving.', 'Step 3: Uncover and enjoy the next day!'],
    },
    { recipesId: 2,
    steps: [
    'Step 1: To make the peanut lime dressing, combine peanut butter, brown sugar, minced garlic, ginger, lime juice, soy sauce, and oil in a bowl. Whisk until smooth and set the dressing aside.', 'Step 2: Bring a pot of water to a boil for the noodles. Cook noodles based on the instructions given on the box. Drain in a colander and rinse briefly with cold water to cool it off. Let the noodles drain well.', 'Step 3: Meanwhile, shred the cabbage and carrots as finely as possible. Roughly chop the cilantro and peanuts. Slice the green onion', 'Step 4: Combine the cooled and well drained noodles in a large bowl with the cabbage, carrots, cilantro, green onion, and peanuts. Toss the salad until the ingredients are evenly combined.', 'Step 5: Serve the salad and peanut lime dressing together and enjoy!'],
    },
    { recipesId: 3,
    steps: [
    'Step 1: Cut the salmon into 4 equal pieces. Pat both sides dry with a paper towel and season with salt and pepper', 'Step 2: Add the oil and butter to a pan over medium-high heat. Let the pan heat up for a few minutes.', 'Step 3: Cook the salmon, skin-side down, for 5 minutes. Flip and cook for another 2-3 minutes (the fish should almost be done).', 'Step 4: Take the salmon out of the pan and transfer it to a plate. Spoon out some of the oil out of the skillet so you have about a tablespoon of it left in there.', 'Step 5: Add the onion to the skillet and sauté for about 3 minutes until it looks slight browned. Then stir in the garlic and curry paste and cook for 1 minute.', 'Step 6: Add in the fish sauce, coconut milk, sugar, and vegetables. Let it gently bubble for about 5 to 10 minutes.', 'Step 7: Stir in lime juice, then add the fish back to the pan. Let it warm through for a couple of minutes and season with more salt and pepper as needed.', 'Step 8: Sprinkle with cilantro and serve immediately.'],
    }
]

module.exports = { recipes, ingredients, instructions }
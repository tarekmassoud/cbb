export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  ingredients: string[];
  instructions: string[];
  featured: boolean;
}

export const recipes: Recipe[] = [
  {
    id: "1",
    title: "Classic Homemade Pasta",
    description: "Fresh pasta made from scratch with a rich tomato basil sauce that'll transport you straight to Italy.",
    image: "/src/assets/recipe-1.jpg",
    prepTime: "30 mins",
    cookTime: "20 mins",
    servings: 4,
    ingredients: [
      "2 cups all-purpose flour",
      "3 large eggs",
      "1 tbsp olive oil",
      "1 tsp salt",
      "4 cups crushed tomatoes",
      "Fresh basil leaves",
      "3 cloves garlic",
      "Parmesan cheese"
    ],
    instructions: [
      "Make a well in the flour and add eggs, oil, and salt",
      "Mix and knead the dough for 10 minutes until smooth",
      "Let rest for 30 minutes covered",
      "Roll out and cut into desired pasta shape",
      "Boil in salted water for 3-4 minutes",
      "Prepare sauce by sautéing garlic, adding tomatoes and basil",
      "Toss pasta with sauce and top with fresh parmesan"
    ],
    featured: true
  },
  {
    id: "2",
    title: "Herb-Crusted Salmon",
    description: "Perfectly grilled salmon with a crispy herb crust, served with seasonal roasted vegetables.",
    image: "/src/assets/recipe-2.jpg",
    prepTime: "15 mins",
    cookTime: "25 mins",
    servings: 4,
    ingredients: [
      "4 salmon fillets",
      "2 tbsp fresh dill",
      "2 tbsp fresh parsley",
      "1 tbsp lemon zest",
      "2 cloves garlic, minced",
      "Mixed vegetables (carrots, bell peppers, zucchini)",
      "Olive oil",
      "Salt and pepper"
    ],
    instructions: [
      "Preheat oven to 400°F (200°C)",
      "Mix herbs, lemon zest, and garlic with olive oil",
      "Season salmon and coat with herb mixture",
      "Toss vegetables with olive oil, salt, and pepper",
      "Arrange vegetables on a baking sheet",
      "Place salmon on top of vegetables",
      "Bake for 20-25 minutes until salmon is cooked through"
    ],
    featured: true
  },
  {
    id: "3",
    title: "Molten Chocolate Lava Cake",
    description: "Decadent chocolate cake with a gooey molten center, served with vanilla ice cream.",
    image: "/src/assets/recipe-3.jpg",
    prepTime: "15 mins",
    cookTime: "12 mins",
    servings: 4,
    ingredients: [
      "6 oz dark chocolate",
      "6 tbsp butter",
      "2 large eggs",
      "2 egg yolks",
      "1/4 cup sugar",
      "2 tbsp flour",
      "Vanilla ice cream for serving",
      "Powdered sugar for dusting"
    ],
    instructions: [
      "Preheat oven to 425°F (220°C)",
      "Butter and flour four ramekins",
      "Melt chocolate and butter together",
      "Whisk eggs, yolks, and sugar until thick",
      "Fold in melted chocolate and flour",
      "Divide batter among ramekins",
      "Bake for 12-14 minutes until edges are firm but center is soft",
      "Let cool for 1 minute, then invert onto plates",
      "Serve immediately with ice cream"
    ],
    featured: true
  },
  {
    id: "4",
    title: "Mediterranean Garden Salad",
    description: "Fresh, vibrant salad packed with colorful vegetables and a tangy lemon vinaigrette.",
    image: "/src/assets/recipe-4.jpg",
    prepTime: "20 mins",
    cookTime: "0 mins",
    servings: 4,
    ingredients: [
      "Mixed salad greens",
      "Cherry tomatoes, halved",
      "Cucumber, diced",
      "Red onion, thinly sliced",
      "Kalamata olives",
      "Feta cheese, crumbled",
      "1/4 cup olive oil",
      "2 tbsp lemon juice",
      "1 tsp oregano"
    ],
    instructions: [
      "Wash and dry all vegetables thoroughly",
      "Chop vegetables into bite-sized pieces",
      "Combine greens, tomatoes, cucumber, and onion in a large bowl",
      "Whisk together olive oil, lemon juice, and oregano",
      "Toss salad with dressing",
      "Top with olives and feta cheese",
      "Serve immediately"
    ],
    featured: true
  },
  {
    id: "5",
    title: "Artisan Sourdough Bread",
    description: "Crusty, tangy sourdough bread with a perfect chewy interior and golden crust.",
    image: "/src/assets/recipe-5.jpg",
    prepTime: "24 hours (includes fermentation)",
    cookTime: "45 mins",
    servings: 8,
    ingredients: [
      "3 cups bread flour",
      "1 1/2 cups sourdough starter",
      "1 1/4 cups water",
      "2 tsp salt"
    ],
    instructions: [
      "Mix flour, starter, and water until combined",
      "Let rest for 30 minutes (autolyse)",
      "Add salt and knead for 5 minutes",
      "Let dough rise for 4-6 hours with folds every hour",
      "Shape into a round loaf",
      "Place in banneton basket and refrigerate overnight",
      "Preheat oven to 450°F with Dutch oven inside",
      "Score the top and bake covered for 30 minutes",
      "Remove lid and bake 15 more minutes until golden"
    ],
    featured: true
  },
  {
    id: "6",
    title: "Thai Red Curry",
    description: "Aromatic and spicy Thai curry with vegetables and your choice of protein in coconut milk.",
    image: "/src/assets/recipe-6.jpg",
    prepTime: "15 mins",
    cookTime: "25 mins",
    servings: 4,
    ingredients: [
      "2 tbsp red curry paste",
      "1 can coconut milk",
      "2 cups mixed vegetables",
      "1 lb chicken or tofu",
      "2 tbsp fish sauce",
      "1 tbsp brown sugar",
      "Thai basil leaves",
      "Lime wedges"
    ],
    instructions: [
      "Heat oil in a large pan",
      "Fry curry paste until fragrant",
      "Add coconut milk and bring to simmer",
      "Add protein and cook until done",
      "Add vegetables and cook until tender",
      "Season with fish sauce and sugar",
      "Garnish with Thai basil",
      "Serve with jasmine rice and lime"
    ],
    featured: false
  },
  {
    id: "7",
    title: "Ultimate Gourmet Burger",
    description: "Juicy beef burger with all the fixings on a brioche bun, served with crispy fries.",
    image: "/src/assets/recipe-7.jpg",
    prepTime: "20 mins",
    cookTime: "15 mins",
    servings: 4,
    ingredients: [
      "1.5 lb ground beef",
      "4 brioche buns",
      "4 slices cheddar cheese",
      "Lettuce, tomato, onion",
      "Pickles",
      "Special sauce",
      "4 large potatoes for fries",
      "Salt and pepper"
    ],
    instructions: [
      "Form beef into 4 patties, season generously",
      "Cut potatoes into fries and soak in water",
      "Heat grill or pan to high heat",
      "Cook burgers 4-5 minutes per side",
      "Add cheese in last minute",
      "Fry potatoes until golden and crispy",
      "Toast buns on grill",
      "Assemble burgers with toppings and sauce",
      "Serve hot with fries"
    ],
    featured: false
  },
  {
    id: "8",
    title: "Classic Margherita Pizza",
    description: "Traditional Italian pizza with fresh mozzarella, tomatoes, and basil on a crispy crust.",
    image: "/src/assets/recipe-8.jpg",
    prepTime: "2 hours (includes rising)",
    cookTime: "15 mins",
    servings: 4,
    ingredients: [
      "Pizza dough",
      "1 cup tomato sauce",
      "8 oz fresh mozzarella",
      "Fresh basil leaves",
      "Olive oil",
      "Salt",
      "Flour for dusting"
    ],
    instructions: [
      "Preheat oven to 475°F with pizza stone",
      "Roll out dough on floured surface",
      "Spread tomato sauce leaving 1-inch border",
      "Tear mozzarella and distribute evenly",
      "Drizzle with olive oil",
      "Transfer to hot pizza stone",
      "Bake 12-15 minutes until crust is golden",
      "Top with fresh basil leaves",
      "Slice and serve immediately"
    ],
    featured: false
  },
  {
    id: "9",
    title: "Fluffy Buttermilk Pancakes",
    description: "Light and fluffy pancakes perfect for weekend breakfast, topped with berries and maple syrup.",
    image: "/src/assets/recipe-9.jpg",
    prepTime: "10 mins",
    cookTime: "20 mins",
    servings: 4,
    ingredients: [
      "2 cups all-purpose flour",
      "2 tbsp sugar",
      "2 tsp baking powder",
      "1 tsp baking soda",
      "1/2 tsp salt",
      "2 cups buttermilk",
      "2 eggs",
      "1/4 cup melted butter",
      "Fresh berries and maple syrup"
    ],
    instructions: [
      "Mix dry ingredients in a large bowl",
      "Whisk together buttermilk, eggs, and melted butter",
      "Pour wet ingredients into dry ingredients",
      "Mix until just combined (lumps are okay)",
      "Heat griddle to medium heat",
      "Pour 1/4 cup batter for each pancake",
      "Cook until bubbles form, then flip",
      "Cook until golden on both sides",
      "Serve hot with berries and syrup"
    ],
    featured: false
  },
  {
    id: "10",
    title: "Mushroom Risotto",
    description: "Creamy Italian rice dish with earthy mushrooms and parmesan cheese.",
    image: "/src/assets/recipe-10.jpg",
    prepTime: "15 mins",
    cookTime: "30 mins",
    servings: 4,
    ingredients: [
      "1.5 cups arborio rice",
      "1 lb mixed mushrooms",
      "6 cups chicken or vegetable broth",
      "1 cup white wine",
      "1 onion, finely chopped",
      "3 cloves garlic",
      "1 cup parmesan cheese",
      "3 tbsp butter",
      "Fresh parsley"
    ],
    instructions: [
      "Heat broth in a separate pot and keep warm",
      "Sauté mushrooms in butter until golden, set aside",
      "In same pot, sauté onion and garlic until soft",
      "Add rice and toast for 2 minutes",
      "Add wine and stir until absorbed",
      "Add broth one ladle at a time, stirring constantly",
      "Continue until rice is creamy and al dente (about 20 minutes)",
      "Stir in mushrooms, butter, and parmesan",
      "Garnish with parsley and serve immediately"
    ],
    featured: false
  }
];

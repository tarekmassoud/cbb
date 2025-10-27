import recipe1 from "@/assets/recipe-1.jpg";
import recipe2 from "@/assets/recipe-2.jpg";
import recipe3 from "@/assets/recipe-3.jpg";
import recipe4 from "@/assets/recipe-4.jpg";
import recipe5 from "@/assets/recipe-5.jpg";
import recipe6 from "@/assets/recipe-6.jpg";
import recipe7 from "@/assets/recipe-7.jpg";
import recipe8 from "@/assets/recipe-8.jpg";
import recipe9 from "@/assets/recipe-9.jpg";
import recipe10 from "@/assets/recipe-10.jpg";

export interface Recipe {
  id: string;
  title: string;
  slug: string;
  short_description: string;
  description: string;
  image: string;
  prepTime: number;
  cookTime: number;
  totalTime: number;
  servings: string;
  difficulty: "Easy" | "Medium" | "Advanced";
  cuisine: string;
  course: "Breakfast" | "Main" | "Dessert" | "Salad & Side" | "Bread" | "Sauce";
  tags: string[];
  ingredients: string[];
  instructions: string[];
  video_url?: string;
  featured: boolean;
  rating?: number;
  date_published: string;
}

export const recipes: Recipe[] = [
  {
    id: "1",
    title: "Mehcheh Coussa",
    slug: "classic-homemade-pasta",
    short_description: "Stuffed zucchinis cooked in tomato sauce.",
    description: "Zucchinis stuffed with meat and rice, cooked in tomato sauce.",
    image: "/src/assets/mehche_coussa.jpg",
    prepTime: 30,
    cookTime: 20,
    totalTime: 50,
    servings: "4",
    difficulty: "Medium",
    cuisine: "Lebanese",
    course: "Main",
    tags: ["coussa", "mehche", "zucchinis", "كوسة"],
    ingredients: [
      "10 to 12 small Lebanese zucchinis",
      "Sea salt & black pepper",
      "1 medium can of tomato sauce",
      "1 cup water",
      "100g short-grain rice",
      "250g minced lamb or beef",
    ],
    instructions: [
      "Cut off the zucchini stalks. Using a vegetable corer, carefully hollow out the zucchinis from the stalk end, being careful not to pierce the bottoms",
      "Wash the hollowed zucchinis thoroughly and set aside to drain",
      "In a bowl, combine the rice and minced meat. Season with salt and pepper and mix well",
      "Fill each zucchini with the rice and meat mixture, leaving about 1 cm of space at the top to allow for expansion as the rice cooks",
      "Place the stuffed zucchinis vertically (stem side up) in a large pot. Add the tomato sauce, water, 1 teaspoon of salt, and ½ tsp of black pepper. Bring to a boil over medium heat",
      "Reduce the heat to low and simmer gently for about 50min or until the zucchinis are tender and the sauce has thickened"
    ],
    video_url: "https://www.instagram.com/p/DKSuM1Fo3qC/",
    featured: true,
    rating: 4.8,
    date_published: "2025-05-31"
  },
  {
    id: "2",
    title: "Herb-Crusted Salmon",
    slug: "herb-crusted-salmon",
    short_description: "Perfectly grilled salmon with a crispy herb crust.",
    description: "Perfectly grilled salmon with a crispy herb crust, served with seasonal roasted vegetables.",
    image: recipe2,
    prepTime: 15,
    cookTime: 25,
    totalTime: 40,
    servings: "4",
    difficulty: "Easy",
    cuisine: "Mediterranean",
    course: "Main",
    tags: ["seafood", "healthy", "fish"],
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
    video_url: "https://instagram.com",
    featured: true,
    rating: 4.9,
    date_published: "2024-02-01"
  },
  {
    id: "3",
    title: "Molten Chocolate Lava Cake",
    slug: "molten-chocolate-lava-cake",
    short_description: "Decadent chocolate cake with a gooey molten center.",
    description: "Decadent chocolate cake with a gooey molten center, served with vanilla ice cream.",
    image: recipe3,
    prepTime: 15,
    cookTime: 12,
    totalTime: 27,
    servings: "4",
    difficulty: "Medium",
    cuisine: "French",
    course: "Dessert",
    tags: ["chocolate", "dessert", "fancy"],
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
    video_url: "https://instagram.com",
    featured: true,
    rating: 5.0,
    date_published: "2024-01-28"
  },
  {
    id: "4",
    title: "Mediterranean Garden Salad",
    slug: "mediterranean-garden-salad",
    short_description: "Fresh, vibrant salad packed with colorful vegetables.",
    description: "Fresh, vibrant salad packed with colorful vegetables and a tangy lemon vinaigrette.",
    image: recipe4,
    prepTime: 20,
    cookTime: 0,
    totalTime: 20,
    servings: "4",
    difficulty: "Easy",
    cuisine: "Mediterranean",
    course: "Salad & Side",
    tags: ["salad", "healthy", "vegan", "gluten-free"],
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
    video_url: "https://instagram.com",
    featured: true,
    rating: 4.7,
    date_published: "2024-02-10"
  },
  {
    id: "5",
    title: "Artisan Sourdough Bread",
    slug: "artisan-sourdough-bread",
    short_description: "Crusty, tangy sourdough bread with a perfect chewy interior.",
    description: "Crusty, tangy sourdough bread with a perfect chewy interior and golden crust.",
    image: recipe5,
    prepTime: 1440,
    cookTime: 45,
    totalTime: 1485,
    servings: "8",
    difficulty: "Advanced",
    cuisine: "American",
    course: "Bread",
    tags: ["bread", "sourdough", "artisan"],
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
    video_url: "https://instagram.com",
    featured: true,
    rating: 4.9,
    date_published: "2024-01-20"
  },
  {
    id: "6",
    title: "Lebanese Fattoush Salad",
    slug: "lebanese-fattoush-salad",
    short_description: "Crispy pita bread salad with fresh vegetables and sumac.",
    description: "Traditional Lebanese salad with crispy pita chips, fresh vegetables, and tangy sumac dressing.",
    image: recipe6,
    prepTime: 15,
    cookTime: 10,
    totalTime: 25,
    servings: "4",
    difficulty: "Easy",
    cuisine: "Lebanese",
    course: "Salad & Side",
    tags: ["lebanese", "salad", "vegetarian", "middle-eastern"],
    ingredients: [
      "2 pita breads, cut into squares",
      "4 cups mixed lettuce",
      "2 tomatoes, diced",
      "1 cucumber, diced",
      "4 radishes, sliced",
      "2 tbsp sumac",
      "1/4 cup olive oil",
      "2 tbsp lemon juice",
      "Fresh mint leaves"
    ],
    instructions: [
      "Toast pita bread until crispy",
      "Chop all vegetables into bite-sized pieces",
      "Combine lettuce, tomatoes, cucumber, and radishes",
      "Make dressing with olive oil, lemon juice, and sumac",
      "Add crispy pita pieces to salad",
      "Toss with dressing",
      "Garnish with fresh mint and serve"
    ],
    video_url: "https://instagram.com",
    featured: false,
    rating: 4.8,
    date_published: "2024-02-15"
  },
  {
    id: "7",
    title: "Shakshuka",
    slug: "shakshuka",
    short_description: "Middle Eastern poached eggs in spicy tomato sauce.",
    description: "Traditional Middle Eastern breakfast with eggs poached in a flavorful tomato and pepper sauce.",
    image: recipe7,
    prepTime: 10,
    cookTime: 25,
    totalTime: 35,
    servings: "4",
    difficulty: "Easy",
    cuisine: "Middle Eastern",
    course: "Breakfast",
    tags: ["eggs", "breakfast", "middle-eastern", "vegetarian"],
    ingredients: [
      "6 eggs",
      "1 can crushed tomatoes",
      "2 bell peppers, diced",
      "1 onion, diced",
      "3 cloves garlic",
      "2 tsp paprika",
      "1 tsp cumin",
      "Fresh parsley",
      "Feta cheese"
    ],
    instructions: [
      "Sauté onions and peppers until soft",
      "Add garlic and spices, cook until fragrant",
      "Add crushed tomatoes and simmer for 10 minutes",
      "Create wells in the sauce for the eggs",
      "Crack eggs into the wells",
      "Cover and cook until eggs are set",
      "Garnish with parsley and feta",
      "Serve with crusty bread"
    ],
    video_url: "https://instagram.com",
    featured: false,
    rating: 4.9,
    date_published: "2024-02-05"
  },
  {
    id: "8",
    title: "Manakish Za'atar",
    slug: "manakish-zaatar",
    short_description: "Lebanese flatbread topped with za'atar and olive oil.",
    description: "Traditional Lebanese breakfast flatbread with za'atar spice blend and olive oil.",
    image: recipe8,
    prepTime: 90,
    cookTime: 15,
    totalTime: 105,
    servings: "6",
    difficulty: "Medium",
    cuisine: "Lebanese",
    course: "Breakfast",
    tags: ["bread", "lebanese", "breakfast", "vegetarian"],
    ingredients: [
      "2 cups all-purpose flour",
      "1 tsp instant yeast",
      "1 tsp sugar",
      "1 tsp salt",
      "3/4 cup warm water",
      "1/2 cup za'atar",
      "1/2 cup olive oil"
    ],
    instructions: [
      "Mix flour, yeast, sugar, and salt",
      "Add warm water and knead for 10 minutes",
      "Let dough rise for 1 hour",
      "Divide into 6 portions and roll out",
      "Mix za'atar with olive oil",
      "Spread mixture on each flatbread",
      "Bake at 450°F for 10-15 minutes",
      "Serve warm"
    ],
    video_url: "https://instagram.com",
    featured: false,
    rating: 4.8,
    date_published: "2024-01-25"
  },
  {
    id: "9",
    title: "Tahini Sauce",
    slug: "tahini-sauce",
    short_description: "Creamy Middle Eastern tahini sauce perfect for everything.",
    description: "Versatile tahini sauce that pairs perfectly with falafel, shawarma, or as a salad dressing.",
    image: recipe9,
    prepTime: 5,
    cookTime: 0,
    totalTime: 5,
    servings: "8",
    difficulty: "Easy",
    cuisine: "Middle Eastern",
    course: "Sauce",
    tags: ["sauce", "condiment", "vegan", "gluten-free"],
    ingredients: [
      "1 cup tahini paste",
      "1/2 cup lemon juice",
      "2 cloves garlic, minced",
      "1 tsp salt",
      "1/2 cup cold water",
      "Fresh parsley for garnish"
    ],
    instructions: [
      "Combine tahini and lemon juice in a bowl",
      "Mix will thicken at first",
      "Add minced garlic and salt",
      "Gradually add cold water until creamy",
      "Adjust consistency with more water if needed",
      "Taste and adjust seasoning",
      "Garnish with parsley and serve"
    ],
    video_url: "https://instagram.com",
    featured: false,
    rating: 4.7,
    date_published: "2024-02-12"
  },
  {
    id: "10",
    title: "Baklava",
    slug: "baklava",
    short_description: "Sweet, flaky pastry layered with nuts and honey syrup.",
    description: "Traditional Middle Eastern dessert with layers of phyllo dough, nuts, and sweet honey syrup.",
    image: recipe10,
    prepTime: 45,
    cookTime: 60,
    totalTime: 105,
    servings: "24",
    difficulty: "Advanced",
    cuisine: "Middle Eastern",
    course: "Dessert",
    tags: ["dessert", "pastry", "middle-eastern", "sweet"],
    ingredients: [
      "1 lb phyllo dough",
      "2 cups mixed nuts (walnuts, pistachios)",
      "1 cup melted butter",
      "1 cup sugar",
      "1 cup water",
      "1/2 cup honey",
      "1 tsp cinnamon",
      "Lemon juice"
    ],
    instructions: [
      "Chop nuts and mix with cinnamon",
      "Brush baking pan with butter",
      "Layer 8 sheets of phyllo, brushing each with butter",
      "Add a layer of nuts",
      "Repeat layers until ingredients are used",
      "Cut into diamond shapes before baking",
      "Bake at 350°F for 50 minutes until golden",
      "Make syrup with sugar, water, honey, and lemon",
      "Pour hot syrup over cooled baklava"
    ],
    video_url: "https://instagram.com",
    featured: false,
    rating: 5.0,
    date_published: "2024-01-30"
  },
  {
    id: "11",
    title: "Tabbouleh",
    slug: "tabbouleh",
    short_description: "Fresh Lebanese parsley salad with bulgur wheat.",
    description: "Refreshing Lebanese salad made with loads of fresh parsley, mint, tomatoes, and bulgur wheat.",
    image: recipe1,
    prepTime: 20,
    cookTime: 0,
    totalTime: 20,
    servings: "6",
    difficulty: "Easy",
    cuisine: "Lebanese",
    course: "Salad & Side",
    tags: ["salad", "lebanese", "vegetarian", "healthy"],
    ingredients: [
      "3 cups fresh parsley, finely chopped",
      "1/2 cup fresh mint, chopped",
      "1/4 cup bulgur wheat",
      "4 tomatoes, diced",
      "4 green onions, chopped",
      "1/4 cup lemon juice",
      "1/4 cup olive oil",
      "Salt to taste"
    ],
    instructions: [
      "Soak bulgur in water for 15 minutes, then drain",
      "Finely chop parsley and mint",
      "Dice tomatoes and chop green onions",
      "Combine all vegetables and bulgur",
      "Make dressing with lemon juice, olive oil, and salt",
      "Toss salad with dressing",
      "Chill before serving"
    ],
    video_url: "https://instagram.com",
    featured: false,
    rating: 4.8,
    date_published: "2024-02-18"
  },
  {
    id: "12",
    title: "Hummus",
    slug: "hummus",
    short_description: "Creamy chickpea dip with tahini and lemon.",
    description: "Classic Middle Eastern chickpea dip made smooth and creamy with tahini, lemon, and garlic.",
    image: recipe2,
    prepTime: 10,
    cookTime: 0,
    totalTime: 10,
    servings: "8",
    difficulty: "Easy",
    cuisine: "Middle Eastern",
    course: "Sauce",
    tags: ["dip", "vegan", "gluten-free", "middle-eastern"],
    ingredients: [
      "2 cups cooked chickpeas",
      "1/2 cup tahini",
      "1/4 cup lemon juice",
      "2 cloves garlic",
      "1 tsp cumin",
      "1/4 cup ice water",
      "2 tbsp olive oil",
      "Paprika for garnish"
    ],
    instructions: [
      "Drain and rinse chickpeas",
      "Add chickpeas, tahini, lemon juice, and garlic to food processor",
      "Blend until smooth",
      "Add ice water gradually while blending",
      "Add cumin and salt",
      "Blend until creamy and fluffy",
      "Serve drizzled with olive oil and paprika"
    ],
    video_url: "https://instagram.com",
    featured: false,
    rating: 4.9,
    date_published: "2024-02-08"
  }
];

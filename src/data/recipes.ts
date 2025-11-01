import recipe1 from "@/assets/mehche_coussa.jpg";
import recipe2 from "@/assets/sayyadiyeh.jpg";
import recipe3 from "@/assets/cooked_artichokes.jpg";
import recipe4 from "@/assets/Roast_beef.jpg";
import recipe5 from "@/assets/Chocolate_and_red_berries_cupcakes.jpg";
import recipe6 from "@/assets/small_japanese_pain_au_lait.jpg";
import recipe7 from "@/assets/Loubiyeh_bi_zeit.jpg";
import recipe8 from "@/assets/kebbit_batata.jpg";
import recipe9 from "@/assets/maple_glazed_walnut_and_sugar_bun.jpg";
import recipe10 from "@/assets/pear_and_ricotta_tart.jpg";
import recipe11 from "@/assets/chocolate_and_whisky_fingers.jpg";

export interface RecipeSection {
  title?: string;
  items: string[];
}

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
  keywords?: string[];
  ingredients: string[] | RecipeSection[];
  instructions: string[] | RecipeSection[];
  video_url?: string;
  featured: boolean;
  rating?: number;
  date_published: string;
}

export const recipes: Recipe[] = [
  {
    id: "1",
    title: "Mehcheh Coussa",
    slug: "mehcheh-coussa",
    short_description: "Stuffed zucchinis cooked in tomato sauce.",
    description: "Zucchinis stuffed with meat and rice, cooked in tomato sauce.",
    image: recipe1,
    prepTime: 30,
    cookTime: 20,
    totalTime: 50,
    servings: "4",
    difficulty: "Medium",
    cuisine: "Lebanese",
    course: "Main",
    tags: ["coussa", "mehche", "zucchinis"],
    keywords: ["كوسة"],
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
    title: "Sayyadiyeh",
    slug: "sayyadiyeh",
    short_description: "Perfectly cooked white fish with marinated rice.",
    description: "Perfectly cooked white fish served with marinated rice and lemon.",
    image: recipe2,
    prepTime: 15,
    cookTime: 25,
    totalTime: 40,
    servings: "4",
    difficulty: "Advanced",
    cuisine: "Lebanese",
    course: "Main",
    tags: ["seafood", "healthy", "fish"],
    keywords: ["صيادية"],
    ingredients: [
      "1.5 lb whole white fish",
      "2 tbsp olive oil",
      "3–4 large onions, thinly sliced",
      "1 tsp cumin powder",
      "1/2 tsp coriander powder",
      "1/2 tsp cinnamon powder",
      "1 1/2 tsp salt & black pepper",
      "1 cinnamon stick",
      "2 bay (laurier) leaves",
      "2 cups basmati rice, rinsed",
      "1 1/2tsp cumin powder",
      "1 1/2tsp coriander powder",
      "1/2 tsp cinnamon powder",
      "1 1/2 tsp salt",
      "1/2 tsp black pepper",
      "1 tbsp corn starch",
      "Toasted pine nuts",
      "Lemon slices (to place around the platter)",
      "Lemon rind or zest (for sprinkling on top)"
    ],
    instructions: [
      "Preheat oven to (200°C)",
      "Season the whole fish (inside and out) with salt and pepper",
      "Place on a baking tray and roast for 20–25 minutes, until the fish is cooked through and flakes easily",
      "Once cool enough to handle: Carefully remove the head, tail, and skin, and set them aside for the broth. Gently flake the meat into large chunks and set aside",
      "In a large pot, heat olive oil over medium heat",
      "Add the sliced onions and sauté until deeply browned and caramelized, stirring often (this gives Sayadieh its rich flavor and color)",
      "Add 1 cup of water, then using a hand blender, blend the onions into a rough purée",
      "Return to pot, and add: Roasted fish head, tail, and skin,4 cups water,Cinnamon stick and bay leaves, spices (cumin, coriander, cinnamon, salt, black pepper), Simmer gently for 20–30 minutes",
      "Pour the broth through a colander or fine mesh strainer into a bowl, pressing well to extract maximum flavor (discard solids)",
      "In a pot, combine the drained rice with all the rice spices (cumin, coriander, cinnamon, salt, pepper).Pour in 4 cups of the strained broth",
      "Bring to a boil, then cover and reduce to low. Cook for 15–20 minutes, or until broth is fully absorbed",
      "Meanwhile prepare the sauce",
      "1 cup of broth and 1 tbsp corn starch dissolved in a bit of broth, boil until thickened set aside",
      "Transfer the rice to a large serving platter",
      "Top with chunks of roasted fish",
      "Garnish with toasted pine nuts,lemon slices all around the platter and a sprinkle of lemon zest over the top"
    ],
    video_url: "https://www.instagram.com/p/DPkzhYxCCRY/",
    featured: true,
    rating: 4.9,
    date_published: "2025-10-10"
  },
  {
    id: "3",
    title: "Cooked Artichokes",
    slug: "cooked-artichokes",
    short_description: "Cooked artichokes Lebanese mezze",
    description: "Cooked artichokes served with a lemon, olive oil and garlic sauce",
    image: recipe3,
    prepTime: 15,
    cookTime: 12,
    totalTime: 27,
    servings: "4",
    difficulty: "Easy",
    cuisine: "Lebanese",
    course: "Salad & Side",
    tags: ["artichokes", "mezze", "side"],
    ingredients: [
      "3 to 4 artichokes",
      "2 lemons",
      "4 gloves of garlic",
      "1 tbsp of olive oil",
      "1/2 tsp of salt"
    ],
    instructions: [
      "Bring water to a boil",
      "Add the artichokes to the water, reduce to a simmer, cover and cook until the leaves can easily be pulled off, about 35 to 40 minutes",
      "Drain and cool",
      "Put the lemon juice, oil, salt and crashed garlic in a boil and mix to combine",
      "Drizzle two tablespoons of sauce over each artichokes and enjoy"
    ],
    video_url: "https://www.instagram.com/p/B_2P7-rFbOI/",
    featured: true,
    rating: 5.0,
    date_published: "2020-05-06"
  },
  {
    id: "4",
    title: "Roast Beef",
    slug: "roast-beef",
    short_description: "Garlic-studded roast beef with green beans, mash, and silky pan gravy.",
    description: "Garlic-studded roast beef is seared and pressure-cooked with onion, carrot, celery, and white wine, then sliced thin and served with garlicky green beans, creamy mash, and quick Dijon pan gravy—great for next-day sandwiches.",
    image: recipe4,
    prepTime: 20,
    cookTime: 0,
    totalTime: 20,
    servings: "4",
    difficulty: "Advanced",
    cuisine: "Lebanese",
    course: "Main",
    tags: ["main", "roast beef"],
    ingredients: [
      {
        title: "For the Roast Beef",
        items: [
          "1 1/2 kg topside of beef",
          "1 medium onion halved",
          "1 carrot",
          "2 celery sticks",
          "olive oil",
          "sea salt and black pepper",
          "10 garlic gloves",
          "2 cups of water",
          "3 cups of dry white wine"
        ]
      },
      {
        title: "For the Beans",
        items: [
          "a medium bag of frozen beans",
          "8-10 large crushed garlic cloves",
          "1/4 cup of olive oil",
          "sea salt and black pepper"
        ]
      },
      {
        title: "For the Gravy",
        items: [
          "2 tbsp of flour",
          "2 tbsp of butter",
          "juices from meat",
          "2 tsp of dijon mustard"
        ]
      }
    ],
    instructions: [
      {
        title: "Roast Beef",
        items: [
          "Stick the meat with a knife and incorporate a glove of garlic inside each hall",
          "Drizzle the meat with olive oil sprinkle with salt and pepper",
          "Heat a pressure cooker over high heat brown roast on all sides add the onion carrot and celery sticks and brown with meat",
          "Pour the wine all over the meat,add the water,seal the lid and cook for around 1 and a half hours on medium heat",
          "Open the cooker when cooled remove the meat and refrigerate for half an hour(this will help cutting it into fine pieces)"
        ]
      },
      {
        title: "Gravy",
        items: [
          "Pour the remaining vegetables and the meat juices into a stainer and pressing the vegetables with a spoon. Set aside",
          "Melt the better in a saucepan and add the flour stir constantly until its golden caramel color",
          "Whisk in the meat liquid and stir constantly",
          "Bring it to the simmer and let it bubble until thicken for about 5 minutes",
          "Add the mustard and stir"
        ]
      },
      {
        title: "Green Beans",
        items: [
          "Wash the beans until smooth, drain well",
          "poor olive oil in a large skillet with a lid then add the crashed garlic over low heat until evenly distributed all over the pan",
          "Add the beans whisk to combine cover for about 5 minutes stirring often",
          "Uncover and cook for another 5 minutes over law heat season to taste with salt snd pepper"
        ]
      }
    ],
    video_url: "https://www.instagram.com/p/B_ae3nqF-Wb/",
    featured: true,
    rating: 4.7,
    date_published: "2020-04-25"
  },
  {
    id: "5",
    title: "Chocolate & Red Berries Cupcakes",
    slug: "chocoalte-and-red-berries-cupcakes",
    short_description: "Almond-meal chocolate & red-berry cupcakes, maple-sweet and fluffy.",
    description: "Cocoa-almond cupcakes folded with red berries; naturally sweetened with maple.",
    image: recipe5,
    prepTime: 20,
    cookTime: 15,
    totalTime: 35,
    servings: "12",
    difficulty: "Easy",
    cuisine: "International",
    course: "Bread",
    tags: ["desert", "cupcakes"],
    ingredients: [
      "3/4 cup of maple syrup",
      "1/4 cup of milk",
      "1/3 cup of extra virgin olive oil",
      "2 tsps of vanilla extract",
      "2 large eggs",
      "2 cups of almond meal",
      "1 tsps of baking powder",
      "1/3 cup of cocoa powder",
      "frozen or fresh red fruits"
    ],
    instructions: [
      "Preheat oven to 160°C",
      "Line a muffin tin with paper cases",
      "Place vanilla , maple syrup , milk , oil and eggs in a jug and whisk to combine",
      "Place the almond meal , baking powder and cocoa in a bowl",
      "Add the maple mixture to the dry ingredients and mix to combine",
      "Half fill each paper case with mixture , sprinkle with red fruits and top with remaining mixture",
      "Bake for 25 minutes or until firm",
      "Allow to cool before lifting"
    ],
    video_url: "https://www.instagram.com/p/B_KCeJilcMO/?img_index=1",
    featured: true,
    rating: 4.9,
    date_published: "2020-04-19"
  },
  {
    id: "6",
    title: "Small Fluffy Japanese Milk Buns (Tangzhong)",
    slug: "small-fluffy-japanese-milk-buns",
    short_description: "Fluffy Japanese milk buns (tangzhong)—pillowy, lightly sweet, golden and soft.",
    description: "Soft tangzhong milk buns, ultra-pillowy and lightly sweet, baked to a tender golden crust—perfect warm with butter or as slider rolls.",
    image: recipe6,
    prepTime: 15,
    cookTime: 10,
    totalTime: 25,
    servings: "6",
    difficulty: "Medium",
    cuisine: "Japanese",
    course: "Breakfast",
    tags: ["breakfast", "japanese", "bread"],
    ingredients: [
      {
        title: "For the Tangzhong",
        items: ["45ml of water",
        "45ml of milk",
        "15g flour"]
      },
      {
        title: "For the Dough",
        items: ["300g flour",
        "15g of milk powder",
        "50g of sugar",
        "1 tsp salt",
        "1 tbsp of instant baking yeast",
        "115g of milk",
        "1 large beaten egg",
        "60g of melted then tempered butter"]
      }
    ],
    instructions: [
      {
        title: "Tangzhong",
        items: ["Pour milk,water and flour in a small saucepan heat over low heat stirring constantly until thickened",
          "Set aside in a small bowl to cool"
        ]
      },
      {
        title: "Dough",
        items: ["Preheat oven to 180°C",
          "Melt butter leave to cool",
          "Mix flour,sugar,salt, milk and yeast",
          "Make a well in the above mixture pour the beaten egg,Tangzhong,milk and Butter",
          "Mix and knead for about 5 minutes",
          "Form a ball dough cover with cling film and a tea towel. Let rise for about 1h 30m",
          "Degas the dough on a floured surface cut and roll into 8 equal balls",
          "Place the balls in a 23cm round thin covered with non stick baking sheet and let it rest until doubled in size for around 50min",
          "Brush with beaten egg and bake for 25 minutes or until having a nice golden crust"
        ]
      }
    ],
    video_url: "https://www.instagram.com/p/B-_smkzFqun/?img_index=1",
    featured: false,
    rating: 4.8,
    date_published: "2020-04-15"
  },
  {
    id: "7",
    title: "Loubiyeh bi Zeit",
    slug: "loubiyeh-bi-zeit",
    short_description: "Lebanese green beans in olive oil with tomatoes and garlic—tender, saucy, and fragrant.",
    description: "Fresh green beans are halved and gently stewed with onion, lots of garlic, ripe tomatoes, and olive oil until soft and silky; serve warm or at room temp with bread—perfect as a vegan mezze or side.",
    image: recipe7,
    prepTime: 10,
    cookTime: 25,
    totalTime: 35,
    servings: "4",
    difficulty: "Easy",
    cuisine: "Lebanese",
    course: "Main",
    tags: ["main", "lebanese", "vegetarian"],
    ingredients: [
      "1kg fresh green beans",
      "6 large tomatoes",
      "2 medium onions",
      "2 medium garlics peeled around 12 gloves",
      "2 tbsp of olive oil",
      "sea salt"
    ],
    instructions: [
      "Wash beans,cut in half, the beans tough knobby ends needs to be removed.keep aside",
      "Peel and dice tomatoes. Keep aside",
      "Peel and cut onions",
      "Put onion,garlic and olive oil in a pan on a medium heat and stir until transparent",
      "Add the beans to the pan",
      "Cover with tomatoes",
      "Sprinkle with salt to taste",
      "Cover and leave for about one hour or until beans are tender and cooked through"
    ],
    video_url: "https://www.instagram.com/p/B_Hx63ZF23J/",
    featured: false,
    rating: 4.9,
    date_published: "2020-04-18"
  },
  {
    id: "8",
    title: "Kebbit Batata",
    slug: "kebbit-batata",
    short_description: "Lebanese potato kibbeh—mashed potatoes with fine bulgur, walnuts, mint, onion, and olive oil.",
    description: "Creamy kibbet batata: tender potatoes mashed and mixed with fine bulgur, chopped walnuts, fresh mint and onion, seasoned and finished with a generous drizzle of olive oil—served cool as a mezze or side.",
    image: recipe8,
    prepTime: 90,
    cookTime: 15,
    totalTime: 105,
    servings: "6",
    difficulty: "Easy",
    cuisine: "Lebanese",
    course: "Salad & Side",
    tags: ["side", "lebanese", "mezze", "vegetarian"],
    ingredients: [
      "1kg of potatoes",
      "1/2 cup of walnuts roughly chopped",
      "1/2 cup of fine cracked wheat (bulgur) washed and drained",
      "A bunch of chopped mint leaves ",
      "1 medium onion",
      "Sea salt and black pepper"
    ],
    instructions: [
      "Boil potatoes in a pot of salted water until tender but still firm,drain,peal and mash with potato masher",
      "Chop the onion",
      "Chop the mint leaves",
      "Mix potatoes, cracked wheat, mint, onion, walnuts, salt and pepper with your hands until well combined and creamy",
      "Decorate with mint leaves and drizzle with olive oil"
    ],
    video_url: "https://www.instagram.com/p/B-w3zc_l2az/?img_index=1 ",
    featured: false,
    rating: 4.8,
    date_published: "2020-04-09"
  },
  {
    id: "9",
    title: "Maple Glazed Walnut & Sugar Bun",
    slug: "maple-glazed-walnut-and-sugar-bun",
    short_description: "Maple-glazed walnut cinnamon bun—buttery, nutty, and beautifully swirled.",
    description: "Soft enriched dough rolled with walnuts, brown sugar, and cinnamon, brushed with butter, twisted into a bun, then finished with egg and maple syrup for a glossy, fragrant glaze.",
    image: recipe9,
    prepTime: 5,
    cookTime: 0,
    totalTime: 5,
    servings: "8",
    difficulty: "Medium",
    cuisine: "European",
    course: "Dessert",
    tags: ["dessert", "cinnamon bun", "sweet"],
    ingredients: [
      {
        title: "For the Dough",
        items: ["1 cup of milk",
        "50g unsalted butter",
        "525g plain flour",
        "110g of brown sugar ",
        "1 egg",
        "2 1/4 tsp dried yeast"]
      },
      {
        title: "For the Bun",
        items: ["120g of walnuts, chopped",
        "90g brown sugar",
        "1 tsp ground cinnamon",
        "50g butter",
        "1 lightly beaten egg",
        "2 tbsp maple syrup"]
      }
    ],
    instructions: [
      "Place milk and butter in a small pan over low heat until butter is melted",
      "Place the flour,sugar,egg,yeast and milk mixture in a bowl of an electric mixer and mix on low speed until the dough comes together",
      "Knead dough on a floured surface place in a bowl cover and set aside for 1 1/2 hours or until doubled in size",
      "Mix the walnuts,sugar and cinnamon in a bowl",
      "Roll out the dough into a ~50x30cm rectangle",
      "Brush it with butter",
      "Sprinkle it with the walnut mixture",
      "Cut it into ~5x55cm strips",
      "Roll the strips up tightly",
      "Place one strip after another in a lightly greased springform caked tin lined with baking paper, creating one large spiral",
      "Cover and set aside in a warm place until risen",
      "Brush the bun with a beaten egg",
      "Bake for 40-45min or until golden brown",
      "Brush with the maple syrup"
    ],
    video_url: "https://www.instagram.com/p/CNc1KuaA5Jv/",
    featured: false,
    rating: 4.7,
    date_published: "2021-04-09"
  },
  {
    id: "10",
    title: "Pear & Ricotta Tart",
    slug: "pear-and-ricotta-tart",
    short_description: "Flaky filo tart with ricotta, pears, and a touch of brown sugar.",
    description: "Crisp layers of filo cradle a light ricotta filling with raisins, lemon, and vanilla, topped with thin pear slices and baked until golden.",
    image: recipe10,
    prepTime: 45,
    cookTime: 60,
    totalTime: 105,
    servings: "8",
    difficulty: "Medium",
    cuisine: "Mediterranean",
    course: "Dessert",
    tags: ["light-dessert", "pear", "ricotta", "filo tart"],
    ingredients: [
      "500g ricotta",
      "55g brown sugar",
      "35g raisins",
      "1 tbsp lemon rind",
      "1 tbsp of vanilla extract",
      "1 egg",
      "8 sheets of Filo pastry",
      "50g of melted butter",
      "3 thinly sliced green pears",
      "1 tbsp of brown sugar",
      "Icing sugar for dusting",
      "1/2 cup of honey"
    ],
    instructions: [
      "Preheat oven to 200°C",
      "Place ricotta,lemon rind,vanilla and egg in a bowl and mix well",
      "Layer the pastry sheets, on a 35x25cm on top of one another brushing between each layer with the butter",
      "Top with the ricotta and the pears slices",
      "Fold over the pastry edges to form a border over the filling",
      "Brush with butter sprinkle with sugar and bake for 25min or until golden",
      "Dust with icing sugar and drizzle with honey to serve"
    ],
    video_url: "https://www.instagram.com/p/CNxpgg0AazD/",
    featured: false,
    rating: 5.0,
    date_published: "2021-04-17"
  },
  {
    id: "11",
    title: "Chocolate & Whisky Fingers",
    slug: "chocolate-and-whisky-fingers",
    short_description: "No-bake dark-chocolate whisky fingers—silky, rich, cocoa-dusted.",
    description: "Dark chocolate and cream are melted, spiked with whisky, chilled into a dense truffle-like slab, then sliced into cocoa-dusted fingers.",
    image: recipe11,
    prepTime: 45,
    cookTime: 60,
    totalTime: 105,
    servings: "8",
    difficulty: "Easy",
    cuisine: "European",
    course: "Dessert",
    tags: ["light-dessert", "alcohol", "cocoa", "no-bake"],
    ingredients: [
    "400g dark chocolate, chopped",
    "125ml single cream",
    "2 tbsp whisky",
    "Cocoa powder, for dusting"
    ],
    instructions: [
      "Set a heatproof bowl over a saucepan of gently simmering water",
      "Add the chocolate and cream; stir until completely melted and smooth",
      "Remove from the heat and stir in the whisky",
      "Line a 20×30cm tin with baking paper and lightly grease",
      "Pour the mixture into the tin and level the top",
      "Refrigerate for about 3 hours, until firm",
      "Lift out, slice into fingers, and dust with cocoa to serve"
    ],
    video_url: "https://www.instagram.com/p/CNxpgg0AazD/",
    featured: false,
    rating: 5.0,
    date_published: "2021-04-17"
  },
];
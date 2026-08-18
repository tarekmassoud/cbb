const BASE_URL = import.meta.env.BASE_URL || '/';

export interface RecipeIndexItem {
  id: string;
  title: string;
  slug: string;
  short_description: string;
  image: string;
  prepTime: number;
  servings: string;
  difficulty: "Easy" | "Medium" | "Advanced";
  cuisine: string;
  course: "Breakfast" | "Main" | "Dessert" | "Salad & Side" | "Bread" | "Sauce" | "Dairy";
  tags: string[];
  keywords?: string[];
  featured: boolean;
  rating?: number;
  date_published: string;
}

export async function fetchRecipesIndex(): Promise<RecipeIndexItem[]> {
  const response = await fetch(`${BASE_URL}data/recipes.index.json`);
  if (!response.ok) return [];

  const recipes: RecipeIndexItem[] = await response.json();

  // Prepend BASE_URL to image paths, matching how recipeBySlug.ts handles it
  return recipes.map(recipe => ({
    ...recipe,
    image: recipe.image?.startsWith('/') ? BASE_URL + recipe.image.substring(1) : recipe.image
  }));
}

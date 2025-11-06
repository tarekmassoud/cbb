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
  course: "Breakfast" | "Main" | "Dessert" | "Salad & Side" | "Bread" | "Sauce";
  tags: string[];
  keywords?: string[];
  featured: boolean;
  rating?: number;
  date_published: string;
}

let cachedIndex: RecipeIndexItem[] | null = null;

export async function fetchRecipesIndex(): Promise<RecipeIndexItem[]> {
  if (cachedIndex) return cachedIndex;
  
  const response = await fetch('/data/recipes.index.json');
  if (!response.ok) throw new Error('Failed to load recipes index');
  
  cachedIndex = await response.json();
  return cachedIndex;
}

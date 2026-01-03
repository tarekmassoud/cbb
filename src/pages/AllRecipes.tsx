import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { RecipeCard } from "@/components/RecipeCard";
import { fetchRecipesIndex } from "@/lib/recipesIndex";
import { Navigation } from "@/components/Navigation";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AllRecipes = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [activeCategory, setActiveCategory] = useState<string | null>(
    categoryParam || null
  );

  const { data: recipes = [], isLoading } = useQuery({
    queryKey: ['recipes-index'],
    queryFn: fetchRecipesIndex
  });

  useEffect(() => {
    setActiveCategory(categoryParam || null);
  }, [categoryParam]);

  const categories = [
    { name: "All", value: null },
    { name: "Breakfast", value: "breakfast" },
    { name: "Mains", value: "main" },
    { name: "Desserts", value: "dessert" },
    { name: "Salads & Sides", value: "salad-side" },
    { name: "Breads & Sandwiches", value: "bread" },
    { name: "Sauces", value: "sauce" },
    { name: "Dairy", value: "dairy" }
  ];

  const categoryMap: Record<string, string> = {
    "breakfast": "Breakfast",
    "main": "Main",
    "dessert": "Dessert",
    "salad-side": "Salad & Side",
    "bread": "Bread",
    "sauce": "Sauce",
    "dairy": "Dairy"
  };

  let filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = searchTerm
      ? recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.short_description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (recipe.keywords && recipe.keywords.some(kw => kw.toLowerCase().includes(searchTerm.toLowerCase())))
      : true;

    const matchesCategory = activeCategory 
      ? recipe.course === categoryMap[activeCategory]
      : true;

    return matchesSearch && matchesCategory;
  });

  if (sortBy === "newest") {
    filteredRecipes = [...filteredRecipes].sort((a, b) => 
      new Date(b.date_published).getTime() - new Date(a.date_published).getTime()
    );
  } else if (sortBy === "prep-time") {
    filteredRecipes = [...filteredRecipes].sort((a, b) => a.prepTime - b.prepTime);
  } else if (sortBy === "rating") {
    filteredRecipes = [...filteredRecipes].sort((a, b) => (b.rating || 0) - (a.rating || 0));
  }

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="flex items-center justify-center py-16">
          <p className="text-muted-foreground">Loading recipes...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="py-12 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-serif text-5xl font-bold mb-4 text-foreground">
              All Recipes
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover {recipes.length}+ Mediterranean and Lebanese recipes
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12 space-y-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search recipes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <Badge
                  key={cat.name}
                  variant={activeCategory === cat.value ? "default" : "outline"}
                  className="cursor-pointer px-4 py-2 text-base hover:bg-primary hover:text-primary-foreground transition-smooth"
                  onClick={() => setActiveCategory(cat.value)}
                >
                  {cat.name}
                </Badge>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <p className="text-muted-foreground">
                {filteredRecipes.length} recipe{filteredRecipes.length !== 1 ? 's' : ''} found
              </p>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="bg-card">
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="prep-time">Prep Time</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {filteredRecipes.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {filteredRecipes.map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                No recipes found. Try adjusting your search or filters.
              </p>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-card border-t py-8 px-6 mt-16">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Cooking bel beit. Follow on{" "}
            <a 
              href="https://instagram.com/cooking_bel_beit/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Instagram
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AllRecipes;

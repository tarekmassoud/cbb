import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RecipeCard } from "@/components/RecipeCard";
import { WelcomeOverlay } from "@/components/WelcomeOverlay";
import { Navigation } from "@/components/Navigation";
import { recipes } from "@/data/recipes";
import { Badge } from "@/components/ui/badge";
import chefHero from "@/assets/chef-hero.jpg";

const Index = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  
  const featuredRecipes = recipes.filter(recipe => recipe.featured).slice(0, 5);
  
  const categories = [
    { name: "Breakfast", value: "Breakfast" },
    { name: "Mains", value: "Main" },
    { name: "Desserts", value: "Dessert" },
    { name: "Salads & Sides", value: "Salad & Side" },
    { name: "Breads", value: "Bread" },
    { name: "Sauces", value: "Sauce" }
  ];

  // Filter recipes based on search and category
  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = searchTerm
      ? recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.short_description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.ingredients.some(ing => ing.toLowerCase().includes(searchTerm.toLowerCase())) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      : false;

    const matchesFilter = activeFilter ? recipe.course === activeFilter : true;

    return searchTerm ? matchesSearch : matchesFilter;
  });

  const categoryRecipes = (category: string) => {
    return recipes.filter(r => r.course === category).slice(0, 5);
  };

  return (
    <>
      <WelcomeOverlay onEnter={() => setShowWelcome(false)} />
      
      <div className={`min-h-screen transition-opacity duration-300 ${showWelcome ? 'opacity-0' : 'opacity-100'}`}>
        <Navigation />

        {/* Hero Section with Search */}
        <section className="relative py-24 px-6 overflow-hidden bg-white">

          <div className="container mx-auto relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-foreground">
                Search 150+ Recipes
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Discover Mediterranean and Lebanese favorites, from weeknight dinners to special occasions
              </p>

              {/* Search Bar */}
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-6 h-6" />
                <Input
                  type="text"
                  placeholder="Search 150+ recipes... (pasta, chicken, vegan...)"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-14 h-16 text-lg border-2 focus:border-primary"
                />
              </div>

              {/* Filter Chips */}
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((cat) => (
                  <Badge
                    key={cat.value}
                    variant={activeFilter === cat.value ? "default" : "outline"}
                    className="cursor-pointer px-4 py-2 text-base hover:bg-primary hover:text-primary-foreground transition-smooth"
                    onClick={() => {
                      setSearchTerm("");
                      setActiveFilter(activeFilter === cat.value ? null : cat.value);
                    }}
                  >
                    {cat.name}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Search Results */}
            {searchTerm && (
              <div className="max-w-6xl mx-auto">
                <p className="text-muted-foreground mb-6 text-center">
                  Found {filteredRecipes.length} recipe{filteredRecipes.length !== 1 ? 's' : ''}
                </p>
                {filteredRecipes.length > 0 ? (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredRecipes.slice(0, 9).map(recipe => (
                      <RecipeCard key={recipe.id} recipe={recipe} />
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-muted-foreground py-8">
                    No recipes found. Try a different search term.
                  </p>
                )}
              </div>
            )}

            {/* Category Results */}
            {!searchTerm && activeFilter && (
              <div className="max-w-6xl mx-auto">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                  {filteredRecipes.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Featured Recipes */}
        {!searchTerm && !activeFilter && (
          <section className="py-16 px-6 bg-accent/20">
            <div className="container mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-serif text-4xl font-bold mb-4 text-foreground">
                  Five Featured Recipes
                </h2>
                <p className="text-muted-foreground text-lg">
                  Our most popular dishes loved by thousands
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-8">
                {featuredRecipes.map(recipe => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
              </div>

              <div className="text-center">
                <Link to="/recipes">
                  <Button size="lg" variant="outline">
                    View All Recipes
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Category Carousels */}
        {!searchTerm && !activeFilter && (
          <>
            {categories.map((cat) => {
              const catRecipes = categoryRecipes(cat.value);
              if (catRecipes.length === 0) return null;

              return (
                <section key={cat.value} className="py-16 px-6">
                  <div className="container mx-auto">
                    <div className="flex justify-between items-center mb-8">
                      <h2 className="font-serif text-3xl font-bold text-foreground">
                        {cat.name}
                      </h2>
                      <Link 
                        to={`/recipes?category=${cat.value.toLowerCase().replace(' & ', '-')}`}
                        className="text-primary hover:underline"
                      >
                        View all
                      </Link>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                      {catRecipes.map(recipe => (
                        <RecipeCard key={recipe.id} recipe={recipe} />
                      ))}
                    </div>
                  </div>
                </section>
              );
            })}
          </>
        )}

        {/* Footer */}
        <footer className="bg-card border-t py-8 px-6">
          <div className="container mx-auto text-center">
            <p className="text-muted-foreground">
              © 2024 Cooking bel beit. Follow on{" "}
              <a 
                href="https://instagram.com" 
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
    </>
  );
};

export default Index;

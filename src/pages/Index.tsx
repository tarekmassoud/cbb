import { Link } from "react-router-dom";
import { Instagram, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RecipeCard } from "@/components/RecipeCard";
import { recipes } from "@/data/recipes";
import chefHero from "@/assets/chef-hero.jpg";

const Index = () => {
  const featuredRecipes = recipes.filter(recipe => recipe.featured);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-card/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Cooking bel beit's Kitchen</h1>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-foreground hover:text-primary transition-smooth"
          >
            <Instagram className="w-5 h-5" />
            <span className="hidden sm:inline">Follow on Instagram</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Welcome to My
                <span className="hero-gradient bg-clip-text text-transparent"> Culinary Journey</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hi! I'm Chef Maria Rodriguez, and I've been sharing my passion for cooking on Instagram for over 5 years. 
                From traditional family recipes to modern culinary experiments, I believe that great food brings people together. 
                Join me as I explore flavors from around the world, one delicious dish at a time.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/recipes">
                  <Button size="lg" className="hero-gradient border-0 text-white">
                    View All Recipes
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline">
                    <Instagram className="mr-2 w-5 h-5" />
                    Follow Me
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden card-shadow">
                <img 
                  src={chefHero} 
                  alt="Chef Maria Rodriguez"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="py-16 px-6 bg-accent/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Recipes</h2>
            <p className="text-muted-foreground text-lg">
              Try these popular favorites from my kitchen
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
                See All Recipes
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-8 px-6">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Chef's Kitchen. Follow me on{" "}
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
  );
};

export default Index;

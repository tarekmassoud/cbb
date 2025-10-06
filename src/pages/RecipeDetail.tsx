import { useParams, Link } from "react-router-dom";
import { Instagram, ArrowLeft, Clock, Users, ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { recipes } from "@/data/recipes";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipes.find(r => r.id === id);

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Recipe Not Found</h1>
          <Link to="/recipes">
            <Button>View All Recipes</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-card/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Chef's Kitchen</h1>
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

      {/* Recipe Content */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <Link to="/recipes">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 w-5 h-5" />
              Back to Recipes
            </Button>
          </Link>

          {/* Hero Image */}
          <div className="aspect-video rounded-2xl overflow-hidden card-shadow mb-8">
            <img 
              src={recipe.image} 
              alt={recipe.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title and Description */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{recipe.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{recipe.description}</p>
            
            <div className="flex flex-wrap gap-6 mb-6">
              <div className="flex items-center gap-2 text-foreground">
                <Clock className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">Prep Time</div>
                  <div className="font-semibold">{recipe.prepTime}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <ChefHat className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">Cook Time</div>
                  <div className="font-semibold">{recipe.cookTime}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <Users className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">Servings</div>
                  <div className="font-semibold">{recipe.servings}</div>
                </div>
              </div>
            </div>

            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Button className="hero-gradient border-0 text-white">
                <Instagram className="mr-2 w-5 h-5" />
                See on Instagram
              </Button>
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Ingredients */}
            <Card className="card-shadow">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
                <ul className="space-y-3">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-foreground">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Instructions */}
            <Card className="card-shadow">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Instructions</h2>
                <ol className="space-y-4">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full hero-gradient text-white flex items-center justify-center font-semibold text-sm">
                        {index + 1}
                      </span>
                      <span className="text-foreground pt-1">{instruction}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>

          {/* Instagram CTA */}
          <Card className="mt-8 card-shadow hero-gradient">
            <CardContent className="p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-2">Love this recipe?</h3>
              <p className="mb-4">Follow me on Instagram for more delicious recipes and cooking tips!</p>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary">
                  <Instagram className="mr-2 w-5 h-5" />
                  Follow @ChefMaria
                </Button>
              </a>
            </CardContent>
          </Card>
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

export default RecipeDetail;

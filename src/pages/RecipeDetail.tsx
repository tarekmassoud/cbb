import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Instagram, ArrowLeft, Clock, Users, ChefHat, ExternalLink, Printer, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { recipes } from "@/data/recipes";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipes.find(r => r.id === id);
  const [checkedSteps, setCheckedSteps] = useState<Set<number>>(new Set());
  const [checkedIngredients, setCheckedIngredients] = useState<Set<number>>(new Set());
  const [copied, setCopied] = useState(false);

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

  const toggleStep = (index: number) => {
    const newChecked = new Set(checkedSteps);
    if (newChecked.has(index)) {
      newChecked.delete(index);
    } else {
      newChecked.add(index);
    }
    setCheckedSteps(newChecked);
  };

  const toggleIngredient = (index: number) => {
    const newChecked = new Set(checkedIngredients);
    if (newChecked.has(index)) {
      newChecked.delete(index);
    } else {
      newChecked.add(index);
    }
    setCheckedIngredients(newChecked);
  };

  const copyIngredients = () => {
    const text = recipe.ingredients.join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <Link to="/recipes">
            <Button variant="ghost" className="mb-6 print:hidden">
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

          {/* Title and Meta */}
          <div className="mb-8">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
              {recipe.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">{recipe.description}</p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="outline">{recipe.cuisine}</Badge>
              <Badge variant="outline">{recipe.difficulty}</Badge>
              {recipe.tags.map(tag => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>

            {/* Meta Information */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-1" />
                <div>
                  <div className="text-sm text-muted-foreground">Prep Time</div>
                  <div className="font-semibold text-foreground">{recipe.prepTime} mins</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ChefHat className="w-5 h-5 text-primary mt-1" />
                <div>
                  <div className="text-sm text-muted-foreground">Cook Time</div>
                  <div className="font-semibold text-foreground">{recipe.cookTime} mins</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-1" />
                <div>
                  <div className="text-sm text-muted-foreground">Total Time</div>
                  <div className="font-semibold text-foreground">{recipe.totalTime} mins</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-primary mt-1" />
                <div>
                  <div className="text-sm text-muted-foreground">Servings</div>
                  <div className="font-semibold text-foreground">{recipe.servings}</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 print:hidden">
              {recipe.video_url && (
                <a href={recipe.video_url} target="_blank" rel="noopener noreferrer">
                  <Button className="hero-gradient border-0 text-white">
                    <Instagram className="mr-2 w-5 h-5" />
                    Watch on Instagram
                  </Button>
                </a>
              )}
              <Button variant="outline" onClick={handlePrint}>
                <Printer className="mr-2 w-5 h-5" />
                Print Recipe
              </Button>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-[1fr_1.5fr] gap-8">
            {/* Sticky Sidebar: Ingredients */}
            <div className="md:sticky md:top-24 h-fit">
              <Card className="card-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="font-serif text-2xl font-bold text-foreground">Ingredients</h2>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={copyIngredients}
                      className="print:hidden"
                    >
                      {copied ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                  <ul className="space-y-3">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-start gap-3 print:gap-2">
                        <Checkbox
                          checked={checkedIngredients.has(index)}
                          onCheckedChange={() => toggleIngredient(index)}
                          className="mt-1 print:hidden"
                        />
                        <span className={`text-foreground ${checkedIngredients.has(index) ? 'line-through text-muted-foreground' : ''}`}>
                          {ingredient}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Main Content: Instructions */}
            <Card className="card-shadow">
              <CardContent className="p-6">
                <h2 className="font-serif text-2xl font-bold mb-6 text-foreground">Instructions</h2>
                <ol className="space-y-6">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="flex gap-4">
                      <div className="flex items-start gap-3 flex-1">
                        <Checkbox
                          checked={checkedSteps.has(index)}
                          onCheckedChange={() => toggleStep(index)}
                          className="mt-1 print:hidden"
                        />
                        <div className="flex-shrink-0 w-8 h-8 rounded-full hero-gradient text-white flex items-center justify-center font-semibold text-sm">
                          {index + 1}
                        </div>
                        <p className={`text-foreground pt-1 flex-1 ${checkedSteps.has(index) ? 'line-through text-muted-foreground' : ''}`}>
                          {instruction}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>

          {/* Instagram CTA */}
          <Card className="mt-12 card-shadow hero-gradient print:hidden">
            <CardContent className="p-8 text-center text-white">
              <h3 className="font-serif text-2xl font-bold mb-2">Made this recipe?</h3>
              <p className="mb-4">Share it on Instagram and tag me @CookingBelBeit!</p>
              <a href="https://instagram.com/cooking_bel_beit/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary">
                  <Instagram className="mr-2 w-5 h-5" />
                  Follow @CookingBelBeit
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="bg-card border-t py-8 px-6 print:hidden">
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

export default RecipeDetail;

import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, Clock, Users, ChefHat, Printer, Copy, Instagram, Minus, Plus } from "lucide-react";
import { fetchRecipeBySlug } from "@/lib/recipeBySlug";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { toast } from "sonner";
import { scaleIngredient, parseServings } from "@/lib/recipeScaling";

const RecipeDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [checkedIngredients, setCheckedIngredients] = useState<Set<number>>(new Set());
  const [checkedSteps, setCheckedSteps] = useState<Set<number>>(new Set());
  const [servings, setServings] = useState<number | null>(null);

  const { data: recipe, isLoading, error } = useQuery({
    queryKey: ['recipe', slug],
    queryFn: () => fetchRecipeBySlug(slug!),
    enabled: !!slug
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    setServings(null); // Reset servings when recipe changes
  }, [slug]);

  // Initialize servings when recipe loads
  useEffect(() => {
    if (recipe && servings === null) {
      const originalServings = parseServings(recipe.meta.servings);
      setServings(originalServings);
    }
  }, [recipe, servings]);

  const toggleIngredient = (index: number) => {
    setCheckedIngredients(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const toggleStep = (index: number) => {
    setCheckedSteps(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const handleCopyIngredients = () => {
    if (!recipe) return;
    
    const flatIngredients = scaledIngredientsList.flatMap((section: any) => 
      section.title ? [`\n${section.title}`, ...section.items] : section.items
    );
    
    const text = flatIngredients.join('\n');
    navigator.clipboard.writeText(text);
    toast.success("Ingredients copied to clipboard!");
  };

  const handlePrint = () => {
    window.print();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-6 py-16">
          <p className="text-center text-muted-foreground">Loading recipe...</p>
        </div>
      </div>
    );
  }

  if (error || !recipe) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Recipe Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The recipe you're looking for doesn't exist.
            </p>
            <Link to="/">
              <Button>
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const { meta } = recipe;
  const isGrouped = (items: any): items is Array<{ title?: string; items: string[] }> => {
    return Array.isArray(items) && items.length > 0 && typeof items[0] === 'object' && 'items' in items[0];
  };

  const ingredientsList = isGrouped(recipe.ingredients) ? recipe.ingredients : [{ items: recipe.ingredients as string[] }];
  const instructionsList = isGrouped(recipe.instructions) ? recipe.instructions : [{ items: recipe.instructions as string[] }];

  // Calculate scaling factor
  const originalServings = parseServings(meta.servings);
  const scalingFactor = servings ? servings / originalServings : 1;

  // Scale ingredients
  const scaledIngredientsList = ingredientsList.map(section => ({
    ...section,
    items: section.items.map(ingredient => scaleIngredient(ingredient, scalingFactor))
  }));

  const handleServingsChange = (delta: number) => {
    setServings(prev => {
      const current = prev || originalServings;
      const newValue = Math.max(1, current + delta);
      return newValue;
    });
  };

  const resetServings = () => {
    setServings(originalServings);
  };

  return (
    <div className="min-h-screen print:bg-white">
      <div className="print:hidden">
        <Navigation />
      </div>

      <article className="container mx-auto px-6 py-8 max-w-4xl">
        <Link 
          to="/recipes" 
          className="inline-flex items-center text-primary hover:underline mb-6 print:hidden"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to Recipes
        </Link>

        <header className="mb-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {meta.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            {meta.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="secondary">{meta.cuisine}</Badge>
            <Badge variant="secondary">{meta.course}</Badge>
            <Badge variant="secondary">{meta.difficulty}</Badge>
            {meta.tags.map(tag => (
              <Badge key={tag} variant="outline">{tag}</Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-6 text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Prep: {meta.prepTime} min</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Cook: {meta.cookTime} min</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Total: {meta.totalTime} min</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>{meta.servings} servings</span>
            </div>
            {meta.rating && (
              <div className="flex items-center gap-2">
                <ChefHat className="w-5 h-5" />
                <span>Rating: {meta.rating}/5</span>
              </div>
            )}
          </div>

          <div className="print:hidden">
            <Carousel opts={{ dragFree: true, align: "start" }}>
              <CarouselContent className="-ml-2">
                <CarouselItem className="basis-auto pl-2">
                  <Button onClick={handleCopyIngredients} variant="outline">
                    <Copy className="mr-2 w-4 h-4" />
                    Copy Ingredients
                  </Button>
                </CarouselItem>
                <CarouselItem className="basis-auto pl-2">
                  <Button onClick={handlePrint} variant="outline">
                    <Printer className="mr-2 w-4 h-4" />
                    Print
                  </Button>
                </CarouselItem>
                {meta.video_url && (
                  <CarouselItem className="basis-auto pl-2">
                    <Button asChild variant="outline">
                      <a href={meta.video_url} target="_blank" rel="noopener noreferrer">
                        <Instagram className="mr-2 w-4 h-4" />
                        Watch Video
                      </a>
                    </Button>
                  </CarouselItem>
                )}
              </CarouselContent>
            </Carousel>
          </div>
        </header>

        <div className="mb-8 rounded-lg overflow-hidden print:max-h-[40vh] print:mb-4">
          <img
            src={meta.image}
            alt={meta.title}
            className="w-full h-auto object-cover print:max-h-[40vh] print:w-auto print:mx-auto"
            loading="eager"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                Ingredients
              </h2>
              <div className="flex items-center gap-3 print:hidden">
                <span className="text-sm text-muted-foreground">
                  Servings:
                </span>
                <div className="flex items-center gap-2 border rounded-lg p-1 bg-background">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7"
                    onClick={() => handleServingsChange(-1)}
                    disabled={servings === 1}
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className="font-semibold min-w-[2rem] text-center">
                    {servings}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7"
                    onClick={() => handleServingsChange(1)}
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
                {scalingFactor !== 1 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={resetServings}
                    className="text-xs"
                  >
                    Reset
                  </Button>
                )}
              </div>
            </div>
            <div className="space-y-4">
              {scaledIngredientsList.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  {section.title && (
                    <h3 className="font-semibold text-lg mb-2 text-foreground">
                      {section.title}
                    </h3>
                  )}
                  <ul className="space-y-2">
                    {section.items.map((ingredient, idx) => {
                      const globalIdx = sectionIdx * 100 + idx;
                      return (
                        <li key={idx} className="flex items-start gap-3 group">
                          <Checkbox
                            checked={checkedIngredients.has(globalIdx)}
                            onCheckedChange={() => toggleIngredient(globalIdx)}
                            className="mt-1 print:hidden"
                          />
                          <span className={`${checkedIngredients.has(globalIdx) ? 'line-through text-muted-foreground' : ''}`}>
                            {ingredient}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4 text-foreground">
              Instructions
            </h2>
            <div className="space-y-4">
              {instructionsList.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  {section.title && (
                    <h3 className="font-semibold text-lg mb-2 text-foreground">
                      {section.title}
                    </h3>
                  )}
                  <ol className="space-y-3">
                    {section.items.map((step, idx) => {
                      const globalIdx = sectionIdx * 100 + idx;
                      return (
                        <li key={idx} className="flex gap-3 group">
                          <div className="flex items-start gap-3 flex-1">
                            <Checkbox
                              checked={checkedSteps.has(globalIdx)}
                              onCheckedChange={() => toggleStep(globalIdx)}
                              className="mt-1 print:hidden"
                            />
                            <div className="flex-1">
                              <span className="font-semibold text-primary mr-2">
                                {idx + 1}.
                              </span>
                             <span 
                                className={`${checkedSteps.has(globalIdx) ? 'line-through text-muted-foreground' : ''}`}
                                dangerouslySetInnerHTML={{ 
                                  __html: step.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') 
                                }}
                              />
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ol>
                </div>
              ))}
            </div>
          </section>
        </div>

        <footer className="border-t pt-8 print:hidden">
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Enjoyed this recipe? Follow me on Instagram for more!
            </p>
            <Button asChild>
              <a 
                href="https://instagram.com/cooking_bel_beit/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Instagram className="mr-2 w-4 h-4" />
                @cooking_bel_beit
              </a>
            </Button>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default RecipeDetail;

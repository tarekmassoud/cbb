import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Clock, Users } from "lucide-react";
import { RecipeIndexItem } from "@/lib/recipesIndex";
import { Card } from "@/components/ui/card";

interface FeaturedCarouselProps {
  recipes: RecipeIndexItem[];
}

export const FeaturedCarousel = ({ recipes }: FeaturedCarouselProps) => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % recipes.length);
  }, [recipes.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + recipes.length) % recipes.length);
  }, [recipes.length]);

  useEffect(() => {
    if (isPaused || recipes.length <= 1) return;
    const timer = setInterval(next, 10000);
    return () => clearInterval(timer);
  }, [isPaused, next, recipes.length]);

  if (recipes.length === 0) return null;
  const recipe = recipes[current];

  return (
    <div
      className="relative w-full max-w-5xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 bg-background/80 backdrop-blur border rounded-full p-2 shadow-md hover:bg-accent transition-smooth"
        aria-label="Previous recipe"
      >
        <ChevronLeft className="w-5 h-5 text-foreground" />
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 bg-background/80 backdrop-blur border rounded-full p-2 shadow-md hover:bg-accent transition-smooth"
        aria-label="Next recipe"
      >
        <ChevronRight className="w-5 h-5 text-foreground" />
      </button>

      {/* Card */}
      <Link to={`/recipe/${recipe.slug}`} className="group block">
        <Card className="overflow-hidden border card-shadow hover:card-hover-shadow transition-smooth">
          <div className="flex flex-col sm:flex-row h-[350px] sm:h-[280px]">
            {/* Left side - Text content */}
            <div className="sm:w-[60%] flex flex-col items-center justify-center px-6 py-6 text-center order-2 sm:order-1">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-smooth mb-3 line-clamp-2">
                {recipe.title}
              </h3>
              <p className="text-muted-foreground text-sm md:text-base mb-6 line-clamp-3 max-w-md">
                {recipe.short_description}
              </p>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  <span>{recipe.prepTime} min</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4" />
                  <span>{recipe.servings}</span>
                </div>
              </div>
            </div>

            {/* Right side - Image (2/5) */}
            <div className="sm:w-[40%] h-40 sm:h-full overflow-hidden order-1 sm:order-2">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
              />
            </div>
          </div>
        </Card>
      </Link>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {recipes.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current ? "bg-primary w-6" : "bg-muted-foreground/30"
            }`}
            aria-label={`Go to recipe ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

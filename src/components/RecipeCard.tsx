import { Link } from "react-router-dom";
import { Clock, Users, Star } from "lucide-react";
import { RecipeIndexItem } from "@/lib/recipesIndex";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface RecipeCardProps {
  recipe: RecipeIndexItem;
  showMobileLayout?: boolean;
}

export const RecipeCard = ({ recipe, showMobileLayout = true }: RecipeCardProps) => {
  return (
    <Link to={`/recipe/${recipe.slug}`} className="group">
      {/* Desktop Card Layout */}
      <Card className={`${showMobileLayout ? 'hidden md:block' : 'block'} overflow-hidden border card-shadow hover:card-hover-shadow transition-smooth h-full`}>
        <div className="aspect-square overflow-hidden relative">
          <img
            src={recipe.image}
            alt={recipe.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
          />
          {recipe.rating && (
            <Badge className="absolute top-3 right-3 bg-background/90 text-foreground">
              <Star className="w-3 h-3 mr-1 fill-primary text-primary" />
              {recipe.rating}
            </Badge>
          )}
        </div>
        <CardContent className="p-6 flex flex-col min-h-[180px]">
          <h3 className="font-serif text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-smooth line-clamp-2 h-[3.5rem]">
            {recipe.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">
            {recipe.short_description}
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground flex-nowrap">
            <div className="flex items-center gap-1 flex-shrink-0">
              <Clock className="w-4 h-4" />
              <span className="whitespace-nowrap">{recipe.prepTime} min</span>
            </div>
            <div className="flex items-center gap-1 min-w-0">
              <Users className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">{recipe.servings}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Mobile Compact Layout */}
      {showMobileLayout && (
        <Card className="md:hidden overflow-hidden border card-shadow hover:card-hover-shadow transition-smooth">
        <div className="flex gap-3 p-3">
          <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded">
            <img
              src={recipe.image}
              alt={recipe.title}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 flex flex-col justify-between text-center gap-1.5 min-w-0 pr-2">
            <h3 className="font-serif text-sm font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-smooth w-full h-[1.25rem]">
              {recipe.title}
            </h3>
            <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground mt-auto flex-nowrap">
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <Clock className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="whitespace-nowrap">{recipe.prepTime} min</span>
              </div>
              <div className="flex items-center gap-1.5 min-w-0">
                <Users className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="truncate">{recipe.servings}</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
      )}
    </Link>
  );
};

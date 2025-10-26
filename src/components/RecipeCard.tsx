import { Link } from "react-router-dom";
import { Clock, Users, Star } from "lucide-react";
import { Recipe } from "@/data/recipes";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface RecipeCardProps {
  recipe: Recipe;
}

export const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <Link to={`/recipe/${recipe.id}`} className="group">
      <Card className="overflow-hidden border-none card-shadow hover:card-hover-shadow transition-smooth h-full">
        <div className="aspect-square overflow-hidden relative">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
          />
          {recipe.rating && (
            <Badge className="absolute top-3 right-3 bg-background/90 text-foreground">
              <Star className="w-3 h-3 mr-1 fill-primary text-primary" />
              {recipe.rating}
            </Badge>
          )}
        </div>
        <CardContent className="p-6">
          <h3 className="font-serif text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-smooth">
            {recipe.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {recipe.short_description}
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{recipe.prepTime} min</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{recipe.servings}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

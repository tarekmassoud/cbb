import { Link } from "react-router-dom";
import { Instagram, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navigation = () => {
  const categories = [
    { name: "Breakfast", path: "/recipes?category=breakfast" },
    { name: "Mains", path: "/recipes?category=main" },
    { name: "Desserts", path: "/recipes?category=dessert" },
    { name: "Salads & Sides", path: "/recipes?category=salad-side" },
    { name: "Breads", path: "/recipes?category=bread" },
    { name: "Sauces", path: "/recipes?category=sauce" },
  ];

  return (
    <nav className="sticky top-0 w-full bg-background/95 backdrop-blur-md z-50 border-b border-border shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="font-serif text-2xl font-bold text-foreground hover:text-primary transition-smooth">
            Cooking bel beit
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/recipes" className="text-foreground hover:text-primary transition-smooth">
              Recipes
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-foreground hover:text-primary">
                  Categories
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card z-50">
                {categories.map((cat) => (
                  <DropdownMenuItem key={cat.path} asChild>
                    <Link to={cat.path} className="cursor-pointer">
                      {cat.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/about" className="text-foreground hover:text-primary transition-smooth">
              About
            </Link>
            
            <Link to="/contact" className="text-foreground hover:text-primary transition-smooth">
              Contact
            </Link>

            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-smooth"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card z-50" align="end">
                <DropdownMenuItem asChild>
                  <Link to="/recipes">Recipes</Link>
                </DropdownMenuItem>
                {categories.map((cat) => (
                  <DropdownMenuItem key={cat.path} asChild>
                    <Link to={cat.path}>{cat.name}</Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem asChild>
                  <Link to="/about">About</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/contact">Contact</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

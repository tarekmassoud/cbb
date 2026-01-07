import { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, Youtube, Facebook, Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export const Navigation = () => {
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [socialsOpen, setSocialsOpen] = useState(false);

  const categories = [
    { name: "Breakfast", path: "/recipes?category=breakfast" },
    { name: "Mains", path: "/recipes?category=main" },
    { name: "Desserts", path: "/recipes?category=dessert" },
    { name: "Salads & Sides", path: "/recipes?category=salad-side" },
    { name: "Breads & Sandwiches", path: "/recipes?category=bread" },
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
            <DropdownMenu>
              <DropdownMenuTrigger className="text-foreground hover:text-primary transition-smooth bg-transparent border-none cursor-pointer flex items-center gap-1">
                Recipes
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card z-50">
                <DropdownMenuItem asChild>
                  <Link to="/recipes" className="cursor-pointer">
                    All Recipes
                  </Link>
                </DropdownMenuItem>
                {categories.map((cat) => (
                  <DropdownMenuItem key={cat.path} asChild>
                    <Link to={cat.path} className="cursor-pointer">
                      {cat.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem asChild>
                  <Link to="/recipes?category=dairy" className="cursor-pointer">
                    Dairy
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/about" className="text-foreground hover:text-primary transition-smooth">
              About
            </Link>
            
            <Link to="/contact" className="text-foreground hover:text-primary transition-smooth">
              Contact
            </Link>

            <a 
              href="https://instagram.com/cooking_bel_beit/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-smooth"
            >
              <Instagram className="w-5 h-5" />
            </a>

            <a 
              href="https://www.youtube.com/@cookingbelbeit/featured" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-smooth"
            >
              <Youtube className="w-5 h-5" />
            </a>

            <a 
              href="https://www.facebook.com/people/Cookingbelbeit/61558611525210/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-smooth"
            >
              <Facebook className="w-5 h-5" />
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
              <DropdownMenuContent className="bg-card z-50 w-56" align="end">
                <DropdownMenuItem asChild>
                  <Link to="/recipes">All Recipes</Link>
                </DropdownMenuItem>
                
                {/* Categories Sub-dropdown */}
                <Collapsible open={categoriesOpen} onOpenChange={setCategoriesOpen}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full px-2 py-1.5 text-sm hover:bg-accent rounded-sm cursor-pointer">
                    Categories
                    <ChevronDown className={`w-4 h-4 transition-transform ${categoriesOpen ? 'rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pl-4 space-y-1">
                    {categories.map((cat) => (
                      <DropdownMenuItem key={cat.path} asChild>
                        <Link to={cat.path}>{cat.name}</Link>
                      </DropdownMenuItem>
                    ))}
                    <DropdownMenuItem asChild>
                      <Link to="/recipes?category=dairy">Dairy</Link>
                    </DropdownMenuItem>
                  </CollapsibleContent>
                </Collapsible>

                <DropdownMenuItem asChild>
                  <Link to="/about">About</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/contact">Contact</Link>
                </DropdownMenuItem>

                {/* Socials Sub-dropdown */}
                <Collapsible open={socialsOpen} onOpenChange={setSocialsOpen}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full px-2 py-1.5 text-sm hover:bg-accent rounded-sm cursor-pointer">
                    Socials
                    <ChevronDown className={`w-4 h-4 transition-transform ${socialsOpen ? 'rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pl-4 space-y-1">
                    <DropdownMenuItem asChild>
                      <a href="https://instagram.com/cooking_bel_beit/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Instagram className="w-4 h-4" />
                        Instagram
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <a href="https://www.youtube.com/@cookingbelbeit/featured" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Youtube className="w-4 h-4" />
                        YouTube
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <a href="https://www.facebook.com/people/Cookingbelbeit/61558611525210/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Facebook className="w-4 h-4" />
                        Facebook
                      </a>
                    </DropdownMenuItem>
                  </CollapsibleContent>
                </Collapsible>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

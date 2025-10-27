import { useState } from "react";
import { Button } from "@/components/ui/button";
import chefHero from "@/assets/chef-hero.jpg";

interface WelcomeOverlayProps {
  onEnter: () => void;
}

export const WelcomeOverlay = ({ onEnter }: WelcomeOverlayProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleEnter = () => {
    setIsVisible(false);
    onEnter();
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-background flex items-center justify-center transition-opacity duration-300"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left: Welcome Copy */}
          <div className="space-y-6">
            <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight text-foreground">
              Welcome to<br />
              <span className="text-primary">Cooking bel beit</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I’m Katia, the mom-cook behind @cooking_bel_beit, sharing simple, healthy Lebanese 
              family recipes inspired by our village life near Beirut. I focus on seasonal produce, 
              olive-oil cooking, and practical tips on where to source fresh ingredients and beautiful, 
              useful kitchen tools. My goal is to inspire newlyweds and young moms to cook with love 
              for their families and friends—and to help newcomers discover and enjoy Lebanese cuisine.
            </p>
            <Button 
              size="lg" 
              onClick={handleEnter}
              className="hero-gradient border-0 text-white text-lg px-8 py-6 h-auto"
            >
              Enter the Kitchen
            </Button>
          </div>

          {/* Right: Chef Photo */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden card-shadow">
              <img 
                src={chefHero}
                alt="Chef Katia smiling in the kitchen"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

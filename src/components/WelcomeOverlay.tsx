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
              Hello,
              I am Katia the cook Mom behind @cooking_bel_beit.
              My journey with food started when I became a mother. Introducing solid food to my babies and the importance of instilling a sense of good taste and healthy habits from the very beginning got me hooked to the smells, the pots, the eggs, the sugar, the butter.
              My kitchen became the warmest place in my home, not only because of the oven heat but because of the warmth of the family and the warmth of love; the love of cooking.
              My Instagram journey started on a beautiful sunny day. I was grilling fish when my teenage son took pictures, created an Instagram account, posted the pictures, and said: “Mom your dishes always bring us together, lets show your love of food.”
              And here I am, hooked, cooking and sharing.
              I am lucky to live in one of the smallest, most beautiful country in the world, Lebanon. Our healthy cuisine is rich with an abundance of whole grains, vegetables, fresh Mediterranean fish and olive oil, lots of olive oil.
              I live in a tranquil village not far from Beirut, with my husband and two sons. Our house, surrounded by olive trees our garden is a big happy place where cousins grew up together, climbed trees, lied down on the grass and played with the dog and the cat, and where adults gathered around a large wooden table under the mulberry tree raised their glasses of wine, Arak and enjoyed healthy traditional food. My Tabbouleh and Fattouch are always prepared with fresh vegetables from the garden, and my quiches and cakes are made from the fresh eggs of our chickens.
              Cooking changed my life, it became funnier ,healthier and closer to nature, what I love is to inspire newly married couples, especially young mom’s to cook for their children, families and friends ,and to cooks, not familiar with Lebanese cuisine to discover it and try it.
              I also want to share cooking tips that I learned over time, and show the right places where to buy fresh ingredients and shops where to find beautiful kitchen tools.
              Lots of Lovvvvv.
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

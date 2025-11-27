import { useState } from "react";
import { Button } from "@/components/ui/button";

interface WelcomeOverlayProps {
  onEnter: () => void;
  isVisible: boolean;
}

export const WelcomeOverlay = ({ onEnter, isVisible }: WelcomeOverlayProps) => {
  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-background overflow-y-auto transition-opacity duration-300"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <div className="min-h-full flex flex-col md:items-center md:justify-center py-8 md:py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 md:items-center max-w-6xl mx-auto">
            {/* Chef Photo - Shows first on mobile */}
            <div className="relative md:order-2">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden card-shadow max-w-sm mx-auto md:max-w-none">
                <img 
                  src="/cbb/images/chef-hero.jpg"
                  alt="Chef Katia smiling in the kitchen"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Welcome Copy - Shows second on mobile */}
            <div className="space-y-4 md:space-y-6 md:order-1">
              <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                Welcome to<br />
                <span className="text-primary">Cooking bel beit</span>
              </h1>
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                I'm Katia, the mom-cook behind @cooking_bel_beit, sharing simple, healthy Lebanese 
                family recipes inspired by our village life near Beirut. I focus on seasonal produce, 
                olive-oil cooking, and practical tips on where to source fresh ingredients and beautiful, 
                useful kitchen tools. My goal is to inspire newlyweds and young moms to cook with love 
                for their families and friends—and to help newcomers discover and enjoy Lebanese cuisine.
              </p>
              
              {/* Button inline on desktop only */}
              <div className="hidden md:block">
                <Button 
                  size="lg" 
                  onClick={onEnter}
                  className="hero-gradient border-0 text-white text-lg px-8 py-6 h-auto"
                >
                  Enter the Kitchen
                </Button>
              </div>
            </div>
          </div>

          {/* Button at bottom center on mobile only */}
          <div className="flex justify-center mt-8 md:hidden">
            <Button 
              size="lg" 
              onClick={onEnter}
              className="hero-gradient border-0 text-white text-lg px-8 py-6 h-auto w-full max-w-xs"
            >
              Enter the Kitchen
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

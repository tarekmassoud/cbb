import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="font-serif text-5xl font-bold mb-4 text-foreground">
              About Chef Katia
            </h1>
            <p className="text-xl text-muted-foreground">
              Cooking from the heart, sharing with the world
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden card-shadow">
              <img 
                src="/images/chef-hero.jpg"
                alt="Chef Katia in the kitchen"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                Welcome to Cooking bel beit! I'm Chef Katia, and I've been sharing 
                the joy of Lebanese cooking with food lovers around 
                the world through my Instagram page.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Growing up in a Lebanese household, I learned that the best meals 
                are made with love, simple ingredients, and time-tested techniques 
                passed down through generations. My mission is to make these 
                authentic flavors accessible to everyone.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Every recipe you'll find here is something I've cooked countless 
                times in my own kitchen. From weeknight favorites to special 
                occasion dishes, these are the meals that bring my family and 
                friends together around the table.
              </p>
              <div className="pt-4">
                <a 
                  href="https://instagram.com/cooking_bel_beit/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="hero-gradient border-0 text-white">
                    <Instagram className="mr-2 w-5 h-5" />
                    Follow My Journey
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-accent/30 rounded-2xl p-8 md:p-12">
            <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">
              What You'll Find Here
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  Authentic Recipes
                </h3>
                <p className="text-muted-foreground">
                  Traditional Lebanese and Mediterranean dishes made with authentic 
                  ingredients and techniques.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  Clear Instructions
                </h3>
                <p className="text-muted-foreground">
                  Step-by-step guides that make even complex dishes approachable 
                  for home cooks.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  Video Guides
                </h3>
                <p className="text-muted-foreground">
                  Watch along on Instagram as I demonstrate each recipe in real-time.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  Family Tested
                </h3>
                <p className="text-muted-foreground">
                  Every recipe has been perfected through years of cooking for 
                  family and friends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-card border-t py-8 px-6 mt-16">
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

export default About;

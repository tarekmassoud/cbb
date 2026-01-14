import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
const About = () => {
  return <div className="min-h-screen">
      <Navigation />

      <main className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="font-serif text-5xl font-bold mb-4 text-foreground">
              About me
            </h1>
            <p className="text-xl text-muted-foreground">
              Cooking from the heart, sharing with the world
            </p>
          </div>

          {/* Top section: Image + What You'll Find Here side by side */}
          <div className="grid md:grid-cols-2 gap-8 items-stretch mb-12">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden card-shadow">
              <img src="/images/chef-hero.jpg" alt="Katia in the kitchen" className="w-full h-full object-cover" />
            </div>

            <div className="flex flex-col">
              <div className="bg-accent/30 rounded-2xl pt-6 md:pt-8 pb-4 md:pb-5 px-6 md:px-8 text-center flex-1 flex-col gap-[15px] flex items-center justify-start">
                <h2 className="font-serif text-3xl font-bold mb-4 text-foreground">
                  What You'll Find Here
                </h2>
                <div className="flex flex-col gap-3">
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-foreground">
                      Authentic Recipes
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Traditional Lebanese and International dishes made with authentic 
                      ingredients and techniques.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-foreground">
                      Clear Instructions
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Step-by-step guides that make even complex dishes approachable 
                      for home cooks.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-foreground">
                      Video Guides
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Watch along on Instagram as I demonstrate each recipe in real-time.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-foreground">
                      Family Tested
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Every recipe has been perfected through years of cooking for 
                      family and friends.
                    </p>
                  </div>
                </div>
              </div>
              <a href="https://instagram.com/cooking_bel_beit/" target="_blank" rel="noopener noreferrer" className="mt-6 w-full">
                <Button size="lg" className="hero-gradient border-0 text-white w-full">
                  <Instagram className="mr-2 w-5 h-5" />
                  Follow My Journey
                </Button>
              </a>
            </div>
          </div>

          {/* Bio text section below */}
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              Welcome to Cooking bel beit! I'm Katia, and I've been sharing 
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
          </div>
        </div>
      </main>

      <footer className="bg-card border-t py-8 px-6 mt-16">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Cooking bel beit. Follow on{" "}
            <a href="https://instagram.com/cooking_bel_beit/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Instagram
            </a>
          </p>
        </div>
      </footer>
    </div>;
};
export default About;
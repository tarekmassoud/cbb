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
              Hello, I am Katia the cook Mom behind @cooking_bel_beit. 
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              My Journey with food started when I became a mother. Introducing 
              solid food to my babies and the importance of instilling a sense 
              of good taste and healthy habits from the very beginning got me 
              hooked to the smells, the pots, the eggs, the sugar, the butter. 
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              My kitchen became the warmest place in my home, not only because 
              of the oven heat but because of the warmth of the family and the 
              warmth of love; the love of cooking.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              My instagram journey started on a beautiful sunny day. I was grilling 
              fish when my teenage son took pictures, created an Instagram account, 
              posted the pictures, and said: “Mom your dishes always bring us 
              together, lets show your love of food.”
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              And here I am, hooked, cooking and sharing!
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              I am lucky to live in one of the smallest, most beautiful country 
              in the world, Lebanon. Our healthy cuisine is rich with an abundance 
              of whole grains, vegetables, fresh Mediterranean fish and olive oil, 
              lots of olive oil.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              I live in a tranquil village not far from Beirut, with my husband 
              and two sons. Our house is surrounded by olive trees and our garden 
              is a big happy place where cousins grew up together, climbed trees, 
              lied down on the grass and played with the dog and the cats, and 
              where adults gathered around a large wooden table under the mulberry 
              tree raised their glasses of wine and arak and enjoyed healthy 
              traditional food. My Tabbouleh and Fattouch are always prepared 
              with fresh vegetables from the garden, and my quiches and cakes 
              are made from the fresh eggs of our chickens. 
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Cooking changed my life, it became funnier, and it made me healthier 
              and closer to nature. My passion is to inspire newly married couples, 
              especially young moms to cook for their children, families and 
              friends, and to spread my love for the Lebanese cuisine. 
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              I also love to share cooking tips that I learned over time, and 
              show the right places where to buy fresh ingredients and shops 
              where to find beautiful kitchen tools. 
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Lots of  Lovvvvv.
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
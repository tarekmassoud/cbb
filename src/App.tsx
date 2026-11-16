import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import AllRecipes from "./pages/AllRecipes";
import RecipeDetail from "./pages/RecipeDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Sends a GoatCounter pageview on every route change (single-page app)
const GoatCounterTracker = () => {
  const location = useLocation();
  useEffect(() => {
    const path = location.pathname + location.search;
    let attempts = 0;
    const send = () => {
      const goatcounter = (window as any).goatcounter;
      if (goatcounter && typeof goatcounter.count === "function") {
        goatcounter.count({ path });
      } else if (attempts < 20) {
        attempts += 1;
        setTimeout(send, 250);
      }
    };
    send();
  }, [location.pathname, location.search]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <GoatCounterTracker />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/recipes" element={<AllRecipes />} />
          <Route path="/recipe/:slug" element={<RecipeDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";
import { componentTagger } from "lovable-tagger";

// ESM-safe __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  // GitHub Pages project site base
  base: "/cbb/",

  server: {
    host: "::",
    port: 8080,
  },

  build: { sourcemap: true },  

  plugins: [react(), componentTagger()].filter(Boolean) as any,

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

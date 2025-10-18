import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";
import { componentTagger } from "lovable-tagger";

// --- ESM-safe __dirname ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const repo = "cbb";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Needed for GitHub Pages (project site):
  // - use '/<repo>/' in production
  // - '/' locally
  base: mode === "production" ? `/${repo}/` : "/",

  server: {
    host: "::",
    port: 8080,
  },

  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean) as any,

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

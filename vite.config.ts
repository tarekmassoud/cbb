import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";
import { componentTagger } from "lovable-tagger";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => ({
  base: "/",                  // GitHub Pages project path
  server: { host: "::", port: 8080 },
  build: { sourcemap: true },     // <-- show real file/line in prod

  // keep lovable-tagger strictly dev-only
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean) as any,

  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
}));

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONTENT_DIR = path.join(__dirname, '../public/content/recipes');
const DATA_DIR = path.join(__dirname, '../public/data');
const PUBLIC_DIR = path.join(__dirname, '../public');
const OUTPUT_FILE = path.join(DATA_DIR, 'recipes.index.json');
const SITEMAP_FILE = path.join(PUBLIC_DIR, 'sitemap.xml');
const LLMS_FILE = path.join(PUBLIC_DIR, 'llms.txt');

const BASE_URL = 'https://cookingbelbeit.com';

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;

  const frontmatter = {};
  const lines = match[1].split('\n');

  for (const line of lines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) continue;

    const key = line.slice(0, colonIndex).trim();
    let value = line.slice(colonIndex + 1).trim();

    if (value.startsWith('"') && value.endsWith('"')) {
      value = value.slice(1, -1);
    }
    if (value.startsWith('[') && value.endsWith(']')) {
      try {
        value = JSON.parse(value);
      } catch {
        value = [];
      }
    }
    if (!isNaN(value) && value !== '') {
      value = Number(value);
    }
    if (value === 'true') value = true;
    if (value === 'false') value = false;

    frontmatter[key] = value;
  }

  return frontmatter;
}

const recipes = [];
const files = fs.readdirSync(CONTENT_DIR);

for (const file of files) {
  if (!file.endsWith('.md')) continue;

  const content = fs.readFileSync(path.join(CONTENT_DIR, file), 'utf-8');
  const meta = parseFrontmatter(content);

  if (meta) {
    recipes.push({
      id: meta.id,
      title: meta.title,
      slug: meta.slug,
      short_description: meta.short_description,
      image: meta.image,
      prepTime: meta.prepTime,
      servings: meta.servings,
      difficulty: meta.difficulty,
      cuisine: meta.cuisine,
      course: meta.course,
      tags: meta.tags || [],
      keywords: meta.keywords || [],
      featured: meta.featured || false,
      rating: meta.rating,
      date_published: meta.date_published
    });
  }
}

// Sort newest-first
recipes.sort((a, b) => new Date(b.date_published || 0) - new Date(a.date_published || 0));

fs.mkdirSync(DATA_DIR, { recursive: true });
fs.writeFileSync(OUTPUT_FILE, JSON.stringify(recipes, null, 2));
console.log(`✓ Built index with ${recipes.length} recipes → ${OUTPUT_FILE}`);

// Generate sitemap.xml
const staticRoutes = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/recipes', changefreq: 'weekly', priority: '0.8' },
  { path: '/about', changefreq: 'monthly', priority: '0.6' },
  { path: '/contact', changefreq: 'monthly', priority: '0.6' },
];

const sitemapUrls = [
  ...staticRoutes.map((r) => {
    const lastmod = new Date().toISOString().split('T')[0];
    return [
      '  <url>',
      `    <loc>${BASE_URL}${r.path}</loc>`,
      `    <lastmod>${lastmod}</lastmod>`,
      `    <changefreq>${r.changefreq}</changefreq>`,
      `    <priority>${r.priority}</priority>`,
      '  </url>',
    ].join('\n');
  }),
  ...recipes.map((r) => {
    const lastmod = r.date_published || new Date().toISOString().split('T')[0];
    return [
      '  <url>',
      `    <loc>${BASE_URL}/recipe/${r.slug}</loc>`,
      `    <lastmod>${lastmod}</lastmod>`,
      '    <changefreq>weekly</changefreq>',
      '    <priority>0.7</priority>',
      '  </url>',
    ].join('\n');
  }),
];

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...sitemapUrls,
  '</urlset>',
].join('\n');

fs.writeFileSync(SITEMAP_FILE, sitemap);
console.log(`✓ Generated sitemap.xml with ${staticRoutes.length + recipes.length} URLs → ${SITEMAP_FILE}`);

// Generate llms.txt
const featuredRecipes = recipes.filter((r) => r.featured).slice(0, 10);
const allRecipeLinks = recipes.map((r) => `- [/recipe/${r.slug}](/recipe/${r.slug}): ${r.short_description || r.title}`);

const llmsTxt = [
  '# Cooking Bel Beit',
  '',
  '> Home-style Lebanese and Mediterranean recipes from Katia\'s kitchen, with step-by-step instructions for everyday cooking.',
  '',
  'Cooking Bel Beit is a recipe collection by Katia, the cook and mom behind @cooking_bel_beit. The site features traditional Lebanese dishes, international favorites, breads, desserts, salads, soups, and family-tested meals. Each recipe includes ingredients, grouped instructions, cooking time, servings, and printable formatting. Recipes are organized by category and can be browsed or searched directly from the homepage.',
  '',
  '## Pages',
  '',
  '- [/](/): Featured recipes and category highlights.',
  '- [/recipes](/recipes): Browse all recipes in one searchable list.',
  '- [/about](/about): About Katia, her cooking journey, and what you\'ll find on the site.',
  '- [/contact](/contact): Get in touch or share feedback.',
  '',
  '## Featured Recipes',
  '',
  ...featuredRecipes.map((r) => `- [/recipe/${r.slug}](/recipe/${r.slug}): ${r.short_description || r.title}`),
  '',
  '## All Recipes',
  '',
  ...allRecipeLinks,
  '',
  '## Optional',
  '',
  '- [Instagram @cooking_bel_beit](https://instagram.com/cooking_bel_beit/): Follow Katia for daily cooking videos and behind-the-scenes updates.',
  '',
].join('\n');

fs.writeFileSync(LLMS_FILE, llmsTxt);
console.log(`✓ Generated llms.txt with ${recipes.length} recipes → ${LLMS_FILE}`);

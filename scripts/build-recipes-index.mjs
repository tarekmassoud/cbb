import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONTENT_DIR = path.join(__dirname, '../content/recipes');
const OUTPUT_FILE = path.join(__dirname, '../public/data/recipes.index.json');

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
      value = JSON.parse(value);
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

fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
fs.writeFileSync(OUTPUT_FILE, JSON.stringify(recipes, null, 2));

console.log(`✓ Built index with ${recipes.length} recipes → ${OUTPUT_FILE}`);

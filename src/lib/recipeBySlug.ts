export interface RecipeSection {
  title?: string;
  items: string[];
}

export interface RecipeMeta {
  id: string;
  title: string;
  slug: string;
  short_description: string;
  description: string;
  image: string;
  prepTime: number;
  cookTime: number;
  totalTime: number;
  servings: string;
  difficulty: "Easy" | "Medium" | "Advanced";
  cuisine: string;
  course: string;
  tags: string[];
  keywords?: string[];
  video_url?: string;
  featured: boolean;
  rating?: number;
  date_published: string;
}

export interface Recipe {
  meta: RecipeMeta;
  ingredients: string[] | RecipeSection[];
  instructions: string[] | RecipeSection[];
}

function parseFrontmatter(content: string) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;
  
  const frontmatter: any = {};
  const lines = match[1].split('\n');
  
  for (const line of lines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) continue;
    
    const key = line.slice(0, colonIndex).trim();
    let value: any = line.slice(colonIndex + 1).trim();
    
    if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
    if (value.startsWith('[')) value = JSON.parse(value);
    if (!isNaN(value as any) && value !== '') value = Number(value);
    if (value === 'true') value = true;
    if (value === 'false') value = false;
    
    frontmatter[key] = value;
  }
  
  return frontmatter;
}

function parseMarkdownSections(content: string) {
  const bodyMatch = content.match(/---\n[\s\S]*?\n---\n([\s\S]*)/);
  if (!bodyMatch) return { ingredients: [], instructions: [] };
  
  const body = bodyMatch[1];
  const ingredientsMatch = body.match(/## Ingredients\n([\s\S]*?)(?=\n## Instructions)/);
  const instructionsMatch = body.match(/## Instructions\n([\s\S]*?)$/);
  
  const parseSection = (text: string): string[] | RecipeSection[] => {
    const lines = text.trim().split('\n').filter(l => l.trim());
    const hasSubheadings = lines.some(l => l.startsWith('###'));
    
    if (!hasSubheadings) {
      return lines.filter(l => l.startsWith('-') || /^\d+\./.test(l))
        .map(l => l.replace(/^(-|\d+\.)\s*/, '').trim());
    }
    
    const sections: RecipeSection[] = [];
    let currentSection: RecipeSection | null = null;
    
    for (const line of lines) {
      if (line.startsWith('###')) {
        if (currentSection) sections.push(currentSection);
        currentSection = { title: line.replace(/^###\s*/, '').trim(), items: [] };
      } else if (currentSection && (line.startsWith('-') || /^\d+\./.test(line))) {
        currentSection.items.push(line.replace(/^(-|\d+\.)\s*/, '').trim());
      }
    }
    if (currentSection) sections.push(currentSection);
    
    return sections;
  };
  
  return {
    ingredients: ingredientsMatch ? parseSection(ingredientsMatch[1]) : [],
    instructions: instructionsMatch ? parseSection(instructionsMatch[1]) : []
  };
}

export async function fetchRecipeBySlug(slug: string): Promise<Recipe | null> {
  try {
    const BASE_URL = import.meta.env.BASE_URL || '/';
    const response = await fetch(`${BASE_URL}content/recipes/${slug}.md`);
    if (!response.ok) return null;
    
    const content = await response.text();
    const meta = parseFrontmatter(content);
    const { ingredients, instructions } = parseMarkdownSections(content);
    
    if (!meta) return null;
    
    // Prepend BASE_URL to image path if it starts with /
    if (meta.image && meta.image.startsWith('/')) {
      meta.image = BASE_URL + meta.image.substring(1);
    }
    
    return { meta: meta as RecipeMeta, ingredients, instructions };
  } catch {
    return null;
  }
}

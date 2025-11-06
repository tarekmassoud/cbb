# Recipe Management Guide

## Overview

Recipes are stored as markdown files in `/public/content/recipes/` with YAML frontmatter. Images are in `/public/images/recipes/`. A build script generates a lightweight index for fast listing pages.

## Adding a New Recipe

1. **Create markdown file**: `/public/content/recipes/your-recipe-slug.md`

```markdown
---
id: "19"
title: "Your Recipe Name"
slug: "your-recipe-slug"
short_description: "Brief one-line description"
description: "Longer description for detail page"
image: "/images/recipes/your-image.jpg"
prepTime: 15
cookTime: 30
totalTime: 45
servings: "4"
difficulty: "Easy"
cuisine: "Lebanese"
course: "Main"
tags: ["tag1", "tag2"]
keywords: ["keyword"]
video_url: "https://instagram.com/..."
featured: false
rating: 4.5
date_published: "2025-11-06"
---

## Ingredients

- Item 1
- Item 2

## Instructions

1. Step 1
2. Step 2
```

2. **Add image**: Place in `/public/images/recipes/your-image.jpg`

3. **Build index**: Run `npm run build:recipes` before deploying

## Grouped Ingredients/Instructions

Use `###` for subsections:

```markdown
## Ingredients

### For the Dough
- flour
- yeast

### For the Filling
- cheese
- herbs
```

## Build Process

```bash
npm run build:recipes  # Generates /public/data/recipes.index.json
npm run build          # Runs build:recipes then vite build
```

## Deployment

GitHub Actions automatically runs the build script on every push.

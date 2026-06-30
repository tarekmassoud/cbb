import { useEffect } from "react";
import type { Recipe, RecipeSection } from "@/lib/recipeBySlug";

const SITE_URL = "https://cookingbelbeit.com";

function toISO8601Duration(minutes: number): string | undefined {
  if (!minutes || minutes <= 0) return undefined;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `PT${h ? `${h}H` : ""}${m ? `${m}M` : ""}` || "PT0M";
}

function flattenSection(items: string[] | RecipeSection[]): string[] {
  if (!items || items.length === 0) return [];
  if (typeof items[0] === "string") return items as string[];
  return (items as RecipeSection[]).flatMap((s) => s.items);
}

interface Props {
  recipe: Recipe;
}

export const RecipeJsonLd = ({ recipe }: Props) => {
  useEffect(() => {
    const { meta } = recipe;
    const ingredients = flattenSection(recipe.ingredients);
    const steps = flattenSection(recipe.instructions);

    const imageUrl = meta.image?.startsWith("http")
      ? meta.image
      : `${SITE_URL}${meta.image?.startsWith("/") ? "" : "/"}${meta.image || ""}`;

    const data: Record<string, unknown> = {
      "@context": "https://schema.org",
      "@type": "Recipe",
      name: meta.title,
      description: meta.description || meta.short_description,
      image: imageUrl ? [imageUrl] : undefined,
      author: { "@type": "Person", name: "Katia" },
      datePublished: meta.date_published,
      prepTime: toISO8601Duration(meta.prepTime),
      cookTime: toISO8601Duration(meta.cookTime),
      totalTime: toISO8601Duration(meta.totalTime),
      recipeYield: meta.servings,
      recipeCuisine: meta.cuisine,
      recipeCategory: meta.course,
      keywords: [...(meta.tags || []), ...(meta.keywords || [])].join(", ") || undefined,
      recipeIngredient: ingredients,
      recipeInstructions: steps.map((text, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        text,
      })),
      video: meta.video_url
        ? { "@type": "VideoObject", name: meta.title, contentUrl: meta.video_url, embedUrl: meta.video_url }
        : undefined,
    };

    // Strip undefined values
    Object.keys(data).forEach((k) => data[k] === undefined && delete data[k]);

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-recipe-jsonld", meta.slug);
    script.text = JSON.stringify(data);
    document.head.appendChild(script);

    // Update canonical link
    const existingCanonical = document.querySelector("link[rel='canonical'][data-recipe='true']");
    if (existingCanonical) existingCanonical.remove();
    const canonical = document.createElement("link");
    canonical.rel = "canonical";
    canonical.setAttribute("data-recipe", "true");
    canonical.href = `${SITE_URL}/recipe/${meta.slug}`;
    document.head.appendChild(canonical);

    return () => {
      script.remove();
      canonical.remove();
    };
  }, [recipe]);

  return null;
};

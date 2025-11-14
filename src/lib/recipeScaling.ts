// Utility functions for scaling recipe ingredient quantities

interface ParsedQuantity {
  value: number;
  unit: string;
  prefix: string;
  suffix: string;
}

/**
 * Parse a quantity from text (supports whole, decimal, fractions, mixed fractions, ranges)
 * Examples: "2", "1.5", "1/2", "1 1/2", "3-4"
 */
function parseQuantity(text: string): number | null {
  // Handle fractions like "1/2" or "1 1/2"
  const mixedFractionMatch = text.match(/(\d+)\s+(\d+)\/(\d+)/);
  if (mixedFractionMatch) {
    const whole = parseInt(mixedFractionMatch[1]);
    const num = parseInt(mixedFractionMatch[2]);
    const denom = parseInt(mixedFractionMatch[3]);
    return whole + num / denom;
  }

  const fractionMatch = text.match(/(\d+)\/(\d+)/);
  if (fractionMatch) {
    return parseInt(fractionMatch[1]) / parseInt(fractionMatch[2]);
  }

  // Handle ranges like "3-4" (take midpoint)
  const rangeMatch = text.match(/(\d+(?:\.\d+)?)\s*[-–]\s*(\d+(?:\.\d+)?)/);
  if (rangeMatch) {
    const start = parseFloat(rangeMatch[1]);
    const end = parseFloat(rangeMatch[2]);
    return (start + end) / 2;
  }

  // Handle decimals and whole numbers
  const numberMatch = text.match(/\d+(?:\.\d+)?/);
  if (numberMatch) {
    return parseFloat(numberMatch[0]);
  }

  return null;
}

/**
 * Convert a decimal number to a fraction string if it's a common fraction
 */
function toFraction(value: number): string {
  const commonFractions: [number, string][] = [
    [0.125, '1/8'],
    [0.25, '1/4'],
    [0.333, '1/3'],
    [0.375, '3/8'],
    [0.5, '1/2'],
    [0.625, '5/8'],
    [0.666, '2/3'],
    [0.75, '3/4'],
    [0.875, '7/8'],
  ];

  const whole = Math.floor(value);
  const decimal = value - whole;

  if (decimal < 0.05) {
    return whole.toString();
  }

  // Find closest common fraction
  for (const [decimalVal, fractionStr] of commonFractions) {
    if (Math.abs(decimal - decimalVal) < 0.05) {
      return whole > 0 ? `${whole} ${fractionStr}` : fractionStr;
    }
  }

  // Round to 2 decimals if not a common fraction
  return value.toFixed(2).replace(/\.?0+$/, '');
}

/**
 * Parse an ingredient line and extract quantity information
 */
export function parseIngredient(ingredientText: string): ParsedQuantity | null {
  const text = ingredientText.trim();

  // Skip items without quantities or with non-scalable phrases
  const skipPatterns = [
    /^to taste/i,
    /^a pinch/i,
    /^pinch of/i,
    /^salt and pepper/i,
    /^for serving/i,
    /^optional/i,
  ];

  for (const pattern of skipPatterns) {
    if (pattern.test(text)) {
      return null;
    }
  }

  // Match quantity patterns at the start of the line
  const quantityPattern = /^([\d\s\/.-]+)\s*([a-zA-Z]+)?/;
  const match = text.match(quantityPattern);

  if (!match) {
    return null;
  }

  const quantityStr = match[1].trim();
  const unit = match[2] || '';
  const quantity = parseQuantity(quantityStr);

  if (quantity === null) {
    return null;
  }

  // Find where the quantity ends in the original text
  const quantityEndIndex = text.indexOf(match[0]) + match[0].length;

  return {
    value: quantity,
    unit: unit,
    prefix: '',
    suffix: text.substring(quantityEndIndex).trim(),
  };
}

/**
 * Scale a quantity by a factor
 */
export function scaleQuantity(quantity: number, factor: number): number {
  return quantity * factor;
}

/**
 * Format a scaled quantity as a string
 */
export function formatQuantity(value: number): string {
  return toFraction(value);
}

/**
 * Scale an entire ingredient line
 */
export function scaleIngredient(ingredientText: string, factor: number): string {
  const parsed = parseIngredient(ingredientText);

  if (!parsed) {
    return ingredientText; // Return as-is if can't parse
  }

  const scaledValue = scaleQuantity(parsed.value, factor);
  const formattedValue = formatQuantity(scaledValue);

  // Reconstruct the ingredient text
  const parts = [formattedValue];
  if (parsed.unit) {
    parts.push(parsed.unit);
  }
  if (parsed.suffix) {
    parts.push(parsed.suffix);
  }

  return parts.join(' ');
}

/**
 * Parse servings from text (handles "4", "4-6", "4 servings", etc.)
 */
export function parseServings(servingsText: string): number {
  const match = servingsText.match(/(\d+)/);
  return match ? parseInt(match[1]) : 1;
}

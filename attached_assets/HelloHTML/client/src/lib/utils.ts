import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Create page URLs for routing
export function createPageUrl(pageName: string): string {
  // Return the page name as-is with a leading slash
  // e.g., "RrethNesh" -> "/RrethNesh", "Ballina" -> "/Ballina"
  return `/${pageName}`;
}
